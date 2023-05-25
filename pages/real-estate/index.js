import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ProgressBar from 'react-bootstrap/ProgressBar'
import ImageLoader from '../../components/ImageLoader'
import FormGroup from '../../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import IconBox from '../../components/IconBox'
import PropertyCard from '../../components/PropertyCard'
import PropertyCardOverlay from '../../components/PropertyCardOverlay'
import CardImageHoverOverlay from '../../components/CardImageHoverOverlay'
import ImageSwap from '../../components/ImageSwap'
import SocialButton from '../../components/SocialButton'
import StarRating from '../../components/StarRating'
import ReactSlider from 'react-slider'
import { Navigation, Pagination, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const HomePage = () => {

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

  // Categories array
  const categories = [
    [
      {
        href: '/real-estate/catalog?category=rent',
        media: 'fi-real-estate-house',
        title: 'Houses'
      },
      {
        href: '/real-estate/catalog?category=sale',
        media: 'fi-apartment',
        title: 'Apartments'
      },
      {
        href: '/real-estate/catalog?category=rent',
        media: 'fi-shop',
        title: 'Commercial'
      },
      {
        href: '/real-estate/catalog?category=rent',
        media: 'fi-rent',
        title: 'Daily rental'
      },
      {
        href: '/real-estate/catalog?category=sale',
        media: 'fi-house-chosen',
        title: 'New buildings'
      }
    ],
    [
      {
        href: '/real-estate/catalog?category=rent',
        media: 'fi-single-bed',
        title: 'Room'
      },
      {
        href: '/real-estate/catalog?category=sale',
        media: 'fi-computer',
        title: 'Office'
      },
      {
        href: '/real-estate/catalog?category=rent',
        media: 'fi-real-estate-buy',
        title: 'Land'
      },
      {
        href: '/real-estate/catalog?category=sale',
        media: 'fi-parking',
        title: 'Parking lot'
      }
    ]
  ]

  // Properties (Top offers) array
  const properties = [
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/01.jpg', 467, 305, 'Image']],
      title: '3-bed Apartment | 67 sq.m',
      category: 'For rent',
      location: '3811 Ditmars Blvd Astoria, NY 11105',
      price: '$1,629',
      badges: [['success', 'Verified'], ['info', 'New']],
      footer: [3, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/02.jpg', 467, 305, 'Image']],
      title: 'Family Home| 120 sq.m',
      category: 'For sale',
      location: '67-04 Myrtle Ave Glendale, NY 11385',
      price: '$84,000',
      badges: [['success', 'Verified'], ['danger', 'Featured']],
      footer: [4, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/03.jpg', 467, 305, 'Image']],
      title: 'Greenpoint Rentals | 85 sq.m',
      category: 'For rent',
      location: '1510 Castle Hill Ave Bronx, NY 10462',
      price: '$1,330',
      badges: [['success', 'Verified']],
      footer: [1, 1, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/04.jpg', 467, 305, 'Image']],
      title: 'Studio | 32 sq.m',
      category: 'For sale',
      location: '140-60 Beech Ave Flushing, NY 11355',
      price: '$65,000',
      badges: [['success', 'Verified'], ['info', 'New']],
      footer: [1, 1, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/05.jpg', 467, 305, 'Image']],
      title: 'Cottage | 120 sq.m',
      category: 'For sale',
      location: '42 Broadway New York, NY 10004',
      price: '$184,000',
      badges: [['success', 'Verified']],
      footer: [4, 2, 1]
    }
  ]

  // Cities array
  const cities = [
    {
      href: '/real-estate/catalog?category=sale',
      img: '/images/real-estate/city/new-york.jpg',
      city: 'New York',
      forSale: [893, 20],
      forRent: [3756, 80]
    },
    {
      href: '/real-estate/catalog?category=rent',
      img: '/images/real-estate/city/chicago.jpg',
      city: 'Chicago',
      forSale: [268, 15],
      forRent: [1540, 85]
    },
    {
      href: '/real-estate/catalog?category=sale',
      img: '/images/real-estate/city/los-angeles.jpg',
      city: 'Los Angeles',
      forSale: [2750, 80],
      forRent: [692, 20]
    },
    {
      href: '/real-estate/catalog?category=rent',
      img: '/images/real-estate/city/san-diego.jpg',
      city: 'San Diego',
      forSale: [1739, 48],
      forRent: [1854, 52]
    },
    {
      href: '/real-estate/catalog?category=sale',
      img: '/images/real-estate/city/dallas.jpg',
      city: 'Dallas',
      forSale: [2567, 68],
      forRent: [1204, 32]
    }
  ]

  // Partners (brands) array
  const partners = [
    {
      href: '#',
      img: ['/images/real-estate/brands/01_gray.svg', '/images/real-estate/brands/01_color.svg']
    },
    {
      href: '#',
      img: ['/images/real-estate/brands/02_gray.svg', '/images/real-estate/brands/02_color.svg']
    },
    {
      href: '#',
      img: ['/images/real-estate/brands/03_gray.svg', '/images/real-estate/brands/03_color.svg']
    },
    {
      href: '#',
      img: ['/images/real-estate/brands/04_gray.svg', '/images/real-estate/brands/04_color.svg']
    },
    {
      href: '#',
      img: ['/images/real-estate/brands/05_gray.svg', '/images/real-estate/brands/05_color.svg']
    },
    {
      href: '#',
      img: ['/images/real-estate/brands/06_gray.svg', '/images/real-estate/brands/06_color.svg']
    }
  ]


  return (
    <RealEstatePageLayout
      pageTitle='Home v.1'
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
      <Container as='section' className='pt-5 my-5 pb-lg-4'>
        <Row className='pt-0 pt-md-2 pt-lg-0'>
          <Col md={{span: 5, order: 2}} lg={6} xl={7} className='mb-4 mb-lg-3'>
            <ImageLoader
              src='/images/real-estate/hero-image.jpg'
              width={1492}
              height={1228}
              alt='Hero image'
            />
          </Col>
          <Col md={{span: 7, order: 1}} lg={6} xl={5} className='pt-xl-5 pe-lg-0 mb-3 text-md-start text-center'>
            <h1 className='display-4 mt-lg-5 mb-md-4 mb-3 pt-md-4 pb-lg-2'>Easy way to find <br/> a perfect property</h1>
            <p className='position-relative lead me-lg-n5'>We provide a complete service for the sale, purchase or rental of real estate. We have been operating more than 10 years. Search millions of apartments and houses on Finder.</p>
          </Col>

          {/* Search property form group */}
          <Col xs={{order: 3}} lg={10} xl={8} className='position-relative mt-lg-n5 zindex-2'>
            <FormGroup className='d-block'>
              <Row className='g-0 ms-sm-n2'>
                <Col md={8} className='d-sm-flex align-items-center'>
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
                <Col md={4} className='d-sm-flex align-items-center pt-4 pt-md-0'>
                  <div className='d-flex align-items-center w-100 pt-2 pb-4 py-sm-0 ps-2 ps-sm-3'>
                    <i className='fi-cash fs-lg text-muted me-2'></i>
                    <span className='text-muted'>Price</span>
                    <ReactSlider
                      className='range-slider range-slider-single me-0 me-sm-3'
                      thumbClassName='range-slider-handle'
                      trackClassName='range-slider-track'
                      min={0}
                      max={1000}
                      defaultValue={450}
                      ariaLabel={['Handle']}
                      ariaValuetext={state => `Handle value ${state.valueNow}`}
                      step={1}
                      renderThumb={(props, state) => (<div {...props}>
                        <div className='range-slider-tooltip'>$ {state.valueNow}</div>
                      </div>)}
                    />
                  </div>
                  <Button variant='primary btn-icon px-3 w-100 w-sm-auto flex-shrink-0'>
                    <i className='fi-search'></i>
                    <span className='d-sm-none d-inline-block ms-2'>Search</span>
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
      </Container>


      {/* Categories */}
      <Container as='section' className='mb-5'>
        <Row xs={2} sm={3} lg={6} className='g-3 g-xl-4'>
          {categories[0].map((category, indx) => (
            <Col key={indx}>
              <IconBox
                href={category.href}
                media={category.media}
                mediaShape='circle'
                title={category.title}
                type='card-shadow'
                align='center'
              />
            </Col>
          ))}
          <Col>
            <Dropdown className='h-100'>
              <Dropdown.Toggle as='div' className='dropdown-toggle-flush h-100 bg-transparent border-0 shadow-none p-0'>
                <IconBox
                  media='fi-dots-horisontal'
                  mediaShape='circle'
                  title='More'
                  type='card-shadow'
                  align='center'
                />
              </Dropdown.Toggle>
              <Dropdown.Menu align={{sm: 'end'}} className='my-2'>
                {categories[1].map((category, indx) => (
                  <Dropdown.Item key={indx} as={Link} href={category.href} className='fw-bold'>
                    <i className={`${category.media} fs-base opacity-60 me-2`}></i>
                    {category.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>


      {/* Services (carousel on screens < 992px) */}
      <Container as='section' className='mb-5 mt-n3 mt-lg-0'>
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '#paginationServices',
            clickable: true
          }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 }
          }}
          className='py-3 mx-n2'
        >
          <SwiperSlide>
            <Card className='card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center mx-2'>
              <div className='d-flex justify-content-center my-3'>
                <ImageLoader src='/images/real-estate/illustrations/buy.svg' width={256} height={201} alt='Image' />
              </div>
              <Card.Body>
                <h2 className='h4 card-title'>Buy a property</h2>
                <p className='card-text fs-sm'>Blandit lorem dictum in velit. Et nisi at faucibus mauris pretium enim. Risus sapien nisi aliquam egestas leo dignissim.</p>
              </Card.Body>
              <Card.Footer className='pt-0 border-0'>
                <Button as={Link} href='/real-estate/catalog?category=sale' variant='outline-primary stretched-link'>Find a home</Button>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center mx-2'>
              <div className='d-flex justify-content-center my-3'>
                <ImageLoader src='/images/real-estate/illustrations/sell.svg' width={256} height={201} alt='Image' />
              </div>
              <Card.Body>
                <h2 className='h4 card-title'>Sell a property</h2>
                <p className='card-text fs-sm'>Amet, cras orci justo, tortor nisl aliquet. Enim tincidunt tellus nunc, nulla arcu posuere quis. Velit turpis orci venenatis.</p>
              </Card.Body>
              <Card.Footer className='pt-0 border-0'>
                <Button as={Link} href='/real-estate/add-property' variant='outline-primary stretched-link'>Place an ad</Button>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center mx-2'>
              <div className='d-flex justify-content-center my-3'>
                <ImageLoader src='/images/real-estate/illustrations/rent.svg' width={256} height={201} alt='Image' />
              </div>
              <Card.Body>
                <h2 className='h4 card-title'>Rent a property</h2>
                <p className='card-text fs-sm'>Sed sed aliquet sed id purus malesuada congue viverra. Habitant quis lacus, volutpat natoque ipsum iaculis cursus.</p>
              </Card.Body>
              <Card.Footer className='pt-0 border-0'>
                <Button as={Link} href='/real-estate/catalog?category=rent' variant='outline-primary stretched-link'>Find a rental</Button>
              </Card.Footer>
            </Card>
          </SwiperSlide>
        </Swiper>

        {/* External pagination (bullets) */}
        <div id='paginationServices' className='swiper-pagination position-relative bottom-0 d-md-none mt-2'></div>
      </Container>


      {/* Top property offers (carousel) */}
      <Container as='section' className='mb-5 pb-md-4'>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h2 className='h3 mb-0'>Top offers</h2>
          <Button as={Link} href='/real-estate/catalog?category=rent' variant='link fw-normal ms-sm-3 p-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>

        {/* Swiper slider */}
        <div className='position-relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prevProperties',
              nextEl: '#nextProperties'
            }}
            pagination={{
              el: '#paginationProperties',
              clickable: true
            }}
            loop
            spaceBetween={8}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 }
            }}
            className='pt-3 pb-4 mx-n2'
          >
            {properties.map((property, indx) => (
              <SwiperSlide key={indx} className='h-auto'>
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
                    ['fi-bed', property.footer[0]],
                    ['fi-bath', property.footer[1]],
                    ['fi-car', property.footer[2]]
                  ]}
                  className='h-100 mx-2'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prevProperties' variant='prev' className='d-none d-xxl-block mt-n5 ms-n5' />
          <Button id='nextProperties' variant='next' className='d-none d-xxl-block mt-n5 me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='paginationProperties' className='swiper-pagination position-relative bottom-0 py-2 mt-1'></div>
      </Container>


      {/* Recently added properties */}
      <Container as='section' className='pb-4 mb-5'>
        <div className='d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2'>
          <div className='d-flex w-100 align-items-center justify-content-between justify-content-lg-start'>
            <h2 className='h3 mb-0 me-md-4'>Added today</h2>

            {/* Dropdown displays on screens < 768px */}
            <DropdownSelect
              defaultValue='Houses'
              options={[
                [null, 'Apartments'],
                [null, 'Houses'],
                [null, 'Rooms'],
                [null, 'Commercial']
              ]}
              variant='outline-secondary btn-sm'
              className='d-md-none'
            />

            {/* Nav tabs disply on screens > 768px */}
            <Nav
              as='ul'
              variant='tabs'
              defaultActiveKey='houses'
              className='d-none d-md-flex ps-lg-2 mb-0'
            >
              <Nav.Item as='li'>
                <Nav.Link eventKey='apartments' className='fs-sm mb-2 mb-md-0'>Apartments</Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey='houses' className='fs-sm mb-2 mb-md-0'>Houses</Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey='rooms' className='fs-sm mb-2 mb-md-0'>Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey='commercial' className='fs-sm mb-2 mb-md-0'>Commercial</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          
          <Button as={Link} href='/real-estate/catalog?category=rent' variant='link fw-normal d-none d-lg-block p-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>

        {/* Grid of properties */}
        <Row className='g-4'>
          <Col md={6}>
            <PropertyCardOverlay
              img={{
                src: '/images/real-estate/recent/01.jpg',
                alt: 'Background image'
              }}
              href='/real-estate/single-v1'
              title='Luxury Rental Villa'
              category='For rental'
              location='118-11 Sutphin Blvd Jamaica, NY 11434'
              overlay
              badges={[['success', 'Verified'], ['info', 'New']]}
              button={{
                href: '/real-estate/single-v1',
                title: 'From $3,850',
                variant: 'primary',
                wishlistProps: {
                  onClick: () => console.log('You\'ve added Luxury Rental Villa property to your wishlist!')
                }
              }}
              className='h-100'
            />
          </Col>
          <Col md={6}>
            <PropertyCardOverlay
              img={{
                src: '/images/real-estate/recent/02.jpg',
                alt: 'Background image'
              }}
              href='/real-estate/single-v1'
              title='Duplex with Garage'
              category='For sale'
              location='21 Pulaski Road Kings Park, NY 11754'
              overlay
              badges={[['info', 'New']]}
              button={{
                href: '/real-estate/single-v1',
                title: '$200,410',
                variant: 'primary',
                wishlistProps: {
                  onClick: () => console.log('You\'ve added Duplex with Garage property to your wishlist!')
                }
              }}
              className='mb-4'
            />
            <PropertyCardOverlay
              img={{
                src: '/images/real-estate/recent/03.jpg',
                alt: 'Background image'
              }}
              href='/real-estate/single-v1'
              title='Country House'
              category='For sale'
              location='6954 Grand AveMaspeth, NY 11378'
              overlay
              badges={[['info', 'New']]}
              button={{
                href: '/real-estate/single-v1',
                title: '$162,000',
                variant: 'primary',
                wishlistProps: {
                  onClick: () => console.log('You\'ve added Country House property to your wishlist!')
                }
              }}
            />
          </Col>
        </Row>
      </Container>


      {/* Property cost calculator */}
      <Container as='section' className='mb-5 pb-2 pb-lg-4'>
        <Row className='align-items-center'>
          <Col md={5}>
            <div className='d-flex justify-content-center justify-content-md-start mb-md-0 mb-4'>
              <ImageLoader
                src='/images/real-estate/illustrations/calculator.svg'
                width={416}
                height={400}
                alt='Illustration'
              />
            </div>
          </Col>
          <Col md={7} xxl={6} className='text-md-start text-center'>
            <h2>Calculate the cost of your property</h2>
            <p className='pb-3 fs-lg'>Real estate appraisal is a procedure that allows you to determine the average market value of real estate (apartment, house, land, etc.). Calculate the cost of your property with our new Calculation Service.</p>
            <Button size='lg' onClick={handleModalShow}>
              <i className='fi-calculator me-2'></i>
              Calculate
            </Button>
          </Col>
        </Row>
      </Container>


      {/* Properties by city (carousel) */}
      <Container as='section' className='mb-5 pb-2'>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h2 className='h3 mb-0'>Search property by city</h2>
          <Link href='/real-estate/catalog?category=rent' className='btn btn-link fw-normal ms-md-3 pb-0 pe-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Link>
        </div>

        {/* Swiper slider */}
        <div className='position-relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prevCity',
              nextEl: '#nextCity'
            }}
            pagination={{
              el: '#paginationCity',
              clickable: true
            }}
            loop
            spaceBetween={8}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 }
            }}
            className='pt-3 pb-4 mx-n2'
          >
            {cities.map((city, indx) => (
              <SwiperSlide key={indx}>
                <Card as={Link} href={city.href} className='card-hover shadow-sm border-0 mx-2'>
                  <CardImageHoverOverlay
                    img={{
                      src: city.img,
                      size: [467, 360],
                      alt: city.city
                    }}
                  >
                    <div className='mb-2'>
                      <h4 className='fs-xs fw-normal text-light mb-2'>
                        <i className='fi-wallet fs-sm align-middle mt-n1 me-2'></i>
                        Property for sale
                      </h4>
                      <div className='d-flex align-items-center'>
                        <ProgressBar variant='danger' now={city.forSale[1]} className='progress-light w-100' />
                        <span className='text-light fs-sm ps-1 ms-2'>{city.forSale[0]}</span>
                      </div>
                    </div>
                    <div className='pt-1'>
                      <h4 className='fs-xs fw-normal text-light mb-2'>
                        <i className='fi-home fs-sm align-middle mt-n1 me-2'></i>
                        Property for rent
                      </h4>
                      <div className='d-flex align-items-center'>
                        <ProgressBar variant='success' now={city.forRent[1]} className='progress-light w-100' />
                        <span className='text-light fs-sm ps-1 ms-2'>{city.forRent[0]}</span>
                      </div>
                    </div>
                  </CardImageHoverOverlay>
                  <Card.Body className='text-center'>
                    <Card.Title as='h3' className='fs-base text-nav mb-0'>{city.city}</Card.Title>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prevCity' variant='prev' className='d-none d-xxl-block mt-n5 ms-n5' />
          <Button id='nextCity' variant='next' className='d-none d-xxl-block mt-n5 me-n5' />
        </div>

        {/* External pagination (bullets) */}
        <div id='paginationCity' className='swiper-pagination position-relative bottom-0 py-2 mt-1'></div>
      </Container>


      {/* Partners (carousen on screens < 1200px) */}
      <Container as='section' className='mb-5 pb-2 pb-lg-4'>
        <h2 className='h3 mb-4 text-center text-md-start'>Our partners</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '#paginationPartners',
            clickable: true
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            500: { slidesPerView: 4 },
            992: { slidesPerView: 5, spaceBetween: 16 },
            1200: { slidesPerView: 6, spaceBetween: 24 }
          }}
        >
          {partners.map((partner, indx) => (
            <SwiperSlide key={indx}>
              <ImageSwap
                href={partner.href}
                swapFrom={{
                  imgSrc: partner.img[0],
                  imgSize: [196, 80],
                  imgAlt: 'Image from'
                }}
                swapTo={{
                  imgSrc: partner.img[1],
                  imgSize: [196, 80],
                  imgAlt: 'Image to'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External pagination (bullets) buttons */}
        <div id='paginationPartners' className='swiper-pagination position-relative bottom-0 d-xl-none py-2 mt-2'></div>
      </Container>


      {/* Top agents (slider) */}
      <Container as='section' className='mb-5 pb-2 pb-lg-4'>
        <h2 className='h3 mb-0 pb-2 text-center text-md-start'>Top real estate agents</h2>
        <Swiper
          modules={[Navigation, EffectFade]}
          effect='fade'
          navigation={{
            prevEl: '#prevAgents',
            nextEl: '#nextAgents'
          }}
          loop
          autoHeight
          slidesPerView={1}
        >

          {/* Item */}
          <SwiperSlide className='bg-light py-4'>
            <Row className='align-items-center'>
              <Col xl={4} className='d-none d-xl-flex'>
                <ImageLoader
                  src='/images/real-estate/agents/01.jpg'
                  width={416}
                  height={400}
                  alt='Agent'
                  className='rounded-3'
                />
              </Col>
              <Col sm={4} md={5} xl={4} className='d-flex'>
                <ImageLoader
                  src='/images/real-estate/agents/02.jpg'
                  width={475}
                  height={457}
                  alt='Agent'
                  className='rounded-3'
                />
              </Col>
              <Col sm={8} md={7} xl={4} className='px-4 px-sm-3 px-md-0 ms-md-n4 mt-n5 mt-sm-0 py-3'>
                <Card className='border-0 shadow-sm ms-sm-n5'>
                  <Card.Body as='blockquote' className='blockquote'>
                    <h4 style={{maxWidth: '22rem'}}>&quot;I will select the best accommodation for you&quot;</h4>
                    <p className='d-sm-none d-lg-block'>Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. Vel metus odio at faucibus ac. Neque id placerat et id ut. Scelerisque eu mi ullamcorper sit urna. Est volutpat dignissim elementum nec.</p>
                    <footer className='d-flex justify-content-between'>
                      <div className='pe3'>
                        <h6 className='mb-0'>Floyd Miles</h6>
                        <div className='text-muted fw-normal fs-sm mb-3'>Imperial Property Group Agent</div>
                        <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='mb-2 me-2' />
                        <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='mb-2 me-2' />
                        <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle className='mb-2' />
                      </div>
                      <div>
                        <StarRating rating='4.9' />
                        <div className='text-muted fs-sm mt-1'>45 reviews</div>
                      </div>
                    </footer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </SwiperSlide>

          {/* Item */}
          <SwiperSlide className='bg-light py-4'>
            <Row className='align-items-center'>
              <Col xl={4} className='d-none d-xl-flex'>
                <ImageLoader
                  src='/images/real-estate/agents/02.jpg'
                  width={416}
                  height={400}
                  alt='Agent'
                  className='rounded-3'
                />
              </Col>
              <Col sm={4} md={5} xl={4} className='d-flex'>
                <ImageLoader
                  src='/images/real-estate/agents/03.jpg'
                  width={475}
                  height={457}
                  alt='Agent'
                  className='rounded-3'
                />
              </Col>
              <Col sm={8} md={7} xl={4} className='px-4 px-sm-3 px-md-0 ms-md-n4 mt-n5 mt-sm-0 py-3'>
                <Card className='border-0 shadow-sm ms-sm-n5'>
                  <Card.Body as='blockquote' className='blockquote'>
                    <h4 style={{maxWidth: '22rem'}}>&quot;I don&apos;t say no, I just figure out a way to make it work&quot;</h4>
                    <p className='d-sm-none d-lg-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    <footer className='d-flex justify-content-between'>
                      <div className='pe3'>
                        <h6 className='mb-0'>Guy Hawkins</h6>
                        <div className='text-muted fw-normal fs-sm mb-3'>Imperial Property Group Agent</div>
                        <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='mb-2 me-2' />
                        <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='mb-2 me-2' />
                        <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle className='mb-2' />
                      </div>
                      <div>
                        <StarRating rating='4.7' />
                        <div className='text-muted fs-sm mt-1'>16 reviews</div>
                      </div>
                    </footer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </SwiperSlide>

          {/* Item */}
          <SwiperSlide className='bg-light py-4'>
            <Row className='align-items-center'>
              <Col xl={4} className='d-none d-xl-flex'>
                <ImageLoader
                  src='/images/real-estate/agents/03.jpg'
                  width={416}
                  height={400}
                  alt='Agent'
                  className='rounded-3'
                />
              </Col>
              <Col sm={4} md={5} xl={4} className='d-flex'>
                <ImageLoader
                  src='/images/real-estate/agents/01.jpg'
                  width={475}
                  height={457}
                  alt='Agent'
                  className='rounded-3'
                />
              </Col>
              <Col sm={8} md={7} xl={4} className='px-4 px-sm-3 px-md-0 ms-md-n4 mt-n5 mt-sm-0 py-3'>
                <Card className='border-0 shadow-sm ms-sm-n5'>
                  <Card.Body as='blockquote' className='blockquote'>
                    <h4 style={{maxWidth: '22rem'}}>&quot;Over 10 years of experience as a real estate agent&quot;</h4>
                    <p className='d-sm-none d-lg-block'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
                    <footer className='d-flex justify-content-between'>
                      <div className='pe3'>
                        <h6 className='mb-0'>Kristin Watson</h6>
                        <div className='text-muted fw-normal fs-sm mb-3'>Imperial Property Group Agent</div>
                        <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='mb-2 me-2' />
                        <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='mb-2 me-2' />
                        <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle className='mb-2' />
                      </div>
                      <div>
                        <StarRating rating='4.8' />
                        <div className='text-muted fs-sm mt-1'>24 reviews</div>
                      </div>
                    </footer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>

        {/* External Prev/Next buttons */}
        <div className='d-flex justify-content-center justify-content-md-start pb-2'>
          <Button id='prevAgents' variant='prev position-relative mx-2' />
          <Button id='nextAgents' variant='next position-relative mx-2' />
        </div>
      </Container>
    </RealEstatePageLayout>
  )
}

export default HomePage
