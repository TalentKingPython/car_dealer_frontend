import { useState } from 'react'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ScrollLink from '../../components/ScrollLink'

const MapContainer = dynamic(() =>
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() =>
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const Popup = dynamic(() =>
  import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)
const CustomMarker = dynamic(() =>
  import('../../components/partials/CustomMarker'),
  { ssr: false }
)
import 'leaflet/dist/leaflet.css'


const ContactsPage = () => {

  // Form validation
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true);
  }

  return (
    <CarFinderPageLayout
      pageTitle='Contact Us'
      activeNav='Pages'
    >
      <Container as='section' className='my-5 pt-5 pb-lg-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='breadcrumb-light mb-4 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/car-finder'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
        </Breadcrumb>

        <Row className='gy-4'>
          <Col xs={12} md={6} lg={4}>
            <div className='mb-md-5 mb-4 pb-md-4'>
              <h1 className='mb-md-4 text-light'>Contact us</h1>
              <p className='mb-0 fs-lg text-light opacity-70'>Fill out the form and out team will try to get back to you within 24 hours.</p>
            </div>
            <div className='d-flex align-items-start mb-4 pb-md-3'>
              <div className='me-3 flex-shrink-0'>
                <Image src='/images/car-finder/icons/envelope.svg' width={32} height={32} alt='Icon' />
              </div>
              <div>
                <h3 className='h6 mb-2 pb-1 text-light'>General communication</h3>
                <p className='mb-0 text-light'>
                  <span className='opacity-70'>For general queries, including partnership opportunities, please email</span>
                  <a className='ms-1 text-nowrap' href='mailto:example@email.com'>example@email.com</a>
                </p>
              </div>
            </div>
            <div className='d-flex align-items-start mb-4 pb-md-3'>
              <div className='me-3 flex-shrink-0'>
                <Image src='/images/car-finder/icons/chat.svg' width={32} height={32} alt='Icon' />
              </div>
              <div>
                <h3 className='h6 mb-2 pb-1 text-light'>General communication</h3>
                <p className='mb-0 text-light'>
                  <span className='opacity-70'>We&apos;re here to help! If you have technical issues</span>
                  <Link href='/car-finder/help-center' className='ms-1 text-nowrap'>contact support</Link>
                </p>
              </div>
            </div>
            <div className='d-flex align-items-start mb-4 pb-md-3'>
              <div className='me-3 flex-shrink-0'>
                <Image src='/images/car-finder/icons/map-pin.svg' width={32} height={32} alt='Icon' />
              </div>
              <div>
                <h3 className='h6 mb-2 pb-1 text-light'>Our headquarters</h3>
                <p className='mb-0 text-light'>
                  <span className='opacity-70'>8502 Preston Rd. Inglewood, Maine 98380</span>
                  <ScrollLink to='map-location' smooth='easeInOutQuart' duration={600} offset={-110} className='cursor-pointer ms-1 text-nowrap'>
                    get directions
                  </ScrollLink>
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={{offset: 2}}>

            {/* Contact form */}
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className=''
            >
              <Form.Group controlId='c-name' className='mb-4'>
                <Form.Label className='text-light'>Full Name</Form.Label>
                <Form.Control size='lg' className='form-control-light' required />
                <Form.Control.Feedback type='invalid'>
                  Please enter your name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='c-email' className='mb-4'>
                <Form.Label className='text-light'>Your Email</Form.Label>
                <Form.Control size='lg' type='email' className='form-control-light' required />
                <Form.Control.Feedback type='invalid'>
                  Please enter your email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='c-subject' className='mb-4'>
                <Form.Label className='text-light'>Subject</Form.Label>
                <Form.Select size='lg' className='form-select-light' required>
                  <option value=''>Choose subject</option>
                  <option value='Subject 1'>Subject 1</option>
                  <option value='Subject 2'>Subject 2</option>
                  <option value='Subject 3'>Subject 3</option>
                </Form.Select>
                <Form.Control.Feedback type='invalid'>
                  Please, choose subject
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='c-message' className='mb-4'>
                <Form.Label className='text-light'>Message</Form.Label>
                <Form.Control size='lg' as='textarea' rows='4' className='form-control-light' placeholder='Leave your message' required />
                <Form.Control.Feedback type='invalid'>
                  Please, leave your message
                </Form.Control.Feedback>
              </Form.Group>
              <div className='pt-2'>
                <Button type='submit' size='lg' variant='primary' className='w-sm-auto w-100'>Submit form</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>


      {/* Map */}
      <Container as='section' className='mb-5 pb-lg-5' id='map-location'>
        <MapContainer
          center={[51.5074, -0.1278]}
          zoom={10}
          scrollWheelZoom={false}
          className='rounded-3'
          style={{height: '500px'}}
        >
          <TileLayer
            url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=5vRQzd34MMsINEyeKPIs'
            tileSize={512}
            zoomOffset={-1}
            minZoom={1}
            attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
          />
          <CustomMarker position={[51.5074, -0.1278]} icon='pin'>
            <Popup>
              <div className='p-3'>
                <h6 className='fs-base'>Hi, I&apos;m in London</h6>
                <p className='fs-xs text-muted pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p>
              </div>
            </Popup>
          </CustomMarker>
        </MapContainer>
      </Container>
    </CarFinderPageLayout>
  )
}

export default ContactsPage
