import { Breadcrumb } from 'antd'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/ROUTES'
import Store from '../models/Store'

const NavigationCrumb: React.FC = () => {
  const location = useLocation()
  const currentBook = useSelector((store: Store) => store.currentBook)
  
  const isBookDetailsPage =
    location.pathname === `${ROUTES.BOOKS}/${currentBook?._id}`
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={ROUTES.BOOKS}>Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={ROUTES.BOOKS}>Books</Link>
      </Breadcrumb.Item>
      {isBookDetailsPage && (
        <Breadcrumb.Item>{currentBook?.title}</Breadcrumb.Item>
      )}
    </Breadcrumb>
  )
}

export { NavigationCrumb }
