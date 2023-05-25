import { useState } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import JobBoardAccountLayout from '../../components/partials/JobBoardAccountLayout'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ResumeCard from '../../components/ResumeCard'

const AccountResumesPage = () => {

  // Resumes array
  const initialResumes = [
    {
      href: '#',
      img: {
        src: '/images/avatars/38.png',
        alt: 'Annette Black'
      },
      title: 'Lead Web Designer',
      location: 'New York',
      salary: '$4,000',
      badges: [],
      views: '80'
    },
    {
      href: '#',
      img: {
        src: '/images/avatars/37.png',
        alt: 'Annette Black'
      },
      title: 'Graphic Designer',
      location: 'New York',
      salary: '$2,000 - $2,500',
      badges: [
        ['accent', 'Featured']
      ],
      views: '203'
    },
    {
      href: '#',
      img: {
        src: '/images/avatars/37.png',
        alt: 'Annette Black'
      },
      title: 'Identity Designer / Illustrator',
      location: 'New York',
      salary: '$2,500',
      badges: [],
      views: '92'
    }
  ]

  const [resumes, setResumes] = useState(initialResumes)

  const clearAll = (e) => {
    e.preventDefault()
    setResumes([])
  }

  return (
    <JobBoardPageLayout
      pageTitle='Account - My Resumes'
      activeNav='Account'
      userLoggedIn
    >
      <JobBoardAccountLayout
        accountPageTitle='My Resumes'
        activeAccountNav='/job-board/account-resumes'
      >

        {/* Page title */}
        <div className='d-flex align-items-center justify-content-between py-4 mt-3 mb-2'>
          <h1 className='h3 mb-0'>My resumes</h1>
          <a
            href='#'
            onClick={clearAll}
            className='fw-bold text-decoration-none'
          >
            <i className='fi-trash me-2'></i>
            <span className='align-middle'>Delete all</span>
          </a>
        </div>

        {resumes.length ? <>
          <Row>

            {/* Sidebar */}
            <Col as='aside' xs={12} md={3} className='mb-4 pb-3 pb-md-0'>
              <div style={{maxWidth: '13rem'}}>
                <ul className='list-unstyled fs-sm pb-1 pb-md-3'>
                  <li>
                    <a className='nav-link fw-normal d-flex align-items-center px-0 py-1' href='#'>
                      <i className='fi-file opacity-70 me-2'></i>
                      <span>Published</span>
                      <span className='text-muted ms-auto'>(3)</span>
                    </a>
                  </li>
                  <li>
                    <a className='nav-link fw-normal d-flex align-items-center px-0 py-1' href='#'>
                      <i className='fi-file-clean opacity-70 me-2'></i>
                      <span>Drafts</span>
                      <span className='text-muted ms-auto'>(0)</span>
                    </a>
                  </li>
                  <li>
                    <a className='nav-link fw-normal d-flex align-items-center px-0 py-1' href='#'>
                      <i className='fi-archive opacity-70 me-2'></i>
                      <span>Archived</span>
                      <span className='text-muted ms-auto'>(0)</span>
                    </a>
                  </li>
                </ul>
                <Button as={Link} href='/job-board/post-resume-1' variant='primary rounded-pill w-100'>
                  <i className='fi-plus fs-sm me-2'></i>
                  Post resume
                </Button>
              </div>
            </Col>

            {/* List of resumes */}
            <Col xs={12} md={9} className='mt-n2'>
              {resumes.map((resume, indx) => (
                <ResumeCard
                  key={indx}
                  href={resume.href}
                  img={{
                    src: resume.img.src,
                    alt: resume.img.alt
                  }}
                  title={resume.title}
                  location={resume.location}
                  salary={resume.salary}
                  badges={resume.badges}
                  dropdown={[
                    { icon: 'fi-edit', label: 'Edit' },
                    { icon: 'fi-flame', label: 'Promote' },
                    { icon: 'fi-download-file', label: 'Download as PDF' },
                    { icon: 'fi-power', label: 'Activate' },
                    {
                      icon: 'fi-trash',
                      label: 'Delete',
                      props: {
                        'data-index': indx,
                        onClick:  (e) => {
                          let index = e.currentTarget.dataset.index
                          let newResumes = [...resumes]
                          if (index !== -1) {
                            newResumes.splice(index, 1)
                            setResumes(newResumes)
                          }
                        }
                      }
                    }
                  ]}
                  views={`${resume.views} views`}
                  className='mb-2'
                  style={{zIndex: resumes.length - indx}}
                />
              ))}
            </Col>
          </Row></> :

          // Empty state
          <div className='text-center pt-2 pt-md-4 pt-lg-5 pb-2 pb-md-0'>
            <i className='fi-file display-6 text-muted mb-4'></i>
            <h2 className='h5 mb-4'>You don&apos;t have any resume!</h2>
            <Button as={Link} href='/job-board/post-resume-1' variant='primary rounded-pill'>
              <i className='fi-plus fs-sm me-2'></i>
              Post resume
            </Button>
          </div>
        }
      </JobBoardAccountLayout>
    </JobBoardPageLayout>
  )
}

export default AccountResumesPage
