"use client";

import * as React from "react";




interface BillingFormProps extends React.HTMLAttributes<HTMLFormElement> {

}

export function BillingForm({
  className,
  ...props
}: BillingFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: { preventDefault: () => void }) {

  }

  return (
    <form  onSubmit={onSubmit} {...props}>

    </form>
  );
}
