import { Button, Form, Input } from 'antd'
import BookFormProps from '../../models/props/BookFormProps'

const BookForm: React.FC<BookFormProps> = ({ onSubmit, book }) => {
  return (
    <Form
      name='book-form'
      initialValues={book}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onSubmit}
      autoComplete='off'
    >
      <Form.Item
        label='Title'
        name='title'
        rules={[{ required: true, message: 'Please input title!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Pages'
        name='pages'
        rules={[{ required: true, message: 'Please input pages!' }]}
      >
        <Input type='number' min={1} />
      </Form.Item>

      <Form.Item
        label='Year'
        name='year'
        rules={[{ required: true, message: 'Please input year!' }]}
      >
        <Input type='number' />
      </Form.Item>

      <Form.Item
        label='Name of author'
        name={['author', 'name']}
        rules={[{ required: true, message: 'Please input name of author!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Age of author'
        name={['author', 'age']}
        rules={[{ required: true, message: 'Please input age of author!' }]}
      >
        <Input type='number' />
      </Form.Item>

      <Form.Item
        label='Description'
        name='description'
        rules={[{ required: false, message: 'Please input description!' }]}
      >
        <Input.TextArea defaultValue={book?.description} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export { BookForm }

