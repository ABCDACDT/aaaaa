// mu;ltidimentional aray

const fs = require('fs');
const { parse } = require('path');
const { stringify } = require('querystring');
let arr = [
    {
        name: "nigam",
        age : 21
    }
    ,
    {
        name: "xyz",
        age: 22
    }
]
fs.writeFile('multi_arr.json', JSON.stringify(arr, null, 2), (err) => {
    if(err){
        console.log("got error");
    }
    else{
        console.log("done");
    }
})

fs.readFile('multi_arr.json', (err, data) => {
    console.log("data := " , JSON.parse(data));
})
console.log(arr[0].age);