// const fs = require('fs');
// const obj = {
//     name : "nigam",
//     age: 21,
//     college : "Nirma"
// }

// var obj_str = JSON.stringify(obj, null, 2);
// fs.writeFile('data.json', obj_str, (err) => {
//     if(err){
//         console.log("Error occurs");
//     }
//     else{
//         console.log("DONE");
//     }
// });

const fs = require('fs');
const obj = {
    name: "nigam",
    age: 21,
    college : "Nirma"
}

var obj_str = JSON.stringify(obj, null, 10);
fs.writeFile('data.json',obj_str,  (err) =>{
    if(err){
        console.log("ERROR");
    }
    else{
        console.log("Confirm");
    }
})