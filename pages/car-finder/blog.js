import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import Pagination from 'react-bootstrap/Pagination'
import ImageLoader from '../../components/ImageLoader'
import Avatar from '../../components/Avatar'
import BlogCard from '../../components/BlogCard'

const BlogPage = () => {

  // Latest news array
  const latestPosts = [
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/02.jpg',
      badges: [
        ['info', 'New']
      ],
      category: {
        href: '#',
        title: 'Travel'
      },
      title: 'Across Arctic on Old Good Land Rover Defender',
      text: 'Odio enim, sem massa posuere amet neque. Nisl rutrum morbi tempor, ligula velit justo, morbi lorem. Vestibulum at volutpat sit cursus. Aenean tincidunt integer...',
      author: {
        href: '#',
        img: '/images/avatars/07.jpg',
        name: 'Cody Fisher'
      },
      date: 'Mar 08',
      comments: '4 comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/03.jpg',
      badges: [
        ['info', 'New']
      ],
      category: {
        href: '#',
        title: 'Automotive News'
      },
      title: '10 Ways to Stay Ahead of the Curve',
      text: 'Mi sit montes, aenean tempor sollicitudin volutpat viverra. Tellus amet, vitae ac consectetur blandit at. Odio proin elit, vehicula morbi faucibus vestibulum…',
      author: {
        href: '#',
        img: '/images/avatars/03.jpg',
        name: 'Kathryn Murphy'
      },
      date: 'Apr 27',
      comments: '1 comment'
    }
  ]

  // News posts array
  const posts = [
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/04.jpg',
      category: {
        href: '#',
        title: 'Automotive News'
      },
      title: 'Volkswagen: Never Done Innovating',
      author: {
        href: '#',
        img: '/images/avatars/08.jpg',
        name: 'Darrell Steward'
      },
      date: 'Apr 15',
      comments: 'No comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/05.jpg',
      category: {
        href: '#',
        title: 'Tips & Advice'
      },
      title: '5 Predictions From the Past About the Future',
      author: {
        href: '#',
        img: '/images/avatars/09.jpg',
        name: 'Guy Hawkins'
      },
      date: 'Apr 06',
      comments: '2 comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/06.jpg',
      category: {
        href: '#',
        title: 'Reviews'
      },
      title: 'This Year is All About New Harley Davidson',
      author: {
        href: '#',
        img: '/images/avatars/10.jpg',
        name: 'Kristin Watson'
      },
      date: 'Mar 25',
      comments: '3 comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/07.jpg',
      category: {
        href: '#',
        title: 'Reviews'
      },
      title: 'First ATV from KTM. Test Drive in Sahara',
      author: {
        href: '#',
        img: '/images/avatars/11.jpg',
        name: 'Marvin McKinney'
      },
      date: 'Mar 12',
      comments: '8 comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/08.jpg',
      category: {
        href: '#',
        title: 'Automotive News'
      },
      title: 'Closer Look at Yet Another Electric Bike Startup',
      author: {
        href: '#',
        img: '/images/avatars/07.jpg',
        name: 'Cody Fisher'
      },
      date: 'Feb 28',
      comments: '5 comments'
    },
    {
      href: '/car-finder/blog-single',
      img: '/images/car-finder/blog/09.jpg',
      category: {
        href: '#',
        title: 'Reviews'
      },
      title: 'All New Aston Martin Superleggera',
      author: {
        href: '#',
        img: '/images/avatars/09.jpg',
        name: 'Guy Hawkins'
      },
      date: 'Feb 19',
      comments: '10 comments'
    }
  ]

  return (
    <CarFinderPageLayout
      pageTitle='Blog'
      activeNav='Pages'
    >

      {/* Page content */}
      <Container className='pt-5 pb-lg-4 my-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='breadcrumb-light mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/car-finder'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>News &amp; reviews</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page title */}
        <h1 className='text-light mb-4'>News &amp; reviews</h1>

        {/* Sorting, filters and search */}
        <div className='d-lg-flex pt-1 pb-4 mb-3'>
          <div className='d-flex mb-3 mb-lg-0 pe-lg-2'>
            <Form.Group controlId='sort-by' className='d-flex flex-md-row flex-column align-items-md-center flex-grow-1 border-end-md border-light pe-md-4 me-md-4'>
              <Form.Label className='d-inline-block text-light me-sm-2 mb-md-0 mb-2 text-nowrap'>
                <i className='fi-arrows-sort mt-n1 me-2 align-middle opacity-70'></i>
                Sort by:
              </Form.Label>
              <Form.Select className='form-select-light me-md-2'>
                <option>Newest</option>
                <option>Oldest</option>
                <option>Popular</option>
                <option>Sponsored</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='categories' className='d-flex flex-md-row flex-column align-items-md-center flex-grow-1 border-end-lg border-light ps-3 ps-md-2 pe-lg-4 me-lg-4'>
              <Form.Label className='d-inline-block text-light me-sm-2 mb-md-0 mb-2 text-nowrap'>
                <i className='fi-align-left mt-n1 me-2 align-middle opacity-70'></i>
                Category:
              </Form.Label>
              <Form.Select className='form-select-light me-md-2'>
                <option>All</option>
                <option>Reviews</option>
                <option>Tips &amp; Advice</option>
                <option>Automotive News</option>
                <option>Travel</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className='position-relative flex-grow-1'>
            <Form.Control className='form-control-light' placeholder='Search articles by keywords...' />
            <i className='fi-search position-absolute top-50 end-0 translate-middle-y text-light opacity-70 me-3'></i>
          </div>
        </div>

        {/* Featured article */}
        <Row as='article' className='pb-2 pb-md-1 mb-4 mb-md-5'>
          <Col xs={12} md={7} lg={8} className='mb-3 mb-md-0'>
            <Link href='/job-board/blog-single' className='d-block position-relative'>
              <Badge bg='info' className='badge bg-info position-absolute zindex-5 top-0 end-0 m-3 fs-sm'>New</Badge>
              <ImageLoader
                src='/images/car-finder/blog/01.jpg'
                width={856}
                height={400}
                alt='Hero image'
                light='true'
                className='rounded-3'
              />
            </Link>
          </Col>
          <Col xs={12} md={5} lg={4}>
            <a className='fs-sm text-uppercase text-decoration-none' href='#'>Tips &amp; Advice</a>
            <h2 className='h5 text-light pt-1'>
              <Link href='/job-board/blog-single' className='nav-link'>
                10 Best Electric Bikes from Automotive Manufacturers for a Long Trip
              </Link>
            </h2>
            <p className='d-md-none d-xl-block text-light opacity-70 mb-4'>Nulla felis neque ultrices ut aliquam. Pellentesque id semper iaculis scelerisque etiam egestas interdum proin sit. Ornare venenatis, ullamcorper amet arcu ipsum ut morbi enim. Senectus quam egestas facilisi enim diam posuere ultricies interdum sed. Amet, risus eros cursus vitae, sit?</p>
            <a href='#' className='d-flex align-items-center text-decoration-none'>
              <Avatar img={{ src: '/images/avatars/06.jpg', alt: 'Kristin Watson' }} size={[48, 48]} />
              <div className='ps-2'>
                <h6 className='fs-base text-light lh-base mb-1'>Kristin Watson</h6>
                <div className='d-flex fs-sm text-light opacity-70'>
                  <span className='me-2 pe-1'>
                    <i className='fi-calendar-alt opacity-70 mt-n1 me-1'></i>
                    May 13
                  </span>
                  <span>
                    <i className='fi-chat-circle opacity-70 mt-n1 me-1'></i>
                    No comments
                  </span>
                </div>
              </div>
            </a>
          </Col>
        </Row>

        {/* Latest articles (2 columns) */}
        <Row md={2} xs={1} className='gy-md-5 gy-4 mb-lg-5 mb-4'>
          {latestPosts.map((post, indx) => (
            <Col key={indx} as='article' className='pb-2 pb-md-1'>
              <BlogCard
                href={post.href}
                img={{
                  src: post.img,
                  size: [744, 350],
                  alt: 'Image'
                }}
                badges={post.badges}
                category={post.category}
                title={post.title}
                text={post.text}
                author={post.author}
                date={post.date}
                comments={post.comments}
                light
              />
            </Col>
          ))}
        </Row>

        {/* Posts (3 columns) */}
        <Row xs={1} sm={2} lg={3} className='gx-3 gx-md-4 gy-md-5 gy-4 mb-lg-5 mb-4'>
          {posts.map((post, indx) => (
            <Col key={indx} as='article' className='pb-2 pb-md-1'>
              <BlogCard
                href={post.href}
                img={{
                  src: post.img,
                  size: [476, 230],
                  alt: 'Image'
                }}
                category={post.category}
                title={post.title}
                author={post.author}
                date={post.date}
                comments={post.comments}
                light
              />
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <nav className='pagination-light border-top border-light pt-4' aria-label='Blog pagination'>
          <Pagination className='mb-4 mb-sm-0'>
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
    </CarFinderPageLayout>
  )
}

export default BlogPage
