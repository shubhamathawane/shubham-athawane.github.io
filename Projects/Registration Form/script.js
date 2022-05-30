var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) 
    insertNewRecord(formData);
  else 
    updateRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["Name"] = document.getElementById("name").value;
  formData["Email"] = document.getElementById("email").value;
  formData["Class"] = document.getElementById("class").value;
  formData["Address"] = document.getElementById("Address").value;
  formData["div"] = document.getElementById("div").value;
  formData["interest"] = document.getElementById("interest").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("studentlist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.Name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Class;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.div;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.interest;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.Address;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<a class="btns" onClick="onEdit(this)">edit</a>
                       <a class="btns" onClick="onDelete(this)">Delete</a>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("class").value = selectedRow.cells[1].innerHTML;
  document.getElementById("email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("div").value = selectedRow.cells[3].innerHTML;
  document.getElementById("interest").value = selectedRow.cells[4].innerHTML;
  document.getElementById("Address").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.Name;
  selectedRow.cells[1].innerHTML = formData.Class;
  selectedRow.cells[2].innerHTML = formData.Email;
  selectedRow.cells[3].innerHTML = formData.div;
  selectedRow.cells[4].innerHTML = formData.interest;
  selectedRow.cells[5].innerHTML = formData.Address;
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("class").value = "";
  document.getElementById("email").value = "";
  document.getElementById("div").value = "";
  document.getElementById("interest").value = "";
  document.getElementById("Address").value = "";
  selectedRow = null;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("studentlist").deleteRow(row.rowIndex);
    resetForm();
  }
}

function Validate() {
  isValid = true;
  if (document.getElementById("Name").value == "") {
    isValid = false;
    document.getElementById("validator").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("validator").classList.contains("hide")) {
      document.getElementById("validator").classList.add("hide");
    }
  }
}
