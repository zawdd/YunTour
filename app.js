
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
//  app.set('views', __dirname + '/views');
  app.set('views', __dirname + '/web');
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



app.get('/usercenter', routes.checkLogin);
app.get('/usercenter', routes.usercenter);

app.get('/createline', routes.checkLogin);
app.get('/createline', routes.createLine);

app.post('/createline', routes.checkLogin);
app.post('/createline', routes.doCreateLine);

app.get('/browsedetail/:lineid', routes.browseDetail);
app.get('/browselist', routes.browseList);

app.get('/createstops/:lineid', routes.checkLogin);
app.get('/createstops/:lineid', routes.createStops);

app.post('/createstops/:lineid', routes.checkLogin);
app.post('/createstops/:lineid', routes.doCreateStops);

app.get('/signmap/:lineid', routes.checkLogin);
app.get('/signmap/:lineid', routes.signMap);

app.post('/signmap/:lineid', routes.checkLogin);
app.post('/signmap/:lineid', routes.doSignMap);
//web
app.get('/step1', routes.checkLogin);
app.get('/step1', routes.step1);
app.post('/step1', routes.checkLogin)
app.post('/step1', routes.step1Save);

app.get('/step2', routes.checkLogin);
app.get('/step2', routes.step2);
app.post('/step2', routes.checkLogin);
app.post('/step2', routes.step2Insert);

app.get('/step3', routes.checkLogin);
app.get('/step3', routes.step3);
app.post('/step3', routes.checkLogin);
app.post('/step3', routes.mapInfoHandler);

app.get('/create', routes.checkLogin);
app.get('/create', routes.create);

app.get('/detail', routes.detail);
app.get('/browse', routes.browse);

app.get('/signin', routes.checkNotLogin);
app.get('/signin', routes.login);
app.post('/signin', routes.checkNotLogin);
app.post('/signin', routes.doLogin);

app.get('/signup', routes.checkNotLogin);
app.get('/signup', routes.reg);
app.post('/signup', routes.checkNotLogin);
app.post('/signup', routes.doReg);

app.get('/home', routes.checkLogin);
app.get('/home', routes.home);
app.post('/home', routes.checkLogin);
app.post('/home', routes.doHome);

app.get('/logout', routes.checkLogin);
app.get('/logout', routes.logout);

app.get('/remove', routes.remove);
//app.post('/save', routes.save);
app.post('/uploadhandler', routes.uploadifyhandler);
//android
app.get('/androidtest', routes.androidTest);

app.get('/browsebyaddress', routes.browseByAddress);
app.get('/browsebytopic', routes.browseByTopic);
app.get('/browsebyaddresstopic', routes.browseByAddressTopic);
app.get('/browsebylocation', routes.browseByLocation);
app.get('/browsebyid', routes.browseByID);
app.get('/browsebyemail', routes.browseByEmail);
app.get('/browseallbytime', routes.browseAllByTime);
app.get('/apkupdate', routes.apkupdate);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
