// const fs = require('fs');
// const { parse } = require('path');
// fs.readFile('data_2.json', (err, data) => {
//     if(err){
//         console.log("We got error: " + err);
//     }
//     const user = JSON.parse(data);
//     console.log("DATA: " , user);
// })

const fs = require('fs');
fs.readFile('data_2.json', (err, data) => {
    if(err){
        console.log("Error found");
    }
    const userr = JSON.parse(data);
    console.log(data);
})