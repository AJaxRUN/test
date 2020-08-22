const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
    console.log(req.query.cookie);
});


app.listen(port, () => console.log(`App active on port ${port}`));
