
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
    usserImage : "",
    accountType :  "free",
    tourCreate : [],
    takenSpace : 0,
    userLanguage : "中文",
    userShort : "",     
    baseDir : "",
    authorType : "职业导游",
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
    authorEmail : req.session.user.userEmail,
    author : req.session.user.userName, 
    authorBio : req.session.user.userShort,
    authorImage : req.session.user.userImage,
    authorType :  req.session.user.authorType,
    keyWords : req.body.keywords,
    traffics : req.body.traffics,
    cautions : "",
    lineLinks : "",
    lineVedios : "",
    totalScore : 0,
    totalPeople : 0,
    createDate : new Date()
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
exports.browseDetail = function browseDetail(req, res){
  console.log(req.params.lineid);
  Line.get(req.params.lineid, function(err, line){
    User.get(line.author, function(err, user){
      res.render('browsedetail', {
        title : "浏览详细线路信息",
        line : line,
        user : user,
	lineid : req.params.lineid,      
      });
    });
    
  });

};

//显示路线的列表
exports.browseList = function browseList(req, res){
  var key = '人文';
//  var key = [10, 20];
//  Line.findByLocation(key, function(err, lines){
  Line.findByTopics(key,0,25, function(err, lines){
    if (err) {
      var lines = [];
    }
    res.render('browselist',{
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
    //lineId : new ObjectId(req.params.lineid),
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

//Android端
//根据topic显示路线
exports.browseByTopic = function browseByTopic(req, res){
  var topic = req.query.topic;
  var beg = req.query.beg;
  var end = req.query.end;
  Line.findByTopics(topic, beg, end, function(err, lines){
    if (err) {
      var lines = [];
    }
    res.end(JSON.stringify(lines), 'utf8'); 
  });
};
//根据mapAddress显示路线
exports.browseByAddress = function browseByAddress(req, res){
  var mapaddress = req.query.address;
  var beg = req.query.beg;
  var end = req.query.end;
  Line.findByAddress(mapaddress, beg, end, function(err, lines){
    if (err) {
      var lines = [];
    }
    res.end(JSON.stringify(lines), 'utf8'); 
  });
};
//根据mapAddress和topic显示路线
exports.browseByAddressTopic = function browseByAddressTopic(req, res){
  var mapaddress = req.query.address;
  var topic = req.query.topic;
  var beg = req.query.beg;
  var end = req.query.end;
  Line.findByAddressTopic(mapaddress, topic, beg, end, function(err, lines){
    if (err) {
      var lines = [];
    }
    res.end(JSON.stringify(lines), 'utf8'); 
  });
};

//根据位置坐标显示路线
exports.browseByLocation = function browseByLocation(req, res){
  var locations = [req.query.x, req.query.y];
  var beg = req.query.beg;
  var end = req.query.end;
  Line.findByLocation(locations, beg, end, function(err, lines){
    if (err) {
      var lines = [];
    }
    res.end(JSON.stringify(lines), 'utf8'); 
  });

};

//浏览一条线路的详细信息
exports.browseByID = function browseByID(req, res){
  Line.get(req.query.lineid, function(err, line){
    if (err) {
      var line = null;
    }
    res.end(JSON.stringify(line), 'utf8');
  });    
};
//根据用户email显示路线
exports.browseByEmail = function browseByEmail(req, res){
  var authoremail = req.query.author;
  Line.findByEmail(authoremail, function(err, lines){
    if (err) {
      var lines = [];
    }
    res.end(JSON.stringify(lines), 'utf8'); 
  });
};

//根据时间顺序显示路线
exports.browseAllByTime = function browseAllByTime(req, res){
  var beg = req.query.beg;
  var end = req.query.end;
  Line.findAllByTime(beg, end, function(err, lines){
    if (err) {
      var lines = [];
    }
    res.end(JSON.stringify(lines), 'utf8'); 
  });
};

//web端路由函数
exports.step1 = function(req, res) {
//在打开step1的时候就创建路线，得到id和baseDir方便图片的存储
  var newLine = new Line({
    lineName : "",
    coverThumbnail : "",
    lineSummary : "",
    stops : [],
    baseDir : "",
    mapType : "Google",
    mapAddress : "",
    locate : [],
    language : "中文",
    lineLength : 0,
    duration : 0,
    topics : [],
    price : 0,
    authorEmail : req.session.user.userEmail,
    author : req.session.user.userName, 
    authorImage : req.session.user.userImage,
    authorBio : req.session.user.userShort,
    authorType :  req.session.user.authorType,
    keyWords : "",
    traffics : "",
    cautions : "",
    lineLinks : "",
    lineVedios : "",
    totalScore : 10,
    totalPeople : 1,
    createDate : new Date()
  }); 

  newLine.create(function(err, line){
    if (err) {
      req.flash('error', err);
      return res.redirect('/step1');
      console.log("插入失败");
    } else {
      //req.flash('success', '创建成功');
      console.log("create"+line._id);
      req.session.lineId = line._id;
      res.render('step1', {
        title: "创建一条新的线路",
        user : req.session.user.userEmail,
	lineId : req.session.lineId
      });
    }

  });
};

exports.step1Save = function(req, res) {
  
  Line.get(req.session.lineId, function(err, line){
	  
    line.lineName = req.body.lineName;
    line.lineSummary = req.body.lineSummary;
    line.mapAddress = req.body.mapAddress;
    line.keyWords = req.body.keyWords.split(',');
    var alltopics = ["历史","艺术","时尚","体育","家庭","生活方式","自然"];
    var topicsArr = req.body.topics.split(',');
    var topics = new Array();
    for(var i=0;i<topicsArr.length;i++){
      topics[i] = alltopics[parseInt(topicsArr[i])];
    }  
    line.topics = topics;

    Line.update(req.session.lineId, line, function(err, doc){
      if (err) {
        req.flash('error', err);
        //return res.redirect('/signmap/'+req.params.lineid);
        console.log("失败");
      } else {
        req.flash('success', '成功');
        //res.redirect("/browesdetail/"+req.params.lineid);
      }

    });
  });
};

exports.step2 = function(req, res){
  Line.get(req.session.lineId, function(err, line){
    User.get(line.authorEmail, function(err, user){
      res.render('detail', {
        title: '创建站点',
        user: req.session.user.userEmail,
        line : line,
	lineid : req.session.lineId,      
      });
    });
    
  });

};
/*
exports.step2Save = function(req, res){
  Line.get(req.session.lineId, function(err, line){
    line.stops[req.body.stopnum].stopName = req.body.stopname;

    Line.update(req.session.lineId, line, function(err, doc){
      if (err) {
        req.flash('error', err);
        //return res.redirect('/signmap/'+req.params.lineid);
      } else {
        req.flash('success', '成功');
        //res.redirect("/browesdetail/"+req.params.lineid);
      }
    });
  });
};

exports.step2Insert = function(req, res){
  var stop = {
    num : req.body.stopnum, //通过数组中的位置来给出顺序
    stopName : req.body.stopname,
    stopDes : req.body.stopdes,
    locate : [],
    stopThumbnail : req.body.stopthumbnail,
    stopImages : [req.body.stopimages1,
                  req.body.stopimages2, 
		  req.body.stopimages3],
    stopAudio : req.body.stopaudio,
    imageOrder : '0',
    createDate : new Date(),
  };
  Line.insertStop(req.session.lineId, stop, function(err, line){
    if (err) {
      req.flash('error', err);
      //return res.redirect('/createstop');
    } else {
      req.flash('success', '插入成功');
      //res.redirect("/browesdetail/"+req.params.lineid);
    }
  });
};
*/
exports.step3 = function(req, res){
  //根据路线ID查询得到stop的数组
  var testid = "517b6a8a07782eafacad3876";
  Line.get(testid, function(err, line){
    var stopIdArr = new Array();
    var stopNameArr = new Array();
    var i = 0;
    var stopArr = line.stops;
    for(i = 0; i<stopArr.length; i++){
	stopIdArr[i] = stopArr[i].num;
	stopNameArr[i] = stopArr[i].stopName;
    }
    res.render('step3', { 
      title: '站点地图',
      user: req.session.user.userEmail,
      lineId: req.session.lineId,
      stopIds: stopIdArr,
      stopNames: stopNameArr
      });    
  });

};

//exports.step3Save = function(req, res){
//};

exports.create = function(req, res) {

  var authoremail = req.session.user.userEmail;
  Line.findByEmail(authoremail, function(err, lines){
    if (err) {
      var lines = [];
    }
    res.render('create', { 
      title : '创建路线',
      user : req.session.user.userEmail,
      page : '1',      
      lines : lines
      });
  });


};

exports.detail = function(req, res) {
  Line.get(req.query.lineid, function(err, line){
    User.get(line.authorEmail, function(err, user){
      res.render('detail', {
        title : "浏览详细线路信息",
        line : line,
        user : user,
	lineid : req.query.lineid,      
      });
    });
    
  });
};

exports.browse = function(req, res) {
  var beg = (req.query.page-1)*10;
  var end = req.query.page*10;
  Line.findAllByTime(beg, end, function(err, lines){
    if (err) {
      var lines = [];
    }
    if( Object.keys(lines).length != 0){
      res.render('browse', { 
        title : '观看路线',
        //user : req.session.user.userEmail,
        lines : lines,
	page : req.query.page      
        //lineAuthorNations: 'lineAuthorNationArr'
      });
    }else{
      res.redirect("/browse?page="+(req.query.page-1));
    }	    
  });

};

exports.remove = function(req, res) {
  console.log("delete"+req.session.lineId);
  req.session.lineId = null;
  Line.remove(req.session.lineId, function(err, line){
    res.redirect("/step1");
  });
};

exports.uploadifyhandler = function(req, res, next) {
    console.log(req.files.Filedata.path);//上传到服务器上的文件名字及路径，但没有文件后缀
    console.log(req.files.Filedata.name);//文件在用户本地上的文件名，包含后缀名
    var fileName = req.files.Filedata.path + '.'
         + req.files.Filedata.name.substr(req.files.Filedata.name.indexOf('.')+1).toLowerCase();
    console.log(fileName);//上传到服务器上的文件名字及路径，有文件后缀
    fs.rename(req.files.Filedata.path, fileName, function(){
          });
    /*moveFile(fileName, '/public/'+fileName, function() {
           });*/
    fs.createReadStream(fileName).pipe(fs.createWriteStream('./public/'+fileName));
    if(req.files.Filedata.path)
        res.send(JSON.stringify({success: true, uploadFileName: fileName}), {'Content-Type': 'text/plain'}, 200);
    else
        res.send(JSON.stringify({success: false, error: err}), {'Content-Type': 'text/plain'}, 404);
}

//Andorid test
exports.androidTest = function androidTest(req, res){
  /*console.log(req.body);
  lineid = '515e4f2c477d6e8405000002';
  res.contentType('json');
  //res.send(JSON.stringify({statu : "success" }));
  //res.end(JSON.stringify({statu : "success" }));
  
  Line.get(lineid, function(err, line){
    console.log(line.lineName);
    res.contentType('json');
    //res.send(JSON.stringify(line));
    //res.json(line);
    //res.send(JSON.stringify({status : "error" }));
    //res.send("blablablablabla");
    res.end(JSON.stringify(line), 'utf8');
  });*/

    var key = '人文';
//  var key = [10, 20];
//  Line.findByLocation(key, function(err, lines){
  Line.findByTopics(key, function(err, lines){
    if (err) {
      var lines = [];
    }
    res.end(JSON.stringify(lines), 'utf8');
  })
 
};

exports.test = function(req, res){
    var alltopics = ["历史","艺术","时尚","体育","家庭","生活方式","自然"];
    var topicsArr = req.query.topics.split(',');
    var topics = new Array();
    for(var i=0;i<topicsArr.length;i++){
      topics[i]=alltopics[parseInt(topicsArr[i])];
    }  
    console.log(topics);
};
