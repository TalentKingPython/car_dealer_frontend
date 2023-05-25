import { useState } from 'react'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import CarFinderAccountLayout from '../../components/partials/CarFinderAccountLayout'
import FormCheck from 'react-bootstrap/FormCheck'

const AccountNotificationsPage = () => {

  // Notification swiches
  const switches = [
    {
      id: '01',
      name: 'vehicleNew',
      title: 'New vehicles alerts',
      description: 'New vehicles that match your Wishlist'
    },
    {
      id: '02',
      name: 'vehicleUpdate',
      title: 'Vehicle status updates',
      description: 'Updates like price changes and off-market status on your Wishlist'
    },
    {
      id: '03',
      name: 'recomendations',
      title: 'Finder recommendations',
      description: 'Vehicles we think you\'ll like. These recommendations may be slightly outside your search criteria'
    },
    {
      id: '04',
      name: 'featuredNews',
      title: 'Featured news',
      description: 'News and tips you may be interested in'
    },
    {
      id: '05',
      name: 'extras',
      title: 'Finder extras',
      description: 'Occasional notifications about new features to make finding the perfect car easy'
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
    <CarFinderPageLayout
      pageTitle='Account Notifications'
      activeNav='Account'
      userLoggedIn
    >
      <CarFinderAccountLayout accountPageTitle='Notifications'>
        <h1 className='h2 text-light'>Notifications</h1>
        <p className='text-light pt-1 mb-4'>Get real-time vehicle updates, price drop alerts, helpful shopping information and more.</p>
        <div className='py-2'>
          {switches.map(({ id, name, title, description }) => (
            <FormCheck
              key={id}
              type='switch'
              id={id}
              className='form-switch-light d-flex justify-content-between ps-0 mb-4'
            >
              <FormCheck.Label className='me-2'>
                <span className='h6 text-light mb-1'>{title}</span>
                <br/>
                <span className='fs-sm text-light opacity-70 mb-0'>{description}</span>
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
        <div className='border-top border-light pt-4'>
        <FormCheck
          type='switch'
          id='selectAll'
          className='form-switch-light'
          >
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
      </CarFinderAccountLayout>
    </CarFinderPageLayout>
  )
}

export default AccountNotificationsPage
