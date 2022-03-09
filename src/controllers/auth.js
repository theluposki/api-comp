import AuthRepository from '../repositories/auth.js'

const Auth = async (req, res) => {
    const body = req.body
  
    try {
      const result = await AuthRepository.Authenticate(body);
  
      res.status(200).json(result);
    } catch (error) {
      res
        .status(400)
        .json({ error: "- [APP] - [Auth] não foi possivel se autenticar!!" });
    }
  };
  
  export { Auth };