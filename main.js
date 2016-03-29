process.env.NODE_ENV = process.env.NODE_ENV || "production";

const _ = require( "lodash" );
const Menubar = require( "menubar" );
const electron = require( "electron" );
const electronDebug = require( "electron-debug" );
const crashReporter = electron.crashReporter;

const DEV = process.env.NODE_ENV === "development";

const defaultOptions = {
  index: `file://${ __dirname }/app/app.html`,
  icon: `${ __dirname }/icon.png`
};

const devOptions = {
  height: 650,
  width: 400,
  "always-on-top": true
};

const prodOptions = {
  width: 400
};

const menubarOptions = DEV ?
  _.extend( defaultOptions, devOptions ) :
  _.extend( defaultOptions, prodOptions );

const mb = new Menubar( menubarOptions );

crashReporter.start();

if ( DEV ) {
  electronDebug();
}

mb.on( "after-create-window", () => {
  if ( process.env.NODE_ENV === "development" ) {
    mb.window.openDevTools();
  }
} );
