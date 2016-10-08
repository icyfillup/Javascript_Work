
var name = [ "Allison", "Arthur", "Ana", "Alex", "Arlene", "Alberto",
	     "Barry", "Bertha", "Bill", "Bonnie", "Bret", "Beryl", "Chantal",
	     "Cristobal", "Claudette", "Charley", "Cindy", "Chris", "Dean",
	     "Dolly", "Danny", "Danielle", "Dennis", "Debby", "Erin", "Edouard",
	     "Erika", "Earl", "Emily", "Ernesto", "Felix", "Fay", "Fabian",
	     "Frances", "Franklin", "Florence", "Gabielle", "Gustav", "Grace",
	     "Gaston", "Gert", "Gordon", "Humberto", "Hanna", "Henri",
	     "Hermine", "Harvey", "Helene", "Iris", "Isidore", "Isabel", "Ivan",
	     "Irene", "Isaac", "Jerry", "Josephine", "Juan", "Jeanne", "Jose",
	     "Joyce", "Karen", "Kyle", "Kate", "Karl", "Katrina", "Kirk",
	     "Lorenzo", "Lili", "Larry", "Lisa", "Lee", "Leslie", "Michelle",
	     "Marco", "Mindy", "Maria", "Michael", "Noel", "Nana", "Nicholas",
	     "Nicole", "Nate", "Nadine", "Olga", "Omar", "Odette", "Otto",
	     "Ophelia", "Oscar", "Pablo", "Paloma", "Peter", "Paula",
	     "Philippe", "Patty", "Rebekah", "Rene", "Rose", "Richard", "Rita",
	     "Rafael", "Sebastien", "Sally", "Sam", "Shary", "Stan", "Sandy",
	     "Tanya", "Teddy", "Teresa", "Tomas", "Tammy", "Tony", "Van",
	     "Vicky", "Victor", "Virginie", "Vince", "Valerie", "Wendy",
	     "Wilfred", "Wanda", "Walter", "Wilma", "William", "Kumiko", "Aki",
	     "Miharu", "Chiaki", "Michiyo", "Itoe", "Nanaho", "Reina", "Emi",
	     "Yumi", "Ayumi", "Kaori", "Sayuri", "Rie", "Miyuki", "Hitomi",
	     "Naoko", "Miwa", "Etsuko", "Akane", "Kazuko", "Miyako", "Youko",
	     "Sachiko", "Mieko", "Toshie", "Junko", "Naomi" ];

