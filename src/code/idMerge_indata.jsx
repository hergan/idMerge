// Set for true for console messages for debugging
var debugMode = true;
var bypassDialogs = true;

var batchSize;
var templateUri;
var dataFile;
var exportUri;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":28,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"IdMerge","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-1":{"id":1,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-2":{"id":2,"type":"StaticText","parentId":5,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Choose Template File:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"EditText","parentId":5,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":true,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[360,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Panel","parentId":1,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Template Selection","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-6":{"id":6,"type":"Panel","parentId":7,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Data Selection","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["center","top"],"alignment":null}},"item-7":{"id":7,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":null}},"item-8":{"id":8,"type":"StaticText","parentId":6,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Choose Data File:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Button","parentId":5,"style":{"enabled":true,"varName":null,"text":"Browse","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Button","parentId":6,"style":{"enabled":true,"varName":null,"text":"Browse","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"EditText","parentId":6,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":true,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[393,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":null}},"item-16":{"id":16,"type":"Panel","parentId":15,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Export Location","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["center","top"],"alignment":null}},"item-17":{"id":17,"type":"StaticText","parentId":16,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Choose Export Folder:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-18":{"id":18,"type":"EditText","parentId":16,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":true,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[360,0],"alignment":null,"helpTip":null}},"item-19":{"id":19,"type":"Button","parentId":16,"style":{"enabled":true,"varName":null,"text":"Browse","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-20":{"id":20,"type":"Button","parentId":22,"style":{"enabled":true,"varName":null,"text":"OK","justify":"center","preferredSize":[0,0],"alignment":"left","helpTip":null}},"item-21":{"id":21,"type":"Button","parentId":22,"style":{"enabled":true,"varName":null,"text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-22":{"id":22,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-23":{"id":23,"type":"Group","parentId":30,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"top"}},"item-24":{"id":24,"type":"Panel","parentId":23,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Merge Process","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-25":{"id":25,"type":"StaticText","parentId":24,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Choose Merge Process","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-26":{"id":26,"type":"RadioButton","parentId":24,"style":{"enabled":true,"varName":null,"text":"Generic Merge","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-27":{"id":27,"type":"RadioButton","parentId":24,"style":{"enabled":true,"varName":null,"text":"InData Merge","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-28":{"id":28,"type":"Group","parentId":23,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"top"}},"item-29":{"id":29,"type":"Panel","parentId":28,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Batch Size","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-30":{"id":30,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-32":{"id":32,"type":"EditText","parentId":29,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"50","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}}},"order":[0,30,23,24,25,26,27,28,29,32,1,5,2,3,12,7,6,8,14,13,15,16,17,18,19,22,20,21],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"compactCode":false,"itemReferenceList":"none"}}
*/
if (bypassDialogs == false) {
  var processInputs = openDialog();
} else {
  //Debugging Mode:
  var batchSize = 50;
  var dataFile = File(
    "/Users/jordanhaldane/code/idMerge/src/data/ACME_0004_GC_nrp_10022019_12345T1_data.csv"
  );
  var templateFile = File(
    "/Users/jordanhaldane/code/idMerge/src/template/ext_0000_nrp.indt"
  );
  var exportUri =
    Folder("/Users/jordanhaldane/code/idMerge/export").fsName + "/";
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
    return File.openDialog("Select template").fsName;
  }
  function setTemplateFile() {
    var templateUriOutput = getTemplateFile();
    templateUri = templateUriOutput;
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
    var dataFile = getDataFile();
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

  // dialog.show();

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
    }
    //
    // Template File Location Validation
    //
    if (templateUri == null) {
      alert("Please select a template file.");
    }
    //
    // Data File Location Validation
    //

    if (dataFile == null) {
      alert("Please select a data file.");
    }
    //
    // Export Location Validation
    //
    if (exportUri == null) {
      alert("Please select a export folder.");
    }
    if (debugMode == true) {
      alert("Merge process is: " + mergeProcess);
      alert("Batch size is: " + batchSize);
      alert(templateUri);
      alert(dataFile);
      alert(exportUri);
    }
  } else {
    alert("Stopping Script");
    exit(); // TODO: FIX so dialog doesn't die.
  }
}
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  if (debugMode == true) {
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
  //can be used to match specific section of a file name. Set up to match CSV Data files specifically, need to make more flex later
  // var fnData = String(fnString.match(/(0[0-9][0-9][0-9]\w+)[^_data.csv]/gi));
  return splitString(fnString, separator);
}
const underscore = "_";
var parsedDataFile = parseFile(dataFile, underscore);
var parsedTemplateFile = parseFile(templateFile, underscore);

var firstRec = 1;
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
    var saveName =
      exportUri +
      dataFile.name.split("data.csv")[0] +
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
