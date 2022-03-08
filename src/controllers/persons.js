import PersonsRepository from "../repositories/persons.js";

const personCreate = async (req, res) => {
  try {
    const result = await PersonsRepository.create(req.body);

    res.status(201).json(result);
  } catch (error) {
    res
      .status(400)
      .json({ error: "- [APP] - [personCreate] Error ao Adicionar pessoa!!" });
  }
};

const personsGET = async (req, res) => {
  try {
    const result = await PersonsRepository.getAll();

    res.status(200).json(result);
  } catch (error) {
    res
      .status(400)
      .json({ error: "- [APP] - [personsGET] Error ao listar Pessoas!!" });
  }
};

const personsGETOne = async (req,res) => {
  const id = req.params.id

  try {
    const result = await PersonsRepository.getOne(id);

    res.status(200).json(result);
  } catch (error) {
    res
      .status(400)
      .json({ error: "- [APP] - [personsGETOne] Error ao buscar pessoa. !" });
  }
};

const personsUpdateOne = async (req,res) => {
  const id = req.params.id
  const body = req.body

  try {
    const result = await PersonsRepository.updatedOne(id, body);

    res.status(200).json(result);
  } catch (error) {
    res
      .status(400)
      .json({ error: "- [APP] - [personsUpdateOne] Error ao atualizar pessoa. !" });
  }
};

const personDeleteOne = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await PersonsRepository.deleteOne(id);

    res.status(200).json(result);
  } catch (error) {
    res
      .status(400)
      .json({ error: "- [APP] - [personDeleteOne] Error ao excluir pessoa!!" });
  }
};

export { personCreate, personsGET, personsGETOne, personsUpdateOne, personDeleteOne };
