var express = require('express');
var router = express.Router();
// use axios
const axios = require('axios');
// use dotenv
require('dotenv').config();
// get API key from .env file
const API_KEY = process.env.OPENAI_API_KEY;

/* gpt prompt function */
async function sendQuery(prompt) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

/* GET home page. */
router.get('/', (req, res) => {
  res.send('Homepage');
});

router.get('/test', (req, res) => {
  res.send('Working!');
});

router.post("/ask", async (req, res) => {
  const prompt = req.body.messages[0].content;

  if (!prompt) {
    res.status(400).send("Error: Missing 'prompt' in request body.");
    return;
  }

  const response = await sendQuery(prompt);

  if (response) {
    res.json({ response: response });
  } else {
    res.status(500).send("Error: Unable to get a response from ChatGPT.");
  }
});

module.exports = router;
