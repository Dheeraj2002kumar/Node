const express = require("express");
const users = require("./api.json");

const app = express();
const PORT = 8000;

// Routes
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/user", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));