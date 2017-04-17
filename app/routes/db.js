var mysql = require('mysql');
var exports = module.exports = {};
var pool      =    mysql.createPool({
        connectionLimit : 100, //important
        host     : process.env.IP,
        user     : 'mws5966',
        password : '',
        database : 'users',
        debug    :  false
    });

exports.handle_database = function (req, res) {
    
    pool.getConnection(function(err,connection){
        if (err) {
          console.log("code: 100, status : Error in connection database");
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("select * from ACCOUNTS",function(err,rows){
            connection.release();
            if(!err) {
                console.log("rows= " + rows[0].uname);
            }else{
                console.log("error");
            }
            
            console.log("rows= " + rows[0].uname);
        });

        connection.on('error', function(err) {      
              console.log({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}
    
exports.check_login = function (loginCallback, req, res, uname, password) {
    
    pool.getConnection(function(err,connection){
        if (err) {
          console.log("code: 100, status : Error in connection database");
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("select * from ACCOUNTS",function(err,rows){
            connection.release();
            if(err) {
                loginCallback(req, res, err, null);    
            } 
            
            req.session.type = null;
            
            for(var i in rows){
                if(rows[i].uname == uname && rows[i].password == password){
                    //*console.log(rows[i].type);
                    req.session.type = rows[i].type; 
                    loginCallback(req, res, err, rows[i].type);
                }
            }
            
            if(req.session.type == null){
                loginCallback(req, res, "No match in DB", null);
            }
        });

        connection.on('error', function(err) {      
              console.log({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}

exports.set_report = function () {
    
    pool.getConnection(function(err,connection){
        if (err) {
          console.log("code: 100, status : Error in connection database");
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("select * from ACCOUNTS",function(err,rows){
            connection.release();
            if(!err) {
                console.log("error");    
            } 
            
            console.log("rows= " + rows[0].uname);
        });

        connection.on('error', function(err) {      
              console.log({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}

exports.get_report = function () {
    
    pool.getConnection(function(err,connection){
        if (err) {
          console.log("code: 100, status : Error in connection database");
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("select * from ACCOUNTS",function(err,rows){
            connection.release();
            if(!err) {
                console.log("error");    
            } 
            
            console.log("rows= " + rows[0].uname);
        });

        connection.on('error', function(err) {      
              console.log({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}

