import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import RealEstateAccountLayout from '../../components/partials/RealEstateAccountLayout'
import FormCheck from 'react-bootstrap/FormCheck'

const AccountNotificationsPage = () => {


  // Notification swiches
  const switches = [
    {
      id: '01',
      name: 'rentNew',
      title: 'New rental alerts',
      description: 'New rentals that match your Wishlist'
    },
    {
      id: '02',
      name: 'saleNew',
      title: 'New properties for sale alerts',
      description: 'New properties for sale that match your Wishlist'
    },
    {
      id: '03',
      name: 'rentUpdate',
      title: 'Rental status updates',
      description: 'Updates like price changes and off-market status on your Wishlist'
    },
    {
      id: '04',
      name: 'recomendations',
      title: 'Finder recommendations',
      description: 'Properties for rent / sale we think you\'ll like. These recommendations may be slightly outside your search criteria'
    },
    {
      id: '05',
      name: 'featuredNews',
      title: 'Featured news',
      description: 'News and tips you may be interested in'
    },
    {
      id: '06',
      name: 'extras',
      title: 'Finder extras',
      description: 'Occasional notifications about new features to make finding the perfect property easy'
    }
  ]

  const [isCheckAll, setIsCheckAll] = useState(true)
  const [isCheck, setIsCheck] = useState(['01', '02', '04'])

  const handleSelect = e => {
    const { id, checked } = e.target
    setIsCheck([...isCheck, id])
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id))
    }
  }

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll)
    setIsCheck(switches.map(item => item.id))
    if (isCheckAll) {
      setIsCheck([])
    }
  }

  return (
    <RealEstatePageLayout
      pageTitle='Account Notifications'
      activeNav='Account'
      userLoggedIn
    >
      <RealEstateAccountLayout accountPageTitle='Notifications'>
        <h1 className='h2'>Notifications</h1>
        <p className='pt-1 mb-4'>Get real-time updates on your favorite homes, neighborhoods, and more.</p>
        <div className='py-2'>
          {switches.map(({ id, name, title, description }) => (
            <FormCheck
              key={id}
              type='switch'
              id={id}
              className='d-flex justify-content-between ps-0 mb-4'
            >
              <FormCheck.Label className='me-2'>
                <span className='h6 mb-1'>{title}</span>
                <br/>
                <span className='fs-sm mb-0'>{description}</span>
              </FormCheck.Label>
              <FormCheck.Input
                name={name}
                checked={isCheck.includes(id)}
                onChange={handleSelect}
                className='flex-shrink-0'
              />
            </FormCheck>
          ))}
        </div>
        <div className='border-top pt-4'>
        <FormCheck type='switch' id='selectAll'>
          <FormCheck.Input
            name='selectAll'
            checked={isCheckAll}
            onChange={handleSelectAll}
          
          />
          <FormCheck.Label>
            Enable / disable all notifications
          </FormCheck.Label>
        </FormCheck>
        </div>
      </RealEstateAccountLayout>
    </RealEstatePageLayout>
  )
}

export default AccountNotificationsPage
