var obj1 = {name: "Person 1", age: 5}
var obj2 = {age: 5, name: "Person 1"}

let compareObjects = () => {
    for (var key in obj1) {
        if(obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(compareObjects() ? "same" : "different");
