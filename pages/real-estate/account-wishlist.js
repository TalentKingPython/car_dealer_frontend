import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import RealEstateAccountLayout from '../../components/partials/RealEstateAccountLayout'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import PropertyCard from '../../components/PropertyCard'

const AccountWishlistPage = () => {

  // Properties array
  const initialProperties = [
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/16.jpg', 'Image']],
      category: 'For sale',
      title: '3-bed Apartment | 67 sq.m',
      location: '3811 Ditmars Blvd Astoria, NY 11105',
      price: '$94,000',
      badges: [['success', 'Verified'], ['info', 'New']],
      amenities: [3, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/09.jpg', 'Image']],
      category: 'For rent',
      title: 'Terra Nova Apartments | 85 sq.m',
      location: '21 India St Brooklyn, NY 11222',
      price: '$2,400',
      badges: [['success', 'Verified']],
      amenities: [5, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/19.jpg', 'Image']],
      category: 'For sale',
      title: 'Country House | 120 sq.m',
      location: '6954 Grand AveMaspeth, NY 11378',
      price: '$162,000',
      badges: [],
      amenities: [5, 3, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/17.jpg', 'Image']],
      category: 'For rent',
      title: 'Crystal Apartment| 60 sq.m',
      location: '495 Henry St Brooklyn, NY 11231',
      price: '$1,500',
      badges: [['info', 'New']],
      amenities: [4, 1, 2]
    }
  ]

  const [properties, setProperties] = useState(initialProperties)

  const clearAll = (e) => {
    e.preventDefault()
    setProperties([])
  }

  return (
    <RealEstatePageLayout
      pageTitle='Account Wishlist'
      activeNav='Account'
      userLoggedIn
    >
      <RealEstateAccountLayout accountPageTitle='Wishlist'>
        <div className='d-flex align-items-center justify-content-between mb-4 pb-2'>
          <h1 className='h2 mb-0'>
            Wishlist
            <span className='badge bg-secondary fs-base align-middle ms-3'>{properties.length}</span>
          </h1>
          <a href='#' className='fw-bold text-decoration-none' onClick={clearAll}>
            <i className='fi-x fs-xs mt-n1 me-2'></i>
            Clear all
          </a>
        </div>

        {/* List of properties or empty state */}
        {properties.length ? properties.map((property, indx) => (
          <PropertyCard
            key={indx}
            href={property.href}
            images={property.images}
            category={property.category}
            title={property.title}
            location={property.location}
            price={property.price}
            badges={property.badges}
            wishlistButton={{
              tooltip: 'Remove from Wishlist',
              active: true,
              props: {
                'data-index': indx,
                onClick:  (e) => {
                  let index = e.currentTarget.dataset.index
                  let newProperties = [...properties]
                  if (index !== -1) {
                    newProperties.splice(index, 1)
                    setProperties(newProperties)
                  }
                }
              }
            }}
            footer={[
              ['fi-bed', property.amenities[0]],
              ['fi-bath', property.amenities[1]],
              ['fi-car', property.amenities[2]]
            ]}
            horizontal
            className={indx === properties.length - 1 ? '' : 'mb-4' }
          />
        )) : 
            
          // Empty state
          <div className='text-center pt-2 pt-md-4 pt-lg-5 pb-2 pb-md-0'>
            <i className='fi-heart display-6 text-muted mb-4'></i>
            <h2 className='h5 mb-2'>Your Wishlist is empty!</h2>
            <p className='pb-1'>Search our catalog for relevant properties and add them to you Wishlist to buy or rent them later.</p>
            <Button as={Link} href='/real-estate/catalog?category=rent'>Go to Catalog</Button>
          </div>
        }
      </RealEstateAccountLayout>
    </RealEstatePageLayout>
  )
}

export default AccountWishlistPage
