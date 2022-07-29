const originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.INCHES;

var artLayerRef = docRef.artLayers.add();
artLayerRef.kind = LayerKind.TEXT;

var textItemRef = artLayerRef.textItem;
textItemRef.contents = "Hello World";

docRef = null;
artLayerRef = null;
textItemRef = null

app.preferences.rulerUnits = originalUnit;