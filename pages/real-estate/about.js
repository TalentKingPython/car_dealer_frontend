import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ImageLoader from '../../components/ImageLoader'
import SocialButton from '../../components/SocialButton'
import ImageSwap from '../../components/ImageSwap'
import Blockquote from '../../components/Blockquote'
import BlogCard from '../../components/BlogCard'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const AboutPage = () => {

  // Team array
  const team = [
    {
      img: '/images/real-estate/about/team/01.jpg',
      name: 'Devon Lane',
      position: 'Real Estate Agent',
      socials: [
        ['facebook', '#'],
        ['twitter', '#'],
        ['instagram', '#']
      ]
    },
    {
      img: '/images/real-estate/about/team/02.jpg',
      name: 'Dianne Russell',
      position: 'Finance Director',
      socials: [
        ['facebook', '#'],
        ['twitter', '#'],
        ['instagram', '#']
      ]
    },
    {
      img: '/images/real-estate/about/team/03.jpg',
      name: 'Ronald Richards',
      position: 'Sales Executive',
      socials: [
        ['facebook', '#'],
        ['twitter', '#'],
        ['instagram', '#']
      ]
    },
    {
      img: '/images/real-estate/about/team/04.jpg',
      name: 'Albert Flores',
      position: 'Property Manager',
      socials: [
        ['facebook', '#'],
        ['twitter', '#'],
        ['instagram', '#']
      ]
    }
  ]

  // Partners (logos) array
  const partners = [
    ['#', '/images/real-estate/brands/01_gray.svg', '/images/real-estate/brands/01_color.svg'],
    ['#', '/images/real-estate/brands/02_gray.svg', '/images/real-estate/brands/02_color.svg'],
    ['#', '/images/real-estate/brands/03_gray.svg', '/images/real-estate/brands/03_color.svg'],
    ['#', '/images/real-estate/brands/04_gray.svg', '/images/real-estate/brands/04_color.svg'],
    ['#', '/images/real-estate/brands/05_gray.svg', '/images/real-estate/brands/05_color.svg'],
    ['#', '/images/real-estate/brands/06_gray.svg', '/images/real-estate/brands/06_color.svg']
  ]

  // Recent blog posts array
  const blog = [
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/05.jpg',
      category: {
        href: '#',
        title: 'Property Market Analysis'
      },
      title: 'When Is the Right Time to Downsize Your Home?',
      author: {
        href: '#',
        img: '/images/avatars/12.jpg',
        name: 'Cody Fisher'
      },
      date: 'Nov 24',
      comments: 'No comments'
    },
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/01.jpg',
      category: {
        href: '#',
        title: 'Tips & Advice'
      },
      title: '7 Tips for Achieving Maximum Coziness',
      author: {
        href: '#',
        img: '/images/avatars/08.jpg',
        name: 'Darrell Steward'
      },
      date: 'Dec 15',
      comments: '2 comments'
    },
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/03.jpg',
      category: {
        href: '#',
        title: 'Inspiration'
      },
      title: '5 Easy-to-Ambitious Projects to Improve Your Home',
      author: {
        href: '#',
        img: '/images/avatars/03.jpg',
        name: 'Kathryn Murphy'
      },
      date: 'Nov 28',
      comments: '4 comments'
    }
  ]

  return (
    <RealEstatePageLayout
      pageTitle='About'
      activeNav='Pages'
    >
      <Container className='mt-5 mb-md-4 pt-5'>

        {/* Breadcrumbs */}
        <Breadcrumb className='mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/real-estate'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>About</Breadcrumb.Item>
        </Breadcrumb>
      </Container>


      {/* Page header */}
      <Container as='section' className='mb-5 pb-2'>
        <Row className='gy-4 align-items-center justify-content-center'>

          {/* Hero content */}
          <Col xs={{span: 12, order: 'last'}} sm={9} md={{span: 5, order: 'first'}} lg={4} className='text-md-start text-center'>
            <h1 className='mb-4'>About Finder</h1>
            <p className='mb-4 pb-3 fs-lg'>We provide a complete service for the sale, purchase or rental of real estate. We have been operating more than 10 years. Search millions of apartments and houses on Finder.</p>
            <Button as={Link} href='/real-estate/contacts' size='lg' variant='primary'>Contact us</Button>
          </Col>

          {/* Hero carousel */}
          <Col xs={{span: 12, order: 'first'}} md={{span: 6, order: 'first', offset: 1}} lg={7}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{
                el: '#bullets',
                clickable: true
              }}
              spaceBetween={16}
              grabCursor
              loop
            >
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/about/hero/01.jpg' width={792} height={510} alt='Image' className='rounded-3' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/about/hero/02.jpg' width={792} height={510} alt='Image' className='rounded-3' />
              </SwiperSlide>
            </Swiper>

            {/* External pagination (bullets) */}
            <div id='bullets' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
          </Col>
        </Row>
      </Container>


      {/* Features (Why choose us?) */}
      <Container as='section' className='text-center text-md-start mb-md-4 mb-xl-5 pb-md-4'>
        <h2 className='h3 mb-4'>Why choose us?</h2>
        <Row xs={1} md={3} className='pb-2'>
          <Col>
            <Card className='border-0'>
              <Card.Body>
                <div className='d-inline-block text-primary mb-3'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='currentColor'>
                    <path d='M13.585 21.456a10.416 10.416 0 1 0 20.832 0c0-5.76-4.656-10.464-10.416-10.464s-10.416 4.704-10.416 10.464zm18.096 0c0 4.224-3.456 7.68-7.68 7.68s-7.68-3.456-7.68-7.68 3.456-7.68 7.68-7.68 7.68 3.408 7.68 7.68zm-10.225-.96a1.36 1.36 0 0 0-1.92 0 1.36 1.36 0 0 0 0 1.92l2.352 2.352c.24.24.624.384.96.384s.72-.144.96-.384l4.512-4.512a1.36 1.36 0 0 0 0-1.92 1.36 1.36 0 0 0-1.92 0l-3.552 3.552-1.392-1.392zM42 10.512C29.568 5.568 24.96 1.584 24.912 1.536c-.528-.48-1.296-.48-1.824 0C23.04 1.584 18.48 5.52 6 10.512c-.528.192-.864.72-.864 1.248 0 24.576 17.424 34.464 18.192 34.848.192.096.432.192.672.192a1.2 1.2 0 0 0 .672-.192c.72-.384 18.192-10.272 18.192-34.848 0-.528-.336-1.056-.864-1.248zM24 43.824C20.928 41.808 8.304 32.352 7.872 12.72 17.328 8.88 22.128 5.664 24 4.32c1.872 1.392 6.672 4.56 16.128 8.4C39.744 32.352 27.072 41.808 24 43.824z'></path>
                  </svg>
                </div>
                <Card.Title as='h5' className='pb-1'>Safety is our priority</Card.Title>
                <Card.Text className='mb-0'>Vel et aliquet diam vulputate hendrerit lorem eget amet adipiscing. At ut ut consectetur in sed massa arcu risus sed.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='border-0'>
              <Card.Body>
                <div className='d-inline-block text-primary mb-3'>
                  <svg className='mb-3' xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='currentColor'>
                    <path d='M39.976 40.416l-5.667-26.529c-.098-.44-.391-.831-.782-1.026L20.531 6.217l-.928-4.202c-.195-.831-.977-1.368-1.808-1.173s-1.368.977-1.172 1.808l.879 4.202-9.136 11.335c-.293.342-.391.831-.293 1.27l5.618 26.529c.195.831.977 1.368 1.808 1.173l23.304-4.934a1.59 1.59 0 0 0 1.173-1.808zm-23.597 3.469L11.2 19.554l7.182-8.843.635 2.931c.195.831.977 1.368 1.808 1.172s1.368-.977 1.172-1.808l-.635-2.931 10.162 5.179 5.179 24.33-20.324 4.299zm7.963-17.149l-2.052.44a1.54 1.54 0 0 1-1.857-1.27c-.146-.831.44-1.612 1.27-1.759l2.052-.44c.684-.146 1.368.195 1.71.782.098.244.342.342.586.293l1.954-.44c.293-.049.489-.391.391-.684-.733-2.003-2.736-3.225-4.837-3.029l-.391-1.954c-.049-.293-.342-.489-.635-.391l-1.954.391c-.293.049-.489.342-.391.635l.391 1.954c-2.247.733-3.664 3.029-3.127 5.374.586 2.492 3.078 4.006 5.521 3.469l2.003-.44c.831-.195 1.661.293 1.857 1.124.244.879-.293 1.71-1.172 1.905l-2.101.44c-.684.147-1.368-.195-1.71-.782-.098-.195-.342-.342-.586-.293l-1.954.44c-.342.049-.488.391-.391.684.733 2.003 2.736 3.224 4.837 3.029l.391 1.905c.049.293.342.489.635.391l1.954-.391c.293-.049.489-.342.391-.635l-.391-1.905c2.247-.733 3.664-3.029 3.127-5.374-.538-2.492-3.029-4.006-5.521-3.469z'></path>
                  </svg>
                </div>
                <Card.Title as='h5' className='pb-1'>Fair price</Card.Title>
                <Card.Text className='mb-0'>Tincidunt mauris sit eu, lacinia pharetra, lorem neque dui. Maecenas ultricies laoreet facilisis fusce amet, consequat neque.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='border-0'>
              <Card.Body>
                <div className='d-inline-block text-primary mb-3'>
                  <svg className='mb-3' xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='none'>
                    <path fillRule='evenodd' d='M5.493 32.863a6.53 6.53 0 0 1-5.446-6.441v-3.981a6.53 6.53 0 0 1 1.913-4.619c1.225-1.225 2.887-1.913 4.619-1.913h.435C7.709 7.137 15.048.234 24 .234s16.291 6.903 16.986 15.675h.435a6.53 6.53 0 0 1 6.532 6.532v3.981a6.53 6.53 0 0 1-6.532 6.532h-1.928a1.45 1.45 0 0 1-1.447-1.448V17.274A14.05 14.05 0 0 0 24 3.228 14.05 14.05 0 0 0 9.954 17.274v14.232a1.45 1.45 0 0 1-1.447 1.448h0a8.87 8.87 0 0 0 8.821 7.935h.199c.248-.839.702-1.611 1.332-2.241.991-.991 2.336-1.548 3.738-1.548h2.807a5.29 5.29 0 0 1 5.287 5.286 5.29 5.29 0 0 1-5.287 5.287h-2.807a5.29 5.29 0 0 1-5.071-3.789h-.198c-3.147 0-6.164-1.25-8.39-3.475-2.025-2.025-3.242-4.707-3.445-7.545zm22.203 9.523c0-1.266-1.026-2.292-2.292-2.292h-2.807a2.29 2.29 0 0 0-2.292 2.292c0 1.266 1.026 2.292 2.292 2.292h2.807c1.266 0 2.292-1.026 2.292-2.292zM6.96 18.903h-.381a3.54 3.54 0 0 0-3.538 3.538v3.981a3.54 3.54 0 0 0 3.538 3.538h.381V18.903zm34.08 0V29.96h.381a3.54 3.54 0 0 0 3.538-3.538v-3.981a3.54 3.54 0 0 0-3.538-3.538h-.381z' fill='currentColor'></path>
                  </svg>
                </div>
                <Card.Title as='h5' className='pb-1'>Support 24/7</Card.Title>
                <Card.Text className='mb-0'>Id velit, dui condimentum dictumst sapien quis a elementum dignissim. Dignissim ultrices scelerisque ultrices nisi.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      {/* Steps (How it works) */}
      <Container as='section' className='mb-5 pb-2 pb-lg-4'>
        <Row className='gy-4 pb-2 pb-sm-4'>
          <Col xs={12} md={5} className='text-md-start text-center'>
            <div className='d-inline-block'>
              <ImageLoader src='/images/real-estate/illustrations/find.svg' width={526} height={500} alt='Illustration' />
            </div>
          </Col>
          <Col xs={12} md={7} lg={{span: 6, offset: 1}}>
            <h2 className='h3 mb-lg-5 mb-sm-4'>How it works</h2>
            <div className='steps steps-vertical'>
              <div className='step active'>
                <div className='step-progress'><span className='step-number'>1</span></div>
                <div className='step-label ms-4'>
                  <h3 className='h5 mb-2 pb-1'>Choose your property</h3>
                  <p className='mb-0'>Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis risus, donec in ac ultricies tempor eu, amet.</p>
                </div>
              </div>
              <div className='step active'>
                <div className='step-progress'><span className='step-number'>2</span></div>
                <div className='step-label ms-4'>
                  <h3 className='h5 mb-2 pb-1'>See the property directly</h3>
                  <p className='mb-0'>Id orci senectus dignissim magna nec diam bibendum at. Morbi quis turpis nulla condimentum est elementum. Tristique in accumsan eget vestibulum volutpat pretium. Sed id elit duis turpis diam justo. Dignissim blandit rutrum venenatis.</p>
                </div>
              </div>
              <div className='step active'>
                <div className='step-progress'><span className='step-number'>3</span></div>
                <div className='step-label ms-4'>
                  <h3 className='h5 mb-2 pb-1'>Easy payment</h3>
                  <p className='mb-0'>Ut mattis nascetur aliquam neque velit nunc sed. Morbi congue mauris amet ultrices molestie tellus proin odio diam. Feugiat elit, habitasse egestas egestas id nec potenti. Donec convallis donec tristique mattis et viverra.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


      {/* Team */}
      <Container as='section' className='mb-5 pb-3 pb-md-4'>
        <div className='d-flex align-items-end justify-content-sm-between justify-content-center mb-3'>
          <h2 className='h3 mb-0 text-sm-start text-center'>Meet our professional team</h2>
          <div className='d-sm-flex d-none justify-content-center'>
            <Button id='teamPrev' variant='prev' className='position-relative mx-2' />
            <Button id='teamNext' variant='next' className='position-relative mx-2' />
          </div>
        </div>

        {/* Team carousel */}
        <div className='mx-md-n3 mx-n2'>
          <Swiper
            modules={[Navigation, Pagination]}
            grabCursor
            loop
            navigation={{
              prevEl: '#teamPrev',
              nextEl: '#teamNext'
            }}
            pagination={{
              el: '#teamPagination',
              clickable: true
            }}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              500: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3
              },
              992: {
                slidesPerView: 4
              }
            }}
          >
            {team.map((member, indx) => (
              <SwiperSlide key={indx} className='py-3 px-md-3 px-2'>
                <Card className='border-0 shadow-sm'>
                  <ImageLoader src={member.img} width={458} height={458} alt={member.name} className='card-img-top' />
                  <Card.Body className='text-center'>
                    <Card.Title as='h5' className='mb-2'>{member.name}</Card.Title>
                    <span className='d-inline-block mb-3 fs-sm'>{member.position}</span>
                    <div className='pt-1'>
                      {member.socials.map((social, indx) => (
                        <SocialButton key={indx} href={social[1]} variant='solid' brand={social[0]} roundedCircle className='mx-2' />
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id='teamPagination' className='swiper-pagination position-relative bottom-0 mt-4 mb-lg-3 d-lg-none d-flex'></div>
        </div>
      </Container>


      {/* Partners */}
      <Container as='section' className='mb-5 pb-3 pb-md-4'>
        <h2 className='h3 mb-4 text-center'>Our partners</h2>

        {/* Swiper slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            el: '#partnersPagination',
            clickable: true
          }}
          grabCursor
          breakpoints={{
            0: {
              slidesPerView: 2
            },
            480: {
              slidesPerView: 3
            },
            680: {
              slidesPerView: 4,
              spaceBetween: 12
            },
            860: {
              slidesPerView: 5,
              spaceBetween: 16
            },
            1100: {
              slidesPerView: 6,
              spaceBetween: 24
            }
          }}
        >
          {partners.map((partner, indx) => (
            <SwiperSlide key={indx} className='d-flex align-items-center justify-content-center h-auto'>
              <ImageSwap
                href={partner[0]}
                swapFrom={{
                  imgSrc: partner[1],
                  imgSize: [196, 80],
                  imgAlt: 'Image from'
                }}
                swapTo={{
                  imgSrc: partner[2],
                  imgSize: [196, 80],
                  imgAlt: 'Image to'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External pagination (bullets) buttons */}
        <div id='partnersPagination' className='swiper-pagination position-relative bottom-0 pt-3 pb-md-2'></div>
      </Container>


      {/* Testimonials */}
      <Container as='section' className='mb-5 pb-xl-5 pb-md-4'>
        <h2 className='h3 mb-3 text-center'>Hear from our customers</h2>
        <Row className='g-0 justify-content-center pb-lg-3'>
          <Col xs={12} lg={10} className='position-relative px-3'>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation={{
                prevEl: '#reviewsPrev',
                nextEl: '#reviewsNext'
              }}
              pagination={{
                el: '#reviewsPagination',
                clickable: true
              }}
              spaceBetween={24}
              loop
              grabCursor
              className='mx-n3'
            >
              <SwiperSlide className='h-auto'>
                <article className='d-flex flex-md-row flex-column h-100 p-3'>
                  <div className='d-md-flex d-none me-4 flex-shrink-0'>
                    <ImageLoader src='/images/real-estate/about/testimonials/01.jpg' width={306} height={260} alt='Image' className='rounded-3' />
                  </div>
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
                </article>
              </SwiperSlide>
              <SwiperSlide className='h-auto'>
                <article className='d-flex flex-md-row flex-column h-100 p-3'>
                  <div className='d-md-flex d-none me-4 flex-shrink-0'>
                    <ImageLoader src='/images/real-estate/about/testimonials/02.jpg' width={306} height={260} alt='Image' className='rounded-3' />
                  </div>
                  <Card className='border-0 shadow-sm h-100'>
                    <Card.Body
                      as={Blockquote}
                      author={{
                        thumbSrc: '/images/job-board/company/elastic-lg.png',
                        thumbSize: 56,
                        name: 'Elastic Inc.',
                        position: 'Guy Hawkins, Senior HR'
                      }}
                    >
                      Eu massa, pharetra massa integer. Sed molestie sollicitudin morbi ultrices. Odio is euismodtelle faucibus. Venenatis nunc, tristique turpis cras sodales. In dui, viverra et ac. Id justo, varius nunc, faucibus erat proin elit. Amet diam, aliquet nec quis vel. Donec ut quisque in lorem sapien luctus pellentesque.
                    </Card.Body>
                  </Card>
                </article>
              </SwiperSlide>
            </Swiper>
            <Button id='reviewsPrev' variant='prev' className='d-lg-inline-block d-none mt-n4 ms-n5' />
            <Button id='reviewsNext' variant='next' className='d-lg-inline-block d-none mt-n4 me-n5' />
            <div id='reviewsPagination' className='swiper-pagination position-relative bottom-0 mt-lg-0 pt-3 mt-4'></div>
          </Col>
        </Row>
      </Container>


      {/* Find property CTA */}
      <Container as='section' className='mb-5 pb-sm-3 pb-lg-4'>
        <div className='bg-secondary rounded-3'>
          <Col xs={12} md={{span: 11, offset: 1}} className='d-flex align-items-center justify-content-between p-md-0 p-2'>
            <div className='me-md-5 py-md-5 px-md-0 p-4' style={{maxWidth: '526px'}}>
              <h2 className='mb-md-4'>
                Buy property with confidence. <br/>
                Sell without pressure.
              </h2>
              <p className='mb-4 pb-md-3 fs-lg'>Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. Vel metus odio at faucibus ac.</p>
              <Button as={Link} href='/real-estate/catalog?type=sale' size='lg' variant='primary'>
                <i className='fi-search me-2'></i>
                Find property
              </Button>
            </div>
            <Col xs={4} className='d-md-block d-none align-self-end px-0'>
              <div className='d-flex flex-shrink-0 mt-n5'>
                <ImageLoader src='/images/real-estate/about/01.png' width={396} height={442} alt='Cover image' />
              </div>
            </Col>
          </Col>
        </div>
      </Container>


      {/* Recent posts (Carousel on screens < 850px) */}
      <Container as='section' className='mb-5 pb-3 pb-lg-4'>
        <div className='d-sm-flex align-items-center justify-content-between mb-4 pb-2'>
          <h2 className='h3 mb-sm-0'>Our recent highlights</h2>
          <Button as={Link} href='/real-estate/blog' variant='link fw-normal ms-sm-3 p-0'>
            Go to blog
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>

        {/* Swiper slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '#blogPagination',
            clickable: true
          }}
          grabCursor
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 18
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 24
            }
          }}
        >

          {blog.map((item, indx) => (
            <SwiperSlide key={indx} className='d-flex'>
              <BlogCard
                href={item.href}
                img={{
                  src: item.img,
                  size: [476, 225],
                  alt: 'Image'
                }}
                category={item.category}
                title={item.title}
                author={item.author}
                date={item.date}
                comments={item.comments}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External pagination (bullets) buttons */}
        <div id='blogPagination' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-4'></div>
      </Container>
    </RealEstatePageLayout>
  )
}

export default AboutPage
