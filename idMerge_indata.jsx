// Set for true for console messages for debugging
var debugMode = 0;
var bypassDialogs = false;

var batchSize;
var templateFile;
var dataFile;
var exportUri;

if (bypassDialogs == false) {
  openDialog();
} else {
  // bypassDialog mode:
  var batchSize = 200;
  var dataFile = File(
    "/Users/jordanhaldane/code/idMerge/src/data/ACME_0004_GC_nrp_10232019_2028J4_data.csv"
  );
  var templateFile = File(
    "/Users/jordanhaldane/code/idMerge/src/template/0004_GC_NRP_insert.indt"
  );
  var exportUri =
    Folder("/Users/jordanhaldane/code/idMerge/export/hold").fsName + "/";
}
function openDialog() {
  // DIALOG
  // ======
  var dialog = new Window("dialog");
  dialog.text = "IdMerge";
  dialog.orientation = "column";
  dialog.alignChildren = ["left", "top"];
  dialog.spacing = 10;
  dialog.margins = 16;

  // GROUP1
  // ======
  var group1 = dialog.add("group", undefined, { name: "group1" });
  group1.orientation = "row";
  group1.alignChildren = ["left", "top"];
  group1.spacing = 10;
  group1.margins = 0;

  // GROUP2
  // ======
  var group2 = group1.add("group", undefined, { name: "group2" });
  group2.orientation = "row";
  group2.alignChildren = ["left", "top"];
  group2.spacing = 10;
  group2.margins = 0;
  group2.alignment = ["left", "top"];

  // Merge Process
  // ======
  var panel1 = group2.add("panel", undefined, undefined, { name: "panel1" });
  panel1.text = "Merge Process";
  panel1.orientation = "column";
  panel1.alignChildren = ["left", "top"];
  panel1.spacing = 10;
  panel1.margins = 10;

  var statictext1 = panel1.add("statictext", undefined, undefined, {
    name: "statictext1"
  });
  statictext1.text = "(STILL WIP DOES NOT WORK) Choose Merge Process";
  var genericMergeRadio = panel1.add("radiobutton", undefined, undefined, {
    name: "genericMergeRadio"
  });
  genericMergeRadio.text = "Generic Merge";
  // Sets default merge process
  genericMergeRadio.value = true;
  var inDataMergeRadio = panel1.add("radiobutton", undefined, undefined, {
    name: "inDataMergeRadio"
  });
  inDataMergeRadio.text = "InData Merge";

  // GROUP3
  // ======
  var group3 = group2.add("group", undefined, { name: "group3" });
  group3.orientation = "row";
  group3.alignChildren = ["left", "top"];
  group3.spacing = 10;
  group3.margins = 0;
  group3.alignment = ["left", "top"];

  // PANEL2
  // ======
  var panel2 = group3.add("panel", undefined, undefined, { name: "panel2" });
  panel2.text = "Batch Size";
  panel2.orientation = "column";
  panel2.alignChildren = ["left", "top"];
  panel2.spacing = 10;
  panel2.margins = 10;

  var batchSizeInput = panel2.add(
    'edittext {justify: "center", properties: {name: "batchSizeInput"}}'
  );
  batchSizeInput.text = "50";
  batchSizeInput.characters = 2;
  batchSizeInput.alignment = ["fill", "top"];

  // GROUP4
  // ======
  var group4 = dialog.add("group", undefined, { name: "group4" });
  group4.orientation = "column";
  group4.alignChildren = ["left", "top"];
  group4.spacing = 10;
  group4.margins = 0;

  // PANEL3
  // Template selection
  // ======
  var panel3 = group4.add("panel", undefined, undefined, { name: "panel3" });
  panel3.text = "Template Selection";
  panel3.orientation = "row";
  panel3.alignChildren = ["left", "top"];
  panel3.spacing = 10;
  panel3.margins = 10;

  var statictext2 = panel3.add("statictext", undefined, undefined, {
    name: "statictext2"
  });
  statictext2.text = "Choose Template File:";

  var templateUriInput = panel3.add(
    'edittext {properties: {name: "templateUriInput"}}'
  );
  templateUriInput.text = "";
  templateUriInput.preferredSize.width = 360;

  var templateBtn = panel3.add("button", undefined, undefined, {
    name: "templateBtn"
  });
  templateBtn.text = "Browse";
  function getTemplateFile() {
    return File.openDialog("Select template");
  }
  function setTemplateFile() {
    var templateUriOutput = getTemplateFile();
    templateFile = templateUriOutput;
    templateUriInput.text = templateUriOutput;
  }
  templateBtn.onClick = setTemplateFile;

  // GROUP5
  // ======
  var group5 = dialog.add("group", undefined, { name: "group5" });
  group5.orientation = "row";
  group5.alignChildren = ["left", "fill"];
  group5.spacing = 10;
  group5.margins = 0;

  // PANEL4
  // ======
  var panel4 = group5.add("panel", undefined, undefined, { name: "panel4" });
  panel4.text = "Data Selection";
  panel4.orientation = "row";
  panel4.alignChildren = ["center", "top"];
  panel4.spacing = 10;
  panel4.margins = 10;

  var statictext3 = panel4.add("statictext", undefined, undefined, {
    name: "statictext3"
  });
  statictext3.text = "Choose Data File:";

  var dataUriInput = panel4.add(
    'edittext {properties: {name: "dataUriInput"}}'
  );
  dataUriInput.text = "";
  dataUriInput.preferredSize.width = 393;

  var dataBtn = panel4.add("button", undefined, undefined, { name: "dataBtn" });
  dataBtn.text = "Browse";
  function getDataFile() {
    return File.openDialog("Select data file", "CSV:*.csv, false");
  }

  // Gets csv file from dialog
  function setDataFile() {
    var dataFileOutput = getDataFile();
    dataFile = dataFileOutput;
    dataUriInput.text = dataFile;
  }
  dataBtn.onClick = setDataFile;

  // GROUP6
  // ======
  var group6 = dialog.add("group", undefined, { name: "group6" });
  group6.orientation = "row";
  group6.alignChildren = ["left", "fill"];
  group6.spacing = 10;
  group6.margins = 0;

  // PANEL5
  // ======
  var panel5 = group6.add("panel", undefined, undefined, { name: "panel5" });
  panel5.text = "Export Location";
  panel5.orientation = "row";
  panel5.alignChildren = ["center", "top"];
  panel5.spacing = 10;
  panel5.margins = 10;

  var statictext4 = panel5.add("statictext", undefined, undefined, {
    name: "statictext4"
  });
  statictext4.text = "Choose Export Folder:";

  var exportFolderInput = panel5.add(
    'edittext {properties: {name: "exportFolderInput", readonly: true}}'
  );
  exportFolderInput.preferredSize.width = 360;
  exportFolderInput.text = "//cmpsevr1/prod/new_sys/live/nrpdocs/Export/Hold";
  exportUri = exportFolderInput.text + "/";

  var exportBtn = panel5.add("button", undefined, undefined, {
    name: "exportBtn"
  });
  exportBtn.text = "Browse";
  function getExportFolder() {
    return Folder.selectDialog("Select Export Folder").fsName + "/";
  }
  function setExportFolder() {
    var exportUriOutput = getExportFolder();
    exportUri = exportUriOutput;
    exportFolderInput.text = exportUriOutput;
  }
  exportBtn.onClick = setExportFolder;
  // GROUP7 OK/Cancel
  // ======
  var group7 = dialog.add("group", undefined, { name: "group7" });
  group7.orientation = "row";
  group7.alignChildren = ["left", "center"];
  group7.spacing = 10;
  group7.margins = 0;

  var button4 = group7.add("button", undefined, "OK", { name: "ok" });
  button4.alignment = ["left", "top"];

  var button5 = group7.add("button", undefined, "Cancel", { name: "cancel" });

  //validation
  if (dialog.show() == 1) {
    //
    // Merge Process Validation:
    //
    if (genericMergeRadio.value == true) {
      var mergeProcess = 1;
    } else {
      var mergeProcess = 2;
    }
    //
    // Batch Size Validation
    //
    parsedBatchSizeInput = parseInt(batchSizeInput.text);
    if (parsedBatchSizeInput === parseInt(batchSizeInput.text)) {
      batchSize = parsedBatchSizeInput;
    } else {
      alert("Batch size is not a number");
      openDialog();
    }
    //
    // Template File Location Validation
    //
    if (templateFile == null) {
      alert("Please select a template file.");
      openDialog();
    }
    //
    // Data File Location Validation
    //

    if (dataFile == null) {
      alert("Please select a data file.");
      openDialog();
    }
    //
    // Export Location Validation
    //
    if (exportUri == null) {
      alert("Please select a export folder.");
      openDialog();
    }
    if (debugMode == 1) {
      $.writeln("Merge process is: " + mergeProcess);
      $.writeln("Batch size is: " + batchSize);
      $.writeln(templateFile);
      $.writeln(dataFile);
      $.writeln(exportUri);
    }
  } else {
    alert("Stopping Script");
    exit(); // TODO: FIX so dialog doesn't die.
  }
}
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  if (debugMode == 2) {
    $.writeln('The original string is: "' + stringToSplit + '"');
    $.writeln('The separator is: "' + separator + '"');
    $.writeln(
      arrayOfStrings.length + " elements: " + arrayOfStrings.join(" _ ")
    );
  }
  return arrayOfStrings;
}

