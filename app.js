
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , MongoStore = require('connect-mongo')(express)
  , settings = require('./settings')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , flash = require('connect-flash')
//  , partials = require('express-partials')

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
//  app.use(partials());
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(flash());
  app.use(express.session({
    secret : settings.cookieSecret,
    store : new MongoStore({
      db : settings.db
    })
  }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
//app.get('/u/:user', routes.user);
//
app.get('/reg', routes.checkNotLogin);
app.get('/reg', routes.reg);
app.post('/reg', routes.checkNotLogin);
app.post('/reg', routes.doReg);

app.get('/useredit', routes.checkLogin);
app.get('/useredit', routes.edit);
app.get('/useredit', routes.checkLogin);
app.post('/useredit', routes.doEdit);

app.get('/login', routes.checkNotLogin);
app.get('/login', routes.login);
app.post('/login', routes.checkNotLogin);
app.post('/login', routes.doLogin);

app.get('/logout', routes.checkLogin);
app.get('/logout', routes.logout);

app.get('/usercenter', routes.checkLogin);
app.get('/usercenter', routes.usercenter);

app.get('/createline', routes.checkLogin);
app.get('/createline', routes.createLine);

app.post('/createline', routes.checkLogin);
app.post('/createline', routes.doCreateLine);

app.get('/browesdetail/:lineid', routes.browesDetail);
app.get('/broweslist', routes.browesList);

app.get('/createstops/:lineid', routes.checkLogin);
app.get('/createstops/:lineid', routes.createStops);

app.post('/createstops/:lineid', routes.checkLogin);
app.post('/createstops/:lineid', routes.doCreateStops);

app.get('/signmap/:lineid', routes.checkLogin);
app.get('/signmap/:lineid', routes.signMap);

app.post('/signmap/:lineid', routes.checkLogin);
app.post('/signmap/:lineid', routes.doSignMap);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});