// Set 1 for low level debugging
// Set 2 for more debugging info
var debugMode = 0;
// Set True to bypass kickoff dialog and manually
// set input data, template, and export vars.
var bypassDialogs = false;

var batchSize;
var templateFile;
var dataFile;
var exportUri;
var exportFileName;

if (bypassDialogs == false) {
	openDialog();
} else {
	// bypassDialog mode
	var batchSize = 200;
	var dataFile = File(
		"/Users/jordanhaldane/code/idMerge/src/data/0004_GC_nrp_ml_10022019_12345T1.csv"
	);
	var templateFile = File(
		"/Users/jordanhaldane/code/idMerge/src/template/0004_GC_NRP_lett.indt"
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
	group1.alignment = ["left", "top"];

	// PANEL1
	// ======
	var panel1 = group1.add("panel", undefined, undefined, { name: "panel1" });
	panel1.text = "Batch Size";
	panel1.orientation = "column";
	panel1.alignChildren = ["left", "top"];
	panel1.spacing = 10;
	panel1.margins = 10;

	var batchSizeInput = panel1.add(
		'edittext {justify: "center", properties: {name: "batchSizeInput"}}'
	);
	batchSizeInput.text = "50";
	batchSizeInput.characters = 2;
	batchSizeInput.alignment = ["fill", "top"];

	// GROUP2
	// ======
	var group2 = dialog.add("group", undefined, { name: "group2" });
	group2.orientation = "column";
	group2.alignChildren = ["left", "top"];
	group2.spacing = 10;
	group2.margins = 0;

	// PANEL2
	// Template selection
	// ======
	var panel2 = group2.add("panel", undefined, undefined, { name: "panel2" });
	panel2.text = "Template Selection";
	panel2.orientation = "row";
	panel2.alignChildren = ["left", "top"];
	panel2.spacing = 10;
	panel2.margins = 10;

	var statictext2 = panel2.add("statictext", undefined, undefined, {
		name: "statictext2"
	});
	statictext2.text = "Choose Template File:";

	var templateUriInput = panel2.add(
		'edittext {properties: {name: "templateUriInput"}}'
	);
	var templateDefault = new File("//cmpsevr1/prod/new_sys/live/nrpdocs/");
	templateUriInput.text = templateDefault.fsName;
	templateUriInput.preferredSize.width = 360;

	var templateBtn = panel2.add("button", undefined, undefined, {
		name: "templateBtn"
	});
	templateBtn.text = "Browse";
	function getTemplateFile() {
		return templateDefault.openDlg(
			"Select template",
			"InDesign Template:*.indt, false"
		);
	}
	function setTemplateFile() {
		var templateUriOutput = getTemplateFile();
		templateFile = templateUriOutput;
		templateUriInput.text = templateUriOutput.fsName;
	}
	templateBtn.onClick = setTemplateFile;

	// GROUP3
	// ======
	var group3 = dialog.add("group", undefined, { name: "group3" });
	group3.orientation = "row";
	group3.alignChildren = ["left", "fill"];
	group3.spacing = 10;
	group3.margins = 0;

	// PANEL3
	// ======
	var panel3 = group3.add("panel", undefined, undefined, { name: "panel3" });
	panel3.text = "Data Selection";
	panel3.orientation = "row";
	panel3.alignChildren = ["center", "top"];
	panel3.spacing = 10;
	panel3.margins = 10;

	var statictext3 = panel3.add("statictext", undefined, undefined, {
		name: "statictext3"
	});
	statictext3.text = "Choose Data File:";

	var dataUriInput = panel3.add(
		'edittext {properties: {name: "dataUriInput"}}'
	);
	var dataDefault = new File("//cmpkc_sales/SALES/AAAClientData/");
	dataUriInput.text = dataDefault.fsName;
	dataUriInput.preferredSize.width = 393;

	var dataBtn = panel3.add("button", undefined, undefined, {
		name: "dataBtn"
	});
	dataBtn.text = "Browse";
	function getDataFile() {
		return dataDefault.openDlg("Select data file", "CSV:*.csv, false");
	}

	// Gets csv file from dialog
	function setDataFile() {
		var dataFileOutput = getDataFile();
		dataFile = dataFileOutput;
		dataUriInput.text = dataFile.fsName;
	}
	dataBtn.onClick = setDataFile;

	// GROUP4
	// ======
	var group4 = dialog.add("group", undefined, { name: "group4" });
	group4.orientation = "row";
	group4.alignChildren = ["left", "fill"];
	group4.spacing = 10;
	group4.margins = 0;

	// PANEL4
	// ======
	var panel4 = group4.add("panel", undefined, undefined, { name: "panel4" });
	panel4.text = "Export Location";
	panel4.orientation = "row";
	panel4.alignChildren = ["center", "top"];
	panel4.spacing = 10;
	panel4.margins = 10;

	var statictext4 = panel4.add("statictext", undefined, undefined, {
		name: "statictext4"
	});
	statictext4.text = "Choose Export Folder:";

	var exportFolderInput = panel4.add(
		'edittext {properties: {name: "exportFolderInput", readonly: true}}'
	);
	exportFolderInput.preferredSize.width = 360;
	exportFolderInput.text = "//cmpsevr1/prod/new_sys/live/nrpdocs/Export/Hold";
	exportUri = exportFolderInput.text + "/";

	var exportBtn = panel4.add("button", undefined, undefined, {
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
	// GROUP5 OK/Cancel
	// ======
	var group5 = dialog.add("group", undefined, { name: "group5" });
	group5.orientation = "row";
	group5.alignChildren = ["left", "center"];
	group5.spacing = 10;
	group5.margins = 0;

	var button4 = group5.add("button", undefined, "OK", { name: "ok" });
	button4.alignment = ["left", "top"];

	var button5 = group5.add("button", undefined, "Cancel", { name: "cancel" });

	//validation
	if (dialog.show() == 1) {
		//
		// Batch Size Validation
		//
		var parsedBatchSizeInput = parseInt(batchSizeInput.text);
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
			$.writeln("Merge process is: " + mergeType);
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
const underscore = "_";
var dataSpecs = parseFile(dataFile, underscore);
var templateSpecs = parseFile(templateFile, underscore);

// calls merge functions based off of mergeType
switch (defMergeType(dataSpecs)) {
	case 0:
		defExportFileName(0);
		vanillaMerge();
		break;
	case 1:
	default:
		defExportFileName(1);
		inDataMerge();
		break;
}

function vanillaMerge() {
	app.linkingPreferences.checkLinksAtOpen = false;
	var openTemplate = app.open(templateFile); // opens ID File
	// update image links
	for (var i = 0; i < openTemplate.links.length; i++) {
		var templateLink = openTemplate.links[i];
		if (templateLink.status == LinkStatus.linkOutOfDate) {
			templateLink.update();
		}
	}
	var saveName = exportUri + exportFileName + ".pdf";
	with (openTemplate.dataMergeOptions) {
		centerImage = true;
		createNewDocument = false;
		linkImages = false;
	}
	if (dataFile == null) return;
	openTemplate.dataMergeProperties.selectDataSource(File(dataFile));

	openTemplate.dataMergeProperties.exportFile(saveName, "[High Quality Print]");
	$.sleep(2000); //for exporting wait time.
	//test w/ big file
	openTemplate.close(SaveOptions.no);
	alert("Merging Done!");
	openDialog();
}
function inDataMerge() {
	app.linkingPreferences.checkLinksAtOpen = true; // sets modified link dialog to false.
	var firstRec = 1;
	var recsImp = batchSize;
	var pad = "00";
	var batchStartIndex = 1;
	var lastBatch = false;

	while (recsImp == batchSize) {
		var batchIndex = (pad + batchStartIndex++).slice(-3);
		inDataMergeLoop();
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
			openDialog();
		}
	}

	// merge and record data
	function inDataMergeLoop() {
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
			var inDataSaveName = exportUri + exportFileName + batchIndex + ".pdf";
			var pdfPreset = app.pdfExportPresets.itemByName("[High Quality Print]");
			openTemplate.exportFile(
				ExportFormat.PDF_TYPE,
				File(inDataSaveName),
				false,
				pdfPreset
			);
			// added delay for pdf exporting
			$.sleep(4000);
			openTemplate.close(SaveOptions.no);
			if (debugMode == 1) {
				$.writeln(
					"Batch " +
						batchIndex +
						" exported PDF located here: " +
						inDataSaveName +
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

function defExportFileName(mergeProcess) {
	if (mergeProcess === 0) {
		// vanilla ID merge 0004_GC_nrp_ml_10022019_12345T1.csv
		exportFileName =
			dataSpecs[0] +
			"_" +
			dataSpecs[1] + //marketCode
			"_" +
			dataSpecs[2] + //procCode
			"_" +
			templateSpecs[3].split(".indt")[0] + // mailType; need to make less specific...
			"_" +
			dataSpecs[4] + //mailDate
			"_" +
			dataSpecs[5].split(".csv")[0] + // jobNum
			"_001-001"; // added for PDF_MERGE file watcher to "see" a completed ID merged pdf since vanilla merges don't process in batches
		return exportFileName;
	} else {
		// indData merge ACME_0004_GC_nrp_10022019_12345T1_data.csv
		exportFileName =
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
		return exportFileName;
	}
}

// Determines mergeType based off of a "ml" flag in the data file name.
// The "ml" flag is only used w/ weekly vanilla data files (AMCE). Will need a different identifier
// for vanilla monthly merges
function defMergeType(dataFileName) {
	if (dataFileName[3] === "ml") {
		// Vanilla merge
		var mergeType = 0;
		return mergeType;
	} else {
		// InData merge
		var mergeType = 1;
		return mergeType;
	}
}
