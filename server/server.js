import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ----------------------
// Utility Functions
// ----------------------

// Convert a base-N string to decimal
function convertToDecimal(value, base) {
  return parseInt(value, base);
}

// Build polynomial coefficients from given roots
// Example: roots [4, 7, 12] -> x^3 - 23x^2 + 148x - 336
function polynomialFromRoots(roots) {
  let coeffs = [1]; // Start with polynomial = 1

  for (let r of roots) {
    let newCoeffs = Array(coeffs.length + 1).fill(0);
    for (let i = 0; i < coeffs.length; i++) {
      newCoeffs[i] -= r * coeffs[i]; // multiply by (-r)
      newCoeffs[i + 1] += coeffs[i]; // shift for x
    }
    coeffs = newCoeffs;
  }

  return coeffs;
}

// ----------------------
// Routes
// ----------------------

// Test route (for browser)
app.get("/", (req, res) => {
  res.send("✅ Polynomial Solver API is running. Use POST /solve to send data.");
});

// Main POST route
app.post("/solve", (req, res) => {
  try {
    const { keys, ...rootsJson } = req.body;
    const { k } = keys;

    // Step 1: Convert all roots to decimal
    let roots = [];
    for (let key of Object.keys(rootsJson)) {
      let base = parseInt(rootsJson[key].base);
      let val = rootsJson[key].value;
      roots.push(convertToDecimal(val, base));
    }

    // Step 2: Take first k roots
    let selectedRoots = roots.slice(0, k);

    // Step 3: Build polynomial coefficients
    let coeffs = polynomialFromRoots(selectedRoots);

    // Step 4: Send result
    res.json({
      selectedRoots,
      polynomialCoefficients: coeffs
    });
  } catch (err) {
    res.status(400).json({ error: "Invalid input format", details: err.message });
  }
});

// ----------------------
// Server Start
// ----------------------
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
