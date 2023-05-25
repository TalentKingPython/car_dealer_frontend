import dynamic from 'next/dynamic'
import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'
import IconBox from '../../components/IconBox'
import SocialButton from '../../components/SocialButton'
import FormGroup from '../../components/FormGroup'
import BlogCard from '../../components/BlogCard'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const BgParallax = dynamic(() => import('../../components/BgParallax'), { ssr: false })

const AboutPage = () => {

  // Features array
  const features = [
    {
      icon: 'fi-bed',
      color: 'accent',
      title: 'Safety is our priority',
      text: 'Vel et aliquet diam vulputate hendrerit lorem eget amet adipiscing. At ut ut consectetur in sed.'
    },
    {
      icon: 'fi-cash',
      color: 'warning',
      title: 'Fair price',
      text: 'Tincidunt mauris sit eu, lacinia pharetra, lorem neque dui. Maecenas ultricies laoreet facilisis fusce amet.'
    },
    {
      icon: 'fi-heart',
      color: 'danger',
      title: 'Empathy',
      text: 'Id velit, dui condimentum dictumst sapien quis a elementum dignissim. Dignissim ultrices scelerisque.'
    },
    {
      icon: 'fi-users',
      color: 'success',
      title: 'Results-driven team',
      text: 'Tincidunt mauris sit eu, lacinia pharetra, lorem neque dui. Maecenas ultricies laoreet facilisis fusce amet.'
    },
    {
      icon: 'fi-briefcase',
      color: 'primary',
      title: 'Daily hard work',
      text: 'Elementum quisque cursus sagittis purus mauris. Ultrices ut eu egestas at tristique malesuada.'
    },
    {
      icon: 'fi-chat-left',
      color: 'success',
      title: 'Communication',
      text: 'Faucibus sollicitudin id vitae pharetra tristique cursus id. Blandit at proin purus cursus id sem.'
    },
    {
      icon: 'fi-like',
      color: 'info',
      title: 'Passion & enthusiasm',
      text: 'Cras aliquam fringilla sollicitudin quis potenti lacinia volutpat nisl amet. Felis gravida sed sit nec nulla id morbi.'
    },
    {
      icon: 'fi-checkbox-checked-alt',
      color: 'warning',
      title: 'Simple solutions',
      text: 'Porta vulputate commodo ut pulvinar. Fames augue dui faucibus porttitor dis duis id faucibus.'
    }
  ]

  // FAQ array
  const faqs = [
    {
      title: 'Getting started',
      links: [
        ['#', 'Quis arcu euismod est, varius nisi?'],
        ['#', 'Aliquam, commodo sed nibh?'],
        ['#', 'Faucibus felis fames mauris dolor purus?'],
        ['#', 'Odio diam, tellus facilisi?'],
        ['#', 'Eu quisque libero, sed neque?'],
        ['#', 'Lectus sed sit cursus amet, vitae tempor?']
      ]
    },
    {
      title: 'Partnership',
      links: [
        ['#', 'Tincidunt molestie scelerisque?'],
        ['#', 'Nunc, ipsum ut augue fusce ornare?'],
        ['#', 'Velit, mauris amet feugiat condimentum mollis?'],
        ['#', 'Lacus, sed fames mi cras id?'],
        ['#', 'Adipiscing magna suspendisse?'],
        ['#', 'Libero pellentesque ultricies maecenas?']
      ]
    },
    {
      title: 'Account & profile',
      links: [
        ['#', 'Cursus fusce volutpat tempor?'],
        ['#', 'A senectus auctor sodales gravida non elit?'],
        ['#', 'Mauris accumsan vel rhoncus?'],
        ['#', 'Cras nunc, semper lectus turpis?'],
        ['#', 'Pulvinar sed morbi massa nulla dolor eget?'],
        ['#', 'Bibendum mattis amet amet?']
      ]
    },
    {
      title: 'Privacy & security',
      links: [
        ['#', 'Pellentesque ante quisque sit?'],
        ['#', 'Eu quam bibendum adipiscing leo?'],
        ['#', 'Massa fermentum, eget nec elementum?'],
        ['#', 'In quis pulvinar amet morbi praesent?'],
        ['#', 'Eros, dolor in consequat netus?'],
        ['#', 'Quis gravida felis dui non gravida?']
      ]
    },
    {
      title: 'Transactions',
      links: [
        ['#', 'Nisl urna id aliquam sed vitae pellentesque?'],
        ['#', 'Nam morbi faucibus ultricies euismod?'],
        ['#', 'Amet scelerisque consectetur consequa?'],
        ['#', 'Sapien at fames urna in id at?'],
        ['#', 'Fames id nullam et id proin ante ultrices?'],
        ['#', 'Quis ultricies turpis commodo, elit lectus?']
      ]
    },
    {
      title: 'Privacy & security',
      links: [
        ['#', 'Lacus eget amet blandit egestas?'],
        ['#', 'Augue at donec molestie vulputate cum?'],
        ['#', 'Viverra adipiscing nisl, lacus at et?'],
        ['#', 'Sagittis dictum hendrerit faucibus malesuada?'],
        ['#', 'Tempus est non sapien tempus?'],
        ['#', 'Nunc est hendrerit volutpat nunc donec?']
      ]
    }
  ]


  // Team members array
  const team = [
    {
      img: '/images/city-guide/about/team/01.jpg',
      name: 'Devon Lane',
      position: 'President & CEO',
      socials: [
        ['#', 'facebook'],
        ['#', 'twitter'],
        ['#', 'instagram']
      ]
    },
    {
      img: '/images/city-guide/about/team/02.jpg',
      name: 'Dianne Russell',
      position: 'Chief Financial Officer',
      socials: [
        ['#', 'facebook'],
        ['#', 'twitter'],
        ['#', 'instagram']
      ]
    },
    {
      img: '/images/city-guide/about/team/03.jpg',
      name: 'Ronald Richards',
      position: 'Technology Officer',
      socials: [
        ['#', 'facebook'],
        ['#', 'twitter'],
        ['#', 'instagram']
      ]
    },
    {
      img: '/images/city-guide/about/team/04.jpg',
      name: 'Albert Flores',
      position: 'Commercial Officer',
      socials: [
        ['#', 'facebook'],
        ['#', 'twitter'],
        ['#', 'instagram']
      ]
    }
  ]

  // Latest blog posts array
  const posts = [
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/01.jpg',
      category: ['#', 'Travelling'],
      title: 'Air Travel in the Time of COVID-19',
      author: ['#', '/images/avatars/16.png', 'Bessie Cooper'],
      date: 'May 24',
      comments: 'No comments'
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/02.jpg',
      category: ['#', 'Entertainment'],
      title: '10 World-Class Museums You Can Visit Online',
      author: ['#', '/images/avatars/18.png', 'Annette Black'],
      date: 'Apr 28',
      comments: '4 comments'
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/03.jpg',
      category: ['#', 'Travelling'],
      title: '7 Tips for Solo Travelers in Africa',
      author: ['#', '/images/avatars/17.png', 'Ralph Edwards'],
      date: 'Apr 15',
      comments: '2 comments'
    }
  ]
  

  return (
    <CityGuidePageLayout
      pageTitle='About'
      activeNav='Pages'
      navbarExtraClass='bg-light'
    >

      {/* Hero */}
      <section className='mt-5 pt-4'>
        <BgParallax
          imgSrc='/images/city-guide/about/hero-bg.jpg'
          type='scroll' // scale, opacity, scroll-opacity, scale-opacity
          speed={0.5} // from -1.0 to 2.0
          className='mt-2'
        >
          <Container className='py-3'>
            <Breadcrumb className='breadcrumb-light pt-3'>
              <Breadcrumb.Item linkAs={Link} href='/city-guide'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
            <Col sm={8} md={6} className='py-md-5 py-4 px-0'>
              <h1 className='display-4 mb-4 pb-md-2 text-light'>Fall in <i className='fi-heart fs-1 text-primary'></i> with new places!</h1>
              <p className='mb-sm-5 mb-4 pb-md-5 pb-3 lead text-light'>We are your personal guide to unique experiences. We know the best places to see and events in any part of the world. Don&apos;t miss anything with our help!</p>
            </Col>
          </Container>
        </BgParallax>
      </section>


      {/* Features */}
      <section className='position-relative bg-white rounded-xxl-4 mb-5 pb-1 py-md-3 zindex-5' style={{marginTop: '-30px'}}>
        <Container className='pt-5 mb-2 mb-md-4'>
          <h2 className='text-center'>The values we live by</h2>
          <p className='mb-4 pb-2 mx-auto fs-lg text-center' style={{maxWidth: '616px'}}>Travelers across the globe use our platform to discover where to stay, what to do and where to eat in any part of the world.</p>
          <Row xs={1} sm={2} md={3} lg={4} className='g-4 justify-content-center'>
            {features.map((feature, indx) => (
              <Col key={indx}>
                <IconBox
                  type='card-shadow'
                  media={feature.icon}
                  mediaShape='circle'
                  mediaColor={feature.color}
                  title={feature.title}
                  titleSize='5' // from 1 to 6, where 1 is h1 and 6 is h6
                  text={feature.text}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* Add business CTA */}
      <Container as='section' className='pb-5 mb-2 mb-lg-4'>
        <Row className='align-items-lg-center gy-4 pb-2'>
          <Col md={6}>
            <ImageLoader
              src='/images/city-guide/about/01.jpg'
              width={743}
              height={701}
              alt='Cover image'
              className='rounded-3'
            />
          </Col>
          <Col md={6} lg={{span: 5, offset: 1}}>
            <h2 className='mb-lg-4'>Get new customers with our catalog easily!</h2>
            <p className='mb-lg-4 fs-lg text-muted'>Et quis dictum malesuada phasellus feugiat laoreet lacus. Imperdiet sed a dignissim mauris amet bibendum. Non odio molestie feugiat sed ullamcorper nunc.</p>
            <ul className='list-unstyled mb-4 pb-lg-3'>
              <li className='d-flex'>
                <i className='fi-check mt-1 me-2 pe-1 text-primary'></i>
                Nec placerat massa vitae arcu, sodales tortor.
              </li>
              <li className='d-flex'>
                <i className='fi-check mt-1 me-2 pe-1 text-primary'></i>
                Risus consectetur nulla vitae at donec est felis eget turpis.
              </li>
              <li className='d-flex'>
                <i className='fi-check mt-1 me-2 pe-1 text-primary'></i>
                Elit, sed vel turpis donec molestie elit, morbi aliquam.
              </li>
              <li className='d-flex'>
                <i className='fi-check mt-1 me-2 pe-1 text-primary'></i>
                Orci tincidunt consectetun quam massa at.
              </li>
              <li className='d-flex'>
                <i className='fi-check mt-1 me-2 pe-1 text-primary'></i>
                Ac aenean proin amet bibendum dolor placerat.
              </li>
              <li className='d-flex'>
                <i className='fi-check mt-1 me-2 pe-1 text-primary'></i>
                Leo quis nisi lorem morbi egestas sed lacus.
              </li>
            </ul>
            <Button as={Link} href='/city-guide/add-business' size='lg' variant='primary rounded-pill'>
              <i className='fi-plus me-2'></i>
              Add Business
            </Button>
          </Col>
        </Row>
      </Container>


      {/* FAQ */}
      <Container as='section' className='pb-5 mb-md-2 mb-lg-4'>
        <h2 className='mb-sm-4 pb-md-2 text-center'>Frequently asked questions</h2>
        <Row xs={1} sm={2} lg={3} className='pb-2 g-sm-4 g-0'>
          {faqs.map((faq, indx) => (
            <Col key={indx}>
              <Card className='border-0'>
                <Card.Body className='pb-0'>
                  <h3 className='h5 text-primary'>{`0${indx + 1}.`} {faq.title}</h3>
                  {faq.links.map((link, indx) => (
                    <Link key={indx} href={link[0]} className='nav-link mb-2 p-0 fw-normal'>{link[1]}</Link>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


      {/* Team */}
      <Container as='section' className='pt-lg-2 pb-5 mb-lg-4'>
        <h2 className='mb-4 pb-2 text-center'>The people behind Finder</h2>
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
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 }
            }}
            className='mx-n2'
          >
            {team.map((member, indx) => (
              <SwiperSlide key={indx} style={{padding: '.75rem .75rem 1rem .75rem'}}>
                <Card className='border-0 shadow-sm'>
                  <ImageLoader
                    src={member.img}
                    width={467}
                    height={458}
                    layout='responsive'
                    alt={member.name}
                    className='card-img-top'
                  />
                  <Card.Body className='text-center'>
                    <h3 className='h5 card-title mb-2'>{member.name}</h3>
                    <span className='d-inline-block mb-3 fs-sm'>{member.position}</span>
                    <div className='pt-1'>
                      {member.socials.map((social, indx) => (
                        <SocialButton
                          key={indx}
                          href={social[0]}
                          variant='solid'
                          brand={social[1]}
                          roundedCircle
                          className='mx-2'
                        />
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prev' variant='prev' className='d-none d-xxl-block mt-n5 ms-n5' />
          <Button id='next' variant='next' className='d-none d-xxl-block mt-n5 me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='pagination' className='swiper-pagination position-relative bottom-0 mt-4 pb-3'></div>
      </Container>


      {/* Map */}
      <Container as='section' className='pb-5 mb-2 mb-lg-4'>
        <h2 className='mb-4 pb-2 text-center'>World city guides</h2>
        <ImageLoader
          src='/images/city-guide/about/map.jpg'
          width={2592}
          height={1360}
          alt='World map'
        />
      </Container>


      {/* Blog: Latest posts */}
      <Container as='section' className='pt-2 pb-5 mb-2 mb-lg-4'>
        <div className='d-sm-flex align-items-center justify-content-between mb-4 pb-2'>
          <h2 className='h3 mb-sm-0'>Don&apos;t miss the latest posts</h2>
          <Button as={Link} href='/city-guide/blog' variant='link fw-normal ms-sm-3 p-0'>
            Go to blog
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>

        {/* Swiper slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '#bulletsBlog',
            clickable: true
          }}
          autoHeight
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            850: { slidesPerView: 3 }
          }}
        >
          {posts.map((post, indx) => (
            <SwiperSlide key={indx}>
              <BlogCard
                href={post.href}
                img={{
                  src: post.img,
                  size: [475, 228],
                  alt: 'Post image'
                }}
                category={{
                  href: post.category[0],
                  title: post.category[1]
                }}
                title={post.title}
                author={{
                  href: post.author[0],
                  img: post.author[1],
                  name: post.author[2]
                }}
                date={post.date}
                comments={post.comments}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External pagination (bullets) */}
        <div id='bulletsBlog' className='swiper-pagination position-relative bottom-0 mt-4 pb-3'></div>
      </Container>


      {/* Subscription CTA */}
      <Container as='section' className='pb-5 mb-3 mb-lg-5'>
        <div className='rounded-3 bg-faded-accent py-5 px-sm-5 px-4'>
          <div className='mx-auto py-md-4 text-center' style={{maxWidth: '605px'}}>
            <h2>Stay informed</h2>
            <p className='mb-4 pb-2 fs-lg'>Subscribe to our newsletter, be the first to see the latest news &amp; advice.</p>
            <FormGroup className='rounded-pill mb-3'>
              <InputGroup size='lg'>
                <InputGroup.Text className='text-muted'>
                  <i className='fi-mail'></i>
                </InputGroup.Text>
                <FormControl placeholder='Your email' />
              </InputGroup>
              <Button variant='primary rounded-pill px-sm-4 px-3' size='lg'>Subscribe</Button>
            </FormGroup>
            <div className='form-text'>* By signing up you agree to our <Link href='#' className='text-decoration-none'>Privacy Policy</Link></div>
          </div>
        </div>
      </Container>
    </CityGuidePageLayout>
  )
}

export default AboutPage
