/* Objective
At this checkpoint you are asked to write an algorithm that fulfills the following description:
Description:===============================================================
Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
Give two Solutions to this problem, using different types of data structures each time.
Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.

Example: ===================================================================
Set 1: [12, 13, 6, 10]
Set 2: [13, 10, 16, 15]
Sum of overlapping elements: 46
Explanation: Common elements are 10, 13 */

const arr1 = [3, 1, 7, 9]
const arr2 = [2, 4, 1, 9, 3]
const arr = arr1.concat(arr2)
console.log(arr)
let sum = 0
for(let i = 0 ; i < arr.length; i++){
    if(!arr1.includes(arr[i]) || !arr2.includes(arr[i])){
        sum += arr[i]
    }
}
console.log(sum)

const newArr1 = [12, 13, 6, 10]
const newArr2 = [13, 10, 16, 15]
let newSum = 0
for (let i=0; i < newArr1.length; i++){
        if(newArr1.includes(newArr2[i])){
            newSum += newArr2[i]*2
        }
    
}
console.log(newSum)