import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pagination from 'react-bootstrap/Pagination'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Dropdown from 'react-bootstrap/Dropdown'
import ImageLoader from '../../components/ImageLoader'
import FormGroup from '../../components/FormGroup'
import IconBox from '../../components/IconBox'
import StarRating from '../../components/StarRating'
import VenueCard from '../../components/VenueCard'
import SimpleBar from 'simplebar-react'
import ReactSlider from 'react-slider'
import 'simplebar/dist/simplebar.min.css'

const MapContainer = dynamic(() => 
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() => 
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const CustomMarker = dynamic(() => 
  import('../../components/partials/CustomMarker'),
  { ssr: false }
)
const Popup = dynamic(() => 
  import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)
import 'leaflet/dist/leaflet.css'

const CatalogPage = () => {
  
  // Add extra class to body
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('fixed-bottom-btn')
    return () => body.classList.remove('fixed-bottom-btn')
  })
  
  // Media query for displaying Offcanvas on screens larger than 991px
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

  // Offcanvas show/hide
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Categories
  const categories = [
    {icon: 'fi-bed', title: 'Accommodation', color: 'accent'},
    {icon: 'fi-dumbell', title: 'Fitness & Sport', color: 'primary'},
    {icon: 'fi-cafe', title: 'Food & Drink', color: 'warning'},
    {icon: 'fi-disco-ball', title: 'Night Life', color: 'success'},
    {icon: 'fi-shopping-bag', title: 'Shopping', color: 'danger'},
    {icon: 'fi-meds', title: 'Medicine', color: 'info'},
    {icon: 'fi-museum', title: 'Art & History', color: 'success'},
    {icon: 'fi-makeup', title: 'Beauty', color: 'warning'},
    {icon: 'fi-entertainment', title: 'Entertainment', color: 'primary'},
    {icon: 'fi-car', title: 'Auto Service', color: 'info'}
  ]

  // Category dropdown
  const [category, setCategory] = useState('Accommodation')

  const handleCategorySelect = (eventKey, e) => {
    setCategory(eventKey)
  }

  // Subcategory checkboxes
  const subcategories = [
    {value: 'Hotel', checked: false},
    {value: 'Hostel', checked: false},
    {value: 'Motel', checked: false},
    {value: 'Apartment', checked: true},
    {value: 'Cottage', checked: false},
    {value: 'Boutique Hotel', checked: false},
    {value: 'Room', checked: false},
    {value: 'Land', checked: false},
    {value: 'Commercial', checked: false},
    {value: 'Parking lot', checked: false},
  ]

  // Price range slider
  const PriceRange = () => {
    const [minPrice, setMinPrice] = useState(320)
    const [maxPrice, setMaxPrice] = useState(720)

    const handleInputChange = e => {
      if (e.target.name === 'minPrice') {
        setMinPrice(e.target.value)
      } else {
        setMaxPrice(e.target.value)
      }
    }

    const handleSliderChange = sliderVal => {
      let sliderMinVal = sliderVal[0]
      let sliderMaxVal = sliderVal[1]
      setMinPrice(sliderMinVal)
      setMaxPrice(sliderMaxVal)
    }

    return (
      <>
        <ReactSlider
          className='range-slider'
          thumbClassName='range-slider-handle'
          trackClassName='range-slider-track'
          min={0}
          max={1000}
          value={[minPrice, maxPrice]}
          ariaLabel={['Lower handle', 'Upper handle']}
          ariaValuetext={state => `Handle value ${state.valueNow}`}
          renderThumb={(props, state) => (<div {...props}>
            <div className='range-slider-tooltip'>$ {state.valueNow}</div>
          </div>)}
          pearling
          minDistance={50}
          onChange={handleSliderChange}
        />
        <div className='d-flex align-items-center'>
          <div className='w-100 pe-2'>
            <InputGroup>
              <InputGroup.Text className='fs-base'>$</InputGroup.Text>
              <Form.Control
                name='minPrice'
                value={minPrice}
                onChange={handleInputChange}
              />
            </InputGroup>
          </div>
          <div className='text-muted'>—</div>
          <div className='w-100 ps-2'>
            <InputGroup>
              <InputGroup.Text className='fs-base'>$</InputGroup.Text>
              <Form.Control
                name='maxPrice'
                value={maxPrice}
                onChange={handleInputChange}
              />
            </InputGroup>
          </div>
        </div>
      </>
    )
  }

  // Hotel rating
  const stars = [
    {value: '5 stars', rating: 5.0},
    {value: '4 stars', rating: 4.0},
    {value: '3 stars', rating: 3.0},
    {value: '2 stars', rating: 2.0},
    {value: '1 stars', rating: 1.0},
  ]

  // Amenities checkboxes
  const amenities = [
    {value: 'Parking', checked: false},
    {value: 'Restaurant', checked: false},
    {value: 'Pet Friendly', checked: false},
    {value: 'Room Service', checked: true},
    {value: 'Fitness Center', checked: false},
    {value: 'Free WiFi', checked: true},
    {value: 'Spa Lounge', checked: false},
    {value: 'Bar', checked: false},
    {value: 'Swimming Pool', checked: false}
  ]

  // Room facilities checkboxes
  const facilities = [
    {value: 'Kitchen', checked: false},
    {value: 'Private Bathroom', checked: false},
    {value: 'Air Conditioning', checked: true},
    {value: 'Desk', checked: false},
    {value: 'Terrace', checked: false},
    {value: 'Washing Machine', checked: false},
    {value: 'Heating', checked: false},
    {value: 'Laundry Service', checked: false}
  ]

  // Map popup state
  const [showMap, setShowMap] = useState(false)

  // Map markers
  const markers = [
    {
      position: [52.52, 13.407],
      iconUrl: '/images/map/marker-accomodation.png',
      iconSize: [48, 48],
      popup: {
        href: '/city-guide/single',
        img: '/images/city-guide/catalog/02.jpg',
        title: 'Grand Resort & Spa',
        rating: 4.6,
        reviews: 43,
        address: 'Ollenhauer Str. 29, 10118, Berlin',
        price: '$$$'
      }
    },
    {
      position: [52.51, 13.36],
      iconUrl: '/images/map/marker-fitness.png',
      iconSize: [48, 48],
      popup: {
        href: '/city-guide/single',
        img: '/images/city-guide/catalog/16.jpg',
        title: 'Power Fitness Club',
        rating: 4.2,
        reviews: 317,
        address: 'Genslerstraße 84, 10118, Berlin',
        price: '$$'
      }
    },
    {
      position: [52.528, 13.37],
      iconUrl: '/images/map/marker-cafe.png',
      iconSize: [48, 48],
      popup: {
        href: '/city-guide/single',
        img: '/images/city-guide/catalog/17.jpg',
        title: 'ClubFood Restaurant & Bar',
        rating: 4.7,
        reviews: 239,
        address: 'Antwerpener str. 47, 13253, Berlin',
        price: '$$'
      }
    },
    {
      position: [52.525, 13.45],
      iconUrl: '/images/map/marker-nightlife.png',
      iconSize: [48, 48],
      popup: {
        href: '/city-guide/single',
        img: '/images/city-guide/catalog/18.jpg',
        title: 'Egoist Night Club & Bar',
        rating: 4.8,
        reviews: 117,
        address: 'Kochhannstraße str. 32, 11060, Berlin',
        price: '$$'
      }
    },
    {
      position: [52.503, 13.425],
      iconUrl: '/images/map/marker-meds.png',
      iconSize: [48, 48],
      popup: {
        href: '/city-guide/single',
        img: '/images/city-guide/catalog/19.jpg',
        title: 'Fair Meds Pharmacy',
        rating: 4.9,
        reviews: 561,
        address: 'Lansstraße 81, D-11179, Berlin',
        price: '$'
      }
    },
    {
      position: [52.54, 13.403],
      iconUrl: '/images/map/marker-shopping.png',
      iconSize: [48, 48],
      popup: {
        href: '/city-guide/single',
        img: '/images/city-guide/catalog/20.jpg',
        title: 'Fetishist Shopping Mall',
        rating: 4.3,
        reviews: 1274,
        address: 'Mellingburgredder 3, 13250, Berlin',
        price: '$$'
      }
    },
    {
      position: [52.495, 13.39],
      iconUrl: '/images/map/marker-museum.png',
      iconSize: [48, 48],
      popup: {
        href: '/city-guide/single',
        img: '/images/city-guide/catalog/21.jpg',
        title: 'Art & Culture Museum',
        rating: 4.9,
        reviews: 943,
        address: 'Lansstraße 105, D-11179, Berlin',
        price: '$'
      }
    }
  ]

  // Catalog items (Venues)
  const catalog = [
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/01.jpg', 504, 230, 'Image'],
      title: 'Berlin Business Hotel',
      rating: [5.0, 48],
      price: '$$',
      location: '1.4 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/02.jpg', 504, 230, 'Image'],
      title: 'Big Tree Cottage',
      rating: [4.8, 24],
      price: '$$$',
      location: '0.5 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/03.jpg', 504, 230, 'Image'],
      title: 'Grand Resort & Spa',
      rating: [4.9, 43],
      price: '$$$',
      location: '1.8 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/04.jpg', 504, 230, 'Image'],
      title: 'Serene Stays',
      rating: [5.0, 12],
      price: '$$$',
      location: '3.2 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/05.jpg', 504, 230, 'Image'],
      title: 'Leisure Inn',
      rating: [4.0, 9],
      price: '$',
      location: '2.1 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/06.jpg', 504, 230, 'Image'],
      title: 'Bliss Apartment',
      rating: [4.8, 32],
      price: '$',
      location: '1.9 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/07.jpg', 504, 230, 'Image'],
      title: 'Merry Berry Motel',
      rating: [4.5, 13],
      price: '$$',
      location: '0.4 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/08.jpg', 504, 230, 'Image'],
      title: 'Serenity Hotel',
      rating: [5.0, 17],
      price: '$$$',
      location: '1.6 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/09.jpg', 504, 230, 'Image'],
      title: 'Repose Hotel',
      rating: [5.0, 45],
      price: '$$',
      location: '1.4 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/10.jpg', 504, 230, 'Image'],
      title: 'Tranquil Hostel',
      rating: [4.0, 19],
      price: '$',
      location: '1.7 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/11.jpg', 504, 230, 'Image'],
      title: 'Soothe & Stay',
      rating: [4.6, 40],
      price: '$$',
      location: '2.4 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/12.jpg', 504, 230, 'Image'],
      title: 'Best Nest Apartment',
      rating: [4.9, 10],
      price: '$$$',
      location: '1.1 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/13.jpg', 504, 230, 'Image'],
      title: 'Pine Cottage',
      rating: [5.0, 12],
      price: '$$',
      location: '4.7 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/14.jpg', 504, 230, 'Image'],
      title: 'Greenpoint Boutique Hotel',
      rating: [4.6, 18],
      price: '$$',
      location: '0.4 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/15.jpg', 504, 230, 'Image'],
      title: 'Crystal Apartment',
      rating: [4.9, 52],
      price: '$$',
      location: '1.5 km from center'
    }
  ]


  return (
    <CityGuidePageLayout
      pageTitle='Catalog'
      activeNav='Catalog'
    >

      {/* Page container */}
      <Container fluid className='mt-5 pt-5 p-0'>
        <Row className='g-0 mt-n3'>


          {/* Filters sidebar (Offcanvas on screens < 992px) */}
          <Col
            as='aside'
            lg={4}
            xl={3}
            className='border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2'
          >
            <Offcanvas
              show={show}
              onHide={handleClose}
              responsive='lg'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title as='h5'>Filters</Offcanvas.Title>
              </Offcanvas.Header>

              {/* Search form */}
              <Offcanvas.Header className='d-block border-bottom pt-0 pt-lg-4 px-lg-0'>
                <FormGroup className='rounded-pill mb-lg-2'>
                  <InputGroup>
                    <InputGroup.Text className='text-muted'>
                      <i className='fi-search'></i>
                    </InputGroup.Text>
                    <Form.Control placeholder='Search...' />
                  </InputGroup>
                  <Button variant='primary rounded-pill d-lg-inline-block d-none'>Search</Button>
                  <Button variant='primary btn-icon rounded-circle flex-shrink-0 d-lg-none d-inline-fle'>
                    <i className='fi-search mt-n2'></i>
                  </Button>
                </FormGroup>
              </Offcanvas.Header>

              {/* Nav tabs */}
              <Tab.Container defaultActiveKey='categories' transition={Fade}>
                <Offcanvas.Header className='d-block border-bottom py-lg-4 py-3 px-lg-0'>
                  <Nav variant='pills'>
                    <Nav.Item>
                      <Nav.Link eventKey='categories'>
                        <i className='fi-list me-2'></i>
                        Categories
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='filters'>
                        <i className='fi-filter-alt-horizontal me-2'></i>
                        Filters
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Offcanvas.Header>

                {/* Offcanvas body */}
                <Offcanvas.Body className='py-lg-4'>
                  <Tab.Content className='pb-4'>

                    {/* Categories tab */}
                    <Tab.Pane eventKey='categories'>
                      <Row lg={2} xs={1} className='g-3'>
                        {categories.map(({icon, title, color}, indx) => (
                          <Col key={indx}>
                            <IconBox
                              href='#'
                              type='card-shadow'
                              media={icon}
                              mediaShape='circle'
                              mediaColor={color}
                              title={title}
                              align='center'
                              onClick={e => e.preventDefault()}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Filters tab */}
                    <Tab.Pane eventKey='filters'>
                      <div className='pb-4 mb-2'>
                        <h3 className='h6'>Location</h3>
                        <Form.Select defaultValue='Berlin' className='mb-2'>
                          <option value='default' disabled>Choose city</option>
                          <option value='Berlin'>Berlin</option>
                          <option value='Hamburg'>Hamburg</option>
                          <option value='Munich'>Munich</option>
                          <option value='Frankfurt am Main'>Frankfurt am Main</option>
                          <option value='Stuttgart'>Stuttgart</option>
                          <option value='Cologne'>Cologne</option>
                        </Form.Select>
                        <Form.Select defaultValue='Berlin-Mitte'>
                          <option value='default' disabled>Choose district</option>
                          <option value='Berlin-Mitte'>Berlin-Mitte</option>
                          <option value='Charlottenburg'>Charlottenburg</option>
                          <option value='Prenzlauer Berg'>Prenzlauer Berg</option>
                          <option value='Friedrichshain'>Friedrichshain</option>
                          <option value='Kreuzberg'>Kreuzberg</option>
                        </Form.Select>
                      </div>
                      <div className='pb-4 mb-2'>
                        <h3 className='h6'>Category</h3>
                        <Dropdown onSelect={handleCategorySelect}>
                          <Dropdown.Toggle variant='outline-secondary d-flex align-items-center w-100 px-4 fw-normal text-start'>
                            <i className='fi-list me-2 text-muted' style={{marginTop: '2px'}}></i>
                            <span className='me-auto'>{category}</span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='w-100'>
                            {categories.map(({icon, title}, indx) => (
                              <Dropdown.Item
                                key={indx}
                                as='button'
                                eventKey={title}
                              >
                                <i className={`${icon} fs-lg opacity-60 me-2`}></i>
                                {title}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className='pb-4 mb-2'>
                        <h3 className='h6'>Subcategory</h3>
                        <SimpleBar autoHide={false} className='simplebar-no-autohide' style={{maxHeight: '11rem'}}>
                          {subcategories.map(({value, checked}, indx) => (
                            <Form.Check
                              key={indx}
                              id={`subcat-${indx}`}
                              value={value}
                              defaultChecked={checked}
                              label={<><span className='fs-sm'>{value}</span></>}  
                            />
                          ))}
                        </SimpleBar>
                      </div>
                      <div className='pb-4 mb-2'>
                        <h3 className='h6'>Price</h3>
                        <PriceRange />
                      </div>
                      <div className='pb-4 mb-2'>
                        <h3 className='h6'>Average rating</h3>
                        {stars.map((star, indx) => (
                          <Form.Check
                            key={indx}
                            type='checkbox'
                            id={`stars-${indx}`}
                            value={star.value}
                            label={<StarRating rating={star.rating} />}
                          />
                        ))}
                      </div>
                      <div className='pb-4 mb-2'>
                        <h3 className='h6'>Number of rooms</h3>
                        <Form.Select className='mb-1'>
                          <option value='1'>1 room</option>
                          <option value='2'>2 rooms</option>
                          <option value='3'>3 rooms</option>
                          <option value='4'>4 rooms</option>
                          <option value='5'>5 rooms</option>
                        </Form.Select>
                      </div>
                      <div className='pb-4 mb-2'>
                        <h3 className='h6'>Amenities</h3>
                        <SimpleBar autoHide={false} className='simplebar-no-autohide' style={{maxHeight: '11rem'}}>
                          {amenities.map(({value, checked}, indx) => (
                            <Form.Check
                              key={indx}
                              id={`amenity-${indx}`}
                              value={value}
                              defaultChecked={checked} 
                              label={<><span className='fs-sm'>{value}</span></>}
                            />
                          ))}
                        </SimpleBar>
                      </div>
                      <div className='pb-4 mb-2'>
                        <h3 className='h6'>Room facilities</h3>
                        <SimpleBar autoHide={false} className='simplebar-no-autohide' style={{maxHeight: '11rem'}}>
                          {facilities.map(({value, checked}, indx) => (
                            <Form.Check
                              key={indx}
                              id={`facility-${indx}`}
                              value={value}
                              defaultChecked={checked}
                              label={<><span className='fs-sm'>{value}</span></>}
                            />
                          ))}
                        </SimpleBar>
                      </div>
                      <div className='border-top pt-4'>
                        <Button variant='outline-primary rounded-pill'>
                          <i className='fi-rotate-right me-2'></i>
                          Reset filters
                        </Button>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Offcanvas.Body>
              </Tab.Container>
            </Offcanvas>
          </Col>


          {/* Content */}
          <Col lg={8} xl={9} className='position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5'>

            {/* Map popup */}
            <div className={`map-popup${showMap ? ' show': ''}`}>
              <Button
                size='sm'
                variant='light btn-icon shadow-sm rounded-circle'
                onClick={() => setShowMap(false)}
              >
                <i className='fi-x fs-xs'></i>
              </Button>
              <MapContainer
                center={isDesktop ? [52.43, 13.405] : [52.53, 13.405]}
                zoom={12}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx'
                  tileSize={512}
                  zoomOffset={-1}
                  minZoom={1}
                  attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
                />
                {markers.map((marker, indx) => {
                  return <CustomMarker
                    key={indx}
                    position={marker.position}
                    icon='custom'
                    iconOptions={{
                      url: marker.iconUrl,
                      size: [marker.iconSize[0], marker.iconSize[1]],
                    }}
                  >
                    <Popup>
                      <div className='card border-0'>
                        <Link href={marker.popup.href} className='d-block'>
                          <ImageLoader src={marker.popup.img} width={280} height={128} alt='Image' />
                        </Link>
                        <div className='card-body'>
                          <h5 className='card-title fs-base'>
                            <Link href={marker.popup.href} className='nav-link'>{marker.popup.title}</Link>
                          </h5>
                          <div className='d-flex align-items-center mb-2'>
                            <StarRating rating={marker.popup.rating} className='mt-n1 me-2' />
                            <span className='fs-xs'>
                              <strong>{marker.popup.rating}</strong>
                              <span className='text-muted ms-1'>({marker.popup.reviews})</span>
                            </span>
                          </div>
                          <div className='mb-2'>
                            <i className='fi-map-pin text-muted fs-sm mt-n1 me-1'></i>
                            {marker.popup.address}
                          </div>
                          <i className='fi-credit-card text-muted fs-sm mt-n1 me-1'></i>
                          {marker.popup.price}
                        </div>
                      </div>
                    </Popup>
                  </CustomMarker>
                })}
              </MapContainer>
            </div>

            {/* Breadcrumb */}
            <Breadcrumb className='mb-3 pt-md-2'>
              <Breadcrumb.Item linkAs={Link} href='/city-guide'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Find accommodation</Breadcrumb.Item>
            </Breadcrumb>

            {/* Title + Map toggle */}
            <div className='d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4'>
              <h1 className='h2 mb-sm-0'>Find accommodation</h1>
              <a
                href='#'
                className='d-inline-block fw-bold text-decoration-none py-1'
                onClick={(e) => {
                  e.preventDefault()
                  setShowMap(true)
                }}
              >
                <i className='fi-map me-2'></i>
                Map view
              </a>
            </div>

            {/* Sorting */}
            <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2'>
              <Form.Group controlId='sortby' className='d-flex align-items-center flex-shrink-0'>
                <Form.Label className='text-body fs-sm me-2 mb-0 pe-1 text-nowrap'>
                  <i className='fi-arrows-sort text-muted mt-n1 me-2'></i>
                  Sort by:
                </Form.Label>
                <Form.Select size='sm'>
                  <option value='Newest'>Newest</option>
                  <option value='Popularity'>Popularity</option>
                  <option value='Low - Hight Price'>Low - Hight Price</option>
                  <option value='High - Low Price'>High - Low Price</option>
                  <option value='High Rating'>High Rating</option>
                  <option value='Average Rating'>Average Rating</option>
                </Form.Select>
              </Form.Group>
              <hr className='d-none d-sm-block w-100 mx-4' />
              <div className='d-none d-sm-flex align-items-center flex-shrink-0 text-muted'>
                <i className='fi-check-circle me-2'></i>
                <span className='fs-sm mt-n1'>148 results</span>
              </div>
            </div>

            {/* Catalog grid */}
            <Row xs={1} sm={2} xl={3} className='gy-4 gx-3 gx-xxl-4 py-4'>
              {catalog.map((item, indx) => (
                <Col key={indx} className='pb-sm-2'>
                  <VenueCard
                    href={item.href}
                    img={{
                      src: item.img[0],
                      width: item.img[1],
                      height: item.img[2],
                      alt: item.img[3]
                    }}
                    title={item.title}
                    rating={{
                      value: item.rating[0],
                      count: item.rating[1]
                    }}
                    price={item.price}
                    location={item.location}
                    wishlistButton={{
                      tooltip: 'Add to Favorites',
                      props: {
                        onClick: () => console.log('Venu has been added to your Favorites list!')
                      }
                    }}
                  />
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <nav className='border-top pb-md-4 pt-4' aria-label='Pagination'>
              <Pagination className='mb-1'>
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
        <i className='fi-filter me-2'></i>
        Filters
      </Button>
    </CityGuidePageLayout>
  )
}

export default CatalogPage
