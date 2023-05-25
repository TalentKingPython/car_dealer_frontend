import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Collapse from 'react-bootstrap/Collapse'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Avatar from '../../components/Avatar'
import StarRating from '../../components/StarRating'
import SocialButton from '../../components/SocialButton'
import PropertyCard from '../../components/PropertyCard'

const VendorPropertiesPage = () => {

  // Query param (Switch between Rent and Sale category)
  const router = useRouter(),
        categoryParam = router.query.category === 'sale' ? 'sale' : 'rent'

  // Message modal state
  const [messageModalShow, setMessageModalShow] = useState(false)
  const handleMessageModalClose = () => setMessageModalShow(false)
  const handleMessageModalShow = () => setMessageModalShow(true)

  // Message form validation
  const [messageValidated, setMessageValidated] = useState(false)
  const handleMessageSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setMessageValidated(true);
  }

  // About (Agent's info sidebar) collapse state
  const [aboutOpen, setAboutOpen] = useState(false)

  // Properties for rent array
  const propertiesRent = [
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/01.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/01.jpg', 475, 310, 'Image']
      ],
      title: '3-bed Apartment | 67 sq.m',
      location: '3811 Ditmars Blvd Astoria, NY 11105',
      price: '$1,650',
      badges: [['success', 'Verified'], ['info', 'New']],
      amenities: [3, 2, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/02.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/02.jpg', 475, 310, 'Image']
      ],
      title: 'Family Home | 120 sq.m',
      location: '67-04 Myrtle Ave Glendale, NY 11385',
      price: 'From $4,500',
      badges: [['success', 'Verified'], ['danger', 'Featured']],
      amenities: [4, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/03.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/03.jpg', 475, 310, 'Image']
      ],
      title: 'Greenpoint Rentals | 85 sq.m',
      location: '1510 Castle Hill Ave Bronx, NY 10462',
      price: '$1,850',
      badges: [['success', 'Verified']],
      amenities: [2, 1, 0]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/30.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/30.jpg', 475, 310, 'Image']
      ],
      title: 'Crystal Apartment| 60 sq.m',
      location: '495 Henry St Brooklyn, NY 11231',
      price: '$1,300',
      badges: [],
      amenities: [2, 1, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/31.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/31.jpg', 475, 310, 'Image']
      ],
      title: 'Pine Apartments | 56 sq.m',
      location: '7865 Ditmars Blvd Astoria, NY 11105',
      price: '$2,000',
      badges: [['info', 'New']],
      amenities: [4, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/32.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/32.jpg', 475, 310, 'Image']
      ],
      title: 'Tiffany Studio | 35 sq.m',
      location: '79 Albany Post Road, NY 12538',
      price: '$700',
      badges: [],
      amenities: [1, 1, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/04.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/04.jpg', 475, 310, 'Image']
      ],
      title: 'Studio | 32 sq.m',
      location: '140-60 Beech Ave Flushing, NY 11355',
      price: '$680',
      badges: [['success', 'Verified'], ['info', 'New']],
      amenities: [1, 1, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/05.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/05.jpg', 475, 310, 'Image']
      ],
      title: 'Terra Nova Apartments | 85 sq.m',
      location: '21 India St Brooklyn, NY 11222',
      price: '$2,400',
      badges: [['success', 'Verified']],
      amenities: [5, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/33.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/33.jpg', 475, 310, 'Image']
      ],
      title: 'O’Farrell Rooms | 40 sq.m',
      location: '460 E Fordham Rd Bronx, NY 10458',
      price: 'From $550',
      badges: [['success', 'Verified'], ['danger', 'Featured']],
      amenities: [2, 1, 0]
    }
  ]

  // Properties for sale array
  const propertiesSale = [
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/34.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/34.jpg', 475, 310, 'Image']
      ],
      title: 'White Cottage | 70 sq.m',
      location: '79 Albany Post Road Hyde Park, NY',
      price: '$84,000',
      badges: [['success', 'Verified']],
      amenities: [2, 1, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/35.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/35.jpg', 475, 310, 'Image']
      ],
      title: 'Country House | 120 sq.m',
      location: '6954 Grand AveMaspeth, NY 11378',
      price: '$162,000',
      badges: [['info', 'New']],
      amenities: [4, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/36.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/36.jpg', 475, 310, 'Image']
      ],
      title: 'Ellis Studio | 40 sq.m',
      location: '3 E Evergreen Rd New City, NY 10956',
      price: '$50,000',
      badges: [],
      amenities: [2, 1, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/37.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/37.jpg', 475, 310, 'Image']
      ],
      title: 'Luxury Rental Villa | 180 sq.m',
      location: '118-11 Sutphin Blvd Jamaica, NY 11434',
      price: '$300,500',
      badges: [['success', 'Verified']],
      amenities: [4, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/38.jpg', 475, 310, 'Image'],
        ['/images/real-estate/catalog/38.jpg', 475, 310, 'Image']
      ],
      title: 'Modern House | 170 sq.m',
      location: '82 Nassau St New York, NY 10038',
      price: '$620,400',
      badges: [['success', 'Verified']],
      amenities: [5, 2, 2]
    }
  ]


  return (
    <RealEstatePageLayout
      pageTitle='Vendor Properties'
      activeNav='Vendor'
      userLoggedIn
    >

      {/* Message modal */}
      <Modal
        centered
        show={messageModalShow}
        onHide={handleMessageModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title as='h3' className='fs-base'>Message to Floyd Miles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={messageValidated}
            onSubmit={handleMessageSubmit}
          >
            <Form.Group className='mb-4'>
              <Form.Control as='textarea' rows={6} placeholder='Type your message here' required />
              <Form.Control.Feedback type='invalid'>
                Please type your message before sending.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type='submit' className='mb-2'>
              <i className='fi-send me-2'></i>
              Send message
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='mb-4 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/real-estate'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='#'>Agents</Breadcrumb.Item>
          <Breadcrumb.Item active>Floyd Miles</Breadcrumb.Item>
        </Breadcrumb>

        <Row>

          {/* Sidebar (Agent's info) */}
          <Col as='aside' md={4} lg={3} className='mb-5 mb-md-0'>
            <div className='pe-lg-3'>
              <Avatar
                img={{
                  src: '/images/avatars/31.jpg',
                  alt: 'Floyd Miles'
                }}
                size={[120, 120]}
                className='mx-auto mx-md-0 mb-3'
              />
              <h2 className='h4 text-center text-md-start mb-1'>Floyd Miles</h2>
              <p className='text-center text-md-start mb-2 pb-1'>Imperial Property Group Agent</p>
              <div className='d-flex justify-content-center justify-content-md-start align-items-center border-bottom pb-4 mb-4'>
                <StarRating rating={4.8} />
                <Link href='/real-estate/vendor-reviews' className='ms-2'>45 reviews</Link>
              </div>
              <div className='border-bottom pb-4 mb-4'>
                <p className='fs-sm mb-0'>Hello! I will select the best accommodation for you. Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. Vel metus odio at faucibus ac. Neque id placerat et id ut acultricies commodo.</p>
                <Collapse in={aboutOpen}>
                  <div id='moreAbout'>
                    <p className='fs-sm mb-0'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                  </div>
                </Collapse>
                <div className='text-center text-md-start'>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setAboutOpen(!aboutOpen)
                    }}
                    aria-controls='moreAbout'
                    aria-expanded={aboutOpen}
                    className={`collapse-label fs-sm${aboutOpen ? '' : ' collapsed'}`}
                  >
                    {aboutOpen ? 'Show less' : 'Show more'}
                  </a>
                </div>
              </div>
              <ul className='d-table list-unstyled mx-auto mx-md-0 mb-3 mb-md-4'>
                <li className='mb-2'>
                  <a href='tel:3025550107' className='nav-link fw-normal p-0'>
                    <i className='fi-phone text-primary mt-n1 me-2 align-middle'></i>
                    (302) 555-0107
                  </a>
                </li>
                <li>
                  <a href='mailto:floyd_miles@email.com' className='nav-link fw-normal p-0'>
                    <i className='fi-mail text-primary mt-n1 me-2 align-middle'></i>
                    floyd_miles@email.com
                  </a>
                </li>
              </ul>
              <div className='text-center text-md-start'>
                <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='me-2' />
                <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle />
              </div>
              <div className='text-center text-md-start pt-md-2 mt-4'>
                <Button onClick={handleMessageModalShow}>
                  <i className='fi-chat-left fs-sm me-2'></i>
                  Direct message
                </Button>
              </div>
            </div>
          </Col>


          {/* Page content */}
          <Col md={8} lg={9}>
            <h1 className='h2 text-center text-sm-start mb-4'>Property offers</h1>
            <div className='d-flex flex-column flex-sm-row align-items-center justify-content-between mb-4'>

              {/* Nav (switch between Rent / Sale) */}
              <Nav variant='tabs' className='flex-nowrap fs-sm mb-sm-0'>
                <Nav.Item>
                  <Nav.Link as={Link} href='/real-estate/vendor-properties?category=rent' active={categoryParam === 'rent' ? true : false}>
                    For rent
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} href='/real-estate/vendor-properties?category=sale' active={categoryParam === 'sale' ? true : false}>
                    For sale
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              
              {/* Sorting */}
              <Form.Group controlId='sortby' className='d-flex align-items-center flex-shrink-0 ms-sm-4'>
                <Form.Label className='text-body fs-sm me-2 mb-0 pe-1 text-nowrap'>
                  <i className='fi-arrows-sort text-muted mt-n1 me-2'></i>
                  Sort by:
                </Form.Label>
                <Form.Select size='sm'>
                  <option value='Newest'>Newest</option>
                  <option value='Popularity'>Popularity</option>
                  <option value='Low - Hight Price'>Low - Hight Price</option>
                  <option value='High - Low Price'>High - Low Price</option>
                </Form.Select>
              </Form.Group>
            </div>

            {/* Properties grid */}
            {categoryParam === 'sale' ? <Row xs={1} sm={2} lg={3} className='g-4 g-md-3 g-lg-4 py-2'>
              {propertiesSale.map((property, indx) => (
                <Col key={indx}>
                  <PropertyCard
                    href={property.href}
                    images={property.images}
                    title={property.title}
                    category={property.category}
                    location={property.location}
                    price={property.price}
                    badges={property.badges}
                    wishlistButton={{
                      tooltip: 'Add to Wishlist',
                      props: {
                        onClick: () => console.log('Property added to your Wishlist!')
                      }
                    }}
                    footer={[
                      ['fi-bed', property.amenities[0]],
                      ['fi-bath', property.amenities[1]],
                      ['fi-car', property.amenities[2]]
                    ]}
                    className='h-100'
                  />
                </Col>
              ))}
            </Row> : <>
              <Row xs={1} sm={2} lg={3} className='g-4 g-md-3 g-lg-4 pt-2'>
                {propertiesRent.map((property, indx) => (
                <Col key={indx}>
                  <PropertyCard
                    href={property.href}
                    images={property.images}
                    title={property.title}
                    category={property.category}
                    location={property.location}
                    price={property.price}
                    badges={property.badges}
                    wishlistButton={{
                      tooltip: 'Add to Wishlist',
                      props: {
                        onClick: () => console.log('Property added to your Wishlist!')
                      }
                    }}
                    footer={[
                      ['fi-bed', property.amenities[0]],
                      ['fi-bath', property.amenities[1]],
                      ['fi-car', property.amenities[2]]
                    ]}
                    className='h-100'
                  />
                </Col>
              ))}
              </Row>
              <div className='text-center mt-1 pt-4'>
                <a href='#' className='d-inline-block fw-bold text-decoration-none p-2 pb-0'>
                  <i className='fi-refresh fs-sm me-2'></i>
                  Load more
                </a>
              </div>
            </>}
          </Col>
        </Row>
      </Container>
    </RealEstatePageLayout>
  )
}

export default VendorPropertiesPage
