var mongodb = require('./db');
var ObjectId = require('mongodb').ObjectID

function Line(line) {
  this.lineName = line.lineName;
  this.coverThumbnail = line.coverThumbnail;
  this.lineSummary = line.lineSummary;
  this.stops = line.stops;
  this.baseDir = line.baseDir;
  this.mapType = line.mapType;
  this.mapAddress = line.mapAddress;
  this.locate = line.locate;
  this.language = line.language;
  this.lineLength = line.lineLength;
  this.duration = line.duration;
  this.topics = line.topics;
  this.price = line.price;
  this.author = line.author;
  this.keyWords = line.keyWords;
  this.traffics = line.traffics;
  this.cautions = line.cautions;
  this.lineLinks = line.lineLinks;
  this.lineVedios = line.lineVedios;
  this.totalScore = line.totalScore;
  this.totalPeople = line.totalPeople;
  this.signUpDate = line.signUpDate;
};

function Stop(stop) {
  this.num = stop.num;
  this.lineId = stop.lineId;
  this.stopName = stop.stopName;
  this.stopDes = stop.stopDes;
  this.locate = stop.locate;
  this.stopThumbnail = stop.stopThumbnail;
  this.stopImages = stop.stopImages;
  this.stopAudio = stop.stopAudio;
  this.imageOrder = stop.imageOrder;
  this.createDate = stop.createDate;
};

module.exports = Line;

//创建路线
Line.prototype.create = function create(callback) {
  var line = {
    lineName : this.lineName,
    coverThumbnail : this.coverThumbnail,
    lineSummary : this.lineSummary,
    stops : this.stops,
    baseDir : this.baseDir,
    mapType : this.mapType,
    mapAddress : this.mapAddress,
    locate : this.locate,
    language : this.language,
    lineLength : this.lineLength,
    duration : this.duration,
    topics : this.topics,
    price : this.price,
    author : this.author,
    keyWords : this.keyWords,
    traffics : this.traffics,
    cautions : this.cautions,
    lineLinks : this.lineLinks,
    lineVedios : this.lineVedios,
    totalScore : this.totalScore,
    totalPeople : this.totalPeople,
    signUpDate : this.signUpDate,    
  };

  mongodb.open(function(err, db){
    if (err) {
      return callback(err);
    }

    db.collection('line', function(err, collection) {
      if (err) {
	mongodb.close();
	return callback(err);
      }
      collection.insert(line, {safe : true}, function(err) {
	//根据ID创建存放路线的目录
	collection.update({_id : line._id}, 
	                  {$set : {baseDir : line._id.toString()}}, 
	                  {safe : true}, function(err, li){
          //console.log("222"+line._id);
          mongodb.close();
	  mongodb.open(function(err, db){
            db.collection('user', function(err, collection){
	      console.log('line:' + line.author);
	      collection.update({userEmail : line.author},
		                {$push : {tourCreate : line._id}},
				{safe : true},
				function(err, line){
				
                mongodb.close();
		callback(err, line);
	      });
	    });
	  });
	});

      });
    });
  });
};

//根据路线ID,查找线路全部信息
Line.get = function get(lineid, callback){
  mongodb.open(function(err, db){
    if (err) {
      return callback(err);
    }

    db.collection('line', function(err, collection){
      if (err) {
	mongodb.close();
	return callback(err);
      }

      collection.findOne({_id : new ObjectId(lineid)}, function(err, doc){
        mongodb.close();
	if (doc) {
	  var line = new Line(doc);
	  callback(err, line);
	} else {
	  callback(err, null);
	}
      });
    });
  });
};

//根据路线ID,插入站点信息
Line.insertStop = function insertStop(lineid, stop, callback){
  mongodb.open(function(err, db){
    if (err) {
      callback(err);
    }
    db.collection('line', function(err, collection){
      if(err){
	mongodb.close();
	return callback(err);
      }
      collection.update({_id : new ObjectId(lineid)},
	                {$push : {stops : stop}},
			{safe : true},
			function(err, doc){
	mongodb.close();
        callback(err, doc);	
      });
    });
  });
};
//根据lineid 更新line的信息，比如
//根据地图标注更新线路中所有的坐标信息
Line.update = function update(lineid, line, callback){
  mongodb.open(function(err, db){
    if(err) {
      callback(err);
    }
    db.collection('line', function(err, collection){
      if(err) {
	mongodb.close();
	return callback(err);
      }
      collection.update({_id : new ObjectId(lineid)},
	                 line, {safe : true},
			 function(err, doc){
	mongodb.close();
        callback(err, doc);
      });
    });
  });
};

//按照某条件获得全部满足条件的路线
//如:位置，主题

Line.findByTopics = function findByTopics (key, callback){
 mongodb.open(function(err, db){
    if (err) {
      return callback(err);
    }

    db.collection('line', function(err, collection){
      if (err) {
	mongodb.close();
	return callback(err);
      }

      collection.find({topics : key}).sort({signUpDate : 1}).toArray(function(err, docs){
        mongodb.close();
	if (err) {
	  callback(err, null);
	}
        var lines = [];
	docs.forEach(function(doc, index){
	  console.log(doc._id.toString());
	  //var line = new Line(doc);
	  //lines.push(line);
	  lines.push(doc);//这里把每个图片的id也返回，用于接下来查找这一id对应的路径
	});
	callback(null, lines);

      });
    });
  });
};