var lastName = [ "Abbott", "Acevedo", "Acosta", "Adams", "Adkins",
		 "Aguilar", "Aguirre", "Albert", "Alexander", "Alford", "Allen",
		 "Allison", "Alston", "Alvarado", "Alvarez", "Anderson", "Andrews",
		 "Anthony", "Armstrong", "Arnold", "Ashley", "Atkins", "Atkinson",
		 "Austin", "Avery", "Avila", "Ayala", "Ayers", "Bailey", "Baird",
		 "Baker", "Baldwin", "Ball", "Ballard", "Banks", "Barber", "Barker",
		 "Barlow", "Barnes", "Barnett", "Barr", "Barrera", "Barrett",
		 "Barron", "Barry", "Bartlett", "Barton", "Bass", "Bates", "Battle",
		 "Bauer", "Baxter", "Beach", "Bean", "Beard", "Beasley", "Beck",
		 "Becker", "Bell", "Bender", "Benjamin", "Bennett", "Benson",
		 "Bentley", "Benton", "Berg", "Berger", "Bernard", "Berry", "Best",
		 "Bird", "Bishop", "Black", "Blackburn", "Blackwell", "Blair",
		 "Blake", "Blanchard", "Blankenship", "Blevins", "Bolton", "Bond",
		 "Bonner", "Booker", "Boone", "Booth", "Bowen", "Bowers", "Bowman",
		 "Boyd", "Boyer", "Boyle", "Bradford", "Bradley", "Bradshaw",
		 "Brady", "Branch", "Bray", "Brennan", "Brewer", "Bridges",
		 "Briggs", "Bright", "Britt", "Brock", "Brooks", "Brown",
		 "Browning", "Bruce", "Bryan", "Bryant", "Buchanan", "Buck",
		 "Buckley", "Buckner", "Bullock", "Burch", "Burgess", "Burke",
		 "Burks", "Burnett", "Burns", "Burris", "Burt", "Burton", "Bush",
		 "Butler", "Byers", "Byrd", "Cabrera", "Cain", "Calderon",
		 "Caldwell", "Calhoun", "Callahan", "Camacho", "Cameron",
		 "Campbell", "Campos", "Cannon", "Cantrell", "Cantu", "Cardenas",
		 "Carey", "Carlson", "Carney", "Carpenter", "Carr", "Carrillo",
		 "Carroll", "Carson", "Carter", "Carver", "Case", "Casey", "Cash",
		 "Castaneda", "Castillo", "Castro", "Cervantes", "Chambers", "Chan",
		 "Chandler", "Chaney", "Chang", "Chapman", "Charles", "Chase",
		 "Chavez", "Chen", "Cherry", "Christensen", "Christian", "Church",
		 "Clark", "Clarke", "Clay", "Clayton", "Clements", "Clemons",
		 "Cleveland", "Cline", "Cobb", "Cochran", "Coffey", "Cohen", "Cole",
		 "Coleman", "Collier", "Collins", "Colon", "Combs", "Compton",
		 "Conley", "Conner", "Conrad", "Contreras", "Conway", "Cook",
		 "Cooke", "Cooley", "Cooper", "Copeland", "Cortez", "Cote",
		 "Cotton", "Cox", "Craft", "Craig", "Crane", "Crawford", "Crosby",
		 "Cross", "Cruz", "Cummings", "Cunningham", "Curry", "Curtis",
		 "Dale", "Dalton", "Daniel", "Daniels", "Daugherty", "Davenport",
		 "David", "Davidson", "Davis", "Dawson", "Day", "Dean", "Decker",
		 "Dejesus", "Delacruz", "Delaney", "Deleon", "Delgado", "Dennis",
		 "Diaz", "Dickerson", "Dickson", "Dillard", "Dillon", "Dixon",
		 "Dodson", "Dominguez", "Donaldson", "Donovan", "Dorsey", "Dotson",
		 "Douglas", "Downs", "Doyle", "Drake", "Dudley", "Duffy", "Duke",
		 "Duncan", "Dunlap", "Dunn", "Duran", "Durham", "Dyer", "Eaton",
		 "Edwards", "Elliott", "Ellis", "Ellison", "Emerson", "England",
		 "English", "Erickson", "Espinoza", "Estes", "Estrada", "Evans",
		 "Everett", "Ewing", "Farley", "Farmer", "Farrell", "Faulkner",
		 "Ferguson", "Fernandez", "Ferrell", "Fields", "Figueroa", "Finch",
		 "Finley", "Fischer", "Fisher", "Fitzgerald", "Fitzpatrick",
		 "Fleming", "Fletcher", "Flores", "Flowers", "Floyd", "Flynn",
		 "Foley", "Forbes", "Ford", "Foreman", "Foster", "Fowler", "Fox",
		 "Francis", "Franco", "Frank", "Franklin", "Franks", "Frazier",
		 "Frederick", "Freeman", "French", "Frost", "Fry", "Frye",
		 "Fuentes", "Fuller", "Fulton", "Gaines", "Gallagher", "Gallegos",
		 "Galloway", "Gamble", "Garcia", "Gardner", "Garner", "Garrett",
		 "Garrison", "Garza", "Gates", "Gay", "Gentry", "George", "Gibbs",
		 "Gibson", "Gilbert", "Giles", "Gill", "Gillespie", "Gilliam",
		 "Gilmore", "Glass", "Glenn", "Glover", "Goff", "Golden", "Gomez",
		 "Gonzales", "Gonzalez", "Good", "Goodman", "Goodwin", "Gordon",
		 "Gould", "Graham", "Grant", "Graves", "Gray", "Green", "Greene",
		 "Greer", "Gregory", "Griffin", "Griffith", "Grimes", "Gross",
		 "Guerra", "Guerrero", "Guthrie", "Gutierrez", "Guy", "Guzman",
		 "Hahn", "Hale", "Haley", "Hall", "Hamilton", "Hammond", "Hampton",
		 "Hancock", "Haney", "Hansen", "Hanson", "Hardin", "Harding",
		 "Hardy", "Harmon", "Harper", "Harrell", "Harrington", "Harris",
		 "Harrison", "Hart", "Hartman", "Harvey", "Hatfield", "Hawkins",
		 "Hayden", "Hayes", "Haynes", "Hays", "Head", "Heath", "Hebert",
		 "Henderson", "Hendricks", "Hendrix", "Henry", "Hensley", "Henson",
		 "Herman", "Hernandez", "Herrera", "Herring", "Hess", "Hester",
		 "Hewitt", "Hickman", "Hicks", "Higgins", "Hill", "Hines", "Hinton",
		 "Hobbs", "Hodge", "Hodges", "Hoffman", "Hogan", "Holcomb",
		 "Holden", "Holder", "Holland", "Holloway", "Holman", "Holmes",
		 "Holt", "Hood", "Hooper", "Hoover", "Hopkins", "Hopper", "Horn",
		 "Horne", "Horton", "House", "Houston", "Howard", "Howe", "Howell",
		 "Hubbard", "Huber", "Hudson", "Huff", "Huffman", "Hughes", "Hull",
		 "Humphrey", "Hunt", "Hunter", "Hurley", "Hurst", "Hutchinson",
		 "Hyde", "Ingram", "Irwin", "Jackson", "Jacobs", "Jacobson",
		 "James", "Jarvis", "Jefferson", "Jenkins", "Jennings", "Jensen",
		 "Jimenez", "Johns", "Johnson", "Johnston", "Jones", "Jordan",
		 "Joseph", "Joyce", "Joyner", "Juarez", "Justice", "Kane",
		 "Kaufman", "Keith", "Keller", "Kelley", "Kelly", "Kemp", "Kennedy",
		 "Kent", "Kerr", "Key", "Kidd", "Kim", "King", "Kinney", "Kirby",
		 "Kirk", "Kirkland", "Klein", "Kline", "Knapp", "Knight", "Knowles",
		 "Knox", "Koch", "Kramer", "Lamb", "Lambert", "Lancaster", "Landry",
		 "Lane", "Lang", "Langley", "Lara", "Larsen", "Larson", "Lawrence",
		 "Lawson", "Le", "Leach", "Leblanc", "Lee", "Leon", "Leonard",
		 "Lester", "Levine", "Levy", "Lewis", "Lindsay", "Lindsey",
		 "Little", "Livingston", "Lloyd", "Logan", "Long", "Lopez", "Lott",
		 "Love", "Lowe", "Lowery", "Lucas", "Luna", "Lynch", "Lynn",
		 "Lyons", "Macdonald", "Macias", "Mack", "Madden", "Maddox",
		 "Maldonado", "Malone", "Mann", "Manning", "Marks", "Marquez",
		 "Marsh", "Marshall", "Martin", "Martinez", "Mason", "Massey",
		 "Mathews", "Mathis", "Matthews", "Maxwell", "May", "Mayer",
		 "Maynard", "Mayo", "Mays", "Mcbride", "Mccall", "Mccarthy",
		 "Mccarty", "Mcclain", "Mcclure", "Mcconnell", "Mccormick", "Mccoy",
		 "Mccray", "Mccullough", "Mcdaniel", "Mcdonald", "Mcdowell",
		 "Mcfadden", "Mcfarland", "Mcgee", "Mcgowan", "Mcguire", "Mcintosh",
		 "Mcintyre", "Mckay", "Mckee", "Mckenzie", "Mckinney", "Mcknight",
		 "Mclaughlin", "Mclean", "Mcleod", "Mcmahon", "Mcmillan", "Mcneil",
		 "Mcpherson", "Meadows", "Medina", "Mejia", "Melendez", "Melton",
		 "Mendez", "Mendoza", "Mercado", "Mercer", "Merrill", "Merritt",
		 "Meyer", "Meyers", "Michael", "Middleton", "Miles", "Miller",
		 "Mills", "Miranda", "Mitchell", "Molina", "Monroe", "Montgomery",
		 "Montoya", "Moody", "Moon", "Mooney", "Moore", "Morales", "Moran",
		 "Moreno", "Morgan", "Morin", "Morris", "Morrison", "Morrow",
		 "Morse", "Morton", "Moses", "Mosley", "Moss", "Mueller", "Mullen",
		 "Mullins", "Munoz", "Murphy", "Murray", "Myers", "Nash", "Navarro",
		 "Neal", "Nelson", "Newman", "Newton", "Nguyen", "Nichols",
		 "Nicholson", "Nielsen", "Nieves", "Nixon", "Noble", "Noel",
		 "Nolan", "Norman", "Norris", "Norton", "Nunez", "Obrien", "Ochoa",
		 "Oconnor", "Odom", "Odonnell", "Oliver", "Olsen", "Olson", "Oneal",
		 "Oneil", "Oneill", "Orr", "Ortega", "Ortiz", "Osborn", "Osborne",
		 "Owen", "Owens", "Pace", "Pacheco", "Padilla", "Page", "Palmer",
		 "Park", "Parker", "Parks", "Parrish", "Parsons", "Pate", "Patel",
		 "Patrick", "Patterson", "Patton", "Paul", "Payne", "Pearson",
		 "Peck", "Pena", "Pennington", "Perez", "Perkins", "Perry",
		 "Peters", "Petersen", "Peterson", "Petty", "Phelps", "Phillips",
		 "Pickett", "Pierce", "Pittman", "Pitts", "Pollard", "Poole",
		 "Pope", "Porter", "Potter", "Potts", "Powell", "Powers", "Pratt",
		 "Preston", "Price", "Prince", "Pruitt", "Puckett", "Pugh", "Quinn",
		 "Ramirez", "Ramos", "Ramsey", "Randall", "Randolph", "Rasmussen",
		 "Ratliff", "Ray", "Raymond", "Reed", "Reese", "Reeves", "Reid",
		 "Reilly", "Reyes", "Reynolds", "Rhodes", "Rice", "Rich", "Richard",
		 "Richards", "Richardson", "Richmond", "Riddle", "Riggs", "Riley",
		 "Rios", "Rivas", "Rivera", "Rivers", "Roach", "Robbins",
		 "Roberson", "Roberts", "Robertson", "Robinson", "Robles", "Rocha",
		 "Rodgers", "Rodriguez", "Rodriquez", "Rogers", "Rojas", "Rollins",
		 "Roman", "Romero", "Rosa", "Rosales", "Rosario", "Rose", "Ross",
		 "Roth", "Rowe", "Rowland", "Roy", "Ruiz", "Rush", "Russell",
		 "Russo", "Rutledge", "Ryan", "Salas", "Salazar", "Salinas",
		 "Sampson", "Sanchez", "Sanders", "Sandoval", "Sanford", "Santana",
		 "Santiago", "Santos", "Sargent", "Saunders", "Savage", "Sawyer",
		 "Schmidt", "Schneider", "Schroeder", "Schultz", "Schwartz",
		 "Scott", "Sears", "Sellers", "Serrano", "Sexton", "Shaffer",
		 "Shannon", "Sharp", "Sharpe", "Shaw", "Shelton", "Shepard",
		 "Shepherd", "Sheppard", "Sherman", "Shields", "Short", "Silva",
		 "Simmons", "Simon", "Simpson", "Sims", "Singleton", "Skinner",
		 "Slater", "Sloan", "Small", "Smith", "Snider", "Snow", "Snyder",
		 "Solis", "Solomon", "Sosa", "Soto", "Sparks", "Spears", "Spence",
		 "Spencer", "Stafford", "Stanley", "Stanton", "Stark", "Steele",
		 "Stein", "Stephens", "Stephenson", "Stevens", "Stevenson",
		 "Stewart", "Stokes", "Stone", "Stout", "Strickland", "Strong",
		 "Stuart", "Suarez", "Sullivan", "Summers", "Sutton", "Swanson",
		 "Sweeney", "Sweet", "Sykes", "Talley", "Tanner", "Tate", "Taylor",
		 "Terrell", "Terry", "Thomas", "Thompson", "Thornton", "Tillman",
		 "Todd", "Torres", "Townsend", "Tran", "Travis", "Trevino",
		 "Trujillo", "Tucker", "Turner", "Tyler", "Tyson", "Underwood",
		 "Valdez", "Valencia", "Valentine", "Valenzuela", "Vance", "Vang",
		 "Vargas", "Vasquez", "Vaughan", "Vaughn", "Vazquez", "Vega",
		 "Velasquez", "Velazquez", "Velez", "Villarreal", "Vincent",
		 "Vinson", "Wade", "Wagner", "Walker", "Wall", "Wallace", "Waller",
		 "Walls", "Walsh", "Walter", "Walters", "Walton", "Ward", "Ware",
		 "Warner", "Warren", "Washington", "Waters", "Watkins", "Watson",
		 "Watts", "Weaver", "Webb", "Weber", "Webster", "Weeks", "Weiss",
		 "Welch", "Wells", "West", "Wheeler", "Whitaker", "White",
		 "Whitehead", "Whitfield", "Whitley", "Whitney", "Wiggins",
		 "Wilcox", "Wilder", "Wiley", "Wilkerson", "Wilkins", "Wilkinson",
		 "William", "Williams", "Williamson", "Willis", "Wilson", "Winters",
		 "Wise", "Witt", "Wolf", "Wolfe", "Wong", "Wood", "Woodard",
		 "Woods", "Woodward", "Wooten", "Workman", "Wright", "Wyatt",
		 "Wynn", "Yang", "Yates", "York", "Young", "Zamora", "Zimmerman" ];

