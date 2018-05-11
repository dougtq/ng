// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAr_ELo6Gb-qq5nh2EBQzp7k22l7VP60c8',
    authDomain: 'ngfire-tq.firebaseapp.com',
    databaseURL: 'https://ngfire-tq.firebaseio.com',
    projectId: 'ngfire-tq',
    storageBucket: 'ngfire-tq.appspot.com',
    messagingSenderId: '714083661452'
  }
};
