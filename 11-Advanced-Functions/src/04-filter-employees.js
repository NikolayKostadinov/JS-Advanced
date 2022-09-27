function solve(input, criteria) {
    let counter = 0;
    
    let employees = JSON.parse(input);
    if (criteria !== 'all') {
        const [propertyName, value] = criteria.split('-');
        employees = employees.filter(emp => emp[propertyName] === value);
    }

    console.log(
        employees
            .map(e => `${counter++}. ${e.first_name} ${e.last_name} - ${e.email}`)
            .join('\n')
    );
}

solve(`[{
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
    'gender-Female'
);