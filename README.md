# Code Overview

## Project Tree

  .
  ├── app               # The Node server
  │   ├── bin
  │   ├── controllers
  │   ├── models
  │   ├── public
  │   │   └── assets    # Compiled styles and scripts are saved here
  │   ├── views
  │   ├── app.js        # Entry point for server
  │   └── config.js     # Set environment variables here
  ├── database          # SQLite databases
  ├── gulpfile.babel.js # Gulp task runners
  └── src               # Front-end source code
      ├── js
      ├── scss
      └── views

## Front-End Build Process

### Initial Setup

The front-end build process requires Node v4.0.0 or higher. Once Node is installed, run the following command from the project root to install all the build-process dependancies:

    npm install

### Building Front-End Assets

Use Gulp to compile SASS source files to CSS, and minify JS and CSS. Use `npm run [command]` to run the Gulp scripts. To start, run:

    npm run build

While actively developing, watch source files and rebuild as needed. This command will open a new browser tab using BrowserSync, which will automatically update to reflect changes you make to the source files.

    npm run watch

To generate minified copies of all the assets without sourcemaps for production, run the following command:

    npm run build --production

### Running the Node Express server

To run the server in development mode:

    npm run dev

To run the server in production mode:

    npm run start
