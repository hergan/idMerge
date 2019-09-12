//Dialog Mode:
var dataUri = File.openDialog("Select data file", "CSV:*.csv, false");
var templateUri = File.openDialog("Select template").fsName;
var exportTo = Folder.selectDialog("Select export folder").fsName + "/";

//Debugging Mode:
// var dataUri = File("~/code/idMerge/src/data/ext_data.csv");
// var templateUri = File("~/code/idMerge/src/template/ext_0000_nrp.indt");
// var exportTo = Folder.selectDialog().fsName + "/";

// Set for true for console messages for debugging
var debugMode = true;

var firstRec = 1;
var batchSize = 10;
var recsImp = batchSize;

while (recsImp == batchSize) {
  main();
  if (debugMode == true) {
    $.writeln(recsImp + " recsImp out of a batchSize of " + batchSize);
    if (recsImp != batchSize) {
      $.writeln("No more recs to import. Merging finished.");
    } else {
      $.writeln("Merging in process...");
    }
  }
}

// merge and record data
function main() {
  var myTemplate = app.open(templateUri);
  var openTemplate = app.activeDocument;
  // set the lastRec to the final record in this batch
  var lastRec = firstRec + batchSize - 1;
  recsImp = openTemplate.importDataFrom(
    dataUri,
    "proto",
    "merge",
    "",
    firstRec,
    lastRec
  );
  if (recsImp > 0) {
    // import succeeded; reset lastREc just
    // in case to reflect actual number of imported recs
    lastRec = firstRec + recsImp - 1;
    var saveName =
      exportTo +
      dataUri.name.split("_data.csv")[0] +
      "_" +
      firstRec +
      "-" +
      lastRec +
      ".pdf";
    var pdfPreset = app.pdfExportPresets.itemByName("[High Quality Print]");
    openTemplate.exportFile(
      ExportFormat.PDF_TYPE,
      File(saveName),
      false,
      pdfPreset
    );
    // added delay for pdf exporting
    $.sleep(2000);
    openTemplate.close(SaveOptions.no);
    if (debugMode == true) {
      $.writeln(
        "Exported PDF located here: " +
          saveName +
          " for records " +
          firstRec +
          " through " +
          lastRec
      );
    }
    // set firstRec to the beginning of the first rec of the next batch
    firstRec = lastRec + 1;
  } else {
    openTemplate.close(SaveOptions.no);
    if (debugMode == true) {
      $.writeln("No more records to import. Merging finished.");
    }
  }
}
