
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById('1upUajNWCgfZEIsy90MrjT8_0_HpC90nqfZR8AB2DjQ0').getSheetByName('water');
    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.fullName,
      data.contactNumber,
      data.address,
      data.complaintType,
      data.description,
      data.imageUrl
    ]);
    return ContentService
      .createTextOutput('Complaint submitted successfully.')
      .setMimeType(ContentService.MimeType.TEXT);

  } catch (err) {
    return ContentService
      .createTextOutput('Error: ' + err.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
