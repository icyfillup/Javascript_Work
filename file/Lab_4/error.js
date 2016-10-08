
function YourFaultError(message)
{
    this.message = message;
    this.stack = (new Error()).stack;
}

YourFaultError.prototype = Object.create(Error.prototype)
YourFaultError.prototype.name = "YourFaultError"

function SplitString(String)
{
    var IsLucky = Math.floor(100 * Math.random());
    var ListOfWords = String.split(" ");

    //*[DEBUG]*/ console.log("IsLucking: ", IsLucky)
    //*[DEBUG]*/ IsLucking = 99
    //*[DEBUG]*/ IsLucking = 0

    if(IsLucky < 75)
    {
	return ListOfWords
    }
    else
    {
	throw new YourFaultError("Oh, Everything was fine. My bad")
    }
    
}


function TryCatchFunction(sentences)
{
    try
    {
	return SplitString(sentences);
    }
    catch(error)
    {
	//console.log("Something went wrong:\n\t");
	return TryCatchFunction(sentences)
    }

    
}

function TestFunction(Sentences)
{
    Sentences.forEach(function(val, i)
		      {
			  console.log("-----------------------")
			  //*[DEBUG]*/ console.log("Sentences.forEach (i, val): (" , i , ", ", val, ")");
			  var isEqual = true;
			  var words = TryCatchFunction(val)
			  var ListOfWords = val.split(" ");
			  ListOfWords.forEach(function(keys, j)
					      {
						  //*[DEBUG]*/ console.log("\twords.forEach (j, keys): (" , j , ", ", keys, ")");
						  if(keys != words[j])
						  {
						      isEqual = false;
						  }
					      })
			  if(isEqual)
			  {
			      console.log("Sentence", (i + 1), ": Passed\n-----------------------");
			  }
		      })
}

var Sentences = ["How are you doing today?",
		 "How is life in Southern California?",
		 "Where did you come from?"];

TestFunction(Sentences)