# Backend Setup

## 🚀 Getting Started  

### 1. Creating the Repository  
```bash
cd backend
```

### 2. Install Dependencies  
```bash
# Install main dependencies
npm install

# Install dev dependencies (testing, linting, live reload)
npm install --save-dev nodemon jest supertest eslint
```

### 3. Environment Variables  
Create a `.env` file in the root of the project:  
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db
```

### 4. Available Scripts  
In **package.json**:  
```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js",
  "test": "jest --runInBand"
}
```

Run them with:  
```bash
# Start server
npm start

# Start server in dev mode (auto-restart on file changes)
npm run dev

# Run tests
npm test
```

---

## 🛠️ Tech Stack  

- **Express** – Web framework  
- **Mongoose** – MongoDB ODM  
- **dotenv** – Environment variable management  
- **cors** – Middleware for handling CORS  
- **nodemon** – Development server auto-reload  
- **jest** – Testing framework  
- **supertest** – HTTP assertions for testing APIs  
- **eslint** – Code linting & quality  
