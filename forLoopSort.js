function sortSmallToLarge(array) {
  for(let i = 0; i < array.length; i++){
    for(let j = i; j < array.length; j++){
      if(array[i] > array[j]){
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  console.log(array)
  return array;
}

sortSmallToLarge([1,5,7,3,2,4,3])

function sortLargeToSmall (array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = i; j < array.length; j++){
      if(array[i] < array[j]){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

sortLargeToSmall([1,5,7,3,2,4,3])