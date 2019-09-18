// Set for true for console messages for debugging
var debugMode = false;

if (debugMode == true) {
  //Debugging Mode:
  var batchSize = Folder("W:/new_sys/live/nrpdocs/Export/Hold").fsName + "/";
  var dataUri = File(
    "Y:/AAAClientData/Woods/NRP_file_extracts_PURLsQRcodesMaps/WOODS_0978_FW_nrp_201909w38b_data.csv"
  );
  var templateUri = File(
    "W:/new_sys/live/nrpdocs/0978_NRP/0978_NRP_LHD_A/0978_NRP_LHD_A.indd"
  ).fsName;
  var exportTo = Folder("W:/new_sys/live/nrpdocs/Export/Hold").fsName + "/";
} else {
  //Dialog Mode:
  var dataUri = File.openDialog("Select data file", "CSV:*.csv, false");
  var templateUri = File.openDialog("Select template").fsName;
  var exportTo = Folder("W:/new_sys/live/nrpdocs/Export/Hold").fsName + "/";
}

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
    // import succeeded; reset lastRec just
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
    alert("Merging Done!");
  }
}
