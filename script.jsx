//Script by Tom-Lucas Säger tlsaeger.de


var doc = app.activeDocument;
//reference a group called 'text'
var textGroup = doc.layerSets.getByName('text');
//reference the first layer in the group
var text = textGroup.layers[0];

//cycle through all your installed fonts
for (i = 0; i < app.fonts.length; i++){
    //get the font name 
    var newFont = app.fonts[i].postScriptName;
    //format the font name 
    newFont= newFont.toString();
    newFont = newFont.replace(/\s+/g, '');
    //set the refrenced text to the one from the var 
    text.textItem.font = newFont;
    //save as new document 
    saveJPEG('output' + i);
}
//save function
function saveJPEG(name) {
    var file = new File(doc.path + '/' + name + '.jpg')
    var opts = new JPEGSaveOptions();
    opts.quality = 1;
    doc.saveAs(file, opts, true);
}