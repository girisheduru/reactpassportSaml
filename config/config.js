module.exports = {
    development: {
      app: {
        port: process.env.PORT || 4321
      },
      passport: {
        strategy: 'saml',
        saml: {
          callbackUrl: process.env.SAML_CALLBACK_URL || 'https://f40d7b44307e.ngrok.io/login/callback',
          entryPoint: process.env.SAML_ENTRY_POINT || 'https://login.microsoftonline.com/eeca5b51-f4db-47cf-afae-fc564bb84d38/saml2',
          issuer: process.env.SAML_ISSUER || 'reactonexpress',
          identifierFormat: null,
		      signatureAlgorithm: 'sha256',
		      authnContext: 'http://schemas.microsoft.com/ws/2008/06/identity/authenticationmethod/windows',
          disableRequestedAuthnContext: true,
          logout:process.env.SAML_LOGOUT_URL || 'https://login.microsoftonline.com/common/wsfederation?wa=wsignout1.0',
          logoutCallbackUrl: process.env.SAML_LOGOUT_CALLBACK_URL || 'https://f40d7b44307e.ngrok.io/logout/callback',
          cert: process.env.SAML_CERT || 'MIIC8DCCAdigAwIBAgIQY5qA1IAD7KZBR4BAJ1JPozANBgkqhkiG9w0BAQsFADA0MTIwMAYDVQQDEylNaWNyb3NvZnQgQXp1cmUgRmVkZXJhdGVkIFNTTyBDZXJ0aWZpY2F0ZTAeFw0yMDA4MDYxNzM5NDZaFw0yMzA4MDYxNzM5NDZaMDQxMjAwBgNVBAMTKU1pY3Jvc29mdCBBenVyZSBGZWRlcmF0ZWQgU1NPIENlcnRpZmljYXRlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAynRghKNCQ7TBIE+XpVSkYf23kyO2UymvIKisEVZ6e9Jg7RBCUSvkk+htWllDUCwgqAfH0yjo3c1XIh8yriIsQhTxt4KCwsJpkZx1HM5BiEZTGVFyn9XJIMugVpdik07NeYDWXru9fIkIYvnrbBVbnUJemgl/OPVjR+kxFszzq0hFO59m10zWjCaePSvqmLme1EGnd6xy1X9F0SOwpSPvibBdvathRrBwFQZBjqW4Ecdai19/Zt4ytDErCNznGplCi1txePMiyFnKfjoJhHElCy1iX1zHPTiDpQPQhl+wmtQA/KAkKen4QYMP8lNjGfRMWFkwT5K2pCMRANO2aEJuiQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQAFprnQW7r9Aykn/1AyMYr1T+b2tZo/2kisxtEYMe1oXGAtRnedMiYHhCOHK9iKnlBLEx/kaA3BnGwNWYdRTvpLNNwfQsvJidyBVDd0mtfGT5WB439vGIBolF1szUgP93HzFZm6lh+pjDA2givfxDzWyZGqNW+3B0MYoa2eLk3vF7E46NsYEl8p+25JPkLKhaOLb/w5tBfZiMMXJ4U2JWDHXOazxLCZnCYLAql1ZEsK6mGmkQSkNLgw2F5gpWccxx3W7iiUpzM3znWPKG2zdjZ/0/9Sf5wVYiIwxZcwkeH3T8Lvmdce0/qxF99/bVGCwY2lv3W2uiaZPGBNy/4+L9tE'
        }
      }
    }
  };