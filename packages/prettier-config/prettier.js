/**
 * @Author: zhilidali
 * @Description: The best modern prettier config
 */
module.exports = {
  // Fit code within this line limit
  printWidth: 80,

  // Specify the number of spaces per indentation-level
  tabWidth: 2,

  // Indent lines with tabs instead of spaces.
  useTabs: false,

  // semicolons at the ends of statements
  semi: true,

  // use single quotes instead of double quotes
  singleQuote: true, // default = false

  // Change when properties in objects are quoted.
  quoteProps: 'as-needed',

  // Use single quotes instead of double quotes in JSX
  jsxSingleQuote: false,

  // Print trailing commas wherever possible when multi-line
  trailingComma: 'es5',

  // Controls the printing of spaces inside object literals
  bracketSpacing: true,

  // Put the > of a multi-line HTML element at the end of the last line
  bracketSameLine: false,

  // Include parentheses around a sole arrow function parameter
  arrowParens: 'avoid', // default = 'always'

  // Specify the end of line
  endOfLine: 'lf',
};
