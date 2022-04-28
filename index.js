const employee = {
  name: "Paco",
  streetAddress: "1234 Pleasant",
};

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
  const updatedEmployee = { ...employeeObject };
  updatedEmployee[key] = value;
  return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newDelete = { ...employee };
  delete newDelete[key];
  return newDelete;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
