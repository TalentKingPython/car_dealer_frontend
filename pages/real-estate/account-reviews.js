import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import RealEstateAccountLayout from '../../components/partials/RealEstateAccountLayout'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Pagination from 'react-bootstrap/Pagination'
import Review from '../../components/Review'
import StarRating from '../../components/StarRating'

const AccountReviewsPage = () => {

  // Reviews about you array
  const reviewsAboutYou = [
    {
      authorThumb: '/images/avatars/06.jpg',
      authorName: 'Kathryn Murphy',
      rating: 5,
      text: 'Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.',
      date: 'Jan 17, 2021',
      likes: 3,
      dislikes: 0
    },
    {
      authorThumb: '/images/avatars/13.png',
      authorName: 'Darrell Steward',
      rating: 4,
      text: 'Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim tellus sodales.',
      date: 'Dec 1, 2021',
      likes: 0,
      dislikes: 1
    },
    {
      authorThumb: '/images/avatars/05.jpg',
      authorName: 'Floyd Miles',
      rating: 5,
      text: 'Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.',
      date: 'Oct 28, 2021',
      likes: 2,
      dislikes: 1
    },
    {
      authorThumb: '/images/avatars/04.jpg',
      authorName: 'Ralph Edwards',
      rating: 4,
      text: 'Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor dignissim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.',
      date: 'Oct 15, 2021',
      likes: 0,
      dislikes: 0
    }
  ]

  // Reviews by you array
  const reviewsByYou = [
    {
      reviewFor: 'Ford Truck Lifted',
      rating: 2,
      text: 'Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.',
      date: 'Jan 13, 2021',
      likes: 2,
      dislikes: 1
    },
    {
      reviewFor: 'Mercedes Benz C300 Sport',
      rating: 4,
      text: 'Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim tellus sodales.',
      date: 'Dec 10, 2021',
      likes: 4,
      dislikes: 2
    },
    {
      reviewFor: 'BMW 640 XI Gran Turismo',
      rating: 5,
      text: 'Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.',
      date: 'Oct 24, 2021',
      likes: 2,
      dislikes: 0
    }
  ]

  return (
    <RealEstatePageLayout
      pageTitle='Account Reviews'
      activeNav='Account'
      userLoggedIn
    >
      <RealEstateAccountLayout accountPageTitle='Reviews'>
      <h1 className='h2'>Reviews</h1>
        <p className='pt-1 mb-4'>Reviews you&apos;ve received will be visible both here and on your public profile.</p>
        <Tab.Container defaultActiveKey='reviewsAboutYou' transition={Fade}>

          {/* Nav tabs */}
          <Nav variant='tabs' className='flex-column flex-sm-row align-items-stretch align-items-sm-start border-bottom mb-4'>
            <Nav.Item className='me-sm-3 mb-3'>
              <Nav.Link eventKey='reviewsAboutYou'>Reviews about you</Nav.Link>
            </Nav.Item>
            <Nav.Item className='mb-3'>
              <Nav.Link eventKey='reviewsByYou'>Reviews by you</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Tabs content (panes) */}
          <Tab.Content>

            {/* Reviews about you tab */}
            <Tab.Pane eventKey='reviewsAboutYou'>

              {/* Total + sorting */}
              <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3'>
                <h3 className='h4 mb-sm-0'>
                  <i className='fi-star-filled mt-n1 me-2 lead align-middle text-warning'></i>
                  4,9 (32 reviews)
                </h3>
                <Form.Group controlId='sortby1' className='d-flex align-items-center ms-sm-4'>
                  <Form.Label className='fs-sm text-body fw-normal text-nowrap mb-0 me-2 pe-1'>
                    <i className='fi-arrows-sort opacity-60 mt-n1 me-2'></i>
                    Sort by:
                  </Form.Label>
                  <Form.Select size='sm'>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                    <option value='Popular'>Popular</option>
                    <option value='Hight rating'>Hight rating</option>
                    <option value='Low rating'>Low rating</option>
                  </Form.Select>
                </Form.Group>
              </div>

              {/* Reviews list */}
              {reviewsAboutYou.map((review, indx) => (
                <Review
                  key={indx}
                  author={{
                    thumbSrc: review.authorThumb,
                    thumbSize: 48,
                    thumbShape: 'rounded-circle',
                    name: review.authorName
                  }}
                  rating={review.rating}
                  date={review.date}
                  likeCount={review.likes}
                  dislikeCount={review.dislikes}
                  className='border-bottom mb-4 pb-4'
                >{review.text}</Review>
              ))}

              {/* Pagination */}
              <nav className='py-2' aria-label='Reviews pagination'>
                <Pagination className='mb-0'>
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
            </Tab.Pane>


            {/* Reviews by you tab */}
            <Tab.Pane eventKey='reviewsByYou'>

              {/* Total + sorting */}
              <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3'>
                <h3 className='h4 mb-sm-0'>3 reviews</h3>
                <Form.Group controlId='sortby2' className='d-flex align-items-center ms-sm-4'>
                  <Form.Label className='fs-sm text-body fw-normal text-nowrap mb-0 me-2 pe-1'>
                    <i className='fi-arrows-sort opacity-60 mt-n1 me-2'></i>
                    Sort by:
                  </Form.Label>
                  <Form.Select size='sm'>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                    <option value='Popular'>Popular</option>
                    <option value='Hight rating'>Hight rating</option>
                    <option value='Low rating'>Low rating</option>
                  </Form.Select>
                </Form.Group>
              </div>

              {/* Reviews list */}
              {reviewsByYou.map((review, indx) => (
                <div key={indx} className={indx === reviewsByYou.length - 1 ? 'mb-2' : 'border-bottom mb-4 pb-4'}>
                  <div className='d-flex justify-content-between mb-3'>
                    <div className='pe-2'>
                      <h6 className='mb-1'>
                        <span className='fw-normal opacity-70 me-1'>For:</span>
                        {review.reviewFor}
                      </h6>
                      <StarRating rating={review.rating} />
                    </div>
                    <span className='fs-sm text-muted'>{review.date}</span>
                  </div>
                  <p>{review.text}</p>
                  <div className='d-flex align-items-center'>
                    <button type='button' className='btn-like pe-none'>
                      <i className='fi-like'></i>
                      <span>({review.likes})</span>
                    </button>
                    <div className='border-end me-1'>&nbsp;</div>
                    <button type='button' className='btn-dislike pe-none'>
                      <i className='fi-dislike'></i>
                      <span>({review.dislikes})</span>
                    </button>
                  </div>
                </div>
              ))}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </RealEstateAccountLayout>
    </RealEstatePageLayout>
  )
}

export default AccountReviewsPage
