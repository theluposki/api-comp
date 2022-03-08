import db from '../db/mongodb.js'
import bcrypt from 'bcryptjs'

const { Schema } = db;

const Person = new Schema({
  name:  String,
  lastName: String,
  email: String,
  password: {
    type: String,
    select: true
  }, 
  cpf: String,
  dateAt: { type: Date, default: Date.now },
})

Person.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

export default db.model('persons', Person)