//parse file object name func
function parseFile(fileToParse, separator) {
  var fnString = String(fileToParse.name);
  return splitString(fnString, separator);
}
const underscore = "_";
var dataSpecs = parseFile(dataFile, underscore);
var templateSpecs = parseFile(templateFile, underscore);
var exportFileName =
  dataSpecs[1] + //clientNum
  "_" +
  dataSpecs[2] + //marketCode
  "_" +
  dataSpecs[3] + //procCode
  "_" +
  templateSpecs[3].split(".indt")[0] + // mailType; need to make less specific...
  "_" +
  dataSpecs[4] + //mailDate
  "_" +
  dataSpecs[5] + // jobNum
  "_";

var firstRec = 1;
var recsImp = batchSize;
var pad = "00";
var batchStartIndex = 1;
var lastBatch = false;

while (recsImp == batchSize) {
  var batchIndex = (pad + batchStartIndex++).slice(-3);
  main();
  if (debugMode == 1) {
    $.writeln(recsImp + " recsImp out of a batchSize of " + batchSize);
    if (recsImp == batchSize) {
      $.writeln("Merging in process...");
    }
  }
  if (lastBatch == true || recsImp != batchSize) {
    // Rename files to append last batchIndex.
    // Move pdfs out of hold and into file watcher.
    if (lastBatch == true) {
      // Set batchTotal to batchIndex minus one to get total batches merged.
      var batchTotal = (pad + (batchIndex - 1)).slice(-3);
    } else {
      var batchTotal = batchIndex;
    }

    for (var i = 1; i <= batchTotal; i++) {
      renameMergedPDF();
    }
    function renameMergedPDF() {
      var oldPdfName = exportFileName + (pad + i).slice(-3) + ".pdf";
      var newPdfName = oldPdfName.replace(
        oldPdfName,
        exportFileName + (pad + i).slice(-3) + "-" + batchTotal + ".pdf"
      );
      var oldPdf = File(exportUri + oldPdfName);
      oldPdfFilePath = oldPdf.fullName;
      oldPdf.rename(newPdfName);
      var renamedPDF = oldPdf;
      var liveFolder = File(renamedPDF);
      liveFolder.changePath("../../");
      renamedPDF.copy(liveFolder + "/" + newPdfName);
      oldPdf.remove();
    }
    $.writeln("No more recs to import. Merging finished.");
    alert("Merging Done!");
  }
}

// merge and record data
function main() {
  var myTemplate = app.open(templateFile);
  var openTemplate = app.activeDocument;
  // set the lastRec to the final record in this batch
  var lastRec = firstRec + batchSize - 1;
  recsImp = openTemplate.importDataFrom(
    dataFile,
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
    var saveName = exportUri + exportFileName + batchIndex + ".pdf";
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
    if (debugMode == 1) {
      $.writeln(
        "Batch " +
          batchIndex +
          " exported PDF located here: " +
          saveName +
          " for records " +
          firstRec +
          " through " +
          lastRec
      );
    }
    // set firstRec to the beginning of the first rec of the next batch
    firstRec = lastRec + 1;
    // batchIndex++;
  } else {
    // No more records to merge. Close ID template, start cleanup func.
    openTemplate.close(SaveOptions.no);
    lastBatch = true;
  }
}
