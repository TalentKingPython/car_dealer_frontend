import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'
import IconBox from '../../components/IconBox'

const MapContainer = dynamic(() => 
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() => 
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const CustomMarker = dynamic(() => 
  import('../../components/partials/CustomMarker'),
  { ssr: false }
)
const Popup = dynamic(() => 
  import('react-leaflet').then(mod => mod.Popup),
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
    <CityGuidePageLayout
      pageTitle='Contacts'
      activeNav='Pages'
    >

      {/* Page container */}
      <Container className='my-5 py-lg-5 py-4'>

        {/* Breadcrumb */}
        <Breadcrumb className='pt-3 mb-4'>
          <Breadcrumb.Item linkAs={Link} href='/city-guide'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
        </Breadcrumb>


        {/* Contact form */}
        <Row as='section' className='gy-4 pb-5 mb-2 mb-lg-4'>
          <Col md={6}>
            <ImageLoader
              src='/images/city-guide/contacts/01.jpg'
              width={743}
              height={713}
              alt='Cover image'
              className='rounded-3'
            />
          </Col>
          <Col md={6} xl={{span: 5, offset: 1}}>
            <h1 className='mb-md-4 mb-3'>Contact us</h1>
            <p className='mb-4 pb-md-2 fs-lg'>Fill out the form and out team will try to get back to you within 24 hours.</p>
            <Row
              as={Form}
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              sm={2}
              xs={1}
              className='gy-sm-4 gy-3'
            >
              <Col as={Form.Group} controlId='c-name'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control size='lg' required/>
                <Form.Control.Feedback type='invalid'>
                  Please enter your name.
                </Form.Control.Feedback>
              </Col>
              <Col as={Form.Group} controlId='c-email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' size='lg' required/>
                <Form.Control.Feedback type='invalid'>
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Col>
              <Col as={Form.Group} controlId='c-phone'>
                <Form.Label>Phone</Form.Label>
                <Form.Control type='tel' size='lg'/>
              </Col>
              <Col as={Form.Group} controlId='c-subject'>
                <Form.Label>Subject</Form.Label>
                <Form.Select size='lg' required>
                  <option value=''>Choose subject</option>
                  <option value='Subject 1'>Subject 1</option>
                  <option value='Subject 2'>Subject 2</option>
                  <option value='Subject 3'>Subject 3</option>
                </Form.Select>
                <Form.Control.Feedback type='invalid'>
                  Please choose the subject.
                </Form.Control.Feedback>
              </Col>
              <Col as={Form.Group} xs={12} controlId='c-message' className='w-100'>
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows='4' required />
                <Form.Control.Feedback type='invalid'>
                  Please enter your message.
                </Form.Control.Feedback>
              </Col>
              <Col xs={12} className='w-100'>
                <Button type='submit' size='lg' variant='primary w-sm-auto w-100 mt-2'>Submit form</Button>
              </Col>
            </Row>
          </Col>
        </Row>


        {/* Contact cards */}
        <Row as='section' xs={1} md={3} className='g-4 pt-md-2 pb-5 mb-2 mb-lg-4'>
          <Col>
            <IconBox
              type='card-shadow'
              href='mailto:example@email.com'
              media='fi-mail'
              mediaShape='circle'
              mediaColor='accent'
              align='center'
              text={<>
                <span className='d-block fs-base mb-1 text-body'>Drop us a line</span>
                <span className='h4 icon-box-title mb-0 opacity-90'>example@email.com</span>
              </>}
            />
          </Col>
          <Col>
            <IconBox
              type='card-shadow'
              href='tel:4065550120'
              media='fi-device-mobile'
              mediaShape='circle'
              mediaColor='success'
              align='center'
              text={<>
                <span className='d-block fs-base mb-1 text-body'>Call us any time</span>
                <span className='h4 icon-box-title mb-0 opacity-90'>(406) 555-0120</span>
              </>}
            />
          </Col>
          <Col>
            <IconBox
              type='card-shadow'
              href='#'
              media='fi-instagram'
              mediaShape='circle'
              mediaColor='warning'
              align='center'
              text={<>
                <span className='d-block fs-base mb-1 text-body'>Follow us</span>
                <span className='h4 icon-box-title mb-0 opacity-90'>@finder_directory</span>
              </>}
            />
          </Col>
        </Row>


        {/* Map */}
        <div className="pt-md-2 pt-lg-3">
          <MapContainer
            center={[51.5074, -0.1278]}
            zoom={10}
            scrollWheelZoom={false}
            className='rounded-3'
            style={{height: '500px'}}
          >
            <TileLayer
              url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx'
              tileSize={512}
              zoomOffset={-1}
              minZoom={1}
              attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
            />
            <CustomMarker position={[51.5074, -0.1278]}>
              <Popup>
                <div className='p-3'>
                  <h6>Hi, we are in London</h6>
                  <p className='fs-sm pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p>
                </div>
              </Popup>
            </CustomMarker>
          </MapContainer>
        </div>
      </Container>
    </CityGuidePageLayout>
  )
}

export default ContactsPage
