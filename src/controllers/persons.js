import { logError } from "../util/coloredLog.js";
import Persons from "../models/persons.js";

const body = {
  name: "Lucas",
  lastName: "Pereira de Oliveira",
  email: "theluposki@gmail.com",
  password: "123456789456",
  cpf: "12345678998",
};

const personCreate = async (req, res) => {
  try {
    const result = await Persons.create(req.body);

    res.json(result);
  } catch (error) {
    res
      .status(400)
      .json({ error: "- [APP] - [personCreate] Error ao Adicionar pessoa!!" });
  }
};

const personsGET = async (req, res, next) => {
  try {
    const result = await Persons.find({});
    res.status(200).json(result);
  } catch (error) {
    res
      .status(400)
      .json({ error: "- [APP] - [personsGET] Error ao listar Pessoas!!" });
  }
};

const personDeleteOne = async (req, res) => {
  try {
    const result = await Persons.deleteOne({ _id: req.params.id });
    res.status(200).json(result);
  } catch (error) {
    res
      .status(400)
      .json({ error: "- [APP] - [personDeleteOne] Error ao excluir pessoa!!" });
  }
};

export { personCreate, personsGET, personDeleteOne};
