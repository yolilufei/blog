// const t = await fetch('http://localhost:9000');
// console.log(t);

// form-data
const t = await fetch('http://localhost:9000/form-data');
console.log(await t.json());

// json
const jsonRes = await fetch('http://localhost:9000/json');
console.log(await jsonRes.json());







// const b = await t.blob();
// console.log(b);