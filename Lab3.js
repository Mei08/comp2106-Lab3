var connect = require('connect');
var url = require('url');
var app = connect();
var getUrl = function(req, res, next) {
   
    var ur = url.parse(req.url, true).query;
      console.log("Request for " + ur);    
 
function calculate(method, x, y)
{
 var result = 0;
 if(method == "add")
  result = x + y;

 else if(method == "subtract")
  result = x - y;

 else if(method == "multiply")
  result = x * y;

 else if(method == "divide")
  result = x / y;

 return result;
}
    
    res.writeHead(200, {
        "Content-Type": "text-plain"
    });

    // display results
    res.write(calculate);
    res.end();
};

app.use(connect);
app.listen(3000);
console.log('Connect app running at http://localhost:3000');