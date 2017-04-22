var express = require('express');
var router = express.Router();
var db = require("./db.js");

function users_callback(req, res, err, rows){
  
  if(err){
    console.log("users_callBack went bad");
    res.send("server error");
  }else{
    
    res.send(rows);
  }
}

router.get('/admin', function(req, res) {
 
  if(req.session.type != 'A'){
    
    //if they aren't admin send them to the things 
    res.send('No No No you are not logged in brah');
  }else{
    
    res.render('admin', {

      pageTitle:'admin',
      pageID: 'admin'
    });
  }
});

router.post('/admin/users', function(req, res){
  
  db.get_table(req, res, users_callback);
});

module.exports = router;