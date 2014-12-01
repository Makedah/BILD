BILD app
========

BILD project

Before you can run the application, unit tests and e2e tests on a local web server, download and install several dependencies.

- Install Node.js
You can download a Node.js installer for your operating system from http://nodejs.org/download/.

Once you have Node.js installed on your machine, download the tool dependencies by running 
npm install

This command will download the following tools, into the node_modules directory:
Bower - client-side code package manager
Http-Server - simple local static web server
Karma - unit test runner
Protractor - end to end (E2E) test runner

Running npm install will also automatically use bower to download the Angular framework into the app/bower_components directory.

The project is preconfigured with a number of npm helper scripts:

npm start : start a local development web-server

npm test : start the Karma unit test runner

npm run protractor : run the Protractor end to end (E2E) tests

npm run update-webdriver : install the drivers needed by Protractor



