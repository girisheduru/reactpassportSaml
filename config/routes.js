const path = require('path');

module.exports = function (app, config, passport) {

    app.get('/home', function (req, res) {
        if (req.isAuthenticated()) {
          console.log(" Root Path ----   Authed ::: ")
          console.log("Given Name" + req.user.givenname);
          console.log("Given Name" + req.user.surname);
          console.log('request    ---   \n', JSON.stringify(req.user));
          console.log('response   status ----- \n', JSON.stringify(req.user.getSamlResponseXml));

          res.sendFile(path.resolve('build/index.html'));
        } else {
          console.log(" Root Path ----   not Authed ::: ")
          res.redirect('/login/fail');
        }
      });

/*function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
 { 
  console.log('req.isAuthenticated = ' + req.isAuthenticated());
  return next(); }
  else{
	console.log('req.isAuthenticated = ' + req.isAuthenticated());
    res.redirect('/login');
  }
}

app.get('/*', ensureAuthenticated, (req, res) => {
  console.log(" Default Path ----  ::: ")
  res.redirect('/home');
});*/

  
    app.get('/login',
      passport.authenticate(config.passport.strategy,
        {
          successRedirect: '/home',
          failureRedirect: '/login/fail'
        })
    );

    app.get('/login/fail', 
      function(req, res) {
      console.log("ReQ--- Fail----" + req.isAuthenticated());
      res.status(401).send('Login failed');
     }
    );
  
    app.post('/login/callback',
      passport.authenticate(config.passport.strategy,
        {
          failureRedirect: '/login/fail',
          failureFlash: true      
        }),
      function (req, res) {
        console.log("ReQ--- Call back  --- " + req.isAuthenticated());
        res.redirect('/home');      }
    );


    /*app.get('/logout',
    (req, res) => {
      passport._strategy(config.passport.strategy).logout(req, (err, url) => {
      console.log("ReQ--- Logout --- " + req.isAuthenticated());
      return res.redirect(url);
      });
    });*/
    app.get('/logout',
    (req, res) => {
      console.log(" Request -------- " + req.user.nameID)
      console.log(" Request -------- " + req.user.nameIDFormat)

      console.log("ReQ--- Logout --- Out -- " + req.isAuthenticated());
      //Doubt
        nameID = req.user.nameID;
        nameIDFormat = req.user.nameIDFormat;
        passport._strategy(config.passport.strategy).logout(req, function(err, url){
          req.logout();
          console.log("ReQ--- Logout --- In -- " + req.isAuthenticated());

            if(!err){
                //redirect to the IdP Logout URL
                res.redirect(url);
            }
        });
    
    });

    //app.post('logout/callback', passport.logoutSamlCallback);
    //Doubt
    app.post('/logout/callback', 
      function(req, res) {
      console.log("ReQ--- login/callback----  " + req.isAuthenticated());
      req.logout();
      res.status(200).send('Logged Out User');
     }
    );

    app.get('/logout/callback', 
      function(req, res) {
      console.log("ReQ--- login/callback----  " + req.isAuthenticated());
      res.status(200).send('Logged Out User');
     }
    );
    
       
  };