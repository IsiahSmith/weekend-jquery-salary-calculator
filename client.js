console.log('JS');
let employeeList = [];
$(readyNow);

function readyNow() {
    console.log('JQ');
    $(`#Submit`).on(`click`, addEmployee)
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
    
};