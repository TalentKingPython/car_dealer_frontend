import { useEffect, useState } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
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
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/thumbs/01.jpg',
      category: ['#', 'Guide'],
      title: 'How to Post Resume from Your Smartphone',
      date: 'May 08',
      comments: '4 comments'
    },
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/thumbs/02.jpg',
      category: ['#', 'Tips & Advice'],
      title: 'Win Your Ideal Job. Hot Tips',
      date: 'Apr 27',
      comments: '9 comments'
    },
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/thumbs/03.jpg',
      category: ['#', 'Lifestyle'],
      title: 'You Are Never "Done" Innovating',
      date: 'Mar 19',
      comments: '15 comments'
    }
  ]

  // 'Editor's choice' posts
  const editorsPosts = [
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/12.jpg',
      category: ['#', 'Guides'],
      title: 'How to Win Your First Job In Tech',
      author: ['#', '/images/avatars/18.png', 'Annette Black'],
      date: 'May 18',
      comments: '3 comments'
    },
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/13.jpg',
      category: ['#', 'Tips & Advice'],
      title: 'How to Walk Around the Office',
      author: ['#', '/images/avatars/21.png', 'Kristin Watson'],
      date: 'Apr 25',
      comments: 'No comments'
    }
  ]

  return (
    <JobBoardPageLayout
      pageTitle='Single Post'
      activeNav='Pages'
    >

      {/* Page content */}
      <Container as='section' className='mt-5 mb-md-4 py-5'>

        {/* Breadcrumbs */}
        <Breadcrumb className='mb-3 mb-md-4 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/job-board'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='/job-board/blog'>Blog</Breadcrumb.Item>
          <Breadcrumb.Item active>Single post</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page title */}
        <h1 className='h2 pb-3'>15 Tips for a Better Resume</h1>
        <div className='mb-4'>
          <ImageLoader src='/images/job-board/blog/14.jpg' width={1296} height={600} alt='Cover' className='rounded-3' />
        </div>
        <Row className='pt-3'>
          <Col lg={8}>

            {/* Post meta */}
            <div className='d-flex flex-wrap border-bottom pb-3 mb-4'>
              <Link href='#' className='text-uppercase text-decoration-none border-end pe-3 me-3 mb-2'>Tips &amp; Advice</Link>
              <div className='d-flex align-items-center border-end pe-3 me-3 mb-2'>
                <i className='fi-calendar-alt opacity-70 me-2'></i>
                <span>May 19</span>
              </div>
              <div className='d-flex align-items-center border-end pe-3 me-3 mb-2'>
                <i className='fi-clock opacity-70 me-2'></i>
                <span>10 min read</span>
              </div>
              <ScrollLink to='comments' smooth='easeInOutQuart' duration={600} offset={-110} className='nav-link-muted d-flex align-items-center mb-2'>
                <i className='fi-chat-circle opacity-70 me-2'></i>
                <span>3 comments</span>
              </ScrollLink>
            </div>

            {/* Post content */}
            <p className='fs-lg fw-bold text-dark mb-4'>Feugiat eget gravida urna placerat posuere pulvinar. Id nibh hendrerit semper urna consequat. Mauris elit tellus risus ultricies ut consequat. Tempor tellus imperdiet nec velit fames pellentesque sed sed arcu. Neque quam id pellentesque in diam in.</p>
            <p>Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et vivamus.</p>
            <p>Convallis massa nunc, tempus eget egestas sollicitudin mauris. Purus donec sed neque arcu, dictumst tortor nisi, odio. A sit lectus sem velit orci, rhoncus pharetra facilisis. Cras sodales a, dui pellentesque enim odio rutrum leo. Auctor viverra sit sit ut. Massa, elit venenatis, ultrices viverra at sagittis, velit. Cursus tempus phasellus consectetur suspendisse a blandit pellentesque diam neque. Massa est nibh congue elit amet, diam faucibus. Morbi non est semper ullamcorper quam iaculis at.</p>

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
                  src='/images/job-board/blog/15.jpg'
                  width={968}
                  height={544}
                  alt='Article image'
                  className='rounded-3'
                />
              </div>
              <Button
                id='video-btn'
                href='https://www.youtube.com/watch?v=3iwCzT2P7vw'
                variant='light-primary btn-icon text-primary rounded-circle'
                className='position-absolute start-50 top-50 translate-middle zindex-5'
                style={{width: '4.5rem', height: '4.5rem'}}
              >
                <i className='fi-play-filled fs-sm'></i>
              </Button>
              <span className='position-absolute top-0 start-0 w-100 h-100 bg-dark rounded-3 opacity-40 zindex-1'></span>
            </LightGallery>
            <p>Velit dignissim pharetra ut augue. Nunc felis neque non sagittis. Sodales eros suspendisse scelerisque varius neque elit elementum quis. Ut euismod id auctor donec consectetur massa. Sed vitae accumsan lorem pharetra dictum eget vestibulum. Non blandit viverra laoreet amet, maecenas auctor leo justo, sit. Vitae vulputate gravida est feugiat. Adipiscing tristique mauris, eu sit tortor. Velit in scelerisque sit tincidunt habitant urna nec. Justo, non massa metus convallis cursus lorem volutpat eu duis. Ipsum dolor feugiat est tristique.</p>
            <Blockquote author={{name: 'Annette Black'}}>
              Consequat posuere egestas elit nunc eget elementum sed proin eget. Eget at elementum vestibulum ut eget. Etiam cursus magnis diam id dignissim sit nulla sit. Arcu eu enim nunc rutrum. Auctor venenatis aliquam quam sit.
            </Blockquote>
            <p>Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget quisque egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae.</p>
            <p>Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac. Amet vitae massa ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.</p>

            {/* Tags + Sharing */}
            <div className='pt-4 pb-5 mb-md-3'>
              <div className='d-md-flex align-items-center justify-content-between border-top pt-4'>
                <div className='d-flex align-items-center me-3 mb-3 mb-md-0'>
                  <span className='d-none d-sm-block fw-bold text-nowrap mb-2 me-2 pe-1'>Tags:</span>
                  <div className='d-flex flex-wrap'>
                    <Button as={Link} href='#' size='xs' variant='outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2'>Resume</Button>
                    <Button as={Link} href='#' size='xs' variant='outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2'>Tips</Button>
                    <Button as={Link} href='#' size='xs' variant='outline-secondary rounded-pill fs-sm fw-normal mb-2'>Jobs</Button>
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


            {/* Comments */}
            <div id='comments' className='mb-2 mb-lg-4'>
              <h3 className='mb-2'>3 comments</h3>
              {comments.map((comment, indx) => (
                <Comment key={indx}
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
          </Col>
          <Col as='aside' lg={4}>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement='end'
              responsive='lg'
            >
              <Offcanvas.Header closeButton className='shadow-sm mb-2'>
                <Offcanvas.Title as='h5'>Sidebar</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                {/* Search */}
                <div className='position-relative mb-4'>
                  <Form.Control className='pe-5' placeholder='Search...' />
                  <i className='fi-search position-absolute top-50 end-0 translate-middle-y me-3'></i>
                </div>

                {/* Author */}
                <Card className='card-flush pb-2 pb-lg-0 mb-4'>
                  <Card.Body className='d-flex align-items-start'>
                    <Avatar
                      img={{
                        src: '/images/avatars/15.png',
                        alt: 'Avatar'
                      }}
                      size={[80, 80]}
                    />
                    <div className='ps-3'>
                      <h4 className='h5 mb-2'>
                        <Link href='#' className='nav-link stretched-link p-0 fw-bold'>Kristin Watson</Link>
                      </h4>
                      <span className='d-block mb-3 fs-sm'>Chief Editor at Finder</span>
                      <div className='position-relative zindex-5 text-nowrap'>
                        <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='me-2 mb-2' />
                        <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='me-2 mb-2' />
                        <SocialButton href='#' variant='solid' brand='instagram' roundedCircle className='mb-2' />
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* Recent posts */}
                <Card className='card-flush pb-2 pb-lg-0 mb-4'>
                  <Card.Body>
                    <h4 className='h5'>Recent Posts</h4>
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
                              <a className='nav-link stretched-link' href={post.href}>{post.title}</a>
                            </h4>
                            <div className='d-flex fs-xs'>
                              <span className='me-2 pe-1'>
                                <i className='fi-calendar-alt opacity-70 mt-n1 me-1 align-middle'></i>
                                {post.date}
                              </span>
                              <span>
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

                {/* Editor's Choice */}
                <Card className='card-flush pb-2 pb-lg-0 mb-4'>
                  <Card.Body>
                    <h3 className='h5'>Editor&apos;s Choice</h3>
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
                            type='card'
                            href={post.href}
                            img={{
                              src: post.img,
                              size: [748, 520],
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
                    <div className='d-flex justify-content-center mt-3'>
                      <Button id='prev' variant='prev' className='position-relative mx-2' />
                      <Button id='next' variant='next' className='position-relative mx-2' />
                    </div>
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
        </Row>
      </Container>


      {/* Comment form */}
      <section className='bg-secondary py-5'>
        <Container className='py-md-2 py-lg-4'>
          <Row className='justify-content-center'>
            <Col md={10} xl={8}>
              <h3 className='text-center mb-4 pb-sm-2'>Leave your comment</h3>
              <Row
                as={Form}
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className='gy-md-4 gy-3 pb-sm-2'
              >
                <Col sm={6} as={Form.Group} controlId='c-name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control size='lg' placeholder='Enter your name' required/>
                  <Form.Control.Feedback type='invalid'>
                    Please enter your name.
                  </Form.Control.Feedback>
                </Col>
                <Col sm={6} as={Form.Group} controlId='c-email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control size='lg' type='email' placeholder='Enter your email' required/>
                  <Form.Control.Feedback type='invalid'>
                    Please provide a valid email address.
                  </Form.Control.Feedback>
                </Col>
                <Col xs={12} as={Form.Group} controlId='c-text'>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control size='lg' as='textarea' rows='4' placeholder='Type comment here' required/>
                  <Form.Control.Feedback type='invalid'>
                    Please type your comment.
                  </Form.Control.Feedback>
                </Col>
                <Col xs={12} className='text-center'>
                  <Button type='submit' size='lg' variant='primary rounded-pill' className='w-sm-auto w-100 mt-2'>Post comment</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Sidebar toggle button (visible < 992px) */}
      <Button size='sm' className='w-100 rounded-0 fixed-bottom d-lg-none' onClick={handleShow}>
        <i className='fi-sidebar-left me-2'></i>
        Sidebar
      </Button>
    </JobBoardPageLayout>
  )
}

export default BlogSinglePage
