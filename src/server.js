var express = require("express");
var app = express();
app.listen(4000, () => {
 console.log("Server running on port 4000");
});
app.set('json spaces', 2)
app.get("/api/alexa", (req, res, next) => {
    res.setHeader('Content-Type', 'application/xml');
    res.type('application/json'); 
    res.json({
        "body": {
            "version": "1.0",
            "response": {
                "outputSpeech": {
                    "type": "PlainText",
                    "text": "Prueba de texto"
                },
                "reprompt": {
                    "outputSpeech": {
                        "type": "PlainText",
                        "text": "Adios"
                    }
                },
            }
        }
    });
   });