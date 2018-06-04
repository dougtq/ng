// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDGn4bnquLE3vXPDdNPTlZBFXn9j5_53RI',
    authDomain: 'instagram-clone-br.firebaseapp.com',
    databaseURL: 'https://instagram-clone-br.firebaseio.com',
    projectId: 'instagram-clone-br',
    storageBucket: 'instagram-clone-br.appspot.com',
    messagingSenderId: '47200811641'
  }
};
