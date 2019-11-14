const People = require('./people-model')
const db = require('../data/dbConfig')

beforeEach(async () => {
   await db('people').truncate()
})

describe('People model', () => {
  describe('insert function', () => {
    let person
    test('should insert a person', async () => {
      await People.add({ name: 'Riley' })
      await People.add({ name: 'Freeman' })

      person = await db('people')
      expect(person).toHaveLength(2)

      await People.add({ name: 'popeye' })

      person = await db('people')
      expect(person).toHaveLength(3)
    })
  })
})