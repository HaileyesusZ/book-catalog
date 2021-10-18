import { BookOutlined } from '@ant-design/icons'
import { Button, Modal, PageHeader, Row, Space, Table } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { GetComponentProps, GetRowKey } from 'rc-table/lib/interface'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useFetch } from '../../components/hooks/useFetch'
import END_POINTS from '../../constants/END_POINTS'
import { ROUTES } from '../../constants/ROUTES'
import Book from '../../models/Book'
import Store from '../../models/Store'
import { ACTIONS } from '../../store/ACTIONS'
import { addBook } from '../../store/books/addBook'
import { deleteBook } from '../../store/books/deleteBook'
import { updateBook } from '../../store/books/updateBook'
import { BookForm } from './BookForm'

const Books: React.FC = () => {
  const [addBookFormVisible, setAddBookFormVisible] = useState(false)
  const [forceReload, setForceReload] = useState(false)
  const data = useFetch<Book[]>(END_POINTS.BOOKS, forceReload)
  const [bookUpdating, setBookUpdating] = useState<Book>()
  const fetchingData = useSelector((store: Store) => store?.fetchingData)
  const history = useHistory()
  const dispatch = useDispatch()

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'name',
    },
    {
      title: 'Pages',
      dataIndex: 'pages',
      key: 'pages',
    },
    {
      title: 'Year',
      key: 'year',
      render: (data: Book) => data?.year,
    },
    {
      title: 'Author Name',
      key: 'authorName',
      render: (data: Book) => data?.author?.name,
    },
    {
      title: 'Author Age',
      key: 'authorAge',
      render: (data: Book) => data?.author.age,
    },
    {
      title: 'Description',
      key: 'description',
      render: (data: Book) => data?.description,
    },
    {
      title: 'Action',
      key: 'action',
      render: (data: Book) => (
        <Space size='middle'>
          <Button type='link' onClick={handleUpdateBook(data)}>
            Update
          </Button>
          <Button type='text' danger onClick={handleDeleteBook(data._id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  const handleRow = (record: Book) => {
    return {
      onClick: () => {
        dispatch({ type: ACTIONS.SET_CURRENT_BOOK, payload: record })
        history.push(`${ROUTES.BOOKS}/${record._id}`)
      },
    }
  }

  const showAddBookForm = () => {
    setBookUpdating(undefined)
    setAddBookFormVisible(true)
  }
  const getRowKey = (book: Book) => book?._id

  const hideAddBookForm = () => {
    setAddBookFormVisible(false)
  }

  const handleUpdateBook = (book: Book) => (event: React.MouseEvent) => {
    event.stopPropagation()
    setBookUpdating(book)
    setAddBookFormVisible(true)
  }
  const handleDeleteBook = (id?: string) => (event: React.MouseEvent) => {
    event.stopPropagation()
    if (id) {
      dispatch(deleteBook(id))
      setForceReload(!forceReload)
    }
  }

  const handleSubmit = async (payload: Book) => {
    if (bookUpdating) {
      dispatch(updateBook({ _id: bookUpdating._id, ...payload }))
    } else {
      dispatch(addBook(payload))
    }
    setBookUpdating(undefined)
    setAddBookFormVisible(false)
    setForceReload(!forceReload)
  }

  return (
    <Content>
      <Row justify='space-between' align='middle'>
        <PageHeader
          title='Books Catalog'
          subTitle='Browse all the books in our library'
          avatar={{ icon: <BookOutlined /> }}
        />

        <Button type='primary' onClick={showAddBookForm}>
          Add Book
        </Button>
      </Row>
      <Table
        dataSource={data?.data}
        columns={columns}
        loading={fetchingData}
        onRow={handleRow as GetComponentProps<Book>}
        rowKey={getRowKey as GetRowKey<Book>}
      />
      <Modal
        visible={addBookFormVisible}
        title={bookUpdating? 'Update Book': 'Add Book'}
        footer={() => null}
        onCancel={hideAddBookForm}
        getContainer={false}
      >
        <BookForm onSubmit={handleSubmit} book={bookUpdating} />
      </Modal>
    </Content>
  )
}

export { Books }
