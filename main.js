//Solution is incomplete. Challenge was time restricted, with more time I'll split the srings to have no space and map the array into a number array to then sort.

function highAndLow(numbers){
  let arr= Number(numbers.split(""))
  let arr1=[]
  arr.sort((a,b) => b-a)
  arr1= arr[0].concat(arr[1])
  return arr1.join(" ")
  
}
