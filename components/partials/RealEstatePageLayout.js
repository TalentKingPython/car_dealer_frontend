import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../ImageLoader'
import StickyNavbar from '../StickyNavbar'
import StarRating from '../StarRating'
import SocialButton from '../SocialButton'
import MarketButton from '../MarketButton'
import SignInModalLight from '../partials/SignInModalLight'
import SignUpModalLight from '../partials/SignUpModalLight'

const RealEstatePageLayout = (props) => {

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

  // Footer recent blog posts array
  const footerPosts = [
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/th01.jpg',
      category: 'Home Improvement',
      title: 'Your Guide to a Smart Apartment Searching',
      text: 'Mi justo, varius vitae cursus ipsum sem massa amet pellentesque. Ipsum enim sit nulla ridiculus semper nam...',
      date: 'Dec 4',
      comments: '2'
    },
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/th02.jpg',
      category: 'Tips & Advice',
      title: 'Top 10 Ways to Refresh Your Space',
      text: 'Volutpat, orci, vitae arcu feugiat vestibulum ultricies nisi, aenean eget. Vitae enim, tellus tempor consequat mi vitae...',
      date: 'Nov 23',
      comments: 'No'
    }
  ]


  return (
    <>
      <Head>
        <title>{`Finder | Real Estate - ${props.pageTitle}`}</title>
      </Head>

      {/* Sign in modal */}
      {!props.userLoggedIn && <SignInModalLight
        centered
        size='lg'
        show={signinShow}
        onHide={handleSigninClose}
        onSwap={handleSignInToUp}
      />}

      {/* Sign up modal */}
      {!props.userLoggedIn && <SignUpModalLight
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
          bg='light'
          className={`fixed-top${props.navbarExtraClass ? ` ${props.navbarExtraClass}` : ''}`}
        >
          <Container>
            <Navbar.Brand as={Link} href='/real-estate' className='me-3 me-xl-4'>
              <ImageLoader priority src='/images/logo/logo-dark.svg' width={116} height={32} placeholder={false} alt='Finder' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarNav' className='ms-auto' />

            {/* Display content depending on user auth satus  */}
            {props.userLoggedIn ? <Dropdown className='d-none d-lg-block order-lg-3 my-n2 me-3'>
              <Dropdown.Toggle as={Link} href='/real-estate/account-info' className='nav-link dropdown-toggle-flush d-flex py-1 px-0' style={{width: '40px'}}>
                <ImageLoader src='/images/avatars/30.jpg' width={80} height={80} placeholder={false} className='rounded-circle' alt='Annette Black' />
              </Dropdown.Toggle>
              <Dropdown.Menu renderOnMount align='end'>
                <div className='d-flex align-items-start border-bottom px-3 py-1 mb-2' style={{width: '16rem'}}>
                  <ImageLoader src='/images/avatars/03.jpg' width={48} height={48} placeholder={false} className='rounded-circle' alt='Annette Black' />
                  <div className='ps-2'>
                    <h6 className='fs-base mb-0'>Annette Black</h6>
                    <StarRating size='sm' rating={5} />
                    <div className='fs-xs py-2'>
                      (302) 555-0107<br/>annette_black@email.com
                    </div>
                  </div>
                </div>
                <Dropdown.Item as={Link} href='/real-estate/account-info'>
                  <i className='fi-lock opacity-60 me-2'></i>
                  Personal Info
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/real-estate/account-security'>
                  <i className='fi-heart opacity-60 me-2'></i>
                  Password &amp; Security
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/real-estate/account-properties'>
                  <i className='fi-home opacity-60 me-2'></i>
                  My Properties
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/real-estate/account-wishlist'>
                  <i className='fi-heart opacity-60 me-2'></i>
                  Wishlist
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/real-estate/account-reviews'>
                  <i className='fi-star opacity-60 me-2'></i>
                  Reviews
                </Dropdown.Item>
                <Dropdown.Item as={Link} href='/real-estate/account-notifications'>
                  <i className='fi-bell opacity-60 me-2'></i>
                  Notifications
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} href='/real-estate/help-center'>Help</Dropdown.Item>
                <Dropdown.Item as={Link} href='/signin-light'>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> :
            
              <Button variant='sm text-primary d-none d-lg-block order-lg-3' onClick={handleSigninShow}>
                <i className='fi-user me-2'></i>
                Sign in
              </Button>
            }

            <Button as={Link} href='/real-estate/add-property' size='sm' className='order-lg-3 ms-2'>
              <i className='fi-plus me-2'></i>
              Add <span className='d-none d-sm-inline'>property</span>
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
                    <Dropdown.Item as={Link} href='/real-estate'>Homepage v.1</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/index-2'>Homepage v.2</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav==='Catalog'}>Catalog</Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Dropdown.Item as={Link} href='/real-estate/catalog?category=rent'>Property for Rent</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/catalog?category=sale'>Property for Sale</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/single-v1'>Single Property v.1</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/single-v2'>Single Property v.2</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav==='Account'}>Account</Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Dropdown.Item as={Link} href='/real-estate/account-info'>Personal Info</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/account-security'>Password &amp; Security</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/account-properties'>My Properties</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/account-wishlist'>Wishlist</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/account-reviews'>Reviews</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/account-notifications'>Notifications</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/signin-light'>Sign In</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/signup-light'>Sign Up</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav==='Vendor'}>Vendor</Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Dropdown.Item as={Link} href='/real-estate/add-property'>Add Property</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/property-promotion'>Property Promotion</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/vendor-properties'>Vendor Page: Properties</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/vendor-reviews'>Vendor Page: Reviews</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>
                <Nav.Item as={Dropdown}>
                  <Dropdown.Toggle as={Nav.Link} active={props.activeNav==='Pages'}>Pages</Dropdown.Toggle>
                  <Dropdown.Menu renderOnMount>
                    <Dropdown.Item as={Link} href='/real-estate/about'>About</Dropdown.Item>
                    <Dropdown>
                      <Dropdown.Toggle as={Dropdown.Item}>Blog</Dropdown.Toggle>
                      <Dropdown.Menu renderOnMount>
                        <Dropdown.Item as={Link} href='/real-estate/blog'>Blog Grid</Dropdown.Item>
                        <Dropdown.Item as={Link} href='/real-estate/blog-single'>Single Post</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown.Item as={Link} href='/real-estate/contacts'>Contacts</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/help-center'>Help Center</Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/404-not-found'>404 Not Found</Dropdown.Item>
                  </Dropdown.Menu>
                </Nav.Item>

                {/* Display content depending on user auth satus  */}
                {props.userLoggedIn ?<Nav.Item as={Dropdown} className='d-lg-none'>
                  <Dropdown.Toggle as={Nav.Link} className='d-flex align-items-center'>
                    <ImageLoader src='/images/avatars/30.jpg' width={30} height={30} placeholder={false} className='rounded-circle' alt='Annette Black' />
                    <span className='ms-2'>Annette Black</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className='ps-3'>
                      <StarRating size='sm' rating={5} />
                      <div className='fs-xs py-2'>
                        (302) 555-0107<br/>annette_black@email.com
                      </div>
                    </div>
                    <Dropdown.Item as={Link} href='/real-estate/account-info'>
                      <i className='fi-user opacity-60 me-2'></i>
                      Personal Info
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/account-security'>
                      <i className='fi-heart opacity-60 me-2'></i>
                      Password &amp; Security
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/account-properties'>
                      <i className='fi-home opacity-60 me-2'></i>
                      My Properties
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/account-wishlist'>
                      <i className='fi-heart opacity-60 me-2'></i>
                      Wishlist
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/account-reviews'>
                      <i className='fi-star opacity-60 me-2'></i>
                      Reviews
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href='/real-estate/account-notifications'>
                      <i className='fi-bell opacity-60 me-2'></i>
                      Notifications
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} href='/real-estate/help-center'>Help</Dropdown.Item>
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
      <footer className='footer bg-secondary pt-5'>
        <Container className='pt-lg-4 pb-4'>
          <Row className='mb-5 pb-md-3 pb-lg-4'>
            <Col lg={6} className='mb-lg-0 mb-4'>
              <div className='d-flex flex-sm-row flex-column justify-content-between mx-n2'>

                {/* Logo + contacts */}
                <div className='mb-sm-0 mb-4 px-2'>
                  <Link href='/real-estate' className='d-inline-flex mb-4'>
                    <ImageLoader priority src='/images/logo/logo-dark.svg' width={116} height={32} placeholder={false} alt='Finder' />
                  </Link>
                  <Nav className='flex-column mb-sm-4 mb-2'>
                    <Nav.Item className='mb-2'>
                      <Nav.Link href='mailto:example@email.com' active={false} className='p-0 fw-normal'>
                        <i className='fi-mail me-2 align-middle opacity-70'></i>
                        example@email.com
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='tel:4065550120' active={false} className='p-0 fw-normal'>
                        <i className='fi-device-mobile me-2 align-middle opacity-70'></i>
                        (406) 555-0120
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className='pt-2'>
                    <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='me-2 mb-2' />
                    <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='me-2 mb-2' />
                    <SocialButton href='#' variant='solid' brand='viber' roundedCircle className='me-2 mb-2' />
                    <SocialButton href='#' variant='solid' brand='telegram' roundedCircle className='mb-2' />
                  </div>
                </div>

                {/* Quick links */}
                <div className='mb-sm-0 mb-4 px-2'>
                  <h4 className='h5'>Quick Links</h4>
                  <Nav className='flex-column'>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Buy a property</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Sell a property</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Rent a property</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Calculate  your property</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Top offers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Top cities</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                {/* About links */}
                <div className='px-2'>
                  <h4 className='h5'>About</h4>
                  <Nav className='flex-column'>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>About us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Our agents</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Help &amp; support</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>Contacts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link as={Link} href='#' active={false} className='p-0 fw-normal'>News</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </Col>

            {/* Recent posts */}
            <Col lg={6} xl={{span: 5, offset: 1}}>
              <h4 className='h5'>Recent Posts</h4>
              {footerPosts.map((post, indx) => (
                <div key={indx}>
                  <article className='d-flex align-items-start' style={{maxWidth: '640px'}}>
                    <Link href={post.href} className='d-none d-sm-flex flex-shrink-0 mb-sm-0 mb-3' style={{width: '100px', height: '100px'}}>
                      <ImageLoader src={post.img} width={200} height={200} className='rounded-3' alt='Thumbnail' />
                    </Link>
                    <div className='ps-sm-4'>
                      <h6 className='mb-1 fs-xs fw-normal text-uppercase text-primary'>{post.category}</h6>
                      <h5 className='mb-2 fs-base'>
                        <Link href={post.href} className='nav-link'>{post.title}</Link>
                      </h5>
                      <p className='mb-2 fs-sm'>{post.text}</p>
                      <Link href='#' className='nav-link nav-link-muted d-inline-block me-3 p-0 fs-xs fw-normal'>
                        <i className='fi-calendar mt-n1 me-1 fs-sm align-middle opacity-70'></i>
                        {post.date}
\                      </Link>
                      <Link href='#' className='nav-link nav-link-muted d-inline-block p-0 fs-xs fw-normal'>
                        <i className='fi-chat-circle mt-n1 me-1 fs-sm align-middle opacity-70'></i>
                        {`${post.comments} comments`}
                      </Link>
                    </div>
                  </article>
                  {indx < footerPosts.length - 1 && <hr className='text-dark opacity-10 my-4' />}
                </div>
              ))}
            </Col>
          </Row>

          {/* Mobile app CTA */}
          <div className='bg-dark rounded-3'>
            <Col xs={10} md={11} xxl={10} className='d-flex flex-md-row flex-column-reverse align-items-md-end align-items-center mx-auto px-0'>
              <div className='d-flex flex-shrink-0 mt-md-n5 me-md-5'>
                <ImageLoader
                  priority
                  src='/images/real-estate/illustrations/mobile.svg'
                  width={240}
                  height={237}
                  alt='Illustration' />
              </div>
              <div className='align-self-center d-flex flex-lg-row flex-column align-items-lg-center pt-md-3 pt-5 ps-xxl-4 text-md-start text-center'>
                <div className='me-md-5'>
                  <h4 className='text-light'>Download Our App</h4>
                  <p className='mb-lg-0 text-light'>Find everything you need for buying, selling &amp; renting property in our new Finder App!</p>
                </div>
                <div className='flex-shrink-0'>
                  <MarketButton href='#' market='apple' className='mx-2 ms-sm-0 me-sm-4 mb-3' />
                  <MarketButton href='#' market='google' className='mb-3' />
                </div> 
              </div>
            </Col>
          </div>

          {/* Copyright */}
          <div className='text-center fs-sm pt-4 mt-3 pb-2'>
            &copy; All rights reserved. Made by <a href='https://createx.studio/' className='d-inline-block nav-link p-0' target='_blank' rel='noreferrer'>Createx Studio</a>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default RealEstatePageLayout