function randomName()
{
    return name[Math.floor(Math.random() * name.length)]
}

function randomLastName()
{
    return lastName[Math.floor(Math.random() * lastName.length)]
} 

function randomSex()
{
    return (Math.floor(Math.random() * 2) % 2) ?  "M" : "F" 
} 

function randomBirth()
{
    return 1900 + Math.floor(Math.random() * 50) 
} 

function randomDeath()
{
    return 1951 + Math.floor(Math.random() * 50) 
} 

function createPerson()
{
    return {"name" : (randomName() + " " + randomLastName()), 
	    "sex" : randomSex(), 
	    "born" : randomBirth(), 
	    "died" : randomDeath(), 
	    "father" : (randomName() + " " + randomLastName()), 
	    "mother" : (randomName() + " " + randomLastName())}
}





//constructor triggered by the [new] keyword
function TextCell(text) {
    this.text = text.split("\n");
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    ///*[DEBUG]*/ console.log("rows' heights: ", heights);
    ///*[DEBUG]*/ console.log("rows' widths: ", widths);

    function drawLine(blocks, lineNo) 
    {
	var temp = blocks.map(function(block) {
            return block[lineNo];
	});
	//*[DEBUG]*/console.log("drawLine->temp: ", temp, "\n");
	
	return temp.join(" ");
    }

    function drawRow(row, rowNum) 
    {
	//formatting row with the correct spacing
	var blocks = row.map(function(cell, colNum) 
			     {
				 return cell.draw(widths[colNum], heights[rowNum]);
			     });
	//*[DEBUG]*/ console.log("drawTable->blocks: ", blocks);
	
	var temp = blocks[0].map(function(_, lineNo) 
				 {
				     DrawLine = drawLine(blocks, lineNo)
				     //*[DEBUG]*/ console.log("drawTable->DrawLine: ", DrawLine);
				     return DrawLine;
				 })

	//*[DEBUG]*/ console.log("drawTable->temp: ", temp);
	
	return temp.join("\n");
    }

    var RowDrawing = rows.map(drawRow); 
    //*[DEBUG]*/ console.log("drawTable->RowDrawing:\n", RowDrawing);
    
    return RowDrawing.join("\n");
}

