import { useEffect, useState } from 'react'
import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import CityGuideAccountHeader from '../../components/partials/CityGuideAccountHeader'
import CityGuideAccountNav from '../../components/partials/CityGuideAccountNav'
import StarRating from '../../components/StarRating'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'

const AccountReviewsPage = () => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
  })


  const initialReviews = [
    {
      href: '/city-guide/single',
      title: 'Simon Rock Concert',
      rating: 2.2,
      date: 'Dec 17, 2021',
      text: 'Quam in vel diam phasellus eleifend. Tincidunt libero arcu sapien vestibulum volutpat. Ipsum tellus fames amet odio orci urna, nec sed. Aenean viverra est faucibus mauris cras dapibus enim, ullamcorper purus. Morbi odio tempor orci accumsan condimentum pretium in vitae.',
      likes: 3,
      dislikes: 0
    },
    {
      href: '/city-guide/single',
      title: 'Dunkin\' Donuts',
      rating: 4.1,
      date: 'Dec 1, 2021',
      text: 'Tempus cras felis dui volutpat neque, viverra facilisi. Scelerisque non aliquam morbi eleifend aliquet elementum et urna. Proin facilisis ut semper adipiscing gravida urna, integer.',
      likes: 0,
      dislikes: 1
    },
    {
      href: '/city-guide/single',
      title: 'Grand Resort & Spa',
      rating: 4.8,
      date: 'Oct 28, 2021',
      text: 'Blandit cras integer placerat sem quisque. Venenatis dictumst mi mattis phasellus in sollicitudin. Nisl, et rhoncus pellentesque volutpat.',
      likes: 2,
      dislikes: 1
    },
    {
      href: '/city-guide/single',
      title: 'Pina Pizza Restaurant',
      rating: 4.7,
      date: 'Oct 22, 2021',
      text: 'Nec augue ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget quisque egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae etiam scelerisque. Quam in vel diam phasellus eleifend.',
      likes: 3,
      dislikes: 0,
      lastChild: true
    }
  ]

  const [reviews, setReviews] = useState(initialReviews)


  return (
    <CityGuidePageLayout
      pageTitle='Account - Reviews'
      activeNav='Account'
      userLoggedIn
    >
      
      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Page header */}
        <CityGuideAccountHeader breadcrumb='Reviews' />
        
        <Card className='shadow-sm'>
          <Card.Body className='p-4 p-md-5'>

            {/* Account navigation */}
            <CityGuideAccountNav activeNav='/city-guide/account-reviews' />

            {/* Page title + Sorting */}
            <div className='d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 py-2'>
              <h1 className='h3 mb-md-0'>Your reviews</h1>
              <div className='d-flex align-items-sm-center align-items-end'>
                <Form.Group controlId='sortby' className='d-flex flex-sm-row flex-column align-items-sm-center w-100 pe-sm-2'>
                  <Form.Label className='text-body fs-sm me-2 mb-0 pe-1 text-nowrap'>
                    <i className='fi-arrows-sort text-muted mt-n1 me-2'></i>
                    Sort by:
                  </Form.Label>
                  <Form.Select size='sm' style={{minWidth: '180px'}}>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                    <option value='Rating'>Rating</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            {reviews.length ? <>
              
              {/* Reviews list */}
              {reviews.map((review, indx) => (
                <Row key={indx} className={review.lastChild ? 'mb-4' : 'mb-4 pb-4 border-bottom'}>
                  <Col md={3} className='mb-md-0 mb-3'>
                    <h2 className='mb-2 fs-base'>
                      <span className='fw-normal me-1'>For:</span>
                      <Link href={review.href} className='nav-link d-inline-block p-0'>{review.title}</Link>
                    </h2>
                    <div className='mb-md-3 mb-2'>
                      <StarRating rating={review.rating} />
                    </div>
                    <span className='fs-sm text-muted'>{review.date}</span>
                  </Col>
                  <Col md={9}>
                    <p className='mb-3'>{review.text}</p>
                    <div className='d-flex align-items-center justify-content-between'>
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
                      <OverlayTrigger
                        placement='top'
                        overlay={<Tooltip>Delete</Tooltip>}
                      >
                        <Button
                          data-index={indx}
                          variant='link py-1 px-2 opacity-90'
                          onClick={(e) => {
                            let index = e.currentTarget.dataset.index
                            let newReviews = [...reviews]
                            if (index !== -1) {
                              newReviews.splice(index, 1);
                              setReviews(newReviews)
                            }
                          }}
                        >
                          <i className='fi-trash'></i>
                        </Button>
                      </OverlayTrigger>
                    </div>
                  </Col>
                </Row>
              ))}

            </> : 
            <div className='text-center pt-md-4 pb-2 pb-md-0'>
              <i className='fi-star display-6 text-muted mb-4'></i>
              <h2 className='h5 mb-2'>There are no reviews yet!</h2>
              <p className='text-muted pb-1'>All your reviews will be displayed here.</p>
              <Button as={Link} href='/city-guide/catalog' className='rounded-pill'>Go to Catalog</Button>
            </div>}
          </Card.Body>
        </Card>
      </Container>
    </CityGuidePageLayout>
  )
}

export default AccountReviewsPage
