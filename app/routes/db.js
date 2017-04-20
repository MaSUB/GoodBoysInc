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
            if(err) {
               
                console.log("error");
            }
        });

        connection.on('error', function(err) {      
              console.log({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}

/*
 * 
 *
 * check_login  
 * Looks up login in DB 
 * if no login sends to /twitter to create report and entry in db 
 *
 */   
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
                    req.session.uname = rows[i].uname;
                    req.session.password = rows[i].password;
                    req.session.type = rows[i].type; 
                    req.session.loggedin = 1;
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

/*
 * 
 *
 * set_report 
 * For use when person is logining in for the first time 
 *
 *
 */
exports.set_report = function (req, res, callback) {
    
    pool.getConnection(function(err,connection){
        if (err) {
          console.log("code: 100, status : Error in connection database");
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        //console.log(req.body);
        console.log("INSERT INTO ACCOUNTS (uname, password, type, reportpath) VALUES ( \""  + req.session.uname + "\"" + "," + 
            "\"" + req.session.password +  "\"" + "," + " \"E\" " + "," + "\"" + req.session.uname + "Report.json\");");
          
        connection.query("INSERT INTO ACCOUNTS (uname, password, type, reportpath) VALUES ( \""  + req.session.uname + "\"" + "," + 
            "\"" + req.session.password +  "\"" + "," + " \"E\" " + "," + "\"" + req.session.uname + "Report.json\");",function(err,rows){
            connection.release();
            if(err) {
                console.log("MySQL error");    
            } else{
                
                 callback(req, res, err);
            }
        });

        connection.on('error', function(err) {      
              console.log({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}

/*
 * 
 *
 * get_report 
 * For use when employee is trying to get accounts 
 * also for use when another person is trying ot view their account
 *
 */
exports.get_report = function (req, res, callback) {
    
    pool.getConnection(function(err,connection){
        if (err) {
          console.log("code: 100, status : Error in connection database");
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("select * from ACCOUNTS",function(err,rows){
            connection.release();
            if(err) {
                console.log("error");
                 callback(req, res, err);
            }else{ 
            
                // change if we get match 
                var noMatch = 1;
                for(var i in rows){
                    
                    if(rows[i].uname == req.session.uname && rows[i].password == req.session.password){
                        
                        req.session.report = rows[i].reportpath;
                        noMatch = 0;
                        callback(req, res, err);
                    }
                }
                if(noMatch == 1){
                        console.log("No match for a report in DB");
                        callback(req, res, err);
                }
            }
        });

        connection.on('error', function(err) {      
              console.log({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}

