const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.json({
        "name":"rayees"
    })
})

app.listen(3000, ()=> {
    console.log("App is running at 3000")
})