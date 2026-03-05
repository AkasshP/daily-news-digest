const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/whatsapp", (req, res) => {

    const incomingMsg = req.body.Body;

    console.log("User message:", incomingMsg);

    const reply = "Hello 👋 AI News Assistant is running.";

    res.set("Content-Type", "text/xml");

    res.send(`
<Response>
<Message>${reply}</Message>
</Response>
`);

});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});