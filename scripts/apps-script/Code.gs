/**
 * E & E Technologies — booking form backend.
 *
 * Receives booking form submissions from the website (via fetch POST as
 * multipart/form-data), logs each request to a Google Sheet, saves the
 * payment slip to a Google Drive folder, and emails a notification.
 *
 * SETUP
 * 1. Create a new Google Sheet (e.g. "E&E Technologies — Booking Requests"),
 *    signed in as eetechnologies95@gmail.com.
 * 2. In the Sheet, open Extensions > Apps Script.
 * 3. Delete the placeholder code and paste this whole file in.
 * 4. Save the project (give it a name if prompted).
 * 5. Click Deploy > New deployment.
 *    - Type: Web app
 *    - Execute as: Me (eetechnologies95@gmail.com)
 *    - Who has access: Anyone
 * 6. Click Deploy, and authorize the permissions it asks for (this is your
 *    own script acting on your own account — the prompt just looks scary
 *    because it's an unverified/personal app).
 * 7. Copy the "Web app URL" it gives you.
 * 8. Paste that URL into APPS_SCRIPT_URL in app/booking/page.js on the site.
 *
 * The first submission will create a "Booking Requests" sheet tab (if it
 * doesn't already exist) and a "E&E Technologies - Payment Slips" folder in
 * your Google Drive automatically.
 */

const SHEET_NAME = "Booking Requests";
const FOLDER_NAME = "E&E Technologies - Payment Slips";
const NOTIFY_EMAIL = "eetechnologies95@gmail.com";

function doPost(e) {
  try {
    const params = e.parameter;
    const sheet = getSheet();
    const folder = getFolder();

    let fileUrl = "";
    if (e.files && e.files.paymentSlip) {
      const uploaded = e.files.paymentSlip;
      const savedFile = folder.createFile(uploaded);
      fileUrl = savedFile.getUrl();
    }

    sheet.appendRow([
      new Date(),
      params.name || "",
      params.phone || "",
      params.address || "",
      params.district || "",
      params.serviceType || "",
      params.category || "",
      params.preferredDate || "",
      params.message || "",
      fileUrl,
    ]);

    sendNotificationEmail(params, fileUrl);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendNotificationEmail(params, fileUrl) {
  const subject = `New inspection request — ${params.name || "Unknown"} (${
    params.serviceType || ""
  })`;

  const body = [
    "New booking request received:",
    "",
    `Name: ${params.name || ""}`,
    `Phone: ${params.phone || ""}`,
    `Property address: ${params.address || ""}`,
    `District: ${params.district || ""}`,
    `Service: ${params.serviceType || ""}`,
    `Category: ${params.category || ""}`,
    `Preferred date: ${params.preferredDate || ""}`,
    `Message: ${params.message || "(none)"}`,
    "",
    fileUrl ? `Payment slip: ${fileUrl}` : "Payment slip: not attached",
  ].join("\n");

  MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Phone",
      "Address",
      "District",
      "Service",
      "Category",
      "Preferred date",
      "Message",
      "Payment slip",
    ]);
  }
  return sheet;
}

function getFolder() {
  const folders = DriveApp.getFoldersByName(FOLDER_NAME);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(FOLDER_NAME);
}
