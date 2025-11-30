# Pet Adoption/Surrender simple API thingy

---

## Features

- **View list of pets** waiting for adoption.
- **Add a pet surrender  request** with name, type, age (years + months), and reason for surrender (via API or HTML form).
- **User-friendly HTML form** available at `/adopt`
- **Data stored in a local JSON file** (`data/data.json`)
- **Modular, clean Express code.**

---

## Folder Structure

```
TPM_BE_MiniProject1_[Sonia Renata Yacintaman]_[KELAS]/
├── src/
│   ├── config/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   ├── utils/
│   └── app.js
├── data/
│   └── data.json
├── .gitignore
├── .env
├── .env.example
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## How to Run

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Set environment variable (optional):**
   
   By default, the server runs on port 3000. If you want a different port, copy `.env.example` to `.env` and change the number.

3. **Start the server:**
    ```bash
    npm start
    ```
    Or for development with auto-reloading:
    ```bash
    npm run dev
    ```
    
4. **Open your browser or API tool:**

    - **Home/Welcome (JSON):**
      ```
      http://localhost:3000/
      ```
      _Returns a welcome message._

    - **HTML Form to add a pet (user-friendly!):**
      ```
      http://localhost:3000/adopt
      ```
      _Fill out the form, submit — the new pet will be added._

    - **List all pets (JSON):**
      ```
      http://localhost:3000/pets
      ```
      _Shows all pets in your database (`data/data.json`)._

    - **Add a pet using POST /pets**

      POST to `http://localhost:3000/pets`  
      set header: `Content-Type: application/json`  
      Example body:
      ```json
      {
        "name": "Milo",
        "type": "Cat",
        "age": { "years": 1, "months": 6 },
        "reason": "Looking for a loving home"
      }
      ```
      **You can use Postman:**
      ```
      curl -X POST http://localhost:3000/pets \
        -H "Content-Type: application/json" \
        -d '{"name":"Milo","type":"Cat","age":{"years":1,"months":6},"reason":"Looking for a loving home"}'
      ```
      Or just use the `/adopt` HTML form

---

## Example pet data in `data/data.json`

```json
[
  {
    "id": 1701170000000,
    "name": "Milo",
    "type": "Cat",
    "age": { "years": 1, "months": 6 },
    "reason": "Looking for a loving home"
  }
]
```

---
