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
import Accordion from 'react-bootstrap/Accordion'
import ImageLoader from '../../components/ImageLoader'
import ScrollLink from '../../components/ScrollLink'

const HelpCenterSinglePage = () => (

  <JobBoardPageLayout
    pageTitle='Help Center - Single Topic'
    activeNav='Pages'
  >

    {/* Hero */}
    <section className='bg-dark py-5'>
      <Container className='py-5'>

        {/* Breadcrumbs */}
        <Breadcrumb className='breadcrumb-light mb-4 pb-lg-3'>
          <Breadcrumb.Item linkAs={Link} href='/job-board'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='/job-board/help-center'>Help Center</Breadcrumb.Item>
          <Breadcrumb.Item active>For job seekers</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page title */}
        <div className='mb-lg-5 mx-auto text-center' style={{maxWidth: '856px'}}>
          <h1 className='mb-4 pb-3 text-light'>For job seekers</h1>

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


    {/* Page content */}
    <section className='position-relative bg-white rounded-xxl-4 mb-5 pt-md-3 pb-lg-5 zindex-5' style={{marginTop: '-30px'}}>
      <Container className='pt-5'>
        <Row>
          <Col md={4} lg={3} className='d-md-block d-none position-relative'>
            <nav className='flex-column border-start sticky-top' style={{top: '116px'}}>
              <ScrollLink
                to='popular-questions'
                spy={true}
                smooth='easeInOutQuart'
                duration={600}
                offset={-110}
                className='nav-link py-1 px-4 fw-normal'
              >Popular questions</ScrollLink>
              <ScrollLink
                to='job-search'
                spy={true}
                smooth='easeInOutQuart'
                duration={600}
                offset={-110}
                className='nav-link py-1 px-4 fw-normal'
              >Job search</ScrollLink>
              <ScrollLink
                to='resume-creation'
                spy={true}
                smooth='easeInOutQuart'
                duration={600}
                offset={-110}
                className='nav-link py-1 px-4 fw-normal'
              >Resume creation and editing</ScrollLink>
              <ScrollLink
                to='job-application'
                spy={true}
                smooth='easeInOutQuart'
                duration={600}
                offset={-110}
                className='nav-link py-1 px-4 fw-normal'
              >Job application</ScrollLink>
              <ScrollLink
                to='registration-and-login'
                spy={true}
                smooth='easeInOutQuart'
                duration={600}
                offset={-110}
                className='nav-link py-1 px-4 fw-normal'
              >Registration and login</ScrollLink>
              <ScrollLink
                to='technical-information'
                spy={true}
                smooth='easeInOutQuart'
                duration={600}
                offset={-110}
                className='nav-link py-1 px-4 fw-normal'
              >Technical information</ScrollLink>
              <ScrollLink
                to='newsletter-of-new-vacancies'
                spy={true}
                smooth='easeInOutQuart'
                duration={600}
                offset={-110}
                className='nav-link py-1 px-4 fw-normal'
              >Newsletter of new vacancies</ScrollLink>
            </nav>
          </Col>
          <Col md={8} lg={{offset: 1}}>

            {/* Popular questions */}
            <div id='popular-questions' className='mb-md-5 mb-4 pb-lg-2'>
              <h4 className='h4 mb-md-4'>Popular questions</h4>
              <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <span className='fw-normal'>Getting started: the basics</span>
                  </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <span className='fw-normal'>Will our data be private and safe?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <span className='fw-normal'>Should I apply for a job even if I don&apos;t have the specified experience?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>
                    <span className='fw-normal'>What exactly is a personal brand and why do I need one?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header>
                    <span className='fw-normal'>What are the most important things to include in my resume?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque ab dicta sint, quam fugiat culpa aliquid, labore est vero explicabo, non voluptas at perspiciatis omnis impedit libero possimus! Alias!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                  <Accordion.Header>
                    <span className='fw-normal'>How long should I make my cover letter and/or resume?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iste voluptas ducimus! Sequi, expedita est. Accusamus, quaerat nulla! Ex exercitationem iure voluptatum mollitia amet, corporis sit ab temporibus et consectetur.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Job search */}
            <div id='job-search' className='mb-md-5 mb-4 pb-lg-2'>
              <h4 className='h4 mb-md-4'>Job search</h4>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <span className='fw-normal'>Getting started: the basics</span>
                  </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <span className='fw-normal'>Will our data be private and safe?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <span className='fw-normal'>Should I apply for a job even if I don&apos;t have the specified experience?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>
                    <span className='fw-normal'>What exactly is a personal brand and why do I need one?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Resume creation and editing */}
            <div id='resume-creation' className='mb-md-5 mb-4 pb-lg-2'>
              <h4 className='h4 mb-md-4'>Resume creation and editing</h4>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <span className='fw-normal'>Getting started: the basics</span>
                  </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <span className='fw-normal'>Will our data be private and safe?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <span className='fw-normal'>Should I apply for a job even if I don&apos;t have the specified experience?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>
                    <span className='fw-normal'>What exactly is a personal brand and why do I need one?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header>
                    <span className='fw-normal'>What are the most important things to include in my resume?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque ab dicta sint, quam fugiat culpa aliquid, labore est vero explicabo, non voluptas at perspiciatis omnis impedit libero possimus! Alias!
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Job application */}
            <div id='job-application' className='mb-md-5 mb-4 pb-lg-2'>
              <h4 className='h4 mb-md-4'>Job application</h4>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <span className='fw-normal'>Getting started: the basics</span>
                  </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <span className='fw-normal'>Will our data be private and safe?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <span className='fw-normal'>Should I apply for a job even if I don&apos;t have the specified experience?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Registration and login */}
            <div id='registration-and-login' className='mb-md-5 mb-4 pb-lg-2'>
              <h4 className='h4 mb-md-4'>Registration and login</h4>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <span className='fw-normal'>Getting started: the basics</span>
                  </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <span className='fw-normal'>Will our data be private and safe?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <span className='fw-normal'>Should I apply for a job even if I don&apos;t have the specified experience?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Technical information */}
            <div id='technical-information' className='mb-md-5 mb-4 pb-lg-2'>
              <h4 className='h4 mb-md-4'>Technical information</h4>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <span className='fw-normal'>Getting started: the basics</span>
                  </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <span className='fw-normal'>Will our data be private and safe?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <span className='fw-normal'>Should I apply for a job even if I don&apos;t have the specified experience?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>
                    <span className='fw-normal'>What exactly is a personal brand and why do I need one?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nulla unde saepe, similique non rem est adipisci accusamus minima mollitia repellat, illum eius quidem molestias nam illo expedita iste.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header>
                    <span className='fw-normal'>What are the most important things to include in my resume?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque ab dicta sint, quam fugiat culpa aliquid, labore est vero explicabo, non voluptas at perspiciatis omnis impedit libero possimus! Alias!
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Newsletter of new vacancies */}
            <div id='newsletter-of-new-vacancies'>
              <h4 className='h4 mb-md-4'>Newsletter of new vacancies</h4>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <span className='fw-normal'>Getting started: the basics</span>
                  </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <span className='fw-normal'>Will our data be private and safe?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim. Nisi, eget viverra platea fringilla aliquet eros varius tellus nibh.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <span className='fw-normal'>Should I apply for a job even if I don&apos;t have the specified experience?</span>
                    </Accordion.Header>
                  <Accordion.Body className='fs-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas?
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
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

export default HelpCenterSinglePage
