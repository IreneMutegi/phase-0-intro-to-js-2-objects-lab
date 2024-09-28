// Write your solution in this file!
const employee = {
    name: "Edmond",
    streetAddress: "Bahati"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "Nairobi");

console.log(employee);
console.log(updatedEmployee);


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Mutate the original object
    return employee; // Return the mutated object
}

// Example usage:
const updatedEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "Mombasa");

//console.log(employee); // Original object is now updated
console.log(updatedEmployee2); // Both variables reference the same updated object


function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedKey, ...newEmployee } = employee; // Destructure to exclude the key
    return newEmployee; // Return the new object without the specified key
}


console.log(employee); // Original object remains unchanged
console.log(updatedEmployee); // New object without streetAddress


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Mutate the original object by deleting the key
    return employee; // Return the mutated object
}

console.log(employee); // Original object is now updated
console.log(updatedEmployee); // Both variables reference the same updated object
