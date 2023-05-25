import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'
import Collapse from 'react-bootstrap/Collapse'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import Badge from 'react-bootstrap/Badge'
import ImageLoader from '../../components/ImageLoader'
import ScrollLink from '../../components/ScrollLink'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import NumberFormat from 'react-number-format'
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


const AddPropertyPage = () => {

  // Preview modal
  const [previewShow, setPreviewShow] = useState(false)
  const handlePreviewClose = () => setPreviewShow(false)
  const handlePreviewShow = () => setPreviewShow(true)

  // Overview collapse state
  const [overviewOpen, setOverviewOpen] = useState(false)

  // Amenities collapse state
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)

  // Amenities array
  const amenitiesPreview = [
    [
      { icon: 'fi-wifi', title: 'Free WiFi' },
      { icon: 'fi-thermometer', title: 'Heating' },
      { icon: 'fi-dish', title: 'Dishwasher' },
      { icon: 'fi-parking', title: 'Parking place' },
      { icon: 'fi-snowflake', title: 'Air conditioning' },
      { icon: 'fi-iron', title: 'Iron' },
      { icon: 'fi-tv', title: 'TV' },
      { icon: 'fi-laundry', title: 'Laundry' },
      { icon: 'fi-cctv', title: 'Security cameras' }
    ],
    [
      { icon: 'fi-no-smoke', title: 'No smocking' },
      { icon: 'fi-pet', title: 'Cats' },
      { icon: 'fi-swimming-pool', title: 'Swimming pool' },
      { icon: 'fi-double-bed', title: 'Double bed' },
      { icon: 'fi-bed', title: 'Single bed' }
    ]
  ]

  // Anchor lnks
  const anchors = [
    {to: 'basic-info', label: 'Basic info', completed: true},
    {to: 'location', label: 'Location', completed: true},
    {to: 'details', label: 'Property details', completed: true},
    {to: 'price', label: 'Price range', completed: false},
    {to: 'photos', label: 'Photos / video', completed: false},
    {to: 'contacts', label: 'Contacts', completed: true}
  ]

  // Number of bedrooms radios buttons
  const [bedroomsValue, setBedroomsValue] = useState('4')
  const bedrooms = [
    {name: 'Studio', value: 'studio'},
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'},
    {name: '5+', value: '5+'}
  ]

  // Number of bathrooms radios buttons
  const [bathroomsValue, setBathroomsValue] = useState('2')
  const bathrooms = [
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'}
  ]

  // Number of bathrooms radios buttons
  const [parkingsValue, setParkingsValue] = useState('2')
  const parkings = [
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'}
  ]

  // Amenities (checkboxes)
  const amenities = [
    {value: 'WiFi', checked: true},
    {value: 'Pets-friendly', checked: false},
    {value: 'Dishwasher', checked: false},
    {value: 'Air conditioning', checked: true},
    {value: 'Pool', checked: false},
    {value: 'Iron', checked: true},
    {value: 'Balcony', checked: false},
    {value: 'Bar', checked: false},
    {value: 'Hair dryer', checked: true},
    {value: 'Garage', checked: false},
    {value: 'TV', checked: true},
    {value: 'Kitchen', checked: true},
    {value: 'Gym', checked: false},
    {value: 'Linens', checked: true},
    {value: 'Breakfast', checked: false},
    {value: 'Free parking', checked: true},
    {value: 'Heating', checked: true},
    {value: 'Security cameras', checked: false}
  ]

  // Pets (checkboxes)
  const pets = [
    {value: 'Cats allowed', checked: false},
    {value: 'Dogs allowed', checked: false}
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
  
  // Gallery state
  const [gallery, setGallery] = useState([])


  return (
    <RealEstatePageLayout
      pageTitle='Add Property'
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
          <h3 className='h5 text-muted fw-normal modal-title d-none d-sm-block text-nowrap'>Property preview</h3>
          <div className='d-flex align-items-center justify-content-sm-end w-100 ms-sm-auto'>
            <Button as={Link} href='/real-estate/property-promotion' size='sm' className='me-4'>Save and continue</Button>
            <span className='fs-xs text-muted ms-auto ms-sm-0 me-2'>[ESC]</span>
          </div>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <Container className='mt-2 mt-sm-0 py-4 py-sm-5'>

            {/* Title */}
            <h1 className='h2 mb-2'>Pine Apartments</h1>
            <p className='mb-2 pb-1 fs-lg'>28 Jackson Ave Long Island City, NY 67234</p>
            <ul className='d-flex mb-4 list-unstyled'>
              <li className='me-3 pe-3 border-end'>
                <b className='me-1'>4</b>
                <i className='fi-bed mt-n1 lead align-middle text-muted'></i>
              </li>
              <li className='me-3 pe-3 border-end'>
                <b className='me-1'>2</b>
                <i className='fi-bath mt-n1 lead align-middle text-muted'></i>
              </li>
              <li className='me-3 pe-3 border-end'>
                <b className='me-1'>2</b>
                <i className='fi-car mt-n1 lead align-middle text-muted'></i>
              </li>
              <li>
                <b>56 </b>
                sq.m
              </li>
            </ul>

            {/* Gallery preview */}
            <div className='overflow-auto pb-3 px-2 mx-n2 mb-4'>
              <Row className='row g-2 g-md-3' style={{minWidth: '30rem'}}>
                <Col xs={8} className='d-flex'>
                  <ImageLoader
                    src='/images/real-estate/single/01.jpg'
                    width={859}
                    height={606}
                    alt='Gallery thumbnail'
                    className='rounded rounded-md-3'
                  />
                </Col>
                <Col xs={4}>
                  <div className='d-flex mb-2 mb-md-3'>
                    <ImageLoader
                      src='/images/real-estate/single/02.jpg'
                      width={421}
                      height={296}
                      alt='Gallery thumbnail'
                      className='rounded rounded-md-3'
                    />
                  </div>
                  <div className='d-flex'>
                    <ImageLoader
                      src='/images/real-estate/single/03.jpg'
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
                <Badge bg='info' className='me-2 mb-3'>New</Badge>

                {/* Price */}
                <h2 className='h3 mb-4 pb-4 border-bottom'>
                  $2,000
                  <span className='d-inline-block ms-1 fs-base fw-normal text-body'>/month</span>
                </h2>

                {/* Overview */}
                <div className='mb-4 pb-md-3'>
                  <h3 className='h4'>Overview</h3>
                  <p className='mb-1'>Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
                  <Collapse in={overviewOpen}>
                    <div id='moreOverview'>
                      <p className='mb-1'>Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa.</p>
                    </div>
                  </Collapse>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setOverviewOpen(!overviewOpen)
                    }}
                    aria-controls='moreOverview'
                    aria-expanded={overviewOpen}
                    className={`collapse-label${overviewOpen ? '' : ' collapsed'}`}
                  >
                    {overviewOpen ? 'Show less' : 'Show more'}
                  </a>
                </div>

                {/* Property details list */}
                <div className='mb-4 pb-md-3'>
                  <h3 className='h4'>Property Details</h3>
                  <ul className='list-unstyled mb-0'>
                    <li><b>Type: </b>apartment</li>
                    <li><b>Apartment area: </b>56 sq.m</li>
                    <li><b>Built: </b>2015</li>
                    <li><b>Bedrooms: </b>4</li>
                    <li><b>Bathrooms: </b>2</li>
                    <li><b>Parking places: </b>2</li>
                    <li><b>Pets allowed: </b>cats only</li>
                  </ul>
                </div>

                {/* Amenities */}
                <div className='mb-sm-3'>
                  <h3 className='h4'>Amenities</h3>
                  <Row as='ul' xs={1} md={2} lg={3} className='list-unstyled gy-1 mb-1 text-nowrap'>
                    {amenitiesPreview[0].map(({icon, title}, indx) => (
                      <Col key={indx} as='li'>
                        <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                        {title}
                      </Col>
                    ))}
                  </Row>
                  <Collapse in={amenitiesOpen}>
                    <div id='moreAmenities'>
                      <Row as='ul' xs={1} md={2} lg={3} className='list-unstyled gy-1 mb-1 text-nowrap'>
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
              <Link href='/real-estate' passHref>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Link>
              <Breadcrumb.Item active>Add property</Breadcrumb.Item>
            </Breadcrumb>

            {/* Title */}
            <div className='mb-4'>
              <h1 className='h2 mb-0'>Add property</h1>
              <div className='d-lg-none pt-3 mb-2'>65% content filled</div>
              <ProgressBar variant='warning' now={65} style={{height: '.25rem'}} className='d-lg-none mb-4' />
            </div>


            {/* Basic info */}
            <section id='basic-info' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
                Basic info
              </h2>
              <Form.Group controlId='ap-title' className='mb-3'>
                <Form.Label>Title <span className='text-danger'>*</span></Form.Label>
                <Form.Control defaultValue='Pine Apartments' placeholder='Title of your property' required />
                <Form.Text>48 characters left</Form.Text>
              </Form.Group>
              <Row>
                <Form.Group as={Col} md={6} controlId='ab-category' className='mb-3'>
                  <Form.Label>Category <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='rent' required>
                    <option value='' disabled>Choose category</option>
                    <option value='rent'>For rent</option>
                    <option value='sale'>For sale</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md={6} controlId='ab-property-type' className='mb-3'>
                  <Form.Label>Property type <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='rent' required>
                    <option value='' disabled>Choose property type</option>
                    <option value='apartment'>Apartment</option>
                    <option value='house'>House</option>
                    <option value='commercial'>Commercial</option>
                    <option value='daily'>Daily rental</option>
                    <option value='new'>New building</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <div className='form-label fw-bold pt-3 pb-2'>Are you listing on Finder as part of a company?</div>
              <Form.Check
                type='radio'
                name='businessType'
                id='business'
                value='Business'
                label='I am a registered business'
              />
              <Form.Check
                type='radio'
                name='businessType'
                id='private'
                value='Private seller'
                label='I am a private seller'
                defaultChecked
              />
            </section>


            {/* Location */}
            <section id='location' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-map-pin text-primary fs-5 mt-n1 me-2'></i>
                Location
              </h2>
              <Row>
                <Form.Group as={Col} sm={6} controlId='ap-country' className='mb-3'>
                  <Form.Label>Country / region <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='US' required>
                    <option value='' disabled>Choose country</option>
                    <option value='Australia'>Australia</option>
                    <option value='Belgium'>Belgium</option>
                    <option value='Germany'>Germany</option>
                    <option value='Canada'>Canada</option>
                    <option value='US'>United States</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ap-city' className='mb-3'>
                  <Form.Label>City <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='New York' required>
                    <option value='' disabled>Choose city</option>
                    <option value='Chicago'>Chicago</option>
                    <option value='Dallas'>Dallas</option>
                    <option value='Los Angeles'>Los Angeles</option>
                    <option value='New York' >New York</option>
                    <option value='San Diego'>San Diego</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={8} controlId='ap-district' className='mb-3'>
                  <Form.Label>District <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='Queens' required>
                    <option value='' disabled>Choose district</option>
                    <option value='Brooklyn'>Brooklyn</option>
                    <option value='Manhattan'>Manhattan</option>
                    <option value='Staten Island'>Staten Island</option>
                    <option value='The Bronx'>The Bronx</option>
                    <option value='Queens'>Queens</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={4} controlId='ap-zip' className='mb-3'>
                  <Form.Label>Zip code <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='67234' placeholder='Enter Zip code' required />
                </Form.Group>
                <Form.Group as={Col} sm={12} controlId='ap-address' className='mb-3'>
                  <Form.Label>Street address <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='28 Jackson Avenue' required />
                </Form.Group>
              </Row>
              <Form.Label className='fw-bold pt-3 pb-2'>Display on the map</Form.Label>
              <MapContainer
                center={[40.7447, -73.9485]}
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
                <CustomMarker position={[40.7447, -73.9485]} icon='dot'>
                  <Popup>
                    <div className='p-3'>
                      <h6>Pine Apartments</h6>
                      <p className='fs-xs text-muted pt-1 mt-n3 mb-0'>28 Jackson Ave Long Island City, NY</p>
                    </div>
                  </Popup>
                </CustomMarker>
              </MapContainer>
            </section>


            {/* Property details */}
            <section id='details' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-edit text-primary fs-5 mt-n1 me-2'></i>
                Property details
              </h2>
              <Form.Group controlId='ap-area' className='mb-4' style={{maxWidth: '25rem'}}>
                <Form.Label>Total area, sq.m</Form.Label>
                <Form.Control type='number' defaultValue={56} min={20} placeholder='Enter your area' />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Bedrooms</Form.Label>
                <ButtonGroup size='sm'>
                  {bedrooms.map((bedroom, indx) => (
                    <ToggleButton
                      key={indx}
                      type='radio'
                      id={`bedrooms-${indx}`}
                      name='bedrooms'
                      value={bedroom.value}
                      checked={bedroomsValue === bedroom.value}
                      onChange={(e) => setBedroomsValue(e.currentTarget.value)}
                      variant='outline-secondary fw-normal'
                    >{bedroom.name}</ToggleButton>
                  ))}
                </ButtonGroup>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Bathrooms</Form.Label>
                <ButtonGroup size='sm'>
                  {bathrooms.map((bathroom, indx) => (
                    <ToggleButton
                      key={indx}
                      type='radio'
                      id={`bathrooms-${indx}`}
                      name='bathrooms'
                      value={bathroom.value}
                      checked={bathroomsValue === bathroom.value}
                      onChange={(e) => setBathroomsValue(e.currentTarget.value)}
                      variant='outline-secondary fw-normal'
                    >{bathroom.name}</ToggleButton>
                  ))}
                </ButtonGroup>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Parking spots</Form.Label>
                <ButtonGroup size='sm'>
                  {parkings.map((parking, indx) => (
                    <ToggleButton
                      key={indx}
                      type='radio'
                      id={`parkings-${indx}`}
                      name='parkings'
                      value={parking.value}
                      checked={parkingsValue === parking.value}
                      onChange={(e) => setParkingsValue(e.currentTarget.value)}
                      variant='outline-secondary fw-normal'
                    >{parking.name}</ToggleButton>
                  ))}
                </ButtonGroup>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Amenities</Form.Label>
                <Row xs={1} sm={3}>
                  {amenities.map((amenity, indx) => (
                    <Col key={indx}>
                      <Form.Check
                        type='checkbox'
                        id={`amenities-${indx}`}
                        value={amenity.value}
                        label={amenity.value}
                        defaultChecked={amenity.checked}
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Pets</Form.Label>
                <Row xs={1} sm={3}>
                  <Col>
                    {pets.map((pet, indx) => (
                      <Form.Check
                        key={indx}
                        type='checkbox'
                        id={`pets-${indx}`}
                        value={pet.value}
                        label={pet.value}
                        defaultChecked={pet.checked}
                      />
                      ))}
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId='ap-description'>
                <Form.Label>Description</Form.Label>
                <Form.Control as='textarea' rows={5} placeholder='Describe your property'/>
                <Form.Text>1500 characters left</Form.Text>
              </Form.Group>
            </section>


            {/* Price */}
            <section id='price' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-cash text-primary fs-5 mt-n1 me-2'></i>
                Price
              </h2>
              <Form.Label htmlFor='ap-price'>
                Price <span className='text-danger'>*</span>
              </Form.Label>
              <div className='d-sm-flex'>
                <Form.Select className='w-25 me-2 mb-2'>
                  <option value='usd'>$</option>
                  <option value='eur'>€</option>
                  <option value='gbp'>£</option>
                  <option value='jpy'>¥</option>
                </Form.Select>
                <Form.Control
                  id='ap-price'
                  type='number'
                  min={200}
                  step={50}
                  className='w-100 me-2 mb-2'
                  required
                />
                <Form.Select defaultValue='month' className='w-50 mb-2'>
                  <option value='day'>per day</option>
                  <option value='week'>per week</option>
                  <option value='month'>per month</option>
                  <option value='year'>per year</option>
                </Form.Select>
              </div>
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
                labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div>or drag them in</div>'
                acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
                allowMultiple={true}
                maxFiles={4}
                maxFileSize='2MB'
                className='file-uploader file-uploader-grid'
              />
            </section>

            
            {/* Contacts */}
            <section id='contacts' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-phone text-primary fs-5 mt-n1 me-2'></i>
                Contacts
              </h2>
              <Row>
                <Form.Group as={Col} sm={6} controlId='ab-fn' className='mb-3'>
                  <Form.Label>First name <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='Annette' placeholder='Enter your first name' required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-sn' className='mb-3'>
                  <Form.Label>Second name <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='Black' placeholder='Enter your second name' required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-email' className='mb-3'>
                  <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='email' defaultValue='annette_black@email.com' placeholder='Enter your email address' required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-phone' className='mb-3'>
                  <Form.Label>Phone number <span className='text-danger'>*</span></Form.Label>
                  <Form.Control
                    as={NumberFormat}
                    format='+1(##) ###-####'
                    defaultValue='+1(39) 555-0107'
                    placeholder='+1(00) 000-0000'
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} controlId='ab-company' className='mb-3'>
                  <Form.Label>Company</Form.Label>
                  <Form.Control placeholder='Enter company name' />
                </Form.Group>
              </Row>
            </section>


            {/* Action buttons */}
            <section className='d-sm-flex justify-content-between pt-2'>
              <Button size='lg' variant='outline-primary d-block w-100 w-sm-auto mb-3 mb-sm-2' onClick={handlePreviewShow}>
                <i className='fi-eye-on ms-n1 me-2'></i>
                Preview
              </Button>
              <Link href='/real-estate/property-promotion' passHref>
                <Button size='lg' variant='primary d-block w-100 w-sm-auto mb-2'>Save and continue</Button>
              </Link>
            </section>
          </Col>


          {/* Sidebar (Progress of completion) */}
          <Col lg={{span: 3, offset: 1}} className='d-none d-lg-block'>
            <div className='sticky-top pt-5'>
              <h6 className='pt-5 mt-3 mb-2'>65% content filled</h6>
              <ProgressBar variant='warning' now={65} style={{height: '.25rem'}} className='mb-4' />
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
    </RealEstatePageLayout>
  )
}

export default AddPropertyPage
