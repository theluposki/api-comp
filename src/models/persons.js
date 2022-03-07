import db from '../db/mongodb.js'

const { Schema } = db;

const Person = new Schema({
  name:  String,
  lastName: String,
  email: String,
  password: String, 
  cpf: String,
  dateAt: { type: Date, default: Date.now },
})

export default db.model('persons', Person)