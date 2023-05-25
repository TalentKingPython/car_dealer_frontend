import { useReducer, useState } from 'react'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import CityGuideSingleHeader from '../../components/partials/CityGuideSingleHeader'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Pager from 'react-bootstrap/Pagination'
import ImageLoader from '../../components/ImageLoader'
import VenueCard from '../../components/VenueCard'
import SocialButton from '../../components/SocialButton'
import StarRating from '../../components/StarRating'
import Review from '../../components/Review'
import LightGallery from 'lightgallery/react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-video.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SingleReviewsPage = () => {

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
      authorImg: '/images/avatars/13.png',
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

  // Recently viewes carousel items array
  const items = [
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/09.jpg',
      title: 'Repose Hotel',
      rating: [5.0, 48],
      price: '$$',
      location: '1.4 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/05.jpg',
      title: 'Leisure Inn',
      rating: [4.8, 24],
      price: '$$$',
      location: '0.5 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/11.jpg',
      title: 'Soothe & Stay',
      rating: [4.9, 43],
      price: '$$$',
      location: '1.8 km from center'
    },
    {
      href: '/city-guide/single',
      imgSrc: '/images/city-guide/catalog/04.jpg',
      title: 'Merry Berry Motel',
      rating: [4.5, 12],
      price: '$$',
      location: '0.4 km from center'
    }
  ]  

  return (
    <CityGuidePageLayout
      pageTitle='Single Place - Reviews'
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
            <Button type='submit' variant='primary d-block rounded-pill w-100 mb-4'>
              Submit a review
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      
      {/* Page header */}
      <CityGuideSingleHeader
        title='Berlin Business Hotel'
        activeNav='/city-guide/single-reviews'
      />
      <Container className='pb-5 mb-md-4'>
        <Row>

          {/* Reviews */}
          <Col md={7} className='mb-md-0 mb-4 pb-md-0 pb-3'>
            <h2 className='h4 mb-4'>Average rating</h2>
            <Row className='mb-md-5 mb-4'>

              {/* Rating breakdown */}
              <Col sm={8} className='order-sm-1 order-2'>
                <div className='d-flex align-items-center mb-2 fs-sm'>
                  <div className='text-nowrap'>
                    5<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
                  </div>
                  <ProgressBar variant='warning' now={80} className='w-100 mx-3' />
                  <span style={{minWidth: '48px'}}>80%</span>
                </div>
                <div className='d-flex align-items-center mb-2 fs-sm'>
                  <div className='text-nowrap'>
                    4<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
                  </div>
                  <ProgressBar variant='warning' now={10} className='w-100 mx-3' />
                  <span style={{minWidth: '48px'}}>10%</span>
                </div>
                <div className='d-flex align-items-center mb-2 fs-sm'>
                  <div className='text-nowrap'>
                    3<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
                  </div>
                  <ProgressBar variant='warning' now={0} className='w-100 mx-3' />
                  <span style={{minWidth: '48px'}}>0%</span>
                </div>
                <div className='d-flex align-items-center mb-2 fs-sm'>
                  <div className='text-nowrap'>
                    2<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
                  </div>
                  <ProgressBar variant='warning' now={0} className='w-100 mx-3' />
                  <span style={{minWidth: '48px'}}>0%</span>
                </div>
                <div className='d-flex align-items-center mb-2 fs-sm'>
                  <div className='text-nowrap'>
                    1<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
                  </div>
                  <ProgressBar variant='warning' now={10} className='w-100 mx-3' />
                  <span style={{minWidth: '48px'}}>10%</span>
                </div>
              </Col>

              {/* Total score */}
              <Col sm={4} className='order-sm-2 order-1 mb-sm-0 mb-3 text-center'>
                <h3 className='display-4 mb-2'>4,7</h3>
                <div><StarRating rating={4.7} /></div>
                <span className='fs-sm'>48 reviews</span>
              </Col>
            </Row>

            {/* Add review btn + Reviews sorting */}
            <div className='d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-4 pb-4 border-bottom'>
              <Button variant='outline-primary rounded-pill mb-sm-0 mb-3' onClick={handleModalShow}>
                <i className='fi-edit mt-n1 me-1 align-middle'></i>
                Add review
              </Button>
              <Form.Group controlId='sortby' className='d-flex align-items-center ms-sm-4'>
                <Form.Label className='d-inline-block text-body fs-base fw-normal text-nowrap mb-0 me-2 pe-1'>
                  <i className='fi-arrows-sort mt-n1 me-2 align-middle text-muted'></i>
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

            {/* Pagination + Add review button */}
            <div className='d-sm-flex align-items-center justify-content-between'>
              <nav aria-label='Reviews pagination'>
                <Pager className='mb-4 mb-sm-0'>
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
              <Button variant='outline-primary rounded-pill w-100 w-sm-auto ms-sm-4' onClick={handleModalShow}>
                <i className='fi-edit mt-n1 me-1 align-middle'></i>
                Add review
              </Button>
            </div>
          </Col>


          {/* Contacts + Map */}
          <Col md={5}>
            <Card className='mb-4 p-2 shadow-sm'>
              <Card.Body>

                {/* Place info */}
                <div className='d-flex align-items-start mb-3 pb-2 border-bottom'>
                  <ImageLoader
                    src='/images/city-guide/brands/hotel.svg'
                    width={60}
                    height={60}
                    alt='Thumbnail'
                  />
                  <div className='ps-2 ms-1'>
                    <h3 className='h5 mb-2'> Berlin Business Hotel</h3>
                    <ul className='list-unstyled d-flex flex-wrap fs-sm'>
                      <li className='me-2 mb-1 pe-1'>
                        <i className='fi-star-filled mt-n1 me-1 text-warning align-middle opacity-70'></i>
                        <b>4.9 </b>(38)
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

                {/* Place contacts */}
                <div className='mb-4 pb-4 border-bottom'>
                  <h4 className='h5 mb-2'>Contacts:</h4>
                  <Nav className='flex-column pt-1'>
                    <Nav.Item className='mb-2'>
                      <Nav.Link href='#' className='p-0 fw-normal d-flex align-items-start'>
                        <i className='fi-map-pin mt-1 me-2 align-middle opacity-70'></i>
                        Ollenhauer Str. 29, 10118, Berlin
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link href='tel:3025550107' className='d-inline-flex fw-normal align-items-start p-0 me-2'>
                        <i className='fi-phone mt-1 me-2 align-middle opacity-70'></i>
                        (302) 555-0107,
                      </Nav.Link>
                      <Nav.Link href='3025550208' className='d-inline-block fw-normal align-items-start p-0'>
                        (302) 555-0208
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='mb-2'>
                      <Nav.Link href='#' className='p-0 fw-normal d-flex align-items-start'>
                        <i className='fi-globe mt-1 me-2 align-middle opacity-60'></i>
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

                {/* Place pricing + Booking */}
                <div className='mb-4 pb-4 border-bottom'>
                  <h4 className='h5 mb-3'>
                    <span className='fs-4'>$50-100&nbsp;</span>
                    <span className='fs-base fw-normal text-body'>/night</span>
                  </h4>
                  <Button variant='primary btn-lg rounded-pill w-sm-auto w-100'>
                    Book now
                    <i className='fi-chevron-right fs-sm ms-2'></i>
                  </Button>
                </div>

                {/* Follow */}
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
            
            {/* Map */}
            <LightGallery
              selector='#map'
              licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
              zoomFromOrigin={false}
              elementClassNames='position-relative'
            >
              <ImageLoader
                src='/images/city-guide/single/map-sm.jpg'
                width={1052}
                height={520}
                alt='Map'
                className='rounded-3'
              />
              <div className='d-flex w-100 h-100 flex-column align-items-center justify-content-center position-absolute top-0 start-0'>
                <div className='d-flex mb-4 rounded-circle bg-white shadow'>
                  <ImageLoader
                    src='/images/city-guide/brands/hotel.svg'
                    width={40}
                    height={40}
                    alt='Place logo'
                  />
                </div>
                <Button
                  id='map'
                  href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.924340088787!2d13.428504251724927!3d52.58906113876177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85284201593ab%3A0x28af69e02ce0e2fc!2sBusinesshotel%20Berlin!5e0!3m2!1sru!2sua!4v1618908622013!5m2!1sru!2sua'
                  variant='primary rounded-pill stretched-link'
                  data-iframe={true}
                >
                  <i className='fi-route me-2'></i>
                  Get directions
                </Button>
              </div>
            </LightGallery>
          </Col>
        </Row>
      </Container>


      {/* Recently viewed (carousel) */}
      <Container as='section' className='pb-5 mb-lg-4'>
        <div className='d-flex align-items-center justify-content-between mb-4 pb-2'>
          <h2 className='h3 mb-0'>Recently viewed</h2>
          <Link href='/city-guide/catalog' className='btn btn-link fw-normal ms-sm-3 p-0'>
            View all<i className='fi-arrow-long-right ms-2'></i>
          </Link>
        </div>

        {/* Swiper slider */}
        <div className='position-relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prev',
              nextEl: '#next'
            }}
            pagination={{
              el: '#pagination',
              clickable: true
            }}
            loop
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              850: { slidesPerView: 3 }
            }}
            className='mb-xxl-3'
          >
            {items.map((item, indx) => (
              <SwiperSlide key={indx}>
                <VenueCard
                  href={item.href}
                  img={{
                    src: item.imgSrc,
                    width: 475,
                    height: 217,
                    alt: 'Image'
                  }}
                  title={item.title}
                  rating={{
                    value: item.rating[0],
                    count: item.rating[1]
                  }}
                  price={item.price}
                  location={item.location}
                  wishlistButton={{
                    tooltip: 'Add to Wishlist',
                    props: {
                      onClick: () => console.log('Venue added to your Wishlist!')
                    }
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prev' variant='prev' className='d-none d-xxl-block mt-n5 ms-n5' />
          <Button id='next' variant='next' className='d-none d-xxl-block mt-n5 me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='pagination' className='swiper-pagination position-relative bottom-0 d-xxl-none pt-2 mt-4 pb-4 pb-sm-3'></div>
      </Container>
    </CityGuidePageLayout>
  )
}

export default SingleReviewsPage
