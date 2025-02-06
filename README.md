Number Classification API 🚀
A simple REST API that classifies numbers based on their mathematical properties (prime, perfect, Armstrong, etc.).

📌 Features
Check if a number is prime, perfect, or Armstrong.
Identify if a number is odd or even.
Calculate the sum of digits.
Get a fun fact about the number.
🛠 Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/number-classification-api.git
cd number-classification-api

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
npm run dev
The server will start at http://localhost:3000

API Endpoints
🔹 Classify a Number
GET /api/classify-number?number=<num>

Example request: http://localhost:3000/api/classify-number?number=371

Example response: {
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["odd", "armstrong"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
