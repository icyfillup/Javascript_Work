
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

console.log("Welcome! Enter 1 to continue, 0 to quit");
rl.setPrompt('AceyDeucy> ');
rl.prompt();


rl.on('line', function(line) 
      {
          if (line === "0") rl.close();
          

	  var sum = 0;
	  do
	  {
	      rl.question("Enter a number: ", function(number)
			  {
			      if(number >= 0)
                              {
				  console.log("0: " + number);
                              }
                              else
                              {
				  console.log("1: " + number);
				  
                              }
			  }
			 );
	      sum++;
	      console.log("in: " + sum)

	  }while(sum < 10)
	  
	  console.log("Enter 1 to play again, 0 to quit");
          rl.prompt();


      }
     ).on('close',function()
          {
              console.log("Thanks!");
              process.exit(0);
          }
         );






































