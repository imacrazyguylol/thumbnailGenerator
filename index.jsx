//constants syntax is this: Constant.VALUE

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

function convertToSmartObject () {
    var desc108 = new ActionDescriptor();
    var ref77 = new ActionReference();
    ref77.putEnumerated( charIDToTypeID( "Mn  " ), charIDToTypeID( "MnIt" ), stringIDToTypeID( "newPlacedLayer" ) );
    desc108.putReference( charIDToTypeID( "null" ), ref77 );
    executeAction( charIDToTypeID( "slct" ), desc108, DialogModes.NO );
};

/*function uToPer (current, incTo) {
    let d = incTo / current;
    return d * 100;
}*/
var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

var template = open(openDialog()[0]);
app.activeDocument = template;
var docRef = app.activeDocument;

//docRef.activeLayer = docRef.layers[2];
//var commentRef = docRef.activeLayer.textItem;
//commentRef.contents = "BALLS";
//commentRef = null;

function srcPrompt() {
    var scoreURL;
    var dlg = new Window('dialog', 'input');
        dlg.add('edittext', {x: 0, y: 0, width: 200, height: 20}, 'Score URL', {name: 'url'});
        EditText.addEventListener('change');
    dlg.show;
}

/*function backgroundReplace() {
    //mostly working, just have to get the percentages consistent

    docRef.activeLayer = docRef.artLayers.add();
        var bkgRef = docRef.activeLayer;
    var openedImage = openDialog()[0];
    var replacementFile = new File(openedImage);

    docRef.activeLayer.name = "background";
        bkgRef.move(docRef, ElementPlacement.PLACEATEND);
        convertToSmartObject();
        replaceContents(replacementFile);
        //docRef.activeLayer.resize(uToPer(/*whatever the standard is for beatmaps, or get from api maybe?* /, 1920), uToPer(/*same* /, 1080), AnchorPosition.MIDDLECENTER);
        docRef.activeLayer.resize(100, 100, AnchorPosition.MIDDLECENTER)
    bkgRef = null;
}*/

srcPrompt();
//backgroundReplace();
docRef = null;
app.preferences.rulerUnits = originalUnit;