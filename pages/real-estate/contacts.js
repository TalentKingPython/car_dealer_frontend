import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'
import Card from 'react-bootstrap/Card'

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
    <RealEstatePageLayout
      pageTitle='Contacts'
      activeNav='Pages'
    >
      {/* Breadcrumbs */}
      <Container className='mt-5 mb-md-4 pt-5'>
        <Breadcrumb className='mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/real-estate'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
      </Container>


      {/* Hero */}
      <Container as='section' className='mb-5 pb-2 pb-md-4 pb-lg-5'>
        <Row className='gy-4 align-items-md-start align-items-center'>
          <Col xs={12} md={6} lg={5}>
            <div className='mx-md-0 mx-auto mb-md-5 mb-4 pb-md-4 text-md-start text-center' style={{maxWidth: '416px'}}>
              <h1 className='mb-4'>Get in touch!</h1>
              <p className='mb-0 fs-lg text-muted'>Fill out the form and out team will try to get back to you within 24 hours.</p>
            </div>
            <div className='text-center'>
              <ImageLoader src='/images/real-estate/illustrations/contact.svg' width={526} height={326} alt='Illustration' className='d-inline-block' />
            </div>
          </Col>
          <Col xs={12} md={6} lg={{offset: 1}}>

            {/* Contact form */}
            <Card className='border-0 bg-secondary p-sm-3 p-2'>
              <Card.Body className='m-1'>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <Form.Group controlId='c-name' className='mb-4'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control size='lg' required />
                    <Form.Control.Feedback type='invalid'>
                      Please enter your name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId='c-email' className='mb-4'>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control size='lg' type='email' required />
                    <Form.Control.Feedback type='invalid'>
                      Please enter your email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId='c-message' className='mb-4'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control size='lg' as='textarea' rows='4' placeholder='Leave your message' required />
                    <Form.Control.Feedback type='invalid'>
                      Please, leave your message
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className='pt-2'>
                    <Button type='submit' size='lg' variant='primary' className='w-sm-auto w-100'>Submit form</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      {/* Contact cards */}
      <Container as='section' className='mb-5 pb-2 pb-md-4 pb-lg-5'>
        <Row xs={1} md={3} className='g-4'>
          <Col>
            <Card as='a' href='mailto:example@email.com' className='icon-box card-hover h-100'>
              <Card.Body>
                <div className='icon-box-media text-primary rounded-circle shadow-sm mb-3'>
                  <i className='fi-mail'></i>
                </div>
                <span className='d-block mb-1 text-body'>Drop us a line</span>
                <h3 className='h4 icon-box-title mb-0 opacity-90'>example@email.com</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card as='a' href='tel:4065550120' className='icon-box card-hover h-100'>
              <Card.Body>
                <div className='icon-box-media text-primary rounded-circle shadow-sm mb-3'>
                  <i className='fi-device-mobile'></i>
                </div>
                <span className='d-block mb-1 text-body'>Call us any time</span>
                <h3 className='h4 icon-box-title mb-0 opacity-90'>(406) 555-0120</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card as='a' href='#' className='icon-box card-hover h-100'>
              <Card.Body>
                <div className='icon-box-media text-primary rounded-circle shadow-sm mb-3'>
                  <i className='fi-instagram'></i>
                </div>
                <span className='d-block mb-1 text-body'>Follow us</span>
                <h3 className='h4 icon-box-title mb-0 opacity-90'>@finder_directory</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </RealEstatePageLayout>
  )
}

export default ContactsPage
