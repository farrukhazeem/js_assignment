let rowId = 0;

$(document).ready(function () {
    // $('#datatable').dataTable();
    $("[data-toggle=tooltip]").tooltip();
});

function clickEdit(id) {
    let row = document.getElementById(id);
    let firstName = row.cells[0].innerHTML;
    let lastName = row.cells[1].innerHTML;
    let address = row.cells[2].innerHTML;
    let age = row.cells[3].innerHTML;
    let email = row.cells[4].innerHTML;
    let phone = row.cells[5].innerHTML;

    document.getElementById('editFirstName').value = firstName;
    document.getElementById('editLastName').value = lastName;
    document.getElementById('editAddress').value = address;
    document.getElementById('editAge').value = age;
    document.getElementById('editEmail').value = email;
    document.getElementById('editPhone').value = phone;

    document.getElementById('updateRecord').setAttribute('data-record-id', id);
}

function addRecord(fname, lname, address, age, email, phone) {
    var table = document.getElementById("tableBody");
    var rowHTML = "<tr id="+rowId+"><td>"+fname+"</td>"+"<td>"+lname+"</td>"+"<td>"+address+"</td>"
        +"<td>"+age+"</td>"+"<td>"+email+"</td>"+"<td>"+phone+"</td>"
        +"<td><p data-placement='top' title='Edit'>"
        +"<button class='btn btn-primary' onclick='clickEdit(" + rowId + ")' data-title='edit' data-toggle='modal' data-target='#edit'>Edit</button></p>"
        +"<td><p data-placement='top' data-toggle='tooltip' title='Delete'>"
        +"<button class='btn btn-danger'>Delete</button></p></td>"
        +"</tr>";

    $(table).append(rowHTML);
    rowId++;
}

function updateRecord(event) {
    console.log('updateRecord');
    console.log(event);
}

$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  dataType: 'json',
  success: function(data) {
    const results = data.results;
    for (const result in results) {
        const user = results[result];
        let fname = user.name.first;
        let lname = user.name.last;
        let address = user.location.street + ', ' + user.location.city + ', ' + user.location.state;
        let age = Math.floor((Math.random() * 60) + 1);
        let email = user.email;
        let phone = user.phone;
        addRecord(fname, lname, address, age, email, phone);
    }
    
  }
  
});
      