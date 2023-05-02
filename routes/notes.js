import { Router } from 'express'

import * as notesCtrl from '../controllers/notes.js'
const router = Router()

// GET localhost:3000/users
router.get('/', notesCtrl.index)
router.get('/new', notesCtrl.new)
router.get('/:noteId', notesCtrl.show)
router.post('/', notesCtrl.create)
router.delete('/:noteId', notesCtrl.delete)
export { router }
