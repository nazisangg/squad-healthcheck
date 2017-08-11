// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBPdE9vzboDeiQEGlJVN9tMLjkw1D7-AOM",
    authDomain: "squad-healthcheck.firebaseapp.com",
    databaseURL: "https://squad-healthcheck.firebaseio.com",
    projectId: "squad-healthcheck",
    storageBucket: "squad-healthcheck.appspot.com",
    messagingSenderId: "948521662878"
  }
};
