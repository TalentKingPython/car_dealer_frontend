import { useEffect, useState } from 'react'
import Link from 'next/link'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import CityGuideAccountHeader from '../../components/partials/CityGuideAccountHeader'
import CityGuideAccountNav from '../../components/partials/CityGuideAccountNav'
import VenueCard from '../../components/VenueCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const AccountFavoritesPage = () => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
  })


  const initialItems = [
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/07.jpg', 425, 194, 'Image'],
      title: 'Merry Berry Motel',
      rating: [4.5, 13],
      price: '$$',
      location: '0.4 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/08.jpg', 425, 194, 'Image'],
      title: 'Serenity Hotel',
      rating: [5.0, 17],
      price: '$$$',
      location: '1.6 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/09.jpg', 425, 194, 'Image'],
      title: 'Repose Hotel',
      rating: [5.0, 45],
      price: '$$',
      location: '1.4 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/10.jpg', 425, 194, 'Image'],
      title: 'Tranquil Hostel',
      rating: [4.0, 19],
      price: '$',
      location: '1.7 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/06.jpg', 425, 194, 'Image'],
      title: 'Bliss Apartment',
      rating: [4.8, 32],
      price: '$',
      location: '1.9 km from center'
    },
    {
      href: '/city-guide/single',
      img: ['/images/city-guide/catalog/11.jpg', 425, 194, 'Image'],
      title: 'Soothe & Stay',
      rating: [4.6, 40],
      price: '$$',
      location: '2.4 km from center'
    }
  ]

  const [items, setItems] = useState(initialItems)

  const clearAll = (e) => {
    e.preventDefault()
    setItems([])
  }

  return (
    <CityGuidePageLayout
      pageTitle='Account - Favorites'
      activeNav='Account'
      userLoggedIn
    >
      
      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Page header */}
        <CityGuideAccountHeader breadcrumb='Favorites' />
        
        <Card className='shadow-sm'>
          <Card.Body className='p-4 p-md-5'>

            {/* Account navigation */}
            <CityGuideAccountNav activeNav='/city-guide/account-favorites' />

            {/* Page title + Sorting */}
            <div className='d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2'>
              <h1 className='h3 mb-md-0'>Favorite Listings</h1>
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
                <a
                  href='#'
                  className='d-inline-block ms-sm-4 ms-3 mb-sm-0 mb-2 fs-sm fw-bold text-decoration-none text-nowrap'
                  onClick={clearAll}
                >
                  <i className='fi-x fs-xs me-2 align-middle'></i>
                  Clear all
                </a>
              </div>
            </div>

            {items.length ? <>

              {/* Items grid */}
              <Row lg={3} sm={2} xs={1} className='gy-4 gx-3 gx-lg-4 mb-4'>
                {items.map((item, indx) => (
                  <Col key={indx} className='pt-2'>
                    <VenueCard
                      href={item.href}
                      img={{
                        src: item.img[0],
                        width: item.img[1],
                        height: item.img[2],
                        alt: item.img[3]
                      }}
                      title={item.title}
                      rating={{
                        value: item.rating[0],
                        count: item.rating[1]
                      }}
                      price={item.price}
                      location={item.location}
                      wishlistButton={{
                        active: true,
                        tooltip: 'Remove from Favorites',
                        props: {
                          'data-index': indx,
                          onClick: (e) => {
                            let index = e.currentTarget.dataset.index
                            let newItems = [...items]
                            if (index !== -1) {
                              newItems.splice(index, 1);
                              setItems(newItems)
                            }
                          }
                        }
                      }}
                    />
                  </Col>
                ))}
              </Row>

              {/* Load more */}
              <a
                href='#'
                className='d-inline-block py-sm-2 fw-bold text-decoration-none'
                onClick={(e) => e.preventDefault()}
              >
                <i className='fi-refresh me-2 align-middle'></i>
                Load more
              </a></> :

              // Empty state
              <div className='text-center pt-2 pt-md-4 pt-lg-5 pb-2 pb-md-0'>
                <i className='fi-heart display-6 text-muted mb-4'></i>
                <h2 className='h5 mb-2'>Your Favorites list is empty!</h2>
                <p className='text-muted pb-1'>Search our catalog for relevant venues and add them to you Favorites list to book them later.</p>
                <Button as={Link} href='/city-guide/catalog' className='rounded-pill'>Go to Catalog</Button>
              </div>
            }
          </Card.Body>
        </Card>
      </Container>
    </CityGuidePageLayout>
  )
}

export default AccountFavoritesPage
