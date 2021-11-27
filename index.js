function numInsert(number) {
  const oldNumber = $("#result").val();
  $("#result").val(oldNumber + number);
}

function clearScreen() {
  $("#result").val("");
}

// Not using "" in .val() for calculation
function calculateNumber() {
  const finalResult = eval($("#result").val());
  $("#result").val(finalResult);
}

function deleteNumber() {
  const delNum = $("#result").val();
  if (delNum != "") {
    $("#result").val(delNum.slice(0, -1));
  }
}
