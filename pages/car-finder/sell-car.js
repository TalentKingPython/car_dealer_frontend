import { useState } from 'react'
import dynamic from 'next/dynamic'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Collapse from 'react-bootstrap/Collapse'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Tooltip from 'react-bootstrap/Tooltip'
import Accordion from 'react-bootstrap/Accordion'
import ScrollLink from '../../components/ScrollLink'
import ImageLoader from '../../components/ImageLoader'
import Avatar from '../../components/Avatar'
import StarRating from '../../components/StarRating'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'

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

const SellCarPage = () => {

  // Exterior features checkboxes
  const exterior = [
    { value: 'Alloy wheels', checked: false },
    { value: 'Panoramic roof', checked: false },
    { value: 'Sunroof / moonroof', checked: false },
    { value: 'Tinted glass', checked: false }
  ]

  // Interior features checkboxes
  const interior = [
    [
      { value: 'Multi-zone A/C', checked: false },
      { value: 'Navigation system', checked: false },
      { value: 'Intermittent wipers', checked: false },
      { value: 'Heated front seats', checked: false },
      { value: 'Leather seats', checked: false },
      { value: 'Memory seat', checked: false }
    ],
    [
      { value: 'Premium sound system', checked: false },
      { value: 'USB port', checked: false },
      { value: 'Apple CarPlay', checked: false },
      { value: 'Bluetooth', checked: false },
      { value: 'Leather steering wheel', checked: false },
      { value: 'Android Auto', checked: false }
    ]
  ]

  // Safety features checkboxes
  const safety = [
    [
      { value: 'Airbag: driver', checked: false },
      { value: 'Alarm', checked: false },
      { value: 'Stability control', checked: false },
      { value: 'Airbag: passenger', checked: false },
      { value: 'Antilock brakes', checked: false },
      { value: 'Fog lights', checked: false }
    ],
    [
      { value: 'Adaptive cruise control', checked: false },
      { value: 'Brake assist', checked: false },
      { value: 'Blind spot monitor', checked: false },
      { value: 'Lane departure warning', checked: false }
    ]
  ]

  // Interior checkboxes collapse
  const [interiorOpen, setInteriorOpen] = useState(false)

  // Safety checkboxes collapse
  const [safetyOpen, setSafetyOpen] = useState(false)

  // Register Filepond plugins
  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
  )

  // Init state
  const [gallery, setGallery] = useState([])

  // Socials collapse
  const [socialsOpen, setSocialsOpen] = useState(false)

  // Anchor links
  const anchors = [
    {to: 'basic-info', label: 'Basic info', completed: true},
    {to: 'price', label: 'Price', completed: true},
    {to: 'vehicle-info', label: 'Vehicle information', completed: true},
    {to: 'features', label: 'Features', completed: false},
    {to: 'photos', label: 'Photos / video', completed: false},
    {to: 'location', label: 'Location', completed: true},
    {to: 'contacts', label: 'Contacts', completed: true}
  ]

  // Preview modal
  const [previewShow, setPreviewShow] = useState(false)
  const handlePreviewClose = () => setPreviewShow(false)
  const handlePreviewShow = () => setPreviewShow(true)

  // Seller's description collapse
  const [descriptionOpen, setDescriptionOpen] = useState(false)

  // Gallery component (Swiper slider with custom thumbnails and slides count)
  const SwiperGallery = () => {

    const [currentSlide, setCurrentSlide] = useState()
    const [totalSlides, setTotalSlides] = useState()

    const thumbnails = [
      '/images/car-finder/single/gallery/th01.jpg',
      '/images/car-finder/single/gallery/th02.jpg',
      '/images/car-finder/single/gallery/th03.jpg',
      '/images/car-finder/single/gallery/th04.jpg',
      '/images/car-finder/single/gallery/th05.jpg',
    ]

    const SlidesCount = () => (
      <div className='swiper-slides-count text-light'>
        <i className='fi-image fs-lg me-2'></i>
        <div className='fs-5 fw-bold ps-1'>
          <span>{currentSlide}</span>
          <span>/</span>
          <span>{totalSlides}</span>
        </div>
      </div>
    )

    return (
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1)
          }}
          onInit={(swiper) => {
            setTimeout(() => {
              setCurrentSlide(swiper.realIndex)
              setTotalSlides(swiper.slides.length - 2)
            }, 50)
          }}
          pagination={{
            el: '.swiper-thumbnails',
            clickable: true,
            renderBullet: (index, className) => {
              return `<li class='swiper-thumbnail ${className}'>
                <img src='${thumbnails[index]}' alt='Thumbnail'>
              </li>`
            }
          }}
          navigation
          spaceBetween={12}
          loop
          grabCursor
          className='swiper-nav-onhover rounded-3'
        >
          <SwiperSlide className='d-flex'>
            <ImageLoader light='true' className='rounded-3' src='/images/car-finder/single/gallery/01.jpg' width={746} height={420} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader light='true' className='rounded-3' src='/images/car-finder/single/gallery/02.jpg' width={746} height={420} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader light='true' className='rounded-3' src='/images/car-finder/single/gallery/03.jpg' width={746} height={420} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader light='true' className='rounded-3' src='/images/car-finder/single/gallery/04.jpg' width={746} height={420} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader light='true' className='rounded-3' src='/images/car-finder/single/gallery/05.jpg' width={746} height={420} alt='Image' />
          </SwiperSlide>
          <SlidesCount />
        </Swiper>
        <ul className='swiper-thumbnails'></ul>
      </>
    )
  }

  return (
    <CarFinderPageLayout
      pageTitle='Sell Car'
      activeNav='Vendor'
      userLoggedIn
    >

      {/* Preview modal */}
      <Modal
        fullscreen
        show={previewShow}
        onHide={handlePreviewClose}
        contentClassName='bg-dark border-light'
      >
        <Modal.Header className='border-light'>
          <CloseButton
            variant='white'
            onClick={handlePreviewClose}
            aria-label='Close modal'
            className='position-absolute top-0 end-0 mt-3 me-3 pt-3'
          />
          <h3 className='h5 text-light opacity-60 fw-normal modal-title d-none d-sm-block text-nowrap'>Ad preview</h3>
          <div className='d-flex align-items-center justify-content-sm-end w-100 ms-sm-auto'>
            <Button as={Link} href='/car-finder/promotion' size='sm' className='me-4'>Save and continue</Button>
            <span className='fs-xs text-light opacity-60 ms-auto ms-sm-0 me-4 pe-2'>[ESC]</span>
          </div>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <Container className='mt-2 mt-sm-0 py-4 py-sm-5'>

            {/* Title */}
            <h1 className='h2 text-light mb-3 mb-md-4'>Mercedes-Benz E 400 Cabriolet</h1>
            <div className='d-md-none'>
              <div className='d-flex align-items-center mb-3'>
                <div className='h3 mb-0 text-light'>$31,900</div>
                <div className='text-nowrap ps-3'>
                  <Badge variant='info' className='fs-base me-2'>Used</Badge>
                  <OverlayTrigger
                    trigger={['hover', 'focus']}
                    placement='bottom'
                    overlay={
                      <Popover>
                        <Popover.Body>
                          <div className='d-flex'>
                            <i className='fi-award mt-1 me-2'></i>
                            <span>This car is checked and<br/>certified by Finder.</span>
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Badge bg='success' className='fs-base me-2'>Certified</Badge>
                  </OverlayTrigger>
                </div>
              </div>
              <div className='d-flex flex-wrap align-items-center text-light mb-2'>
                <div className='text-nowrap border-end border-light pe-3 me-3'>
                  <i className='fi-dashboard fs-lg opacity-70 me-2'></i>
                  <span className='align-middle'>25K miles</span>
                </div>
                <div className='text-nowrap'>
                  <i className='fi-map-pin fs-lg opacity-70 me-2'></i>
                  <span className='align-middle'>Chicago, IL 60603</span>
                </div>
              </div>
            </div>
            <Row>
              <Col md={7}>

                {/* Gallery */}
                <SwiperGallery />

                {/* Specs */}
                <div className='py-3'>
                  <h2 className='h4 text-light mb-4'>Specifications</h2>
                  <Row className='text-light'>
                    <Col sm={6} md={12} lg={6}>
                      <ul className='list-unstyled'>
                        <li className='mb-2'>
                          <strong>Manufacturing Year:</strong>
                          <span className='opacity-70 ms-1'>2018</span>
                        </li>
                        <li className='mb-2'>
                          <strong>Mileage:</strong>
                          <span className='opacity-70 ms-1'>25K miles</span>
                        </li>
                        <li className='mb-2'>
                          <strong>Body Type:</strong>
                          <span className='opacity-70 ms-1'>Convertible</span>
                        </li>
                        <li className='mb-2'>
                          <strong>Drivetrain:</strong>
                          <span className='opacity-70 ms-1'>Front Wheel Drive</span>
                        </li>
                        <li className='mb-2'>
                          <strong>Engine:</strong>
                          <span className='opacity-70 ms-1'>2.5L Turbo 6 Cylinder</span>
                        </li>
                        <li className='mb-2'>
                          <strong>Transmission:</strong>
                          <span className='opacity-70 ms-1'>7-Speed Shiftable Automatic</span>
                        </li>
                      </ul>
                    </Col>
                    <Col sm={6} md={12} lg={6}>
                      <ul className='list-unstyled'>
                        <li className='mb-2'>
                          <strong>Fuel Type:</strong>
                          <span className='opacity-70 ms-1'>Gasoline</span>
                        </li>
                        <li className='mb-2'>
                          <strong>City MPG:</strong>
                          <span className='opacity-70 ms-1'>20</span>
                          <OverlayTrigger
                            placement='top'
                            overlay={<Tooltip>Verified by seller</Tooltip>}
                          >
                            <i className='fi-alert-circle fs-sm text-primary ms-2' aria-label='Vrified by seller'></i>
                          </OverlayTrigger>
                        </li>
                        <li className='mb-2'>
                          <strong>Highway MPG:</strong>
                          <span className='opacity-70 ms-1'>29</span>
                          <OverlayTrigger
                            placement='top'
                            overlay={<Tooltip>Verified by seller</Tooltip>}
                          >
                            <i className='fi-alert-circle fs-sm text-primary ms-2' aria-label='Vrified by seller'></i>
                          </OverlayTrigger>
                        </li>
                        <li className='mb-2'>
                          <strong>Exterior Color:</strong>
                          <span className='opacity-70 ms-1'>Aspen White</span>
                        </li>
                        <li className='mb-2'>
                          <strong>Interior Color:</strong>
                          <span className='opacity-70 ms-1'>Charcoal</span>
                        </li>
                        <li className='mb-2'>
                          <strong>VIN:</strong>
                          <span className='opacity-70 ms-1'>2VW821AU9JM754284</span>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>

                {/* Features */}
                <h2 className='h4 text-light mb-4'>Features</h2>
                <Accordion defaultActiveKey='interior' className='accordion-light'>
                  <Accordion.Item eventKey='exterior'>
                    <Accordion.Header>Exterior</Accordion.Header>
                    <Accordion.Body className='fs-sm text-light opacity-70'>
                      <ul>
                        <li>Alloy Wheels</li>
                        <li>Sunroof / Moonroof</li>
                        <li>Tinged glass</li>
                        <li>LED Headlights</li>
                        <li>Foldable Roof</li>
                        <li>Tow Hitch</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='interior'>
                    <Accordion.Header>Interior</Accordion.Header>
                    <Accordion.Body className='fs-sm text-light opacity-70'>
                      <Row xs={1} sm={2}>
                        <Col>
                          <ul>
                            <li>Adjustable Steering Wheel</li>
                            <li>Auto-Dimming Rearview Mirror</li>
                            <li>Driver Adjustable Lumbar</li>
                            <li>Driver Illuminated Vanity Mirror</li>
                            <li>Universal Garage Door Opener</li>
                            <li>Steering Wheel Audio Controls</li>
                          </ul>
                        </Col>
                        <Col>
                          <ul>
                            <li>Heated Front Seats</li>
                            <li>Leather Seats</li>
                            <li>Leather Steering Wheel</li>
                            <li>Pass-Through Rear Seat</li>
                            <li>Passenger Adjustable Lumbar</li>
                            <li>Passenger Illuminated Visor Mirror</li>
                          </ul>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='safety'>
                    <Accordion.Header>Safety</Accordion.Header>
                    <Accordion.Body className='fs-sm text-light opacity-70'>
                      <Row xs={1} sm={2}>
                        <Col>
                          <ul>
                            <li>Airbag: Driver</li>
                            <li>Airbag: Passenger</li>
                            <li>Adaptive Cruise Control</li>
                            <li>Blind Spot Monitor</li>
                            <li>Alarm</li>
                            <li>Antilock Brakes</li>
                          </ul>
                        </Col>
                        <Col>
                          <ul>
                            <li>Brake Assist</li>
                            <li>Lane Departure Warning</li>
                            <li>Stability Control</li>
                            <li>Fog Lights</li>
                            <li>Power Door Locks</li>
                          </ul>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='technology'>
                    <Accordion.Header>Technology</Accordion.Header>
                    <Accordion.Body className='fs-sm text-light opacity-70'>
                      <Row xs={1} sm={2}>
                        <Col>
                          <ul>
                            <li>Multi-Zone A/C</li>
                            <li>Climate Control</li>
                            <li>Navigation System</li>
                            <li>Remote Start</li>
                            <li>Bluetooth</li>
                            <li>Remote Start</li>
                          </ul>
                        </Col>
                        <Col>
                          <ul>
                            <li>Apple CarPlay</li>
                            <li>Android Auto</li>
                            <li>Backup Camera</li>
                            <li>HomeLink</li>
                            <li>Keyless Start</li>
                            <li>Premium Sound System</li>
                          </ul>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                {/* Description */}
                <div className='pb-4 mb-3'>
                  <h2 className='h4 text-light pt-4 mt-3'>Seller&apos;s Description</h2>
                  <p className='text-light opacity-70 mb-1'>Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
                  <Collapse in={descriptionOpen}>
                    <div id='moreDescription'>
                      <p className='text-light opacity-70 mb-1'>Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa.</p>
                    </div>
                  </Collapse>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setDescriptionOpen(!descriptionOpen)
                    }}
                    aria-controls='moreDescription'
                    aria-expanded={descriptionOpen}
                    className={`collapse-label${descriptionOpen ? '' : ' collapsed'}`}
                  >
                    {descriptionOpen ? 'Show less' : 'Show more'}
                  </a>
                </div>

                {/* Post meta */}
                <div className='d-flex flex-wrap border-top border-light fs-sm text-light pt-4 pb-5 pb-md-2'>
                  <div className='border-end border-light pe-3 me-3'>
                    <span className='opacity-70'>Published: <strong>May 9, 2021</strong></span>
                  </div>
                  <div className='border-end border-light pe-3 me-3'>
                    <span className='opacity-70'>Ad number: <strong>681013232</strong></span>
                  </div>
                  <div className='opacity-70'>Views: <strong>57</strong></div>
                </div>
              </Col>

              {/* Sidebar */}
              <Col as='aside' md={5} className='pt-5 pt-md-0' style={{marginTop: '-6rem'}}>
                <div className='sticky-top pt-5'>

                  {/* Price and badges visible on screens >768 */}
                  <div className='d-none d-md-block pt-5'>
                    <div className='d-flex mb-4'>
                      <Badge bg='info' className='fs-base me-2'>Used</Badge>
                      <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement='top'
                        overlay={
                          <Popover>
                            <Popover.Body>
                              <div className='d-flex'>
                                <i className='fi-award mt-1 me-2'></i>
                                <span>This car is checked and<br/>certified by Finder.</span>
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <Badge bg='success' className='fs-base'>Certified</Badge>
                      </OverlayTrigger>
                    </div>
                    <div className='h3 text-light'>$31,900</div>
                    <div className='d-flex align-items-center text-light pb-4 mb-2'>
                      <div className='text-nowrap border-end border-light pe-3 me-3'>
                        <i className='fi-dashboard fs-lg opacity-70 me-2'></i>
                        <span className='align-middle'>25K miles</span>
                      </div>
                      <div className='text-nowrap'>
                        <i className='fi-map-pin fs-lg opacity-70 me-2'></i>
                        <span className='align-middle'>Chicago, IL 60603</span>
                      </div>
                    </div>
                  </div>

                  {/* Seller card */}
                  <div className='card card-light card-body mb-4'>
                    <div className='text-light mb-2'>Private Seller</div>
                    <Link href='/car-finder/vendor' className='d-flex align-items-center text-decoration-none mb-3'>
                      <Avatar img={{src: '/images/avatars/33.jpg', alt: 'Devon Lane'}} />
                      <div className='ps-2'>
                        <h5 className='text-light mb-0'>Devon Lane</h5>
                        <StarRating rating={4.8} />
                        <span className='fs-sm text-light opacity-70 align-middle ms-1'>(5 reviews)</span>
                      </div>
                    </Link>
                    <Link href='/car-finder/vendor' className='text-light'>Other ads by this seller</Link>
                    <div className='pt-4 mt-2'>
                      <Button size='lg' variant='outline-light px-4 mb-3'>
                        <i className='fi-phone me-2'></i>
                        (316) *** **** &mdash; reveal
                      </Button>
                      <br/>
                      <Button size='lg'>
                        <i className='fi-chat-left me-2'></i>
                        Send message
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      

      {/* Content */}
      <Container className='mt-5 mb-md-4 py-5'>
        <Row>
          <Col xs={12} lg={8}>

            {/* Breadcrumb */}
            <Breadcrumb className='breadcrumb-light mb-3 pt-md-3'>
              <Breadcrumb.Item linkAs={Link} href='/car-finder'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Sell car</Breadcrumb.Item>
            </Breadcrumb>

            {/* Title */}
            <div className='mb-4'>
              <h1 className='h2 text-light mb-0'>Sell car</h1>
              <div className='d-lg-none text-light pt-3 mb-2'>80% content filled</div>
              <ProgressBar variant='success' className='progress-light d-lg-none mb-4' now={80} style={{height: '4px'}} />
            </div>
            

            {/* Basic info */}
            <Card className='card-light card-body border-0 shadow-sm p-4 mb-4' id='basic-info'>
              <h2 className='h4 text-light mb-4'>
                <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
                Basic info
              </h2>
              <Form.Group controlId='sc-title' className='mb-3'>
                <Form.Label className='text-light'>
                  Title
                  <span className='ms-1 text-danger'>*</span>
                </Form.Label>
                <Form.Control className='form-control-light' placeholder='Title for your property' defaultValue='Mercedes-Benz E 400 Cabriolet' required />
                <span className='form-text text-light opacity-50'>48 characters left</span>
              </Form.Group>
              <Row>
                <Col xs={12} sm={6} as={Form.Group} controlId='sc-condition' className='mb-3'>
                  <Form.Label className='text-light'>
                    Vehicle condition
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Select defaultValue='Used' className='form-select-light' required>
                    <option value='' disabled>Choose condition</option>
                    <option value='Used'>Used</option>
                    <option value='New'>New</option>
                  </Form.Select>
                </Col>
              </Row>
              <Form.Label className='text-light fw-bold pt-3 pb-2'>Are you listing on Finder as part of a company?</Form.Label>
              <Form.Check
                type='radio'
                name='sc-seller-type'
                id='sc-dealer'
                value='Dealer'
                label='I am a registered dealer'
                className='form-check-light'
              />
              <Form.Check
                type='radio'
                name='sc-seller-type'
                id='sc-individual'
                value='Private seller'
                label='I am a private seller'
                className='form-check-light'
                defaultChecked
              />
            </Card>


            {/* Price */}
            <Card className='card-light card-body border-0 shadow-sm p-4 mb-4' id='price'>
              <h2 className='h4 text-light mb-4'>
                <i className='fi-cash text-primary fs-5 mt-n1 me-2'></i>
                Price
              </h2>
              <Form.Label htmlFor='sc-price' className='text-light'>
                Price
                <span className='ms-1 text-danger'>*</span>
              </Form.Label>
              <div className='d-sm-flex mb-2'>
                <Form.Select className='form-select-light w-25 me-2 mb-2'>
                  <option value='usd'>&#36;</option>
                  <option value='eur'>&#8364;</option>
                  <option value='gbp'>&#163;</option>
                  <option value='jpy'>&#165;</option>
                </Form.Select>
                <Form.Control type='number' className='form-control-light w-100 me-2 mb-2' id='sc-price' min='200' step='50' defaultValue='31900' required />
              </div>
              <Form.Check
                type='switch'
                id='negotiated-price'
                label='Negotiated price'
                className='form-switch-light'
              />
            </Card>


            {/* Vehicle information */}
            <Card className='card-light card-body border-0 shadow-sm p-4 mb-4' id='vehicle-info'>
              <h2 className='h4 text-light mb-4'>
                <i className='fi-car text-primary fs-5 mt-n1 me-2'></i>
                Vehicle information
              </h2>
              <Row className='gy-3 pb-4'>
                <Col xs={12} sm={6} as={Form.Group} controlId='sc-make'>
                  <Form.Label className='text-light'>
                    Make
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Select className='form-select-light' defaultValue='Mercedes-Benz' required>
                    <option value='' disabled>Select make</option>
                    <option value='Acura'>Acura</option>
                    <option value='BMW'>BMW</option>
                    <option value='Citroen'>Citroen</option>
                    <option value='Lexus'>Lexus</option>
                    <option value='Mercedes-Benz'>Mercedes-Benz</option>
                    <option value='Nissan'>Nissan</option>
                    <option value='Toyota'>Toyota</option>
                  </Form.Select>
                </Col>
                <Col xs={12} sm={6} as={Form.Group} controlId='sc-model'>
                  <Form.Label className='text-light'>
                    Model
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Select className='form-select-light' defaultValue='E 400' required>
                    <option value='' disabled>Select model</option>
                    <option value='A-Class'>A-Class</option>
                    <option value='B-Class'>B-Class</option>
                    <option value='C-Class'>C-Class</option>
                    <option value='E 220'>E 220</option>
                    <option value='E 400'>E 400</option>
                    <option value='GLS 550'>GLS 550</option>
                    <option value='GLE-Class'>GLE-Class</option>
                    <option value='ML 350'>ML 350</option>
                    <option value='Viano'>Viano</option>
                  </Form.Select>
                </Col>
                <Col xs={12} sm={6} md={3} as={Form.Group} controlId='sc-year'>
                  <Form.Label className='text-light'>
                    Year
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Select className='form-select-light' defaultValue='2018' required>
                    <option value='' disabled>Select year</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                  </Form.Select>
                </Col>
                <Col xs={12} sm={6} md={3} as={Form.Group} controlId='sc-mileage'>
                  <Form.Label className='text-light'>
                    Mileage
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Control className='form-control-light' min='200' step='100' defaultValue='25000' placeholder='Enter mileage' required />
                </Col>
                <Col xs={12} sm={6} as={Form.Group} controlId='sc-vin'>
                  <Form.Label className='text-light'>
                    VIN
                  </Form.Label>
                  <Form.Control className='form-control-light' defaultValue='2VW821AU9JM754284' placeholder='Enter VIN code' />
                </Col>
              </Row>
              <div className='border-top border-light mt-2 pt-4'>
                <Row className='pb-2'>
                  <Col xs={12} md={6}>
                    <Form.Group controlId='sc-body' className='mb-3'>
                      <Form.Label className='text-light'>
                        Body type
                        <span className='ms-1 text-danger'>*</span>
                      </Form.Label>
                      <Form.Select className='form-select-light' defaultValue='Convertible' required>
                        <option value='' disabled>Select body type</option>
                        <option value='Compact'>Compact</option>
                        <option value='Convertible'>Convertible</option>
                        <option value='Crossover'>Crossover</option>
                        <option value='Coupe'>Coupe</option>
                        <option value='Family MPV'>Family MPV</option>
                        <option value='Pickup'>Pickup</option>
                        <option value='Sedan'>Sedan</option>
                        <option value='SUV'>SUV</option>
                        <option value='Wagon'>Wagon</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId='sc-fuel' className='mb-3'>
                      <Form.Label className='text-light'>
                        Fuel type
                        <span className='ms-1 text-danger'>*</span>
                      </Form.Label>
                      <Form.Select className='form-select-light' defaultValue='Gasoline' required>
                        <option value='' disabled>Select fuel type</option>
                        <option value='Gasoline'>Gasoline</option>
                        <option value='Diesel'>Diesel</option>
                        <option value='Hybrid'>Hybrid</option>
                        <option value='Electric'>Electric</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId='sc-engine' className='mb-3'>
                      <Form.Label className='text-light'>
                        Engine
                        <span className='ms-1 text-danger'>*</span>
                      </Form.Label>
                      <Form.Select className='form-select-light' defaultValue='2.5L Turbo 6 Cylinder' required>
                        <option value='' disabled>Select engine</option>
                        <option value='1.5 Turbo 3 Cylinder Engine'>1.5 Turbo 3 Cylinder Engine</option>
                        <option value='2.4L 4 Cylinder Engine'>2.4L 4 Cylinder Engine</option>
                        <option value='3.5L 4 Cylinder Engine'>3.5L 4 Cylinder Engine</option>
                        <option value='2.5L Turbo 6 Cylinder'>2.5L Turbo 6 Cylinder</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId='sc-transmission' className='mb-3'>
                      <Form.Label className='text-light'>
                        Transmission
                        <span className='ms-1 text-danger'>*</span>
                      </Form.Label>
                      <Form.Select className='form-select-light' defaultValue='Automatic' required>
                        <option value='' disabled>Select transmission</option>
                        <option value='Manual'>Manual</option>
                        <option value='Automatic'>Automatic</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId='sc-drivetrain' className='mb-3'>
                      <Form.Label className='text-light'>
                        Drivetrain
                        <span className='ms-1 text-danger'>*</span>
                      </Form.Label>
                      <Form.Select className='form-select-light' defaultValue='Front Wheel Drive' required>
                        <option value='' disabled>Select drivetrain</option>
                        <option value='Front Wheel Drive'>Front Wheel Drive</option>
                        <option value='Rear Wheel Drive'>Rear Wheel Drive</option>
                        <option value='All Wheel Drive'>All Wheel Drive</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId='sc-color' className='mb-3'>
                      <Form.Label className='text-light'>
                        Color
                      </Form.Label>
                      <Form.Control className='form-control-light' placeholder='Enter color' defaultValue='Aspen White' />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <Form.Group controlId='sc-description' className='border-top border-light mt-2 pt-4'>
                <Form.Label className='text-light'>
                  Description
                </Form.Label>
                <Form.Control className='form-control-light' as='textarea' rows={5} placeholder='Describe your vehicle' />
                <span className='form-text text-light opacity-50'>3000 characters left</span>
              </Form.Group>
            </Card>


            {/* Vehicle information */}
            <Card className='card-light card-body border-0 shadow-sm p-4 mb-4' id='features'>
              <h2 className='h4 text-light mb-4'>
                <i className='fi-check-circle text-primary fs-5 mt-n1 me-2'></i>
                Features
              </h2>
              <div className='mb-4'>
                <Form.Label className='form-label d-block text-light fw-bold mb-2 pb-1'>
                  Exterior
                </Form.Label>
                <Row xs={1} sm={3}>
                  {exterior.map((checkbox, indx) => (
                    <Col key={indx}>
                      <Form.Check
                        type='checkbox'
                        id={`${checkbox.value.toLowerCase().replace(/\s/g, '-')}`}
                        value={checkbox.value}
                        label={checkbox.value}
                        defaultChecked={checkbox.checked}
                        className='form-check-light'
                      />
                    </Col>
                  ))}
                </Row>
              </div>
              <div className='mb-4'>
                <Form.Label className='form-label d-block text-light fw-bold mb-2 pb-1'>
                  Interior
                </Form.Label>
                <Row xs={1} sm={3}>
                  {interior[0].map((checkbox, indx) => (
                    <Col key={indx}>
                      <Form.Check
                        type='checkbox'
                        id={`${checkbox.value.toLowerCase().replace(/\s/g, '-')}`}
                        value={checkbox.value}
                        label={checkbox.value}
                        defaultChecked={checkbox.checked}
                        className='form-check-light'
                      />
                    </Col>
                  ))}
                </Row>
                {interior[1] && <>
                  <Collapse in={interiorOpen}>
                    <Row xs={1} sm={3} id='moreInterior'>
                      {interior[1].map((checkbox, indx) => (
                        <Col key={indx}>
                          <Form.Check
                            type='checkbox'
                            id={`${checkbox.value.toLowerCase().replace(/\s/g, '-')}`}
                            value={checkbox.value}
                            label={checkbox.value}
                            defaultChecked={checkbox.checked}
                            className='form-check-light'
                          />
                        </Col>
                      ))}
                    </Row>
                  </Collapse>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setInteriorOpen(!interiorOpen)
                    }}
                    aria-controls='moreInterior'
                    aria-expanded={interiorOpen}
                    className={`${interiorOpen ? '' : ' collapsed'} fs-sm`}
                  >
                    {interiorOpen ? 'Show less' : 'Show more'}
                  </a>
                </>}
              </div>
              <div className='mb-4'>
                <Form.Label className='form-label d-block text-light fw-bold mb-2 pb-1'>
                  Safety
                </Form.Label>
                <Row xs={1} sm={3}>
                  {safety[0].map((feature, indx) => (
                    <Col key={indx}>
                      <Form.Check
                        type='checkbox'
                        id={`${feature.value.toLowerCase().replace(/\s/g, '-')}`}
                        label={feature.value}
                        defaultChecked={feature.checked}
                        className='form-check-light'
                      />
                    </Col>
                  ))}
                </Row>
                {safety[1] && <>
                  <Collapse in={safetyOpen}>
                    <Row xs={1} sm={3} id='moreSafety'>
                      {safety[1].map((feature, indx) => (
                        <Col key={indx}>
                          <Form.Check
                            type='checkbox'
                            id={`${feature.value.toLowerCase().replace(/\s/g, '-')}`}
                            label={feature.value}
                            defaultChecked={feature.checked}
                            className='form-check-light'
                          />
                        </Col>
                      ))}
                    </Row>
                  </Collapse>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setSafetyOpen(!safetyOpen)
                    }}
                    aria-controls='moreSafety'
                    aria-expanded={safetyOpen}
                    className={`${safetyOpen ? '' : ' collapsed'} fs-sm`}
                  >
                    {safetyOpen ? 'Show less' : 'Show more'}
                  </a>
                </>}
              </div>
            </Card>


            {/* Photos / video */}
            <Card className='card-light card-body border-0 shadow-sm p-4 mb-4' id='photos'>
              <h2 className='h4 text-light mb-4'>
                <i className='fi-image text-primary fs-5 mt-n1 me-2'></i>
                Photos / video
              </h2>
              <Alert variant='warning' className='bg-faded-warning border-warning d-flex mb-4'>
                <i className='fi-alert-circle me-2 me-sm-3'></i>
                <p className='fs-sm mb-1'>
                  The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.<br/>The maximum video size is 10 MB. Formats: mp4, mov.
                </p>
              </Alert>
              <FilePond
                files={gallery}
                onupdatefiles={setGallery}
                name='gallery'
                labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div class="text-white opacity-70">or drag them in</div>'
                acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
                allowMultiple={true}
                maxFiles={4}
                maxFileSize='2MB'
                className='file-uploader file-uploader-grid border-light bg-faded-light'
              />
            </Card>


            {/* Location */}
            <Card className='card-light card-body border-0 shadow-sm p-4 mb-4' id='location'>
              <h2 className='h4 text-light mb-4'>
                <i className='fi-map-pin text-primary fs-5 mt-n1 me-2'></i>
                Location
              </h2>
              <Row className='gy-3 mb-3'>
                <Col xs={12} sm={6} as={Form.Group} controlId='sc-country'>
                  <Form.Label className='text-light'>
                    Country / region
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Select className='form-select-light' defaultValue='United States' required>
                    <option value='' disabled>Choose country</option>
                    <option value='Australia'>Australia</option>
                    <option value='Belgium'>Belgium</option>
                    <option value='Canada'>Canada</option>
                    <option value='Germany'>Germany</option>
                    <option value='United States'>United States</option>
                  </Form.Select>
                </Col>
                <Col xs={12} sm={6} as={Form.Group} controlId='sc-state'>
                  <Form.Label className='text-light'>
                    State
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Select className='form-select-light' defaultValue='Illinois' required>
                    <option value='' disabled>Choose state</option>
                    <option value='Alabama'>Alabama</option>
                    <option value='California'>California</option>
                    <option value='Florida'>Florida</option>
                    <option value='Georgia'>Georgia</option>
                    <option value='Illinois'>Illinois</option>
                    <option value='Indiana'>Indiana</option>
                    <option value='Kansas'>Kansas</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className='gy-3 mb-3'>
                <Col xs={12} sm={8} as={Form.Group} controlId='sc-city'>
                  <Form.Label className='text-light'>
                    City
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Select className='form-select-light' defaultValue='Chicago' required>
                    <option value='' disabled>Choose city</option>
                    <option value='Chicago'>Chicago</option>
                    <option value='Dallas'>Dallas</option>
                    <option value='Los Angeles'>Los Angeles</option>
                    <option value='New York'>New York</option>
                    <option value='San Diego'>San Diego</option>
                  </Form.Select>
                </Col>
                <Col xs={12} sm={4} as={Form.Group} controlId='sc-zip'>
                  <Form.Label className='text-light'>
                    Zip code
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Control className='form-control-light' placeholder='Enter Zip code' defaultValue='60603' required />
                </Col>
                <Col xs={12} as={Form.Group} controlId='sc-address'>
                  <Form.Label className='text-light'>
                    Street address
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Control className='form-control-light' placeholder='Enter address' defaultValue='1904 S Michigan Avenue' required />
                </Col>
              </Row>
              <Form.Label className='form-label d-block text-light fw-bold mb-2 pt-3 pb-1'>
                Display on the map
              </Form.Label>
              <MapContainer
                center={[41.75, -87.7]}
                zoom={9}
                scrollWheelZoom={false}
                className='rounded-3'
                style={{height: '250px'}}
              >
                <TileLayer
                  url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=5vRQzd34MMsINEyeKPIs'
                  tileSize={512}
                  zoomOffset={-1}
                  minZoom={1}
                  attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
                />
                <CustomMarker position={[41.75, -87.7]} icon='dot'>
                  <Popup>
                    <div className='p-3'>
                      <h6 className='fs-base'>Mercedes-Benz E 400</h6>
                      <p className='fs-xs text-muted pt-1 mt-n3 mb-0'>1904 S Michigan Avenue, Chicago, IL</p>
                    </div>
                  </Popup>
                </CustomMarker>
              </MapContainer>
            </Card>


            {/* Contacts */}
            <Card className='card-light card-body border-0 shadow-sm p-4 mb-4' id='contacts'>
              <h2 className='h4 text-light mb-4'>
                <i className='fi-phone text-primary fs-5 mt-n1 me-2'></i>
                Contacts
              </h2>
              <Row xs={1} sm={2} className='gy-3 mb-3'>
                <Col as={Form.Group} controlId='sc-fn'>
                  <Form.Label className='text-light'>
                    First name
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Control className='form-control-light' placeholder='Enter your first name' defaultValue='Devon' required />
                </Col>
                <Col as={Form.Group} controlId='sc-sn'>
                  <Form.Label className='text-light'>
                    Second name
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Control className='form-control-light' placeholder='Enter your second name' defaultValue='Lane' required />
                </Col>
                <Col as={Form.Group} controlId='sc-email'>
                  <Form.Label className='text-light'>
                    Email
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Control type='email' className='form-control-light' placeholder='Enter your email' defaultValue='devone_lane@email.com' required />
                </Col>
                <Col as={Form.Group} controlId='sc-phone'>
                  <Form.Label className='text-light'>
                    Phone number
                    <span className='ms-1 text-danger'>*</span>
                  </Form.Label>
                  <Form.Control type='tel' className='form-control-light' placeholder='Enter phone number' defaultValue='316-442-0597' required />
                </Col>
                <Col sm={12} as={Form.Group} controlId='sc-website'>
                  <Form.Label className='text-light'>
                    Website
                  </Form.Label>
                  <Form.Control type='url' className='form-control-light' placeholder='Enter company website' defaultValue='316-442-0597' />
                </Col>
              </Row>
              <Form.Label className='form-label d-block text-light mb-2 pt-3 pb-1'>
                Social accounts
              </Form.Label>
              <div className='d-flex align-items-center mb-3'>
                <Button size='xs' variant='icon btn-translucent-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                  <i className='fi-facebook'></i>
                </Button>
                <Form.Control className='form-control-light' placeholder='Your Facebook account' />
              </div>
              <div className='d-flex align-items-center mb-3'>
                <Button size='xs' variant='icon btn-translucent-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                  <i className='fi-linkedin'></i>
                </Button>
                <Form.Control className='form-control-light' placeholder='Your Linkedin account' />
              </div>
              <div className='d-flex align-items-center mb-3'>
                <Button size='xs' variant='icon btn-translucent-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                  <i className='fi-twitter'></i>
                </Button>
                <Form.Control className='form-control-light' placeholder='Your Twitter account' />
              </div>
              <Collapse in={socialsOpen}>
                <div id='moreSocials'>
                  <div className='d-flex align-items-center mb-3'>
                    <Button size='xs' variant='icon btn-translucent-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                      <i className='fi-instagram'></i>
                    </Button>
                    <Form.Control className='form-control-light' placeholder='Your Instagram account' />
                  </div>
                  <div className='d-flex align-items-center mb-3'>
                    <Button size='xs' variant='icon btn-translucent-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                      <i className='fi-pinterest'></i>
                    </Button>
                    <Form.Control className='form-control-light' placeholder='Your Pinterest account' />
                  </div>
                </div>
              </Collapse>
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault()
                  setSocialsOpen(!socialsOpen)
                }}
                aria-controls='moreSocials'
                aria-expanded={socialsOpen}
                className={`collapse-label nav-link-light d-inline-block fs-sm fw-bold text-decoration-none pt-2 mb-1 ${socialsOpen ? '' : ' collapsed'}`}
              >
                <i className='fi-arrow-down mt-n1 me-2'></i>
                {socialsOpen ? 'Show less' : 'Show more'}
              </a>
            </Card>


            {/* Footer (Action buttons) */}
            <div className='d-sm-flex justify-content-between pt-2'>
              <Button size='lg' variant='outline-light' className='d-block ps-3 mb-3 mb-sm-2' onClick={handlePreviewShow}>
                <i className='fi-eye-on me-2'></i>
                Preview
              </Button>
              <Button as={Link} href='/car-finder/promotion' size='lg' variant='primary' className='d-block mb-2'>
                Save and continue
              </Button>
            </div>
          </Col>


          {/* Sidebar */}
          <Col lg={{span: 3, offset: 1}} as='aside' className='d-none d-lg-block'>
            <div className='sticky-top pt-5'>
              <h6 className='text-light pt-5 mt-3 mb-2'>80% content filled</h6>
              <ProgressBar variant='success' className='progress-light mb-4' now={80} style={{height: '4px'}} />
              <ul className='list-unstyled'>
                {anchors.map((anchor, indx) => (
                  <li key={indx} className='d-flex align-items-center'>
                    <i className={`fi-check text-${anchor.completed ? 'primary' : 'muted'} me-2`}></i>
                    <ScrollLink to={anchor.to} smooth='easeInOutQuart' duration={600} offset={-95} className='nav-link-light fw-normal ps-1 p-0'>
                      {anchor.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </CarFinderPageLayout>
  )
}

export default SellCarPage
