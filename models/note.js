import mongoose from 'mongoose'

const Schema = mongoose.Schema

const noteSchema = new Schema({
  text: String,
  studied: Boolean
})

const Note = mongoose.model('Note', noteSchema)

export {
  Note,
}