import router from './router.js'
import { personCreate, personsGET, personDeleteOne } from '../controllers/persons.js'

router.get('/', personsGET)
router.post('/', personCreate)
router.delete('/:id', personDeleteOne)

export default router