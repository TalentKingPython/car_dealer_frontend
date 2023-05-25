import { useState } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import CursorParallax, { Layer } from '../../components/CursorParallax'
import FormGroup from '../../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import IconBox from '../../components/IconBox'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import ImageLoader from '../../components/ImageLoader'
import Accordion from 'react-bootstrap/Accordion'
import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import AccordionCard from '../../components/AccordionCard'
import ImageSwap from '../../components/ImageSwap'
import MarketButton from '../../components/MarketButton'
import BlogCard from '../../components/BlogCard'
import ReactSlider from 'react-slider'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const HomePage = () => {

  // Price range slider
  const PriceRange = () => {
    const [minPrice, setMinPrice] = useState(5000)
    const [maxPrice, setMaxPrice] = useState(14000)

    const handleSliderChange = sliderVal => {
      let sliderMinVal = sliderVal[0]
      let sliderMaxVal = sliderVal[1]
      setMinPrice(sliderMinVal)
      setMaxPrice(sliderMaxVal)
    }

    return (
      <ReactSlider
        className='range-slider range-slider-light'
        thumbClassName='range-slider-handle'
        trackClassName='range-slider-track'
        min={1000}
        max={20000}
        value={[minPrice, maxPrice]}
        ariaLabel={['Lower handle', 'Upper handle']}
        ariaValuetext={state => `Handle value ${state.valueNow}`}
        step={500}
        renderThumb={(props, state) => (<div {...props}>
          <div className='range-slider-tooltip'>$ {state.valueNow}</div>
        </div>)}
        pearling
        minDistance={1000}
        onChange={handleSliderChange}
      />
    )
  }

  // Categories array
  const categories = [
    [
      {
        href: '/job-board/catalog',
        media: 'fi-accounting',
        title: 'Accounting'
      },
      {
        href: '/job-board/catalog',
        media: 'fi-pie-chart',
        title: 'Marketing & PR'
      },
      {
        href: '/job-board/catalog',
        media: 'fi-meds',
        title: 'Medicine'
      },
      {
        href: '/job-board/catalog',
        media: 'fi-plant',
        title: 'Agriculture'
      },
      {
        href: '/job-board/catalog',
        media: 'fi-computer',
        title: 'IT'
      },
      {
        href: '/job-board/catalog',
        media: 'fi-security',
        title: 'Security'
      }
    ],
    [
      {
        href: '/job-board/catalog',
        media: 'fi-briefcase',
        title: 'Management'
      },
      {
        href: '/job-board/catalog',
        media: 'fi-building',
        title: 'Construction'
      },
      {
        href: '/job-board/catalog',
        media: 'fi-car',
        title: 'Transportation'
      },
      {
        href: '/job-board/catalog',
        media: 'fi-cart',
        title: 'Retail & Shopping'
      },
      {
        href: '/job-board/catalog',
        media: 'fi-cash',
        title: 'Finance'
      }
    ]
  ]

  // Jobs of the day array
  const jobs = [
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/it-pro.png',
        name: 'IT Pro TV'
      },
      title: 'Business Analyst',
      description: 'Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare pulvinar enim fames orci enim in libero.',
      location: 'Chicago',
      salary: '$7,500',
      badges: [
        ['danger', 'Hot']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/xbox.png',
        name: 'Xbox Company'
      },
      title: 'Full-Stack Developer',
      description: 'Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare pulvinar enim fames orci enim in libero.',
      location: 'Washington',
      salary: '$13,000',
      badges: [
        ['accent', 'Featured']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/xampp.png',
        name: 'XAMPP Company'
      },
      title: 'Sales Manager',
      description: 'Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare pulvinar enim fames orci enim in libero.',
      location: 'New Jersey',
      salary: '$6,500',
      badges: [
        ['danger', 'Hot']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/elastic.png',
        name: 'Elastic Inc.'
      },
      title: 'Senior Credit Analyst',
      description: 'Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim, neque. Ornare pulvinar enim fames orci enim in libero.',
      location: 'Dallas',
      salary: '$8,000',
      badges: [
        ['accent', 'Featured']
      ]
    }
  ]

  // Cities array
  const cities = [
    {
      href: '/job-board/catalog',
      image: '/images/job-board/city/new-york.svg',
      name: 'New York',
      jobs: '328'
    },
    {
      href: '/job-board/catalog',
      image: '/images/job-board/city/paris.svg',
      name: 'Paris',
      jobs: '152'
    },
    {
      href: '/job-board/catalog',
      image: '/images/job-board/city/london.svg',
      name: 'London',
      jobs: '74'
    },
    {
      href: '/job-board/catalog',
      image: '/images/job-board/city/bangkok.svg',
      name: 'Bangkok',
      jobs: '92'
    },
    {
      href: '/job-board/catalog',
      image: '/images/job-board/city/barcelona.svg',
      name: 'Barcelona',
      jobs: '204'
    },
    {
      href: '/job-board/catalog',
      image: '/images/job-board/city/dubai.svg',
      name: 'Dubai',
      jobs: '196'
    },
    {
      href: '/job-board/catalog',
      image: '/images/job-board/city/kuala-lumpur.svg',
      name: 'Kuala Lumpur',
      jobs: '143'
    }
  ]

  // Companies array
  const companies = [
    {
      href: '/job-board/employer-single',
      image: {
        src: '/images/job-board/company/microsoft.svg',
        srcGray: '/images/job-board/company/microsoft-g.svg',
        size: [196, 80],
        alt: 'Microsoft'
      }
    },
    {
      href: '/job-board/employer-single',
      image: {
        src: '/images/job-board/company/indeed.svg',
        srcGray: '/images/job-board/company/indeed-g.svg',
        size: [196, 80],
        alt: 'Indeed'
      }
    },
    {
      href: '/job-board/employer-single',
      image: {
        src: '/images/job-board/company/cocacola.svg',
        srcGray: '/images/job-board/company/cocacola-g.svg',
        size: [196, 80],
        alt: 'Coca Cola'
      }
    },
    {
      href: '/job-board/employer-single',
      image: {
        src: '/images/job-board/company/slack.svg',
        srcGray: '/images/job-board/company/slack-g.svg',
        size: [196, 80],
        alt: 'Slack'
      }
    },
    {
      href: '/job-board/employer-single',
      image: {
        src: '/images/job-board/company/walmart.svg',
        srcGray: '/images/job-board/company/walmart-g.svg',
        size: [196, 80],
        alt: 'Walmart'
      }
    },
    {
      href: '/job-board/employer-single',
      image: {
        src: '/images/job-board/company/google.svg',
        srcGray: '/images/job-board/company/google-g.svg',
        size: [196, 80],
        alt: 'Google'
      }
    }
  ]

  return (
    <JobBoardPageLayout
      pageTitle='Home v.1'
      activeNav='Home'
    >

      {/* Hero */}
      <section className='bg-dark pb-4 pt-5'>
        <Container className='py-5'>
          <Row className='align-items-center mt-2 mt-md-0 pt-md-4 pt-lg-5 pb-5'>
            <Col xs={12} md={{span: 5, order: 'last'}} className='mb-5 mb-md-0'>
              <CursorParallax className='mx-auto' style={{maxWidth: '526px'}}>
                <Layer depth={0.1}>
                  <Image priority src='/images/job-board/hero-banner-1/layer01.svg' width={526} height={353} alt='Layer' />
                </Layer>
                <Layer depth={0.16}>
                  <Image priority src='/images/job-board/hero-banner-1/layer02.svg' width={526} height={353} alt='Layer' />
                </Layer>
                <Layer depth={0.38}>
                  <Image priority src='/images/job-board/hero-banner-1/layer03.svg' width={526} height={353} alt='Layer' />
                </Layer>
                <Layer depth={0.16}>
                  <Image priority src='/images/job-board/hero-banner-1/layer04.svg' width={526} height={353} alt='Layer' />
                </Layer>
                <Layer depth={0.16}>
                  <Image priority src='/images/job-board/hero-banner-1/layer05.svg' width={526} height={353} alt='Layer' />
                </Layer>
                <Layer depth={0.45}>
                  <Image priority src='/images/job-board/hero-banner-1/layer06.svg' width={526} height={353} alt='Layer' />
                </Layer>
                <Layer depth={0.3}>
                  <Image priority src='/images/job-board/hero-banner-1/layer07.svg' width={526} height={353} alt='Layer' />
                </Layer>
                <Layer depth={0.2}>
                  <Image priority src='/images/job-board/hero-banner-1/layer08.svg' width={526} height={353} alt='Layer' />
                </Layer>
              </CursorParallax>
            </Col>
            <Col xs={12} md={{span: 7, order: 'first'}}>
              <h1 className='display-4 text-light pb-2 mb-4 mb-lg-5' style={{maxWidth: '29.5rem'}}>
                Hack your way to the <span className='text-primary'>dream job</span>
              </h1>
              <h2 className='h5 text-light mb-4'>Popular requests:</h2>
              <div className='d-flex flex-wrap mt-n2 ms-n2'>
                <Button size='xs' variant='translucent-light rounded-pill fs-sm' className='ms-2 mt-2'>
                  <i className='fi-search me-2'></i>
                  Engineer
                </Button>
                <Button size='xs' variant='translucent-light rounded-pill fs-sm' className='ms-2 mt-2'>
                  <i className='fi-search me-2'></i>
                  Customer Service
                </Button>
                <Button size='xs' variant='translucent-light rounded-pill fs-sm' className='ms-2 mt-2'>
                  <i className='fi-search me-2'></i>
                  Delivery
                </Button>
                <Button size='xs' variant='translucent-light rounded-pill fs-sm' className='ms-2 mt-2'>
                  <i className='fi-search me-2'></i>
                  Cashier
                </Button>
                <Button size='xs' variant='translucent-light rounded-pill fs-sm' className='ms-2 mt-2'>
                  <i className='fi-search me-2'></i>
                  Remote
                </Button>
                <Button size='xs' variant='translucent-light rounded-pill fs-sm' className='ms-2 mt-2'>
                  <i className='fi-search me-2'></i>
                  IT
                </Button>
              </div>
            </Col>
          </Row>

          {/* Search form */}
          <FormGroup className='form-group-light d-block rounded-xl-pill mt-n3 mt-md-4 mt-xl-5 mb-md-4'>
            <Row className='align-items-center g-0 ms-n2'>
              <Col xs={12} md={5} xl={3}>
                <InputGroup size='lg' className='border-end-md border-light'>
                  <InputGroup.Text className='text-light rounded-pill opacity-50 ps-3'>
                    <i className='fi-search'></i>
                  </InputGroup.Text>
                  <Form.Control placeholder='Search site...' />
                </InputGroup>
              </Col>
              <hr className='hr-light d-md-none my-2'/>
              <Col xs={12} md={7} xl={4} className='d-sm-flex'>
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
                  className='w-sm-50 border-end-sm border-light'
                />
                <hr className='hr-light d-sm-none my-2'/>
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
                  className='w-sm-50 border-end-xl border-light'
                />
              </Col>
              <hr className='hr-light d-xl-none mt-2 mb-3'/>
              <Col xs={12} xl={5} className='d-sm-flex align-items-center'>
                <div className='d-flex align-items-center w-100 ms-xl-1 ps-3'>
                  <div className='text-light text-nowrap opacity-60 me-sm-1'>
                    <i className='fi-cash fs-lg me-2'></i>
                    Salary range
                  </div>
                  <PriceRange />
                </div>
                <Button size='lg' variant='primary rounded-pill' className='w-100 w-sm-50 w-lg-auto mt-4 mt-sm-0'>
                  Find jobs
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </Container>
      </section>


      {/* Categories */}
      <section className='position-relative bg-white rounded-xxl-4 pt-md-3 zindex-5' style={{marginTop: '-30px'}}>
        <Container className='pt-5 pb-2 mb-4 mb-md-5'>
          <h2 className='h3 pb-2 pb-sm-3'>Jobs by category</h2>
          <div className='d-flex flex-wrap flex-column flex-sm-row'>
            {categories[0].map((category, indx) => (
              <IconBox
                key={indx}
                href={category.href}
                media={category.media}
                title={category.title}
                type='pill'
                className='bg-secondary border-0 mb-2 mb-sm-3 me-sm-3 me-xxl-4'
              />
            ))}
            <Dropdown className='mb-2 mb-sm-3 me-sm-3 me-xxl-4'>
              <Dropdown.Toggle as='div' className='dropdown-toggle-flush bg-transparent border-0 shadow-none p-0'>
                <IconBox
                  media='fi-dots-horisontal'
                  title='More'
                  type='pill'
                  className='bg-secondary border-0'
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className='my-1'>
                {categories[1].map((category, indx) => (
                  <Dropdown.Item key={indx} as={Link} href={category.href} className='fw-bold'>
                    <i className={`${category.media} fs-base opacity-60 me-2`}></i>
                    {category.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </section>


      {/* Banners */}
      <Container as='section' className='mb-4 mb-md-5'>
        <Row xs={1} md={2} className='gy-4'>
          <Col>
            <Card className='h-100'>
              <div className='d-sm-flex align-items-center'>
                <div className='pt-4 ps-sm-4 py-sm-4 p-lg-5 flex-shrink-0 text-center'>
                  <div className='d-inline-block'>
                    <ImageLoader src='/images/pricing/icon-4.svg' width={86} height={86} alt='Icon' />
                  </div>
                </div>
                <Card.Body className='text-center text-sm-start'>
                  <h2 className='h5 mb-2'>Recently added jobs</h2>
                  <p className='mb-sm-4'>Nulla sit congue nunc lacus, laoreet nulla iaculis faucibus. Ut morbi enim.</p>
                  <Link href='/job-board/catalog' className='fw-bold text-decoration-none py-1'>
                    Find jobs
                    <i className='fi-chevron-right fs-xs ms-2'></i>
                  </Link>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className='h-100'>
              <div className='d-sm-flex align-items-center'>
                <div className='pt-4 ps-sm-4 py-sm-4 p-lg-5 flex-shrink-0 text-center'>
                  <div className='d-inline-block'>
                    <ImageLoader src='/images/pricing/icon-1.svg' width={86} height={86} alt='Icon' />
                  </div>
                </div>
                <Card.Body className='text-center text-sm-start'>
                  <h2 className='h5 mb-2'>Urgently hiring</h2>
                  <p className='mb-sm-4'>Viverra gravida id magna diam enim morbi enim mi vestibulum. Mus aliquet ut facilisi elit.</p>
                  <Link href='/job-board/catalog' className='fw-bold text-decoration-none py-1'>
                    Find jobs
                    <i className='fi-chevron-right fs-xs ms-2'></i>
                  </Link>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>


      {/* Jobs list + Post resume CTA */}
      <Container as='section' className='pt-4 pb-5 mb-md-4'>
        <Row className='gy-3'>
          <Col xs={12} md={6}>
            <div className='d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2'>
              <h2 className='h3 mb-sm-0'>Jobs of the day</h2>
              <Button as={Link} href='/job-board/catalog' variant='link fw-normal p-0'>
                View all
                <i className='fi-arrow-long-right ms-2'></i>
              </Button>
            </div>

            {/* Accordion */}
            <Accordion defaultActiveKey={1}>
              {jobs.map((job, indx) => (
                <AccordionCard key={indx} eventKey={indx}>
                  <Card.Body>
                    <div className='d-flex justify-content-between mb-2'>
                      <div className='d-flex align-items-center'>
                        <Image src={job.company.logo} width={24} height={24} alt='Company logo' />
                        <span className='fs-sm text-dark opacity-80 ms-2 ps-1'>{job.company.name}</span>
                      </div>
                      {job.badges && <>
                        {job.badges.map((badge, indx) => {
                          return <Badge key={indx} pill bg={`faded-${badge[0]}`} className='fs-sm'>{badge[1]}</Badge>
                        })}
                      </>}
                    </div>
                    <h3 className='h6 card-title pt-1 mb-0'>{job.title}</h3>
                  </Card.Body>
                  <Accordion.Collapse eventKey={indx}>
                    <Card.Body className='mt-n1 pt-0'>
                      <p className='fs-sm'>
                        {job.description}&nbsp;
                        <Link href={job.href}>Read more...</Link>
                      </p>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='fs-sm'>
                          <span className='text-nowrap me-3'>
                            <i className='fi-map-pin text-muted me-1'></i>
                            {job.location}
                          </span>
                          <span className='text-nowrap me-3'>
                            <i className='fi-cash fs-base text-muted me-1'></i>
                            {job.salary}
                          </span>
                        </div>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Add to Saved jobs</Tooltip>}>
                          <Button variant='light' size='xs' className='btn-icon shadow-sm rounded-circle text-primary'>
                            <i className='fi-heart'></i>
                          </Button>
                        </OverlayTrigger>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </AccordionCard>
              ))}
            </Accordion>
          </Col>
          <Col xs={12} md={1}>
            <hr className='hr-vertical mx-auto'/>
          </Col>
          <Col xs={12} md={5} className='text-center text-md-start'>
            <div className='mb-4 text-center'>
              <div className='d-inline-block'>
                <ImageLoader src='/images/job-board/illustrations/post-resume-cta2.svg' width={416} height={375} alt='Illustration' />
              </div>
            </div>
            <h2 className='h3 pt-2 mb-4'>Professional CV is your ticket to the dream job</h2>
            <p className='pb-md-3'>Create a great resume on Finder and take a step toward finding your dream job!</p>
            <Button as={Link} href='/job-board/post-resume-1' size='lg' variant='primary rounded-pill' className='ms-sm-auto'>
              Post resume
              <i className='fi-chevron-right fs-sm ms-2'></i>
            </Button>
          </Col>
        </Row>
      </Container>


      {/* Jobs by city */}
      <Container as='section' className='pt-2 pt-sm-0 pb-md-2 mb-5 mb-md-4'>
        <div className='d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2'>
          <h2 className='h3 mb-sm-0'>Jobs by city</h2>
          <Button as={Link} href='/job-board/catalog' variant='link fw-normal p-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>

        {/* Carousel */}
        <div className='position-relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prev',
              nextEl: '#next'
            }}
            pagination={{
              el: '#citiesPagination',
              clickable: true
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              420: { slidesPerView: 2 },
              700: { slidesPerView: 3 },
              850: { slidesPerView: 4 },
              1300: { slidesPerView: 5, pagination: false }
            }}
            className='mx-n2'
          >
            {/* Cities */}
            {cities.map((city, indx) => (
              <SwiperSlide key={indx} className='h-auto' style={{padding: '.75rem .75rem 1rem .75rem'}}>
                <div className='position-relative text-center'>
                  <div className='bg-secondary rounded-3 p-4 mb-3'>
                    <div className='d-inline-block'>
                      <ImageLoader src={city.image} width={192} height={148} alt={city.name} />
                    </div>
                  </div>
                  <Link href={city.href} className='nav-link stretched-link p-0'>{city.name}</Link>
                  <span className='fs-xs'>{city.jobs} jobs</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prev' variant='prev' className='d-none d-xxl-block mt-n5 ms-n5' />
          <Button id='next' variant='next' className='d-none d-xxl-block mt-n5 me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='citiesPagination' className='swiper-pagination position-relative bottom-0 mt-3 pb-3'></div>
      </Container>


      {/* Top companies */}
      <Container as='section' className='pb-4 mb-2 mb-md-3 mt-n2 mt-sm-0'>
        <h2 className='h3 text-center text-sm-start mb-sm-4'>Top companies</h2>

        {/* Carousel */}
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '#companiesPagination',
            clickable: true
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            680: { slidesPerView: 4 },
            850: { slidesPerView: 5 },
            1100: { slidesPerView: 6, pagination: false }
          }}
          className='mx-n2'
        >
          {/* Cities */}
          {companies.map((company, indx) => (
            <SwiperSlide key={indx} className='h-auto' style={{padding: '.75rem .75rem 1rem .75rem'}}>
              <ImageSwap
                href={company.href}
                swapFrom={{
                  imgSrc: company.image.srcGray,
                  imgSize: company.image.size,
                  imgAlt: company.image.alt
                }}
                swapTo={{
                  imgSrc: company.image.src,
                  imgSize: company.image.size,
                  imgAlt: company.image.alt
                }}
                className='mb-2 me-sm-2'
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External pagination (bullets) buttons */}
        <div id='companiesPagination' className='swiper-pagination position-relative bottom-0 pb-3'></div>
      </Container>


      {/* Mobile app CTA */}
      <Container as='section' className='pb-5 mb-md-4'>
        <div className='bg-faded-accent rounded-3 px-3 pt-5 pt-md-0'>
          <Row className='align-items-center'>
            <Col xs={12} md={{span: 4, order: 2}} className='text-center'>
              <h2 className='mb-md-4'>Download Our App</h2>
              <p className='fs-lg mb-4 mb-md-0'>Now finding the new job just got even easier with our new app!</p>
            </Col>
            <Col xs={12} md={{span: 4, order: 3}}>
              <div className='d-flex flex-wrap flex-md-column justify-content-center align-items-center me-md-n4 me-lg-n5'>
                <MarketButton href='#' market='apple' style={{width: '178px'}} className='mx-2 mb-3' />
                <MarketButton href='#' market='google' style={{width: '178px'}} className='mx-2 mb-3 mb-md-0' />
              </div>
            </Col>
            <Col xs={12} md={{span: 4, order: 1}} className='mb-n1 pt-2 pt-md-4 text-center'>
              <div className='d-inline-block'>
                <ImageLoader src='/images/job-board/home-mobile.png' width={255} height={216} alt='Illustration' />
              </div>
            </Col>
          </Row>
        </div>
      </Container>


      {/* Blog */}
      <Container as='section' className='pb-4 pb-md-5 mb-4 mb-md-5'>
        <div className='d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2'>
          <h2 className='h3 mb-sm-0'>Online journal by top HRs</h2>
          <Button as={Link} href='/job-board/blog' variant='link fw-normal p-0'>
            Go to blog
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>
        <Row className='gy-4'>

          {/* Blog featured item */}
          <Col md={5}>
            <BlogCard
              type='card'
              href='/job-board/blog-single'
              img={{
                src: '/images/job-board/blog/03.jpg',
                size: [1052, 424],
                alt: 'Image'
              }}
              category={{
                href: '#',
                title: 'Guides'
              }}
              title='How to Hire World-Class Engineers'
              text='Nunc, hac augue ante in facilisi id. Consectetur egestas orci, arcu ac tellus. Morbi orci, nunc dictum...'
              author={{
                href: '#',
                img: '/images/avatars/16.png',
                name: 'Bessie Cooper'
              }}
              date='May 23'
              comments='4 comments'
              badges={[['faded-info rounded-pill', 'New']]}
            />
          </Col>

          {/* Blog item */}
          <Col md={7}>
            <Row sm={2} className='gy-4'>
              <Col>
                <BlogCard
                  type='card'
                  href='/job-board/blog-single'
                  img={{
                    src: '/images/job-board/blog/04.jpg',
                    size: [722, 524],
                    alt: 'Image'
                  }}
                  category={{
                    href: '#',
                    title: 'Guides'
                  }}
                  title='How to Choose Your First Job In Tech'
                  author={{
                    href: '#',
                    img: '/images/avatars/18.png',
                    name: 'Annette Black'
                  }}
                  date='May 21'
                  comments='No comments'
                />
              </Col>
              <Col>
                <BlogCard
                  type='card'
                  href='/job-board/blog-single'
                  img={{
                    src: '/images/job-board/blog/05.jpg',
                    size: [722, 524],
                    alt: 'Image'
                  }}
                  category={{
                    href: '#',
                    title: 'Tips & Advice'
                  }}
                  title='15 Tips for a Better Resume'
                  author={{
                    href: '#',
                    img: '/images/avatars/19.png',
                    name: 'Ralph Edwards'
                  }}
                  date='May 19'
                  comments='1 comment'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </JobBoardPageLayout>
  )
}

export default HomePage
