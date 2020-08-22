const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log("Received Request");
    console.log(req.query.cookie);
    res.send("Heyy");
});


app.listen(port, () => console.log(`App active on port ${port}`));
