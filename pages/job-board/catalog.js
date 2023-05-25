import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import JobCard from '../../components/JobCard'
import Button from 'react-bootstrap/Button'
import Pager from 'react-bootstrap/Pagination'
import InputGroup from 'react-bootstrap/InputGroup'
import SocialButton from '../../components/SocialButton'
import Card from 'react-bootstrap/Card'
import FormGroup from '../../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'

const CatalogPage = () => {

  // Jobs array
  const jobs = [
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/it-pro.png',
        name: 'IT Pro TV'
      },
      title: 'Business Analyst',
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
      location: 'Washington',
      salary: '$13,000',
      badges: []
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/zapier.png',
        name: 'Zapier'
      },
      title: 'Onboarding Specialist',
      location: 'Houston',
      salary: '$4,000',
      badges: [
        ['danger', 'Hot']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/kibana.png',
        name: 'Elastic Kibana'
      },
      title: 'Global Product Operations Specialist',
      location: 'San Francisco',
      salary: '$9,200',
      badges: [
        ['info', 'New']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/xampp.png',
        name: 'XAMPP Company'
      },
      title: 'Sales Manager',
      location: 'San Francisco',
      salary: '$6,500',
      badges: []
    }
  ]

  return (
    <JobBoardPageLayout
      pageTitle='Catalog (List of Jobs)'
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
            <Breadcrumb.Item active>Find jobs</Breadcrumb.Item>
          </Breadcrumb>

          <Row>

            {/* Content */}
            <Col xs={12} md={6} lg={5} className='position-relative mb-4 mb-md-0' style={{zIndex: 1025}}>

              {/* Vacancies sorting */}
              <div className='d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2'>
                <Form.Group controlId='jobs-sort' className='d-flex align-items-center'>
                  <Form.Label className='fs-sm mb-sm-0 me-2 pe-1 text-nowrap'>
                    <i className='fi-arrows-sort me-1 align-middle opacity-80'></i>
                    Sort by:
                  </Form.Label>
                  <Form.Select size='sm'>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                    <option value='Popular'>Popular</option>
                    <option value='High rating'>High rating</option>
                    <option value='Low rating'>Low rating</option>
                  </Form.Select>
                </Form.Group>
                <div className='text-muted fs-sm text-nowrap'>
                  <i className='fi-briefcase fs-base mt-n1 me-2'></i>
                  2948 jobs
                </div>
              </div>

              {/* Company jobs */}
              {jobs.map((job, indx) => (
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
                  location={job.location}
                  salary={job.salary}
                  badges={job.badges}
                  dropdown={[
                    { icon: 'fi-heart', label: 'Add to Saved Jobs' },
                    { icon: 'fi-x-circle', label: 'Not interested' }
                  ]}
                  className='mt-2'
                />
              ))}

              {/* Pagination */}
              <nav className='pt-4 pb-2' aria-label='Vacancies pagination'>
                <Pager className='mt-2 mb-4 mb-sm-0'>
                  <Pager.Item active>{1}</Pager.Item>
                  <Pager.Item>{2}</Pager.Item>
                  <Pager.Item>{3}</Pager.Item>
                  <Pager.Ellipsis />
                  <Pager.Item>{8}</Pager.Item>
                  <Pager.Item>
                    <i className='fi-chevron-right'></i>
                  </Pager.Item>
                </Pager>
              </nav>
            </Col>


            {/* Sticky sidebar */}
            <Col as='aside' xs={12} md={6} lg={7} style={{marginTop: '-6rem'}}>
              <div className='sticky-top' style={{paddingTop: '6rem'}}>
                <Card className='shadow-sm p-lg-3 mb-3 mb-lg-0'>
                  <Card.Body className='p-lg-4'>
                    <h2 className='h3'>Subscribe to our newsletter</h2>
                    <p>Don&apos;t miss any job updates and relevant jobs info!</p>
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
                        Like our jobs?<br/>Receive jobs in Telegram
                      </div>
                      <SocialButton href='#' brand='telegram' variant='translucent' roundedCircle />
                    </div>
                  </Card.Body>
                </Card>
                <div className='pt-4 pt-lg-5 ps-4 ps-lg-5'>
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
    </JobBoardPageLayout>
  )
}

export default CatalogPage
