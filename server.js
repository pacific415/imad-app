var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
     title: 'Article One | Prashant Jadhav',
     heading:'Article One',
     date:'Sep 12, 2016',
     content:  
      `  <p>
                    This is the content for my first article.This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article
                </p>
                <p>
                    This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article
                </p>
                <p>
                    This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article
                </p>   
 };
 
functionn createTemplate(date){ 

        var htmlTemplate =`
           <html>
          `  <head>
                <title>
                  ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
             </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        <p>
                            This is the content for my first article.This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article
                        </p>
                        <p>
                            This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article
                        </p>
                        <p>
                            This is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first articleThis is the content for my first article
                        </p>
                        </div>
                </div>
            </body>
        </html>
        ;
}





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','index.html'));
});

app.get('/article-one',function(req,res){
   res.sendFile(path.join(__dirname, 'ui','article-one.html')); 
});

app.get('/article-two',function(req,res){
  res.sendFile(path.join(__dirname, 'ui','article-two.html')); 
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui','article-three.html'));  
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(8080, function () {
console.log(`IMAD course app listening on port ${8080}!`);
 });
