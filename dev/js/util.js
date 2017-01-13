export function parseUsername(email) {
  var dotNotation = email.substring(0,email.indexOf("@"));
  return dotNotation.substring(0,dotNotation.indexOf('.'))+dotNotation.substring(dotNotation.indexOf('.')+1)
}

export function bubbleSortFTW(array, field) {
  while(true)
  {
    var sorted = 1;
    for (var i = 0; i < (array.length-1); i++) {
      if (array[i][field] > array[i+1][field])
      {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = 0;
      }
    }
    if (sorted)
    {
      return array;
    }
  }
}

export function bubbleSortFTWFields(objects, field) {
  var array = [];
  for( var i in objects)
  {
    array.push(objects[i]);
  }
  console.log(array)
  array = bubbleSortFTW(array, field);
  console.log('sorted array', array)
  return array;
}
