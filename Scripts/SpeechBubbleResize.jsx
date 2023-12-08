function resizeSpeechBubbleToText() {
  // Get the currently selected objects
  var selectedObjects = app.activeDocument.selection;

  // Check if there are exactly two selected objects
  if (selectedObjects.length === 2) {
    // Get the index of the text object
    var textIndex = 0;
    for (var i = 0; i < selectedObjects.length; i++) {
      if (selectedObjects[i].type === "text") {
        textIndex = i;
        break;
      }
    }

    // Get the text object and the speech bubble object
    var textObject = selectedObjects[textIndex];
    var speechBubbleObject = selectedObjects[1 - textIndex];

    // Get the width and height of the text object
    var textWidth = textObject.width;
    var textHeight = textObject.height;

    // Add 0.0822 inches to the width of the speech bubble object
    textWidth += 0.0822 * 72 * 2;

    // Add 0.0937 inches to the height of the speech bubble object
    textHeight += 0.0937 * 72 * 2;

    // Set the width and height of the speech bubble object
    speechBubbleObject.width = textWidth;
    speechBubbleObject.height = textHeight;
      
        // Center the text object within the speech bubble object
    speechBubbleObject.textArea.align = "center";
    speechBubbleObject.textArea.baseline = "middle";
  }
}

try{
    resizeSpeechBubbleToText();
    alert( "Run", "Script Alert", true);
}catch(e) {
	alert( e.message, "Script Alert", true);
}
