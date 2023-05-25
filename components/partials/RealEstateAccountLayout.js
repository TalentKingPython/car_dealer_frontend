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

const RealEstateAccountLayout = ({ accountPageTitle, children }) => {

  // State to control Collapse
  const [open, setOpen] = useState(false)

  return (
    <Container className='pt-5 pb-lg-4 mt-5 mb-sm-2'>

      {/* Breadcrumb */}
      <Breadcrumb className='mb-4 pt-md-3'>
        <Breadcrumb.Item linkAs={Link} href='/real-estate'>Home</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href='/real-estate/account-info'>Account</Breadcrumb.Item>
        <Breadcrumb.Item active>{accountPageTitle}</Breadcrumb.Item>
      </Breadcrumb>

      <Row>

        {/* Sidebar (Account nav) */}
        <Col md={5} lg={4} className='pe-xl-4 mb-5'>
          <div className='card card-body border-0 shadow-sm pb-1 me-lg-1'>
            <div className='d-flex d-md-block d-lg-flex align-items-start pt-lg-2 mb-4'>
              <Avatar img={{ src: '/images/avatars/03.jpg', alt: 'Annette Black' }} size={[48, 48]} />
              <div className='pt-md-2 pt-lg-0 ps-3 ps-md-0 ps-lg-3'>
                <h2 className='fs-lg mb-0'>Annette Black</h2>
                <StarRating rating={4.8} />
                <ul className='list-unstyled fs-sm mt-3 mb-0'>
                  <li>
                    <a href='tel:3025550107' className='nav-link fw-normal p-0'>
                      <i className='fi-phone opacity-60 me-2'></i>
                      (302) 555-0107
                    </a>
                  </li>
                  <li>
                    <a href='mailto:annette_black@email.com' className='nav-link fw-normal p-0'>
                      <i className='fi-mail opacity-60 me-2'></i>
                      annette_black@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Button as={Link} href='/real-estate/add-property' size='lg' className='w-100 mb-3'>
              <i className='fi-plus me-2'></i>
              Add property
            </Button>
            <Button
              variant='outline-secondary'
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
                  href='/real-estate/account-info'
                  icon='fi-user'
                  active={accountPageTitle === 'Personal Info' ? true : false}
                >
                  Personal Info
                </CardNav.Item>
                <CardNav.Item
                  href='/real-estate/account-security'
                  icon='fi-lock'
                  active={accountPageTitle === 'Password & Security' ? true : false}
                >
                  Password &amp; Security
                </CardNav.Item>
                <CardNav.Item
                  href='/real-estate/account-properties'
                  icon='fi-home'
                  active={accountPageTitle === 'My Properties' ? true : false}
                >
                  My Properties
                </CardNav.Item>
                <CardNav.Item
                  href='/real-estate/account-wishlist'
                  icon='fi-heart'
                  active={accountPageTitle === 'Wishlist' ? true : false}
                >
                  Wishlist
                  <span className='badge bg-faded-light ms-2'>4</span>
                </CardNav.Item>
                <CardNav.Item
                  href='/real-estate/account-reviews'
                  icon='fi-star'
                  active={accountPageTitle === 'Reviews' ? true : false}
                >
                  Reviews
                </CardNav.Item>
                <CardNav.Item
                  href='/real-estate/account-notifications'
                  icon='fi-bell'
                  active={accountPageTitle === 'Notifications' ? true : false}
                >
                  Notifications
                </CardNav.Item>
                <CardNav.Item href='/real-estate/help-center' icon='fi-help'>
                  Help
                </CardNav.Item>
                <CardNav.Item href='/signin-light' icon='fi-logout'>
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

export default RealEstateAccountLayout
