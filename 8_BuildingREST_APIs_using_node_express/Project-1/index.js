const express = require("express");
const users = require("./api.json");

const app = express();
const PORT = 8000;

// Routes
// app.get("/api/users", (req, res) => {
//     return res.json(users);
// });

// app.get("/user", (req, res) => {
//     const html = `
//     <ul>
//         ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// });

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })

// create route

app.route("/api/users/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
})
.put((req, res) => {
    // Edit user with id
    res.json({ status: "Pending" });
})
.delete((req, res) => {

})

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
