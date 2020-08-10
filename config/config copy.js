module.exports = {
    development: {
      app: {
        port: process.env.PORT || 4321
      },
      passport: {
        strategy: 'saml',
        saml: {
          callbackUrl: process.env.SAML_CALLBACK_URL || 'https://oursite.com',
          entryPoint: process.env.SAML_ENTRY_POINT || 'https://oursite.com/adfs/ls/idpinitiatedsignon',
          issuer: process.env.SAML_ISSUER || 'https://oursite.com',
          identifierFormat: null,
		  signatureAlgorithm: 'sha256',
		  authnContext: 'http://schemas.microsoft.com/ws/2008/06/identity/authenticationmethod/windows',
		  disableRequestedAuthnContext: true,
          cert: process.env.SAML_CERT || 'cert'
        }
      }
    }
  };