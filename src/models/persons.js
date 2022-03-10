import db from "../db/mongodb.js";
import bcrypt from "bcryptjs";

const { Schema } = db;

const Person = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  cel: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  rules: {
    type: Array,
    default: ['user']
  },
  dateAt: { type: Date, default: Date.now },
});

Person.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  return next();
});


Person.pre('findOneAndUpdate', function() {
  const update = this.getUpdate();
  if (update.__v != null) {
    delete update.__v;
  }
  const keys = ['$set', '$setOnInsert'];
  for (const key of keys) {
    if (update[key] != null && update[key].__v != null) {
      delete update[key].__v;
      if (Object.keys(update[key]).length === 0) {
        delete update[key];
      }
    }
  }
  update.$inc = update.$inc || {};
  update.$inc.__v = 1;
})

export default db.model("persons", Person);
