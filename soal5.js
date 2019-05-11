var data = [
    ['g','h','x','j'],
    ['a','c’,’b','e','d'],
    ['q','w','a'],

];
var data2 = [
    ['a','c','b','e','d'],
    ['g','e','f']
];
function sortArray(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].sort();
        let lastArr = sorted.pop();
        newArr.push(lastArr);
    }
    return newArr;
}


console.log(sortArray(data2));