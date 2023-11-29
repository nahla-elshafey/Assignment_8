// Sample employee data (initially populated with 5 employees)
let employees = [
    { name: 'John Doe', title: 'Software Engineer', extension: '1234' },
    { name: 'Jane Smith', title: 'Project Manager', extension: '5678' },
    { name: 'Bob Johnson', title: 'UI/UX Designer', extension: '4321' },
    { name: 'Alice Brown', title: 'Marketing Specialist', extension: '8765' },
    { name: 'Charlie Davis', title: 'System Administrator', extension: '1357' }
];

document.addEventListener('DOMContentLoaded', function () {
    // Initial update of the employee table
    updateEmployeeTable();
});

// Function to update the employee table
function updateEmployeeTable() {
    const tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    // Add rows for each employee
    employees.forEach((employee, index) => {
        const row = tableBody.insertRow();
        const cellName = row.insertCell(0);
        const cellTitle = row.insertCell(1);
        const cellExtension = row.insertCell(2);
        const cellDelete = row.insertCell(3);

        cellName.textContent = employee.name;
        cellTitle.textContent = employee.title;
        cellExtension.textContent = employee.extension;

        // Add delete button with the index as a parameter
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteEmployee(index);
        };

        cellDelete.appendChild(deleteButton);
    });
}

// Function to add a new employee
function addEmployee() {
    const nameInput = document.getElementById('nameInput');
    const titleInput = document.getElementById('titleInput');
    const extensionInput = document.getElementById('extensionInput');
    const warningMessage = document.getElementById('warningMessage');

    // Check if all fields are filled
    if (!nameInput.value || !titleInput.value || !extensionInput.value) {
        warningMessage.textContent = 'All fields are required!';
        return;
    }

    // Add the new employee to the array
    const newEmployee = {
        name: nameInput.value,
        title: titleInput.value,
        extension: extensionInput.value
    };

    employees.push(newEmployee);

    // Clear input fields and warning message
    nameInput.value = '';
    titleInput.value = '';
    extensionInput.value = '';
    warningMessage.textContent = '';

    // Update the employee table
    updateEmployeeTable();
}

// Function to delete an employee
function deleteEmployee(index) {
    employees.splice(index, 1);
    updateEmployeeTable();
}










