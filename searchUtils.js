function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Found the target
      }
    }
    return -1; // Target not found
  }
  
  module.exports = {
    linearSearch,
    
  }