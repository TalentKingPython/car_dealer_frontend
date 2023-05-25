import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import CloseButton from 'react-bootstrap/CloseButton'
import ScrollLink from '../ScrollLink'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const ComponentPageLayout = (props) => {

  const [show, setShow] = useState(false)

  // Functions to handle Offcanvas show / close state
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Head>
        <title>{`Finder UI Kit | ${props.pageTitle}`}</title>
      </Head>

      <Container fluid className='px-xl-4 pb-3 pb-lg-4'>
        <Row className='container-fixed-nav-start'>
          <Col xl={9}>

            {/* Navbar */}
            <Navbar as='header' bg='light' className='justify-content-end fixed-top shadow-sm px-3 px-xl-4'>
              <Navbar.Brand as={Link} href='/components/typography' className='d-lg-none'>
                <Image priority src='/images/logo/logo-dark.svg' width={116} height={32} alt='Finder' />
              </Navbar.Brand>
              <Navbar.Toggle className='d-block d-lg-none me-3 ms-auto border-0' onClick={handleShow} />
              <Nav as='ul' className='ms-auto d-none d-lg-flex'>
                <Nav.Item as='li'>
                  <Nav.Link as={Link} href='/' active={false}>
                    <i className='fi-device-desktop align-middle fs-base me-2'></i>
                    Live demo
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as='li' className='mx-2 border-end' />
                <Nav.Item as='li'>
                  <Nav.Link as={Link} href='/docs' active={false}>
                    <i className='fi-file align-middle fs-base me-2'></i>
                    Documentation
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as='li' className='mx-2 border-end' />
              </Nav>
              <Button href='https://themes.getbootstrap.com/product/finder-directory-listings-template-react/' variant='primary' className='ms-lg-3' target='_blank' rel='noreferrer'>
                <i className='fi-cart me-2 d-none d-sm-inline-block fs-lg'></i>
                Buy now
              </Button>
            </Navbar>

            {/* Side navigation (Wide screens) */}
            <aside className='fixed-nav-start bg-dark'>
              <div className='d-flex align-items-center p-4'>
                <Navbar.Brand as={Link} href='/components/typography'>
                  <Image priority src='/images/logo/logo-light.svg' width={116} height={32} alt='Finder' />
                </Navbar.Brand>
                <Badge bg='success'>UI Kit</Badge>
              </div>
              <SimpleBar className='fixed-nav-body simplebar-light pt-2 pb-4'>
                <h6 className='fs-base text-light mb-1 py-2'>Content</h6>
                <Nav as='nav' className='nav-light flex-column' activeKey={props.activeNav}>
                  <Nav.Link as={Link} href='/components/typography' className='fs-sm'>Typography</Nav.Link>
                  <Nav.Link as={Link} href='/components/icon-font' className='fs-sm'>Icon font</Nav.Link>
                  <Nav.Link as={Link} href='/components/code' className='fs-sm'>Code</Nav.Link>
                  <Nav.Link as={Link} href='/components/images' className='fs-sm'>Images &amp; figures</Nav.Link>
                  <Nav.Link as={Link} href='/components/tables' className='fs-sm'>Tables</Nav.Link>
                </Nav>
                <hr className='text-light opacity-15 mx-n4 mt-4' />
                <h6 className='fs-base text-light mx-n4 mb-1 pt-4 pb-2 px-4'>Components</h6>
                <Nav as='nav' className='nav-light flex-column' activeKey={props.activeNav}>
                  <Nav.Link as={Link} href='/components/accordion' className='fs-sm'>Accordion</Nav.Link>
                  <Nav.Link as={Link} href='/components/alerts' className='fs-sm'>Alerts</Nav.Link>
                  <Nav.Link as={Link} href='/components/badge' className='fs-sm'>Badges</Nav.Link>
                  <Nav.Link as={Link} href='/components/breadcrumb' className='fs-sm'>Breadcrumb</Nav.Link>
                  <Nav.Link as={Link} href='/components/buttons' className='fs-sm'>Buttons</Nav.Link>
                  <Nav.Link as={Link} href='/components/button-group' className='fs-sm'>Button group</Nav.Link>
                  <Nav.Link as={Link} href='/components/cards-basic' className='fs-sm'>Cards: Basic</Nav.Link>
                  <Nav.Link as={Link} href='/components/cards-advanced' className='fs-sm'>Cards: Advanced</Nav.Link>
                  <Nav.Link as={Link} href='/components/carousel' className='fs-sm'>Carousel (Slider)</Nav.Link>
                  <Nav.Link as={Link} href='/components/date-picker' className='fs-sm'>Date / time picker</Nav.Link>
                  <Nav.Link as={Link} href='/components/dropdowns' className='fs-sm'>Dropdowns</Nav.Link>
                  <Nav.Link as={Link} href='/components/file-uploader' className='fs-sm'>File uploader</Nav.Link>
                  <Nav.Link as={Link} href='/components/forms' className='fs-sm'>Forms</Nav.Link>
                  <Nav.Link as={Link} href='/components/form-group' className='fs-sm'>Form group</Nav.Link>
                  <Nav.Link as={Link} href='/components/gallery' className='fs-sm'>Gallery</Nav.Link>
                  <Nav.Link as={Link} href='/components/input-group' className='fs-sm'>Input group</Nav.Link>
                  <Nav.Link as={Link} href='/components/icon-box' className='fs-sm'>Icon box</Nav.Link>
                  <Nav.Link as={Link} href='/components/maps' className='fs-sm'>Interactive maps</Nav.Link>
                  <Nav.Link as={Link} href='/components/list-group' className='fs-sm'>List group</Nav.Link>
                  <Nav.Link as={Link} href='/components/modal' className='fs-sm'>Modal</Nav.Link>
                  <Nav.Link as={Link} href='/components/navbar' className='fs-sm'>Navbar</Nav.Link>
                  <Nav.Link as={Link} href='/components/offcanvas' className='fs-sm'>Offcanvas</Nav.Link>
                  <Nav.Link as={Link} href='/components/pagination' className='fs-sm'>Pagination</Nav.Link>
                  <Nav.Link as={Link} href='/components/parallax' className='fs-sm'>Parallax</Nav.Link>
                  <Nav.Link as={Link} href='/components/pills' className='fs-sm'>Pills</Nav.Link>
                  <Nav.Link as={Link} href='/components/placeholders' className='fs-sm'>Placeholders</Nav.Link>
                  <Nav.Link as={Link} href='/components/popovers' className='fs-sm'>Popovers</Nav.Link>
                  <Nav.Link as={Link} href='/components/pricing' className='fs-sm'>Pricing</Nav.Link>
                  <Nav.Link as={Link} href='/components/progress' className='fs-sm'>Progress</Nav.Link>
                  <Nav.Link as={Link} href='/components/social-buttons' className='fs-sm'>Social buttons</Nav.Link>
                  <Nav.Link as={Link} href='/components/spinners' className='fs-sm'>Spinners</Nav.Link>
                  <Nav.Link as={Link} href='/components/steps' className='fs-sm'>Steps</Nav.Link>
                  <Nav.Link as={Link} href='/components/tabs' className='fs-sm'>Tabs</Nav.Link>
                  <Nav.Link as={Link} href='/components/testimonials' className='fs-sm'>Testimonials / reviews</Nav.Link>
                  <Nav.Link as={Link} href='/components/toasts' className='fs-sm'>Toasts</Nav.Link>
                  <Nav.Link as={Link} href='/components/tooltips' className='fs-sm'>Tooltips</Nav.Link>
                </Nav>
                <hr className='text-light opacity-15 mx-n4 mt-4' />
                <h6 className='fs-base text-light mx-n4 mb-1 pt-4 pb-2 px-4'>Utilities</h6>
                <Nav as='nav' className='nav-light flex-column' activeKey={props.activeNav}>
                  <Nav.Link href='https://getbootstrap.com/docs/5.2/utilities/background/' className='fs-sm' target='_blank' rel='noreferrer'>Bootstrap CSS Classes</Nav.Link>
                  <Nav.Link href='https://react-bootstrap.github.io/utilities/transitions/' className='fs-sm' target='_blank' rel='noreferrer'>React Bootstrap</Nav.Link>
                  <Nav.Link as={Link} href='/components/utilities' className='fs-sm'>Finder</Nav.Link>
                </Nav>
              </SimpleBar>
            </aside>

            {/* Side navigation (Offcanvas - narrow screens) */}
            <Offcanvas placement='start' className='bg-dark' show={show} onHide={handleClose}>
              <Offcanvas.Header className='justify-content-start align-items-center'>
                <h5 className='offcanvas-title text-white me-3'>Menu</h5>
                <Badge bg='success'>UI Kit</Badge>
                <CloseButton variant='white' className='ms-auto' onClick={handleClose} />
              </Offcanvas.Header>
              <div className='d-flex d-lg-none align-items-center py-4 px-3 border-top border-bottom border-light'>
                <Button as={Link} href='/' variant='light' size='sm' className='d-block w-100 me-2'>
                  <i className='fi-device-desktop me-2 fs-base'></i>
                  Demo
                </Button>
                <Button as={Link} href='/docs' variant='info' size='sm' className='d-block w-100 me-2'>
                  <i className='fi-file me-2 fs-base'></i>
                  Documentation
                </Button>
              </div>
              <SimpleBar className='offcanvas-body simplebar-light pb-4'>
                <h6 className='fs-base text-light mb-1 py-2'>Content</h6>
                <Nav as='nav' className='nav-light flex-column' activeKey={props.activeNav}>
                  <Nav.Link as={Link} href='/components/typography' className='fs-sm'>Typography</Nav.Link>
                  <Nav.Link as={Link} href='/components/icon-font' className='fs-sm'>Icon font</Nav.Link>
                  <Nav.Link as={Link} href='/components/code' className='fs-sm'>Code</Nav.Link>
                  <Nav.Link as={Link} href='/components/images' className='fs-sm'>Images &amp; figures</Nav.Link>
                  <Nav.Link as={Link} href='/components/tables' className='fs-sm'>Tables</Nav.Link>
                </Nav>
                <hr className='text-light opacity-15 mx-n4 mt-4' />
                <h6 className='fs-base text-light mx-n4 mb-1 pt-4 pb-2 px-4'>Components</h6>
                <Nav as='nav' className='nav-light flex-column' activeKey={props.activeNav}>
                  <Nav.Link as={Link} href='/components/accordion' className='fs-sm'>Accordion</Nav.Link>
                  <Nav.Link as={Link} href='/components/alerts' className='fs-sm'>Alerts</Nav.Link>
                  <Nav.Link as={Link} href='/components/badge' className='fs-sm'>Badges</Nav.Link>
                  <Nav.Link as={Link} href='/components/breadcrumb' className='fs-sm'>Breadcrumb</Nav.Link>
                  <Nav.Link as={Link} href='/components/buttons' className='fs-sm'>Buttons</Nav.Link>
                  <Nav.Link as={Link} href='/components/button-group' className='fs-sm'>Button group</Nav.Link>
                  <Nav.Link as={Link} href='/components/cards-basic' className='fs-sm'>Cards: Basic</Nav.Link>
                  <Nav.Link as={Link} href='/components/cards-advanced' className='fs-sm'>Cards: Advanced</Nav.Link>
                  <Nav.Link as={Link} href='/components/carousel' className='fs-sm'>Carousel</Nav.Link>
                  <Nav.Link as={Link} href='/components/date-picker' className='fs-sm'>Date / time picker</Nav.Link>
                  <Nav.Link as={Link} href='/components/dropdowns' className='fs-sm'>Dropdowns</Nav.Link>
                  <Nav.Link as={Link} href='/components/file-uploader' className='fs-sm'>File uploader</Nav.Link>
                  <Nav.Link as={Link} href='/components/forms' className='fs-sm'>Forms</Nav.Link>
                  <Nav.Link as={Link} href='/components/form-group' className='fs-sm'>Form group</Nav.Link>
                  <Nav.Link as={Link} href='/components/gallery' className='fs-sm'>Gallery</Nav.Link>
                  <Nav.Link as={Link} href='/components/input-group' className='fs-sm'>Input group</Nav.Link>
                  <Nav.Link as={Link} href='/components/icon-box' className='fs-sm'>Icon box</Nav.Link>
                  <Nav.Link as={Link} href='/components/maps' className='fs-sm'>Interactive maps</Nav.Link>
                  <Nav.Link as={Link} href='/components/list-group' className='fs-sm'>List group</Nav.Link>
                  <Nav.Link as={Link} href='/components/modal' className='fs-sm'>Modal</Nav.Link>
                  <Nav.Link as={Link} href='/components/navbar' className='fs-sm'>Navbar</Nav.Link>
                  <Nav.Link as={Link} href='/components/offcanvas' className='fs-sm'>Offcanvas</Nav.Link>
                  <Nav.Link as={Link} href='/components/pagination' className='fs-sm'>Pagination</Nav.Link>
                  <Nav.Link as={Link} href='/components/parallax' className='fs-sm'>Parallax</Nav.Link>
                  <Nav.Link as={Link} href='/components/pills' className='fs-sm'>Pills</Nav.Link>
                  <Nav.Link as={Link} href='/components/placeholders' className='fs-sm'>Placeholders</Nav.Link>
                  <Nav.Link as={Link} href='/components/popovers' className='fs-sm'>Popovers</Nav.Link>
                  <Nav.Link as={Link} href='/components/pricing' className='fs-sm'>Pricing</Nav.Link>
                  <Nav.Link as={Link} href='/components/progress' className='fs-sm'>Progress</Nav.Link>
                  <Nav.Link as={Link} href='/components/social-buttons' className='fs-sm'>Social buttons</Nav.Link>
                  <Nav.Link as={Link} href='/components/spinners' className='fs-sm'>Spinners</Nav.Link>
                  <Nav.Link as={Link} href='/components/steps' className='fs-sm'>Steps</Nav.Link>
                  <Nav.Link as={Link} href='/components/tabs' className='fs-sm'>Tabs</Nav.Link>
                  <Nav.Link as={Link} href='/components/testimonials' className='fs-sm'>Testimonials / reviews</Nav.Link>
                  <Nav.Link as={Link} href='/components/toasts' className='fs-sm'>Toasts</Nav.Link>
                  <Nav.Link as={Link} href='/components/tooltips' className='fs-sm'>Tooltips</Nav.Link>
                </Nav>
                <hr className='text-light opacity-15 mx-n4 mt-4' />
                <h6 className='fs-base text-light mx-n4 mb-1 pt-4 pb-2 px-4'>Utilities</h6>
                <Nav as='nav' className='nav-light flex-column' activeKey={props.activeNav}>
                  <Nav.Link href='https://getbootstrap.com/docs/5.2/utilities/background/' className='fs-sm' target='_blank' rel='noreferrer'>Bootstrap CSS Classes</Nav.Link>
                  <Nav.Link href='https://react-bootstrap.github.io/utilities/transitions/' className='fs-sm' target='_blank' rel='noreferrer'>React Bootstrap</Nav.Link>
                  <Nav.Link as={Link} href='/components/utilities' className='fs-sm'>Finder</Nav.Link>
                </Nav>
              </SimpleBar>
            </Offcanvas>

            {/* Page title + description */}
            <div className='border-bottom mb-5 pt-5'>
              <h1 className='mt-5 pt-4'>{props.pageTitle}</h1>
              <div className='d-flex flex-wrap flex-md-nowrap justify-content-between'>
                <p className='text-muted'>{props.pageDescription}</p>
                {props.docsLink ? 
                  <p className='pt-1 fs-sm fw-bold ps-md-4'>
                    <a href={props.docsLink} className='text-decoration-none text-nowrap' target='_blank' rel='noreferrer'>
                      {props.docsLinkLabel}
                      <i className='fi-external-link align-middle ms-2 mt-n1'></i>
                    </a>
                  </p> :
                  <div className='ps-md-4 mb-3'>
                    <Badge bg='success'>Finder component</Badge>
                  </div>
                }
              </div>
            </div>

            {/* Page content */}
            {props.children}
          </Col>

          {/* Quick (anchor) navigation */}
          {props.anchorLinks && <Col xl={3} className='d-none d-xl-block ps-4 ps-xxl-5'>
            <aside className='sticky-top pt-5'>
              <div className='pt-5 mt-5'>
                <div className='ps-4 border-start'>
                  <h3 className='h6'>Jump to</h3>
                  {props.anchorLinks.map((link, index) => <ScrollLink to={link.anchor} spy={true} smooth='easeInOutQuart' duration={600} offset={-110} className='nav-link scroll-link py-1 px-0 fs-sm fw-normal' key={index}>{link.label}</ScrollLink>)}
                </div>
              </div>
            </aside>
          </Col>}
        </Row>
      </Container>
    </>
  )
}

export default ComponentPageLayout
