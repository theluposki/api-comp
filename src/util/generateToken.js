import jwt from'jsonwebtoken'
import config from '../config/config.js'

const generateToken = async (id) => {
    return await jwt.sign({ id }, config.secret, {
        expiresIn: 86400
    })
}

export default generateToken