// returns an array of how much line height each row TextCell has
function rowHeights(rows) {
    //*[DEBUG]*/ console.log("rowHeight->rows:\n", rows);

    return rows.map(function(row) {
	return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
	}, 0);
    });
}

// returns an array of the max width of the TextCell's table counted in num of characters 
function colWidths(rows) {
    return rows[0].map(function(_, i) {
	return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
	}, 0);
    });
}

TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
	var line = this.text[i] || "";
	result.push(line + repeat(" ", width - line.length));
    }
    ///*[DEBUG]*/ console.log("TextCell->draw: ", result);
    return result;
};

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
	result += string;
    return result;
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
	return Math.max(width, line.length);
    }, 0);
};

TextCell.prototype.minHeight = function() {
    return this.text.length;
};

function CenteredTextCell(text) {
    TextCell.call(this, text);
}

CenteredTextCell.prototype = Object.create(TextCell.prototype);

CenteredTextCell.prototype.draw = function(width, height) {
    ///*[DEBUG]*/ console.log("CenteredTextCell->width: ", width);

    var result = [];
    width = (width % 2 == 1) ? (width) : width
    var space = " "
    for (var i = 0; i < height; i++) 
    {
	var line = ""
	var CenterAlignmentPadding = (width - (this.text[i] + "").length);
	var FrontPadding = Math.floor(CenterAlignmentPadding / 2);
	var BackPadding = CenterAlignmentPadding - FrontPadding;
	line += repeat(space, FrontPadding);
	line += this.text[i] || "";
	line += repeat(space, BackPadding);
	
	///*[DEBUG]*/ console.log("CenteredTextCell->line: ", line);
	result.push(line);
    }
    ///*[DEBUG]*/ console.log("CenteredTextCell->result: ", result);
    return result;
};

