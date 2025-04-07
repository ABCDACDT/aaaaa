const fs = require('fs');
fs.readFile('multi_arr.json', (err, data) => {
    console.log(JSON.parse(data));
})

// have to do .parse because data is read in form of buffers so need to convert it back to JSON object