// const arr=[1,2,3,4,5];
// for (const i of arr) {
//     console.log(i);
// }

// const greeting="Hello world!"

// for(const greet of greeting)
// {
//     console.log(`Each char in greteing ${greet}`);
// }

//Maps == will contains only unique values with in same order

const map = new Map()
map.set('IN', 'India')
map.set('SA', 'South Africa')

console.log(map);

for (const [key,value] of map) {
    //console.log(key ,':-', value)
}

const myObject = {
    'game1': 'NFS',
    'game2' : 'Asphalt8'

}
for (const [key, value] of myObject) {
    console.log(key, value);
}