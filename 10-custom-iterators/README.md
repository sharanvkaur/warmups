#Custom Iterators

Write as many of the the following functions as you can.

### forEach

It should take two parameters, an array and a callback function. Inside the function use a for loop to loop through each of the array elements. Invoke the callback function in each loop passing it the element, index and array as arguments.

### map

It should take two parameters, an array and a callback function. Inside the function use a for loop to loop through each of the array elements. Invoke the callback function in each loop passing it the element, index and array as arguments. Take whatever this function returns and make add it to a new array. At the end of the function return the new array.

### reduce

It should take three parameters, an array, a callback function and an initial 'sum' value. Inside the function use a for loop to loop through each of the array elements. Invoke the callback function in each loop passing it the sum value and the current element. Take the return value of the callback and save it into the sum value.

Extension: If no initial sum value is provided, then pass the first two elements to the callback instead

### filter

It should take two parameters, an array and a callback function. Inside the function use a for loop to loop through each of the array elements. Invoke the callback function in each loop passing it the element, index and array as arguments. If this function returns true then add this element to a new array. At the end of the function return the new array.

### every

It should take two parameters, an array and a callback function. Inside the function use a for loop to loop through each of the array elements. Invoke the callback function in each loop passing it the element, index and array as arguments. If all callbacks return true then your function should also return true, else it should return false.
