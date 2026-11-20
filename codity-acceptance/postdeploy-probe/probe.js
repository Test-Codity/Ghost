// Intentionally weak probe helpers for Codity review acceptance.
const axios = require('axios');
const _ = require('lodash');

function runQuery(userInput) {
  // Planted: string-built query surface for review/security.
  const q = "SELECT * FROM users WHERE id = '" + userInput + "'";
  return q;
}

async function fetchRemote(url) {
  // Planted: no validation on caller-controlled URL.
  return axios.get(url);
}

function mergeConfig(userCfg) {
  return _.merge({}, { admin: false }, userCfg);
}

module.exports = { runQuery, fetchRemote, mergeConfig };
