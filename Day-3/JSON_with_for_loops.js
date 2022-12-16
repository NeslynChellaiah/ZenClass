const student = {
  name: "John",
  age: 22,
  language: "English",
  batch: "B42WEENG"
};

const keys = Object.keys(student);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i] + ":", student[keys[i]]);
}

for (const key in student) {
    console.log(key + ":", student[key]);
}

for (const key of keys) {
    console.log(key + ":", student[key]);
}

keys.forEach((key) => {
    console.log(key + ":", student[key]);
});