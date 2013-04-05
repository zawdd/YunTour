
/*
 * GET home page.
 */
var User = require('../models/user.js');
var Line = require('../models/line.js');
var ObjectId = require('mongodb').ObjectID

exports.index = function(req, res){
  res.render('index', { title: 'YunTour' });
};

exports.reg = function(req, res){
  res.render('reg', {       
    title: '用户注册',
//    user: req.session.user,    
//    success: req.flash('success').toString(),      
//    error: req.flash('error').toString() 
  });
};

//用户注册页面post处理
exports.doReg = function(req, res){
  console.log(req.body.useremail +"/n" + req.body['password'] + "/t" + req.body['password-repeat']);
  if (req.body['password-repeat'] !== req.body['password']){
    req.flash('error', '两次输入的口令不一样');
    console.log("两次口令不一样");
    return res.redirect('/reg');
  }

  var newUser = new User({
    userEmail : req.body.useremail,
    userName : "",
    password : req.body.password,
    userNation : "中国",
    accountType :  "free",
    tourCreate : [],
    takenSpace : 0,
    userLanguage : "中文",
    userShort : "",
    baseDir : "",
    authorType : "LICENSEDGUIDE",
    signUpDate : new Date()
  });

  User.get(newUser.userEmail, function(err, user){
    //检查用户名是否存在    
    if (user) {
      err = 'Useremail already exists.';
      
    }
    if (err) {
      req.flash('error', err);
      console.log("用户已经存在");
      return res.redirect('/reg');
    }
    //如果不存在则新增用户
    newUser.create(function(err) {
      if (err) {
	req.flash('error', err);
	return res.redirect('/reg');
	console.log("插入失败");
      }
      
      req.session.user = newUser;
      //创建完成用户后根据用户id更新用户在服务器上的存储路径
      User.updateBaseDir(req.session.user.userEmail, function(err, user){
        if (err) {
	  req.flash('error', err);
    	  return res.redirect('/reg');
        }
	if (user) {
	  //建立以user.baseDir为目录的文件夹
	  console.log("user.baseDIr:"+user.baseDir);
	}
      });

      req.flash('success', '注册成功');
      console.log("注册成功")
      res.redirect('/');      
    });
  });
};

//用户资料编辑页面
exports.edit = function(req, res){
  res.render('useredit', {       
    title: '用户资料修改',
    user: req.session.user,
  });
};

exports.doEdit = function(req, res){
  if (req.body['password-repeat'] !== req.body['password']){
    req.flash('error', '两次输入的口令不一样');
    console.log("两次口令不一样");
    return res.redirect('/useredit');
  }

  User.findAndModifyByName(req.session.user.userEmail,
                           req.body.username,
                           req.body.password,
			   req.body.usershort,
			   req.body.userimage,//应使用真实的上传目录
                           function(err, user){
    if(err){       
      req.flash('error', err);
      return res.redirect('/useredit');
      console.log("更改用户信息失败");      
    }
    req.flash('success', '更改用户信息成功');
    console.log("更改用户信息成功")
    res.redirect('/usercenter'); 

  });

};

//显示用户的所有信息
exports.usercenter = function(req, res){
  User.get(req.session.user.userEmail, function(err, user) { //由于可能用户编辑，所以需要即时刷新
    req.session.user = user;
      res.render('usercenter', {
      title: "用户中心",
      user : req.session.user,
    });
  });
};

//用户登录
exports.login = function(req, res){
  res.render('login', {
    title: '用户登入',
//    user: req.session.user,
    success: req.flash('success').toString(),
    error: req.flash('error').toString()
  });
};

exports.doLogin = function(req, res){
      User.get(req.body.useremail, function(err, user) {
	if (!user) {
	  req.flash('error', '用户不存在');
	  return res.redirect('/login');
	}
	if (user.password !== req.body.password) {
	  req.flash('error', '用户口令错误');
	  return res.redirect('/login');
	}
	req.session.user = user;
	console.log('userID' + user._id);
 	req.flash('success', '登入成功');
	console.log("用户"+user.userEmail+"成功登录");
	res.redirect('/');
      });
};

//登出
exports.logout = function(req, res) {
  req.session.user = null;
  req.flash('success', '登出成功');
  console.log("用户成功登出");
  res.redirect('/');
};

//检查用户在访问页面时是否已经登陆
exports.checkLogin = function(req, res, next) {
  if (!req.session.user) {
    req.flash('error', '未登入');
    return res.redirect('/login');
  }    
  next();
};

