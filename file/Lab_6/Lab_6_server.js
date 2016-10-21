var convert = require("./convert_file_to_string_module");

var FileText = convert("Lab_6.html")

var http = require("http")

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});  
    response.write(FileText);
    response.end();
})

server.listen(8000)