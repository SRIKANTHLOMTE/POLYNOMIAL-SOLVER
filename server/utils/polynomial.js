// Convert base-N string to decimal
export function convertToDecimal(value, base) {
  return parseInt(value, base);
}

// Build polynomial coefficients from roots
export function polynomialFromRoots(roots) {
  let coeffs = [1]; // polynomial starts as 1

  for (let r of roots) {
    let newCoeffs = Array(coeffs.length + 1).fill(0);
    for (let i = 0; i < coeffs.length; i++) {
      newCoeffs[i] -= r * coeffs[i]; // multiply by (-r)
      newCoeffs[i + 1] += coeffs[i]; // shift for x term
    }
    coeffs = newCoeffs;
  }

  return coeffs;
}
