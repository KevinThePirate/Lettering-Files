function organizeSelectedObjects() {
  // Get the currently selected objects
  var selectedObjects = app.activeDocument.selection;

  // Move the first object to the layer with an index of 3
  var firstObject = selectedObjects[0];
  var letteringLayer = app.activeDocument.layers[3];
  firstObject.move(letteringLayer, ElementPlacement.PLACEATBEGINNING);

  // Move the second object to the layer with an index of 4
  var secondObject = selectedObjects[1];
  var balloonLayer = app.activeDocument.layers[4];
  secondObject.move(balloonLayer, ElementPlacement.PLACEATBEGINNING);

  // Move the third and fourth objects to the layer with an index of 6, give them both a stroke color of #020304, and group them together
  var thirdObject = selectedObjects[2];
  var fourthObject = selectedObjects[3];

  // Move the grouped objects to the specified layer
    var underBalloonLayer = app.activeDocument.layers[6];
  thirdObject.move(underBalloonLayer, ElementPlacement.PLACEATBEGINNING);
    fourthObject.move(underBalloonLayer, ElementPlacement.PLACEATBEGINNING);
}
try{
    organizeSelectedObjects()
    alert( "Run", "Script Alert", true);
}catch(e) {
	alert( e.message, "Script Alert", true);
}