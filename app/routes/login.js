var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
  //var dataFile = req.app.get('appData');
  res.render('login', {

    pageTitle:'Login',
    pageID: 'login'
  });
  

  
    req.getConnection(function(err, connection) {
      if (err) 
        console.error(err);
      
      connection.query('SHOW TABLES', [], function(err, results) {
        if (err) 
          console.error(err);
        
        console.log(results.row[0]);
        // -> 1
        
        res.send(200);
      });
      
    });
    
    
});

module.exports = router;