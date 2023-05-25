import { useState } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import JobBoardAccountLayout from '../../components/partials/JobBoardAccountLayout'
import FormCheck from 'react-bootstrap/FormCheck'

const AccountNotificationsPage = () => {

  // Notification switches
  const switches = [
    {
      id: '01',
      name: 'jobVacancies',
      title: 'New vacancies notifications',
      description: 'New vacancies alerts that match your Saved Jobs list'
    },
    {
      id: '02',
      name: 'jobArticles',
      title: 'New articles about job search and career development',
      description: 'Get the most useful materials from our blog weekly'
    },
    {
      id: '03',
      name: 'jobLetters',
      title: 'Info letters from our partners',
      description: 'Be the first to know about interesting career and development events, partner vacancies and new offers'
    },
    {
      id: '04',
      name: 'jobStatistics',
      title: 'Weekly statistics of your resume views',
      description: 'Thanks to the statistics, you will be able to edit your resume and achieve higher results'
    },
    {
      id: '05',
      name: 'jobRecommendation',
      title: 'Recommended vacancies for your profile',
      description: 'You will receive recommended vacancies according to your interests'
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
    <JobBoardPageLayout
      pageTitle='Account - Notifications'
      activeNav='Account'
      userLoggedIn
    >
      <JobBoardAccountLayout
        accountPageTitle='Notifications'
        activeAccountNav='/job-board/account-notifications'
      >

        {/* Page title */}
        <div className='d-flex align-items-center justify-content-between py-4 mt-3 mb-2'>
          <h1 className='h3 mb-0'>Notifications</h1>
        </div>

        {/* Page content */}
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
      </JobBoardAccountLayout>
    </JobBoardPageLayout>
  )
}

export default AccountNotificationsPage
