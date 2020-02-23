const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { schoolMenuApp } = require('./school-menu/index');

admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.api = functions.https.onRequest(schoolMenuApp);

exports.routers = schoolMenuApp;