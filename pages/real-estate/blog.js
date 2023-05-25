import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../components/ImageLoader'
import Badge from 'react-bootstrap/Badge'
import Avatar from '../../components/Avatar'
import BlogCard from '../../components/BlogCard'
import Pagination from 'react-bootstrap/Pagination'
import { Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const BlogPage = () => {

  // Sponsored posts array
  const sponsoredPosts = [
    {
      href: '/real-estate/blog-single',
      image: '/images/real-estate/blog/01.jpg',
      category: ['#', 'Tips & Advice'],
      title: 'Looking for a New Place? Use This Time to Create Your Wishlist',
      text: 'Nulla felis neque ultrices ut aliquam. Pellentesque id semper iaculis scelerisque etiam egestas interdum proin sit. Ornare venenatis, ullamcorper amet arcu ipsum ut morbi enim. Senectus quam egestas facilisi enim diam posuere ultricies interdum sed. Amet, risus eros cursus vitae, sit?',
      author: ['#', '/images/avatars/06.jpg', 'Kristin Watson'],
      date: 'Mar 13',
      comments: 'No comments'
    },
    {
      href: '/real-estate/blog-single',
      image: '/images/real-estate/blog/02.jpg',
      category: ['#', 'Industry News'],
      title: 'Traditional Real Estate Marketing Holds Firm Despite Pandemic',
      text: 'Phasellus cursus orci pulvinar proin nulla vitae. Arcu faucibus vestibulum fames eget nunc. Ut in sed platea egestas amet purus nibh suspendisse semper. Senectus quam egestas facilisi enim diam posuere ultricies interdum sed. Amet, risus eros cursus vitae, sit. Nulla felis neque ultrices ut aliquam.',
      author: ['#', '/images/avatars/04.jpg', 'Darrell Steward'],
      date: 'Feb 27',
      comments: '3 comments'
    },
  ]

  // Posts array
  const posts = [
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/03.jpg',
      category: {
        href: '#',
        title: 'Home improvement'
      },
      title: '10 Delightful Dining Room Decor Trends for Spring',
      text: 'Mi sit montes, aenean tempor sollicitudin volutpat viverra. Tellus amet, vitae ac consectetur blandit at. Odio proin elit, vehicula morbi faucibus vestibulum...',
      author: {
        href: '#',
        img: '/images/avatars/07.jpg',
        name: 'Cody Fisher'
      },
      date: 'Dec 28',
      comments: '0 comments',
      badges: [['info', 'New']]
    },
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/04.jpg',
      category: {
        href: '#',
        title: 'Inspiration'
      },
      title: '5 Easy-to-Ambitious Projects to Improve Your Home',
      text: 'Phasellus consequat ut sagittis, vestibulum, eget egestas senectus quis congue. Posuere montes, in ultrices vitae, luctus. Ultrices aliquet pellentesque eget...',
      author: {
        href: '#',
        img: '/images/avatars/03.jpg',
        name: 'Kathryn Murphy'
      },
      date: 'Dec 26',
      comments: '4 comments'
    },
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/05.jpg',
      category: {
        href: '#',
        title: 'Inspiration'
      },
      title: 'How Real Estate Drone Photography Can Elevate Your Listing?',
      text: 'Nunc vivamus nam vitae ut faucibus metus pretium nisl. Elementum sed tincidunt nec aliquam tempus. Neque pharetra vitae, mauris malesuada adipiscing...',
      author: {
        href: '#',
        img: '/images/avatars/06.jpg',
        name: 'Kristin Watson'
      },
      date: 'Dec 12',
      comments: '3 comments'
    },
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/06.jpg',
      category: {
        href: '#',
        title: 'Tips & Advice'
      },
      title: '7 Tips for Achieving Maximum Coziness',
      text: 'Enim faucibus mattis feugiat porttitor a arcu quisque. Donec massa volutpat dolor id eget consectetur viverra. Etiam consectetur mauris, scelerisque gravida convallis...',
      author: {
        href: '#',
        img: '/images/avatars/04.jpg',
        name: 'Darrell Steward'
      },
      date: 'Dec 3',
      comments: '1 comments'
    },
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/07.jpg',
      category: {
        href: '#',
        title: 'Industry Views'
      },
      title: 'How To Modernize Your Home on a Budget',
      text: 'Phasellus cursus orci pulvinar proin nulla vitae. Arcu faucibus vestibulum fames eget nunc. Ut in sed platea egestas amet purus nibh suspendisse semper...',
      author: {
        href: '#',
        img: '/images/avatars/03.jpg',
        name: 'Kathryn Murphy'
      },
      date: 'Oct 17',
      comments: '2 comments'
    },
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/08.jpg',
      category: {
        href: '#',
        title: 'Property Market Analysis'
      },
      title: 'When Is the Right Time to Downsize Your Home?',
      text: 'Parturient purus non consectetur eu arcu, feugiat eget vitae. Tellus at sociis egestas magna integer. Vel sagittis morbi ultrices turpis neque sed venenatis enim laoreet...',
      author: {
        href: '#',
        img: '/images/avatars/07.jpg',
        name: 'Cody Fisher'
      },
      date: 'Nov 15',
      comments: '0 comments'
    }
  ]

  return (
    <RealEstatePageLayout
      pageTitle='Blog'
      activeNav='Pages'
    >
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Breadcrumbs + page title */}
        <Breadcrumb className='mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/real-estate'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Blog</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className='d-flex align-items-end justify-content-between mb-0'>Real estate news</h1>

        {/* Recent items carousel */}
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation={{
            prevEl: '#post-prev',
            nextEl: '#post-next'
          }}
          effect='fade'
          loop
        >
          {sponsoredPosts.map((post, indx) => (
            <SwiperSlide key={indx} className='d-flex py-4 bg-white'>
              <Row as='article' className='gy-3'>
                <Col xs={12} md={7} lg={8}>
                  <Link href={post.href} className='d-block position-relative'>
                    <ImageLoader src={post.image} width={856} height={400} alt='Image' className='rounded-3' />
                    <Badge bg='success' className='position-absolute top-0 end-0 m-3 fs-sm'>Sponsored</Badge>
                  </Link>
                </Col>
                <Col xs={12} md={5} lg={4}>
                  <Link href={post.category[0]} className='fs-sm text-uppercase text-decoration-none'>
                    {post.category[1]}
                  </Link>
                  <h2 className='h5 pt-1'>
                    <a className='nav-link'>
                      {post.title}
                    </a>
                  </h2>
                  <p className='d-md-none d-xl-block mb-4'>
                    {post.text}
                  </p>
                  <Link href={post.author[0]} className='d-flex align-items-center text-decoration-none'>
                    <Avatar
                      img={{
                        src: post.author[1],
                        alt: post.author[2]
                      }}
                      size={[48, 48]}
                    />
                    <div className='ps-2'>
                      <h6 className='fs-base text-nav lh-base mb-1'>{post.author[2]}</h6>
                      <div className='d-flex text-body fs-sm'>
                        <span className='me-2 pe-1'>
                          <i className='fi-calendar-alt opacity-60 mt-n1 me-1'></i>
                          {post.date}
                        </span>
                        <span>
                          <i className='fi-chat-circle opacity-60 mt-n1 me-1'></i>
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='d-flex mb-lg-3 mx-n2 pb-5'>
          <Button id='post-prev' variant='prev' className='position-relative mx-2' />
          <Button id='post-next' variant='next' className='position-relative mx-2' />
        </div>


        {/* Search bar + filters */}
        <Row className='gy-3 mb-4 pb-2'>
          <Col xs={{span: 12, order: 'last'}} md={{span: 4, order: 'first'}}>
            <Form.Group className='position-relative'>
              <Form.Control className='pe-5' placeholder='Search articles by keywords...' />
              <i className='fi-search position-absolute top-50 end-0 translate-middle-y me-3'></i>
            </Form.Group>
          </Col>
          <Col xs={{span: 12, order: 'first'}} md={{span: 8, order: 'last'}} lg={{span: 6, offset: 2}}>
            <Row xs={2} className='gy-3'>
              <Col as={Form.Group} controlId='categories' className='d-flex flex-sm-row flex-column align-items-sm-center'>
                <Form.Label className='d-inline-block me-sm-2 mb-sm-0 mb-2 text-body text-nowrap'>
                  <i className='fi-align-left mt-n1 me-2 align-middle opacity-70'></i>
                  Category:
                </Form.Label>
                <Form.Select>
                  <option>All</option>
                  <option>Home</option>
                  <option>Inspiration</option>
                  <option>Tips &amp; Advice</option>
                  <option>Industry News</option>
                  <option>Market Analysis</option>
                </Form.Select>
              </Col>
              <Col as={Form.Group} controlId='sortby' className='d-flex flex-sm-row flex-column align-items-sm-center'>
                <Form.Label className='d-inline-block me-sm-2 mb-sm-0 mb-2 text-body text-nowrap'>
                  <i className='fi-arrows-sort mt-n1 me-2 align-middle opacity-70'></i>
                  Sort by:
                </Form.Label>
                <Form.Select>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Popular</option>
                  <option>Sponsored</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>


        {/* Articles grid */}
        <Row xs={1} md={2} className='gy-md-4 gy-3 mb-lg-4 mb-2'>
          {posts.map((post, indx) => (
            <Col key={indx} className='pb-2'>
              <BlogCard
                size='lg'
                href={post.href}
                img={{
                  src: post.img,
                  size: [744, 350],
                  alt: 'Image'
                }}
                category={post.category}
                title={post.title}
                text={post.text}
                author={post.author}
                date={post.date}
                comments={post.comments}
                badges={post.badges}
              />
            </Col>
          ))}
        </Row>


        {/* Pagination */}
        <nav className='d-flex pt-4 pb-2 border-top' aria-label='Blog pagination'>
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
      </Container>
    </RealEstatePageLayout>
  )
}

export default BlogPage
