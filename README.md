# String Calculator

This is a simple string calculator application built with React. It takes a string of numbers as input and calculates their sum. The calculator supports various delimiters, including commas, new lines, and custom delimiters specified at the beginning of the input string.

## Features

* Handles multiple delimiters (commas, newlines, custom).
* Allows defining custom delimiters using the format `//[delimiter]\n[numbers...]`.
* Throws an exception for negative numbers with a clear error message.
* Provides a user-friendly interface with clear instructions and error handling.

## Getting Started

1.  Clone the repository: `git clone <repository-url>`
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run dev`   


## Usage

1.  Enter a string of numbers in the input field.
2.  Use commas, newlines, or custom delimiters to separate the numbers.
3.  Click the "add" button to get the sum.

## Examples

*   "1,2,3" returns 6.
*   "1\n2,3" returns 6.
*   "//;\n1;2" returns 3.
*   "-1,2" throws an exception `"negative numbers not allowed: -1"`.
