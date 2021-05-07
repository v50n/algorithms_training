function sym(...args) {
    return args.reduce((initiator,currentArr) => {
      initiator = deleteDuplicate(initiator);
      currentArr = deleteDuplicate(currentArr);
      for(let i = 0; i < currentArr.length; i++){
        if(initiator.includes(currentArr[i])){
          // delete this from initiator
          initiator = initiator.filter(val => val !== currentArr[i])
        }else{
          initiator.push(currentArr[i]);
        }
      }
      return initiator
    }, [])
}
  
function deleteDuplicate(arr){
    var returnArr = [];
    for(let i = 0; i < arr.length; i++){
      if(!returnArr.includes(arr[i])){
        returnArr.push(arr[i])
      }
    }
    return returnArr;
}
sym([1, 2, 3, 3], [5, 2, 1, 4,4]);

function updateInventory(arr1, arr2) {
    var newInventory = [];
  console.log(arr1.map(item => item[1]));
    var listCurItem = arr1.map(item => item[1]);
    var arrayItem = [];
    var listNewItem = [];
    var index;
    var total;
  //for each item in newInv
    for(let i = 0; i< arr2.length;i++){
        //If yes : find index of this item in currentInv, adition with the newVal and push in the newArray. 
      index = listCurItem.indexOf(arr2[i][1]);
      //  check if the item existe in current Inv
      if(index !== -1){
        total = arr1[index][0] + arr2[i][0];
        arrayItem = [total,arr2[i][1]];   
      }else{
        arrayItem = [arr2[i][0],arr2[i][1]];
      }
      newInventory.push(arrayItem)
      //If no : push in the new array
    }
    listNewItem = newInventory.map(item => item[1]);

    for(let i = 0; i<arr1.length;i++){
      index = listNewItem.indexOf(arr1[i][1]);

      if(index === -1){
        arrayItem = [arr1[i][0],arr1[i][1]];
        newInventory.push(arrayItem)
      }
    }
    newInventory.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });

    
    return newInventory;
}
