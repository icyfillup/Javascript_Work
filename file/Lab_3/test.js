
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
/* .... <= 1940: "Generation.¡±  
   1941 <= 1965: ¡°Baby Boomers.¡± 
   1966 <= 1976: ¡°Generation X,¡±
   1977 <= 1995: ¡°Generation Y,¡±  
   1996 <= later: ¡°Millennials.¡± 
*/
function addGeneration(group, whichGeneration)
{
    for(var i = 0; i < group.length; i++)
    {
	group[i].generation = whichGeneration(group[i].year)
    }
}

console.log(group[0])
