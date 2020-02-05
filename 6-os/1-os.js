//comando para inspectar el codigo
//node --inspect-brk 1-os.js

(function(exports, require, module,__filename,__dirname){
function converArrayToObject(arr) {
    return arr.reduce((curr, acc) => {
        acc[curr[0] = curr[1]];
        return acc;
    }, {});
}

const obj = converArrayToObject([
    [1,'One'],
    [2,'Two'],
    [3,'Three']
]);

console.log(obj);

});