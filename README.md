# Calculator App

This project implements a simple calculator using the React library.

## Getting Started

To run the project, follow these steps:

1. Install Node.js on your computer. You can download the Node.js installer from the official website [nodejs.org](https://nodejs.org/). Node.js is required to execute JavaScript code on the server and manage project dependencies.
2. Clone the repository to your computer.
3. In the project directory, run the command `npm install` or `npm i` to install all the necessary dependencies.
4. After installing the dependencies, start the project by running the command `npm start`.
5. Install the Metamask extension for your browser. This is important as the project requires it to function properly.
6. Use the provided test wallet (`1433ce1ec08c988b9631e8f63817e0d102eab4f7d4933328fe91e7673970019a`) for testing.

## Usage

- Make sure Metamask is activated in your browser. The "Calculate" button will be inactive if Metamask is not activated.
- Ensure that your Metamask account is not locked.
- Enter numbers and select an operation in the calculator form.
- Click the "Calculate" button to perform the calculation.
- The calculation result will be displayed in the results section.
- The calculator usage count will be shown if Metamask is activated.

## Notes

- The Metamask extension needs to be installed and activated for this project to work correctly.
- If Metamask is not activated, the "Calculate" button will be inactive, and the "Calculator Usage Count" will be unavailable.
- When performing a calculation, a transaction will be sent using the contract, and the result will be obtained using the contract's `call` function.

