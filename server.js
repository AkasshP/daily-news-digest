const express = require("express");

const app = express();

// Twilio sends data as urlencoded
app.use(express.urlencoded({ extended: false }));

// WhatsApp webhook
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

// health check route
app.get("/", (req, res) => {
    res.send("Server is alive");
});

// IMPORTANT: Railway requires listening on 0.0.0.0
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});