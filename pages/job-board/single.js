import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import JobCard from '../../components/JobCard'
import SocialButton from '../../components/SocialButton'
import Card from 'react-bootstrap/Card'
import FormGroup from '../../components/FormGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownSelect from '../../components/DropdownSelect'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SingleJobPage = () => {

  // Related jobs array
  const jobs = [
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/it-pro.png',
        name: 'IT Pro TV'
      },
      title: 'Business Analyst',
      description: 'Blandit a tincidunt arcu nulla. Sem neque, rhoncus non odio nulla maecenas elit praesent. Orci tristique velit mauris cursus nibh. Hendrerit et dictum sed...',
      location: 'Chicago',
      salary: '$7,500',
      badges: []
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/zalo.png',
        name: 'Zalo Tech Company'
      },
      title: 'Partnership Manager',
      description: 'Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque...',
      location: 'New York',
      salary: '$10,000',
      badges: [
        ['accent', 'Featured']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/elastic.png',
        name: 'Elastic Inc.'
      },
      title: 'Senior Credit Analyst',
      description: 'Auctor elit in aenean sodales mattis. Ultricies nec eu augue sit. Ornare pulvinar enim fames orci enim in libero. Eu, lorem leo netus velit egestas risus...',
      location: 'Dallas',
      salary: '$8,000',
      badges: [
        ['danger', 'Hot']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/lift-web.png',
        name: 'Lift Web'
      },
      title: 'Account Manager',
      description: 'Blandit a tincidunt arcu nulla. Sem neque, rhoncus non odio nulla maecenas elit praesent. Orci tristique velit mauris cursus nibh. Hendrerit et dictum sed...',
      location: 'Houston',
      salary: '$5,000',
      badges: []
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/xbox.png',
        name: 'Xbox Company'
      },
      title: 'Full-Stack Developer',
      description: 'Iusto aliquid labore eos pariatur autem nulla eum hic voluptate, dolorum accusamus, soluta consectetur sint voluptatibus sequi recusandae! Facere eaque...',
      location: 'Washington',
      salary: '$13,000',
      badges: []
    }
  ]

  return (
    <JobBoardPageLayout
      pageTitle='Single Job Page'
      activeNav='Catalog'
    >

      {/* Hero */}
      <section className='bg-dark pt-5'>
        <Container className='py-5'>

          {/* Page title */}
          <h1 className='text-light pt-1 pt-md-3 mb-4'>Find jobs</h1>

          {/* Search form */}
          <FormGroup className='form-group-light d-block rounded-lg-pill mb-4'>
            <Row className='row align-items-center g-0 ms-n2'>
              <Col xs={12} lg={3} xl={4}>
                <InputGroup size='lg' className='border-end-lg border-light'>
                  <InputGroup.Text className='text-light rounded-pill opacity-50 ps-3'>
                    <i className='fi-search'></i>
                  </InputGroup.Text>
                  <Form.Control placeholder='Search site...' />
                </InputGroup>
              </Col>
              <hr className='hr-light d-lg-none my-2'/>
              <Col xs={12} lg={5} className='d-sm-flex'>
                <DropdownSelect
                  defaultValue='Category'
                  icon='fi-list'
                  darkMenu
                  options={[
                    ['', 'Accounting'],
                    ['', 'Marketing & PR'],
                    ['', 'Medicine'],
                    ['', 'Internet technology'],
                    ['', 'HoReCa'],
                    ['', 'Design, creativity'],
                    ['', 'Fitness & sports']
                  ]}
                  variant='link'
                  className='w-sm-50 border-end-sm border-light'
                />
                <hr className='hr-light d-sm-none my-2'/>
                <DropdownSelect
                  defaultValue='Location'
                  icon='fi-map-pin'
                  darkMenu
                  options={[
                    ['', 'Dallas'],
                    ['', 'Chicago'],
                    ['', 'Houston'],
                    ['', 'Las Vegas'],
                    ['', 'Los Angeles'],
                    ['', 'New York'],
                    ['', 'San Francisco']
                  ]}
                  variant='link'
                  className='w-sm-50 border-end-lg border-light'
                />
              </Col>
              <hr className='hr-light d-lg-none my-2'/>
              <Col xs={12} lg={4} xl={3} className='d-flex align-items-center'>
                <DropdownSelect
                  defaultValue='Distance'
                  icon='fi-geo'
                  darkMenu
                  options={[
                    ['', '10 miles'],
                    ['', '20 miles'],
                    ['', '30 miles'],
                    ['', '40 miles'],
                    ['', '50 miles']
                  ]}
                  variant='link'
                  className='w-50 w-lg-100'
                />
                <Button size='lg' variant='primary rounded-pill' className='w-50 w-lg-auto'>Find jobs</Button>
              </Col>
            </Row>
          </FormGroup>

          {/* Search params (dropdowns) */}
          <div className='d-sm-flex justify-content-between pt-2 pb-1 pb-md-3 pb-lg-4'>
            <div className='d-flex flex-column flex-sm-row flex-wrap'>
              <DropdownSelect
                defaultValue='Publication date'
                options={[
                  ['', 'Most recent'],
                  ['', '5 days'],
                  ['', '15 days'],
                  ['', '1 week'],
                  ['', '1 month']
                ]}
                variant='translucent-light btn-sm fs-base fw-normal w-100 text-start'
                className='me-sm-3 mb-2 mb-sm-3'
              />
              <DropdownSelect
                defaultValue='Job type'
                options={[
                  ['', 'Full-time'],
                  ['', 'Part-time'],
                  ['', 'Remote'],
                  ['', 'Temporary'],
                  ['', 'Contract'],
                  ['', 'Internship']
                ]}
                variant='translucent-light btn-sm fs-base fw-normal w-100 text-start'
                className='me-sm-3 mb-2 mb-sm-3'
              />
              <DropdownSelect
                defaultValue='Company'
                options={[
                  ['', 'IT Pro TV'],
                  ['', 'Zalo Tech Company'],
                  ['', 'Elastic Inc.'],
                  ['', 'Lift Web'],
                  ['', 'Xbox Company'],
                  ['', 'Zapier']
                ]}
                variant='translucent-light btn-sm fs-base fw-normal w-100 text-start'
                className='me-sm-3 mb-2 mb-sm-3'
              />
              <DropdownSelect
                defaultValue='Salary range'
                options={[
                  ['', '$500 - $1,000'],
                  ['', '$1,000 - $2,000'],
                  ['', '$2,000 - $5,000'],
                  ['', '$5,000 - $10,000'],
                  ['', '$10,000 - $20,000'],
                  ['', '$20,000 - $50,000']
                ]}
                variant='translucent-light btn-sm fs-base fw-normal w-100 text-start'
                className='me-sm-3 mb-2 mb-sm-3'
              />
            </div>
            <a className='d-inline-block text-light text-nowrap py-3' href='#'>Advanced search</a>
          </div>
        </Container>
      </section>


      {/* Page content */}
      <section className='position-relative bg-white rounded-xxl-4 zindex-5' style={{marginTop: '-30px'}}>
        <Container className='pt-4 pb-5 mb-md-4'>

          {/* Breadcrumbs */}
          <Breadcrumb className='pb-2 my-2'>
            <Breadcrumb.Item linkAs={Link} href='/job-board'>Home</Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} href='/job-board/catalog'>Find jobs</Breadcrumb.Item>
            <Breadcrumb.Item active>Partnership Manager</Breadcrumb.Item>
          </Breadcrumb>

          <Row>

            {/* Single job content */}
            <Col xs={12} lg={7} className='position-relative pe-lg-5 mb-5 mb-lg-0' style={{zIndex: '1025'}}>
              <div className='d-flex justify-content-between mb-2'>
                <h2 className='h3 mb-0'>Partnership Manager</h2>
                <div className='text-end'>
                  <Badge bg='faded-accent' pill className='fs-sm mb-2'>Featured</Badge>
                  <div className='fs-sm text-muted'>2 hours ago</div>
                </div>
              </div>
              <ul className='list-unstyled fs-sm mb-4'>
                <li className='mb-2'>
                  <Link href='/job-board/employer-single' className='d-flex align-items-center text-decoration-none'>
                    <i className='fi-external-link me-2'></i>
                    <span className='text-decoration-underline'>Zalo Tech Company</span>
                  </Link>
                </li>
                <li className='d-flex align-items-center mb-2'>
                  <i className='fi-map-pin text-muted me-2'></i>
                  <span>New York</span>
                </li>
                <li className='d-flex align-items-center mb-2'>
                  <i className='fi-cash fs-base text-muted me-2'></i>
                  <span>$10,000</span>
                </li>
                <li className='d-flex align-items-center mb-2'>
                  <i className='fi-phone text-muted me-2'></i>
                  <span className='me-2'>Bessie Cooper, HR Manager</span>
                  <a href='#'>Show phone</a>
                </li>
                <li className='d-flex align-items-center mb-2'>
                  <i className='fi-clock text-muted me-2'></i>
                  <span className='me-2'>Full-time</span>
                </li>
              </ul>
              <hr className='mb-4'/>
              <h3 className='h6'>Description:</h3>
              <p>Sit sit viverra aenean nunc. Vestibulum nulla tellus, praesent mi. Eget eu sapien posuere varius nisl. Arcu scelerisque ut venenatis, nec. Sed id etiam nisl nisl, elementum ac odio morbi dolor. Sem mauris turpis ultrices sed porttitor orci, erat. Ultrices ut a mi sem mauris, vitae egestas. Eget suscipit a, consectetur quam sed morbi. Metus, tortor egestas phasellus urna. Lorem eu dictum egestas vitae faucibus congue urna. Sed dolor sed risus duis volutpat ullamcorper.</p>
              <h3 className='h6 pt-2'>Requirements:</h3>
              <ul className='list-unstyled'>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Placerat id mauris, ac ipsum nulla mi netus vestibulum fringilla.
                </li>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Turpis venenatis sapien etiam in orci, euismod.
                </li>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Elit tempor, integer augue aliquam justo.
                </li>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Ultricies accumsan, malesuada pellentesque malesuada massa sed viverra eget.
                </li>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Varius mauris netus placerat neque, orci amet odio orci.
                </li>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Fermentum ut mi sit vel sit dictum mollis turpis.
                </li>
              </ul>
              <h3 className='h6 pt-2'>Company offers:</h3>
              <ul className='list-unstyled'>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Et mattis sit imperdiet risus, fermentum ultrices non.
                </li>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Sed phasellus consequat nunc enim interdum tristique ultrices egestas.
                </li>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Molestie mus ultrices tellus enim.
                </li>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Vitae pulvinar massa id lorem aliquam fermentum egestas.
                </li>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Dictumst blandit sit mauris in consectetur.
                </li>
                <li className='d-flex'>
                  <span className='text-primary fs-lg me-2'>&#8226;</span>
                  Sem purus lorem odio donec faucibus ipsum ultricies.
                </li>
              </ul>
              <p className='pt-2 mb-1'>Please, send your CV marked “Partnership Manager” in the subject via e-mail:</p>
              <a className='nav-link-muted fw-bold' href='mailto:contact@example.com'>contact@example.com</a>
              <hr className='my-4'/>
              <ButtonGroup size='lg'>
                <Button variant='primary' className='rounded-pill rounded-end-0 ps-4 pe-3'>Apply for this position</Button>
                <Button variant='primary' className='border-end-0 border-top-0 border-bottom-0 border-light rounded-pill rounded-start-0 px-3'>
                  <i className='fi-heart me-1'></i>
                </Button>
              </ButtonGroup>
            </Col>


            {/* Sticky sidebar */}
            <Col as='aside' xs={12} lg={5} style={{marginTop: '-6rem'}}>
              <div className='sticky-top' style={{paddingTop: '6rem'}}>
                <Card className='shadow-sm mb-3 mb-lg-0'>
                  <Card.Body>
                    <h2 className='h3'>Subscribe to our newsletter</h2>
                    <p>Don&apos;t miss any job updates and relevant vacancies info!</p>
                    <FormGroup className='rounded-pill'>
                      <InputGroup>
                        <InputGroup.Text className='text-muted'>
                          <i className='fi-mail'></i>
                        </InputGroup.Text>
                        <Form.Control placeholder='Your email' />
                      </InputGroup>
                      <Button variant='primary rounded-pill'>Subscribe</Button>
                    </FormGroup>
                    <Form.Check
                      type='checkbox'
                      id='es-agree'
                      label='I agree to receive communications from Finder.'
                      className='mt-3'
                    />
                    <hr className='my-4'/>
                    <div className='d-flex align-items-end'>
                      <div className='fs-lg fw-bold me-3'>
                        Like our jobs?<br/>Receive vacancies in Telegram
                      </div>
                      <SocialButton href='#' brand='telegram' variant='translucent' roundedCircle />
                    </div>
                  </Card.Body>
                </Card>
                <div className='pt-4 pt-lg-5 ps-4'>
                  <h2 className='h3'>My last search queries:</h2>
                  <ul className='list-unstyled mb-0'>
                    <li className='mb-0'>
                      <a className='nav-link d-inline-block fw-normal px-0 py-1' href='#'>
                        Accountant
                      </a>
                    </li>
                    <li className='mb-0'>
                      <a className='nav-link d-inline-block fw-normal px-0 py-1' href='#'>
                        Manager
                      </a>
                    </li>
                    <li className='mb-0'>
                      <a className='nav-link d-inline-block fw-normal px-0 py-1' href='#'>
                        Administrator
                      </a>
                    </li>
                    <li className='mb-0'>
                      <a className='nav-link-muted d-inline-block fw-bold py-1' href='#'>
                        Clear all
                        <i className='fi-x fs-xs mt-n1 ms-2'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Related jobs (carousel) */}
      <Container as='section' className='pt-md-2 pb-5 mb-md-4'>
        <div className='d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2'>
          <h2 className='h3 mb-sm-0'>You may be interested in</h2>
          <Button as={Link} href='/job-board/catalog' variant='link fw-normal p-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>
        <div className='position-relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prev',
              nextEl: '#next'
            }}
            pagination={{
              el: '#pagination',
              clickable: true
            }}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              991: { slidesPerView: 3 }
            }}
            className='mx-n2'
          >
            {jobs.map((job, indx) => (
              <SwiperSlide key={indx} className='h-auto' style={{padding: '.75rem .75rem 1rem .75rem'}}>
                <JobCard
                  key={indx}
                  href={job.href}
                  company={{
                    name: job.company.name,
                    logo: {
                      src: job.company.logo,
                      size: [24, 24]
                    }
                  }}
                  title={job.title}
                  description={job.description}
                  location={job.location}
                  salary={job.salary}
                  badges={job.badges}
                  dropdown={[
                    { icon: 'fi-heart', label: 'Add to Saved Jobs' },
                    { icon: 'fi-x-circle', label: 'Not interested' }
                  ]}
                  className='h-100'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prev' variant='prev' className='d-none d-xxl-block ms-n5' />
          <Button id='next' variant='next' className='d-none d-xxl-block me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='pagination' className='swiper-pagination position-relative bottom-0 mt-3 pb-3'></div>
      </Container>
    </JobBoardPageLayout>
  )
}

export default SingleJobPage
