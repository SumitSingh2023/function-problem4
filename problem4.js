/*Problem-4
Write code to calculate the average of an array
If there are no items in the array it should return 0
NOTE: Create a function to find the sum of elements in an array and use that function to find out the average */

function avrege(){
    let arr=[1,2,3,4,5,6]
let count=0
let sum=0
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
    count++

}
let avg=(sum/count)
console.log(avg)
}
avrege()
