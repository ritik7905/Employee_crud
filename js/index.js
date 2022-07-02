var employees = [{
        name: "Ravi Mishra",
        mobileNo: 6554656462,
        salary: "10,000",
        position: "Lead",
    },
    {
        name: "Rohit Rai ",
        mobileNo: 6554656462,
        salary: "10,000",
        position: "Office Boy",
    },
    {
        name: "Rahul Rajput",
        mobileNo: 258498566,
        salary: "20,000",
        position: "Supervisor",
    },
    {
        name: "Sachin Sharma",
        mobileNo: 58752774,
        salary: "30,000",
        position: "Accountant",
    },
    {
        name: "Ashok Kumar",
        mobileNo: 876565566,
        salary: "50,000",
        position: "Assistant",
    },
    {
        name: "Devraj Gupta",
        mobileNo: 558698747,
        salary: "100,000",
        position: "Manager",
    },
];

var tableData = document.querySelector("#tbody");
var cross = document.querySelector(".cross");
var updateBtn = document.querySelector("#updateBtn");
var newEmployees = document.querySelector("#add_worker");

function printData(foundData = employees) {
    var output = "";

    for (let i = 0; i < foundData.length; i++) {
        output += `   <tr>
        <td>${i + 1}</td>
        <td>${foundData[i]["name"]}</td>
        <td>${foundData[i]["mobileNo"]}</td>
        <td>${foundData[i]["salary"]}</td>
        <td>${foundData[i]["position"]}</td>
        <td>
            <button class = "btn_1" id=${i} onclick = 'editData(this.id);' >Edit</button>
            <button class = "btn_2" id=${i} onclick = 'deleteData(this.id);'>Delete</button>
        </td>
        </tr>`;
    }
    tableData.innerHTML = output;
}
printData();

//Close popup on cancel icon
cross.onclick = () => {
    document.querySelector(".edit_popup").style.display = "none";
};
//Function for edit data in employees sheet;................................
function editData(indexValue) {
    document.querySelector(".edit_popup").style.display = "block";
    updateBtn.dataset.employees = indexValue;

    document.querySelector("#edit_name").value = employees[indexValue]["name"];
    document.querySelector("#edit_mobile").value =
        employees[indexValue]["mobileNo"];
    document.querySelector("#edit_salary").value =
        employees[indexValue]["salary"];
    document.querySelector("#edit_position").value =
        employees[indexValue]["position"];
}

//function for update data

function updateData() {
    // console.log(employeesUpdate.name);
    var employeesUpdate = employees[this.dataset.employees];
    employeesUpdate.name = document.querySelector("#edit_name").value;
    employeesUpdate.mobileNo = document.querySelector("#edit_mobile").value;
    employeesUpdate.salary = document.querySelector("#edit_salary").value;
    employeesUpdate.position = document.querySelector("#edit_position").value;
    document.querySelector(".edit_popup").style.display = "none";

    printData();
}
updateBtn.onclick = updateData;

//Function for delete employees data;................................................

function deleteData(indexValue) {
    if (confirm("Are you sure?")) {
        employees.splice(indexValue, 1);
    }
    if (employees.length === 0) {
        alert("Nothing to delete!");
        document.querySelector("#empty_data").innerHTML = "No data found";
    }
    printData();
}

//function for add Employees

newEmployees.onclick = () => {
    var workers = {
        name: document.querySelector("#add_name").value,
        mobileNo: document.querySelector("#add_mobile").value,
        salary: document.querySelector("#add_salary").value,
        position: document.querySelector("#add_position").value,
    };
    if (
        document.querySelector("#add_name").value !== "" &&
        document.querySelector("#add_mobile").value !== "" &&
        document.querySelector("#add_salary").value !== "" &&
        document.querySelector("#add_position").value !== ""
    ) {
        employees.push(workers);
    } else {
        alert("Values not Entered:");
    }

    document.querySelector("#add_name").value = "";
    document.querySelector("#add_mobile").value = "";
    document.querySelector("#add_salary").value = "";
    document.querySelector("#add_position").value = "";
    printData();
};

// Searching part start

var searchInp = document.querySelector("#search_input");
searchInp.onkeyup = searchNames;

//search data
function searchNames() {
    var searchVal = this.value;

    var dataFound = []; //empty array = search data

    var arrayLen = employees.length;

    for (i = 0; i < arrayLen; i++) {
        if (
            employees[i]["name"].toLowerCase().indexOf(searchVal.toLowerCase()) === 0
        ) {
            dataFound.push(employees[i]); //pushing in new array
        }
    }
    printData(dataFound);
}