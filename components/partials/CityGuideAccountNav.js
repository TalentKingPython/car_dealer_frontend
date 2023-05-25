import { useState } from 'react'
import Link from 'next/link'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const CityGuideAccountNav = ({ activeNav }) => {

  // Collapse state
  const [open, setOpen] = useState(false)


  return (
    <div className='mt-md-n3 mb-4'>
      <Button
        size='lg'
        variant='outline-primary rounded-pill w-100 d-md-none'
        onClick={(e) => {
          e.preventDefault()
          setOpen(!open)
        }}
        aria-controls='accountNav'
        aria-expanded={open}
      >
        <i className='fi-align-justify me-2'></i>
        Account Menu
      </Button>
      <Collapse in={open} className='d-md-block'>
        <div id='accountNav'>
          <Nav variant='pills flex-column flex-md-row pt-3 pt-md-0 pb-md-4 border-bottom-md' defaultActiveKey={activeNav}>
            <Nav.Item className='mb-md-0 me-md-2 pe-md-1'>
              <Nav.Link as={Link} href='/city-guide/account-info'>
                <i className='fi-user mt-n1 me-2 fs-base'></i>
                Personal Info
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='mb-md-0 me-md-2 pe-md-1'>
              <Nav.Link as={Link} href='/city-guide/account-favorites'>
                <i className='fi-heart mt-n1 me-2 fs-base'></i>
                Favorites
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='mb-md-0 me-md-2 pe-md-1'>
              <Nav.Link as={Link} href='/city-guide/account-reviews'>
                <i className='fi-star mt-n1 me-2 fs-base'></i>
                Reviews
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='mb-md-0'>
              <Nav.Link as={Link} href='/city-guide/account-notifications'>
                <i className='fi-bell mt-n1 me-2 fs-base'></i>
                Notifications
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='d-md-none'>
              <Nav.Link as={Link} href='/signin-light'>
                <i className='fi-logout mt-n1 me-2 fs-base'></i>
                Sign Out
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Collapse>
    </div>
  )
}

export default CityGuideAccountNav
