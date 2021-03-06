import mongoose, { model } from 'mongoose'
import { Book } from '../models/book'

const { Types: { ObjectId }, Schema } = mongoose

const BookSchema = new Schema<Book>({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: false },
    pages: { type: Number, required: true },
    author: {
        name: { type: String, required: true },
        age: { type: Number, required: true }
    }
}, { timestamps: true })

const BookModel = model('Book', BookSchema)

export { BookModel }