import { useEffect, useState } from 'react'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import CityGuideAccountHeader from '../../components/partials/CityGuideAccountHeader'
import CityGuideAccountNav from '../../components/partials/CityGuideAccountNav'
import Container from 'react-bootstrap/Container'
import FormCheck from 'react-bootstrap/FormCheck'
import Card from 'react-bootstrap/Card'

const AccountNotificationsPage = () => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
  })


  // Notification swiches
  const switches = [
    {
      id: '01',
      name: 'productSold',
      title: 'Product sold notifications',
      description: 'Send an email when someone purchased one of my products'
    },
    {
      id: '02',
      name: 'productUpdate',
      title: 'Product update notifications',
      description: 'Send an email when the product I&apos;ve purchased is updated'
    },
    {
      id: '03',
      name: 'productComment',
      title: 'Product comment notifications',
      description: 'Send an email when someone comments on one of my products'
    },
    {
      id: '04',
      name: 'productReview',
      title: 'Product review notifications',
      description: 'Send an email when someone leaves a review with their rating'
    },
    {
      id: '05',
      name: 'dailySummary',
      title: 'Daily summary emails',
      description: 'Send me a daily summary of all products sold, commented or reviewed'
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
    <CityGuidePageLayout
      pageTitle='Account - Notifications'
      activeNav='Account'
      userLoggedIn
    >
      
      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Page header */}
        <CityGuideAccountHeader breadcrumb='Reviews' />
        
        <Card className='shadow-sm'>
          <Card.Body className='px-4 pt-4 pb-0 px-md-5 pt-md-5 pb-md-4'>

            {/* Account navigation */}
            <CityGuideAccountNav activeNav='/city-guide/account-notifications' />

            {/* Page content */}
            <h1 className='h3 mb-4 py-2'>Notifications</h1>
            
            <div className='border-bottom mb-3 pb-3'>
              <FormCheck
                type='switch'
                id='selectAll'
                >
                <FormCheck.Input
                  name='selectAll'
                  checked={isCheckAll}
                  onChange={handleSelectAll}
                
                />
                <FormCheck.Label className='ms-2 fw-bold text-dark opacity-90'>
                  Enable / disable all notifications
                </FormCheck.Label>
              </FormCheck>
            </div>
            <div className='py-2'>
              {switches.map(({ id, name, title, description }) => (
                <FormCheck
                  key={id}
                  type='switch'
                  id={id}
                  className='mb-4'
                >
                  <FormCheck.Input
                    name={name}
                    checked={isCheck.includes(id)}
                    onChange={handleSelect}
                  />
                  <FormCheck.Label className='ms-2'>
                    <span className='h6 fs-base opacity-90 mb-1'>{title}</span>
                    <br/>
                    <span className='fs-sm mb-0'>{description}</span>
                  </FormCheck.Label>
                </FormCheck>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </CityGuidePageLayout>
  )
}

export default AccountNotificationsPage
