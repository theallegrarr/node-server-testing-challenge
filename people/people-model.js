const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  remove
};

async function add(person) {
  await db('people').insert(person);
}

function find() {
  return db('people').select('id', 'name');
}

function findById(id) {
  return db('people')
    .where({ id })
    .first();
}

function remove(id) {
  return db('people')
    .where({ id })
    .first()
    .delete();
}