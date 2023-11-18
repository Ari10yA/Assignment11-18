const { faker } = require('@faker-js/faker');
const fs = require('fs');

function generateDoctorData() {
  const doctorData = [];

  for (let i = 0; i < 50; i++) {
    const data = {
        _id: faker.string.uuid(),
        name: faker.person.fullName(),
        image: faker.image.avatar(),
        type: faker.helpers.arrayElement(["Cardiologist", "Dermatologist", "Orthopedic Surgeon", "Pediatrician", "Ophthalmologist"]),
        experience: faker.helpers.arrayElement([10, 20, 15, 25, 30, 35]),
        address: faker.helpers.arrayElement(['address 1, street:1', 'address 2, street:2', 'address 3, street:3']),
        fee: faker.helpers.arrayElement([200, 300, 250, 350, 400]),
        patient: faker.helpers.arrayElement(['100+', '200+', '300+'])
    };

    doctorData.push(data);
  }

  return doctorData;
}

const doctorsData = generateDoctorData();

let jsonData = JSON.stringify(doctorsData, null, 2)

fs.writeFileSync('doctors.json', jsonData);