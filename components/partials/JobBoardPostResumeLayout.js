import { useEffect } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Steps, { Step } from '../Steps'

const JobBoardPostResumeLayout = ({
  activeStep,
  children,
  prevStep,
  nextStep,
  lastStep
}) => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
  })

  // Steps
  const steps = [
    'Basic info',
    'Education',
    'Experience',
    'Skills',
    'Review'
  ]

  return (
    <Container className='py-5 mt-5 mb-md-4'>

      {/* Breadcrumbs */}
      <Breadcrumb className='mb-3 mb-md-4 pt-md-3'>
        <Breadcrumb.Item linkAs={Link} href='/job-board'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Post resume</Breadcrumb.Item>
      </Breadcrumb>

      <Row className='justify-content-center pb-sm-2'>
        <Col lg={11} xl={10}>

          {/* Page title */}
          <div className='text-center pb-4 mb-3'>
            <h1 className='h2 mb-4'>Create online resume</h1>
            <p className='mb-4'>Save time by uploading a resume to prefill some of the fields below. Please, use PDF format.</p>
            <Button size='lg' variant='primary rounded-pill'>
              <i className='fi-upload me-2'></i>
              Upload existing resume
            </Button>
          </div>

          {/* Steps */}
          <div className='bg-light rounded-3 py-4 px-md-4 mb-3'>
            <Steps>
              {steps.map((step, indx) => {
                if (steps.indexOf(activeStep) >= indx) {
                  return <Step key={indx} active>{step}</Step>
                } else {
                  return <Step key={indx}>{step}</Step>
                }
              })}
            </Steps>
          </div>
          
          {/* Page content */}
          <div className='bg-light rounded-3 p-4 p-md-5 mb-3'>
            {children}
          </div>

          {/* Navigation */}
          <div className='d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5'>
            {prevStep && <Button as={Link} href={prevStep} size='lg' variant='outline-primary rounded-pill'>
              <i className='fi-chevron-left fs-sm me-2 ms-n1'></i>
              Previous step
            </Button>}
            {nextStep && <Button as={Link} href={nextStep} size='lg' variant='primary rounded-pill ms-auto' className='mt-sm-0 mt-3'>
              Next step
              <i className='fi-chevron-right fs-sm ms-2 me-n1'></i>
            </Button>}
            {lastStep && <Button size='lg' variant='primary rounded-pill ms-auto' className='mt-sm-0 mt-3'>Save resume</Button>}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default JobBoardPostResumeLayout
