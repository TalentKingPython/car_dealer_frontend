import { useEffect, useState } from 'react'
import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ImageLoader from '../../components/ImageLoader'
import Avatar from '../../components/Avatar'
import SocialButton from '../../components/SocialButton'
import FormGroup from '../../components/FormGroup'
import Blockquote from '../../components/Blockquote'
import BlogCard from '../../components/BlogCard'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const BlogSinglePage = () => {
  
  // Add extra class to body
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('fixed-bottom-btn')
    return () => body.classList.remove('fixed-bottom-btn')
  })

  // Offcanvas show/hide
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Categories array
  const categories = [
    ['#', 'Architecture', '2'],
    ['#', 'Travelling', '4'],
    ['#', 'Lifestyle', '5'],
    ['#', 'Entertainment', '1'],
    ['#', 'Accommodation', '8']
  ]

  // Tags array
  const tags = [
    ['#', 'Trending'],
    ['#', 'Tutorial'],
    ['#', 'Places'],
    ['#', 'Urban'],
    ['#', 'Tips'],
    ['#', 'Travel'],
    ['#', 'Restaurants']
  ]

  // Related posts array
  const relatedPosts = [
    {
      href: '#',
      img: '/images/city-guide/blog/12.jpg',
      category: ['#', 'Travelling'],
      title: '10 Travel Mistakes to Avoid During Coronavirus',
      author: ['#', '/images/avatars/16.png', 'Bessie Cooper'],
      date: 'May 24',
      comments: 'No comments'
    },
    {
      href: '#',
      img: '/images/city-guide/blog/13.jpg',
      category: ['#', 'Culture'],
      title: '10 World-Class Museums You Can Visit Online',
      author: ['#', '/images/avatars/18.png', 'Annette Black'],
      date: 'Apr 28',
      comments: '4 comments'
    },
    {
      href: '#',
      img: '/images/city-guide/blog/14.jpg',
      category: ['#', 'Entertainment'],
      title: '7 Tips for Solo Travelers in Africa',
      author: ['#', '/images/avatars/17.png', 'Ralph Edwards'],
      date: 'Mar 15',
      comments: '2 comments'
    }
  ]

  return (
    <CityGuidePageLayout
      pageTitle='Single Post'
      activeNav='Pages'
    >

      {/* Page container */}
      <Container className='mt-5 mb-md-3 mb-lg-4 py-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='pt-md-3 mb-3'>
          <Breadcrumb.Item linkAs={Link} href='/city-guide'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='/city-guide/blog'>Blog</Breadcrumb.Item>
          <Breadcrumb.Item active>Air Travel in the Time of COVID-19</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page title */}
        <h1 className='h2 pb-3'>Air Travel in the Time of COVID-19</h1>

        {/* Main post image */}
        <ImageLoader
          src='/images/city-guide/blog/single.jpg'
          width={1296}
          height={600}
          alt='Post image'
          className='rounded-3'
        />

        <Row className='mt-4 pt-3'>

          {/* Sidebar (offcanvas on screens < 992px) */}
          <Col as='aside' lg={4}>
            <Offcanvas
              show={show}
              onHide={handleClose}
              responsive='lg'
              className='pe-lg-3'
            >
              <Offcanvas.Header closeButton className='shadow-sm mb-2'>
                <Offcanvas.Title as='h5'>Sidebar</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                {/* Search */}
                <div className='position-relative mb-4'>
                  <Form.Control className='pe-5' placeholder='Search article by keywords...' />
                  <i className='fi-search position-absolute top-50 end-0 translate-middle-y me-3'></i>
                </div>

                {/* Author */}
                <Card className='card-flush py-2 py-lg-0 mb-4'>
                  <Card.Body className='d-flex align-items-start'>
                    <Avatar
                      img={{
                        src: '/images/avatars/28.png',
                        alt: 'Avatar'
                      }}
                      size={[80, 80]}
                    />
                    <div className='ps-3'>
                      <h4 className='h5 mb-2'>
                        <Link href='#' className='nav-link stretched-link p-0 fw-bold'>Bessie Cooper</Link>
                      </h4>
                      <span className='d-block mb-3 fs-sm'>Traveller, blogger</span>
                      <div className='position-relative zindex-5 text-nowrap'>
                        <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='me-2 mb-2' />
                        <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='me-2 mb-2' />
                        <SocialButton href='#' variant='solid' brand='instagram' roundedCircle className='mb-2' />
                      </div> 
                    </div>
                  </Card.Body>
                </Card>

                {/* Categories */}
                <Card className='card-flush pb-2 pb-lg-0 mb-4'>
                  <Card.Body>
                    <h3 className='h5'>Categories</h3>
                    {categories.map((category, indx) => (
                      <Link key={indx} href={category[0]} className='nav-link fw-normal d-flex justify-content-between py-1 px-0'>
                        {category[1]}
                        <span className='text-muted ms-2'>({category[2]})</span>
                      </Link>
                    ))}
                  </Card.Body>
                </Card>

                {/* Tags */}
                <Card className='card-flush pb-2 pb-lg-0 mb-4'>
                  <Card.Body>
                    <h3 className='h5'>Popular Tags</h3>
                    {tags.map((tag, indx) => (
                      <Button key={indx} as={Link} href={tag[0]} size='xs' variant='outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2'>{tag[1]}</Button>
                    ))}
                  </Card.Body>
                </Card>

                {/* Subscription */}
                <Card className='card-flush pb-2 pb-lg-0 mb-2'>
                  <Card.Body>
                    <h3 className='h5 mb-3'>Stay Informed</h3>
                    <p className='fs-sm mb-3'>Subscribe to our newsletter and be the first to see the latest news and advice.</p>
                    <FormGroup className='rounded-pill'>
                      <InputGroup size='sm'>
                        <InputGroup.Text className='text-muted'>
                          <i className='fi-mail'></i>
                        </InputGroup.Text>
                        <Form.Control placeholder='Your email' />
                      </InputGroup>
                      <Button size='sm' variant='primary rounded-pill'>Sign up</Button>
                    </FormGroup>
                    <Form.Text className='d-block fs-xs pt-1'>
                      * By signing you agree to our
                      <Link href='#' className='ms-1'>Privacy policy.</Link>
                    </Form.Text>
                  </Card.Body>
                </Card>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col lg={8}>

            {/* Post meta */}
            <div className='d-flex flex-wrap border-bottom pb-3 mb-4'>
              <Link href='#' className='text-uppercase text-decoration-none border-end pe-3 me-3 mb-2'>Travelling</Link>
              <div className='d-flex align-items-center border-end pe-3 me-3 mb-2'>
                <i className='fi-calendar-alt opacity-70 me-2'></i>
                <span>May 24</span>
              </div>
              <div className='d-flex align-items-center border-end pe-3 me-3 mb-2'>
                <i className='fi-clock opacity-70 me-2'></i>
                <span>8 min read</span>
              </div>
              <Link href='#' className='nav-link-muted d-flex align-items-center mb-2'>
                <i className='fi-chat-circle opacity-70 me-2'></i>
                <span>3 comments</span>
              </Link>
            </div>

            {/* Post content */}
            <p className='fs-lg fw-bold text-dark mb-4'>Feugiat eget gravida urna placerat posuere pulvinar. Id nibh hendrerit semper urna consequat. Mauris elit tellus risus ultricies ut consequat. Tempor tellus imperdiet nec velit fames pellentesque sed sed arcu. Neque quam id pellentesque in diam in.</p>
            <p>Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et vivamus.</p>
            <p>Convallis massa nunc, tempus eget egestas sollicitudin mauris. Purus donec sed neque arcu, dictumst tortor nisi, odio. A sit lectus sem velit orci, rhoncus pharetra facilisis. Cras sodales a, dui pellentesque enim odio rutrum leo. Auctor viverra sit sit ut. Massa, elit venenatis, ultrices viverra at sagittis, velit. Cursus tempus phasellus consectetur suspendisse a blandit pellentesque diam neque. Massa est nibh congue elit amet, diam faucibus. Morbi non est semper ullamcorper quam iaculis at.</p>
            <Blockquote author={{name: 'Annette Black'}} className='pb-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Blockquote>
            <p>Velit dignissim pharetra ut augue. Nunc felis neque non sagittis. Sodales eros suspendisse scelerisque varius neque elit elementum quis. Ut euismod id auctor donec consectetur massa. Sed vitae accumsan lorem pharetra dictum eget vestibulum. Non blandit viverra laoreet amet, maecenas auctor leo justo, sit. Vitae vulputate gravida est feugiat. Adipiscing tristique mauris, eu sit tortor. Velit in scelerisque sit tincidunt habitant urna nec. Justo, non massa metus convallis cursus lorem volutpat eu duis. Ipsum dolor feugiat est tristique.</p>
            <p>Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget quisque egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae.</p>
            <p>Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac. Amet vitae massa ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.</p>

            {/* Tags + Sharing */}
            <div className='pt-4'>
              <div className='d-md-flex align-items-center justify-content-between border-top pt-4'>
                <div className='d-flex align-items-center me-3 mb-3 mb-md-0'>
                  <span className='d-none d-sm-block fw-bold text-nowrap mb-2 me-2 pe-1'>Tags:</span>
                  <div className='d-flex flex-wrap'>
                    <Button as={Link} href='#' size='xs' variant='outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2'>COVID-19</Button>
                    <Button as={Link} href='#' size='xs' variant='outline-secondary rounded-pill fs-sm fw-normal mb-2'>Travel</Button>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <span className='fw-bold text-nowrap pe-1 mb-2'>Share:</span>
                  <div className='d-flex'>
                    <OverlayTrigger placement='top' overlay={<Tooltip>Share with Facebook</Tooltip>}>
                      <Button size='xs' variant='icon btn-light-primary rounded-circle shadow-sm mb-2 ms-2'>
                        <i className='fi-facebook'></i>
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement='top' overlay={<Tooltip>Share with Twitter</Tooltip>}>
                      <Button size='xs' variant='icon btn-light-primary rounded-circle shadow-sm mb-2 ms-2'>
                        <i className='fi-twitter'></i>
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement='top' overlay={<Tooltip>Share with LinkedIn</Tooltip>}>
                      <Button size='xs' variant='icon btn-light-primary rounded-circle shadow-sm mb-2 ms-2'>
                        <i className='fi-linkedin'></i>
                      </Button>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>


        {/* Related posts (carousel on screens <850) */}
        <div className='pt-5 mt-md-4 mb-lg-2'>
          <div className='d-sm-flex align-items-center justify-content-between mb-4 pb-2'>
            <h2 className='h3 mb-sm-0'>You may be also interested in</h2>
            <Link href='/city-guide/blog' className='btn btn-link fw-normal ms-sm-3 p-0'>
              View all<i className='fi-arrow-long-right ms-2'></i>
            </Link>
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: '#pagination',
              clickable: true
            }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              991: { slidesPerView: 3 }
            }}
          >
            {relatedPosts.map((post, indx) => (
              <SwiperSlide key={indx}>
                <BlogCard
                  href={post.href}
                  img={{
                    src: post.img,
                    size: [475, 228],
                    alt: 'Image'
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

          {/* External pagination (bullets) buttons */}
          <div id='pagination' className='swiper-pagination position-relative bottom-0 d-lg-none mt-4 pb-4 pb-sm-3'></div>
        </div>
      </Container>

      {/* Filters sidebar toggle button (visible < 991px) */}
      <Button size='sm' className='w-100 rounded-0 fixed-bottom d-lg-none' onClick={handleShow}>
        <i className='fi-sidebar-left me-2'></i>
        Sidebar
      </Button>
    </CityGuidePageLayout>
  )
}

export default BlogSinglePage
