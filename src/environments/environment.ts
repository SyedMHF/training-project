// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment: { production: boolean, endpoint: string; firebaseConfig: any } = {
  production: false,
  endpoint: '/data',
  firebaseConfig: {
    apiKey: "AIzaSyAfNBDU9gweP-ftPx9X7z9AwxhIY9f6hGs",
    authDomain: "my-project-1510212200692.firebaseapp.com",
    databaseURL: "https://my-project-1510212200692.firebaseio.com",
    projectId: "my-project-1510212200692",
    storageBucket: "",
    messagingSenderId: "985823045253"
  },
};
