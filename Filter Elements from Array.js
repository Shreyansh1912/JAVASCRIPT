/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let new_arr = [];
     arr.forEach((x,i) => {
         if(fn(x,i)){
             new_arr.push(x);
         }
     });
     return new_arr;
};