function BorderedCell(text) {
    TextCell.call(this, text);
}

BorderedCell.prototype = Object.create(TextCell.prototype);

BorderedCell.prototype.draw = function(width, height) {
    //*[DEBUG]*/ console.log("BorderedCell->width: ", width);
    //*[DEBUG]*/ console.log("BorderedCell->height: ", height);
    //*[DEBUG]*/ console.log("BorderedCell->this.text: ", this.text);
    //*[DEBUG]*/ console.log("BorderedCell->this: ", this);
    

    var result = [];
    var InitVertLinePadding = 2
    var VertLine = "|"
    var HoriLine = "-"
    var Space = " "

    result.push(repeat(HoriLine, width + InitVertLinePadding));
    {
	for (var i = 0; i < height; i++) 
	{
            var line = ""

            line += VertLine;
            {
		line += this.text[i] || "";
		line += repeat(Space, width - line.length + (InitVertLinePadding / 2));
            }
            line += VertLine;   

            
            //*[DEBUG]*/ console.log("BorderedCell->line: ", line);
            result.push(line);
	}
    }
    result.push(repeat(HoriLine, width + InitVertLinePadding));
    
    //*[DEBUG]*/ console.log("BorderedCell->result: ", result);
    return result;
};

function UpperCaseRow(rowNumber, dataTable)
{
    //*[DEBUG]*/ console.log("UpperCaseRow->dataTable:\n", dataTable);
    var temp = dataTable.map(function(row, rowNum)
                             {
                                 //*[DEBUG]*/ console.log("UpperCaseRow->row:\n", row);
                                 if(rowNum == rowNumber)
                                 {
                                     return row.map(function(cell)
                                                    {
                                                        //*[DEBUG]*/ console.log("\nUpperCaseRow->cell:\n\t", cell);
                                                        var NewVal = cell.text.map(function(val)
                                                                                   {
										       
                                                                                       //*[DEBUG]*/ console.log("UpperCaseRow->val:", val);
                                                                                       var result = val.toUpperCase()
                                                                                       //*[DEBUG]*/ console.log("\nUpperCaseRow->result:\t", result);
										       
                                                                                       return result  
                                                                                   }
                                                                                  )
                                                        //*[DEBUG]*/ console.log("\nUpperCaseRow->NewVal:\n\t", NewVal);
							
							var NewCell = new BorderedCell("")
							NewCell.text = NewVal
							//*[DEBUG]*/ console.log("\nUpperCaseRow->NewCell:\n\t", NewCell);
							
                                                        return NewCell
                                                    }
                                                   )
                                 }
                                 return row
                             }
                            )
    //*[DEBUG]*/ console.log("\nUpperCaseRow->temp:\n", temp.forEach(function(val){console.log(val)}));
    return temp
}

