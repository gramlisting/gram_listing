import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

interface Option {
  value: string;
  label: string;
  group?: string;
}

interface MultiSelectProps {
  options: Option[];
  placeholder?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, placeholder }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelect = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const groupedOptions = filteredOptions.reduce<{ [key: string]: Option[] }>(
    (acc, option) => {
      const group = option.group || "Other";
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(option);
      return acc;
    },
    {},
  );

  return (
    <Popover>
      <PopoverTrigger className="border rounded p-2 w-full cursor-pointer">
        {selectedValues.length > 0
          ? selectedValues.join(", ")
          : placeholder || "Select..."}
      </PopoverTrigger>
      <PopoverContent className="p-4 w-full max-h-60 overflow-y-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter..."
          className="border rounded p-2 w-full mb-2"
        />
        {Object.keys(groupedOptions).map((group) => (
          <div key={group}>
            <div className="font-bold">{group}</div>
            {groupedOptions &&
              groupedOptions[group] &&
              groupedOptions[group].map((option) => (
                <div key={option.value} className="flex items-center mb-2">
                  <Checkbox
                    id={option.value}
                    checked={selectedValues.includes(option.value)}
                    onCheckedChange={() => handleSelect(option.value)}
                  />
                  <label htmlFor={option.value} className="ml-2">
                    {option.label}
                  </label>
                </div>
              ))}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelect;
