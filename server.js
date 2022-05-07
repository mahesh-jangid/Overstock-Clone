
const app = require("./src/index");

// npm install concurrently

// Concurrently help us to start both Frontend and Backend Server together

// npm run dev

// In package-json of client put "proxy" : "http://localhost:5000"

const Connectdb = require("./src/configs/db");

require("dotenv").config();

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    try {
        Connectdb();
        console.log("listening on port 5000");
    }
    catch(error) {
        console.log("error :", error);
    }
});