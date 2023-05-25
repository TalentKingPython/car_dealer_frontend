import { useEffect } from 'react'
import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import VenueCard from '../../components/VenueCard'


const VendorBusinessesPage = () => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
  })

  // Businesses array
  const businesses = [
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/business/01.jpg', 435, 300, 'Image'],
      title: 'Berlin Business Hotel',
      rating: [5.0, 48],
      price: '$$',
      location: '1.4 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/business/02.jpg', 435, 300, 'Image'],
      title: 'Big Tree Cottage',
      rating: [4.8, 24],
      price: '$$$',
      location: '0.5 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/business/03.jpg', 435, 300, 'Image'],
      title: 'Leisure Inn',
      rating: [4.9, 13],
      price: '$$$',
      location: '1.8 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/business/04.jpg', 435, 300, 'Image'],
      title: 'Central Cafe',
      rating: [5.0, 40],
      price: '$',
      location: '1.7 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/business/05.jpg', 435, 300, 'Image'],
      title: 'Grand Resort & Spa',
      rating: [5.0, 17],
      price: '$$$',
      location: '0.9 km from center'
    }
  ]

  return (
    <CityGuidePageLayout
      pageTitle='My Businesses'
      activeNav='Vendor'
      userLoggedIn
    >
      
      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='mb-3 pt-2 pt-lg-3'>
          <Breadcrumb.Item linkAs={Link} href='/city-guide'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>My businesses</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page title + Sorting */}
        <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3'>
          <h1 className='h2 mb-sm-0'>My businesses</h1>
          <Form.Group controlId='sortby' className='d-flex align-items-center ms-sm-4'>
            <Form.Label className='text-body fs-sm me-2 pe-1 mb-0 text-nowrap'>
              <i className='fi-arrows-sort text-muted mt-n1 me-2'></i>
              Sort by:
            </Form.Label>
            <Form.Select size='sm'>
              <option value='Newest'>Newest</option>
              <option value='Oldest'>Oldest</option>
              <option value='Popularity'>Popularity</option>
              <option value='High rating'>High rating</option>
              <option value='Low rating'>Low rating</option>
            </Form.Select>
          </Form.Group>
        </div>
        <Card className='p-sm-4 border-0 shadow-sm'>
          <Card.Body>
            <Row>

              {/* Sidebar */}
              <Col lg={3} md={4} className='mb-lg-0 mb-4 pb-2 pe-xl-5'>
                <Nav as='ul' className='flex-column mb-4 pb-lg-3'>
                  <Nav.Item as='li'>
                    <Nav.Link className='py-1 px-0 fs-sm fw-normal'>
                      <i className='fi-bed mt-n1 me-2 fs-base align-middle opacity-70'></i>
                      Accommodation
                      <span className='float-end text-muted'>(4)</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as='li'>
                    <Nav.Link className='py-1 px-0 fs-sm fw-normal'>
                      <i className='fi-cafe mt-n1 me-2 fs-base align-middle opacity-70'></i>
                      Food &amp; Drink
                      <span className='float-end text-muted'>(1)</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Button as={Link} href='/city-guide/add-business' className='rounded-pill'>
                  <i className='fi-plus me-2'></i>
                  Add new business
                </Button>
              </Col>


              {/* Businesses grid */}
              <Col lg={9} md={8}>
                <Row xs={1} sm={2} lg={3} className='g-3 g-xl-4'>
                  {businesses.map((business, indx) => (
                    <Col key={indx} className='pb-2'>
                      <VenueCard
                        href={business.href}
                        img={{
                          src: business.img[0],
                          width: business.img[1],
                          height: business.img[2],
                          alt: business.img[3]
                        }}
                        title={business.title}
                        rating={{
                          value: business.rating[0],
                          count: business.rating[1]
                        }}
                        price={business.price}
                        location={business.location}
                        dropdown={[
                          {
                            // href: '#', // Optionally pass href prop to convert dropdown item to Next link
                            icon: 'fi-edit',
                            label: 'Edit',
                            props: {onClick: () => console.log('Edit business')}
                          },
                          {
                            icon: 'fi-flame',
                            label: 'Promote',
                            props: {onClick: () => console.log('Promote business')}
                          },
                          {
                            icon: 'fi-power',
                            label: 'Deactivate',
                            props: {onClick: () => console.log('Deactivate business')}
                          },
                          {
                            icon: 'fi-trash',
                            label: 'Delete',
                            props: {onClick: () => console.log('Delete business')}
                          }
                        ]}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </CityGuidePageLayout>
  )
}

export default VendorBusinessesPage
