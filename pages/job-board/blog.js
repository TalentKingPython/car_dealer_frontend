import { useEffect, useState } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pagination from 'react-bootstrap/Pagination'
import Offcanvas from 'react-bootstrap/Offcanvas'
import FormGroup from '../../components/FormGroup'
import BlogCard from '../../components/BlogCard'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

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
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/01.jpg',
      category: ['#', 'Guides'],
      title: 'How to Hire World-Class Engineers',
      text: 'Nunc, hac augue ante in facilisi id. Consectetur egestas orci, arcu ac tellus. Morbi orci, nunc dictum...',
      author: ['#', '/images/avatars/16.png', 'Bessie Cooper'],
      date: 'May 23',
      comments: '4 comments',
      badges: [['faded-info rounded-pill', 'New']]
    },
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/02.jpg',
      category: ['#', 'Tips & Advice'],
      title: '15 Tips for a Better Resume',
      text: 'Fusce tristique vitae pulvinar potenti fermentum sapien. Vehicula ut faucibus quis neque at blandit...',
      author: ['#', '/images/avatars/17.png', 'Ralph Edwards'],
      date: 'May 19',
      comments: '1 comment',
      badges: [['faded-info rounded-pill', 'New']]
    }
  ]

  // Posts array
  const posts = [
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/06.jpg',
      category: ['#', 'Inspiration'],
      title: '10 Ways to Stay Ahead of the Curve',
      text: 'Ac sit tincidunt lacus dignissim volutpat dui scelerisque porttitor non. Elit at ullamcorper feugiat porta adipiscing...',
      author: ['#', '/images/avatars/21.png', 'Kristin Watson'],
      date: 'Apr 30',
      comments: 'No comments'
    },
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/07.jpg',
      category: ['#', 'Tips & Advice'],
      title: 'The Stalker’s Guide to Highly Effective Guest Posting',
      text: 'Augue diam malesuada vitae id nisl. Fringilla egestas id proin quis consequat nibh quam sed. Ac vitae lectus placerat adipiscing ac...',
      author: ['#', '/images/avatars/18.png', 'Annette Black'],
      date: 'Apr 27',
      comments: '9 comments'
    },
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/08.jpg',
      category: ['#', 'Lifestyle'],
      title: 'You Are Never "Done" Innovating',
      text: 'Nunc, hac augue ante in facilisi id. Consectetur egestas orci, arcu ac tellus. Morbi orci, nunc dictum ullamcorper id id id arcu ut...',
      author: ['#', '/images/avatars/19.png', 'Ralph Edwards'],
      date: 'Apr 14',
      comments: '15 comments'
    },
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/09.jpg',
      category: ['#', 'Guides'],
      title: 'A Guide to the Most Inspiring Entrepreneurs',
      text: 'Aenean tortor sagittis bibendum amet et dui. A, tristique habitasse vestibulum mauris. Morbi elit luctus tincidunt elementum...',
      author: ['#', '/images/avatars/20.png', 'Guy Hawkins'],
      date: 'Apr 06',
      comments: '8 comments'
    },
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/10.jpg',
      category: ['#', 'Entertainment'],
      title: '5 Predictions From the Past About the Future',
      text: 'Venenatis neque ac in fusce. Enim id id in commodo et suscipit ipsum non. Consectetur risus adipiscing viverra ornare parturient...',
      author: ['#', '/images/avatars/16.png', 'Bessie Cooper'],
      date: 'Mar 27',
      comments: '5 comments'
    },
    {
      href: '/job-board/blog-single',
      img: '/images/job-board/blog/11.jpg',
      category: ['#', 'Tips & Advice'],
      title: 'How to Walk Around the Office',
      text: 'Donec nullam eget lectus at varius in nisl. Ut feugiat tincidunt ultrices in sit. Nunc, vitae lorem scelerisque justo, posuere leo ac turpis...',
      author: ['#', '/images/avatars/19.png', 'Ralph Edwards'],
      date: 'Mar 16',
      comments: '3 comments'
    }
  ]

  // Categories array
  const categories = [
    ['#', 'Inspiration', '2'],
    ['#', 'Tips & Advice', '4'],
    ['#', 'Lifestyle', '5'],
    ['#', 'Entertainment', '1'],
    ['#', 'Guides', '8']
  ]

  // Tags array
  const tags = [
    ['#', 'Trending'],
    ['#', 'Tutorial'],
    ['#', 'Jobs'],
    ['#', 'Resume'],
    ['#', 'Tips'],
    ['#', 'HR'],
    ['#', 'Statistics'],
    ['#', 'Hot vacancies']
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
      pageTitle='Blog'
      activeNav='Pages'
    >

      {/* Page content */}
      <Container as='section' className='mt-5 mb-md-4 py-5'>

        {/* Breadcrumbs */}
        <Breadcrumb className='mb-3 mb-md-4 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/job-board'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Blog</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page title */}
        <h1 className='pb-3'>Blog</h1>
        <Row>
          <Col lg={8}>

            {/* Featured posts */}
            <Row sm={2} className='gy-4'>
              {featuredPosts.map((post, indx) => (
                <Col as='article' key={indx}>
                  <BlogCard
                    type='card'
                    href={post.href}
                    img={{
                      src: post.img,
                      size: [832, 424],
                      alt: 'Image'
                    }}
                    category={{
                      href: post.category[0],
                      title: post.category[1]
                    }}
                    title={post.title}
                    text={post.text}
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

            <div className='py-2'><hr className='my-4'/></div>

            {/* Posts */}
            <div className='mt-n4'>
              {posts.map((post, indx) => (
                <BlogCard key={indx}
                  type='card-horizontal'
                  href={post.href}
                  img={{
                    src: post.img,
                    alt: 'Image'
                  }}
                  category={{
                    href: '#',
                    title: post.category[1]
                  }}
                  title={post.title}
                  text={post.text}
                  author={{
                    href: post.author[0],
                    img: post.author[1],
                    name: post.author[2]
                  }}
                  date={post.date}
                  comments={post.comments}
                  className='mt-4'
                />
              ))}
            </div>

            <div className='py-2'><hr className='my-4'/></div>

            <Pagination className='justify-content-lg-start justify-content-center'>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{8}</Pagination.Item>
              <Pagination.Item>
                <i className='fi-chevron-right'></i>
              </Pagination.Item>
            </Pagination>
          </Col>


          {/* Sidebar */}
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
                  <Form.Control className='pe-5' placeholder='Search...' />
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


      {/* Sidebar toggle button (visible < 992px) */}
      <Button size='sm' className='w-100 rounded-0 fixed-bottom d-lg-none' onClick={handleShow}>
        <i className='fi-sidebar-left me-2'></i>
        Sidebar
      </Button>
    </JobBoardPageLayout>
  )
}

export default BlogPage
