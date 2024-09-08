const express = require("express");
const router = require("./routes/main.route.js");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname,'/index.html'));
})

app.use(router)
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
