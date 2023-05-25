import { useEffect, useState } from 'react'
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
import SignInModalDark from '../partials/SignInModalDark'
import SignUpModalDark from '../partials/SignUpModalDark'

const CarFinderPageLayout = (props) => {

  // Add class to body to enable dark background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-dark')
    return () => body.classList.remove('bg-dark')
  })

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
        <title>{`Finder | Car Finder - ${props.pageTitle}`}</title>
      </Head>

      {/* Sign in modal */}
      {!props.userLoggedIn && <SignInModalDark
        centered
        size='lg'
        show={signinShow}
        onHide={handleSigninClose}
        onSwap={handleSignInToUp}
      />}

      {/* Sign up modal */}
      {!props.userLoggedIn && <SignUpModalDark
        centered
        size='lg'
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
          className={`navbar-dark fixed-top${props.navbarExtraClass ? ` ${props.navbarExtraClass}` : ''}`}
        >
          <Container>
            <Navbar.Brand as={Link} href='/car-finder' className='me-3 me-xl-4'>
              <ImageLoader priority src='/images/logo/logo-light.svg' width={116} height={32} placeholder={false} alt='Finder' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarNav' className='ms-auto' />

            {/* Display content depending on user auth satus  */}
            {props.userLoggedIn ? <Dropdown className='d-none d-lg-block order-lg-3 my-n2 me-3'>
              <Dropdown.Toggle as={Link} href='/car-finder/account-info' className='nav-link dropdown-toggle-flush py-1 px-0' style={{ width: '40px' }}>
                <ImageLoader src='/images/avatars/02.jpg' width={80} height={80} placeholder={false} className='rounded-circle' alt='Robert Fox' />
              </Dropdown.Toggle>
              <Dropdown.Menu variant='dark' renderOnMount align='end'>
                <div className='d-flex align-items-start border-bottom border-light px-3 py-1 mb-2' style={{ width: '16rem' }}>
                  <ImageLoader src='/images/avatars/01.jpg' width={48} height={48} placeholder={false} className='rounded-circle' alt='Robert Fox' />
                  <div className='ps-2'>
                    <h6 className='fs-base text-light mb-0'>Robert Fox</h6>
                    <StarRating size='sm' rating={5} />
                    <div className='fs-xs py-2'>
                      (302) 555-0107<br />robert_fox@email.com
                    </div>
                  </div>
                </div>
                <Dropdown.Item as={Link} href='/car-finder/account-info'>
                  <i className='fi-user me-2'></i>
                  Personal Info
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/car-finder/account-security'>
                  <i className='fi-lock me-2'></i>
                  Password &amp; Security
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/car-finder/account-cars'>
                  <i className='fi-car me-2'></i>
                  My Cars
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/car-finder/account-wishlist'>
                  <i className='fi-heart me-2'></i>
                  Wishlist
                  <span className='badge bg-faded-light ms-2'>4</span>
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/car-finder/account-reviews'>
                  <i className='fi-star me-2'></i>
                  Reviews
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/car-finder/account-notifications'>
                  <i className='fi-bell me-2'></i>
                  Notifications
                </Dropdown.Item>
                <Dropdown.Divider as='div' />
                <Dropdown.Item as={Link} href='/car-finder/help-center'>Help</Dropdown.Item>
                <Dropdown.Item as={Link} href='/signin-dark'>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> :

              <Button size='sm' variant='link btn-light btn-sm d-none d-lg-block order-lg-3' onClick={handleSigninShow} style={{color: '#334155'}}>
                <i className='fi-user me-2'></i>
                ACCOUNT
              </Button>
            }

            <Button as={Link} href='/car-finder/sell-car' size='sm' className='order-lg-3 ms-2' style={{backgroundColor: '#000F9F', border: '#000F9F'}}>
              <i className='fi-plus me-2'></i>
              SELL MY CAR
            </Button>
            <Navbar.Collapse id='navbarNav' className='order-md-2'>
              <Nav navbarScroll style={{ maxHeight: '35rem' }}>
                <Nav.Item as={Dropdown} className='me-lg-2'>
                  <Dropdown.Toggle as={Nav.Link} className='align-items-center pe-lg-4'>
                    <i className='fi-layers me-2'></i>
                    Demos
                    <span className='d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end border-light' style={{ width: '1px', height: '30px' }}></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant='dark' renderOnMount>
                    <Dropdown.Item as={Link} href='/real-estate'>
                      <i className='fi-building fs-base me-2'></i>
                      Real Estate Demo
                    </Dropdown.Item>
                    <Dropdown.Divider as='div' />
                    <Dropdown.Item as={Link} href='/car-finder'>
                      <i className='fi-car fs-base me-2'></i>
                      Car Finder Demo
                    </Dropdown.Item>
                    <Dropdown.Divider as='div' />
                    <Dropdown.Item as={Link} href='/job-board'>
                      <i className='fi-briefcase fs-base me-2'></i>
                      Job Board Demo
                    </Dropdown.Item>
                    <Dropdown.Divider as='div' />
                    <Dropdown.Item as={Link} href='/city-guide'>
                      <i className='fi-map-pin fs-base me-2'></i>
                      City Guide Demo
                    </Dropdown.Item>
                    <Dropdown.Divider as='div' />
                    <Dropdown.Item as={Link} href='/'>
                      <i className='fi-home fs-base me-2'></i>
                      Main Page
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/components/typography'>
                      <i className='fi-list fs-base me-2'></i>
                      Components
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/docs'>
                      <i className='fi-file fs-base me-2'></i>
                      Documentation
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} href='/car-finder' active={props.activeNav === 'Home'}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav === 'Catalog'}>Catalog</Dropdown.Toggle>
                  <Dropdown.Menu variant='dark' renderOnMount>
                    <Dropdown.Item as={Link} href='/car-finder/catalog?view=list'>List View</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/catalog?view=grid'>Grid View</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/single'>Car Single Page</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav === 'Account'}>Account</Dropdown.Toggle>
                  <Dropdown.Menu variant='dark' renderOnMount>
                    <Dropdown.Item as={Link} href='/car-finder/account-info'>Personal Info</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/account-security'>Password &amp; Security</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/account-cars'>My Cars</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/account-wishlist'>Wishlist</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/account-reviews'>Reviews</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/account-notifications'>Notifications</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/signin-dark'>Sign In</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/signup-dark'>Sign Up</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav === 'Vendor'}>Vendor</Dropdown.Toggle>
                  <Dropdown.Menu variant='dark' renderOnMount>
                    <Dropdown.Item as={Link} href='/car-finder/sell-car'>Sell Car</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/promotion'>Ad Promotion Page</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/vendor'>Vendor Page</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav === 'Pages'}>Pages</Dropdown.Toggle>
                  <Dropdown.Menu variant='dark' renderOnMount>
                    <Dropdown.Item as={Link} href='/car-finder/about'>About</Dropdown.Item>
                    <Dropdown>
                      <Dropdown.Toggle as={Dropdown.Item}>Blog</Dropdown.Toggle>
                      <Dropdown.Menu variant='dark' renderOnMount>
                        <Dropdown.Item as={Link} href='/car-finder/blog'>Blog Grid</Dropdown.Item>
                        <Dropdown.Item as={Link} href='/car-finder/blog-single'>Single Post</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown.Item as={Link} href='/car-finder/contacts'>Contacts</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/help-center'>Help Center</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/404-not-found'>404 Not Found</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>

                {/* Display content depending on user auth satus  */}
                {props.userLoggedIn ? <Nav.Item as={Dropdown} className='d-lg-none'>
                  <Dropdown.Toggle as={Nav.Link} className='d-flex align-items-center'>
                    <ImageLoader src='/images/avatars/02.jpg' width={30} height={30} placeholder={false} className='rounded-circle' alt='Robert Fox' />
                    <span className='ms-2'>Robert Fox</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant='dark'>
                    <div className='ps-3'>
                      <StarRating size='sm' rating={5} />
                      <div className='fs-xs py-2'>
                        (302) 555-0107<br />robert_fox@email.com
                      </div>
                    </div>
                    <Dropdown.Item as={Link} href='/car-finder/account-info'>
                      <i className='fi-user me-2'></i>
                      Personal Info
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/account-security'>
                      <i className='fi-lock me-2'></i>
                      Password &amp; Security
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/account-cars'>
                      <i className='fi-car me-2'></i>
                      My Cars
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/account-wishlist'>
                      <i className='fi-heart me-2'></i>
                      Wishlist
                      <span className='badge bg-faded-light ms-2'>4</span>
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/account-reviews'>
                      <i className='fi-star me-2'></i>
                      Reviews
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/car-finder/account-notifications'>
                      <i className='fi-bell me-2'></i>
                      Notifications
                    </Dropdown.Item>
                    <Dropdown.Divider as='div' />
                    <Dropdown.Item as={Link} href='/car-finder/help-center'>Help</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/signin-dark'>Sign Out</Dropdown.Item>
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
      <footer className='footer bg-faded-light'>
        <div className='border-bottom border-light py-4'>
          <Container className='d-sm-flex align-items-center justify-content-between'>

            {/* Logo */}
            <Link href='/car-finder' className='d-inline-flex'>
              <ImageLoader priority src='/images/logo/logo-light.svg' width={116} height={32} placeholder={false} alt='Finder' />
            </Link>
            <div className='d-flex pt-3 pt-sm-0'>

              {/* Language switcher */}
              <Dropdown className='ms-n3'>
                <Dropdown.Toggle className='btn btn-light btn-link btn-sm fw-normal shadow-none py-2'>
                  <i className='fi-globe me-2'></i>
                  Eng
                </Dropdown.Toggle>
                <Dropdown.Menu variant='dark' align='end' className='my-1' style={{ minWidth: '8rem' }}>
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

              {/* Location switcher */}
              <Dropdown>
                <Dropdown.Toggle variant='light btn-link btn-sm fw-normal shadow-none py-2 pe-2'>
                  <i className='fi-map-pin me-2'></i>
                  New York
                </Dropdown.Toggle>
                <Dropdown.Menu variant='dark' align='end' className='my-1' style={{ minWidth: '8rem' }}>
                  <Dropdown.Item eventKey='chicago'>Chicago</Dropdown.Item>
                  <Dropdown.Item eventKey='dallas'>Dallas</Dropdown.Item>
                  <Dropdown.Item eventKey='los-angeles'>Los Angeles</Dropdown.Item>
                  <Dropdown.Item eventKey='san-diego'>San Diego</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Container>
        </div>
        <Container className='pt-4 pb-3 pt-lg-5 pb-lg-4'>
          <Row className='row pt-2 pt-lg-0'>

            {/* Subscription form */}
            <Col lg={3} className='pb-2 mb-4'>
              <h3 className='h5 text-light mb-2'>Subscribe to our newsletter</h3>
              <p className='fs-sm text-light opacity-70'>Don&apos;t miss any relevant offers!</p>
              <FormGroup light>
                <InputGroup size='sm'>
                  <InputGroup.Text className='text-muted'>
                    <i className='fi-mail'></i>
                  </InputGroup.Text>
                  <FormControl placeholder='Your email' />
                </InputGroup>
                <Button variant='primary btn-icon' size='sm'>
                  <i className='fi-send'></i>
                </Button>
              </FormGroup>
            </Col>

            {/* Buying/selling links */}
            <Col lg={2} md={3} sm={6} xl={{ offset: 1 }} className='mb-2 mb-sm-4'>
              <h3 className='fs-base text-light'>Buying &amp; Selling</h3>
              <ul className='list-unstyled fs-sm'>
                <li><Link href='#' className='nav-link-light'>Find a car</Link></li>
                <li><Link href='#' className='nav-link-light'>Sell your car</Link></li>
                <li><Link href='#' className='nav-link-light'>Car dealers</Link></li>
                <li><Link href='#' className='nav-link-light'>Compare cars</Link></li>
                <li><Link href='#' className='nav-link-light'>Online car appraisal</Link></li>
              </ul>
            </Col>

            {/* About links */}
            <Col lg={2} md={3} sm={6} className='mb-2 mb-sm-4'>
              <h3 className='fs-base text-light'>About</h3>
              <ul className='list-unstyled fs-sm'>
                <li><Link href='#' className='nav-link-light'>About Finder</Link></li>
                <li><Link href='#' className='nav-link-light'>Contact us</Link></li>
                <li><Link href='#' className='nav-link-light'>FAQs &amp; support</Link></li>
                <li><Link href='#' className='nav-link-light'>Mobile app</Link></li>
                <li><Link href='#' className='nav-link-light'>Blog</Link></li>
              </ul>
            </Col>

            {/* Profile links */}
            <Col lg={2} md={3} sm={6} className='mb-2 mb-sm-4'>
              <h3 className='fs-base text-light'>Profile</h3>
              <ul className='list-unstyled fs-sm'>
                <li><Link href='#' className='nav-link-light'>My account</Link></li>
                <li><Link href='#' className='nav-link-light'>Wishlist</Link></li>
                <li><Link href='#' className='nav-link-light'>My listings</Link></li>
                <li><Link href='#' className='nav-link-light'>Add listing</Link></li>
              </ul>
            </Col>

            {/* Contacts + Socials */}
            <Col xl={2} md={3} sm={6} className='mb-2 mb-sm-4'>
              <Nav as='ul' className='nav-light flex-column'>
                <Nav.Item as='li' className='mb-2'>
                  <Nav.Link href='tel:4065550120' className='fw-normal text-light text-nowrap p-0'>
                    <i className='fi-device-mobile mt-n1 me-2 align-middle text-primary'></i>
                    (406) 555-0120
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as='li' className='mb-2'>
                  <Nav.Link href='mailto:example@gmail.com' className='fw-normal text-light text-nowrap p-0'>
                    <i className='fi-mail mt-n1 me-2 align-middle text-primary'></i>
                    example@gmail.com
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div className='d-flex flex-wrap pt-4'>
                <SocialButton href='#' brand='facebook' variant='translucent' roundedCircle light className='mb-2 me-2' />
                <SocialButton href='#' brand='twitter' variant='translucent' roundedCircle light className='mb-2 me-2' />
                <SocialButton href='#' brand='telegram' variant='translucent' roundedCircle light className='mb-2 me-2' />
                <SocialButton href='#' brand='messenger' variant='translucent' roundedCircle light className='mb-2' />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className='d-lg-flex align-items-center justify-content-between fs-sm pb-3'>

          {/* Links */}
          <div className='d-flex flex-wrap justify-content-center order-lg-2 mb-3'>
            <Nav.Link as={Link} href='#' className='nav-link-light fw-normal'>Terms of use</Nav.Link>
            <Nav.Link as={Link} href='#' className='nav-link-light fw-normal'>Privacy policy</Nav.Link>
            <Nav.Link as={Link} href='#' className='nav-link-light fw-normal'>Accessibility statement</Nav.Link>
            <Nav.Link as={Link} href='#' className='nav-link-light fw-normal pe-0'>Interest based ads</Nav.Link>
          </div>

          {/* Copyright */}
          <p className='text-center text-lg-start order-lg-1 mb-lg-0'>
            <span className='text-light opacity-50'>&copy; All rights reserved. Made by </span>
            <a href='https://createx.studio/' className='nav-link-light fw-bold' target='_blank' rel='noreferrer'>Createx Studio</a>
          </p>
        </Container>
      </footer>
    </>
  )
}

export default CarFinderPageLayout
