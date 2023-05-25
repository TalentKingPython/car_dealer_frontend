import { useEffect, useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import FormGroup from '../../components/FormGroup'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import ImageLoader from '../../components/ImageLoader'

const HelpCenterPage = () => {

  // Add extra class to body
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('fixed-bottom-btn')
    return () => body.classList.remove('fixed-bottom-btn')
  })

  // Offcanvas show/hide
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <RealEstatePageLayout
      pageTitle='Help Center'
      activeNav='Pages'
    >
      <Container className='mt-5 mb-md-4 pt-5'>

        {/* Breadcrumbs */}
        <Breadcrumb className='mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/real-estate'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Help center</Breadcrumb.Item>
        </Breadcrumb>
      </Container>


      {/* Page header */}
      <Container as='section' className='mb-4 pb-lg-5'>
        <h1 className='mx-auto mb-4 pb-2 text-center' style={{maxWidth: '856px'}}>Hi, how can we help?</h1>

        {/* Search form */}
        <FormGroup className='mb-4'>
          <InputGroup size='lg'>
            <Form.Control placeholder='What are you looking for?' />
          </InputGroup>
          <Button variant='primary px-sm-4 px-3' size='lg'>
            <i className='fi-search me-sm-2'></i>
            <span className='d-sm-inline d-none'>Search</span>
          </Button>
        </FormGroup>
        <div className='d-flex flex-md-row flex-column align-items-md-center'>
          <div className='pb-2 mb-2 me-2 flex-shrink-0 fw-bold'>Popular sections:</div>
          <div className='text-nowrap overflow-auto pb-2'>
            <div>
              <Button size='xs' variant='outline-secondary rounded-pill fw-normal mb-2 me-2'>Notifications</Button>
              <Button size='xs' variant='outline-secondary rounded-pill fw-normal mb-2 me-2'>Getting started</Button>
              <Button size='xs' variant='outline-secondary rounded-pill fw-normal mb-2 me-2'>Transactions</Button>
              <Button size='xs' variant='outline-secondary rounded-pill fw-normal mb-2 me-2'>Account questions</Button>
              <Button size='xs' variant='outline-secondary rounded-pill fw-normal mb-2 me-2'>Mortgage</Button>
              <Button size='xs' variant='outline-secondary rounded-pill fw-normal mb-2 me-2'>Guides</Button>
            </div>
          </div>
        </div>
      </Container>


      {/* Page content */}
      <Container as='section' className='mb-md-5 mb-4 pb-lg-5'>
        <Row>

          {/* Sidebar offcanvas */}
          <Col xs={12} lg={3} xl={2} as='aside'>
            <Offcanvas
              show={show}
              onHide={handleClose}
              responsive='lg'
            >
              <Offcanvas.Header closeButton className='shadow-sm mb-2'>
                <Offcanvas.Title as='h5'>FAQ</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav variant='tabs' defaultActiveKey='link-1' className='flex-column navbar-nav m-0 text-lg-center'>
                  <Nav.Item className='px-0'>
                    <Nav.Link className='px-3' eventKey='link-1'>
                      Renters &amp; Rentals
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='px-0'>
                    <Nav.Link className='px-3' eventKey='link-2'>
                      Property Buyers
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='px-0'>
                    <Nav.Link className='px-3' eventKey='link-3'>
                      Property Owners
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='px-0'>
                    <Nav.Link className='px-3' eventKey='link-4'>
                      Mortgages
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='px-0'>
                    <Nav.Link className='px-3' eventKey='link-5'>
                      Mobile&nbsp;App&nbsp;Questions
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>

          {/* Content */}
          <Col xs={12} lg={9} xl={{offset: 1}}>
            <h2 className='mb-md-4 mb-3 pb-md-2'>Renters &amp; Rentals</h2>
            <div className='pb-md-2'>
              <h3 className='h5'>Are the rental listings on Finder filtered for scams?</h3>
              <p>Blandit adipiscing duis sit tellus rhoncus, amet, sit vitae gravida. Tincidunt placerat ultrices eu, senectus vitae accumsan massa in. Ultricies imperdiet duis feugiat lorem. Pretium turpis faucibus sit urna nisi lorem interdum. Diam semper et ac neque ac.</p>
            </div>
            <div className='pb-md-2'>
              <h3 className='h5'>How do rental listings get on Finder?</h3>
              <p>Amet posuere imperdiet placerat volutpat elit tellus lectus. Et sit massa volutpat id condimentum velit risus quam ut. Fames ut pulvinar ut ac sed elementum sed. Bibendum interdum ut sit ullamcorper arcu. Proin pharetra proin mi ultricies diam sit. Arcu faucibus ut adipiscing odio habitasse at ut amet maecenas. Suscipit eget mi felis eu mi scelerisque. Mattis condimentum ut eget eu, aliquam id blandit urna, mattis. Amet pharetra nibh tincidunt eu. Gravida pellentesque nisl mi in lectus. Sed sed diam facilisis et. Bibendum leo sit sagittis nunc, suspendisse venenatis. Aliquam eget morbi nibh nascetur diam urna, convallis.</p>
            </div>
            <div className='pb-md-2'>
              <h3 className='h5'>How can I find out more about my rights as a tenant?</h3>
              <p>Morbi egestas quam ultrices fames dapibus proin amet, placerat cum. Feugiat nibh nulla pellentesque viverra elementum nibh tortor orci. A vitae hac id accumsan. At lacus velit donec vivamus. Auctor pharetra, ipsum aliquam lacus morbi at feugiat nullam. In eu tellus elementum varius tristique. Varius pretium vestibulum feugiat dapibus tempor amet, ultricies. At urna diam viverra sed suspendisse. In at adipiscing nisl at ultrices curabitur tempor.</p>
            </div>
            <div className='pb-md-2'>
              <h3 className='h5'>How do I report a suspicious rental listing?</h3>
              <p>Mus sed odio eu maecenas augue ut sodales. Purus, massa consequat sagittis at id ornare ullamcorper. Risus nibh vivamus semper mattis. Purus et ultrices nec tellus enim arcu diam. Sit ut lorem leo posuere enim rutrum parturient. Eget ligula massa pulvinar quisque fusce maecenas et vulputate venenatis.</p>
            </div>
            <div className='pb-md-2'>
              <h3 className='h5'>Why can&apos;t I verify my identity?</h3>
              <p>Pulvinar ante sed neque, morbi in at. Justo, a etiam nulla non nunc, integer platea massa. Vestibulum integer ac nisi dignissim nec. Ut tellus erat orci habitant. Non, nunc egestas purus nisi, enim mi sit a imperdiet. Eget viverra elementum volutpat vulputate nunc metus est sed. Quis enim, eget malesuada habitasse et et tristique lectus id. Odio eget iaculis sollicitudin fames cursus sed massa. Non faucibus vitae donec vestibulum, morbi egestas a rutrum.</p>
            </div>
            <div className='pb-md-2'>
              <h3 className='h5'>Can I use your service to pay my landlord for utilities?</h3>
              <p>Eu amet nec in ut faucibus sed fringilla. In nibh cras imperdiet at. In quam pulvinar vel tempus ultricies diam turpis. Eu, integer ac morbi a, aenean et quis amet, pellentesque. Sem volutpat dui amet metus. Laoreet pulvinar vitae convallis a augue laoreet.</p>
            </div>
            <div className='pb-md-2'>
              <h3 className='h5'>Can I pay a few months’ rent in advance?</h3>
              <p>Pellentesque massa mauris elit morbi. Id aliquam in lacus convallis eget cras mauris felis lobortis. Tempus at at venenatis pulvinar lobortis. Semper et nisl, tincidunt enim, etiam pretium lacinia. Diam tellus arcu, sagittis lorem viverra eros tristique. Tellus sem et tellus nunc dictum. Pellentesque suspendisse pellentesque augue egestas mi nunc facilisis sapien aliquam. Ac semper facilisi posuere justo, te</p>
            </div>
            <div className='pb-md-2'>
              <h3 className='h5'>How do you protect my personal information?</h3>
              <p>Donec ipsum, diam, imperdiet id sociis cursus cras donec eget. Nunc, vitae lobortis ullamcorper diam consequat risus viverra odio a. Nibh scelerisque sed in at velit sit.</p>
            </div>
            <div className='pb-md-2'>
              <h3 className='h5'>What happens to my information after my application is accepted or declined?</h3>
              <p>Pretium vitae facilisis in faucibus gravida pulvinar ridiculus cum. Enim, a vitae tortor feugiat urna, iaculis. Ullamcorper tortor sollicitudin odio tempus elementum ut blandit commodo. Condimentum arcu ac nec, dolor ante sagittis nibh in tempus. Posuere ullamcorper cursus adipiscing etiam ullamcorper orci tristique.</p>
            </div>
          </Col>
        </Row>
      </Container>


      {/* Contact us CTA */}
      <Container as='section' className='mb-5 pb-lg-5'>
        <Row className='align-items-sm-center'>
          <Col xs={12} sm={5}>
            <ImageLoader src='/images/real-estate/illustrations/support.svg' width={526} height={450} alt='Illustration' />
          </Col>
          <Col xs={12} sm={7} md={{span: 6, offset: 1}} className='text-sm-start text-center'>
            <h2 className='mb-4 pb-md-3'>Can&apos;t find what you are looking for?</h2>
            <Button as={Link} href='/real-estate/contacts' size='lg' variant='primary'>Contact us now</Button>
          </Col>
        </Row>
      </Container>


      {/* Sidebar toggle button (visible < 992px) */}
      <Button size='sm' className='w-100 rounded-0 fixed-bottom d-lg-none' onClick={handleShow}>
        <i className='fi-sidebar-left me-2'></i>
        FAQ Links
      </Button>
    </RealEstatePageLayout>
  )
}

export default HelpCenterPage
