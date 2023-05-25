import { useState } from 'react'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import CarFinderAccountLayout from '../../components/partials/CarFinderAccountLayout'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import VehicleCard from '../../components/VehicleCard'

const AccountCarsPage = () => {  

  // Cars array
  const initialCars = [
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

  const [cars, setCars] = useState(initialCars)

  const deleteAll = (e) => {
    e.preventDefault()
    setCars([])
  }

  return (
    <CarFinderPageLayout
      pageTitle='Account My Cars'
      activeNav='Account'
      userLoggedIn
    >
      <CarFinderAccountLayout accountPageTitle='My Cars'>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h1 className='h2 text-light mb-0'>My Cars</h1>
          <a href='#' className='nav-link-light fw-bold' onClick={deleteAll}>
            <i className='fi-trash mt-n1 me-2'></i>
            Delete all
          </a>
        </div>
        <p className='text-light pt-1 mb-4'>Here you can see your car offers and edit them easily.</p>

        {/* Nav tabs */}
        <Nav
          variant='tabs'
          defaultActiveKey='published'
          className='nav-tabs-light border-bottom border-light mb-4'
        >
          <Nav.Item className='mb-3'>
            <Nav.Link eventKey='published'>
              <i className='fi-file fs-base me-2'></i>
              Published
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-3'>
            <Nav.Link eventKey='drafts'>
              <i className='fi-file-clean fs-base me-2'></i>
              Drafts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-3'>
            <Nav.Link eventKey='archived'>
              <i className='fi-archive fs-base me-2'></i>
              Archived
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* List of cars */}
        {cars.length ? cars.map((car, indx) => (
          <VehicleCard
            key={indx}
            href={car.href}
            images={car.img.map((img, indx) => [img, 'Image'])}
            title={car.title}
            year={car.year}
            price={car.price}
            location={car.location}
            dropdown={[
              {
                // href: '#', // Optionally pass href prop to convert dropdown item to Next link
                icon: 'fi-edit',
                label: 'Edit',
                props: {onClick: () => console.log('Edit car')}
              },
              {
                icon: 'fi-flame',
                label: 'Promote',
                props: {onClick: () => console.log('Promote car')}
              },
              {
                icon: 'fi-power',
                label: 'Deactivate',
                props: {onClick: () => console.log('Deactivate car')}
              },
              {
                icon: 'fi-trash',
                label: 'Delete',
                props: {
                  'data-index': indx,
                  onClick:  (e) => {
                    let index = e.currentTarget.dataset.index
                    let newCars = [...cars]
                    if (index !== -1) {
                      newCars.splice(index, 1)
                      setCars(newCars)
                    }
                  }
                }
              }
            ]}
            badges={car.badges}
            footer={[
              ['fi-dashboard', car.footer[0]],
              ['fi-gearbox', car.footer[1]],
              ['fi-petrol', car.footer[2]]
            ]}
            horizontal
            light
            className={indx === cars.length - 1 ? 'mb-1' : 'mb-4'}
          />
        )) : 
            
          // Empty state
          <div className='text-light text-center pt-2 pt-md-4 pt-lg-5 pb-2 pb-md-0'>
            <i className='fi-car display-6 opacity-50 mb-4'></i>
            <h2 className='h5 text-light mb-4'>You don&apos;t have any cars for sale!</h2>
            <Button as={Link} href='/car-finder/sell-car' variant='primary'>
              <i className='fi-plus fs-sm me-2'></i>
              Sell car
            </Button>
          </div>
        }
      </CarFinderAccountLayout>
    </CarFinderPageLayout>
  )
}

export default AccountCarsPage
