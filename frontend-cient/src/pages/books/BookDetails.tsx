import { BookOutlined, LikeOutlined } from '@ant-design/icons'
import { Col, Grid, PageHeader, Row, Statistic } from 'antd'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { ROUTES } from '../../constants/ROUTES'
import Store from '../../models/Store'

const BookDetails: React.FC = () => {
  const currentBook = useSelector((store: Store) => store.currentBook)
  const history = useHistory()
  if (!currentBook) {
    history.push(ROUTES.HOME)
    return null
  }

  return (
    <>
      <PageHeader
        title={currentBook?.title}
        avatar={{ icon: <BookOutlined /> }}
      />
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title='Title' value={currentBook?.title || ''} />
        </Col>
        <Col span={12}>
          <Statistic title='Pages' valueRender={() => currentBook?.pages} />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Statistic title='Year' valueRender={() => currentBook?.year} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Description'
            value={currentBook?.description || ''}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Author's Name"
            value={currentBook?.author.name || ''}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Author's Age"
            valueRender={() => currentBook?.author.age}
          />
        </Col>
      </Row>
    </>
  )
}

export { BookDetails }
