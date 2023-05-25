import Link from 'next/link'
import ImageLoader from '../components/ImageLoader'
import StickyNavbar from '../components/StickyNavbar'
import Subscription from '../components/Subscription'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

const IndexPage = () => {

  // List of Finder features
  const features = [
    {
      img: ['/images/intro/features/react.png', 'React logo'],
      title: 'Powered by React / Next.js',
      text: 'Finder is powered by React and Next.js framework. It supports hybrid static & server-side rendering, route pre-fetching, image optimization and more.'
    },
    {
      img: ['/images/intro/features/bootstrap.png', 'Bootstrap logo'],
      title: 'Built with Bootstrap 5',
      text: 'Finder is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first component library.'
    },
    {
      img: ['/images/intro/features/sass.png', 'Sass logo'],
      title: 'Easy to customize with Sass',
      text: 'Finder is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.'
    },
    {
      img: ['/images/intro/features/components.png', 'Components icon'],
      title: '50+ flexible components',
      text: 'Besides styling all default Bootstrap 5 components Finder introduces lots of new flexible, customizable and reusable elements you can use across the website.'
    },
    {
      img: ['/images/intro/features/nodejs.png', 'Node.js logo'],
      title: 'Kick-start your development',
      text: 'Start your development process fast and easy with Node.js Create Next App setup. Configuration files are included in download package. Full tasks automation.'
    },
    {
      img: ['/images/intro/features/mobile.png', 'Mobile icon'],
      title: 'Mobile friendly interface',
      text: 'It\'s not a surprise that nowadays over 60% of users surf the inernet using their mobile devices. Finder is 100% responsive and optimized for small touch screens.'
    },
    {
      img: ['/images/intro/features/vector.png', 'Vector icon'],
      title: 'Vector based HD ready icons',
      text: 'Finder is equiped with font-based icon pack to ensure that infographics and interface icons look sharp on any device with any screen resolution and pixel density.'
    },
    {
      img: ['/images/intro/features/google-fonts.png', 'Google Fonts logo'],
      title: 'Google fonts',
      text: 'Finder uses Google font (Noto Sans) which is free, fast to load and of very high quality. Currently Google fonts library includes 1000+ font families to choose from.'
    },
    {
      img: ['/images/intro/features/docs.png', 'Docs icon'],
      title: 'Detailed documentation',
      text: 'Download package includes offline and links to online documentation. It covers all important information about how to get started, customize template and components usage.'
    }
  ]

  return (

    // Page wrapper for sticky footer
    // Wraps everything except footer to push footer to the bottom of the page if there is little content
    <main className='page-wrapper'>


      {/* Navbar (main site header with branding and navigation) */}
      <Navbar as={StickyNavbar} expand='md' className='fixed-top'>
        <Container>
          <Navbar.Brand as={Link} href='/' className='me-2 me-xl-4'>
            <ImageLoader priority src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' placeholder={false} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarNav' className='ms-auto' />
          <Button href='https://themes.getbootstrap.com/product/finder-directory-listings-template-react/' size='sm' className='rounded-pill order-md-3 ms-2' target='_blank' rel='noreferrer'>
            <i className='fi-cart fs-base me-2'></i>
            Buy Finder
          </Button>
          <Navbar.Collapse id='navbarNav' className='order-md-2'>
            <Nav navbarScroll style={{maxHeight: '35rem'}}>
              <Nav.Item as={Dropdown}>
                <Dropdown.Toggle as={Nav.Link}>Demos</Dropdown.Toggle>
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
                </Dropdown.Menu>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href='/components/typography'>UI Kit (Components)</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href='/docs'>Documentation</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* Hero (demos) */}
      <section className='position-relative overflow-hidden py-5 mb-5'>
        <div className='d-none d-xl-block position-absolute top-0 start-0 h-100 bg-secondary' style={{width: '67%', borderBottomRightRadius: '.75rem'}}></div>
        <div className='d-xl-none position-absolute top-0 start-0 w-100 h-100 bg-secondary'></div>
        <Container className='content-overlay mt-4 mb-2 mt-lg-5 mb-lg-4 pt-5 pb-md-2'>
          <h1 className='display-4 text-center text-md-start'>Find your ideal</h1>
          <Row>
            <Col md={2} className='d-none d-md-block pt-4 mt-4'>
              <ImageLoader priority src='/images/intro/swirly-arrow.svg' width={120} height={120} alt='Arrow' />
            </Col>
            <Col md={10} className='d-md-flex mt-md-n4'>

              {/* Real Estate */}
              <div className='d-block hover-img-scale position-relative zindex-5 mt-md-5 mx-auto me-md-n5 mb-4 mb-md-0' style={{maxWidth: '633px'}}>
                <div className='pt-md-5 mt-4 me-md-n5'>
                  <h2 className='h4 mb-2 pb-1 ms-md-3'>
                    <Link href='/real-estate' className='nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start'>
                      <i className='fi-building text-primary me-2 pe-1'></i>
                      <span>Property</span>
                    </Link>
                  </h2>
                  <div className='position-relative zindex-0'>
                    <div className='position-relative d-flex zindex-5'>
                      <ImageLoader src='/images/intro/demos/real-estate.png' width={1266} height={788} alt='Real Estate Demo' />
                    </div>
                    <div className='d-none d-md-block position-absolute zindex-1' style={{top: '15px', left: '20px', width: 'calc(100% - 40px)', height: 'calc(100% - 50px)', boxShadow: '33px 26px 85px rgba(0, 0, 0, .14)'}}></div>
                  </div>
                </div>
              </div>

              {/* Job Board */}
              <div className='d-block hover-img-scale position-relative mt-md-n5 mx-auto me-md-n3' style={{maxWidth: '550px'}}>
                <h2 className='h4 ms-md-3'>
                  <Link href='/job-board' className='nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start'>
                    <i className='fi-briefcase text-primary me-2 pe-1'></i>
                    <span>Job</span>
                  </Link>
                </h2>
                <ImageLoader src='/images/intro/demos/job-board.png' width={1100} height={754} alt='Job Board Demo' />
              </div>
            </Col>
            <Col md={12} className='d-md-flex pt-2 pt-md-0 mt-md-n5'>

              {/* City Guide */}
              <div className='d-block hover-img-scale position-relative my-4 mt-md-5 mb-md-0 mx-auto ms-md-0 me-md-3' style={{maxWidth: '550px'}}>
                <h2 className='h4 ms-md-3'>
                  <Link href='/city-guide' className='nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start'>
                    <i className='fi-map-pin text-primary me-2 pe-1'></i>
                    <span>City place</span>
                  </Link>
                </h2>
                <ImageLoader src='/images/intro/demos/city-guide.png' width={1100} height={648} alt='City Guide Demo' />
              </div>

              {/* Car Finder */}
              <div className='d-block hover-img-scale position-relative mt-md-n5 mx-auto me-md-n3' style={{maxWidth: '636px'}}>
                <div className='d-flex flex-column'>
                  <h2 className='h4 order-md-2 mb-4 mb-md-0 mt-md-4'>
                    <Link href='/car-finder' className='nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start'>
                      <i className='fi-car text-primary me-2 pe-1'></i>
                      <span>Car</span>
                    </Link>
                  </h2>
                  <div className='d-flex order-md-1 mt-md-n2'>
                    <ImageLoader src='/images/intro/demos/car-finder.png' width={1272} height={764} alt='Car Finder Demo' />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Features */}
      <Container as='section' className='pt-md-4 pt-xl-5 pb-lg-3 pb-xl-5'>
        <Row className='mb-5'>
          <Col lg={3}>
            <h2 className='py-2 pb-md-3 pb-lg-4'>Finder feature highlights</h2>
            <div className='d-none d-lg-block'>
              <ImageLoader priority src='/images/intro/turn-right-arrow.svg' width={80} height={80} alt='Arrow' />
            </div>
          </Col>
          <Col lg={9}>
            <Row xs={1} sm={2} md={3} className='gy-1 gy-md-3 gx-3 gx-lg-4'>
              {features.map((feature, indx) => (
                <Col key={indx}>
                  <div className='card card-body card-hover bg-transparent h-100 border-0'>
                    <div className='d-flex mb-3' style={{width: '56px'}}>
                      <ImageLoader src={feature.img[0]} width={112} height={112} alt={feature.img[1]} />
                    </div>
                    <h3 className='h6'>{feature.title}</h3>
                    <p className='fs-sm mb-0'>{feature.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>


      {/* CTA */}
      <Container as='section' className='position-relative zindex-1'>
        <div className='bg-secondary rounded-3 px-3 py-5'>
          <div className='text-center py-sm-3 py-md-5'>
            <h3 className='h5 fw-normal'>Still not convinced?</h3>
            <h2 className='pb-4'>Add premium support and lifetime updates to this!</h2>
            <Button href='https://themes.getbootstrap.com/product/finder-directory-listings-template-react/' variant='primary rounded-pill' size='lg' target='_blank' rel='noreferrer'>
              <i className='fi-cart fs-lg me-2'></i>
              Buy Finder
            </Button>
          </div>
        </div>
      </Container>


      {/* Footer */}
      <footer className='position-relative pb-5' style={{marginTop: '-5.75rem', paddingTop: '9rem'}}>
        <div className='d-none d-xxl-block position-absolute top-0 start-0 w-100 h-100 bg-dark' style={{borderTopLeftRadius: '1.875rem', borderTopRightRadius: '1.875rem'}}></div>
        <div className='d-xxl-none position-absolute top-0 start-0 w-100 h-100 bg-dark'></div>
        <Container className='content-overlay text-center py-md-3 py-lg-5'>
          <h2 className='h3 text-light pb-3'>Subscribe to our newsletter</h2>
          <Row className='justify-content-center mb-5 pb-lg-3'>
            <Col lg={6} md={7} sm={9}>
              <Subscription
                action='https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126'
                antispam='b_c7103e2c981361a6639545bd5_29ca29612'
                placeholder='Your email'
                btnLabel='Subscribe*'
                helperText='*Subscribe to our newsletter to receive early discount offers, updates and new products info.'
                pill
                light
              />
            </Col>
          </Row>
          <p className='fs-sm mb-0'>
            <span className='text-light'>&copy; All rights reserved. Made by </span>
            <a href='https://createx.studio/' target='_blank' rel='noreferrer'>Createx Studio</a>
          </p>
        </Container>
      </footer>
    </main>
  )
}

export default IndexPage
