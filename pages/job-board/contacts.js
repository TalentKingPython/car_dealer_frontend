import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SocialButton from '../../components/SocialButton'

const ContactPage = () => {
  return (
    <JobBoardPageLayout
      pageTitle='Contact Us'
      activeNav='Pages'
    >

      {/* Page content */}
      <section className='py-5'>
        <Container className='pt-5 pb-2 pb-lg-5'>

          {/* Breadcrumbs */}
          <Breadcrumb className='py-md-3 py-1'>
            <Breadcrumb.Item linkAs={Link} href='/job-board'>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
          </Breadcrumb>

          <Row className='gy-5'>
            <Col md={5} lg={4}>
              <Card className='border-0 bg-secondary p-md-3 p-1'>
                <Card.Body>
                  <h1 className='mb-4'>Contacts</h1>
                  <div>
                    <a href='mailto:example@email.com' className='nav-link fw-normal d-flex align-items-start mt-3 p-0'>
                      <i className='fi-mail mt-1 me-2 pe-1 text-primary'></i>
                      example@email.com
                    </a>
                    <a href='tel:4065550120' className='nav-link fw-normal d-flex align-items-start mt-3 p-0'>
                      <i className='fi-device-mobile mt-1 me-2 pe-1 text-primary'></i>
                      (406) 555-0120
                    </a>
                    <a className='nav-link fw-normal d-flex align-items-start mt-3 p-0'>
                      <i className='fi-map-pin mt-1 me-2 pe-1 text-primary'></i>
                      4140 Parker Rd. Allentown, <br /> New Mexico 31134
                    </a>
                    <span className='nav-link pe-none fw-normal d-flex align-items-start mt-3 p-0'>
                      <i className='fi-clock mt-1 me-2 pe-1 text-primary'></i>
                      Mon &ndash; Fri: 10:00 am &ndash; 20:00 pm
                    </span>
                  </div>
                  <div className='mt-md-5 mt-4'>
                    <h3 className='h6 mb-3'>Follow us:</h3>
                    <div className='mt-n2 ms-n2'>
                      <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='mt-2 ms-2' />
                      <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='mt-2 ms-2' />
                      <SocialButton href='#' variant='solid' brand='instagram' roundedCircle className='mt-2 ms-2' />
                      <SocialButton href='#' variant='solid' brand='youtube' roundedCircle className='mt-2 ms-2' />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={7} lg={{offset: 1}}>
              <h2 className='h4 mb-4 pb-md-2'>Perhaps you can find an answer to your question here:</h2>
              <div className='fs-sm'>
                <div className='mt-md-4 mt-3'>
                  <h6 className='mb-md-3 mb-2 fs-base'>Should I apply for a job even if I don&apos;t have the specified experience?</h6>
                  <p>Blandit adipiscing duis sit tellus rhoncus, amet, sit vitae gravida. Tincidunt placerat ultrices eu, senectus vitae accumsan massa in. Ultricies imperdiet duis feugiat lorem. Pretium turpis faucibus sit urna nisi lorem interdum. Diam semper et ac neque ac.</p>
                </div>
                <div className='mt-md-4 mt-3'>
                  <h6 className='mb-md-3 mb-2 fs-base'>What are the most important things to include in my resume?</h6>
                  <p>Amet posuere imperdiet placerat volutpat elit tellus lectus. Et sit massa volutpat id condimentum velit risus quam ut. Fames ut pulvinar ut ac sed elementum sed. Bibendum interdum ut sit ullamcorper arcu. Proin pharetra proin mi ultricies diam sit. Arcu faucibus ut adipiscing odio habitasse at ut amet maecenas. Suscipit eget mi felis eu mi scelerisque. Mattis condimentum ut eget eu, aliquam id blandit urna, mattis.</p>
                </div>
                <div className='mt-md-4 mt-3'>
                  <h6 className='mb-md-3 mb-2 fs-base'>How long should I make my cover letter and/or resume?</h6>
                  <p>Morbi egestas quam ultrices fames dapibus proin amet, placerat cum. Feugiat nibh nulla pellentesque viverra elementum nibh tortor orci. A vitae hac id accumsan. At lacus velit donec vivamus. Auctor pharetra, ipsum aliquam lacus morbi at feugiat nullam. In eu tellus elementum varius tristique. Varius pretium vestibulum feugiat dapibus tempor amet, ultricies. At urna diam viverra sed suspendisse. In at adipiscing nisl at ultrices curabitur tempor.</p>
                </div>
                <div className='mt-md-4 mt-3'>
                  <h6 className='mb-md-3 mb-2 fs-base'>Will our data be private and safe?</h6>
                  <p>Enim at cursus id malesuada pharetra, mollis nam. Amet quam viverra est lacus habitant feugiat arcu. Habitant nunc, nibh leo sem quisque nunc vel. Suspendisse mattis risus iaculis orci. Nisl neque volutpat gravida nec vel. Mauris lacus nisl facilisis aliquet gravida. Et nisi, pretium ultricies augue placerat tempus. Sed felis non penatibus id blandit velit nibh.</p>
                </div>
              </div>
              <Button as={Link} href='/job-board/help-center' variant='primary rounded-pill' className='w-sm-auto w-100 mt-3'>
                Go to help center
                <i className='fi-chevron-right ms-2'></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </JobBoardPageLayout>
  )
}

export default ContactPage
