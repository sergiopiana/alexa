var express = require("express");
var app = express();
app.listen(4000, () => {
 console.log("Server running on port 4000");
});
app.set('json spaces', 2)
app.post("/api/alexa", (req, res, next) => {
    res.type('application/json'); 
    res.json(
{
  "version": "string",
  "sessionAttributes": {
    "key": "value"
  },
  "response": {
    "outputSpeech": {
      "type": "PlainText",
      "text": "hola, ya va la enfermera en camino",
      "ssml": "<speak>hola, ya va la enfermera en camino</speak>",
      "playBehavior": "REPLACE_ENQUEUED"      
    },
    
    "reprompt": {
      "outputSpeech": {
        "type": "PlainText",
        "text": "Necesitas algo mas?",
        "ssml": "<speak>Necesitas algo mas?</speak>",
        "playBehavior": "REPLACE_ENQUEUED"             
      }
    },

    "shouldEndSession": true
  }
}    
    );
   });
