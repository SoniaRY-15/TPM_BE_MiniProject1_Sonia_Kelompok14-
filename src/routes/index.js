const express = require("express");
const router = express.Router();
const apiRoutes = require("./apiRoutes");

// home
router.get("/", (req, res) => {
  res.json({
    message: [
      "Welcome to the Pet Adoption Website!",
      "Use /pets to view or /adopt to add pet surrender requests.",
      "(Although you can also use /pets to add via Postman or other API tools)",
    ],
  });
});

//just so we have a simple form to input things --> /adopt
router.get("/adopt", (req, res) => {
  // Simple HTML Form for Pet Surrender
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Post a Pet</title>
        <style>
          body { font-family: Arial; margin: 2em; }
          form, label { display: block; margin-bottom: 1em; }
          label { margin-top: 0.5em; }
          input, textarea, select { margin-bottom: 1em; }
        </style>
      </head>
      <body>
        <h1>Post a Pet Form</h1>
        <form method="POST" action="/pets">
          <label>
            Name:<br>
            <input type="text" name="name" required>
          </label>
          <label>
            Type:<br>
            <input type="text" name="type" required>
          </label>
          <label>
            Age (Years):<br>
            <input type="number" name="ageYears" min="0" value="0">
          </label>
          <label>
            Age (Months):<br>
            <input type="number" name="ageMonths" min="0" max="11" value="0">
          </label>
          <label>
            Reason for surrender:<br>
            <textarea name="reason" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        <hr>
        <p><a href="/pets">View all pets available for adoption</a></p>
      </body>
    </html>
  `);
});

// API routes (for /pets)
router.use("/", apiRoutes);

module.exports = router;
