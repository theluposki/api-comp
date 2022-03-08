import Persons from "../models/persons.js";

 const PersonsRepository = {
     async create(body) {
        return await Persons.create(body)
     },
     async getAll() {
        return await Persons.find({})
     },
     async getOne(id) {
        return await Persons.find({ _id: id })
     },
     async updatedOne(id, update) {
        return Persons.findOneAndUpdate(id, update)
     },
     async deleteOne(id) {
         return await Persons.deleteOne({ _id: id })
     }
 }

 export default PersonsRepository