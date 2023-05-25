import { useState, useReducer } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import Pager from 'react-bootstrap/Pagination'
import ImageLoader from '../../components/ImageLoader'
import GalleryItem from '../../components/GalleryItem'
import StarRating from '../../components/StarRating'
import SocialButton from '../../components/SocialButton'
import Review from '../../components/Review'
import PropertyCard from '../../components/PropertyCard'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import DatePicker from 'react-datepicker'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-fullscreen.css'
import 'lightgallery/css/lg-video.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'react-datepicker/dist/react-datepicker.css'

const SinglePropertyPage = () => {

  // Reviews array
  const reviews = [
    {
      authorImg: '/images/avatars/03.jpg',
      authorName: 'Annette Black',
      rating: 5,
      date: 'Jan 17, 2021',
      text: 'Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.',
      likesNum: 3,
      dislikesNum: 0
    },
    {
      authorImg: '/images/avatars/13.png',
      authorName: 'Darrell Steward',
      rating: 4,
      date: 'Dec 1, 2021',
      text: 'Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim.',
      likesNum: 0,
      dislikesNum: 1
    },
    {
      authorImg: '/images/avatars/05.jpg',
      authorName: 'Floyd Miles',
      rating: 5,
      date: 'Oct 28, 2021',
      text: 'Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A duis aenean non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.',
      likesNum: 2,
      dislikesNum: 1
    },
    {
      authorImg: '/images/avatars/04.jpg',
      authorName: 'Ralph Edwards',
      rating: 4,
      date: 'Sep 14, 2021',
      text: 'Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor issim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.',
      likesNum: 0,
      dislikesNum: 0
    }
  ]

  // Review with actionable Like / Dislike buttons
  const ReviewActionable = ({ authorImg, authorName, rating, date, text, likesNum, dislikesNum, ...props }) => {
    const initialState = {
      likes: likesNum,
      dislikes: dislikesNum,
      active: null
    }
    
    const reducer = (state, action) => {
      const { likes, dislikes, active } = state
    
      switch (action.type) {
        case 'likeHandle':
          return {
            ...state,
            likes: state.likes + 1,
            dislikes: active === 'dislike' ? dislikes - 1 : dislikes,
            active: 'like'
          }
        case 'dislikeHandle':
          return {
            ...state,
            dislikes: state.dislikes + 1,
            likes: active === 'like' ? likes - 1 : likes,
            active: 'dislike'
          }
        default:
          return state
      }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const { likes, dislikes, active } = state

    return (
      <Review
        author={{
          thumbSrc: authorImg,
          thumbSize: 48,
          thumbShape: 'rounded-circle',
          name: authorName
        }}
        rating={rating}
        date={date}
        likeActive={active === 'like' ? true : false}
        dislikeActive={active === 'dislike' ? true : false}
        likeCount={likes}
        dislikeCount={dislikes}
        likeClick={() => active !== 'like' ? dispatch({ type: 'likeHandle' }) : null}
        dislikeClick={() => active !== 'dislike' ? dispatch({ type: 'dislikeHandle' }) : null}
        {...props}
      >
        {text}
      </Review>
    )
  }

  // Add review modal
  const [modalShow, setModalShow] = useState(false)
  const handleModalClose = () => setModalShow(false)
  const handleModalShow = () => setModalShow(true)

  // Contact form validation
  const [contactValidated, setContactValidated] = useState(false)
  const handleContactSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setContactValidated(true);
  }

  // Add review form validation
  const [reviewValidated, setReviewValidated] = useState(false)
  const handleReviewSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setReviewValidated(true);
  }

  // Contact form date picker state
  const [startDate, setStartDate] = useState(null)

  // Overview collapse state
  const [overviewOpen, setOverviewOpen] = useState(false)

  // Amenities collapse state
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)

  // Amenities array
  const amenities = [
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

  // Recently viewed properties array
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
  

  return (
    <RealEstatePageLayout
      pageTitle='Single Property v.1'
      activeNav='Catalog'
    >

      {/* Add review modal */}
      <Modal
        centered
        show={modalShow}
        onHide={handleModalClose}
      >
        <Modal.Header className='d-block position-relative border-0 pb-0 px-sm-5 px-4'>
          <Modal.Title as='h3' className='mt-4 text-center'>Leave a review</Modal.Title>
          <CloseButton
            onClick={handleModalClose}
            aria-label='Close modal'
            className='position-absolute top-0 end-0 mt-3 me-3'
          />
        </Modal.Header>
        <Modal.Body className='px-sm-5 px-4'>
          <Form noValidate validated={reviewValidated} onSubmit={handleReviewSubmit}>
            <Form.Group controlId='review-name' className='mb-3'>
              <Form.Label>
                Name <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control placeholder='Your name' required />
              <Form.Control.Feedback type='invalid'>
                Please let us know your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='review-email' className='mb-3'>
              <Form.Label>
                Email <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control type='email' placeholder='Your email address' required />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='review-rating' className='mb-3'>
              <Form.Label>
                Rating <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Select required>
                <option value=''>Choose rating</option>
                <option value='5'>5 stars</option>
                <option value='4'>4 stars</option>
                <option value='3'>3 stars</option>
                <option value='2'>2 stars</option>
                <option value='1'>1 star</option>
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                Please rate the property.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='review-text' className='mb-4'>
              <Form.Label>
                Review <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control as='textarea' rows={5} placeholder='Your review message' required />
              <Form.Control.Feedback type='invalid'>
                Please write your review.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type='submit' variant='primary d-block w-100 mb-4'>
              Submit a review
            </Button>
          </Form>
        </Modal.Body>
      </Modal>


      {/* Page header */}
      <Container as='section' className='pt-5 mt-5 pb-1'>

        {/* Breadcrumb */}
        <Breadcrumb className='mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/real-estate'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='/real-estate/catalog?category=rent'>Property for rent</Breadcrumb.Item>
          <Breadcrumb.Item active>Pine Apartments</Breadcrumb.Item>
        </Breadcrumb>

        <h1 className='h2 mb-2'>Pine Apartments</h1>
        <p className='mb-2 pb-1 fs-lg'>28 Jackson Ave Long Island City, NY 67234</p>

        <div className='d-flex justify-content-between align-items-center'>

          {/* Amenities */}
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

          {/* Wishlist + Sharing */}
          <div className='text-nowrap pb-3'>
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip>Add to Wishlist</Tooltip>}
            >
              <Button size='xs' variant='icon btn-light-primary shadow-sm rounded-circle'>
                <i className='fi-heart'></i>
              </Button>
            </OverlayTrigger>
            <Dropdown className='d-inline-block'>
              <OverlayTrigger
                placement='top'
                overlay={<Tooltip>Share</Tooltip>}
              >
                <Dropdown.Toggle variant='icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2'>
                  <i className='fi-share'></i>
                </Dropdown.Toggle>
              </OverlayTrigger>
              <Dropdown.Menu align='end' className='my-1'>
                <Dropdown.Item as='button'>
                  <i className='fi-facebook fs-base opacity-75 me-2'></i>
                  Facebook
                </Dropdown.Item>
                <Dropdown.Item as='button'>
                  <i className='fi-twitter fs-base opacity-75 me-2'></i>
                  Twitter
                </Dropdown.Item>
                <Dropdown.Item as='button'>
                  <i className='fi-instagram fs-base opacity-75 me-2'></i>
                  Instagram
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Container>


      {/* Gallery */}
      <Container as='section' className='overflow-auto mb-4 pb-3'>
        <LightGallery
          selector='.gallery-item'
          licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
          plugins={[lgThumbnail, lgZoom, lgFullScreen]}
          zoomFromOrigin={false}
          exThumbImage='data-external-thumb-image'
        >
          <Row className='g-2 g-md-3' style={{minWidth: '30rem'}}>
            <Col xs={8}>
              <GalleryItem
                href='/images/real-estate/single/01.jpg'
                thumb={['/images/real-estate/single/01.jpg', 920, 650]}
                data-external-thumb-image='/images/real-estate/single/01.jpg'
                imgAlt='Kids bedroom'
                className='rounded rounded-md-3'
              />
            </Col>
            <Col xs={4}>
              <GalleryItem
                href='/images/real-estate/single/02.jpg'
                thumb={['/images/real-estate/single/02.jpg', 450, 316]}
                data-external-thumb-image='/images/real-estate/single/02.jpg'
                imgAlt='Kids bedroom'
                className='rounded rounded-md-3 mb-2 mb-md-3'
              />
              <GalleryItem
                href='/images/real-estate/single/03.jpg'
                thumb={['/images/real-estate/single/03.jpg', 450, 316]}
                data-external-thumb-image='/images/real-estate/single/03.jpg'
                imgAlt='Working desk'
                className='rounded rounded-md-3'
              />
            </Col>
            <Col xs={12}>
              <Row className='g-2 g-md-3'>
                <Col>
                  <GalleryItem
                    href='/images/real-estate/single/04.jpg'
                    thumb={['/images/real-estate/single/th04.jpg', 262, 160]}
                    data-external-thumb-image='/images/real-estate/single/th04.jpg'
                    imgAlt='Working desk'
                    className='rounded-1 rounded-md-2'
                  />
                </Col>
                <Col>
                  <GalleryItem
                    href='/images/real-estate/single/05.jpg'
                    thumb={['/images/real-estate/single/th05.jpg', 262, 160]}
                    data-external-thumb-image='/images/real-estate/single/th05.jpg'
                    imgAlt='King size bed'
                    className='rounded-1 rounded-md-2'
                  />
                </Col>
                <Col>
                  <GalleryItem
                    href='/images/real-estate/single/06.jpg'
                    thumb={['/images/real-estate/single/th06.jpg', 262, 160]}
                    data-external-thumb-image='/images/real-estate/single/th06.jpg'
                    imgAlt='Towels'
                    className='rounded-1 rounded-md-2'
                  />
                </Col>
                <Col>
                  <GalleryItem
                    href='/images/real-estate/single/07.jpg'
                    thumb={['/images/real-estate/single/th07.jpg', 262, 160]}
                    data-external-thumb-image='/images/real-estate/single/th07.jpg'
                    imgAlt='Bathroom'
                    className='rounded-1 rounded-md-2'
                  />
                </Col>
                <Col>
                  <GalleryItem
                    href='/images/real-estate/single/08.jpg'
                    thumb={['/images/real-estate/single/th08.jpg', 262, 160]}
                    data-external-thumb-image='/images/real-estate/single/th08.jpg'
                    imgAlt='Bathroom'
                    caption={<>+5 <span className='d-none d-md-inline'>photos</span></>}
                    className='more-item rounded-1 rounded-md-2'
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </LightGallery>
      </Container>


      {/* Post content */}
      <Container as='section' className='mb-5 pb-1'>
        <Row>
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
            <div className='mb-4 pb-md-3'>
              <h3 className='h4'>Amenities</h3>
              <Row as='ul' xs={1} md={2} lg={3} className='list-unstyled gy-1 mb-1 text-nowrap'>
                {amenities[0].map(({icon, title}, indx) => (
                  <Col key={indx} as='li'>
                    <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                    {title}
                  </Col>
                ))}
              </Row>
              <Collapse in={amenitiesOpen}>
                <div id='moreAmenities'>
                  <Row as='ul' xs={1} md={2} lg={3} className='list-unstyled gy-1 mb-1 text-nowrap'>
                    {amenities[1].map(({icon, title}, indx) => (
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

            {/* Post meta */}
            <div className='mb-lg-5 mb-md-4 pb-lg-2 py-4 border-top'>
              <ul className='d-flex mb-4 list-unstyled fs-sm'>
                <li className='me-3 pe-3 border-end'>Published: <b>Dec 9, 2021</b></li>
                <li className='me-3 pe-3 border-end'>Ad number: <b>681013232</b></li>
                <li className='me-3 pe-3'>Views: <b>48</b></li>
              </ul>
            </div>


            {/* Reviews */}
            <div className='mb-4 pb-4 border-bottom'>
              <h3 className='h4 pb-3'>
                <i className='fi-star-filled mt-n1 me-2 lead align-middle text-warning'></i>
                4,9 (32 reviews)
              </h3>

              {/* Add review btn + Reviews sort */}
              <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between'>
                <Button variant='outline-primary mb-sm-0 mb-3' onClick={handleModalShow}>
                  <i className='fi-edit mt-n1 me-1 align-middle'></i>
                  Add review
                </Button>
                <Form.Group controlId='sortby' className='d-flex align-items-center ms-sm-4'>
                  <Form.Label className='d-inline-block text-muted fs-base fw-normal text-nowrap me-2 pe-1'>
                    <i className='fi-arrows-sort me-1 align-middle opacity-80'></i>
                    Sort by:
                  </Form.Label>
                  <Form.Select style={{minWidth: '180px'}}>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                    <option value='Popular'>Popular</option>
                    <option value='High rating'>High rating</option>
                    <option value='Low rating'>Low rating</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
            
            {/* Reviews list */}
            {reviews.map((review, indx) => (
              <ReviewActionable
                key={indx}
                authorImg={review.authorImg}
                authorName={review.authorName}
                rating={review.rating}
                date={review.date}
                text={review.text}
                likesNum={review.likesNum}
                dislikesNum={review.dislikesNum}
                className='mb-4 pb-4 border-bottom'
              />
            ))}

            {/* Reviews pagination */}
            <nav aria-label='Reviews pagination'>
              <Pager className='mt-2 mb-4'>
                <Pager.Item active>{1}</Pager.Item>
                <Pager.Item>{2}</Pager.Item>
                <Pager.Item>{3}</Pager.Item>
                <Pager.Ellipsis />
                <Pager.Item>{8}</Pager.Item>
                <Pager.Item>
                  <i className='fi-chevron-right'></i>
                </Pager.Item>
              </Pager>
            </nav>
          </Col>


          {/* Sidebar */}
          <Col as='aside' md={5} lg={4} className='ms-lg-auto pb-1'>

            {/* Seller's card */}
            <Card className='shadow-sm mb-4'>
              <Card.Body>
                <div className='d-flex align-items-start justify-content-between'>
                  <Link href='/real-estate/vendor-properties' className='text-decoration-none'>
                    <div className='d-flex mb-2' style={{width: 60}}>
                      <ImageLoader
                        src='/images/avatars/22.jpg'
                        width={120}
                        height={120}
                        alt='Avatar'
                        className='rounded-circle'
                      />
                    </div>
                    <h5 className='mb-1'>Floyd Miles</h5>
                    <div className='mb-1'>
                      <StarRating rating={4.8} />
                      <span className='ms-1 fs-sm text-muted'>(45 reviews)</span>
                    </div>
                    <p className='text-body'>Imperial Property Group Agent</p>
                  </Link>
                  <div className='ms-4 flex-shrink-0'>
                    <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='ms-2 mb-2' />
                    <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle className='ms-2 mb-2' />
                  </div>
                </div>
                <ul className='list-unstyled border-bottom mb-4 pb-4'>
                  <li>
                    <a href='tel:3025550107' className='nav-link fw-normal p-0'>
                      <i className='fi-phone mt-n1 me-2 align-middle opacity-60'></i>
                      (302) 555-0107
                    </a>
                  </li>
                  <li>
                    <a href='mailto:floyd_miles@email.com' className='nav-link fw-normal p-0'>
                      <i className='fi-mail mt-n1 me-2 align-middle opacity-60'></i>
                      floyd_miles@email.com
                    </a>
                  </li>
                </ul>

                {/* Contact form */}
                <Form
                  noValidate
                  validated={contactValidated}
                  onSubmit={handleContactSubmit}
                >
                  <Form.Group className='mb-3'>
                    <Form.Control placeholder='Your name*' required/>
                    <Form.Control.Feedback type='invalid'>
                      Please enter your name!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control type='email' placeholder='Email*' required/>
                    <Form.Control.Feedback type='invalid'>
                      Please provide a valid email address!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control type='tel' placeholder='Phone'/>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <InputGroup className='flex-nowrap'>
                      <Form.Control
                        as={DatePicker}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText='Choose date*'
                        className='rounded-end-0'
                        required
                      />
                      <InputGroup.Text>
                        <i className='fi-calendar'></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control as='textarea' rows={3} placeholder='Message' style={{resize: 'none'}}/>
                  </Form.Group>
                  <Form.Check
                    type='checkbox'
                    id='subscribe'
                    value='Subscribe me'
                    label={<><span className='fs-sm'>Send news, tips and promos from Finder to my email.</span></>}
                    className='mb-4'
                  />
                  <Button type='submit' size='lg' className='w-100'>Send request</Button>
                </Form>
              </Card.Body>
            </Card>
            
            {/* Map */}
            <LightGallery
              selector='#map'
              licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
              zoomFromOrigin={false}
              elementClassNames='position-relative d-flex flex-column pt-2 mb-2'
            >
              <ImageLoader
                src='/images/real-estate/single/map.jpg'
                width={832}
                height={400}
                alt='Map'
                className='rounded-3'
              />
              <div className='d-flex w-100 h-100 align-items-center justify-content-center position-absolute top-0 start-0'>
                <Button
                  id='map'
                  href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6145424811048!2d-73.93999278406218!3d40.74850644331743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592979d4827f%3A0x3a5d8b3cf779f3b6!2s28%20Jackson%20Ave%2C%20Long%20Island%20City%2C%20NY%2011101%2C%20USA!5e0!3m2!1sen!2sua!4v1618074552281!5m2!1sen!2sua'
                  variant='primary stretched-link'
                  data-iframe={true}
                >
                  <i className='fi-route me-2'></i>
                  Get directions
                </Button>
              </div>
            </LightGallery>
            <p className='mb-0 fs-sm text-center'>28 Jackson Ave Long Island City, NY 67234</p>
          </Col>
        </Row>
      </Container>


      {/* Recently viewed properties (carousel) */}
      <Container as='section' className='mb-5 pb-2 pb-lg-4'>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h2 className='h3 mb-0'>Recently viewed</h2>
          <Button as={Link} href='/real-estate/catalog?category=rent' variant='link fw-normal p-0'>
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
    </RealEstatePageLayout>
  )
}

export default SinglePropertyPage
