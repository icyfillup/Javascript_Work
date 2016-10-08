
//the constructor triggered by the [new] keyword
function TextCell(text) {
    this.text = text.split("\n");
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    ///*[DEBUG]*/ console.log("rows' heights: ", heights);
    ///*[DEBUG]*/ console.log("rows' widths: ", widths);

    function drawLine(blocks, lineNo) {
	var temp = blocks.map(function(block) {
            return block[lineNo];
	}).join(" ");
	///*[DEBUG]*/console.log("drawLine->temp: ", temp);
	return temp;
    }

    function drawRow(row, rowNum) {
	//formatting row with correct spacing
	var blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
	});
	///*[DEBUG]*/ console.log("drawTable->blocks: ", blocks);
	//console.log("drawTable->blocks[0]: ", blocks[0]);
	
	
	return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
	}).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

// returns an array of how much line height each row TextCell has
function rowHeights(rows) {
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

function UnderlinedCell(inner) {
    this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
	return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
	return keys.map(function(name) {
            var value = row[name];
            if (typeof value == "number")
		return new RTextCell(String(value));
            else
		return new TextCell(String(value));
	});
    });
    return [headers].concat(body);
}

function RTextCell(text) {
    TextCell.call(this, text);
}

RTextCell.prototype.draw = function(width, height) {
    //console.log("bye bbye");
    var result = [];
    for (var i = 0; i < height; i++) {
	var line = this.text[i] || "";
	result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};


var restaurants = [];
restaurants.push([new TextCell("Bucco de\nBeppo"), new TextCell("$$$")]);
restaurants.push([new TextCell("Denny's"), new TextCell("$$")]);
restaurants.push([new TextCell("Denn's\ncookies"), new TextCell("$")]);
console.log(restaurants);
console.log()

RTextCell.prototype = Object.create(TextCell.prototype);
dataTable(restaurants);
/*
var rest = [];
rest.push([new RTextCell("Bucco de\nBeppo"), new RTextCell("$$$")]);
//rest.push([new RTextCell("Denny's"), new TextCell("$$")]);
//rest.push([new RTextCell("Denn's\ncookies"), new TextCell("$")]);

console.log(drawTable(rest))
//console.log(rest);
*/