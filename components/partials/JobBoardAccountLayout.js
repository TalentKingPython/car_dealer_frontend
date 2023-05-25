import { useState, useEffect } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Avatar from '../../components/Avatar'
import Nav from 'react-bootstrap/Nav'
import Collapse from 'react-bootstrap/Collapse'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'

const JobBoardAccountLayout = ({ accountPageTitle, activeAccountNav, children }) => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
  })

  // State to control Collapse
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Page overlay */}
      <div className='position-absolute top-0 start-0 w-100 bg-dark' style={{height: '398px'}}></div>

      {/* Page content */}
      <Container as='section' className='content-overlay mt-5 mb-md-4 py-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='breadcrumb-light mb-3 mb-md-4 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/job-board'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='/job-board/account-profile'>Account</Breadcrumb.Item>
          <Breadcrumb.Item active>{accountPageTitle}</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page card like wrapper */}
        <div className='bg-light shadow-sm rounded-3 p-4 p-md-5 mb-2'>

          {/* Account header */}
          <div className='d-flex align-items-start justify-content-between pb-4 mb-2'>
            <div className='d-flex align-items-start'>
              <div className='position-relative flex-shrink-0'>
                <Avatar
                  img={{
                    src: '/images/avatars/37.png',
                    alt: 'Avatar'
                  }}
                  size={[100, 100]}
                />
                <OverlayTrigger
                  placement='top'
                  overlay={<Tooltip>Change image</Tooltip>}
                >
                  <Button size='xs' variant='light btn-icon rounded-circle shadow-sm' className='position-absolute end-0 bottom-0'>
                    <i className='fi-pencil fs-xs'></i>
                  </Button>
                </OverlayTrigger>
              </div>
              <div className='ps-3 ps-sm-4'>
                <h3 className='h5'>Annette Black</h3>
                <ul className='list-unstyled fs-sm mb-0'>
                  <li className='d-flex text-nav text-break'>
                    <i className='fi-mail opacity-60 mt-1 me-2'></i>
                    <span>annette_black@email.com</span>
                  </li>
                  <li className='d-flex text-nav text-break'>
                    <i className='fi-phone opacity-60 mt-1 me-2'></i>
                    <span>(302) 555-0107</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link href='/signin-light' className='nav-link p-0 d-none d-md-block'>
              <i className='fi-logout mt-n1 me-2'></i>
              Sign out
            </Link>
          </div>
          <Button size='lg' variant='outline-primary rounded-pill'
            onClick={() => setOpen(!open)}
            aria-controls='account-menu'
            aria-expanded={open}
            className='d-md-none w-100'
          >
            <i className='fi-align-justify me-2'></i>
            Account Menu
          </Button>
          <Collapse in={open}>
            <div id='account-menu-mobile' className='d-md-block'>
              <Nav variant='pills' defaultActiveKey={activeAccountNav} className='flex-column flex-md-row pt-3 pt-md-0 pb-md-4 border-bottom-md'>
                <Nav.Item className='mb-md-0 me-md-2 pe-md-1'>
                  <Nav.Link as={Link} href='/job-board/account-profile'>
                    <i className='fi-settings mt-n1 me-2 fs-base'></i>
                    Profile Settings
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className='mb-md-0 me-md-2 pe-md-1'>
                  <Nav.Link as={Link} href='/job-board/account-resumes'>
                    <i className='fi-file mt-n1 me-2 fs-base'></i>
                    My Resumes
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className='mb-md-0 me-md-2 pe-md-1'>
                  <Nav.Link as={Link} href='/job-board/account-saved-jobs'>
                    <i className='fi-heart mt-n1 me-2 fs-base'></i>
                    Saved Jobs
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className='mb-md-0 me-md-2 pe-md-1'>
                  <Nav.Link as={Link} href='/job-board/account-notifications'>
                    <i className='fi-bell mt-n1 me-2 fs-base'></i>
                    Notifications
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className='mb-md-0 me-md-2 pe-md-1 d-md-none'>
                  <Nav.Link as={Link} href='/signin-light'>
                    <i className='fi-logout mt-n1 me-2 fs-base'></i>
                    Sign Out
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Collapse>

          {children}

        </div>
      </Container>
    </>
  )
}

export default JobBoardAccountLayout