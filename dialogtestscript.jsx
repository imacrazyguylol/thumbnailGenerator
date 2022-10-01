//@include "./dlgtsCreate.jsxinc"

var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

var dlg = new Window('dialog', 'TestDialog');
dlg.size = {width: 600, height: 450};
dlg.center();

var textBoxRefContents = "Placeholder";
var textBoxRef = dlg.add('edittext', {x: undefined, y: undefined, width: 150, height: undefined}, undefined, undefined);
textBoxRef.alignment = 'left';
textBoxRef.title = 'sample';
textBoxRef.onChanging = function() {
    textBoxRefContents = this.targetElement.textSelection;
}
textBoxRef = null;

var closeBtnRef = dlg.add('button', {x: dlg.size.width - 65, y: dlg.size.height - 35, width: 60, height: 15}, 'Ok', {name: 'okbtn'});
closeBtnRef.addEventListener('click', create(textBoxRefContents));
closeBtnRef.visible = true;
closeBtnRef = null;

dlg.active = true;
dlg.visible = true;