const config = {
  LoginMensaje: 'Powered by DLabs',
  LoginLogoTamanio: '48px',
  ApiKey: '9E50EEF7-531F-4425-A803-25FEAE88057D',

  // ** Desarrollo
  UrlLoginServer: 'https://sweetsrv.azurewebsites.net/LoginSandbox/authenticate',
  UrlApiProject: 'http://localhost:5000/',

  // ** Kraken Desarrollo
  KrakenService: 'https://krakenapi.deacero.com/SandboxServices',

  // Debugging mode
  DebuggingMode: true,
};

function GetToken() {
  return sessionStorage.getItem('Token');
}

export { config, GetToken };
