let fs = require("fs");
let inputArr = process.argv.slice(2);
console.log(inputArr+ " ");

//placed file path in  fileArr
let fileArr = [];
for(let i=0;i<inputArr.length;i++){
    fileArr.push(inputArr[i]);
}
console.log("file to be ready"+fileArr);

//check if all file are present 
for(let i=0;i<fileArr.length;i++){
    let doesExist =fs.existsSync(fileArr[i]);
    if(!doesExist){
        console.log("file does not exist");
        return;
    }
}

//content read and appending starts

let content ="";
for(let i=0;i<fileArr.length;i++){
    let filecontent =fs.readFileSync(fileArr[i]);
    content += filecontent +"\n";
}
console.log(content);