console.log('JS');
let employeeList = [];
let totalMonthly = 0;
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
    employeeInfo = {
        firstName: $(`#firstNameEnter`).val(``),
        lastName: $(`#lastNameEnter`).val(``),
        iD: $(`#idEnter`).val(``),
        title: $(`#titleEnter`).val(``),
        annualSalary: $(`#annualSalaryEnter`).val(``)
    };
    render();
    monthlyTotal();
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
    <td>${formatCurrency(employee.annualSalary)}</td>
    <td><button id="deleteButton">Delete</button></td>
    </tr>
    `);

        $(`#drop`).append(row);
    }
};

function deleteEmployee() {
    $(this).closest(`tr`).remove();
};

function monthlyTotal() {
    let totalSalary = 0;
    for (let i = 0; i < employeeList.length; i++) {
        let fixedSalary = Number(employeeList[i].annualSalary);
       totalSalary += fixedSalary;
    }
   totalMonthly = totalSalary/12;


   if(totalMonthly>20000){
    $(`#monthly`).addClass(`moola`)
}
        $(`#monthly`).text(formatCurrency(totalMonthly));
};

function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    }).format(number);
  };

