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
import Pagination from 'react-bootstrap/Pagination'
import FormGroup from '../../components/FormGroup'
import BlogCard from '../../components/BlogCard'

const BlogPage = () => {

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

  // Featured posts array
  const featuredPosts = [
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/04.jpg',
      category: ['#', 'Architecture'],
      title: '10 Delightful Dining Room Decor Trends for Spring',
      text: 'Mi sit montes, aenean tempor sollicitudin volutpat viverra. Tellus amet, vitae ac consectetur blandit at. Odio proin elit, vehicula morbi faucibus vestibulum. Elementum sed tincidunt nec aliquam tempus. Neque pharetra vitae malesuada.',
      author: ['#', '/images/avatars/23.png', 'Kristin Watson'],
      date: 'Apr 28',
      comments: '0 comments',
      badges: [['success', 'Sponsored']]
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/05.jpg',
      category: ['#', 'Travelling'],
      title: '10 Travel Mistakes to Avoid During Coronavirus Outbreak',
      text: 'Phasellus consequat ut sagittis, vestibulum, eget egestas senectus quis congue. Posuere montes, in ultrices vitae, luctus. Ultrices aliquet pellentesque egt in sed platea egestas amet purus nibh suspendisse semper. Iaculis sit quam magna...',
      author: ['#', '/images/avatars/24.png', 'Annette Black'],
      date: 'Mar 15',
      comments: '3 comments',
      badges: [['success', 'Sponsored']]
    }
  ]

  // Posts array
  const posts = [
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/06.jpg',
      category: ['#', 'Travelling'],
      title: 'Air Travel in the Time of COVID-19',
      text: 'Mi sit montes, aenean tempor sollicitudin volutpat viverra. Tellus amet, vitae ac consectetur blandit at. Odio proin elit, vehicula morbi faucibus vestibulum pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue.',
      author: ['#', '/images/avatars/25.png', 'Bessie Cooper'],
      date: 'May 24',
      comments: '3 comments',
      badges: [['info', 'New']]
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/07.jpg',
      category: ['#', 'Inspiration'],
      title: '10 World-Class Museums You Can Visit Online',
      text: 'Nunc vivamus nam vitae ut faucibus metus pretium nisl. Elementum sed tincidunt nec aliquam tempus. Neque pharetra vitae, mauris malesuada. Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra.',
      author: ['#', '/images/avatars/24.png', 'Annette Black'],
      date: 'May 17',
      comments: '4 comments',
      badges: []
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/08.jpg',
      category: ['#', 'Entertainment'],
      title: '7 Tips for Solo Travelers in Africa',
      text: 'Phasellus cursus orci pulvinar proin nulla vitae. Arcu faucibus vestibulum fames eget nunc. Ut in sed platea egestas amet purus nibh suspendisse semper. Iaculis sit quam magna congue. Amet vel non aliquet habitasse.',
      author: ['#', '/images/avatars/26.png', 'Ralph Edwards'],
      date: 'May 10',
      comments: '2 comments',
      badges: []
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/09.jpg',
      category: ['#', 'Accommodation'],
      title: 'How to Spend a Few Days Visiting Coast',
      text: 'Mi sit montes, aenean tempor sollicitudin volutpat viverra. Tellus amet, vitae ac consectetur blandit at. Odio proin elit, vehicula morbi faucibus vestibulum. Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue.',
      author: ['#', '/images/avatars/23.png', 'Kristin Watson'],
      date: 'Apr 30',
      comments: 'No comments',
      badges: []
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/10.jpg',
      category: ['#', 'Culture'],
      title: 'US Museum Industry 2021–2024',
      text: 'Nunc vivamus nam vitae ut faucibus metus pretium nisl. Elementum sed tincidunt nec aliquam tempus. Neque pharetra vitae, mauris malesuadafelis donec eu sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.',
      author: ['#', '/images/avatars/27.png', 'Guy Hawkins'],
      date: 'Apr 19',
      comments: '3 comments',
      badges: []
    },
    {
      href: '/city-guide/blog-single',
      img: '/images/city-guide/blog/11.jpg',
      category: ['#', 'Lifestyle'],
      title: 'Rocky Mountains Ski Resorts News & Events',
      text: 'Phasellus cursus orci pulvinar proin nulla vitae. Arcu faucibus vestibulum fames eget nunc. Ut in sed platea egestas amet purus nibh suspendisse semper. Praesent sed pulvinar posuere nisl tincidunt. Praesent amet sed lacus vitae.',
      author: ['#', '/images/avatars/26.png', 'Ralph Edwards'],
      date: 'Apr 06',
      comments: '5 comments',
      badges: []
    }
  ]

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
    ['#', 'Tips'],
    ['#', 'Places'],
    ['#', 'Urban'],
    ['#', 'Travel']
  ]

  return (
    <CityGuidePageLayout
      pageTitle='Blog'
      activeNav='Pages'
    >

      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='pt-md-3 mb-3'>
          <Breadcrumb.Item linkAs={Link} href='/city-guide'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Blog</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page title */}
        <h1 className='mb-4'>News &amp; insights</h1>

        {/* Featured posts */}
        <Row xs={1} md={2} className='gy-3 mb-md-5 mb-4 pb-md-4 pb-2 border-bottom'>
          {featuredPosts.map((post, indx) => (
            <Col as='article' key={indx} className='pb-2'>
              <BlogCard
                size='lg'
                href={post.href}
                img={{
                  src: post.img,
                  size: [743, 350],
                  alt: 'Image'
                }}
                category={{
                  href: post.category[0],
                  title: post.category[1]
                }}
                title={post.title}
                text={<><span className='d-block pb-1 pb-md-2'>{post.text}</span></>}
                author={{
                  href: post.author[0],
                  img: post.author[1],
                  name: post.author[2]
                }}
                date={post.date}
                comments={post.comments}
                badges={post.badges}
              />
            </Col>
          ))}
        </Row>
        <Row>


          {/* Sidebar (offcanvas on screens < 992px) */}
          <Col as='aside' lg={3}>
            <Offcanvas
              show={show}
              onHide={handleClose}
              responsive='lg'
            >
              <Offcanvas.Header closeButton className='shadow-sm mb-2'>
                <Offcanvas.Title as='h5'>Sidebar</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                {/* Sorting */}
                <Form.Group controlId='sortby' className='d-flex align-items-center mb-4'>
                  <Form.Label className='fw-normal text-body text-nowrap mb-0 me-2 pe-1'>
                    <i className='fi-arrows-sort mt-n1 me-2 align-middle opacity-80'></i>
                    Sort by:
                  </Form.Label>
                  <Form.Select>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                    <option value='Popular'>Popular</option>
                  </Form.Select>
                </Form.Group>

                {/* Search */}
                <div className='position-relative mb-4'>
                  <Form.Control className='pe-5' placeholder='Search article by keywords...' />
                  <i className='fi-search position-absolute top-50 end-0 translate-middle-y me-3'></i>
                </div>

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
          <Col lg={9}>
            <div className='ps-lg-3'>
              {posts.map((post, indx) => (
                <BlogCard
                  key={indx}
                  type='horizontal'
                  size='lg'
                  href={post.href}
                  img={{
                    src: post.img,
                    size: [743, 350],
                    alt: 'Image'
                  }}
                  category={{
                    href: post.category[0],
                    title: post.category[1]
                  }}
                  title={post.title}
                  text={<><span className='d-block fs-sm pb-1'>{post.text}</span></>}
                  author={{
                    href: post.author[0],
                    img: post.author[1],
                    name: post.author[2]
                  }}
                  date={post.date}
                  comments={post.comments}
                  badges={post.badges}
                  className='mb-4'
                />
              ))}
            </div>


            {/* Pagination */}
            <nav className='d-flex justify-content-end pt-4 border-top' aria-label='Blog pagination'>
              <Pagination className='mb-2'>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{8}</Pagination.Item>
                <Pagination.Item>
                  <i className='fi-chevron-right'></i>
                </Pagination.Item>
              </Pagination>
            </nav>
          </Col>
        </Row>
      </Container>

      {/* Filters sidebar toggle button (visible < 991px) */}
      <Button size='sm' className='w-100 rounded-0 fixed-bottom d-lg-none' onClick={handleShow}>
        <i className='fi-sidebar-left me-2'></i>
        Sidebar
      </Button>
    </CityGuidePageLayout>
  )
}

export default BlogPage
