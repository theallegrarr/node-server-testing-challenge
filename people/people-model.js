const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find
};

async function add(person) {
  const [id] = await db('people').insert(person);

  return findById(id);
}

function find() {
  return db('people').select('id', 'name');
}

function findById(id) {
  return db('people')
    .where({ id })
    .first();
}