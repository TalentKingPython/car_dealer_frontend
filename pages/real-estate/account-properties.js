import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import RealEstateAccountLayout from '../../components/partials/RealEstateAccountLayout'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import PropertyCard from '../../components/PropertyCard'

const AccountPropertiesPage = () => {

  // Properties array
  const initialProperties = [
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/08.jpg', 'Image']],
      category: 'For rent',
      title: 'Greenpoint Rentals | 85 sq.m',
      location: '1510 Castle Hill Ave Bronx, NY 10462',
      price: '$1,330',
      badges: [['info', 'New']],
      amenities: [1, 1, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/10.jpg', 'Image']],
      category: 'For rent',
      title: 'O’Farrell Rooms | 40 sq.m',
      location: '460 E Fordham Rd Bronx, NY 10458',
      price: 'From $550',
      badges: [['success', 'Verified']],
      amenities: [2, 1, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [['/images/real-estate/catalog/22.jpg', 'Image']],
      category: 'For sale',
      title: 'Cottage | 120 sq.m',
      location: '42 Broadway New York, NY 10004',
      price: '$184,000',
      badges: [['success', 'Verified']],
      amenities: [4, 2, 1]
    }
  ]

  const [properties, setProperties] = useState(initialProperties)

  const deleteAll = (e) => {
    e.preventDefault()
    setProperties([])
  }

  return (
    <RealEstatePageLayout
      pageTitle='Account My Properties'
      activeNav='Account'
      userLoggedIn
    >
      <RealEstateAccountLayout accountPageTitle='My Properties'>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h1 className='h2 mb-0'>My Properties</h1>
          <a href='#' className='fw-bold text-decoration-none' onClick={deleteAll}>
            <i className='fi-trash mt-n1 me-2'></i>
            Delete all
          </a>
        </div>
        <p className='pt-1 mb-4'>Here you can see your property offers and edit them easily.</p>

        {/* Nav tabs */}
        <Nav
          variant='tabs'
          defaultActiveKey='published'
          className='border-bottom mb-4'
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
            footer={[
              ['fi-bed', property.amenities[0]],
              ['fi-bath', property.amenities[1]],
              ['fi-car', property.amenities[2]]
            ]}
            dropdown={[
              {
                // href: '#', // Optionally pass href prop to convert dropdown item to Next link
                icon: 'fi-edit',
                label: 'Edit',
                props: {onClick: () => console.log('Edit property')}
              },
              {
                icon: 'fi-flame',
                label: 'Promote',
                props: {onClick: () => console.log('Promote property')}
              },
              {
                icon: 'fi-power',
                label: 'Deactivate',
                props: {onClick: () => console.log('Deactivate property')}
              },
              {
                icon: 'fi-trash',
                label: 'Delete',
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
              }
            ]}
            horizontal
            className={indx === properties.length - 1 ? '' : 'mb-4' }
          />
        )) : <div className='text-center pt-2 pt-md-4 pt-lg-5 pb-2 pb-md-0'>
          <i className='fi-home display-6 text-muted mb-4'></i>
          <h2 className='h5 mb-4'>You don&apos;t have any properties!</h2>
          <Button as={Link} href='/real-estate/add-property' variant='primary'>
            <i className='fi-plus fs-sm me-2'></i>
            Add property
          </Button>
        </div>}
      </RealEstateAccountLayout>
    </RealEstatePageLayout>
  )
}

export default AccountPropertiesPage
