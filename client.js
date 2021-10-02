console.log('JS');
let employeeList = [];
$(readyNow);

function readyNow() {
    console.log('JQ');
    $(`#Submit`).on(`click`, addEmployee);
    $(`#drop`).on(`click`, `#deleteButton`, deleteEmployee);
};

function addEmployee() {
    let employeeInfo = {
        firstName: $(`#firstNameEnter`).val(),
        lastName: $(`#lastNameEnter`).val(),
        iD: $(`#idEnter`).val(),
        title: $(`#titleEnter`).val(),
        annualSalary: $(`#annualSalaryEnter`).val()
    };
    employeeList.push(employeeInfo);
    console.log(employeeList);

    render();
};

function render() {
    $(`#drop`).empty();
    for (let employee of employeeList) {
        const row = $(`
    <tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.iD}</td>
    <td>${employee.title}</td>
    <td>${employee.annualSalary}</td>
    <td><button id="deleteButton">Delete</button></td>
    </tr>
    `);
$(`#drop`).append(row);
    }
};

function deleteEmployee(){
$(this).closest(`tr`).remove();
};