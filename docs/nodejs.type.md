# package.json 的 Type 

## 一、commonjs 和 ES Module（ESM）

CommonJS 模块（type: "commonjs"），这意味着你可以使用 require() 导入模块，使用 module.exports 导出模块。

如果是ES Module（ESM），你需要使用 import 和 export 语法来导入和导出模块。


## 二、默认 commonjs

package.json 文件中的 "type" ， 如果你不显式指定 "type" 字段，Node.js 会将其视为 "type": "commonjs"。


## 三、设置为 type = module

使用 "type": "module" 的影响

1. 文件扩展名要求：当 "type": "module" 被设置时，你必须使用 .js、.mjs（ES Modules 文件） 或 .cjs（CommonJS 文件）扩展名来明确文件的模块类型。
2. 导入导出语法：
   - • ES Module：使用 import 和 export 语法。
   - • CommonJS：使用 require() 和 module.exports。
3. 跨模块互操作性：
	• CommonJS 和 ES Modules 之间有一些互操作性的限制。例如，CommonJS 模块不能动态导入 ES Modules，ES Modules 导入 CommonJS 模块的方式与导入其他 ES 模块有所不同。

## *.mjs

.mjs 是 JavaScript ES Module 的文件扩展名。
Node.js 从 12 版本开始引入了对 ES Modules 的支持，如果你想使用 ES Module 语法（如 import 和 export），你需要把文件名设置为 .mjs，
或者在 package.json 文件中设置 "type": "module"。


## 关于 TypeScript 模块化

1. TypeScript 本身的模块化系统
虽然 TypeScript 依赖于 JavaScript 的模块化系统，但它在类型检查和静态分析方面提供了一些增强功能：
•	类型安全：使用 TypeScript 可以确保模块导入和导出的类型安全，避免运行时的类型错误。
•	智能提示和代码补全：TypeScript 提供强大的开发体验，如自动完成、重构工具和静态分析。
•	声明文件（.d.ts）：TypeScript 使用 .d.ts 文件来定义模块的类型信息，帮助与 JavaScript 库的互操作性。


2. TypeScript 导出 JavaScript
通过配置 tsconfig.json 文件，你可以选择适合你项目的模块化系统进行导出。