import { useReducer, useState } from 'react'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import Pager from 'react-bootstrap/Pagination'
import VehicleCard from '../../components/VehicleCard'
import StarRating from '../../components/StarRating'
import Review from '../../components/Review'
import Avatar from '../../components/Avatar'
import ImageLoader from '../../components/ImageLoader'
import MarketButton from '../../components/MarketButton'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const VendorPage = () => {

  // List of cars array
  const cars = [
    {
      href: '/car-finder/single',
      img: ['/images/car-finder/catalog/14.jpg', '/images/car-finder/catalog/14.jpg'],
      title: 'Toyota GT86',
      year: '2015',
      price: '$16,000',
      location: 'Chicago',
      badges: [['info', 'Used']],
      footer: ['46K mi', 'Manual', 'Gasoline']
    },
    {
      href: '/car-finder/single',
      img: ['/images/car-finder/catalog/15.jpg', '/images/car-finder/catalog/15.jpg'],
      title: 'Volkswagen GTI S',
      year: '2019',
      price: '$29,000',
      location: 'San Francisco',
      badges: [['info', 'Used'], ['success', 'Certified']],
      footer: ['25K mi', 'Automatic', 'Hybrid']
    },
    {
      href: '/car-finder/single',
      img: ['/images/car-finder/catalog/16.jpg', '/images/car-finder/catalog/16.jpg'],
      title: 'Ford Explorer XLT',
      year: '2017',
      price: '$26,950',
      location: 'Kansas',
      badges: [['info', 'Used']],
      footer: ['34K mi', 'Manual', 'Diesel']
    }
  ]

  // Add review modal
  const [modalShow, setModalShow] = useState(false)
  const handleModalClose = () => setModalShow(false)
  const handleModalShow = () => setModalShow(true)

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

  // Reviews array
  const reviews = [
    {
      authorImg: '/images/avatars/06.jpg',
      authorName: 'Kristin Watson',
      rating: 5,
      date: 'Jan 17, 2021',
      text: 'Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.',
      likesNum: 3,
      dislikesNum: 0
    },
    {
      authorImg: '/images/avatars/14.png',
      authorName: 'Darrell Steward',
      rating: 2,
      date: 'Dec 1, 2021',
      text: 'Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim.',
      likesNum: 0,
      dislikesNum: 1
    },
    {
      authorImg: '/images/avatars/07.jpg',
      authorName: 'Cody Fisher',
      rating: 5,
      date: 'Oct 28, 2021',
      text: 'Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A duis aenean non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.',
      likesNum: 0,
      dislikesNum: 0
    },
    {
      authorImg: '/images/avatars/04.jpg',
      authorName: 'Ralph Edwards',
      rating: 4,
      date: 'Sep 14, 2021',
      text: 'Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor issim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.',
      likesNum: 0,
      dislikesNum: 0
    },
    {
      authorImg: '/images/avatars/14.png',
      authorName: 'Guy Hawkins',
      rating: 5,
      date: 'Sep 3, 2021',
      text: 'Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor issim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.',
      likesNum: 1,
      dislikesNum: 3
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
        light
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

  // Related items (cars) array
  const relatedCars = [
    {
      href: '#',
      img: '/images/car-finder/catalog/03.jpg',
      title: 'Mazda MX-5 Miata Convertible',
      year: '2020',
      price: '$29,700',
      location: 'Los Angeles',
      badges: [['danger', 'New']],
      footer: ['18K mi', 'Manual', 'Gasoline']
    },
    {
      href: '#',
      img: '/images/car-finder/catalog/05.jpg',
      title: 'BMW 640 XI Gran Turismo',
      year: '2018',
      price: '$43,500',
      location: 'San Francisco',
      badges: [['info', 'Used'], ['success', 'Certified']],
      footer: ['10K mi', 'Automatic', 'Gasoline']
    },
    {
      href: '#',
      img: '/images/car-finder/catalog/04.jpg',
      title: 'Nissan 370Z Nismo',
      year: '2019',
      price: '$37,900',
      location: 'New York',
      badges: [['info', 'Used']],
      footer: ['16K mi', 'Automatic', 'Gasoline']
    },
    {
      href: '#',
      img: '/images/car-finder/catalog/08.jpg',
      title: 'Ford Explorer XLT',
      year: '2017',
      price: '$26,950',
      location: 'Kansas',
      badges: [['info', 'Used']],
      footer: ['34K mi', 'Manual', 'Diesel']
    }
  ]

  return (
    <CarFinderPageLayout
      pageTitle='Vendor Page'
      activeNav='Vendor'
      userLoggedIn
    >

      {/* Add review modal */}
      <Modal
        centered
        show={modalShow}
        onHide={handleModalClose}
        contentClassName='bg-dark border-light'
      >
        <Modal.Header className='d-block position-relative border-0 pb-0 px-sm-5 px-4'>
          <Modal.Title as='h3' className='mt-4 text-center text-light'>Leave a review</Modal.Title>
          <CloseButton
            variant='white'
            onClick={handleModalClose}
            aria-label='Close modal'
            className='position-absolute top-0 end-0 mt-3 me-3'
          />
        </Modal.Header>
        <Modal.Body className='px-sm-5 px-4'>
          <Form noValidate validated={reviewValidated} onSubmit={handleReviewSubmit}>
            <Form.Group controlId='review-name' className='mb-3'>
              <Form.Label className='text-light'>
                Name <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control className='form-control-light' placeholder='Your name' required />
              <Form.Control.Feedback type='invalid'>
                Please let us know your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='review-email' className='mb-3'>
              <Form.Label className='text-light'>
                Email <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control className='form-control-light' type='email' placeholder='Your email address' required />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='review-rating' className='mb-3'>
              <Form.Label className='text-light'>
                Rating <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Select className='form-select-light' required>
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
              <Form.Label className='text-light'>
                Review <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control className='form-control-light' as='textarea' rows={5} placeholder='Your review message' required />
              <Form.Control.Feedback type='invalid'>
                Please write your review.
              </Form.Control.Feedback>
            </Form.Group>
            <Button size='lg' type='submit' variant='primary d-block w-100 mb-4'>
              Submit a review
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Container as='section' className='pt-5 pb-lg-4 my-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='breadcrumb-light mb-4 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/car-finder'>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Sellers</Breadcrumb.Item>
          <Breadcrumb.Item active>Devon Lane</Breadcrumb.Item>
        </Breadcrumb>
        <Row className='gy-5'>


          {/* Content */}
          <Col xs={12} lg={{span: 8, order: 'last'}}>
            <div className='d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2'>
              <h1 className='h3 text-light mb-sm-0 me-sm-3'>Available car offers</h1>
              <Form.Group controlId='cars-sort' className='d-flex align-items-center'>
                <Form.Label className='fs-sm text-light mb-0 me-2 pe-1 text-nowrap'>
                  <i className='fi-arrows-sort mt-n1 me-2'></i>
                  Sort by:
                </Form.Label>
                <Form.Select size='sm' className='form-select-light'>
                  <option value='newest'>Newest</option>
                  <option value='popular'>Popular</option>
                  <option value='priceLH'>Price: Low - High</option>
                  <option value='priceHL'>Price: High - Low</option>
                </Form.Select>
              </Form.Group>
            </div>

            {/* Items (Cars) */}
            {cars.map((car, indx) => (
              <VehicleCard
                key={indx}
                href={car.href}
                images={car.img.map((img, indx) => [img, 'Image'])}
                title={car.title}
                year={car.year}
                price={car.price}
                location={car.location}
                checkbox={{
                  label: 'Compare',
                  props: {
                    onChange: (e) => e.target.checked ? console.log('Car ADDED to comparison list!') : console.log('Car REMOVED from comparison list!')
                  }
                }}
                badges={car.badges}
                wishlistButton={{
                  tooltip: 'Add to Wishlist',
                  props: {
                    onClick: () => console.log('Vehicle added to your Wishlist!')
                  }
                }}
                footer={[
                  ['fi-dashboard', car.footer[0]],
                  ['fi-gearbox', car.footer[1]],
                  ['fi-petrol', car.footer[2]]
                ]}
                horizontal
                light
                className='mb-4'
              />
            ))}


            {/* Reviews */}
            <h2 className='h3 text-light pt-5 pb-2 mt-n3 mt-lg-n1 mb-4'>Seller reviews (53)</h2>
            <div className='d-flex align-items-center text-light mb-2 pb-1'>
              <StarRating rating={5} className='me-3' />
              <ProgressBar variant='warning' now={70} className='progress-light w-100' />
              <div className='flex-shrink-0 flex-grow-1 fs-sm text-end ps-2' style={{width: '3rem'}}>70%</div>
            </div>
            <div className='d-flex align-items-center text-light mb-2 pb-1'>
              <StarRating rating={4} className='me-3' />
              <ProgressBar variant='warning' now={15} className='progress-light w-100' />
              <div className='flex-shrink-0 flex-grow-1 fs-sm text-end ps-2' style={{width: '3rem'}}>15%</div>
            </div>
            <div className='d-flex align-items-center text-light mb-2 pb-1'>
              <StarRating rating={3} className='me-3' />
              <ProgressBar variant='warning' now={0} className='progress-light w-100' />
              <div className='flex-shrink-0 flex-grow-1 fs-sm text-end ps-2' style={{width: '3rem'}}>0%</div>
            </div>
            <div className='d-flex align-items-center text-light mb-2 pb-1'>
              <StarRating rating={2} className='me-3' />
              <ProgressBar variant='warning' now={10} className='progress-light w-100' />
              <div className='flex-shrink-0 flex-grow-1 fs-sm text-end ps-2' style={{width: '3rem'}}>10%</div>
            </div>
            <div className='d-flex align-items-center text-light mb-2 pb-1'>
              <StarRating rating={1} className='me-3' />
              <ProgressBar variant='warning' now={5} className='progress-light w-100' />
              <div className='flex-shrink-0 flex-grow-1 fs-sm text-end ps-2' style={{width: '3rem'}}>5%</div>
            </div>

            {/* Add review btn + Reviews sort */}
            <div className='d-flex flex-sm-row flex-column align-items-sm-center justify-content-between py-4 mt-3 mb-4 border-bottom border-light'>
              <Form.Group controlId='reviews-sort' className='d-flex align-items-center mb-sm-0 mb-3'>
                <Form.Label className='text-light mb-0 me-2 pe-1 text-nowrap'>
                  <i className='fi-arrows-sort mt-n1 me-2'></i>
                  Sort by:
                </Form.Label>
                <Form.Select className='form-select-light'>
                  <option value='Newest'>Newest</option>
                  <option value='Oldest'>Oldest</option>
                  <option value='Popular'>Popular</option>
                  <option value='High rating'>High rating</option>
                  <option value='Low rating'>Low rating</option>
                </Form.Select>
              </Form.Group>
              <Button variant='primary ms-sm-4' onClick={handleModalShow}>
                <i className='fi-edit mt-n1 me-1 align-middle'></i>
                Add review
              </Button>
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
                className='mb-4 pb-4 border-bottom border-light'
              />
            ))}

            {/* Pagination */}
            <nav className='pagination-light mt-2' aria-label='Reviews pagination'>
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
          </Col>

          {/* Sidebar */}
          <Col xs={12} lg={{span: 4, order: 'first'}} as='aside' className='pe-xl-4'>
            <div className='d-flex align-items-start mb-4'>
              <Avatar img={{ src: '/images/avatars/34.jpg', alt: 'Devon Lane' }} size={[72, 72]} />
              <div className='ps-2'>
                <h2 className='h4 text-light mb-1'>Devon Lane</h2>
                <p className='d-flex align-items-center text-light opacity-70'>
                  <i className='fi-map-pin me-1'></i>
                  <span>Chicago, IL 60603</span>
                </p>
                <div className='d-flex mt-n2 ms-n2'>
                  <Button size='xs' variant='translucent-light btn-icon rounded-circle' className='mt-2 ms-2'>
                    <i className='fi-whatsapp'></i>
                  </Button>
                  <Button size='xs' variant='translucent-light btn-icon rounded-circle' className='mt-2 ms-2'>
                    <i className='fi-messenger'></i>
                  </Button>
                  <Button size='xs' variant='translucent-light btn-icon rounded-circle' className='mt-2 ms-2'>
                    <i className='fi-viber'></i>
                  </Button>
                </div>
              </div>
            </div>
            <ul className='list-unstyled text-light py-2 mb-3'>
              <li><strong>Available car offers: </strong><span className='opacity-70'>3</span></li>
              <li><strong>Cars certified: </strong><span className='opacity-70'>1</span></li>
              <li><strong>Cars sold: </strong><span className='opacity-70'>2</span></li>
            </ul>
            <Button size='lg' variant='outline-light' className='px-4 mb-4'>
              <i className='fi-phone me-2'></i>
              (316) *** **** &mdash; reveal
            </Button>

            {/* Form message */}
            <Form
              noValidate
              validated={messageValidated}
              onSubmit={handleMessageSubmit}
              className='pt-2 pb-4 mb-3'
            >
              <Form.Group className='mb-3'>
                <Form.Control className='form-control-light' placeholder='Name*' required />
                <Form.Control.Feedback type='invalid'>
                  Please enter your name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control type='email' className='form-control-light' placeholder='Email*' required />
                <Form.Control.Feedback type='invalid'>
                  Provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control type='tel' className='form-control-light' placeholder='Phone' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control as='textarea' rows={4} className='form-control-light' placeholder='Message*' required />
                <Form.Control.Feedback type='invalid'>
                  Write your message.
                </Form.Control.Feedback>
              </Form.Group>
              <Button type='submit' size='lg' variant='primary'>
                <i className='fi-send me-2'></i>
                Send message
              </Button>
            </Form>

            {/* Promo */}
            <div className='card card-light card-body pb-0 overflow-hidden'>
              <h3 className='h4 text-light pt-1'>Get our top-rated app!</h3>
              <p className='text-light opacity-70 mb-4'>Don&apos;t stop your car search when you leave your computer with our Android and iOS app!</p>
              <div className='d-flex align-items-start pt-2'>
                <div className='d-flex w-100 me-1' style={{maxWidth: '185px'}}>
                  <ImageLoader src='/images/car-finder/home/mobile-app-sm.png' width={185} height={253} alt='Mobile App' light='true' />
                </div>
                <div className='flex-shrink-0 ps-3' style={{minWidth: '145px'}}>
                  <MarketButton href='#' market='apple' className='w-100 mb-3' />
                  <br/>
                  <MarketButton href='#' market='google' className='w-100' />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Related posts (Carousel) */}
        <h2 className='h3 text-light pt-5 pb-3 mt-md-4'>You may be interested in</h2>
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
          >
            {relatedCars.map((car, indx) => (
              <SwiperSlide key={indx} className='h-auto'>
                <VehicleCard
                  href={car.href}
                  images={[[car.img, 473, 242, 'Image']]}
                  title={car.title}
                  year={car.year}
                  price={car.price}
                  location={car.location}
                  checkbox={{
                    label: 'Compare',
                    props: {
                      onChange: (e) => e.target.checked ? console.log('Car ADDED to comparison list!') : console.log('Car REMOVED from comparison list!')
                    }
                  }}
                  badges={car.badges}
                  wishlistButton={{
                    tooltip: 'Add to Wishlist',
                    props: {
                      onClick: () => console.log('Vehicle added to your Wishlist!')
                    }
                  }}
                  footer={[
                    ['fi-dashboard', car.footer[0]],
                    ['fi-gearbox', car.footer[1]],
                    ['fi-petrol', car.footer[2]]
                  ]}
                  light
                  className='h-100'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prev' variant='prev btn-light' className='d-none d-xxl-block mt-n5 ms-n5' />
          <Button id='next' variant='next btn-light' className='d-none d-xxl-block mt-n5 me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='pagination' className='swiper-pagination swiper-pagination-light position-relative bottom-0 pt-2 mt-4 pb-4 pb-sm-3'></div>
      </Container>
    </CarFinderPageLayout>
  )
}

export default VendorPage