var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

var docRef = app.documents.add(1000,1000);
activeDocument = docRef;

var artLayer1 = docRef.artLayers.add();
artLayer1.kind = LayerKind.TEXT;

var textItemRef = artLayer1.textItem;
textItemRef.contents = "Hello World";
textItemRef.color.rgb.hexValue = "BD2D2D";
textItemRef.size = 32;

var artLayer2 = docRef.artLayers.add();
artLayer2.kind = LayerKind.NORMAL; //p much anything like an image



docRef = null;
artLayerRef = null;
textItemRef = null;

app.preferences.rulerUnits = originalUnit;