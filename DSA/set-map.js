//set methods

let data=new Set(["anish","raj","yash"]);

console.log(data);
console.log(data.add("zeel"));
console.log(data.has("anish"));
console.log(data.delete("yash"));
console.log(data);
console.log(data.size);
console.log(data.clear());

//map methods

let mapdata=new Map([
    ["name","anish"],
    ["age",20],
    ["city","surat"]
]);

console.log(mapdata);
console.log(mapdata.get("name"));
console.log(mapdata.set("country","india"));
console.log(mapdata.has("age"));
console.log(mapdata.delete("city"));
console.log(mapdata);
console.log(mapdata.set("city","surat"));
console.log(mapdata);
console.log(mapdata.size);
console.log(mapdata.clear());

//Weakset method

let ws=new WeakSet();

let obj1={name:"anish vaghasiya"};
let obj2={num:8320744767};

console.log(ws.add(obj1));
console.log(ws.add(obj2));
console.log(ws.has(obj1));
console.log(ws.has(obj2));
console.log(ws.delete(obj1));
console.log(ws.has(obj1));

//weakmap method

let wm=new WeakMap();

let key1={name:"anish vaghasiya"};
let key2={num:8320744767};

console.log(wm.set(key1,"anish"));
console.log(wm.set(key2,"vaghasiya"));
console.log(wm.get(key1));  
console.log(wm.get(key2));
console.log(wm.has(key1));
console.log(wm.has(key2));
console.log(wm.delete(key1));
console.log(wm.has(key1));



