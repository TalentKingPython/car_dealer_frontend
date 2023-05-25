import { useState } from 'react'
import dynamic from 'next/dynamic'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ImageLoader from '../../components/ImageLoader'
import FormGroup from '../../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import BlogCard from '../../components/BlogCard'
import SocialButton from '../../components/SocialButton'
import { Navigation, Pagination, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const BgParallax = dynamic(() => import('../../components/BgParallax'), { ssr: false })

const HomeAltPage = () => {

  // Property cost calculator modal
  const [modalShow, setModalShow] = useState(false)
  const handleModalClose = () => setModalShow(false)
  const handleModalShow = () => setModalShow(true)

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

  // Number of rooms radios buttons (Cost calculator modal)
  const [roomsValue, setRoomsValue] = useState('')
  const rooms = [
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'},
    {name: '5+', value: '5+'}
  ]
  
  // Recently added properties array
  const recentProperties = [
    {
      href: '/real-estate/single-v2',
      img: '/images/real-estate/recent/04.jpg',
      category: 'For sale',
      title: 'Duplex with Garage',
      location: '28 Jackson Ave Long Island City, NY 67234',
      amenities: [4, 2, 2, 126],
      description: 'Blandit lorem dictum in velit. Et nisi at faucibus mauris pretium enim. Risus sapien nisi aliquam egestas leo dignissim ut quis ac. Amet, cras orci justo, tortor nisl aliquet.',
      button: 'Sale for $160,000',
      badges: [['info', 'New'], ['success', 'Verified']]
    },
    {
      href: '/real-estate/single-v2',
      img: '/images/real-estate/recent/05.jpg',
      category: 'For rent',
      title: 'Luxury Rental Villa',
      location: '1510 Castle Hill Ave Bronx, NY 10462',
      amenities: [5, 3, 1, 140],
      description: 'Sagittis faucibus feugiat integer quam vel ornare. Tellus, vel consequat, sagittis ut penatibus urna, ante. Mattis fermentum lectus sed nisl ac viverra lacus. A at iaculis etiam nunc, diam urna in.',
      button: 'Rent from $2,850',
      badges: [['info', 'New'], ['success', 'Verified']]
    }
  ]

  // Location cards array
  const locations = [
    {
      img: '/images/real-estate/locations/usa.svg',
      title: 'Popular locations',
      decription: 'Tempor id sed suspendisse nulla.',
      links: [
        ['#', 'New York'],
        ['#', 'Los Angeles'],
        ['#', 'Houston'],
        ['#', 'Phoenix'],
        ['#', 'Philadelphia'],
        ['#', 'Chicago']
      ]
    },
    {
      img: '/images/real-estate/locations/city.svg',
      title: 'In the city',
      decription: 'Aenean in vitae lectus nunc. Dictum nunc enim.',
      links: [
        ['#', 'San Antonio'],
        ['#', 'San Diego'],
        ['#', 'Austin'],
        ['#', 'San Jose'],
        ['#', 'Columbus'],
        ['#', 'Dallas']
      ]
    },
    {
      img: '/images/real-estate/locations/field.svg',
      title: 'Rural and countryside',
      decription: 'Leo vel sit velit, nam volutpat tincidunt orci.',
      links: [
        ['#', 'Bar Harbor'],
        ['#', 'Gatlinburg'],
        ['#', 'Sedona'],
        ['#', 'Monterey'],
        ['#', 'Telluride'],
        ['#', 'Sonoma']
      ]
    }
  ]

  // Top properties
  const topProperties = [
    [
      {
        href: '/real-estate/single-v2',
        img: '/images/real-estate/top-properties/01.jpg',
        category: 'For sale',
        title: 'Duplex with Garage',
        location: '21 Pulaski Road Kings Park, NY 11754'
      },
      {
        href: '/real-estate/single-v2',
        img: ['/images/real-estate/top-properties/02.jpg', 735, 389],
        category: 'For rent',
        title: 'Villa with Pool',
        location: '118-11 Sutphin Blvd Jamaica, NY 11434'
      },
      {
        href: '/real-estate/single-v2',
        img: ['/images/real-estate/top-properties/03.jpg', 735, 523],
        category: 'For sale',
        title: 'Luxury Rental Villa',
        location: '6954 Grand AveMaspeth, NY 11378'
      }
    ],
    [
      {
        href: '/real-estate/single-v2',
        img: '/images/real-estate/top-properties/04.jpg',
        category: 'For rent',
        title: 'White Cottage',
        location: '118-11 Sutphin Blvd Jamaica, NY 11434'
      },
      {
        href: '/real-estate/single-v2',
        img: ['/images/real-estate/top-properties/05.jpg', 735, 523],
        category: 'For sale',
        title: 'Country House',
        location: '6954 Grand AveMaspeth, NY 11378'
      },
      {
        href: '/real-estate/single-v2',
        img: ['/images/real-estate/top-properties/06.jpg', 735, 389],
        category: 'For rent',
        title: 'Modern House | 90 sq.m',
        location: '21 Pulaski Road Kings Park, NY 11754'
      }
    ],
    [
      {
        href: '/real-estate/single-v2',
        img: '/images/real-estate/top-properties/07.jpg',
        category: 'For rent',
        title: 'Luxury Rental Villa',
        location: '6954 Grand AveMaspeth, NY 11378'
      },
      {
        href: '/real-estate/single-v2',
        img: ['/images/real-estate/top-properties/08.jpg', 735, 389],
        category: 'For sale',
        title: 'Condominium',
        location: '21 Pulaski Road Kings Park, NY 11754'
      },
      {
        href: '/real-estate/single-v2',
        img: ['/images/real-estate/top-properties/09.jpg', 735, 523],
        category: 'For rent',
        title: 'Family Home',
        location: '118-11 Sutphin Blvd Jamaica, NY 11434'
      }
    ]
  ]

  // Agents' avatars array
  const agents = [
    '/images/avatars/39.jpg',
    '/images/avatars/40.jpg',
    '/images/avatars/41.jpg',
    '/images/avatars/42.jpg',
    '/images/avatars/43.jpg',
    '/images/avatars/44.jpg',
    '/images/avatars/45.jpg',
    '/images/avatars/46.jpg',
    '/images/avatars/47.jpg',
    '/images/avatars/48.jpg',
    '/images/avatars/49.jpg'
  ]

  // Blog (latest posts) array
  const posts = [
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/05.jpg',
      category: {
        href: '#',
        title: 'Inspiration'
      },
      title: 'How Real Estate Drone Photography Can Elevate',
      text: 'Augue diam malesuada vitae id nisl. Fringilla egestas id proin quis consequat nibh quam sed. Ac vitae lectus...',
      author: {
        href: '#',
        img: '/images/avatars/10.jpg',
        name: 'Annette Black'
      },
      date: 'Dec 3',
      comments: '1 comment'
    },
    {
      href: '/real-estate/blog-single',
      img: '/images/real-estate/blog/06.jpg',
      category: {
        href: '#',
        title: 'Industry views'
      },
      title: '7 Tips for Achieving Maximum Coziness',
      text: 'Eget eu nunc aenean at imperdiet. Pellentesque in massa tincidunt congue. Nulla congue egestas mi volutpat varius...',
      author: {
        href: '#',
        img: '/images/avatars/08.jpg',
        name: 'Darrell Steward'
      },
      date: 'Dec 27',
      comments: '3 comments'
    }
  ]


  return (
    <RealEstatePageLayout
      pageTitle='Home v.2'
      activeNav='Home'
    >

      {/* Property cost calculator modal */}
      <Modal
        centered
        show={modalShow}
        onHide={handleModalClose}
      >
        <Modal.Header className='d-block position-relative border-0 pb-0 px-sm-5 px-4'>
          <Modal.Title as='h4' className='mt-4 text-center'>Explore your property’s value</Modal.Title>
          <CloseButton
            onClick={handleModalClose}
            aria-label='Close modal'
            className='position-absolute top-0 end-0 mt-3 me-3'
          />
        </Modal.Header>
        <Modal.Body className='px-sm-5 px-4'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId='property-city' className='mb-3'>
              <Form.Label className='fw-bold mb-2'>
                Property location
              </Form.Label>
              <Form.Select required>
                <option value=''>Choose city</option>
                <option value='Chicago'>Chicago</option>
                <option value='Dallas'>Dallas</option>
                <option value='Los Angeles'>Los Angeles</option>
                <option value='New York'>New York</option>
                <option value='San Diego'>San Diego</option>
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                Please choose the city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Select required>
                <option value=''>Choose district</option>
                <option value='Brooklyn'>Brooklyn</option>
                <option value='Manhattan'>Manhattan</option>
                <option value='Staten Island'>Staten Island</option>
                <option value='The Bronx'>The Bronx</option>
                <option value='Queens'>Queens</option>
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                Please choose the district.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='property-address' className='pt-2 mb-3'>
              <Form.Label className='fw-bold mb-2'>Address</Form.Label>
              <Form.Control placeholder='Enter your address' required />
              <Form.Control.Feedback type='invalid'>
                Please provide your property&apos;s address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='pt-2 mb-3'>
              <Form.Label className='d-block fw-bold mb-2'>Number of rooms</Form.Label>
                <ButtonGroup>
                  {rooms.map((room, indx) => (
                    <ToggleButton
                      key={indx}
                      type='radio'
                      id={`rooms-${indx}`}
                      name='rooms'
                      value={room.value}
                      checked={roomsValue === room.value}
                      onChange={(e) => setRoomsValue(e.currentTarget.value)}
                      variant='outline-secondary'
                    >{room.name}</ToggleButton>
                  ))}
                </ButtonGroup>
            </Form.Group>
            <Form.Group controlId='property-area' className='pt-2 mb-4'>
              <Form.Label className='fw-bold mb-2'>Total area, sq.m.</Form.Label>
              <Form.Control placeholder='Enter your property area' required />
              <Form.Control.Feedback type='invalid'>
                Please enter your property&apos;s area.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type='submit' variant='primary d-block w-100 mb-4'>
              <i className='fi-calculator me-2'></i>
              Calculate
            </Button>
          </Form>
        </Modal.Body>
      </Modal>


      {/* Hero */}
      <Container fluid as='section' className='my-5 pt-5 pb-lg-4 px-xxl-4'>
        <BgParallax
          imgSrc='/images/real-estate/hero-image-v2.jpg'
          type='scroll' // scale, opacity, scroll-opacity, scale-opacity
          speed={0.5} // from -1.0 to 2.0
          overlay={45} // from 0 to 100 or 'gradient' to apply gradient overlay
          contentWrapper={{
            style: {maxWidth: '856px'}
          }}
          className='card align-items-center justify-content-center border-0 p-md-5 p-4 bg-secondary overflow-hidden mt-n3'
          style={{minHeight: '65vh'}}
        >
          <h1 className='display-5 mb-5 pb-md-3 px-md-3 text-white text-center'>Easy way to find a perfect property</h1>
          <FormGroup className='d-block'>
            <Row className='g-0'>
              <Col md={10} className='d-sm-flex align-items-center'>
                <DropdownSelect
                  defaultValue='For rent'
                  icon='fi-home'
                  options={[
                    [null, 'For rent'],
                    [null, 'For sale']
                  ]}
                  variant='link ps-2 ps-sm-3'
                  className='w-sm-50 border-end-sm'
                />
                <hr className='d-sm-none my-2' />
                <DropdownSelect
                  defaultValue='Location'
                  icon='fi-map-pin'
                  options={[
                    [null, 'New York'],
                    [null, 'Chicago'],
                    [null, 'Los Angeles'],
                    [null, 'San Diego']
                  ]}
                  variant='link ps-2 ps-sm-3'
                  className='w-sm-50 border-end-sm'
                />
                <hr className='d-sm-none my-2' />
                <DropdownSelect
                  defaultValue='Property type'
                  icon='fi-list'
                  options={[
                    [null, 'Houses'],
                    [null, 'Apartments'],
                    [null, 'Commercial'],
                    [null, 'Daily rental'],
                    [null, 'New buildings']
                  ]}
                  variant='link ps-2 ps-sm-3'
                  className='w-sm-50 border-end-md'
                />
              </Col>
              <hr className='d-md-none mt-2' />
              <Col md={2} className='d-sm-flex align-items-center pt-3 pt-md-0'>
                <Button className='w-100'>Search</Button>
              </Col>
            </Row>
          </FormGroup>
        </BgParallax>
      </Container>


      {/* About */}
      <Container as='section' className='mb-5 pb-lg-4'>
        <Row>
          <Col md={7} lg={6}>
            <Row className='gy-4'>
              <Col sm={6} md={5}>
                <h2 className='h3 mb-0'>We are the best in the housing market</h2>
              </Col>
              <Col sm={6} md={{offset: 1}}>
                <p className='mb-0'>Viverra a, mauris elit, pretium senectus ut sagittis malesuada lacus. Egestas risus lorem lectus nunc. Aliquet ultrices risus lobortis cursus vel blandit magna. Eu donec hendrerit morbi tortor.</p>
              </Col>
            </Row>
            <div className='py-3'><hr className='my-4' /></div>
            <Row xs={1} sm={3} className='gy-4 gx-lg-5 gx-3 text-center px-lg-4'>
              <Col>
                <div className='d-flex justify-content-center mb-3'>
                  <ImageLoader
                    src='/images/real-estate/brands/trustpilot.svg'
                    width={144}
                    height={56}
                    alt='Trustpilot'
                  />
                </div>
                <h5 className='mb-1'>Excellent</h5>
                <span className='fs-sm'>4.8 out of 5</span>
              </Col>
              <Col>
                <h5 className='h2 mb-2'>1.2M+</h5>
                <span className='fs-sm'>Property listings worldwide</span>
              </Col>
              <Col>
                <h5 className='h2 mb-2'>$3.8K</h5>
                <span className='fs-sm'>Average annual earnings per landlord</span>
              </Col>
            </Row>
          </Col>
          <Col md={5} lg={{offset: 1}} className='d-flex justify-content-center'>
            <ImageLoader
              src='/images/real-estate/illustrations/find-alt.svg'
              width={522}
              height={457}
              alt='Illustration'
            />
          </Col>
        </Row>
      </Container>


      {/* Recently listed properties (carousel) */}
      <Container as='section' className='mt-n3 mt-md-0 mb-5 pb-2 pb-lg-4'>
        <div className='d-flex align-items-end justify-content-between pb-2'>
          <h2 className='h3 mb-0'>Newly listed properties</h2>
          <Button as={Link} href='/real-estate/catalog?category=sale' variant='link fw-normal ms-2 p-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>

        {/* Swiper slider */}
        <Swiper
          modules={[Navigation, EffectFade]}
          effect='fade'
          navigation={{
            prevEl: '#prevProprty',
            nextEl: '#nextProprty'
          }}
          loop
          autoHeight
          slidesPerView={1}
        >
          {recentProperties.map((property, indx) => (
            <SwiperSlide key={indx} className='bg-light py-4'>
              <Row>
                <Col md={7} lg={8} className='mb-md-0 mb-3'>
                  <div className='d-flex position-relative pe-lg-5'>
                    <div className='position-absolute top-0 start-0 zindex-1 m-3 p-1'>
                      {property.badges.map((badge, indx) => (
                        <span key={indx} className={`badge bg-${badge[0]} fs-sm me-2`}>{badge[1]}</span>
                      ))}
                    </div>
                    <ImageLoader
                      src={property.img}
                      width={808}
                      height={480}
                      alt='Image'
                      className='rounded-3'
                    />
                  </div>
                </Col>
                <Col md={5} lg={4}>
                  <span className='d-inline-block fs-sm text-uppercase text-primary mb-2 from-top'>{property.category}</span>
                  <div className='from-start delay-2'>
                    <h3 className='h4 mb-2'>{property.title}</h3>
                    <p className='mb-md-4 mb-3 fs-sm'>{property.location}</p>
                    <ul className='d-flex mb-md-4 mb-3 list-unstyled'>
                      <li className='me-3 pe-3 border-end'>
                        <b className='me-1'>{property.amenities[0]}</b>
                        <i className='fi-bed mt-n1 lead align-middle text-muted'></i>
                      </li>
                      <li className='me-3 pe-3 border-end'>
                        <b className='me-1'>{property.amenities[1]}</b>
                        <i className='fi-bath mt-n1 lead align-middle text-muted'></i>
                      </li>
                      <li className='me-3 pe-3 border-end'>
                        <b className='me-1'>{property.amenities[2]}</b>
                        <i className='fi-car mt-n1 lead align-middle text-muted'></i>
                      </li>
                      <li><b>{property.amenities[3]} </b>sq.m</li>
                    </ul>
                    <p className='mb-4 pb-md-2'>{property.description}</p>
                  </div>
                  <ButtonGroup size='lg' className='scale-up delay-3'>
                    <Button as={Link} href={property.href}>{property.button}</Button>
                    <OverlayTrigger
                      placement='top'
                      overlay={<Tooltip>Add to Wishlist</Tooltip>}
                    >
                      <Button variant='primary px-3 border-start border-light'>
                        <i className='fi-heart fs-5'></i>
                      </Button>
                    </OverlayTrigger>
                  </ButtonGroup>
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External Prev/Next buttons */}
        <div className='d-flex pb-1 pb-md-2'>
          <Button id='prevProprty' variant='prev position-relative mx-2' />
          <Button id='nextProprty' variant='next position-relative mx-2' />
        </div>
      </Container>

      
      {/* Locations */}
      <Container as='section' className='mb-5 pb-lg-5 pb-4'>
        <div className='d-flex align-items-start justify-content-between mb-3 mb-md-4 pb-md-2'>
          <div className='d-flex flex-md-row flex-column align-items-center'>
            <h2 className='h3 mb-4 mb-md-0'>Discover locations</h2>
            <Nav as='ul' variant='tabs' defaultActiveKey='forRent' className='mb-0 ms-md-4 ms-n3 ps-lg-2'>
              <Nav.Item as='li'>
                <Nav.Link eventKey='forRent'>For rent</Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey='forSale'>For sale</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Button as={Link} href='/real-estate/catalog?category=rent' variant='link fw-normal ms-2 p-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>

        {/* Carousel on screens < 768px */}
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '#paginationLocations',
            clickable: true
          }}
          spaceBetween={8}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 }
          }}
          className='py-3 mx-n2'
        >
          {locations.map((location, indx) => (
            <SwiperSlide key={indx} className='h-auto'>
              <Card className='card-hover border-0 shadow-sm h-100 p-2 mx-2'>
                <Card.Body className='px-4 pt-4 pb-2'>
                  <div className='d-flex mb-3'>
                    <ImageLoader
                      src={location.img}
                      width={80}
                      height={80}
                      alt='Icon'
                      className='rounded-3'
                    />
                  </div>
                  <h4 className='h5 mb-1'>{location.title}</h4>
                  <span className='fs-sm text-muted'>{location.decription}</span>
                  <hr className='my-4' />
                  <Nav as='ul' className='flex-column mb-0'>
                    {location.links.map((link, indx) => (
                      <Nav.Item key={indx} as='li' className='mb-2 pb-1'>
                        <Nav.Link as={Link} href={link[0]} active={false} className='p-0 fw-normal'>{link[1]}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External pagination (bullets) buttons */}
        <div id='paginationLocations' className='swiper-pagination position-relative bottom-0 d-md-none py-2 mt-2'></div>
      </Container>


      {/* Top properties */}
      <Container fluid className='px-xxl-4 pb-lg-4 pb-1 mb-5 mt-n3'>
        <h2 className='h3 mb-lg-4 pb-3 text-center'>Top properties on Finder</h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '#prevProprties',
            nextEl: '#nextProprties'
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            1320: { slidesPerView: 2 }
          }}
        >
          {topProperties.map((property, indx) => (
            <SwiperSlide key={indx}>
              <Row className='gy-md-0 gy-sm-4 gy-3 gx-sm-4 gx-0'>
                <Col md={7}>
                  <Card
                    as={Link}
                    href={property[0].href}
                    className='text-decoration-none text-light bg-size-cover bg-position-center border-0 overflow-hidden h-100'
                    style={{minHeight: '18.75rem', backgroundImage: `url(${property[0].img})`}}
                  >
                    <span className='img-gradient-overlay'></span>
                    <Card.Body className='pb-0'></Card.Body>
                    <Card.Footer className='d-block content-overlay border-0 pt-5 pb-4 mt-2'>
                      <div className='fs-sm text-uppercase pt-2 mb-1'>{property[0].category}</div>
                      <h3 className='h5 text-light mb-1'>{property[0].title}</h3>
                      <div className='fs-sm opacity-70'>
                        <i className='fi-map-pin me-1'></i>
                        {property[0].location}
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col md={5}>
                  <Card
                    as={Link}
                    href={property[1].href}
                    className='border-0 overflow-hidden text-decoration-none text-light mb-sm-4 mb-3'
                  >
                    <Card.Body className='d-flex p-0 position-relative'>
                      <ImageLoader
                        src={property[1].img[0]}
                        width={property[1].img[1]}
                        height={property[1].img[2]}
                        alt='Image'
                      />
                      <span className='img-gradient-overlay zindex-1'></span>
                      <div className='position-absolute start-0 bottom-0 m-n1 p-4 zindex-5'>
                        <div className='fs-sm text-uppercase pt-2 mb-1'>{property[1].category}</div>
                        <h3 className='h5 text-light mb-1'>{property[1].title}</h3>
                        <div className='fs-sm opacity-70'>
                          <i className='fi-map-pin me-1'></i>
                          {property[1].location}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card
                    as={Link}
                    href={property[2].href}
                    className='border-0 overflow-hidden text-decoration-none text-light'
                  >
                    <Card.Body className='d-flex p-0 position-relative'>
                      <ImageLoader
                        src={property[2].img[0]}
                        width={property[2].img[1]}
                        height={property[2].img[2]}
                        alt='Image'
                      />
                      <span className='img-gradient-overlay zindex-1'></span>
                      <div className='position-absolute start-0 bottom-0 m-n1 p-4 zindex-5'>
                        <div className='fs-sm text-uppercase pt-2 mb-1'>{property[2].category}</div>
                        <h3 className='h5 text-light mb-1'>{property[2].title}</h3>
                        <div className='fs-sm opacity-70'>
                          <i className='fi-map-pin me-1'></i>
                          {property[2].location}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External Prev/Next buttons */}
        <div className='d-flex justify-content-center py-md-2 mt-4'>
          <Button id='prevProprties' variant='prev position-relative mx-2' />
          <Button id='nextProprties' variant='next position-relative mx-2' />
        </div>
      </Container>


      {/* Agents */}
      <Container as='section' className='mb-5 pb-lg-5 pb-md-4'>
        <Card className='border-0 bg-secondary py-lg-5 py-4'>
          <Card.Body className='text-center p-4'>
            <h2>Find your agent</h2>
            <p className='mx-auto mb-md-5 mb-4 pb-lg-3' style={{maxWidth: '53.125rem'}}>We have the most comprehensive directory of estate agents to help you with all your property needs. Whether buying, selling or renting start your search to find the right local expertise.</p>
            <div className='d-flex align-items-center justify-content-center flex-wrap mb-md-5 mb-4 pb-lg-3 ps-3 pt-4'>
              {agents.map((agent, indx) => (
                <div key={indx} className='d-flex position-relative border border-5 border-white rounded-circle bg-white ms-n3 mt-n4' style={{width: 120, height: 120, zIndex: indx + 1}}>
                  <ImageLoader
                    src={agent}
                    width={220}
                    height={220}
                    alt='Avatar'
                    className='rounded-circle'
                  />
                </div>
              ))}
            </div>
            <Button as={Link} href='#' size='lg' className='w-sm-auto w-100'>
              Find agent
              <i className='fi-chevron-right ms-2'></i>
            </Button>
          </Card.Body>
        </Card>
      </Container>


      {/* Blog (latest posts) */}
      <Container as='section' className='mb-5 pb-lg-5 pb-4'>
        <h2 className='h3 mb-4 pb-2 text-md-start text-center'>Latest property news</h2>
        <Row className='gy-5'>
          <Col lg={7}>
            {posts.map((post, indx) => (
              <BlogCard
                key={indx}
                type='card-horizontal'
                href={post.href}
                img={{
                  src: post.img,
                  alt: 'Image'
                }}
                category={post.category}
                title={post.title}
                text={post.text}
                author={post.author}
                date={post.date}
                comments={post.comments}
                className='mb-4'
              />
            ))}
            <div className='pt-2'>
              <Button as={Link} href='/real-estate/blog' size='lg' variant='outline-primary w-sm-auto w-100'>
                More blog posts
              </Button>
            </div>
          </Col>
          <Col xs={1} className='d-none d-lg-block'>
            <hr className='hr-vertical mx-auto' />
          </Col>
          <Col lg={4}>
            <Row xs={1} md={2} lg={1} className='gy-5 text-md-start text-center'>

              {/* Subscription */}
              <Col className='pb-lg-2'>
                <h3 className='h5'>Sign up for our newsletter</h3>
                <p className='mb-4'>Enter your email to receive the latest news and updates from Finder.</p>
                <FormGroup className='mx-auto' style={{maxWidth: '26rem'}}>
                  <InputGroup>
                    <InputGroup.Text className='text-muted'>
                      <i className='fi-mail'></i>
                    </InputGroup.Text>
                    <Form.Control placeholder='Your email' />
                  </InputGroup>
                  <Button>Subscribe</Button>
                </FormGroup>
              </Col>

              {/* Follow */}
              <Col>
                <h3 className='h5'>Follow us</h3>
                <p className='mb-4'>Get the latest news and inspiration about the housing market.</p>
                <div className='ms-n2 mt-n2'>
                  <SocialButton href='#' variant='solid' brand='instagram' roundedCircle className='ms-2 mt-2' />
                  <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='ms-2 mt-2' />
                  <SocialButton href='#' variant='solid' brand='whatsapp' roundedCircle className='ms-2 mt-2' />
                  <SocialButton href='#' variant='solid' brand='telegram' roundedCircle className='ms-2 mt-2' />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>


      {/* Links */}
      <Container as='section' className='mb-5 pb-md-3 pb-lg-5'>
        <Row xs={1} md={3} className='gy-3'>
          
          {/* Calculate property cost */}
          <Col>
            <Card className='card-hover h-100 border-0 bg-faded-warning position-relative'>
              <Card.Body className='pb-2'>
                <h5 className='mb-2 pb-1'>Calculate the cost of your property</h5>
                <p className='mb-0'>We can calculate your approximate rent.</p>
              </Card.Body>
              <Card.Footer className='py-1 border-0'>
                <Button variant='link stretched-link text-warning mb-3 px-0' onClick={handleModalShow}>Calculate</Button>
              </Card.Footer>
            </Card>
          </Col>

          {/* Help center link */}
          <Col>
            <Card className='card-hover h-100 border-0 bg-faded-accent position-relative'>
              <Card.Body className='pb-2'>
                <h5 className='mb-2 pb-1'>Visit our Help Center</h5>
                <p className='mb-0'>Here you can find frequently asked questions.</p>
              </Card.Body>
              <Card.Footer className='py-1 border-0'>
                <Button as={Link} href='/real-state/help-center' variant='link stretched-link text-accent mb-3 px-0'>Go to FAQs</Button>
              </Card.Footer>
            </Card>
          </Col>

          {/* Help center link */}
          <Col>
            <Card className='card-hover h-100 border-0 bg-faded-success position-relative'>
              <Card.Body className='pb-2'>
                <h5 className='mb-2 pb-1'>How it works</h5>
                <p className='mb-0'>Here is a step-by-step guide for renters.</p>
              </Card.Body>
              <Card.Footer className='py-1 border-0'>
                <Button as={Link} href='/real-state/about' variant='link stretched-link text-success mb-3 px-0'>Get started</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </RealEstatePageLayout>
  )
}

export default HomeAltPage
