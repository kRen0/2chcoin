var express = require('./express');
var app = express();

app.configure(function() {
    app.engine('html', require('./uinexpress').__express) // Используем функцию "template" библиотеки underscore для рендеринга
    app.set('view engine', 'html')                      
    app.set('views', __dirname + "/tpl");
    app.set("view options", {layout: 'layout.html'});   // Файл layout.html по умолчанию будет оборачивать все шаблоны
    app.use(express.static(__dirname + "/public"));     // Делаем файлы из папки public доступными на сайте
});

app.get('/', function(req, res){  
    res.render('index.html');
});

var port = process.env.PORT || 80;       
app.listen(port)
console.log("Listening at " + port)