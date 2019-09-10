var dataUri = File.openDialog("Select data file");
var templateUri = File.openDialog("Select template").fsName;
var myTemplate = app.open(templateUri);
var openTemplate = app.activeDocument;
var exportTo = Folder.selectDialog("Select export folder").fsName + "/";
alert(exportTo);

with (myTemplate.dataMergeOptions) {
  centerImage = true;
  createNewDocument = false;
  linkImages = false;
}

// main();

function main() {
  if (dataUri == null) return;
  openTemplate.dataMergeProperties.selectDataSource(File(dataUri));
  openTemplate.dataMergeProperties.exportFile(
    File(exportTo) + dataUri.name.split(".csv")[0] + ".pdf",
    "[High Quality Print]"
  );
}
