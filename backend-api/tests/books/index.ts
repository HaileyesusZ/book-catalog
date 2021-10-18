import chai, { expect } from 'chai'
import chaiHTTP from 'chai-http'
import { describe } from 'mocha'
import { API_ENDPOINT, BOOK_ENDPOINT } from './constants'

chai.use(chaiHTTP)

let book = { _id: '' }

describe('Book Module Test', function () {
  this.timeout(10000)
  it('should create a book', async () => {
    const newBook = {
      title: 'new test title',
      pages: 100,
      year: 1999,
      description: 'this is a test description',
      author: {
        name: 'haile',
        age: 26,
      }
    }
    const response = await chai.request(`${API_ENDPOINT}`).post(BOOK_ENDPOINT).send(newBook)
    expect(response).to.have.status(200)
    expect(response.body).to.haveOwnProperty('data')
    expect(response.body.data).to.deep.contain(newBook)
    book = response.body.data
  })

  it('should get all books', async () => {
    const response = await chai.request(`${API_ENDPOINT}`).get(BOOK_ENDPOINT)

    expect(response).to.have.status(200)
    expect(response.body).to.haveOwnProperty('data')
    expect(response.body.data).to.be.an('array')
    expect(response.body.data).to.have.length.greaterThanOrEqual(1)
  })

  it('should update a book', async () => {
    const bookId = book._id
    const updatedBook = {
      title: 'new test title 2',
      pages: 101,
      year: 1998,
      description: 'this is a test description 2',
      author: {
        name: 'john',
        age: 26,
      }
    }
    const response = await chai.request(`${API_ENDPOINT}`).patch(`${BOOK_ENDPOINT}/${bookId}`).send(updatedBook)

    expect(response).to.have.status(200)
    expect(response.body).to.haveOwnProperty('data')
    expect(response.body.data).to.deep.contain(updatedBook)
  })

  it('should delete a book', async () => {
    const bookId = book._id
    const response = await chai.request(`${API_ENDPOINT}`).delete(`${BOOK_ENDPOINT}/${bookId}`)

    expect(response).to.have.status(200)
    expect(response.body).to.haveOwnProperty('data')
    expect(response.body.data).to.haveOwnProperty('_id')
    expect(response.body.data._id).to.equal(bookId)
  })
})