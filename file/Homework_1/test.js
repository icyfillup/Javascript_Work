
var Deck =
    {
	map: {},
	size: 52,
	cards: [],
	
	Shuffle: function()
	{
	    for(var i = 0; i < Deck.cards.length; i++)
	    {
		var RandomCardSwitch = Math.floor(52 * Math.random());
	    	var temp = this.cards[i];
		this.cards[i] = this.cards[RandomCardSwitch];
		this.cards[RandomCardSwitch] = temp;
	    }
	},

	CreateDeck: function()
	{
	    for(var i = 0; i < this.size; i++)
	    {
		this.cards[i] = i;
	    }
	},

	DealCard: function()
	{
	    return Deck.cards.pop()
	}
    };

for(var i = 0; i < Deck.size; i++)
{
    switch(i % 13)
    {
    case 0:	
	Deck.map[i] = "Ace "
	break;
    case 1:
	Deck.map[i] = "2 "
	break;
    case 2:
	Deck.map[i] = "3 "
	break;
    case 3:
	Deck.map[i] = "4 "
	break;
    case 4:
	Deck.map[i] = "5 "
	break;
    case 5:
	Deck.map[i] = "6 "
	break;
    case 6:
	Deck.map[i] = "7 "
	break;
    case 7:
	Deck.map[i] = "8 "
	break;
    case 8:
	Deck.map[i] = "9 "
	break;
    case 9:
	Deck.map[i] = "10 "
	break;
    case 10:
	Deck.map[i] = "Jack "
	break;
    case 11:
	Deck.map[i] = "Queen "
	break;
    case 12:
	Deck.map[i] = "King "
	break;
    default:
	console.error("something gone terribly wrong in card number.\nCurrent number: " + i + "out of 52")
    }
    
    switch(Math.floor(i / 13))
    {
    case 0:
	Deck.map[i] += "of Diamond"
	break;
    case 1:
	Deck.map[i] += "of Club"
	break;
    case 2:
	Deck.map[i] += "of Heart"
	break;
    case 3:
	Deck.map[i] += "of Spade"
	break;
    default:
	console.error("something gone terribly wrong in suit.\nCurrent number: " + Math.Floor(i / 13) + "out of 4")
	break;
    }
}

/*
  Deck.CreateDeck()
  Deck.Shuffle()
  console.log(Deck.cards)
  console.log(Deck.DealCard())
  console.log(Deck.cards)

  Deck.CreateDeck()
  console.log(Deck.cards.length)
*/































