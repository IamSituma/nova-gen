/** @OnlyCurrentDoc */

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "error",
      message: "Use POST to submit data"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    Logger.log("Received POST request")
    const data = JSON.parse(e.postData.contents)
    Logger.log("Parsed data: " + JSON.stringify(data))

    if (data.formType !== "cv-submission") {
      Logger.log("Invalid form type: " + data.formType)
      return json({ status: "error", message: "Invalid form" })
    }

    const ss = SpreadsheetApp.getActive()
    const sheet =
      ss.getSheetByName("ProjectsForm") ||
      ss.insertSheet("ProjectsForm")

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Email",
        "Phone",
        "Position",
        "CV File Name",
        "Drive File ID",
      ])
    }

    // ===== FILE UPLOAD =====
    Logger.log("Starting file upload process")
    const base64 = data.fileData.split(",")[1]
    Logger.log("Base64 data length: " + base64.length)

    const blob = Utilities.newBlob(
      Utilities.base64Decode(base64),
      data.fileType,
      data.fileName
    )
    Logger.log("Created blob with size: " + blob.getBytes().length)

    // Create file in Google Drive
    let file;
    if ("YOUR_FOLDER_ID_HERE" && "YOUR_FOLDER_ID_HERE" !== "YOUR_FOLDER_ID_HERE") {
      // Upload to specific folder
      Logger.log("Uploading to specific folder: YOUR_FOLDER_ID_HERE")
      const folder = DriveApp.getFolderById("YOUR_FOLDER_ID_HERE");
      file = folder.createFile(blob);
    } else {
      // Upload to root directory
      Logger.log("Uploading to root directory")
      file = DriveApp.createFile(blob);
    }
    Logger.log("File created with ID: " + file.getId())

    sheet.appendRow([
      new Date(),
      data.fullName,
      data.email,
      data.phone,
      data.position,
      data.fileName,
      file.getId(),
    ])

    Logger.log("Successfully processed CV submission for: " + data.fullName)
    return json({ status: "success" })

  } catch (err) {
    return json({ status: "error", message: err.message })
  }
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}
