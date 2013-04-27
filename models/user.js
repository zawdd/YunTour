var mongodb = require('./db');
var ObjectId = require('mongodb').ObjectID;

function User(user) {
  this.userEmail = user.userEmail;
  this.userName = user.userName;
  this.password = user.password;
  this.userNation = user.userNation;//"中国";
  this.userImage = user.userImage;
  this.accountType = user.accountType;//"free";
  this.tourCreate = user.tourCreate;//[];
  this.takenSpace = user.takenSpace;//0;
  this.userLanguage = user.userLanguage;//"中文";
  this.userShort = user.userShort;//"";
  this.baseDir = user.baseDir;//"";
  this.authorType = user.authorType;//"LICENSEDGUIDE";
  this.signUpDate = user.signUpDate;//"";
};

module.exports = User;

User.prototype.create = function create(callback) {
  //创建用户
  var user = {
    userEmail : this.userEmail,
    userName : this.userName,
    password : this.password,
    userNation : this.userNation,
    userImage : this.userImage,
    accountType : this.accountType,
    tourCreate : this.tourCreate,
    takenSpace : this.takenSpace,
    userLanguage : this.userLanguage,
    userShort : this.userShort,
    baseDir : this.baseDir,
    authorType : this.authorType,
    signUpDate : this.signUpDate,
  };
  console.log("create open db");
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    //读取user集合
    db.collection('user', function(err, collection) {
      if (err) {
	mongodb.close();
	return callback(err);
      }
      //为userName增加索引，保证唯一性
      collection.ensureIndex('userEmail', {unique : true});
      collection.insert(user, {safe: true}, function(err, user) {
	mongodb.close();
	console.log("create close db");
	callback(err, user);
     });
      
    });
  });
};

User.get = function get(useremail, callback){
  console.log("userget open db");
  mongodb.open(function(err, db){
    if (err) {
      return callback(err);
    }
    db.collection('user', function(err, collection) {
      if (err) {
	mongodb.close();
	return callback(err);
      }
      //查找userName 为username的文档
      collection.findOne({userEmail : useremail}, function(err, doc){
	mongodb.close();
	console.log("userget close db");
	if (doc) {
	  //封装为User对象
	  var user = new User(doc);
	  callback(err, user);
	} else {
	  callback(err, null);
	}
      });
    });
  });
};

//读取该用户的_Id，以此生成用户路径

User.updateBaseDir = function updateBaseDIr(useremail, callback){
  mongodb.open(function(err, db){
    if (err) {
      return callback(err);
    }
    db.collection('user', function(err, collection){
      if (err) {
	mongodb.close();
	return callback(err);
      }
      collection.findOne({userEmail : useremail}, function(err, doc){

	if (doc) {
	  var id = doc._id.toString();
	  console.log("id"+id);
	  var user = new User(doc);
	  user.baseDir = id;//需要根据linux或者构造一个目录

	  collection.update({_id : new ObjectId(id)}, user, function(err, user){
	    mongodb.close();
	    if (err) {
	      return callback(err);
	    }
            console.log('update succesful');
	    callback(err, user);
	  });

	  callback(err, user);
        } else {
	  callback(err, null);
	}
      });
    });
  });
};

//根据用户登录邮箱，更新用户名，用户密码，个人简介，照片路径
User.findAndModifyByName = function findAndModifyByNmae(useremail,
		                                        username,
                                                        pwd,
							usershort,
						        userimage,
							callback){
  mongodb.open(function(err, db){
    if (err) {
      return callback(err);
    }

    db.collection('user', function(err, collection){
      if (err) {
	return callback(err);
      }
//需要考虑当用户不修改信息时用默认信息代替
      collection.update({userEmail : useremail}, 
	                {$set : {userName : username,
			        password : pwd,
				userShort : usershort,
			        userImage : userimage}},
			{safe : true}, function(err, user){
	mongodb.close();
	console.log("fambn close db");
	callback(err, user);
      });
    });
  });
};

//根据线路数组，得到对应的作者数组
//有错误
/*
User.getUsersByLines = function getUsersByLines(lines, callback){
  mongodb.open(function(err, db){
    if (err) {
      callback(err);
    }

    db.collection('user', function(err, collection){
      if (err) {
        return callback(err);
      }
      var users = [];
      lines.forEach(function(line, index){
	console.log('line' + line.author);
        collection.findOne({userEmail : line.author}, function(err, doc){
          if (err) {
	    callback(err, null);
	  }
	  var user = new User(doc);
          users.push(user);
	  console.log("link"+user);
	});	
      });
      callback(null, users);
    });
  });
};
*/
