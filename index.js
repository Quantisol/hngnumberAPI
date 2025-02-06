const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Utility Functions

// Check if the number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Check if the number is Armstrong
function isArmstrong(number) {
  const digits = number.toString().split('').map(Number);
  const sumOfPowers = digits.reduce((sum, digit) => sum + Math.pow(digit, digits.length), 0);
  return sumOfPowers === number;
}

// Get number properties
function getProperties(number) {
  const properties = [];
  if (isArmstrong(number)) properties.push("armstrong");
  properties.push(number % 2 === 0 ? "even" : "odd");
  return properties;
}

// API Endpoint
app.use(cors());

// Route to classify the number
app.get('/api/classify-number', (req, res) => {
  const number = parseInt(req.query.number);

  if (isNaN(number)) {
    return res.status(400).json({ number: req.query.number, error: true });
  }

  const properties = getProperties(number);
  const funFact = `${number} is ${properties.includes('armstrong') ? 'an Armstrong' : 'not an Armstrong'} number`;

  res.status(200).json({
    number,
    is_prime: isPrime(number),
    is_perfect: false, // You can add logic for perfect numbers if needed
    properties,
    digit_sum: number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0),
    fun_fact: funFact,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




  