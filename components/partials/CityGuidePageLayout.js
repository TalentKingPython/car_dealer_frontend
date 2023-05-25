import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import StickyNavbar from '../StickyNavbar'
import ImageLoader from '../ImageLoader'
import FormGroup from '../FormGroup'
import SocialButton from '../SocialButton'
import StarRating from '../StarRating'
import SignInModalLight from '../partials/SignInModalLight'
import SignUpModalLight from '../partials/SignUpModalLight'

const CityGuidePageLayout = (props) => {

  // Sign in modal
  const [signinShow, setSigninShow] = useState(false)
  const handleSigninClose = () => setSigninShow(false)
  const handleSigninShow = () => setSigninShow(true)

  // Sign up modal
  const [signupShow, setSignupShow] = useState(false)
  const handleSignupClose = () => setSignupShow(false)

  // Swap modals
  const handleSignInToUp = (e) => {
    e.preventDefault()
    setSigninShow(false)
    setSignupShow(true)
  }
  const handleSignUpToIn = (e) => {
    e.preventDefault()
    setSigninShow(true)
    setSignupShow(false)
  }


  return (
    <>
      <Head>
        <title>{`Finder | City Guide - ${props.pageTitle}`}</title>
      </Head>

      {/* Sign in modal */}
      {!props.userLoggedIn && <SignInModalLight
        centered
        size='lg'
        pillButtons
        show={signinShow}
        onHide={handleSigninClose}
        onSwap={handleSignInToUp}
      />}

      {/* Sign up modal */}
      {!props.userLoggedIn && <SignUpModalLight
        centered
        size='lg'
        pillButtons
        show={signupShow}
        onHide={handleSignupClose}
        onSwap={handleSignUpToIn}
      />}


      {/* Page wrapper for sticky footer
      Wraps everything except footer to push footer to the bottom of the page if there is little content */}
      <main className='page-wrapper'>

        {/* Navbar (main site header with branding and navigation) */}
        <Navbar as={StickyNavbar}
          expand='lg'
          className={`fixed-top${props.navbarExtraClass ? ` ${props.navbarExtraClass}` : ''}`}
        >
          <Container>
            <Navbar.Brand as={Link} href='/city-guide' className='me-3 me-xl-4'>
              <ImageLoader priority src='/images/logo/logo-dark.svg' width={116} height={32} placeholder={false} alt='Finder' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarNav' className='ms-auto' />

            {/* Display content depending on user auth satus  */}
            {props.userLoggedIn ? <Dropdown className='d-none d-lg-block order-lg-3 my-n2 me-3'>
              <Dropdown.Toggle as={Link} href='/city-guide/account-info' className='nav-lik dropdown-toggle-flush d-flex py-1 px-0' style={{width: '40px'}}>
                <ImageLoader src='/images/avatars/36.png' width={80} height={80} placeholder={false} className='rounded-circle' alt='Annette Black' />
              </Dropdown.Toggle>
              <Dropdown.Menu renderOnMount align='end'>
                <div className='d-flex align-items-start border-bottom px-3 py-1 mb-2' style={{width: '16rem'}}>
                  <ImageLoader src='/images/avatars/24.png' width={48} height={48} placeholder={false} className='rounded-circle' alt='Annette Black' />
                  <div className='ps-2'>
                    <h6 className='fs-base mb-0'>Annette Black</h6>
                    <StarRating size='sm' rating={5} />
                    <div className='fs-xs py-2'>
                      (302) 555-0107<br/>annette_black@email.com
                    </div>
                  </div>
                </div>
                <Dropdown.Item as={Link} href='/city-guide/account-info'>
                  <i className='fi-user opacity-60 me-2'></i>
                  Personal Info
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/city-guide/account-favorites'>
                  <i className='fi-heart opacity-60 me-2'></i>
                  Favorites
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/city-guide/vendor-businesses'>
                  <i className='fi-home opacity-60 me-2'></i>
                  My Businesses
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/city-guide/account-reviews'>
                  <i className='fi-star opacity-60 me-2'></i>
                  Reviews
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/city-guide/account-notifications'>
                  <i className='fi-bell opacity-60 me-2'></i>
                  Notifications
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} href='/city-guide/help-center'>Help</Dropdown.Item>
                <Dropdown.Item as={Link} href='/signin-light'>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> :
            
              <Button variant='sm text-primary d-none d-lg-block order-lg-3' onClick={handleSigninShow}>
                <i className='fi-user me-2'></i>
                Sign in
              </Button>
            }

            <Button as={Link} href='/city-guide/add-business' size='sm' className='rounded-pill order-lg-3 ms-2'>
              <i className='fi-plus me-2'></i>
              Add <span className='d-none d-sm-inline'>business</span>
            </Button>
            
            <Navbar.Collapse id='navbarNav' className='order-md-2'>
              <Nav navbarScroll style={{maxHeight: '35rem'}}>
                <Nav.Item as={Dropdown} className='me-lg-2'>
                  <Dropdown.Toggle as={Nav.Link} className='align-items-center pe-lg-4'>
                    <i className='fi-layers me-2'></i>
                    Demos
                    <span className='d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end' style={{width: '1px', height: '30px'}}></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Dropdown.Item as={Link} href='/real-estate'>
                      <i className='fi-building fs-base opacity-50 me-2'></i>
                      Real Estate Demo
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} href='/car-finder'>
                      <i className='fi-car fs-base opacity-50 me-2'></i>
                      Car Finder Demo
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} href='/job-board'>
                      <i className='fi-briefcase fs-base opacity-50 me-2'></i>
                      Job Board Demo
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} href='/city-guide'>
                      <i className='fi-map-pin fs-base opacity-50 me-2'></i>
                      City Guide Demo
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} href='/'>
                      <i className='fi-home fs-base opacity-50 me-2'></i>
                      Main Page
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/components/typography'>
                      <i className='fi-list fs-base opacity-50 me-2'></i>
                      Components
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/docs'>
                      <i className='fi-file fs-base opacity-50 me-2'></i>
                      Documentation
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav==='Home'}>Home</Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Dropdown.Item as={Link} href='/city-guide'>Homepage v.1</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/index-2'>Homepage v.2</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav==='Catalog'}>Catalog</Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Dropdown.Item as={Link} href='/city-guide/catalog'>Grid with Filters</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/single'>Single Place - Gallery</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/single-info'>Single Place - Info</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/single-reviews'>Single Place - Reviews</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav==='Account'}>Account</Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Dropdown.Item as={Link} href='/city-guide/account-info'>Personal Info</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/account-favorites'>Favorites</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/account-reviews'>Reviews</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/account-notifications'>Notifications</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/signin-light'>Sign In</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/signup-light'>Sign Up</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav==='Vendor'}>Vendor</Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Dropdown.Item as={Link} href='/city-guide/add-business'>Add Business</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/business-promotion'>Business Promotion</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/vendor-businesses'>My Businesses</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav==='Pages'}>Pages</Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Dropdown.Item as={Link} href='/city-guide/about'>About</Dropdown.Item>
                    <Dropdown>
                      <Dropdown.Toggle as={Dropdown.Item}>Blog</Dropdown.Toggle>
                      <Dropdown.Menu renderOnMount>
                        <Dropdown.Item as={Link} href='/city-guide/blog'>Blog Grid</Dropdown.Item>
                        <Dropdown.Item as={Link} href='/city-guide/blog-single'>Single Post</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown.Item as={Link} href='/city-guide/contacts'>Contacts</Dropdown.Item>
                    <Dropdown>
                      <Dropdown.Toggle as={Dropdown.Item}>Help Center</Dropdown.Toggle>
                      <Dropdown.Menu renderOnMount>
                        <Dropdown.Item as={Link} href='/city-guide/help-center'>Help Topics</Dropdown.Item>
                        <Dropdown.Item as={Link} href='/city-guide/help-center-single'>Single Topic</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown.Item as={Link} href='/city-guide/404-not-found'>404 Not Found</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>

                {/* Display content depending on user auth satus  */}
                {props.userLoggedIn ?<Nav.Item as={Dropdown} className='d-lg-none'>
                  <Dropdown.Toggle as={Nav.Link} className='d-flex align-items-center'>
                    <ImageLoader src='/images/avatars/36.png' width={30} height={30} placeholder={false} className='rounded-circle' alt='Annette Black' />
                    <span className='ms-2'>Annette Black</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className='ps-3'>
                      <StarRating size='sm' rating={5} />
                      <div className='fs-xs py-2'>
                        (302) 555-0107<br/>annette_black@email.com
                      </div>
                    </div>
                    <Dropdown.Item as={Link} href='/city-guide/account-info'>
                      <i className='fi-user opacity-60 me-2'></i>
                      Personal Info
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/account-favorites'>
                      <i className='fi-heart opacity-60 me-2'></i>
                      Favorites
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/vendor-businesses'>
                      <i className='fi-home opacity-60 me-2'></i>
                      My Businesses
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/account-reviews'>
                      <i className='fi-star opacity-60 me-2'></i>
                      Reviews
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/city-guide/account-notifications'>
                      <i className='fi-bell opacity-60 me-2'></i>
                      Notifications
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} href='/city-guide/help-center'>Help</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/signin-light'>Sign Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item> : 
                
                <Nav.Item className='d-lg-none'>
                  <Nav.Link onClick={handleSigninShow}>
                    <i className='fi-user me-2'></i>
                    Sign in
                  </Nav.Link>
                </Nav.Item>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        {/* Page content */}
        {props.children}
      </main>


      {/* Footer */}
      <footer className='footer pt-lg-5 pt-4 bg-dark text-light'>
        <Container className='mb-4 py-4 pb-lg-5'>
          <Row className='gy-4'>

            {/* Logo + contacts */}
            <Col lg={3} md={6} sm={4}>
              <div className='mb-4 pb-sm-2'>
                <Link href='/city-guide' className='d-inline-flex'>
                  <ImageLoader priority src='/images/logo/logo-light.svg' width={116} height={32} placeholder={false} alt='Finder' />
                </Link>
              </div>
              <Nav as='ul' className='nav-light flex-column'>
                <Nav.Item as='li' className='mb-2'>
                  <Nav.Link href='mailto:example@gmail.com' className='fw-normal text-light text-nowrap p-0'>
                    <i className='fi-mail mt-n1 me-1 align-middle text-primary'></i>
                    example@gmail.com
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as='li' className='mb-2'>
                  <Nav.Link href='tel:4065550120' className='fw-normal text-light text-nowrap p-0'>
                    <i className='fi-device-mobile mt-n1 me-1 align-middle text-primary'></i>
                    (406) 555-0120
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            {/* Quick links */}
            <Col lg={2} md={3} sm={4}>
              <h3 className='fs-base text-light'>Quick links</h3>
              <ul className='list-unstyled fs-sm'>
                <li><Link href='#' className='nav-link-light'>Top cities</Link></li>
                <li><Link href='#' className='nav-link-light'>Accommodation</Link></li>
                <li><Link href='#' className='nav-link-light'>Cafes &amp; restaurants</Link></li>
                <li><Link href='#' className='nav-link-light'>Events</Link></li>
              </ul>
            </Col>

            {/* Profile links */}
            <Col lg={2} md={3} sm={4}>
              <h3 className='fs-base text-light'>Profile</h3>
              <ul className='list-unstyled fs-sm'>
                <li><Link href='#' className='nav-link-light'>My account</Link></li>
                <li><Link href='#' className='nav-link-light'>Favorites</Link></li>
                <li><Link href='#' className='nav-link-light'>My listings</Link></li>
                <li><Link href='#' className='nav-link-light'>Add listing</Link></li>
              </ul>
            </Col>

            {/* Subscription form */}
            <Col lg={{span: 4, offset: 1}}>
              <h3 className='h4 text-light'>Subscribe to our newsletter</h3>
              <p className='fs-sm mb-4 opacity-60'>Don&apos;t miss any relevant vacancies!</p>
              <FormGroup light className='rounded-pill'>
                <InputGroup size='sm'>
                  <InputGroup.Text className='text-muted'>
                    <i className='fi-mail'></i>
                  </InputGroup.Text>
                  <FormControl placeholder='Your email' />
                </InputGroup>
                <Button variant='primary rounded-pill' size='sm'>Subscribe</Button>
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <div className='py-4 border-top border-light'>
          <Container className='d-flex flex-column flex-lg-row align-items-center justify-content-between py-2'>

            {/* Copyright */}
            <p className='order-lg-1 order-2 fs-sm mb-2 mb-lg-0'>
              <span className='text-light opacity-60'>&copy; All rights reserved. Made by </span>
              <a href='https://createx.studio/' className='nav-link-light fw-bold'  target='_blank' rel='noreferrer'>Createx Studio</a>
            </p>

            <div className='d-flex flex-lg-row flex-column align-items-center lg-2 order-1 ms-lg-4 mb-lg-0 mb-4'>

              {/* Links */}
              <div className='d-flex flex-wrap fs-sm mb-lg-0 mb-4 pe-lg-4'>
                <Link href='#' className='nav-link-light px-2 mx-1'>About</Link>
                <Link href='#' className='nav-link-light px-2 mx-1'>Blog</Link>
                <Link href='#' className='nav-link-light px-2 mx-1'>Support</Link>
                <Link href='#' className='nav-link-light px-2 mx-1'>Contacts</Link>
              </div>

              <div className='d-flex align-items-center'>

                {/* Language switcher */}
                <Dropdown>
                  <Dropdown.Toggle className='nav-link nav-link-light fs-sm align-items-center p-0 fw-normal bg-transparent border-0 shadow-none'>
                    <i className='fi-globe mt-n1 me-2 align-middle'></i>
                    Eng
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant='dark' className='my-1'>
                    <Dropdown.Item eventKey='deutsch' className='d-flex align-items-center'>
                      <ImageLoader priority src='/images/flags/de.png' width={20} height={20} alt='Deutsch' />
                      <span className='ms-2'>Deutsch</span>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='français' className='d-flex align-items-center'>
                      <ImageLoader priority src='/images/flags/fr.png' width={20} height={20} alt='Français' />
                      <span className='ms-2'>Français</span>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='español' className='d-flex align-items-center'>
                      <ImageLoader priority src='/images/flags/es.png' width={20} height={20} alt='Español' />
                      <span className='ms-2'>Español</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Socials */}
                <div className='ms-4 ps-lg-2 text-nowrap'>
                  <SocialButton href='#' brand='facebook' variant='translucent' roundedCircle light className='ms-2' />
                  <SocialButton href='#' brand='twitter' variant='translucent' roundedCircle light className='ms-2' />
                  <SocialButton href='#' brand='telegram' variant='translucent' roundedCircle light className='ms-2' />
                  <SocialButton href='#' brand='messenger' variant='translucent' roundedCircle light className='ms-2' />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default CityGuidePageLayout
