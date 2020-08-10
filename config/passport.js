const SamlStrategy = require('passport-saml').Strategy;

module.exports = function (passport, config) {

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  /*passport.logoutSamlCallback = function(req, res){
    req.logout();
    res.status(200).send('Logged Out');
  }*/

  passport.use(new SamlStrategy(
    {
      callbackUrl: config.passport.saml.callbackUrl,
      entryPoint: config.passport.saml.entryPoint,
      issuer: config.passport.saml.issuer,
      cert: config.passport.saml.cert,
      identifierFormat: config.passport.saml.identifierFormat,
	    signatureAlgorithm: config.passport.saml.signatureAlgorithm,
	    authnContext: config.passport.saml.authnContext,
	    disableRequestedAuthnContext: config.passport.saml.disableRequestedAuthnContext,
      logoutUrl: config.passport.saml.logout,
      logoutCallbackUrl: config.passport.saml.logcallBack
    },
    function (profile, done) {
      console.log('passport.use() profile: %s \n', JSON.stringify(profile));
      return done(null,
        //Doubt
        {
          upn: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn'],                
          id: profile.uid,
          email: profile.mail,
          displayName: profile.userprincipalname,
          givenname: profile.givenname,
          surname: profile.surname,
          nameID: profile.nameID,
          nameIDFormat: profile.nameIDFormat,
          getSamlResponseXml: profile.getSamlResponseXml
        });
    })
  );

};