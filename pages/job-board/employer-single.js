import { useReducer, useState } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import Pager from 'react-bootstrap/Pagination'
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import JobCard from '../../components/JobCard'
import Review from '../../components/Review'
import ImageLoader from '../../components/ImageLoader'
import SocialButton from '../../components/SocialButton'
import FormGroup from '../../components/FormGroup'

const EmployerSinglePage = () => {

  // Jobs array
  const jobs = [
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/zalo.png',
        name: 'Zalo Tech Company'
      },
      title: 'Business Analyst',
      location: 'Chicago',
      salary: '$7,500',
      badges: []
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/zalo.png',
        name: 'Zalo Tech Company'
      },
      title: 'Partnership Manager',
      location: 'New York',
      salary: '$10,000',
      badges: [
        ['accent', 'Featured']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/zalo.png',
        name: 'Zalo Tech Company'
      },
      title: 'Senior Credit Analyst',
      location: 'New Jersey',
      salary: '$8,000',
      badges: [
        ['danger', 'Hot']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/zalo.png',
        name: 'Zalo Tech Company'
      },
      title: 'Account Manager',
      location: 'New York',
      salary: '$5,000',
      badges: []
    }
  ]

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
      authorImg: '/images/avatars/13.png',
      authorName: 'Guy Hawkins',
      rating: 5,
      date: 'Sep 3, 2021',
      text: 'Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor issim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.',
      likesNum: 1,
      dislikesNum: 3
    }
  ]

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

  // More info collapse
  const [infoOpen, setInfoOpen] = useState(false)

  return (
    <JobBoardPageLayout
      pageTitle='Employer / Company Page'
      activeNav='Account'
      userLoggedIn
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
            <Button size='lg' type='submit' variant='primary d-block rounded-pill w-100 mb-4'>
              Submit a review
            </Button>
          </Form>
        </Modal.Body>
      </Modal>


      {/* Page content */}
      <section className='py-5'>
        <Container className='pt-5 pb-lg-5'>

          {/* Breadcrumbs */}
          <Breadcrumb className='mb-4 pt-md-3'>
            <Breadcrumb.Item linkAs={Link} href='/job-board'>Home</Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} href='#'>Companies</Breadcrumb.Item>
            <Breadcrumb.Item active>Zalo Tech Company</Breadcrumb.Item>
          </Breadcrumb>

          <Row className='gy-5'>
            <Col xs={12} lg={{span: 8, order: 'last'}}>

              {/* Job list */}
              <div className='d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2'>
                <h1 className='h3 mb-sm-0 me-sm-3'>Job openings</h1>
                <Form.Group controlId='es-vacancy-sort' className='d-flex align-items-center'>
                  <Form.Label className='fs-sm mb-sm-0 me-2 pe-1 text-muted text-nowrap'>
                    <i className='fi-arrows-sort mt-n1 me-2'></i>
                    Sort by:
                  </Form.Label>
                  <Form.Select size='sm'>
                    <option>Newest</option>
                    <option>Popular</option>
                    <option>Highest Salary</option>
                  </Form.Select>
                </Form.Group>
              </div>

              {/* Company jobs list */}
              {jobs.map((job, indx) => (
                <JobCard
                  key={indx}
                  href={job.href}
                  company={{
                    name: job.company.name,
                    logo: {
                      src: job.company.logo,
                      size: [24, 24]
                    }
                  }}
                  title={job.title}
                  location={job.location}
                  salary={job.salary}
                  badges={job.badges}
                  dropdown={[
                    {
                      icon: 'fi-heart',
                      label: 'Add to wishlist',
                      props: {
                        onClick: () => console.log('Added to Wishlist!')
                      }
                    },
                    {
                      icon: 'fi-x-circle',
                      label: 'Not interested',
                      props: {
                        onClick: () => console.log('You will no longer see this job!')
                      }
                    }
                  ]}
                  className='mt-2'
                />
              ))}


              {/* Rating breakdown */}
              <h2 className='h3 pt-4 pt-lg-5 my-4 pb-2'>Company reviews (62)</h2>
              <div className='d-flex align-items-center mb-2 fs-sm'>
                <div className='text-nowrap'>
                  5<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
                </div>
                <ProgressBar variant='warning' now={70} className='w-100 mx-3' />
                <span className='text-end' style={{minWidth: '32px'}}>70%</span>
              </div>
              <div className='d-flex align-items-center mb-2 fs-sm'>
                <div className='text-nowrap'>
                  4<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
                </div>
                <ProgressBar variant='warning' now={15} className='w-100 mx-3' />
                <span className='text-end' style={{minWidth: '32px'}}>15%</span>
              </div>
              <div className='d-flex align-items-center mb-2 fs-sm'>
                <div className='text-nowrap'>
                  3<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
                </div>
                <ProgressBar variant='warning' now={0} className='w-100 mx-3' />
                <span className='text-end' style={{minWidth: '32px'}}>0%</span>
              </div>
              <div className='d-flex align-items-center mb-2 fs-sm'>
                <div className='text-nowrap'>
                  2<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
                </div>
                <ProgressBar variant='warning' now={10} className='w-100 mx-3' />
                <span className='text-end' style={{minWidth: '32px'}}>10%</span>
              </div>
              <div className='d-flex align-items-center mb-2 fs-sm'>
                <div className='text-nowrap'>
                  1<i className='fi-star mt-n1 ms-1 align-middle opacity-70'></i>
                </div>
                <ProgressBar variant='warning' now={5} className='w-100 mx-3' />
                <span className='text-end' style={{minWidth: '32px'}}>5%</span>
              </div>

              {/* Add review btn + Reviews sort */}
              <div className='d-flex flex-sm-row flex-column align-items-sm-center justify-content-between py-4 mt-3 mb-4 border-bottom'>
                <Form.Group controlId='es-reviews-sort' className='d-flex align-items-center mb-sm-0 mb-3'>
                  <Form.Label className='d-inline-block text-muted fs-base fw-normal text-nowrap mb-sm-0 me-2 pe-1'>
                    <i className='fi-arrows-sort me-1 align-middle opacity-80'></i>
                    Sort by:
                  </Form.Label>
                  <Form.Select>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                    <option value='Popular'>Popular</option>
                    <option value='High rating'>High rating</option>
                    <option value='Low rating'>Low rating</option>
                  </Form.Select>
                </Form.Group>
                <Button variant='outline-primary rounded-pill ms-sm-4' onClick={handleModalShow}>
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

              {/* Pagination */}
              <nav className='mt-2' aria-label='Reviews pagination'>
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
                <div className='flex-shrink-0' style={{width: 56}}>
                  <ImageLoader src='/images/job-board/company/zalo-lg.png' width={112} height={112} alt='Zalo logo' />
                </div>
                <div className='ps-3'>
                  <h2 className='h4 mb-1'>Zalo Tech Company</h2>
                  <p className='d-flex align-items-center fs-sm mb-2'>
                    <i className='fi-map-pin me-1'></i>
                    <span>Chicago, New York, New Jersey</span>
                  </p>
                  <p className='fs-sm'>
                    <a href='#'>
                      <i className='fi-external-link me-2'></i>
                      Visit wesite
                    </a>
                  </p>
                  <div className='d-flex'>
                    <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='me-2' />
                    <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='me-2' />
                    <SocialButton href='#' variant='solid' brand='youtube' roundedCircle className='me-2' />
                    <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle />
                  </div>
                </div>
              </div>
              <ul className='list-unstyled py-2'>
                <li><b>Category: </b>Information Technology</li>
                <li><b>Company size: </b>more than 5000 employees</li>
                <li><b>Job openings: </b>4</li>
              </ul>
              <div className='pb-4 mb-2 mb-sm-3'>
                <p className='mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
                <Collapse in={infoOpen}>
                  <div id='more-info'>
                    <p className='mb-1'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae inventore veritatis. Nemo enim ipsam voluptatem quia voluptas.</p>
                  </div>
                </Collapse>
                <a href='#'
                  onClick={(e) => {
                    e.preventDefault()
                    setInfoOpen(!infoOpen)
                  }}
                  aria-controls='more-info'
                  aria-expanded={infoOpen}
                  className={`collapse-label${infoOpen ? '' : ' collapsed'}`}
                >
                  {infoOpen ? 'Show less' : 'Show more'}
                </a>
              </div>
              <Card className='shadow-sm mb-4'>
                <Card.Body>
                  <Card.Title className='mb-3 fs-4'>Don&apos;t miss new job openings by this company!</Card.Title>
                  <Card.Text className='mb-4'>We will send you jobs as soon as they are posted in any category, in any city.</Card.Text>
                  <FormGroup className='rounded-pill'>
                    <InputGroup size='sm'>
                      <InputGroup.Text className='text-muted'>
                        <i className='fi-mail'></i>
                      </InputGroup.Text>
                      <Form.Control placeholder='Your email' />
                    </InputGroup>
                    <Button variant='primary rounded-pill' size='sm'>Subscribe</Button>
                  </FormGroup>
                  <Form.Check
                    type='checkbox'
                    id='es-agree'
                    label='I agree to receive communications.'
                    className='mt-3 fs-sm'
                  />
                </Card.Body>
              </Card>
              <div className='pt-sm-3'>
                <Card className='bg-secondary border-0'>
                  <Card.Body>
                    <Card.Title className='mb-3 fs-4'>Professional CV is your ticket to dream job</Card.Title>
                    <Card.Text className='mb-4'>Create a great resume on Finder and take a step toward finding your dream job!</Card.Text>
                    <Button as={Link} href='/job-board/post-resume-1' variant='primary rounded-pill' className='mb-4'>
                      Post resume
                      <i className='fi-chevron-right ms-2 fs-sm'></i>
                    </Button>
                    <div className='pt-3 text-center'>
                      <div className='d-inline-block'>
                        <ImageLoader src='/images/job-board/illustrations/post-resume-cta.svg' width={288} height={250} alt='Illustration' />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </JobBoardPageLayout>
  )
}

export default EmployerSinglePage
