// function sortSmallToLarge(array) {
//   for(let i = 0; i < array.length; i++){
//     for(let j = i; j < array.length; j++){
//       if(array[i] > array[j]){
//         let temp = array[j];
//         array[j] = array[i];
//         array[i] = temp;
//       }
//     }
//   }
//   console.log(array)
//   return array;
// }

// sortSmallToLarge([1,5,7,3,2,4,3])

// function sortLargeToSmall (array) {
//   for(let i = 0; i < array.length; i++) {
//     for(let j = i; j < array.length; j++){
//       if(array[i] < array[j]){
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;
// }

// sortLargeToSmall([1,5,7,3,2,4,3])

// function miniMaxSum(arr) {
//     arr.sort((a, b) => a - b);
//     console.log(arr);
//     let minSum = 0;
//     let maxSum = 0;
//     for(let i = 0; i < arr.length - 1; i++){
//       minSum += arr[i]
//     }
//     for(let j = 1; j < arr.length; j++){
//       maxSum +=arr[j]
//     }
//   return[minSum, maxSum]
// }

// miniMaxSum([7, 69, 2, 221, 8974])

// function timeConversion(s) {
//   let newS = s.split(":");
//   console.log(newS)
//   let hour = newS[0];
//   let min = newS[1];
//   let sec = newS[2].replace(/AM|PM/, '');
//   console.log(sec)
//   if(hour === '12' && s.includes('AM')){
//     hour = '00';
//   } else if(s.includes('PM')){
//     hour = +newS[0] + 12;
//   }
//   return `${hour}:${min}:${sec}`
// }

// timeConversion('12:05:45AM')

// function blowCandles (arr){
//   let highest = 0;
//   let highArr= []
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i] > highest){
//       highest = arr[i];
//     }
//   }
//   console.log(highest)
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i] === highest){
//       highArr.push(arr[i])
//     }
//   }
//   console.log(highArr)
//   return highArr.length;
// }
// blowCandles([4,4,1,3])

function compare(arr1,arr2){
  let result1 = arr1[0] * 12 + arr1[1];
  let result2 = arr2[0] * 12 + arr2[1];
  if(result1 > result2) {
    return 'First distance is greater'
  }else if(result1 < result2){
    return 'Second distance is greater'
  }else{
    return 'Both distances are equal'
  }
}
compare([3,2.0],[1,4.1])