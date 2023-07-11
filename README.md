# Calculator App

This project implements a simple calculator using React library.

## Getting Started

To run the project, follow these steps:

1. Clone the repository to your local machine.
2. In the project directory, run the command `npm install` or `npm i` to install all the required dependencies.
3. Install the Metamask browser extension. This is crucial as the project relies on Metamask for its functionality.
4. Use the provided test wallet address (`1433ce1ec08c988b9631e8f63817e0d102eab4f7d4933328fe91e7673970019a`) for testing purposes.

## Usage

- Ensure that Metamask is activated in your browser. The "Calculate" button will be inactive if Metamask is not activated.
- Enter the numbers and select the operation in the calculator form.
- Click the "Calculate" button to perform the calculation.
- The result of the calculation will be displayed in the result section.
- The usage count of the calculator will be shown if Metamask is activated.

## Notes

- This project requires the Metamask extension to be installed and activated for proper functionality.
- If Metamask is not activated, the "Calculate" button will be inactive, and the "Calculator used" count will be unavailable.
- When performing a calculation, a transaction will be sent using the contract, and the result will be obtained using the contract's `call` function.

