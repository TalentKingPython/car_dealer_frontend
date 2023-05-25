import { useReducer, useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Collapse from 'react-bootstrap/Collapse'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Pagination from 'react-bootstrap/Pagination'
import Avatar from '../../components/Avatar'
import StarRating from '../../components/StarRating'
import SocialButton from '../../components/SocialButton'
import Review from '../../components/Review'

const VendorReviewsPage = () => {

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

  // Review modal state
  const [reviewModalShow, setReviewModalShow] = useState(false)
  const handleReviewModalClose = () => setReviewModalShow(false)
  const handleReviewModalShow = () => setReviewModalShow(true)

  // Review form validation
  const [reviewValidated, setReviewValidated] = useState(false)
  const handleReviewSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setReviewValidated(true);
  }

  // About (Agent's info sidebar) collapse state
  const [aboutOpen, setAboutOpen] = useState(false)

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
      authorImg: '/images/avatars/13.png',
      authorName: 'Darrell Steward',
      rating: 3,
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
    },
    {
      authorImg: '/images/avatars/13.png',
      authorName: 'Guy Hawkins',
      rating: 5,
      date: 'Sep 9, 2021',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis morbi venenatis ut est.',
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


      {/* Add review modal */}
      <Modal
        centered
        show={reviewModalShow}
        onHide={handleReviewModalClose}
      >
        <Modal.Header className='d-block position-relative border-0 pb-0 px-sm-5 px-4'>
          <Modal.Title as='h3' className='mt-4 text-center'>Leave a review</Modal.Title>
          <CloseButton
            onClick={handleReviewModalClose}
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
                <span className='text-muted ms-2'>(45 reviews)</span>
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

            {/* Title */}
            <div className='d-flex align-items-center justify-content-between mb-4 pb-2'>
              <h1 className='h2 text-center text-sm-start mb-0'>Reviews (45)</h1>
              <Button as={Link} href='/real-estate/vendor-properties' size='sm' variant='link px-0'>
                <i className='fi-arrow-left fs-xs mt-0 me-2'></i>
                Back to Offers
              </Button>
            </div>

            {/* Rating breakdown */}
            <div className='d-flex align-items-center mb-2 fs-sm'>
              <div className='text-nowrap'>
                5<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
              </div>
              <ProgressBar variant='warning' now={70} className='w-100 ms-3' />
              <span className='text-end ps-2' style={{minWidth: '48px'}}>70%</span>
            </div>
            <div className='d-flex align-items-center mb-2 fs-sm'>
              <div className='text-nowrap'>
                4<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
              </div>
              <ProgressBar variant='warning' now={15} className='w-100 ms-3' />
              <span className='text-end ps-2' style={{minWidth: '48px'}}>15%</span>
            </div>
            <div className='d-flex align-items-center mb-2 fs-sm'>
              <div className='text-nowrap'>
                3<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
              </div>
              <ProgressBar variant='warning' now={0} className='w-100 ms-3' />
              <span className='text-end ps-2' style={{minWidth: '48px'}}>0%</span>
            </div>
            <div className='d-flex align-items-center mb-2 fs-sm'>
              <div className='text-nowrap'>
                2<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
              </div>
              <ProgressBar variant='warning' now={10} className='w-100 ms-3' />
              <span className='text-end ps-2' style={{minWidth: '48px'}}>10%</span>
            </div>
            <div className='d-flex align-items-center mb-2 fs-sm'>
              <div className='text-nowrap'>
                1<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
              </div>
              <ProgressBar variant='warning' now={5} className='w-100 ms-3' />
              <span className='text-end ps-2' style={{minWidth: '48px'}}>5%</span>
            </div>
            
            {/* Sorting + Add review button */}
            <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between border-bottom py-4 mt-3 mb-4'>
              <Form.Group controlId='sortby' className='d-flex align-items-center me-sm-4 mb-sm-0 mb-3'>
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
              <Button variant='outline-primary' onClick={handleReviewModalShow}>
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
                className='mb-4 pb-4 border-bottom'
              />
            ))}

            <nav aria-label='Reviews pagination'>
              <Pagination className='mt-2'>
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
    </RealEstatePageLayout>
  )
}

export default VendorReviewsPage
