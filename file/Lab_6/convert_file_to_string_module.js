module.exports = function(WebAddress)
{
    var FileSystem = require("fs");
    var FileText = FileSystem.readFileSync(WebAddress, "utf8");
    
    return FileText;
}