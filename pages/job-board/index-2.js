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
import StepCard from '../../components/StepCard'
import MarketButton from '../../components/MarketButton'
import PricingPlan from '../../components/PricingPlan'
import Blockquote from '../../components/Blockquote'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const HomeAltPage = () => {

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

  return (
    <JobBoardPageLayout
      pageTitle='Home v.2'
      activeNav='Home'
    >

      {/* Hero */}
      <section className='bg-dark pb-3 pt-5'>
        <Container className='py-5'>
          <Row className='align-items-center mt-2 mt-md-0 pt-md-4 py-lg-5'>
            <Col xs={12} md={{span: 4, order: 'last'}} className='mb-5 mb-md-0'>
              <CursorParallax className='mx-auto' style={{maxWidth: '416px'}}>
                <Layer depth={0.1}>
                  <Image priority src='/images/job-board/hero-banner-2/layer01.svg' width={416} height={478} alt='Layer' />
                </Layer>
                <Layer depth={0.15}>
                  <Image priority src='/images/job-board/hero-banner-2/layer02.svg' width={416} height={478} alt='Layer' />
                </Layer>
                <Layer depth={0.2}>
                  <Image priority src='/images/job-board/hero-banner-2/layer03.svg' width={416} height={478} alt='Layer' />
                </Layer>
                <Layer depth={0.4}>
                  <Image priority src='/images/job-board/hero-banner-2/layer04.svg' width={416} height={478} alt='Layer' />
                </Layer>
                <Layer depth={0.16}>
                  <Image priority src='/images/job-board/hero-banner-2/layer05.svg' width={416} height={478} alt='Layer' />
                </Layer>
                <Layer depth={0.2}>
                  <Image priority src='/images/job-board/hero-banner-2/layer06.svg' width={416} height={478} alt='Layer' />
                </Layer>
                <Layer depth={0.25}>
                  <Image priority src='/images/job-board/hero-banner-2/layer07.svg' width={416} height={478} alt='Layer' />
                </Layer>
                <Layer depth={0.2}>
                  <Image priority src='/images/job-board/hero-banner-2/layer08.svg' width={416} height={478} alt='Layer' />
                </Layer>
              </CursorParallax>
            </Col>
            <Col xs={12} md={{span: 8, order: 'first'}}>
              <h1 className='display-4 text-light pb-3 mb-4 mb-lg-5' style={{maxWidth: '746px'}}>
                Find a <span className='text-primary'>perfect candidate</span> for your job
              </h1>

              {/* Search form */}
              <FormGroup className='form-group-light d-block rounded-xl-pill mb-2 my-md-4 mt-xl-5'>
                <Row className='align-items-center g-0 ms-n2'>
                  <Col xs={12} xl={4}>
                    <InputGroup size='lg' className='border-end-xl border-light'>
                      <InputGroup.Text className='text-light rounded-pill opacity-50 ps-3'>
                        <i className='fi-search'></i>
                      </InputGroup.Text>
                      <Form.Control placeholder='Search site...' />
                    </InputGroup>
                  </Col>
                  <hr className='hr-light d-xl-none my-2'/>
                  <Col xs={12} xl={8} className='d-lg-flex align-items-center'>
                    <div className='d-sm-flex w-100'>
                      <DropdownSelect
                        defaultValue='Category'
                        icon='fi-list'
                        darkMenu
                        options={[
                          ['', 'Accounting'],
                          ['', 'Marketing & PR'],
                          ['', 'Medicine'],
                          ['', 'IT'],
                          ['', 'HoReCa'],
                          ['', 'Fitness & sports'],
                          ['', 'Transportation']
                        ]}
                        variant='link'
                        className='w-100 border-end-sm border-light'
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
                        className='w-100'
                      />
                    </div>
                    <hr className='hr-light d-xl-none mt-2 mb-3'/>
                    <Button size='lg' variant='primary rounded-pill' className='w-100 w-lg-auto ms-auto'>
                      Find resumes
                    </Button>
                  </Col>
                </Row>
              </FormGroup>

              {/* Statistics */}
              <Row className='d-none d-lg-flex pt-5'>
                <Col xs={12} xl={10} className='d-flex'>
                  <div className='border-end border-light pe-4 me-3'>
                    <div className='text-light me-3'>
                      <div className='fs-3 fw-bold mb-1'>1,2 mln</div>
                      <div className='fs-sm opacity-70'>Job applications</div>
                    </div>
                  </div>
                  <div className='border-end border-light px-4 me-3'>
                    <div className='text-light me-3'>
                      <div className='fs-3 fw-bold mb-1'>8K</div>
                      <div className='fs-sm opacity-70'>Resumes posted</div>
                    </div>
                  </div>
                  <div className='border-end border-light px-4 me-3'>
                    <div className='text-light me-3'>
                      <div className='fs-3 fw-bold mb-1'>5K</div>
                      <div className='fs-sm opacity-70'>Jobs posted</div>
                    </div>
                  </div>
                  <div className='ps-4'>
                    <div className='text-light'>
                      <div className='fs-3 fw-bold mb-1'>10K</div>
                      <div className='fs-sm opacity-70'>Active members</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Categories */}
      <section className='position-relative bg-white rounded-xxl-4 pt-md-3 zindex-5' style={{marginTop: '-30px'}}>
        <Container className='pt-5 pb-3 mb-4 mb-md-5'>
          <h2 className='h3 pb-2 pb-sm-3'>Resumes by category</h2>
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


      {/* Post vacancy CTA */}
      <Container as='section' className='pb-5 mb-md-3'>
        <Row className='align-items-center'>
          <Col xs={12} md={5} lg={4} className='text-center text-md-start'>
            <h2 className='mb-md-4'>Find an employee you need right now</h2>
            <p className='fs-lg p-2 pb-md-3'>Elementum magna ac tempor, facilisis tristique mauris. Et penatibus sit sed in ante in ultrices. Senectus aliquam dictum eleifend.</p>
            <Button as={Link} href='/job-board/post-resume-1' size='lg' variant='primary rounded-pill' className='ms-sm-auto'>
              Post vacancy
              <i className='fi-chevron-right fs-sm ms-2'></i>
            </Button>
          </Col>
          <Col xs={12} md={7} lg={8} className='pt-4 pt-md-0 text-md-end text-center'>
            <div className='d-inline-block'>
              <ImageLoader src='/images/job-board/illustrations/post-vacancy-cta.svg' width={702} height={380} alt='Illustration' />
            </div>
          </Col>
        </Row>
      </Container>


      {/* Steps */}
      <Container as='section' className='pb-5 mb-md-3'>
        <Row xs={1} sm={2} lg={4} className='g-2 g-xl-4'>
          <Col>
            <StepCard
              number='01'
              title='Create an Account'
              text='In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras arcu sed felis.'
            />
          </Col>
          <Col>
            <StepCard
              number='02'
              title='Create a Job Ad'
              text='Convallis suspendisse libero integer duis luctus laoreet pellentesque. Aenean eget tristique.'
            />
          </Col>
          <Col>
            <StepCard
              number='03'
              title='Select a Pricing Plan'
              text='Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui odio ege volutpat.'
            />
          </Col>
          <Col>
            <StepCard
              number='04'
              title='Post Your Job'
              text='Sit auctor aliquam leo duis. Praesent ut penatibus faucibus nibh arcu tempor adipiscing integer duis.'
            />
          </Col>
        </Row>
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


      {/* Pricing */}
      <Container as='section' className='pt-2 pt-sm-0 py-4 pb-md-5 mb-2 mb-md-1'>
        <h2 className='h3 pb-3'>Advertise your vacancy</h2>
        <Row>
          <Col sm={6} md={4} className='mb-4'>
            <PricingPlan
              className='border-0 shadow-sm'
              image={{
                src: '/images/pricing/icon-1.svg',
                width: '72',
                height: '88',
                alt: 'Icon'
              }}
              title='Easy Start'
              price='$5'
              period='month'
              options={[
                {title: '3x more views', available: true},
                {title: 'Top ads for 3 days', available: true},
                {title: 'Moving up the list', available: false},
                {title: 'Featured badge in the results', available: false}
              ]}
              button={{
                href: '#',
                title: 'Choose plan',
                variant: 'outline-primary rounded-pill',
                props: {
                  onClick: () => console.log('You have chosen Easy Start plan')
                }
              }}
            />
          </Col>
          <Col sm={6} md={4} className='mb-4'>
            <PricingPlan
              featured
              image={{
                src: '/images/pricing/icon-2.svg',
                width: '72',
                height: '88',
                alt: 'Icon'
              }}
              title='Fast Sale'
              price='$15'
              period='month'
              options={[
                {title: '10x more views', available: true},
                {title: 'Top ads for 3 days', available: true},
                {title: 'Moving up the list', available: true},
                {title: 'Featured badge in the results', available: false}
              ]}
              button={{
                href: '#',
                title: 'Choose plan',
                variant: 'primary rounded-pill',
                props: {
                  onClick: () => console.log('You have chosen Fast Sale plan')
                }
              }}
            />
          </Col>
          <Col md={4} className='mb-4'>
            <PricingPlan
              className='border-0 shadow-sm'
              image={{
                src: '/images/pricing/icon-3.svg',
                width: '72',
                height: '88',
                alt: 'Icon'
              }}
              title='Turbo Boost'
              price='$25'
              period='month'
              options={[
                {title: '10x more views', available: true},
                {title: 'Top ads for 3 days', available: true},
                {title: 'Moving up the list', available: true},
                {title: 'Featured badge in the results', available: true}
              ]}
              button={{
                href: '#',
                title: 'Choose plan',
                variant: 'outline-primary rounded-pill',
                props: {
                  onClick: () => console.log('You have chosen Turbo Boost plan')
                }
              }}
            />
          </Col>
        </Row>
      </Container>


      {/* Resumes by city */}
      <Container as='section' className='pt-2 pt-sm-0 pb-5 mb-md-2'>
        <div className='d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2'>
          <h2 className='h3 mb-sm-0'>Resumes by city</h2>
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


      {/* Reviews */}
      <Container as='section' className='pt-lg-2 pb-5 mb-md-4 mb-lg-5'>
        <Row>
          <Col md={4} className='mb-3 mb-md-0'>
            <ImageLoader src='/images/job-board/illustrations/reviews.svg' width={416} height={300} alt='Illustration' />
          </Col>
          <Col lg={1} className='d-none d-lg-block'>
            <hr className='hr-vertical mx-auto'></hr>
          </Col>

          {/* Testimonial carousel */}
          <Col md={8} lg={7}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              navigation={{
                prevEl: '#prev1',
                nextEl: '#next2'
              }}
              loop
              grabCursor
              className='mx-n3'
            >
              <SwiperSlide className='h-auto p-3'>
                <Card className='border-0 shadow-sm h-100'>
                  <Card.Body
                    as={Blockquote}
                    author={{
                      thumbSrc: '/images/job-board/company/zalo-lg.png',
                      thumbSize: 56,
                      name: 'Zalo Tech Company',
                      position: 'Floyd Miles, Head of HR Department'
                    }}
                  >
                    Eu massa, pharetra massa integer. Sed molestie sollicitudin morbi ultrices. Odio is euismodtelle faucibus. Venenatis nunc, tristique turpis cras sodales. In dui, viverra et ac. Id justo, varius nunc, faucibus erat proin elit. Amet diam, aliquet nec quis vel. Donec ut quisque in lorem sapien luctus pellentesque.
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='h-auto p-3'>
                <Card className='border-0 shadow-sm h-100'>
                  <Card.Body
                    as={Blockquote}
                    author={{
                      thumbSrc: '/images/job-board/company/kibana-lg.png',
                      thumbSize: 56,
                      name: 'Elastic Kibana',
                      position: 'Guy Hawkins, Senior HR'
                    }}
                  >
                    Diam dictumst scelerisque vel, nunc etiam tincidunt senectus ullamcorper. Scel pulvinarnettes luctus pellentesque ultrices congue blandit. Nec, blandit nisi odio donec sagittis dui ornare sodales ultricies. Rhoncus mattis lacus consequat dolor lectus dui cursus orci. Volutpat tortor quam odio sed arcu. 
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Swiper>
            <div className='d-flex justify-content-md-start justify-content-center mt-2 ms-n3'>
              <Button id='prev1' variant='prev' className='position-relative ms-3' />
              <Button id='next2' variant='next' className='position-relative ms-3' />
            </div>
          </Col>
        </Row>
      </Container>


      {/* CTA */}
      <Container as='section' className='pt-lg-4 pt-3 pb-5 mb-md-4 mb-lg-5 text-center'>
        <h2 className='pb-4'>The fastest way to find what you need</h2>
        <Button as={Link} href='#' size='lg' variant='primary rounded-pill' className='w-sm-auto w-100'>
          Get started
          <i className='fi-chevron-right fs-sm ms-2'></i>
        </Button>
      </Container>
    </JobBoardPageLayout>
  )
}

export default HomeAltPage
