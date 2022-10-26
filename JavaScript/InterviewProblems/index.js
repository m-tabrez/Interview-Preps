const funCurrying = (a) => {
     return (b) => console.log(a+b)
}

//funCurrying(2)(3)

const reverseString = (str) => {
    let splitted = str.split("");
    let reversed = '';
    for(i=splitted.length-1; i>=0; i--){
        reversed+= splitted[i];
    }
    console.log(reversed)
}

//reverseString('hello world');

const removeDuplicates = (arr) => {
    let uniq = [];
    arr.map(curEle => {
        let index = uniq.indexOf(curEle)
        if(index == -1){
            uniq.push(curEle);
        }
    })
    console.log(uniq)
    //es6
    //console.log([...new Set(arr)], 'es6 way')
}

//removeDuplicates([5,9,5,'hello',10,6,'hello',10])

const checkObjectEmpty = (obj) => {
   return Object.keys(obj).length == 0
}

//console.log(checkObjectEmpty({name:'tabrez', age : 30}))

let student1 = {name : 'tabrez', age : 30}
let student2 = {name : 'tabrez', age : 30}

const compareObjectsArrays = (x, y) => {
    return JSON.stringify(x) == JSON.stringify(y)
}

//console.log(compareObjectsArrays(student1, student2))

var myArray = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
  ];

const removeArrayElementBasedOnObjectProp = (arr) => {
    let filtered = arr.filter(curEle => curEle.field !== 'money')
    console.log(filtered)
}

//removeArrayElementBasedOnObjectProp(myArray)

const swapTwoNums = (x, y) => {
let a = x;
let b = y;
let temp;
console.log(a,b)
temp=a;
a=b;
b=temp;
console.log(a,b)
//es6
// [a,b] = [b,a]
}

//swapTwoNums(5,8);

let nums = [9,5,6,2,4,1];

const sortNums = (arr) => {
    let ascending = [...arr];
    ascending.sort();
    let descending = [...arr];
    descending.sort((a,b) => {
        return b-a;
    })
    console.log(ascending , 'Ascending')
    console.log(descending, 'Descending')
}

sortNums(nums)