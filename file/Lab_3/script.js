function loopThroughArray(array, operation)
{
    for(var i = 0; i < array.length; i++)
    {
	operation(array)
    }
}

var array3 = [[1,2,3], [4,5,6]]

var array4 = array3.reduce(function(prevValue, currValue, currIndex, array)
			   {
			       return prevValue.concat(currValue)
			   }
			  )

console.log("\nBefore Reduce with concat....")
console.log(array3);
console.log("\nAfter Reduce with concat....")
console.log(array4);