import { useState } from 'react'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import CarFinderAccountLayout from '../../components/partials/CarFinderAccountLayout'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import VehicleCard from '../../components/VehicleCard'

const AccountWishlistPage = () => {

  const initialItems = [
    {
      href: '/car-finder/single',
      img: ['/images/car-finder/catalog/09.jpg', '/images/car-finder/catalog/09.jpg'],
      title: 'Ford Truck Lifted',
      year: '1995',
      price: '$24,000',
      location: 'Chicago',
      badges: [['info', 'Used']],
      footer: ['278K mi', 'Manual', 'Diesel']
    },
    {
      href: '/car-finder/single',
      img: ['/images/car-finder/catalog/10.jpg', '/images/car-finder/catalog/10.jpg'],
      title: 'Mercedes Benz C300 Sport',
      year: '2018',
      price: '$53,400',
      location: 'San Francisco',
      badges: [['info', 'Used'], ['success', 'Certified']],
      footer: ['35K mi', 'Automatic', 'Hybrid']
    },
    {
      href: '/car-finder/single',
      img: ['/images/car-finder/catalog/11.jpg', '/images/car-finder/catalog/11.jpg'],
      title: 'Mazda MX-5 Miata Convertible',
      year: '2019',
      price: '$29,700',
      location: 'Los Angeles',
      badges: [['info', 'Used']],
      footer: ['18K mi', 'Manual', 'Gasoline']
    },
    {
      href: '/car-finder/single',
      img: ['/images/car-finder/catalog/12.jpg', '/images/car-finder/catalog/12.jpg'],
      title: 'Nissan 370Z Nismo',
      year: '2019',
      price: '$37,900',
      location: 'New York',
      badges: [['info', 'Used']],
      footer: ['16K mi', 'Automatic', 'Gasoline']
    }
  ]

  const [items, setItems] = useState(initialItems)

  const clearAll = (e) => {
    e.preventDefault()
    setItems([])
  }

  return (
    <CarFinderPageLayout
      pageTitle='Account Wishlist'
      activeNav='Account'
      userLoggedIn
    >
      <CarFinderAccountLayout accountPageTitle='Wishlist'>
        <div className='d-flex align-items-center justify-content-between mb-4 pb-2'>
          <h1 className='h2 text-light mb-0'>
            Wishlist
            <span className='badge bg-faded-light fs-base align-middle ms-3'>{items.length}</span>
          </h1>
          <a href='#' className='nav-link-light fw-bold' onClick={clearAll}>
            <i className='fi-x fs-xs mt-n1 me-2'></i>
            Clear all
          </a>
        </div>

        {items.length ? items.map((item, indx) => (
          <VehicleCard
            key={indx}
            href={item.href}
            images={item.img.map((img, indx) => [img, 'Image'])}
            title={item.title}
            year={item.year}
            price={item.price}
            location={item.location}
            checkbox={{
              label: 'Compare',
              props: {
                onChange: (e) => e.target.checked ? console.log('Car ADDED to comparison list!') : console.log('Car REMOVED from comparison list!')
              }
            }}
            badges={item.badges}
            wishlistButton={{
              tooltip: 'Remove from Wishlist',
              active: true,
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
            footer={[
              ['fi-dashboard', item.footer[0]],
              ['fi-gearbox', item.footer[1]],
              ['fi-petrol', item.footer[2]]
            ]}
            horizontal
            light
            className='mb-4'
          />          
        )) : 
            
          // Empty state
          <div className='text-light text-center pt-2 pt-md-4 pt-lg-5 pb-2 pb-md-0'>
            <i className='fi-heart display-6 opacity-50 mb-4'></i>
            <h2 className='h5 text-light mb-2'>Your Wishlist is empty!</h2>
            <p className='opacity-70 pb-1'>Search our catalog for relevant cars and add them to you Wishlist to buy them later.</p>
            <Button as={Link} href='/car-finder/catalog?view=list'>Go to Catalog</Button>
          </div>
        }
      </CarFinderAccountLayout>
    </CarFinderPageLayout>
  )
}

export default AccountWishlistPage
