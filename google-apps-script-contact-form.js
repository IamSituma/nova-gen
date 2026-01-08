/** @OnlyCurrentDoc */

/**
 * ============================
 * CONTACT FORM HANDLER
 * ============================
 */
function doPost(e) {
  try {
    Logger.log("Contact form submission received")
    const data = JSON.parse(e.postData.contents)
    Logger.log("Parsed data: " + JSON.stringify(data))

    // Check if this is a contact form submission
    if (data.formType !== "contact") {
      Logger.log("Invalid form type: " + data.formType)
      return json({ status: "error", message: "Invalid form type" })
    }

    const ss = SpreadsheetApp.getActive()
    const sheetName = "Contact Form"
    let sheet = ss.getSheetByName(sheetName)

    // Create sheet if it doesn't exist
    if (!sheet) {
      Logger.log("Creating new sheet: " + sheetName)
      sheet = ss.insertSheet(sheetName)
      // Add headers
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Phone Number",
        "Email",
        "Subject",
        "Message"
      ])
      Logger.log("Headers added to sheet")
    }

    // CORRECTED: Phone and Email are now in the right order
    const row = [
      new Date(),
      data.name || "",
      data.phone || "",    // Phone Number (position 3)
      data.email || "",    // Email (position 4)
      data.subject || "",
      data.message || ""
    ]

    sheet.appendRow(row)
    Logger.log("Contact form data appended to sheet")

    return json({ status: "success", message: "Contact form submitted successfully" })

  } catch (err) {
    Logger.log("Error processing contact form: " + err.message)
    return json({ status: "error", message: err.message })
  }
}

function doGet(e) {
  return json({ status: "error", message: "Use POST method for form submissions" })
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}
