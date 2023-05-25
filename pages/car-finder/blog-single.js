import { useEffect, useState } from 'react'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import ImageLoader from '../../components/ImageLoader'
import Blockquote from '../../components/Blockquote'
import Comment from '../../components/Comment'
import FormGroup from '../../components/FormGroup'
import BlogCard from '../../components/BlogCard'
import Avatar from '../../components/Avatar'
import SocialButton from '../../components/SocialButton'
import ScrollLink from '../../components/ScrollLink'
import CloseButton from 'react-bootstrap/CloseButton'
import LightGallery from 'lightgallery/react'
import lgVideo from 'lightgallery/plugins/video'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-video.css'
import 'swiper/css'
import 'swiper/css/navigation'

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

  // Form validation
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true);
  }

  // Comments array
  const comments = [
    {
      authorImg: '/images/avatars/05.jpg',
      authorName: 'Daniel Adams',
      date: '3 days ago',
      text: 'Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis reprehenderit in voluptate velit.',
      replies: [
        {
          authorImg: '/images/avatars/06.jpg',
          authorName: 'Kristin Watsons',
          date: '2 days ago',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
          badges: [['info', 'Author']]
        }
      ]
    },
    {
      authorImg: '/images/avatars/04.jpg',
      authorName: 'Darrel Steward',
      date: '1 week ago',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      replies: []
    }
  ]

  // Recent posts array
  const recentPosts = [
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/th01.jpg',
      category: ['#', 'Travel'],
      title: 'Across Arctic on Old Good Land Rover Defender',
      date: 'May 08',
      comments: '4 comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/th02.jpg',
      category: ['#', 'Reviews'],
      title: 'First ATV from KTM. Test Drive in Sahara',
      date: 'Apr 27',
      comments: '9 comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/th03.jpg',
      category: ['#', 'Reviews'],
      title: 'All New Aston Martin Superleggera',
      date: 'Mar 19',
      comments: '15 comments'
    }
  ]

  // 'Editor's choice' posts
  const editorsPosts = [
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/04.jpg',
      category: ['#', 'Automotive News'],
      title: 'Volkswagen: Never Done Innovating',
      author: ['#', '/images/avatars/08.jpg', 'Darrell Steward'],
      date: 'Apr 15',
      comments: 'No comments'
    },
    {
      href: '/job-board/blog-single',
      img: '/images/car-finder/blog/08.jpg',
      category: ['#', 'Automotive News'],
      title: 'Closer Look at Electric Bike Startup',
      author: ['#', '/images/avatars/07.jpg', 'Cody Fisher'],
      date: 'Feb 28',
      comments: '5 comments'
    }
  ]

  return (
    <CarFinderPageLayout
      pageTitle='Single Post'
      activeNav='Pages'
    >

      {/* Page content */}
      <Container as='section' className='mt-5 mb-md-4 py-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='breadcrumb-light mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/car-finder'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='/car-finder/blog'>News &amp; reviews</Breadcrumb.Item>
          <Breadcrumb.Item active>This Year is All About New Harley Davidson</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page title */}
        <h1 className='h2 text-light pb-3'>This Year is All About New Harley Davidson</h1>
        <ImageLoader
          src='/images/car-finder/blog/10.jpg'
          width={1296}
          height={600}
          alt='Hero image'
          light='true'
          className='rounded-3'
        />
        <Row className='mt-4 pt-3'>

          {/* Post content */}
          <Col xs={12} lg={8}>

            {/* Post meta */}
            <div className='d-flex flex-wrap border-bottom border-light pb-3 mb-4'>
              <Link href='#' className='text-uppercase text-decoration-none border-end border-light pe-3 me-3 mb-2'>Reviews</Link>
              <div className='d-flex align-items-center text-light border-end border-light pe-3 me-3 mb-2'>
                <i className='fi-calendar-alt opacity-70 me-2'></i>
                <span>Mar 25</span>
              </div>
              <div className='d-flex align-items-center text-light border-end border-light pe-3 me-3 mb-2'>
                <i className='fi-clock opacity-70 me-2'></i>
                <span>6 min read</span>
              </div>
              <ScrollLink to='comments' smooth='easeInOutQuart' duration={600} offset={-110} className='nav-link-light text-light d-flex align-items-center mb-2'>
                <i className='fi-chat-circle opacity-70 me-2'></i>
                <span>3 comments</span>
              </ScrollLink>
            </div>
            <p className='fs-lg fw-bold text-light mb-4'>Feugiat eget gravida urna placerat posuere pulvinar. Id nibh hendrerit semper urna consequat. Mauris elit tellus risus ultricies ut consequat. Tempor tellus imperdiet nec velit fames pellentesque sed sed arcu. Neque quam id pellentesque in diam in.</p>
            <p className='text-light opacity-70'>Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et vivamus.</p>
            <p className='text-light opacity-70 pb-3'>Convallis massa nunc, tempus eget egestas sollicitudin mauris. Purus donec sed neque arcu, dictumst tortor nisi, odio. A sit lectus sem velit orci, rhoncus pharetra facilisis. Cras sodales a, dui pellentesque enim odio rutrum leo. Auctor viverra sit sit ut. Massa, elit venenatis, ultrices viverra at sagittis, velit. Cursus tempus phasellus consectetur suspendisse a blandit pellentesque diam neque. Massa est nibh congue elit amet, diam faucibus. Morbi non est semper ullamcorper quam iaculis at.</p>

            {/* Video */}
            <LightGallery
              selector='#video-btn'
              licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
              plugins={[lgVideo]}
              zoomFromOrigin={false}
              elementClassNames='position-relative my-4 overflow-hidden'
            >
              <div className='d-flex'>
                <ImageLoader
                  src='/images/car-finder/blog/11.jpg'
                  width={968}
                  height={544}
                  alt='Article image'
                  className='rounded-3'
                />
              </div>
              <Button
                id='video-btn'
                href='https://www.youtube.com/watch?v=MHw6PI_6ygs'
                variant='light-primary btn-icon text-primary rounded-circle'
                className='position-absolute start-50 top-50 translate-middle zindex-5'
                style={{width: '4.5rem', height: '4.5rem'}}
              >
                <i className='fi-play-filled fs-sm'></i>
              </Button>
              <span className='position-absolute top-0 start-0 w-100 h-100 bg-dark rounded-3 opacity-40 zindex-1'></span>
            </LightGallery>
            <p className='text-light opacity-70 pt-2'>Velit dignissim pharetra ut augue. Nunc felis neque non sagittis. Sodales eros suspendisse scelerisque varius neque elit elementum quis. Ut euismod id auctor donec consectetur massa. Sed vitae accumsan lorem pharetra dictum eget vestibulum. Non blandit viverra laoreet amet, maecenas auctor leo justo, sit. Vitae vulputate gravida est feugiat. Adipiscing tristique mauris, eu sit tortor. Velit in scelerisque sit tincidunt habitant urna nec. Justo, non massa metus convallis cursus lorem volutpat eu duis. Ipsum dolor feugiat est tristique.</p>
            <Blockquote light author={{name: 'Annette Black'}} className='mb-4'>
              Consequat posuere egestas elit nunc eget elementum sed proin eget. Eget at elementum vestibulum ut eget. Etiam cursus magnis diam id dignissim sit nulla sit. Arcu eu enim nunc rutrum. Auctor venenatis aliquam quam sit.
            </Blockquote>
            <p className='text-light opacity-70'>Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget quisque egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae.</p>
            <p className='text-light opacity-70'>Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac. Amet vitae massa ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.</p>

            {/* Tags + Sharing */}
            <div className='pt-4 pb-5 mb-md-3'>
              <div className='d-md-flex align-items-center justify-content-between border-top border-light pt-4'>
                <div className='d-flex align-items-center me-3 mb-3 mb-md-0'>
                  <span className='d-none d-sm-block text-light fw-bold text-nowrap mb-2 me-2 pe-1'>Tags:</span>
                  <div className='d-flex flex-wrap'>
                    <Button as={Link} href='#' size='xs' variant='translucent-light rounded-pill fs-sm fw-normal me-2 mb-2'>Reviews</Button>
                    <Button as={Link} href='#' size='xs' variant='translucent-light rounded-pill fs-sm fw-normal me-2 mb-2'>Bikes</Button>
                    <Button as={Link} href='#' size='xs' variant='translucent-light rounded-pill fs-sm fw-normal mb-2'>Harley Davidson</Button>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <span className='text-light fw-bold text-nowrap pe-1 mb-2'>Share:</span>
                  <div className='d-flex'>
                    <OverlayTrigger placement='top' overlay={<Tooltip>Share with Facebook</Tooltip>}>
                      <Button size='xs' variant='icon btn-translucent-light rounded-circle shadow-sm mb-2 ms-2'>
                        <i className='fi-facebook'></i>
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement='top' overlay={<Tooltip>Share with Twitter</Tooltip>}>
                      <Button size='xs' variant='icon btn-translucent-light rounded-circle shadow-sm mb-2 ms-2'>
                        <i className='fi-twitter'></i>
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement='top' overlay={<Tooltip>Share with LinkedIn</Tooltip>}>
                      <Button size='xs' variant='icon btn-translucent-light rounded-circle shadow-sm mb-2 ms-2'>
                        <i className='fi-linkedin'></i>
                      </Button>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>


            {/* Comments */}
            <div id='comments' className='mb-4 mb-md-5'>
              <h3 className='mb-2 text-light'>3 comments</h3>
              {comments.map((comment, indx) => (
                <Comment key={indx}
                  light
                  author={{
                    thumbSrc: comment.authorImg,
                    thumbSize: 48,
                    thumbShape: 'rounded-circle',
                    name: comment.authorName
                  }}
                  badges={comment.badges}
                  text={comment.text}
                  date={comment.date}
                  replyLabel='Reply'
                  replyClick={() => console.log('Hook any action to Reply button!')}
                  className={indx === comments.length - 1 ? 'border-0 pb-0' : ''}
                >
                  {comment.replies.map((reply, indx) => (
                    <Comment key={indx}
                      light
                      author={{
                        thumbSrc: reply.authorImg,
                        thumbSize: 48,
                        thumbShape: 'rounded-circle',
                        name: reply.authorName
                      }}
                      badges={reply.badges}
                      text={reply.text}
                      date={reply.date}
                    />
                  ))}
                </Comment>
              ))}
            </div>

            {/* Comment form */}
            <h3 className='mb-4 pb-sm-2 text-light'>Leave your comment</h3>
            <Row
              as={Form}
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className='gy-md-4 gy-3 pb-sm-2'
            >
              <Col sm={6} as={Form.Group} controlId='c-name'>
                <Form.Label className='text-light'>Name</Form.Label>
                <Form.Control className='form-control-light' size='lg' placeholder='Enter your name' required/>
                <Form.Control.Feedback type='invalid'>
                  Please enter your name.
                </Form.Control.Feedback>
              </Col>
              <Col sm={6} as={Form.Group} controlId='c-email'>
                <Form.Label className='text-light'>Email</Form.Label>
                <Form.Control className='form-control-light' size='lg' type='email' placeholder='Enter your email' required/>
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Col>
              <Col xs={12} as={Form.Group} controlId='c-text'>
                <Form.Label className='text-light'>Comment</Form.Label>
                <Form.Control className='form-control-light' size='lg' as='textarea' rows='4' placeholder='Type comment here' required/>
                <Form.Control.Feedback type='invalid'>
                  Please type your comment.
                </Form.Control.Feedback>
              </Col>
              <Col xs={12}>
                <Button type='submit' size='lg' variant='primary' className='w-sm-auto w-100 mt-2'>Post comment</Button>
              </Col>
            </Row>
          </Col>

          {/* Sidebar */}
          <Col as='aside' lg={4}>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement={'end'}
              responsive='lg'
              className='bg-dark'
            >
              <Offcanvas.Header className='shadow-sm mb-2'>
                <Offcanvas.Title as='h5' className='text-light'>Sidebar</Offcanvas.Title>
                <CloseButton
                  variant='white'
                  onClick={handleClose}
                  aria-label='Close modal'
                  className='position-absolute top-0 end-0 mt-3 me-3'
                />
              </Offcanvas.Header>
              <Offcanvas.Body>

                {/* Search */}
                <div className='position-relative mb-4'>
                  <Form.Control className='form-control-light pe-5' placeholder='Search...' />
                  <i className='fi-search position-absolute top-50 end-0 translate-middle-y me-3 text-light opacity-70'></i>
                </div>

                {/* Author */}
                <Card className='card-flush card-light border-light bg-transparent pb-2 pb-lg-0 mb-4'>
                  <Card.Body className='d-flex align-items-start'>
                    <Avatar
                      img={{
                        src: '/images/avatars/32.jpg',
                        alt: 'Avatar'
                      }}
                      size={[80, 80]}
                    />
                    <div className='ps-3'>
                      <h4 className='h5 mb-2'>
                        <Link href='#' className='nav-link-light stretched-link p-0 fw-bold'>Kristin Watson</Link>
                      </h4>
                      <span className='d-block mb-3 fs-sm opacity-70'>Chief Editor at Finder</span>
                      <div className='position-relative zindex-5 text-nowrap'>
                        <SocialButton href='#' variant='solid' light brand='facebook' roundedCircle className='me-2 mb-2' />
                        <SocialButton href='#' variant='solid' light brand='twitter' roundedCircle className='me-2 mb-2' />
                        <SocialButton href='#' variant='solid' light brand='instagram' roundedCircle className='mb-2' />
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* Recent posts */}
                <Card className='card-flush card-light border-light bg-transparent pb-2 pb-lg-0 mb-4'>
                  <Card.Body>
                    <h4 className='h5 text-light'>Recent Posts</h4>
                    <div>
                      {recentPosts.map((post, indx) => (
                        <article key={indx} className='d-flex align-items-start position-relative mt-4'>
                          <Avatar
                            img={{
                              src: post.img,
                              alt: 'Avatar',
                            }}
                            rounded={3}
                            size={[80, 80]}
                            className='flex-shrink-0'
                          />
                          <div className='ps-3'>
                            <span className='fs-xs text-uppercase text-primary'>{post.category[1]}</span>
                            <h4 className='fs-base pt-1 mb-2'>
                              <a className='nav-link-light stretched-link' href={post.href}>{post.title}</a>
                            </h4>
                            <div className='d-flex fs-xs'>
                              <span className='me-2 pe-1 opacity-70'>
                                <i className='fi-calendar-alt opacity-70 mt-n1 me-1 align-middle'></i>
                                {post.date}
                              </span>
                              <span className='opacity-70'>
                                <i className='fi-chat-circle opacity-70 mt-n1 me-1 align-middle'></i>
                                {post.comments}
                              </span>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </Card.Body>
                </Card>

                {/* Editor's Choice slider */}
                <Card className='card-flush card-light border-light bg-transparent pb-2 pb-lg-0 mb-4'>
                  <Card.Body>
                    <h3 className='h5 text-light'>Editor&apos;s Choice</h3>
                    <Swiper
                      modules={[Navigation]}
                      slidesPerView={1}
                      navigation={{
                        prevEl: '#prev',
                        nextEl: '#next'
                      }}
                      loop
                      grabCursor
                      style={{margin: '-20px'}}
                    >
                      {editorsPosts.map((post, indx) => (
                        <SwiperSlide as='article' key={indx} className='h-auto' style={{padding: '20px'}}>
                          <BlogCard
                            href={post.href}
                            img={{
                              src: post.img,
                              size: [374, 180],
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
                            light
                            className='bg-transparent'
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className='mt-3 mx-n2'>
                      <Button id='prev' variant='prev btn-light' className='position-relative mx-2' />
                      <Button id='next' variant='next btn-light' className='position-relative mx-2' />
                    </div>
                  </Card.Body>
                </Card>


                {/* Subscription form */}
                <Card className='card-flush card-light border-light bg-transparent pb-2 pb-lg-0 mb-4'>
                  <Card.Body>
                    <h4 className='h5 text-light'>Subscribe to our newsletter</h4>
                    <p className='fs-sm mb-3 text-light opacity-70'>We will send you hottest news as soon as they are posted in the picked category.</p>
                    <FormGroup light>
                      <InputGroup size='sm'>
                        <InputGroup.Text className='text-muted'>
                          <i className='fi-mail text-light opacity-70'></i>
                        </InputGroup.Text>
                        <Form.Control placeholder='Your email' />
                      </InputGroup>
                      <Button size='sm' variant='primary'>Subscribe</Button>
                    </FormGroup>
                    <Form.Text className='d-block pt-3 text-light opacity-70'>
                      * By signing up you agree to our
                      <Link href='#' className='ms-1'>Privacy policy.</Link>
                    </Form.Text>
                  </Card.Body>
                </Card>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
        </Row>
      </Container>


      {/* Sidebar toggle button (visible < 992px) */}
      <Button size='sm' className='w-100 rounded-0 fixed-bottom d-lg-none' onClick={handleShow}>
        <i className='fi-sidebar-left me-2'></i>
        Sidebar
      </Button>
    </CarFinderPageLayout>
  )
}

export default BlogSinglePage
