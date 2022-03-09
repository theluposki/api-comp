import bcrypt from "bcryptjs";
import Persons from "../models/persons.js";
import generateToken from '../util/generateToken.js'

const AuthRepository = {
  async Authenticate(body) {
    const { email, password } = body;

    const user = await Persons.findOne({ email }).select("+password");

    if (!user) {
      return "Usuário não encontrado!";
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return "Senha inválida.";
    }
    let token = await generateToken(user.id)

    return { user, token };
  },
};

export default AuthRepository;
