import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ScrollLink from '../../components/ScrollLink'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'
import Tooltip from 'react-bootstrap/Tooltip'
import Avatar from '../../components/Avatar'
import Blockquote from '../../components/Blockquote'
import Comment from '../../components/Comment'
import Card from 'react-bootstrap/Card'

const BlogSinglePage = () => {

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

  return (
    <RealEstatePageLayout
      pageTitle='Single Post'
      activeNav='Pages'
    >
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Breadcrumbs */}
        <Breadcrumb className='mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/real-estate'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='/real-estate/blog'>Blog</Breadcrumb.Item>
          <Breadcrumb.Item active>How Real Estate Drone Photography Can Elevate Your Listing?</Breadcrumb.Item>
        </Breadcrumb>

        {/* Category + title */}
        <a className='nav-link d-inline-block fw-normal text-uppercase px-0 mb-2' href='#'>Tips &amp; Advice</a>
        <h1 className='h2 mb-4'>How Real Estate Drone Photography Can Elevate Your Listing?</h1>
        
        {/* Post meta */}
        <div className='mb-4 pb-1'>
          <ul className='list-unstyled d-flex flex-wrap mb-0 text-nowrap'>
            <li className='me-3'>
              <i className='fi-calendar-alt me-2 mt-n1 opacity-60'></i>
              Mar 18
            </li>
            <li className='me-3 border-end'></li>
            <li className='me-3'>
              <i className='fi-clock me-2 mt-n1 opacity-60'></i>
              4 min read
            </li>
            <li className='me-3 border-end'></li>
            <li className='me-3'>
              <ScrollLink to='comments' smooth='easeInOutQuart' duration={600} offset={-110} className='nav-link-muted d-flex align-items-center mb-2'>
                <i className='fi-chat-circle me-2 opacity-60'></i>
                3 comments
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Hero image */}
        <div className='mb-4 pb-md-3'>
          <ImageLoader src='/images/real-estate/blog/single.jpg' width={1296} height={600} alt='Post image' className='rounded-3' />
        </div>

        <Row className='gy-4 pb-3'>
          <Col xs={12} md={1} lg={2} className='mt-md-n4'>

            {/* Sharing */}
            <div className='sticky-top py-md-5 mt-md-5'>
              <div className='d-flex flex-md-column align-items-center my-2 mt-md-4 pt-md-5'>
                <div className='d-md-none fw-bold text-nowrap me-2 pe-1'>
                  Share:
                </div>
                <OverlayTrigger placement='top' overlay={<Tooltip>Share with Facebook</Tooltip>}>
                  <Button size='xs' variant='icon btn-light-primary rounded-circle shadow-sm mb-md-2 me-md-0 me-2'>
                    <i className='fi-facebook'></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger placement='top' overlay={<Tooltip>Share with Twitter</Tooltip>}>
                  <Button size='xs' variant='icon btn-light-primary rounded-circle shadow-sm mb-md-2 me-md-0 me-2'>
                    <i className='fi-twitter'></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger placement='top' overlay={<Tooltip>Share with LinkedIn</Tooltip>}>
                  <Button size='xs' variant='icon btn-light-primary rounded-circle shadow-sm mb-md-2 me-md-0 me-2'>
                    <i className='fi-linkedin'></i>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Col>

          {/* Post content */}
          <Col xs={12} md={10} lg={8}>
            <div className='mb-4 pb-md-3'>
              <a href='#' className='d-flex align-items-center text-body text-decoration-none'>
                <Avatar
                  img={{
                    src: '/images/avatars/32.jpg',
                    alt: 'Avatar'
                  }}
                  size={[80, 80]}
                />
                <div className='ps-3'>
                  <h2 className='h6 mb-1'>Kristin Watson</h2>
                  <span className='fs-sm'>Imperial Property Group Agent</span>
                </div>
              </a>
            </div>
            <h6>Feugiat eget gravida urna placerat posuere pulvinar. Id nibh hendrerit semper urna consequat. Mauris elit tellus risus ultricies ut consequat. Tempor tellus imperdiet nec velit fames pellentesque sed sed arcu. Neque quam id pellentesque in diam in.</h6>
            <p>Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et vivamus.</p>
            <p>Convallis massa nunc, tempus eget egestas sollicitudin mauris. Purus donec sed neque arcu, dictumst tortor nisi, odio. A sit lectus sem velit orci, rhoncus pharetra facilisis. Cras sodales a, dui pellentesque enim odio rutrum leo. Auctor viverra sit sit ut. Massa, elit venenatis, ultrices viverra at sagittis, velit. Cursus tempus phasellus consectetur suspendisse a blandit pellentesque diam neque. Massa est nibh congue elit amet, diam faucibus. Morbi non est semper ullamcorper quam iaculis at.</p>
            <Blockquote author={{name: 'Annette Black'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Blockquote>
            <p>Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget quisque egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae.</p>
            <p>Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac. Amet vitae massa ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.</p>

            {/* Post tags */}
            <div className='d-flex align-items-center my-md-5 my-4 py-md-4 py-3 border-top'>
              <div className='fw-bold text-nowrap mb-2 me-2 pe-1'>Tags:</div>
              <div className='d-flex flex-wrap'>
                <Button size='xs' variant='outline-secondary rounded-pill fs-sm fw-normal' className='me-2 mb-2'>
                  Tutorial
                </Button>
                <Button size='xs' variant='outline-secondary rounded-pill fs-sm fw-normal' className='me-2 mb-2'>
                  Jobs
                </Button>
                <Button size='xs' variant='outline-secondary rounded-pill fs-sm fw-normal' className='me-2 mb-2'>
                  Business
                </Button>
              </div>
            </div>

            {/* Comments */}
            <div className='mb-4 mb-md-5' id='comments'>
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
        </Row>

        
        {/* Comment form */}
        <Card className='py-md-4 py-3 shadow-sm'>
          <Card.Body as={Col} xs={12} md={10} lg={8} className='mx-auto px-md-0 px-4'>
            <h3 className='mb-4 pb-sm-2'>Leave your comment</h3>
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
              <Col xs={12}>
                <Button type='submit' size='lg' variant='primary' className='w-sm-auto w-100 mt-2'>Post comment</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </RealEstatePageLayout>
  )
}

export default BlogSinglePage
