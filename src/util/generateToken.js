import jwt from'jsonwebtoken'
import config from '../config/config.js'

const generateToken = async (id, role) => {
    return await jwt.sign({ id, role }, config.secret, {
        expiresIn: 86400
    })
}

export default generateToken