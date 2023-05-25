import { useState } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import Avatar from '../Avatar'
import StarRating from '../StarRating'
import CardNav from '../CardNav'

const CarFinderAccountLayout = ({ accountPageTitle, children }) => {

  // State to control Collapse
  const [open, setOpen] = useState(false)

  return (
    <Container className='pt-5 pb-lg-4 mt-5 mb-sm-2'>

      {/* Breadcrumb */}
      <Breadcrumb className='breadcrumb-light mb-4 pt-md-3'>
        <Breadcrumb.Item linkAs={Link} href='/car-finder'>Home</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href='/car-finder/account-info'>Account</Breadcrumb.Item>
        <Breadcrumb.Item active>{accountPageTitle}</Breadcrumb.Item>
      </Breadcrumb>

      <Row>

        {/* Sidebar (Account nav) */}
        <Col md={5} lg={4} className='pe-xl-4 mb-5'>
          <div className='card card-body card-light border-0 shadow-sm pb-1 me-lg-1'>
            <div className='d-flex d-md-block d-lg-flex align-items-start pt-lg-2 mb-4'>
              <Avatar img={{ src: '/images/avatars/01.jpg', alt: 'Robert Fox' }} size={[48, 48]} />
              <div className='pt-md-2 pt-lg-0 ps-3 ps-md-0 ps-lg-3'>
                <h2 className='text-light fs-lg mb-0'>Robert Fox</h2>
                <StarRating rating={4.8} light />
                <ul className='list-unstyled fs-sm mt-3 mb-0'>
                  <li>
                    <a href='tel:4057329046' className='nav-link-light fw-normal p-0'>
                      <i className='fi-phone opacity-75 me-2'></i>
                      (405) 732-9046
                    </a>
                  </li>
                  <li>
                    <a href='mailto:robert_fox@email.com' className='nav-link-light fw-normal p-0'>
                      <i className='fi-mail opacity-75 me-2'></i>
                      robert_fox@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Button as={Link} href='/car-finder/sell-car' size='lg' className='w-100 mb-3'>
              <i className='fi-plus me-2'></i>
              Sell car
            </Button>
            <Button
              variant='outline-light'
              className='d-block d-md-none w-100 mb-3'
              onClick={() => setOpen(!open)}
              aria-controls='account-menu'
              aria-expanded={open}
            >
              <i className='fi-align-justify me-2'></i>
              Menu
            </Button>
            <Collapse in={open} className='d-md-block'>
              <div id='account-menu'>
              <CardNav className='pt-3'>
                <CardNav.Item
                  href='/car-finder/account-info'
                  icon='fi-user'
                  active={accountPageTitle === 'Personal Info' ? true : false}
                >
                  Personal Info
                </CardNav.Item>
                <CardNav.Item
                  href='/car-finder/account-security'
                  icon='fi-lock'
                  active={accountPageTitle === 'Password & Security' ? true : false}
                >
                  Password &amp; Security
                </CardNav.Item>
                <CardNav.Item
                  href='/car-finder/account-cars'
                  icon='fi-car'
                  active={accountPageTitle === 'My Cars' ? true : false}
                >
                  My Cars
                </CardNav.Item>
                <CardNav.Item
                  href='/car-finder/account-wishlist'
                  icon='fi-heart'
                  active={accountPageTitle === 'Wishlist' ? true : false}
                >
                  Wishlist
                  <span className='badge bg-faded-light ms-2'>4</span>
                </CardNav.Item>
                <CardNav.Item
                  href='/car-finder/account-reviews'
                  icon='fi-star'
                  active={accountPageTitle === 'Reviews' ? true : false}
                >
                  Reviews
                </CardNav.Item>
                <CardNav.Item
                  href='/car-finder/account-notifications'
                  icon='fi-bell'
                  active={accountPageTitle === 'Notifications' ? true : false}
                >
                  Notifications
                </CardNav.Item>
                <CardNav.Item href='/car-finder/help-center' icon='fi-help'>
                  Help
                </CardNav.Item>
                <CardNav.Item href='/signin-dark' icon='fi-logout'>
                  Sign Out
                </CardNav.Item>
              </CardNav>
              </div>
            </Collapse>
          </div>
        </Col>

        {/* Page content */}
        <Col md={7} lg={8} className='mb-5'>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default CarFinderAccountLayout
