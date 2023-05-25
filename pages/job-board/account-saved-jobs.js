import { useState } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import JobBoardAccountLayout from '../../components/partials/JobBoardAccountLayout'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Avatar from '../../components/Avatar'
import Dropdown from 'react-bootstrap/Dropdown'
import JobCard from '../../components/JobCard'

const AccountJobsPage = () => {

  const initialJobs = [
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/it-pro.png',
        name: 'IT Pro TV'
      },
      title: 'Business Analyst',
      description: 'Blandit a tincidunt arcu nulla. Sem neque, rhoncus non odio nulla maecenas elit praesent. Orci tristique velit mauris cursus nibh...',
      location: 'Chicago',
      salary: '$7,500',
      badges: [
        ['info', 'New']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/xbox.png',
        name: 'Xbox Company'
      },
      title: 'Full-Stack Developer',
      description: 'Euismod nec sagittis sit arcu libero, metus. Aliquam nisl rhoncus porttitor volutpat, ante cras tincidunt. Nec sit nunc, ornare tincidunt enim neque...',
      location: 'Washington',
      salary: '$13,000',
      badges: [
        ['accent', 'Featured']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/xampp.png',
        name: 'XAMPP Company'
      },
      title: 'Account Manager',
      description: 'Auctor elit in aenean sodales mattis. Ultricies nec eu augue sit. Ornare pulvinar enim fames orci enim in libero. Eu, lorem leo netus velit egestas risus...',
      location: 'San Francisco',
      salary: '$6,500',
      badges: []
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/zapier.png',
        name: 'Zapier'
      },
      title: 'Onboarding Specialist',
      description: 'Rhoncus magna odio turpis porttitor nulla fringilla quis. Consectetur sociis urna posuere consequat. Ut consectetur amet penatibus sociis feugiat...',
      location: 'Houston',
      salary: '$4,000',
      badges: [
        ['danger', 'Hot']
      ]
    },
    {
      href: '/job-board/single',
      company: {
        logo: '/images/job-board/company/kibana.png',
        name: 'Elastic Kibana'
      },
      title: 'Global Product Operations Specialist',
      description: 'A ultrices eu facilisis suspendisse scelerisque fringilla ultrices sit pellentesque. Consequat platea quam faucibus egestas arcu semper adipiscing...',
      location: 'San Francisco',
      salary: '$9,200',
      badges: []
    }
  ]

  const [jobs, setJobs] = useState(initialJobs)

  const clearAll = (e) => {
    e.preventDefault()
    setJobs([])
  }

  return (
    <JobBoardPageLayout
      pageTitle='Account - Saved Jobs'
      activeNav='Account'
      userLoggedIn
    >
      <JobBoardAccountLayout
        accountPageTitle='Saved Jobs'
        activeAccountNav='/job-board/account-saved-jobs'
      >

        {/* Page title */}
        <div className='d-flex align-items-center justify-content-between py-4 mt-3 mb-2'>
          <h1 className='h3 mb-0'>Saved jobs</h1>
          <a
            href='#'
            onClick={clearAll}
            className='fw-bold text-decoration-none'
          >
            <i className='fi-x fs-xs me-2'></i>
            <span className='align-middle'>Clear all</span>
          </a>
        </div>

        {jobs.length ? <>

          {/* Saved jobs grid */}
          <Row xs={1} md={2} lg={3} className='g-2 g-md-4'>
            {jobs.map((job, indx) => (
              <Col key={indx}>
                <JobCard
                  href={job.href}
                  company={{
                    name: job.company.name,
                    logo: {
                      src: job.company.logo,
                      size: [24, 24]
                    }
                  }}
                  title={job.title}
                  description={job.description}
                  location={job.location}
                  salary={job.salary}
                  badges={job.badges}
                  wishlistButton={{
                    active: true,
                    tooltip: 'Remove from Saved jobs',
                    props: {
                      'data-index': indx,
                      onClick: (e) => {
                        let index = e.currentTarget.dataset.index
                        let newJobs = [...jobs]
                        if (index !== -1) {
                          newJobs.splice(index, 1);
                          setJobs(newJobs)
                        }
                      }
                    }
                  }}
                  className='h-100'
                />
              </Col>
            ))}
          </Row></> :

          // Empty state
          <div className='text-center pt-2 pt-md-4 pt-lg-5 pb-2 pb-md-0'>
            <i className='fi-heart display-6 text-muted mb-4'></i>
            <h2 className='h5 mb-2'>Your Saved jobs list is empty!</h2>
            <p className='text-muted pb-1'>Search our catalog for relevant jobs and add them to you Saved jobs list to apply later.</p>
            <Button as={Link} href='/job-board/catalog' className='rounded-pill'>Find Jobs</Button>
          </div>
        }
      </JobBoardAccountLayout>
    </JobBoardPageLayout>
  )
}

export default AccountJobsPage
