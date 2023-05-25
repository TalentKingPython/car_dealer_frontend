import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import ImageLoader from '../../components/ImageLoader'
import Steps, { Step } from '../../components/Steps'
import BlogCard from '../../components/BlogCard'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const AboutPage = () => {

  // Faturees array
  const features = [
    {
      image: '/images/car-finder/icons/car.svg',
      title: '~ 1 mln cars',
      text: 'Fringilla vivamus arcu faucibus malesuada. Dui aenean suspendisse a aliquet id gravida ut. Lorem lacinia sed mauris erat at nisl.'
    },
    {
      image: '/images/car-finder/icons/building.svg',
      title: '5 subsidiaries',
      text: 'Porttitor bibendum pharetra volutpat est. Vitae tortor magna gravida non lacus. Arcu auctor malesuada dui congue.'
    },
    {
      image: '/images/car-finder/icons/flag.svg',
      title: '8 countries',
      text: 'Duis tortor, vel nisi, leo vulputate sed quis. Ultrices arcu, amet aliquam id massa egestas ut. Dui, sed risus cursus magna dolor.'
    }
  ]

  // Story steps array
  const story = [
    {
      year: '2017',
      description: 'Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis risus, donec in ac ultricies tempor eu, amet.'
    },
    {
      year: '2018',
      description: 'Vitae erat ornare facilisi id sollicitudin turpis tempus, semper. Velit integer et volutpat, a. Massa ut amet amet, vitae nunc nulla sed.'
    },
    {
      year: '2020',
      description: 'Ut mattis nascetur aliquam neque velit nunc sed. Morbi congue mauris amet ultrices molestie tellus proin odio diam. Feugiat elit, habitasse egestas egestas id nec potenti. Donec convallis donec tristique mattis et viverra.'
    },
    {
      year: '2021',
      description: 'Tempor nullam pellentesque suspendisse nec. Arcu sagittis sed ut diam in ultrices. Leo lacinia feugiat interdum pellentesque nulla vitae duis.'
    }
  ]

  // Partner logos array
  const partners = [
    ['/images/car-finder/brands/provert.svg', 'Provert'],
    ['/images/car-finder/brands/pentel.svg', 'Pentel'],
    ['/images/car-finder/brands/chase.svg', 'Chase'],
    ['/images/car-finder/brands/real-seguros.svg', 'Real Seguros'],
    ['/images/car-finder/brands/build.svg', 'Build'],
    ['/images/car-finder/brands/cargil.svg', 'CargilL'],
  ]
  
  // Blog posts array
  const blog = [
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/04.jpg',
      category: {
        href: '#',
        title: 'Events'
      },
      title: 'Top 10 Classic Car Events',
      author: {
        href: '#',
        img: '/images/avatars/08.jpg',
        name: 'Jacob Jones'
      },
      date: 'May 8',
      comments: 'No comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/05.jpg',
      category: {
        href: '#',
        title: 'Inspiration'
      },
      title: '5 Predictions From the Past About the Future',
      author: {
        href: '#',
        img: '/images/avatars/09.jpg',
        name: 'Guy Hawkins'
      },
      date: 'Apr 25',
      comments: '6 comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/06.jpg',
      category: {
        href: '#',
        title: 'Test Drives'
      },
      title: 'This Year is All About New Harley Davidson',
      author: {
        href: '#',
        img: '/images/avatars/12.jpg',
        name: 'Cody Fisher'
      },
      date: 'Nov 24',
      comments: '3 comments'
    }
  ]

  return (
    <CarFinderPageLayout
      pageTitle='About'
      activeNav='Pages'
    >
      <Container className='mt-5 pt-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='breadcrumb-light pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/car-finder'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>About</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Page header */}
      <Container as='section' className='mb-5 pb-lg-5'>
        <Row className='align-items-center justify-content-lg-start justify-content-center flex-lg-nowrap gy-4'>
          <Col xs={12} lg={9}>
            <ImageLoader
              src='/images/car-finder/about/hero-img.jpg'
              width={966}
              height={500}
              alt='Hero image'
              light='true'
              className='rounded-3'
            />
          </Col>
          <Col xs={12} sm={9} lg={4} className='position-relative ms-lg-n5 text-lg-start text-center'>
            <div className='ms-lg-n5 pe-xl-5'>
              <h1 className='mb-lg-4 text-light'>About us</h1>
              <p className='mb-4 pb-lg-3 fs-lg text-light opacity-70'>We believe that car buying and selling should be straight-forward and enjoyable, not time-consuming, complicated or stressful.</p>
              <Button as={Link} href='/car-finder/catalog?view=list' size='lg' variant='primary' className='w-sm-auto w-100'>
                <i className='fi-search me-2'></i>
                Search car
              </Button>
            </div>
          </Col>
        </Row>
      </Container>


      {/* Features (Carousel on screns < 900px) */}
      <Container as='section' className='mb-5 pb-lg-5'>
        <h2 className='mb-4 pb-2 text-light text-center'>We are new and growing fast</h2>
        <div className='position-relative'>
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: '#featuresPagination',
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
              900: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }}
          >
            {features.map((feature, indx) => (
              <SwiperSlide key={indx} className='h-auto'>
                <Card className='card-light card-hover h-100'>
                  <Card.Body className='icon-box text-center'>
                    <div className='icon-box-media bg-dark text-light mx-auto mb-3 d-inline-flex align-items-center justify-content-center' style={{width: '4.5rem', height: '4.5rem'}}>
                      <ImageLoader src={feature.image} width={40} height={40} alt='Icon' light='true' />
                    </div>
                    <Card.Title as='h4'>
                      {feature.title}
                    </Card.Title>
                    <Card.Text className='fs-sm opacity-70'>
                      {feature.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id='featuresPagination' className='swiper-pagination swiper-pagination-light position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
        </div>
      </Container>


      {/* Story steps */}
      <Container as='section' className='mb-5 pb-lg-5 pb-3 pb-sm-4'>
        <h2 className='mb-4 pb-2 text-light text-center'>Our story</h2>
        <div className='mx-auto' style={{maxWidth: '864px'}}>
          <Steps vertical light>
            {story.map((step, indx) => (
              <Step key={indx}>
                <h5 className='mb-2 pb-1 text-light'>
                  {step.year}
                </h5>
                <p className='mb-0'>
                  {step.description}
                </p>
              </Step>
            ))}
          </Steps>
        </div>
      </Container>


      {/* Personalized search */}
      <Container as='section' className='mb-5 pb-lg-5 pb-2 pb-sm-3'>
        <Row className='gy-4 align-items-lg-center'>
          <Col xs={12} md={6}>
            <ImageLoader
              src='/images/car-finder/about/01.jpg'
              width={745}
              height={585}
              alt='Personalized search'
              light='true'
              className='rounded-3'
            />
          </Col>
          <Col xs={12} md={6} lg={{span: 5, offset: 1}} className='text-md-start text-center'>
            <h2 className='mb-md-4 text-light'>Personalized search</h2>
            <p className='mb-4 pb-md-3 text-light opacity-70'>Ante senectus sed at lacus. Sed pellentesque dapibus nunc, cursus hendrerit at faucibus ornare lectus. Sed vitae congue mauris consectetur. Cursus tristique et porta eget sapien vivamus turpis. Ultrices vitae eget mattis varius ipsum adipiscing id. Neque, sagittis cursus aliquam volutpat tristique viverra amet amet.</p>
            <Button as={Link} href='/car-finder/catalog?view=grid' variant='primary' className='w-sm-auto w-100'>
              <i className='fi-search me-2'></i>
              Search car
            </Button>
          </Col>
        </Row>
      </Container>


      {/* Attractive selling conditions */}
      <Container as='section' className='mb-5 pb-lg-5 pb-2 pb-sm-3'>
        <Row className='gy-4 align-items-lg-center'>
          <Col xs={{span: 12, order: 'last'}} md={{span: 6, order: 'first'}} lg={5} className='text-md-start text-center'>
            <h2 className='mb-md-4 text-light'>Attractive selling conditions</h2>
            <p className='mb-4 pb-md-3 text-light opacity-70'>In risus quam diam urna, pretium at. Platea nulla malesuada elit, enim lacus quam. Rhoncus, tincidunt mauris quis fames in. A egestas sem quisque urna et imperdiet. Blandit dolor diam urna amet semper elementum ipsum et. Nulla mi ipsum quis et id tempor amet.</p>
            <Button as={Link} href='/car-finder/sell-car' variant='primary' className='w-sm-auto w-100'>
              <i className='fi-plus me-2'></i>
              Sell car
            </Button>
          </Col>
          <Col xs={{span: 12, order: 'first'}} md={{span: 6, order: 'last'}} lg={{offset: 1}}>
            <ImageLoader
              src='/images/car-finder/about/02.jpg'
              width={745}
              height={585}
              alt='Attractive selling conditions'
              light='true'
              className='rounded-3'
            />
          </Col>
        </Row>
      </Container>


      {/* Our partners (carousel) */}
      <Container as='section' className='mb-5 pb-lg-5 pb-2 pb-sm-3'>
        <h2 className='mb-4 pb-2 text-center text-light'>Our partners</h2>
        <Swiper
          modules={[Pagination]}
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
            <SwiperSlide key={indx} className='h-auto'>
              <a className='opacity-40 opacity-transition' href='#'>
                <ImageLoader
                  src={partner[0]}
                  width={196}
                  height={80}
                  alt={partner[1]}
                  light='true'
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External pagination (bullets) buttons */}
        <div id='partnersPagination' className='swiper-pagination swiper-pagination-light position-relative bottom-0 py-2'></div>
      </Container>


      {/* FAQ */}
      <Container as='section' className='mb-5 pb-2 pb-lg-5'>
        <Row>
          <Col xs={12} md={6} lg={5}>
            <div className='d-flex flex-column text-md-start text-center'>
              <div className='order-md-1 order-2 mx-md-0 mx-auto mb-md-5 mb-4' style={{maxWidth: '416px'}}>
                <h2 className='mb-md-3 mb-2 text-light'>FAQs</h2>
                <p className='mb-4 pb-md-2 text-light opacity-70'>Have you any questions about an buying or selling car? Check out Help Center for all the details.</p>
                <Button as={Link} href='/car-finder/help-center' variant='primary' className='w-sm-auto w-100'>
                  Help center
                  <i className='fi-chevron-right ms-2'></i>
                </Button>
              </div>
              <div className='order-md-2 order-1'>
                <ImageLoader src='/images/car-finder/about/03.png' width={526} height={295} alt='FAQs' light='true' />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={{offset: 1}}>
            <Accordion className='accordion-light' defaultActiveKey='0'>

              {/* Active accordion item */}
              <Accordion.Item eventKey='0'>
                <Accordion.Header>How much does it cost to sell a car on Finder?</Accordion.Header>
                <Accordion.Body className='text-light opacity-70'>
                  Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.
                </Accordion.Body>
              </Accordion.Item>

              {/* Accordion item */}
              <Accordion.Item eventKey='1'>
                <Accordion.Header>How do I take the best pictures of my car?</Accordion.Header>
                <Accordion.Body className='text-light opacity-70'>
                  Eros aliquam egestas eu sit faucibus facilisi urna, senectus id. Morbi pellentesque at molestie et. Et molestie nunc massa, donec eget viverra. Sodales nisl vitae gravida pretium enim cursus pharetra massa nisl. Auctor porta dolor nulla elementum malesuada ut etiam neque, enim.
                </Accordion.Body>
              </Accordion.Item>

              {/* Accordion item */}
              <Accordion.Item eventKey='2'>
                <Accordion.Header>Can I sell a vehicle if I live outside of the United States?</Accordion.Header>
                <Accordion.Body className='text-light opacity-70'>
                  Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro deserunt aspernatur sequi amet voluptatibus, fugiat nobis. Atque voluptatibus quibusdam placeat voluptas.
                </Accordion.Body>
              </Accordion.Item>

              {/* Accordion item */}
              <Accordion.Item eventKey='3'>
                <Accordion.Header>How does the buyer get in contact with me and make payment?</Accordion.Header>
                <Accordion.Body className='text-light opacity-70'>
                  Numquam eaque rerum repellat nisi? Sint, dolorum consequuntur! Provident, voluptate maiores dolorum similique ipsam asperiores quos assumenda hic ad omnis cumque nesciunt.
                </Accordion.Body>
              </Accordion.Item>

              {/* Accordion item */}
              <Accordion.Item eventKey='4'>
                <Accordion.Header>Who writes the listing description for my car?</Accordion.Header>
                <Accordion.Body className='text-light opacity-70'>
                  Harum temporibus perferendis quam quae, delectus, nulla maiores reiciendis, suscipit obcaecati iure odit illo ea vero. Eveniet minima inventore ratione et voluptatum. Sunt non quod culpa perferendis animi rerum dolorum, perspiciatis aliquam?
                </Accordion.Body>
              </Accordion.Item>

              {/* Accordion item */}
              <Accordion.Item eventKey='5'>
                <Accordion.Header>Are there rules to follow in the comments?</Accordion.Header>
                <Accordion.Body className='text-light opacity-70'>
                  Fugit facilis tempore consequatur molestiae sapiente. Sit veritatis itaque temporibus illo nisi, in soluta corporis commodi nobis reiciendis laudantium hic facere nostrum provident voluptas perspiciatis, debitis ipsa accusamus aliquid quam iure tempore magni, ratione dignissimos. Minima, a.
                </Accordion.Body>
              </Accordion.Item>

              {/* Accordion item */}
              <Accordion.Item eventKey='6'>
                <Accordion.Header>What currency does Finder use?</Accordion.Header>
                <Accordion.Body className='text-light opacity-70'>
                  Soluta ea deleniti eaque iusto officiis, at a molestiae ipsum qui pariatur quam, eum consectetur quaerat. Tempora et aut dolorum. Mollitia natus neque veniam consectetur magni asperiores?
                </Accordion.Body>
              </Accordion.Item>

              {/* Accordion item */}
              <Accordion.Item eventKey='7'>
                <Accordion.Header>How do I contact a seller privately?</Accordion.Header>
                <Accordion.Body className='text-light opacity-70'>
                  Sint labore eaque ad, nostrum quod omnis natus? Consectetur beatae ratione, voluptatem atque iste, fuga ullam nisi soluta dolorem assumenda excepturi! Repellendus, similique atque ratione accusantium fugiat quidem eum quia quam, nulla eaque necessitatibus vitae. Doloremque recusandae aperiam dicta odio modi in fuga iure, itaque quos excepturi.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>


      {/* Latest news (Blog) */}
      <Container as='section' className='pb-4 pb-sm-5 mb-2 mb-md-4'>
        <div className='d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-sm-2'>
          <h2 className='h3 text-light mb-2 mb-sm-0'>Latest news</h2>
          <Button as={Link} href='/car-finder/blog' variant='link btn-light fw-normal px-0'>
            Go to blog
            <i className='fi-arrow-long-right fs-sm mt-0 ps-1 ms-2'></i>
          </Button>
        </div>

        {/* Blog carousel */}
        <div className='position-relative pb-1 pb-md-2'>
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
              991: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }}
          >
            {blog.map((post, indx) => (
              <SwiperSlide key={indx} className='h-auto'>
                <BlogCard
                  href={post.href}
                  img={{
                    src: post.img,
                    size: [478, 230],
                    alt: 'Image'
                  }}
                  category={post.category}
                  title={post.title}
                  author={post.author}
                  date={post.date}
                  comments={post.comments}
                  light
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div id='blogPagination' className='swiper-pagination swiper-pagination-light position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
        </div>
      </Container>
    </CarFinderPageLayout>
  )
}

export default AboutPage
