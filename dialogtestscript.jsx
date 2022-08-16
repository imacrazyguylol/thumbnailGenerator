var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

var textBoxRefContents;
function defineTBRC(e) {
    textBoxRefContents = e;
}
function create() {
    docRef = app.documents.add(1920, 1080, 100, 'doc');

    newLayerRef = docRef.artLayers.add();
    newLayerRef.name = 'this is what you had input';
    newLayerRef.kind = LayerKind.TEXT;
    newLayerRef.textItem.size = 64;
    newLayerRef.textItem.color.rgb.hexValue = 'BD2D2D';
    newLayerRef.textItem.contents = textBoxRefContents;
    alert(textBoxRefContents);
}

var dlg = new Window('dialog', 'TestDialog');
dlg.size = {width: 600, height: 450};
dlg.center();

var textBoxRef = dlg.add('edittext', {x: undefined, y: undefined, width: 150, height: undefined}, undefined, undefined);
textBoxRef.alignment = 'left';
textBoxRef.title = 'sample';
textBoxRef.addEventListener('change', defineTBRC(textBoxRef.textselection));
textBoxRef = null;

var closeBtnRef = dlg.add('button', undefined, 'Ok', {name: 'okbtn'});
closeBtnRef.addEventListener('click', create());
//figure out how to get it to stay at bottom right
//closeBtnRef.location = [dlg.size.width, dlg.size.height];
closeBtnRef = null;

dlg.active = true;
dlg.visible = true;