exports.checkNotLogin = function(req, res, next) {
  if (req.session.user) {
    req.flash('error', '已登录');
    return res.redirect('/');
  }
  next();
};

//创建线路
exports.createLine = function(req, res) {
  res.render('createline', {
    title: "创建一条新的线路",
    user : req.session.user,
  });

};

exports.doCreateLine = function(req, res) {
  //省略了输入合法性的判断

  var newLine = new Line({
    lineName : req.body.linename,
    coverThumbnail : req.body.coverthumbnail,
    lineSummary : req.body.linesummary,
    stops : [],
    baseDir : "",
    mapType : "googlemap",
    mapAddress : "",
    locate : [],
    language : req.body.language,
    lineLength : 0,
    duration : req.body.duration,
    topics : req.body.topics,
    price : req.body.price,
    author : req.session.user.userEmail,
    keyWords : req.body.keywords,
    traffics : req.body.traffics,
    cautions : "",
    lineLinks : "",
    lineVedios : "",
    totalScore : 0,
    totalPeople : 0,
    signUpDate : new Date()
  }); 

  newLine.create(function(err){
    if (err) {
      req.flash('error', err);
      return res.redirect('/createline');
      console.log("插入失败");
    } else {
      req.flash('success', '创建成功');
      res.redirect("/");
    }

  });
};

//浏览一条线路的详细信息
exports.browesDetail = function browesDetail(req, res){
  console.log(req.params.lineid);
  Line.get(req.params.lineid, function(err, line){
    User.get(line.author, function(err, user){
      res.render('browesdetail', {
        title : "浏览详细线路信息",
        line : line,
        user : user,
	lineid : req.params.lineid,      
      });
    });
    
  });

};

//显示路线的列表
//目前无法显示作者的信息，需要进入详细页面才能显示
exports.browesList = function browesList(req, res){
  var key = '人文';

  Line.findByTopics(key, function(err, lines){
    if (err) {
      var lines = [];
    }
    res.render('broweslist',{
      title : "路线列表",
      lines : lines,
      //users : users,
    });   
  });
};

//根据路线ID，增加其中的站点
//可以根据用户名搜索出用户创建的路线，进而找到路线ID
//这里需要防止A用户修改B用户路线的信息
exports.createStops = function createStops(req, res){

  Line.get(req.params.lineid, function(err, line){
    User.get(line.author, function(err, user){
      res.render('createstops', {
        title : "创建站点",
        line : line,
        user : user,
      });
    });    
  });

};

exports.doCreateStops = function doCreateStops(req, res){
  var stop = {
    num : req.body.num, //通过数组中的位置来给出顺序
    lineId : new ObjectId(req.params.lineid),
    stopName : req.body.stopname,
    stopDes : req.body.stopdes,
    locate : [],
    stopThumbnail : req.body.stopthumbnail,
    stopImages : [req.body.stopimages1,
                  req.body.stopimages2, 
		  req.body.stopimages3],
    stopAudio : req.body.stopaudio,
    imageOrder : req.body.imageorder,
    createDate : new Date(),
  };

  Line.insertStop(req.params.lineid, stop, function(err, line){
    if (err) {
      req.flash('error', err);
      return res.redirect('/createstop');
      console.log("插入失败");
    } else {
      req.flash('success', '插入成功');
      res.redirect("/browesdetail/"+req.params.lineid);
    }
  }); 
};

//在地图上标注站点
exports.signMap = function signMap(req, res){
//显示路线和其中的每个站点
  Line.get(req.params.lineid, function(err, line){
    res.render('signmap', {
      title : "标注每个站点的位置",
      line : line,
      lineid : req.params.lineid,      
    });
    
  });

};

exports.doSignMap = function doSignMap(req, res){
//接受googlemap标注的信息，转换成坐标
  //var locations = [{[11, 20]},{[11, 21]},{[12, 21]}];
  var locations = new Array();
  locations[0] = [11, 20];
  locations[1] = [11, 21];
  locations[2] = [12, 21];
  console.log(locations.length);

  Line.get(req.params.lineid, function(err, line){
    line.locate = locations[0];
    line.lineLength = 10;//根据具体坐标计算
    for(var i = 0; i<locations.length; i++){
      line.stops[i].locate = locations[i];
    }   
    Line.update(req.params.lineid, line, function(err, doc){
      if (err) {
        req.flash('error', err);
        return res.redirect('/signmap/'+req.params.lineid);
        console.log("标注失败");
      } else {
        req.flash('success', '标注成功');
        res.redirect("/browesdetail/"+req.params.lineid);
      }

    });
  });
};