function myEach(collection, callback){
    let newColl = [];
    if ( Array.isArray( collection ) )
    {
        newColl = collection
    }
    else
    {
        newColl = Object.values(collection)
    }
    for (let i=0; i< newColl.length; i++){
        callback(newColl[i])
    }
    return collection
}

function myMap(collection, callback) {
    let newColl;
    let newColls = []
    if ( Array.isArray( collection ) )
    {
        newColl = collection
    }
    else
    {
        newColl = Object.values(collection)
    }
    for (let i = 0; i < newColl.length; i++) {
        newColls.push(callback(newColl[i]));
      }
      return newColls;
}
function simp(collection){
    if (Array.isArray(collection) === true) {
        return collection
    } else { 
        return Object.values(collection)
    }
}


function myReduce(collection, callback, acc){
    let newColl = simp(collection)
    if (acc === undefined) {
        acc = newColl[0]
        for (let i = 1; i<newColl.length; i++){
            acc = callback(acc, newColl[i], collection)
        }
    }
    else {
        for (let i=0; i<newColl.length; i++){
            acc = callback(acc, newColl[i], collection)
        }
    }
    return acc
}

function myFind(collection, predicate) {
    let newColl = simp(collection)
    for (let i = 0; i < newColl.length; i++) {
       if (predicate(newColl[i]) === true) {
    return newColl[i]
       }
  }
  return undefined
 }
 
function myFilter(collection, predicate){
    let newColl = simp(collection)
    let find = []
    for (let i = 0; i < newColl.length; i++) {
        if (predicate(newColl[i])) {
          find.push(newColl[i]);
        }
      }
      return find;
    }

    function mySize(collection){
        let newColl = simp(collection)
        return newColl.length
    }

    function myFirst(array, n){
        if (typeof n === "number") {
            return array.slice(0,n);
        }
        else
        {
          return array[0];
        }
    }

    function myLast(array, n){
        if (typeof n === "number") {
            return array.slice(-n);
          }
          else
          {
            return array[mySize(array)-1];
          }
    }

    function myKeys(object) {
        return Object.keys(object)
    }

    function myValues(object) {
        return Object.values(object)
    }