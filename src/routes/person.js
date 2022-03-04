import router from './router.js'
import personsGET from '../controllers/persons.js'

router.get('/',personsGET)

export default router