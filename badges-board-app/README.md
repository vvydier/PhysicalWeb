# badges-board-app

a [Sails](http://sailsjs.org) application

This application was built for HackEDU to quickly prototype a student badge board.

1. Sails used to build the basic api's for interaction (Badge.js and BadgeController.js)
2. Views are built using basic html (index.html). It uses Angular 1.x for displaying the list of badges that a student has won. Twitter Bootstrap is used for responsive display of the badges app.
3. Sails api's use mysql to persist the badges using https://github.com/balderdashy/sails-mysql
4. Sails socke.io client https://github.com/balderdashy/sails.io.js used to send and receive messages in multiple clients to the application.
