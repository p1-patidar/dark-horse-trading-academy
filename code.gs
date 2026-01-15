function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Parse JSON data
  var data = JSON.parse(e.postData.contents);
  
  // Get Timestamp
  var timestamp = new Date();
  
  // Append Row: Timestamp, Name, WhatsApp, Profession, Reason
  sheet.appendRow([timestamp, data.name, data.whatsapp, data.profession, data.reason]);
  
  // Return JSON Success Response
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
   return ContentService.createTextOutput("Method GET not allowed. Use POST.");
}
