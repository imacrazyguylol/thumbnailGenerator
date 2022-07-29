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
var templateRef = template

templateRef.activeLayer = templateRef.layers[2];
var commentRef = templateRef.activeLayer.textItem;
commentRef.contents = "BALLS";

templateRef = null;
artLayerRef = null;
textItemRef = null;

app.preferences.rulerUnits = originalUnit;