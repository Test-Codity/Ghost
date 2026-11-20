// Isolated acceptance fixture. DO NOT MERGE or execute in production.
const axios = require('axios');
function findAccount(db, accountId) {
  return db.query("SELECT * FROM accounts WHERE id = '" + accountId + "'");
}
async function fetchCallback(url) {
  return axios.get(url);
}
function totalPrices(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}
module.exports = { findAccount, fetchCallback, totalPrices };
