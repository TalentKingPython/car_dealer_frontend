import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Collapse from 'react-bootstrap/Collapse'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import ImageLoader from '../../components/ImageLoader'
import StarRating from '../../components/StarRating'
import ScrollLink from '../../components/ScrollLink'
import SocialButton from '../../components/SocialButton'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

const MapContainer = dynamic(() => 
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() => 
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const Popup = dynamic(() => 
  import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)
const CustomMarker = dynamic(() => 
  import('../../components/partials/CustomMarker'),
  { ssr: false }
)
import 'leaflet/dist/leaflet.css'


const AddBusinessPage = () => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
  })

  // Category select
  const categories = [
    { icon: 'fi-bed', title: 'Accomodation' },
    { icon: 'fi-cafe', title: 'Food & Drink' },
    { icon: 'fi-shopping-bag', title: 'Shopping' },
    { icon: 'fi-museum', title: 'Art & History' },
    { icon: 'fi-entertainment', title: 'Entertainment' },
    { icon: 'fi-dumbell', title: 'Fitness & Sport' },
    { icon: 'fi-disco-ball', title: 'Night Life' },
    { icon: 'fi-meds', title: 'Medicine' },
    { icon: 'fi-makeup', title: 'Beauty' },
    { icon: 'fi-car', title: 'Car Rental' }
  ]

  const [category, setCategory] = useState('Accommodation')

  const handleCategorySelect = (eventKey, e) => {
    setCategory(eventKey)
  }

  // Socials collapse state
  const [socialOpen, setSocialOpen] = useState(false)

  // About collapse state
  const [aboutOpen, setAboutOpen] = useState(false)

  // Amenities collapse state
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)

  // Amenities array (Preview modal)
  const amenitiesPreview = [
    [
      { icon: 'fi-wifi', title: 'Free WiFi' },
      { icon: 'fi-swimming-pool', title: '2 swimming pools' },
      { icon: 'fi-pet', title: 'Pets-friendly' },
      { icon: 'fi-parking', title: 'Free parking' },
      { icon: 'fi-spa', title: 'Spa lounge' },
      { icon: 'fi-cafe', title: 'Restaurant' },
      { icon: 'fi-hotel-bell', title: 'Room service' },
      { icon: 'fi-cocktail', title: 'Bar' },
      { icon: 'fi-dumbell', title: 'Fitness Center' }
    ],
    [
      { icon: 'fi-dish', title: 'Dishwasher' },
      { icon: 'fi-thermometer', title: 'Heating' }
    ]
  ]

  // Room types array (Preview modal)
  const roomTypesPreview = [
    { icon: 'fi-no-smoke', title: 'Non-smoking rooms' },
    { icon: 'fi-single-bed', title: 'Single rooms' },
    { icon: 'fi-double-bed', title: 'Family suites' }
  ]

  // Awards array (Preview modal)
  const awardsPreview = [
    { img: '/images/city-guide/single/awards/01.jpg', title: '2022 Traveler\'s Choice' },
    { img: '/images/city-guide/single/awards/02.jpg', title: 'TUI Top Quality 2021' },
    { img: '/images/city-guide/single/awards/03.jpg', title: 'TUI Holly 2019' }
  ]


  // Register Filepond plugins
  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
  )

  // Profile logo 
  const [profile, setProfile] = useState([])

  // Gallery state
  const [gallery, setGallery] = useState([])

  // Number of rooms radios buttons
  const [roomsValue, setRoomsValue] = useState('')
  const rooms = [
    {name: '5+', value: '5+'},
    {name: '10+', value: '10+'},
    {name: '20+', value: '20+'},
    {name: '50+', value: '50+'},
    {name: '100+', value: '100+'},
    {name: '200+', value: '200+'}
  ]

  // Hotel rating
  const [rating, setRating] = useState('')
  const stars = [
    {value: '5 stars', rating: 5.0},
    {value: '4 stars', rating: 4.0},
    {value: '3 stars', rating: 3.0},
    {value: '2 stars', rating: 2.0},
    {value: '1 stars', rating: 1.0},
  ]

  // Amenities
  const amenities = [
    {value: 'WiFi', checked: true},
    {value: 'Parking place', checked: true},
    {value: 'Swimming pool', checked: false},
    {value: 'Spa lounge', checked: false},
    {value: 'Gym', checked: false},
    {value: 'Laundry service', checked: true},
    {value: 'Pets-friendly', checked: false},
    {value: 'Restaurant', checked: false},
    {value: 'Bar', checked: false},
    {value: 'TV', checked: true},
    {value: 'Air conditioning', checked: false},
    {value: 'Heating', checked: true},
    {value: 'Dishwasher', checked: false},
    {value: 'Iron', checked: false},
    {value: 'Hair dryer', checked: false},
    {value: 'Kitchen', checked: false},
    {value: 'Breakfast', checked: false},
    {value: 'Security cameras', checked: false}
  ]

  // Room types
  const roomTypes = [
    {value: 'Non-smoking rooms', checked: false},
    {value: 'Single rooms', checked: false},
    {value: 'Double rooms', checked: false},
    {value: 'Family suites', checked: false}
  ]

  // Anchor lnks
  const anchors = [
    {to: 'basic-info', label: 'Basic info', completed: true},
    {to: 'location', label: 'Location', completed: true},
    {to: 'contacts', label: 'Contacts', completed: false},
    {to: 'description', label: 'Description', completed: false},
    {to: 'price', label: 'Price range', completed: false},
    {to: 'photos', label: 'Photos / video', completed: false}
  ]

  // Preview modal
  const [previewShow, setPreviewShow] = useState(false)
  const handlePreviewClose = () => setPreviewShow(false)
  const handlePreviewShow = () => setPreviewShow(true)


  return (
    <CityGuidePageLayout
      pageTitle='Add Business'
      activeNav='Vendor'
      userLoggedIn
    >

      {/* Preview modal */}
      <Modal
        fullscreen
        show={previewShow}
        onHide={handlePreviewClose}
      >
        <Modal.Header closeButton>
          <h3 className='h5 text-muted fw-normal modal-title d-none d-sm-block text-nowrap'>Business preview</h3>
          <div className='d-flex align-items-center justify-content-sm-end w-100 ms-sm-auto'>
            <Button as={Link} href='/city-guide/business-promotion' size='sm' className='me-4'>Save and continue</Button>
            <span className='fs-xs text-muted ms-auto ms-sm-0 me-2'>[ESC]</span>
          </div>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <Container className='mt-2 mt-sm-0 py-4 py-sm-5'>

            {/* Title */}
            <h2 className='mb-2'>Berlin Business Hotel</h2>
            <p className='mb-4 fs-lg'>Ollenhauer Str. 29, 10118, Berlin</p>

            {/* Gallery preview */}
            <div className='overflow-auto pb-3 px-2 mx-n2 mb-4'>
              <Row className='row g-2 g-md-3' style={{minWidth: '30rem'}}>
                <Col xs={8} className='d-flex'>
                  <ImageLoader
                    src='/images/city-guide/single/01.jpg'
                    width={859}
                    height={606}
                    alt='Gallery thumbnail'
                    className='rounded rounded-md-3'
                  />
                </Col>
                <Col xs={4}>
                  <div className='d-flex mb-2 mb-md-3'>
                    <ImageLoader
                      src='/images/city-guide/single/02.jpg'
                      width={421}
                      height={296}
                      alt='Gallery thumbnail'
                      className='rounded rounded-md-3'
                    />
                  </div>
                  <div className='d-flex'>
                    <ImageLoader
                      src='/images/city-guide/single/03.jpg'
                      width={421}
                      height={296}
                      alt='Gallery thumbnail'
                      className='rounded rounded-md-3'
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <Row>

              {/* Content */}
              <Col md={7} className='mb-md-0 mb-4'>
                <Badge bg='success' className='me-2 mb-3'>Verified</Badge>
                <Badge bg='info' className='mb-3'>New</Badge>
                <h3 className='mb-4 pb-4 border-bottom'>
                  $50-100
                  <span className='d-inline-block ms-1 fs-base fw-normal text-body'>/night</span>
                </h3>
                <div className='mb-4 pb-md-3'>
                  <h3 className='h4'>About</h3>
                  <p className='mb-1'>Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
                  <Collapse in={aboutOpen}>
                    <div id='moreAbout'>
                      <p className='mb-1'>Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa.</p>
                    </div>
                  </Collapse>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setAboutOpen(!aboutOpen)
                    }}
                    aria-controls='moreAbout'
                    aria-expanded={aboutOpen}
                    className={`collapse-label${aboutOpen ? '' : ' collapsed'}`}
                  >
                    {aboutOpen ? 'Show less' : 'Show more'}
                  </a>
                </div>
                <div className='mb-4 pb-md-3'>
                  <h3 className='h4'>Amenities</h3>
                  <Row as='ul' lg={3} md={2} xs={1} className='list-unstyled gy-1 mb-1 text-nowrap'>
                    {amenitiesPreview[0].map(({icon, title}, indx) => (
                      <Col key={indx} as='li'>
                        <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                        {title}
                      </Col>
                    ))}
                  </Row>
                  <Collapse in={amenitiesOpen}>
                    <div id='moreAmenities'>
                      <Row as='ul' lg={3} md={2} xs={1} className='list-unstyled gy-1 mb-1 text-nowrap'>
                        {amenitiesPreview[1].map(({icon, title}, indx) => (
                          <Col key={indx} as='li'>
                            <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                            {title}
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </Collapse>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setAmenitiesOpen(!amenitiesOpen)
                    }}
                    aria-controls='moreAmenities'
                    aria-expanded={amenitiesOpen}
                    className={`collapse-label${amenitiesOpen ? '' : ' collapsed'}`}
                  >
                    {amenitiesOpen ? 'Show less' : 'Show more'}
                  </a>
                </div>
                <div className='mb-4 pb-md-3'>
                  <h3 className='h4'>Room types</h3>
                  <Row as='ul' lg={3} md={2} xs={1} className='list-unstyled gy-1 mb-1 text-nowrap'>
                    {roomTypesPreview.map(({icon, title}, indx) => (
                      <Col key={indx} as='li'>
                        <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                        {title}
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className='pb-md-3'>
                  <h3 className='h4'>Awards</h3>
                  <ul className='list-unstyled'>
                    {awardsPreview.map(({img, title}, indx) => (
                      <li key={indx} className='d-flex align-items-center mb-2'>
                        <div className='d-flex flex-shrink-0' style={{width: '40px'}}>
                          <ImageLoader src={img} width={80} height={80} alt='Award logo'/>
                        </div>
                        <div className='ps-2'>{title}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              {/* Sidebar */}
              <Col md={5}>
                <Card className='shadow-sm mb-4 p-2'>
                  <Card.Body>
                    <div className='d-flex align-items-start mb-3 pb-2 border-bottom'>
                      <ImageLoader
                        src='/images/city-guide/brands/hotel.svg'
                        width={60}
                        height={60}
                        alt='Place thumbnail'
                        className='rounded-circle'
                      />
                      <div className='ps-2 ms-1'>
                        <h3 className='h5 mb-2'>Berlin Business Hotel</h3>
                        <ul className='list-unstyled d-flex flex-wrap fs-sm'>
                          <li className='me-2 mb-1 pe-1'>
                            <i className='fi-star-filled mt-n1 me-1 text-warning align-middle opacity-70'></i>
                            <b>4.9 </b>(48)
                          </li>
                          <li className='me-2 mb-1 pe-1'>
                            <i className='fi-wallet mt-n1 me-1 align-middle opacity-70'></i>
                            $$
                          </li>
                          <li className='me-2 mb-1 pe-1'>
                            <i className='fi-map-pin mt-n1 me-1 align-middle opacity-70'></i>
                            1.4 km from center
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='mb-3 pb-3 border-bottom'>
                      <h4 className='h5 mb-2'>Contacts:</h4>
                      <Nav className='flex-column'>
                        <Nav.Item className='mb-2'>
                          <Nav.Link href='#' className='p-0 fw-normal d-flex align-items-start'>
                            <i className='fi-map-pin mt-1 me-2 align-middle opacity-70'></i>
                            Ollenhauer Str. 29, 10118, Berlin
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='mb-2'>
                          <Nav.Link href='tel:3025550107' className='p-0 fw-normal d-flex align-items-start'>
                            <i className='fi-phone mt-1 me-2 align-middle opacity-70'></i>
                            (302) 555-0107
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='mb-2'>
                          <Nav.Link href='#' className='p-0 fw-normal d-flex align-items-start'>
                            <i className='fi-globe mt-1 me-2 align-middle opacity-70'></i>
                            bb-hotel.com
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href='mailto:bb-hotel@example.com' className='p-0 fw-normal d-flex align-items-start'>
                            <i className='fi-mail mt-1 me-2 align-middle opacity-70'></i>
                            bb-hotel@example.com
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <div className='mb-3 pb-4 border-bottom'>
                      <h4 className='h5 mb-3'>
                        <span className='fs-4'>$50-100&nbsp;</span>
                        <span className='fs-base fw-normal text-body'>/night</span>
                      </h4>
                      <Button size='lg' variant='primary rounded-pill w-sm-auto w-100'>
                        Book now
                        <i className='fi-chevron-right fs-sm ms-2 me-n1'></i>
                      </Button>
                    </div>
                    <div className='d-flex align-items-center'>
                      <h4 className='h5 mb-0 me-3'>Follow:</h4>
                      <div className='text-nowrap'>
                        <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='me-2' />
                        <SocialButton href='#' variant='solid' brand='instagram' roundedCircle className='me-2' />
                        <SocialButton href='#' variant='solid' brand='twitter' roundedCircle />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      
      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>
        <Row>

          {/* Page content */}
          <Col lg={8}>

            {/* Breadcrumb */}
            <Breadcrumb className='mb-3 pt-2 pt-lg-3'>
              <Breadcrumb.Item linkAs={Link} href='/city-guide'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Add business</Breadcrumb.Item>
            </Breadcrumb>

            {/* Title */}
            <div className='mb-4'>
              <h1 className='h2 mb-0'>Add business</h1>
              <div className='d-lg-none pt-3 mb-2'>33% content filled</div>
              <ProgressBar variant='warning' now={33} style={{height: '.25rem'}} className='d-lg-none mb-4' />
            </div>


            {/* Basic info */}
            <section id='basic-info' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
                Basic info
              </h2>
              <Form.Group controlId='ab-title' className='mb-3'>
                <Form.Label>Official business name <span className='text-danger'>*</span></Form.Label>
                <Form.Control defaultValue='Berlin Business Hotel' placeholder='Title for your business' required />
                <Form.Text>48 characters left</Form.Text>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Category <span className='text-danger'>*</span></Form.Label>
                <Dropdown onSelect={handleCategorySelect}>
                  <Dropdown.Toggle variant='outline-secondary col-md-6 col-12 d-flex align-items-center justify-content-between ps-3 fw-normal'>
                    {category}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='w-100 my-1 p-3'>
                    <Row md={5} sm={3} xs={2} className='g-2'>
                      {categories.map(({icon, title}, indx) => (
                        <Col key={indx}>
                          <Dropdown.Item
                            as='button'
                            eventKey={title}
                            className='btn btn-outline-secondary border-0 d-block p-3 text-center'
                          >
                            <i className={`${icon} mb-1 fs-2 text-primary`}></i>
                            <span className='d-block fs-sm'>{title}</span>
                          </Dropdown.Item>
                        </Col>
                      ))}
                    </Row>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group as={Col} md={6} controlId='ab-subcategory'>
                <Form.Label>Subcategory <span className='text-danger'>*</span></Form.Label>
                <Form.Select defaultValue='hotel' required>
                  <option value='' disabled>Choose property type</option>
                  <option value='hotel'>Hotel</option>
                  <option value='hostel'>Hostel</option>
                  <option value='apartment'>Apartment</option>
                  <option value='house'>House</option>
                  <option value='commercial'>Commercial</option>
                </Form.Select>
              </Form.Group>
            </section>


            {/* Location */}
            <section id='location' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-map-pin text-primary fs-5 mt-n1 me-2'></i>
                Location
              </h2>
              <Row>
                <Form.Group as={Col} sm={6} controlId='ab-country' className='mb-3'>
                  <Form.Label>Country / region <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='Germany' required>
                    <option value='' disabled>Choose country</option>
                    <option value='Germany'>Germany</option>
                    <option value='Belgium'>Belgium</option>
                    <option value='Canada'>Canada</option>
                    <option value='US'>United States</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-city' className='mb-3'>
                  <Form.Label>City <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='Berlin' required>
                    <option value='' disabled>Choose city</option>
                    <option value='Berlin'>Berlin</option>
                    <option value='Hamburg'>Hamburg</option>
                    <option value='Munich'>Munich</option>
                    <option value='Frankfurt am Main'>Frankfurt am Main</option>
                    <option value='Stuttgart'>Stuttgart</option>
                    <option value='Cologne'>Cologne</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={8} controlId='ab-district' className='mb-3'>
                  <Form.Label>District <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='Berlin-Mitte' required>
                    <option value='' disabled>Choose district</option>
                    <option value='Berlin-Mitte'>Berlin-Mitte</option>
                    <option value='Charlottenburg'>Charlottenburg</option>
                    <option value='Prenzlauer Berg'>Prenzlauer Berg</option>
                    <option value='Friedrichshain'>Friedrichshain</option>
                    <option value='Kreuzberg'>Kreuzberg</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={4} controlId='ab-zip' className='mb-3'>
                  <Form.Label>Zip code <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='13127' placeholder='Enter Zip code' required />
                </Form.Group>
                <Form.Group as={Col} sm={12} controlId='ab-address' className='mb-3'>
                  <Form.Label>Street address <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='Pasewalker Str. 97' required />
                </Form.Group>
              </Row>
              <Form.Label className='fw-bold pt-3 pb-2'>Display on the map</Form.Label>
              <MapContainer
                center={[52.52, 13.405]}
                zoom={13}
                scrollWheelZoom={false}
                style={{height: '250px'}}
              >
                <TileLayer
                  url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx'
                  tileSize={512}
                  zoomOffset={-1}
                  minZoom={1}
                  attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
                />
                <CustomMarker position={[52.52, 13.405]} icon='dot'>
                  <Popup>
                    <div className='p-3'>
                      <h6>Berlin Business Hotel</h6>
                      <p className='fs-xs text-muted pt-1 mt-n3 mb-0'>Pasewalker Str. 97, Berlin</p>
                    </div>
                  </Popup>
                </CustomMarker>
              </MapContainer>
            </section>

            
            {/* Contacts */}
            <section id='contacts' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-phone text-primary fs-5 mt-n1 me-2'></i>
                Contacts
              </h2>
              <Row>
                <Form.Group as={Col} sm={6} controlId='ab-email' className='mb-3'>
                  <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='email' placeholder='Enter email' required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-phone' className='mb-3'>
                  <Form.Label>Phone <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='tel' placeholder='Enter phone number' required />
                </Form.Group>
                <Form.Group as={Col} xs={12} controlId='ab-website' className='pb-3 mb-3'>
                  <Form.Label>Website</Form.Label>
                  <Form.Control type='url' placeholder='Enter your website' />
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Label className='fw-bold mb-3'>Socials</Form.Label>
                  <div className='d-flex align-items-center mb-3'>
                    <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                      <i className='fi-facebook text-body'></i>
                    </Button>
                    <Form.Control placeholder='Your Facebook account' />
                  </div>
                  <div className='d-flex align-items-center mb-3'>
                    <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                      <i className='fi-foursquare text-body'></i>
                    </Button>
                    <Form.Control placeholder='Your Foursquare account' />
                  </div>
                  <div className='d-flex align-items-center mb-3'>
                    <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                      <i className='fi-twitter text-body'></i>
                    </Button>
                    <Form.Control placeholder='Your Twitter account' />
                  </div>
                  <Collapse in={socialOpen}>
                    <div id='moreSocials'>
                      <div className='d-flex align-items-center mb-3'>
                        <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                          <i className='fi-instagram text-body'></i>
                        </Button>
                        <Form.Control placeholder='Your Instagram account' />
                      </div>
                      <div className='d-flex align-items-center mb-3'>
                        <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                          <i className='fi-linkedin text-body'></i>
                        </Button>
                        <Form.Control placeholder='Your LinkedIn account' />
                      </div>
                    </div>
                  </Collapse>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setSocialOpen(!socialOpen)
                    }}
                    aria-controls='moreSocials'
                    aria-expanded={socialOpen}
                    className={`collapse-label d-inline-block fs-sm fw-bold text-decoration-none pt-2 mb-1${socialOpen ? '' : ' collapsed'}`}
                  >
                    <i className='fi-arrow-down me-2'></i>
                    {socialOpen ? 'Show less' : 'Show more'}
                  </a>
                </Form.Group>
              </Row>
            </section>


            {/* Dscription */}
            <section id='description' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-edit text-primary fs-5 mt-n1 me-2'></i>
                Description
              </h2>
              <Form.Group controlId='ab-description' className='mb-4'>
                <Form.Label>Description <span className='text-danger'>*</span></Form.Label>
                <Row>
                  <Col md={9} className='mb-md-0 mb-3'>
                    <Form.Control as='textarea' rows={6} placeholder='Describe your accommodation' />
                    <Form.Text>8000 characters left</Form.Text>
                  </Col>
                  <Col md={3}>
                    <FilePond
                      files={profile}
                      onupdatefiles={setProfile}
                      // server='/api' {/* Configure your server here. See plugin docs */}
                      name='profile'
                      labelIdle='<i class="d-inline-block fi-cloud-upload fs-2 text-muted mb-2"></i><br>Upload logo'
                      acceptedFileTypes={['image/png', 'image/jpeg']}
                      stylePanelLayout='compact'
                      imagePreviewHeight={160}
                      imageCropAspectRatio='1:1'
                      imageResizeTargetWidth={200}
                      imageResizeTargetHeight={200}
                      className='file-uploader bg-secondary'
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Total number of rooms &amp; suites</Form.Label>
                <ButtonGroup size='sm'>
                  {rooms.map((room, indx) => (
                    <ToggleButton
                      key={indx}
                      type='radio'
                      id={`rooms-${indx}`}
                      name='rooms'
                      value={room.value}
                      checked={roomsValue === room.value}
                      onChange={(e) => setRoomsValue(e.currentTarget.value)}
                      variant='outline-secondary px-sm-3 px-2 fw-normal'
                    >{room.name}</ToggleButton>
                  ))}
                </ButtonGroup>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Hotel rating</Form.Label>
                {stars.map((star, indx) => (
                  <Form.Check
                    key={indx}
                    type='checkbox'
                    id={`stars-${indx}`}
                    value={star.value}
                    checked={rating === star.value}
                    onChange={(e) => setRating(e.currentTarget.value)}
                    label={<StarRating rating={star.rating} />}
                  />
                ))}
              </Form.Group>
              <Row md={3} sm={2} xs={1} className='gy-md-4 gy-3 mb-4'>
                <Form.Group as={Col}>
                  <Form.Label className='fw-bold mb-2 pb-1'>Minimum stay</Form.Label>
                  <Form.Check
                    type='radio'
                    id='minStay1'
                    name='minStay'
                    value='3 nights or less'
                    label='3 nights or less'
                  />
                  <Form.Check
                    type='radio'
                    id='minStay2'
                    name='minStay'
                    value='More than 3 nights'
                    label='More than 3 nights'
                    defaultChecked
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className='fw-bold mb-2 pb-1'>On site staff</Form.Label>
                  <Form.Check
                    type='radio'
                    id='onsiteStaff1'
                    name='onsiteStaff'
                    value='Yes'
                    label='Yes'
                    defaultChecked
                  />
                  <Form.Check
                    type='radio'
                    id='onsiteStaff2'
                    name='onsiteStaff'
                    value='No'
                    label='No'
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className='fw-bold mb-2 pb-1'>Housekeeping</Form.Label>
                  <Form.Check
                    type='radio'
                    id='hk1'
                    name='hk'
                    value='Included in room rate'
                    label='Included in room rate'
                  />
                  <Form.Check
                    type='radio'
                    id='hk2'
                    name='hk'
                    value='Additional Fee'
                    label='Additional Fee'
                    defaultChecked
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className='fw-bold mb-2 pb-1'>Housekeeping frequency</Form.Label>
                  <Form.Check
                    type='radio'
                    id='hkf1'
                    name='hkf'
                    value='Daily'
                    label='Daily'
                    defaultChecked
                  />
                  <Form.Check
                    type='radio'
                    id='hkf2'
                    name='hkf'
                    value='Weekly'
                    label='Weekly'
                  />
                  <Form.Check
                    type='radio'
                    id='hkf3'
                    name='hkf'
                    value='None'
                    label='None'
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className='fw-bold mb-2 pb-1'>Front desk</Form.Label>
                  <Form.Check
                    type='radio'
                    id='frontDesk1'
                    name='frontDesk'
                    value='24-hour staffing'
                    label='24-hour staffing'
                    defaultChecked
                  />
                  <Form.Check
                    type='radio'
                    id='frontDesk2'
                    name='frontDesk'
                    value='Limited hours staffing'
                    label='Limited hours staffing'
                  />
                  <Form.Check
                    type='radio'
                    id='frontDesk3'
                    name='frontDesk'
                    value='None'
                    label='None'
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className='fw-bold mb-2 pb-1'>Bathroom</Form.Label>
                  <Form.Check
                    type='radio'
                    id='bathroom1'
                    name='bathroom'
                    value='All en suite'
                    label='All en suite'
                  />
                  <Form.Check
                    type='radio'
                    id='bathroom2'
                    name='bathroom'
                    value='Some en suite'
                    label='Some en suite'
                    defaultChecked
                  />
                  <Form.Check
                    type='radio'
                    id='bathroom3'
                    name='bathroom'
                    value='Shared'
                    label='Shared'
                  />
                </Form.Group>
              </Row>
              <Form.Group className='mb-4'>
                <Form.Label className='fw-bold mb-2 pb-1'>Amenities</Form.Label>
                <Row md={3} sm={2} xs={1}>
                  {amenities.map((amenity, indx) => (
                    <Col key={indx}>
                      <Form.Check
                        type='checkbox'
                        id={`amenity-${indx}`}
                        value={amenity.value}
                        label={amenity.value}
                        defaultChecked={amenity.checked}
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='fw-bold mb-2 pb-1'>Room types</Form.Label>
                {roomTypes.map((roomType, indx) => (
                  <Form.Check
                    key={indx}
                    type='checkbox'
                    id={`roomType-${indx}`}
                    value={roomType.value}
                    label={roomType.value}
                    defaultChecked={roomType.checked}
                  />
                ))}
              </Form.Group>
              <Form.Group controlId='ab-award' className='mb-3'>
                <Form.Label className='fw-bold mb-2 pb-1'>Hotel awards</Form.Label>
                <Form.Control type='file' />
              </Form.Group>
              <a href='#' className='fw-bold text-decoration-none text-nowrap' onClick={(e) => e.preventDefault()}>
                <i className='fi-plus me-2 mt-n1 fs-sm align-middle'></i>
                Add more
              </a>
            </section>


            {/* Price range */}
            <section id='price' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-cash text-primary fs-5 mt-n1 me-2'></i>
                Price range
              </h2>
              <Form.Label htmlFor='ab-price'>Price (per night) <span className='text-danger'>*</span></Form.Label>
              <Col md={8} className='d-flex flex-sm-row flex-column px-0'>
                <div className='d-flex align-items-center me-sm-2 mb-sm-0 mb-2'>
                  <Form.Control type='number' id='ab-price' min='50' step='10' placeholder='Min' required />
                  <div className='mx-2'>—</div>
                  <Form.Control type='number' min='60' step='10' placeholder='Max' required />
                </div>
                <Form.Select className='w-sm-25 ms-sm-0 ms-auto'>
                  <option value='usd'>$</option>
                  <option value='eur'>€</option>
                  <option value='gbp'>£</option>
                  <option value='jpy'>¥</option>
                </Form.Select>
              </Col>
            </section>


            {/* Photos / video */}
            <section id='photos' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-image text-primary fs-5 mt-n1 me-2'></i>
                Photos / video
              </h2>
              <Alert variant='info' className='d-flex mb-4'>
                <i className='fi-alert-circle me-2 me-sm-3'></i>
                <p className='fs-sm mb-1'>The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.<br />
                The maximum video size is 10 MB. Formats: mp4, mov.</p>
              </Alert>
              <FilePond
                files={gallery}
                onupdatefiles={setGallery}
                // server='/api' {/* Configure your server here. See plugin docs */}
                name='gallery'
                labelIdle='<div class="btn btn-primary rounded-pill mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div>or drag them in</div>'
                acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
                allowMultiple={true}
                maxFiles={4}
                maxFileSize='2MB'
                className='file-uploader file-uploader-grid'
              />
            </section>


            {/* Action buttons */}
            <section className='d-sm-flex justify-content-between pt-2'>
              <Button size='lg' variant='outline-primary d-block rounded-pill w-100 w-sm-auto mb-3 mb-sm-2' onClick={handlePreviewShow}>
                <i className='fi-eye-on ms-n1 me-2'></i>
                Preview
              </Button>
              <Button as={Link} href='/city-guide/business-promotion' size='lg' variant='primary d-block rounded-pill w-100 w-sm-auto mb-2'>Save and continue</Button>
            </section>
          </Col>


          {/* Sidebar (Progress of completion) */}
          <Col lg={{span: 3, offset: 1}} className='d-none d-lg-block'>
            <div className='sticky-top pt-5'>
              <h6 className='pt-5 mt-3 mb-2'>33% content filled</h6>
              <ProgressBar variant='warning' now={33} style={{height: '.25rem'}} className='mb-4' />
              <ul className='list-unstyled'>
                {anchors.map((anchor, indx) => (
                  <li key={indx} className='d-flex align-items-center'>
                    <i className={`fi-check text-${anchor.completed ? 'primary' : 'muted'} me-2`}></i>
                    <ScrollLink to={anchor.to} smooth='easeInOutQuart' duration={600} offset={-95} className='nav-link fw-normal ps-1 p-0'>
                      {anchor.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </CityGuidePageLayout>
  )
}

export default AddBusinessPage
