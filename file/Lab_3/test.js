
var group = [{name: "Helen Yu", year: 1954}, 
	     {name: "Belinda Linda", year: 1967}, 
	     {name: "Alex Bye", year: 1957}, 
	     {name: "Nancy Polo", year: 1985}, 
	     {name: "Nina Geena", year: 1987}, 
	     {name: "Calvin Lance", year: 1990}, 
	     {name: "Bobby Lee", year: 1937}, 
	     {name: "Tom Brandy", year: 1999}, 
	     {name: "Link Zelda", year: 2000}] 

function whichGeneration(year)
{
    var result
    if(year >= )
    {

    }
    return result
}
/* .... <= 1940: "Generation.ˇ±  
   1941 <= 1965: ˇ°Baby Boomers.ˇ± 
   1966 <= 1976: ˇ°Generation X,ˇ±
   1977 <= 1995: ˇ°Generation Y,ˇ±  
   1996 <= later: ˇ°Millennials.ˇ± 
*/
function addGeneration(group, whichGeneration)
{
    for(var i = 0; i < group.length; i++)
    {
	group[i].generation = whichGeneration(group[i].year)
    }
}

console.log(group[0])
