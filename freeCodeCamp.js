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