const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development); // don't call it like a function elsewhere

module.exports = db;