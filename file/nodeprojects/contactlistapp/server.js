var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"))

app.get('/contactlist', function(request, response)
	{
	    console.log("I received a GET request")

	    person1 = 
		{
		    name: 'tim',
		    email: 'time@email.com',
		    number: '(111) 111-1111'
		};

	    person2 = 
		{
		    name: 'tom',
		    email: 'tom@email.com',
		    number: '(222) 111-1111'
		};

	    person3 = 
		{
		    name: 'john',
		    email: 'john@email.com',
		    number: '(333) 111-1111'
		};

	    var contactlist = [person1, person2, person3];
	    response.json(contactlist)
	})

app.listen(3000);
console.log("Server running on port 3000");