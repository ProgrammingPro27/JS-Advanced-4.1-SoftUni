function employeeFilter(employees, type) {
    let parsedEmployees = JSON.parse(employees);
    let parsedType = type.split("-");
    let c = 0;
    for (let i of parsedEmployees) {
        if (i[parsedType[0]] === parsedType[1]) {
            console.log(`${c}. ${i["first_name"]} ${i["last_name"]} - ${i["email"]}`);
            c++;
        }
       
    }
}
employeeFilter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')