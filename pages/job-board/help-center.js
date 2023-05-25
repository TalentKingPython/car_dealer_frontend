import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormGroup from '../../components/FormGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ImageLoader from '../../components/ImageLoader'

const HelpCenterPage = () => (

  <JobBoardPageLayout
    pageTitle='Help Center'
    activeNav='Pages'
  >

    {/* Hero */}
    <section className='bg-dark py-5'>
      <Container className='pt-5 pb-5'>

        {/* Breadcrumbs */}
        <Breadcrumb className='breadcrumb-light mb-4 pb-lg-3'>
          <Breadcrumb.Item linkAs={Link} href='/job-board'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Help Center</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page title */}
        <div className='mb-lg-5 mx-auto text-center' style={{maxWidth: '856px'}}>
          <h1 className='mb-2 pb-1 text-light'>Need help?</h1>
          <p className='mb-5 fs-3 text-light'>All answers are already here</p>

          {/* Search form */}
          <FormGroup
            light
            className='rounded-pill'
          >
            <InputGroup size='lg'>
              <Form.Control placeholder='What are you looking for?' />
            </InputGroup>
            <Button variant='primary rounded-pill' size='lg' className='px-sm-4 px-3'>
              <i className='fi-search me-sm-2'></i>
              <span className='d-sm-inline d-none'>Search</span>
            </Button>
          </FormGroup>
        </div>
      </Container>
    </section>


    {/* Help by categories */}
    <section className='position-relative bg-white rounded-xxl-4 mb-5 pt-md-3 pb-lg-5 zindex-5' style={{marginTop: '-30px'}}>
      <Container className='pt-5'>
        <h2 className='mb-4 pb-2 text-center'>Help by category</h2>
        <Row xs={1} md={3} className='g-4'>
          <Col>
            <Card border='0' className='shadow-sm card-hover position-relative h-100'>
              <Card.Body className='pb-1'>
                <div
                  className='icon-box-media d-flex align-items-center justify-content-center bg-secondary text-body rounded-circle mb-3'
                  style={{width: '4rem', height: '4rem'}}
                >
                  <i className='fi-user fs-3'></i>
                </div>
                <h3 className='h4 pb-1'>For job seekers</h3>
                <p className='mb-0'>Make the most of our website: a list of the most frequently asked questions will help you find a job faster!</p>
              </Card.Body>
              <Card.Footer className='pt-0 border-0'>
                <Link href='/job-board/help-center-single' className='nav-link my-1 px-0 stretched-link'>
                  Find question
                  <i className='fi-chevron-right ms-2 mt-n1 align-middle fs-xs'></i>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card border='0' className='shadow-sm card-hover position-relative h-100'>
              <Card.Body className='pb-1'>
                <div
                  className='icon-box-media d-flex align-items-center justify-content-center bg-secondary text-body rounded-circle mb-3'
                  style={{width: '4rem', height: '4rem'}}
                >
                  <i className='fi-briefcase fs-3'></i>
                </div>
                <h3 className='h4 pb-1'>For employers</h3>
                <p className='mb-0'>Make the most of our website: a list of the most frequently asked questions will help you a candidate for your openning faster!</p>
              </Card.Body>
              <Card.Footer className='pt-0 border-0'>
                <Link href='/job-board/help-center-single' className='nav-link my-1 px-0 stretched-link'>
                  Find question
                  <i className='fi-chevron-right ms-2 mt-n1 align-middle fs-xs'></i>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card border='0' className='shadow-sm card-hover position-relative h-100'>
              <Card.Body className='pb-1'>
                <div
                  className='icon-box-media d-flex align-items-center justify-content-center bg-secondary text-body rounded-circle mb-3'
                  style={{width: '4rem', height: '4rem'}}
                >
                  <i className='fi-help fs-3'></i>
                </div>
                <h3 className='h4 pb-1'>Couldn&apos;t find an answer?</h3>
                <p className='mb-0'>If you haven&apos;t found the answer to your question, we will be happy to help you. Send your request to our support team.</p>
              </Card.Body>
              <Card.Footer className='pt-0 border-0'>
                <Button as={Link} href='/job-board/help-center-single' variant='link' className='px-0 stretched-link'>
                  Find question
                  <i className='fi-chevron-right ms-2 mt-n1 align-middle fs-xs'></i>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>


    {/* Contact Us CTA */}
    <Container as='section' className='mb-5 pb-lg-5'>
      <Row className='g-0 justify-content-center py-md-4 py-5 bg-secondary rounded-3'>
        <Col sm={10} xs={11} className='d-flex flex-md-row flex-column align-items-center justify-content-between'>
          <div className='order-md-1 order-2 text-md-start text-center' style={{maxWidth: '524px'}}>
            <h2 className='mb-4 pb-md-3'>You can contact us and ask your questions directly</h2>
            <Button as={Link} href='/job-board/contacts' size='lg' variant='primary rounded-pill' className='w-sm-auto w-100'>
              Contact us
            </Button>
          </div>
          <div className='order-md-2 order-1 ms-md-4'>
            <ImageLoader src='/images/job-board/illustrations/mail.svg' width={340} height={320} alt='Illustration' />
          </div>
        </Col>
      </Row>
    </Container>
  </JobBoardPageLayout>
)

export default HelpCenterPage
