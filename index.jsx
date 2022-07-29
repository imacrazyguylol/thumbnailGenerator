function replaceContents (newFile) {  
    // =======================================================  
    var idplacedLayerReplaceContents = stringIDToTypeID( "placedLayerReplaceContents" );  
        var desc3 = new ActionDescriptor();  
        var idnull = charIDToTypeID( "null" );  
        desc3.putPath( idnull, new File( newFile ) );  
        var idPgNm = charIDToTypeID( "PgNm" );  
        desc3.putInteger( idPgNm, 1 );  
    executeAction( idplacedLayerReplaceContents, desc3, DialogModes.NO );  
    return app.activeDocument.activeLayer  
};

var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

var template = open(openDialog()[0]);
activeDocument = template;
var docRef = template

docRef.activeLayer = docRef.layers[2];
var commentRef = docRef.activeLayer.textItem;
commentRef.contents = "BALLS";
commentRef = null;

var newBkgImage = new File(""); //map bkg, must be local on device I think
var layerRef = docRef.activeLayer;
layerRef = docRef.layers[length(docRef.layers)]; //lowest layer which would be background
layerRef = replaceContents(newBkgImage);
layerRef = null;



docRef = null;
app.preferences.rulerUnits = originalUnit;