
let arr = [1,15,9,14,4,20,5,3,16,2,11,10,6,7,8,17,12,13,18,19];


for(let i=0; i<arr.length-1; i++) {
    for(let j=i+1; j<arr.length; j++) {

        if(arr[i] > arr[j]) {

            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;

        }
    }
}

console.log(arr);



// or
// arr.sort(function(a, b){return a - b;});
// console.log(arr);