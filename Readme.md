# Polynomial Solver

A web application for solving polynomial equations. Users can input polynomial test cases in JSON format, and the app will return the computed results.

## Features

- Paste polynomial test cases in JSON format
- Submit and view results instantly
- Simple, clean UI
- API can be tested live using Postman

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- [Postman](https://www.postman.com/downloads/) (optional, for API testing)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/SRIKANTHLOMTE/polynomial-solver.git
   cd polynomial-solver
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd ../server
   npm install
   ```

### Running the App

1. Start the backend server:
   ```
   cd server
   npm start
   ```

2. Start the frontend React app:
   ```
   cd ../client
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Paste your polynomial test case as JSON in the textarea.
- Click "Solve" to get the results.

## Live API Testing with Postman

You can test the backend API directly using Postman:

1. Open Postman and create a new POST request to:
   ```
   http://localhost:5000/solve
   ```
2. Set the request body to `raw` and select `JSON`.
3. Paste your polynomial test case in JSON format.
4. Click "Send" to view the response.

## Practical Experience

The polynomial solver was developed and tested using real handwritten calculations. For example, given roots r₁ = 4, r₂ = 7, r₃ = 12, the polynomial is constructed as:

P(x) = (x - 4)(x - 7)(x - 12)

Expanding this:
- (x - 4)(x - 7) = x² - 7x - 4x + 28 = x² - 11x + 28
- (x² - 11x + 28)(x - 12) = x³ - 12x² - 11x² + 132x + 28x - 336
- Combine like terms: x³ - 23x² + 160x - 336

So, the coefficients are: `[1, -23, 160, -336]`

This process was verified manually, as shown in the attached image, to ensure the accuracy of the polynomial solver logic.

## Project Structure

```
polynomial-solver/
├── client/   # React frontend
├── server/   # Backend API
└── Readme.md
```