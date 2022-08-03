function replaceContents (newFile) {  
    // =======================================================  
    var idplacedLayerReplaceContents = stringIDToTypeID( "placedLayerReplaceContents" );  
        var desc5 = new ActionDescriptor();  
        var idnull = charIDToTypeID( "null" );  
        desc5.putPath( idnull, new File( newFile ) );  
    executeAction( idplacedLayerReplaceContents, desc5, DialogModes.NO );  
    return app.activeDocument.activeLayer
};
whateverLayer.kind = LayerKind.SMARTOBJECT 
var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

var docRef = app.documents.add(1000,1000);