function UpperCaseCol(ColNumber, dataTable)
{
    //*[DEBUG]*/ console.log("UpperCaseCol->dataTable:\n", dataTable);
    var temp = 
	dataTable.map(function(row, rowNum)
                      {
                          //*[DEBUG]*/ console.log("\nUpperCaseCol->row:\n", row);
                          //*[DEBUG]*/ console.log("\nUpperCaseCol->rowNum:\t", rowNum);
                          return row.map(function(cell, colNum)
                                         {
                                             //*[DEBUG]*/ console.log("\nUpperCaseCol->cell:\n\t", cell);
                                             //*[DEBUG]*/ console.log("\nUpperCaseCol->col:\t", colNum);
                                             var NewVal = 
						 cell.text.map(function(col)
                                                               {
								   //*[DEBUG]*/ console.log("\nUpperCaseCol->col:\t", col);
                                                                   //*[DEBUG]*/ console.log("\nUpperCaseCol->colNum:\t", colNum);
                                                                   
								   if(colNum == ColNumber)
								   {
								       var result = col.toUpperCase()
								       //*[DEBUG]*/ console.log("\nUpperCaseCol->result:\t", result);
								       return result  
                                                                       
								   }
								   return col
                                                               }
                                                              )
                                             //*[DEBUG]*/ console.log("\nUpperCaseCol->NewVal:\n\t", NewVal);
					     
					     var NewCell = new BorderedCell("")
					     NewCell.text = NewVal
					     //*[DEBUG]*/ console.log("\nUpperCaseCol->NewCell:\n\t", NewCell);
					     
                                             return NewCell
                                         }
                                        )
                      }
                     )
    //*[DEBUG]*/ console.log("\nUpperCaseCol->temp:\n", temp.forEach(function(val){console.log(val)}));
    return temp
}


var restaurants = [];

/*
  restaurants.push([new CenteredTextCell("Mastro's Ocean\nClub"), new CenteredTextCell("$$$$")]);
  restaurants.push([new CenteredTextCell("Denny's"), new CenteredTextCell("$")]);
  restaurants.push([new CenteredTextCell("Bucco de\nBeppo"), new CenteredTextCell("$$$")]);
*/

restaurants.push([new BorderedCell("Mastro's Ocean\nClub"), new BorderedCell("$$$")]);
restaurants.push([new BorderedCell("Denny's"), new BorderedCell("$")]);
restaurants.push([new BorderedCell("Bucco de\nBeppo"), new BorderedCell("$$$$")]);

//restaurants = UpperCaseCol(0, restaurants)
//restaurants = UpperCaseRow(2, restaurants)

//console.log(drawTable(restaurants));

var i = createPerson()

var o = [1,2,3]
i.forEach(function(val){console.log(val)})