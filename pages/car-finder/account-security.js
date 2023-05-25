import { useState } from 'react'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import CarFinderAccountLayout from '../../components/partials/CarFinderAccountLayout'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import PasswordToggle from '../../components/PasswordToggle'

const AccountSecurityPage = () => {
  
  // Form validation
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true);
  }

  return (
    <CarFinderPageLayout
      pageTitle='Account Password &amp; Security'
      activeNav='Account'
      userLoggedIn
    >
      <CarFinderAccountLayout accountPageTitle='Password &amp; Security'>
        <h1 className='h2 text-light'>Password &amp; Security</h1>
        <p className='text-light pt-1'>Manage your password settings and secure your account.</p>
        <h2 className='h5 text-light'>Password</h2>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className='pb-4'
        >
          <Row xs={1} sm={2} className='align-items-end mb-2'>
            <Col className='mb-3'>
              <Form.Label htmlFor='account-password' className='text-light'>Current password</Form.Label>
              <PasswordToggle light id='account-password' required />
            </Col>
            <Col className='mb-3'>
              <Link href='#' className='d-inline-block text-light mb-2'>Forgot password?</Link>
            </Col>
            <Col className='mb-3'>
              <Form.Label htmlFor='account-password-new' className='text-light'>New password</Form.Label>
              <PasswordToggle light id='account-password-new' required />
            </Col>
            <Col className='mb-3'>
              <Form.Label htmlFor='account-password-confirm' className='text-light'>Confirm password</Form.Label>
              <PasswordToggle light id='account-password-confirm' required />
            </Col>
          </Row>
          <Button type='submit' variant='outline-primary'>Update password</Button>
        </Form>
        <div className='border-top border-light pt-4 mt-3'></div>
        <h2 className='h5 text-light pt-2 mb-4'>Where you&apos;re signed in on</h2>

        {/* Device */}
        <div className='d-flex border-bottom border-light pb-3 mb-3'>
          <i className='fi-device-desktop fs-5 text-light me-1'></i>
          <div className='ps-2 text-light'>
            <div className='fw-bold mb-1'>Mac &mdash; New York, USA</div>
            <span className='d-inline-block fs-sm border-end border-light pe-2 me-2'>
              <span className='opacity-70'>Chrome</span>
            </span>
            <span className='fs-sm fw-bold text-success'>Active now</span>
          </div>
        </div>

        {/* Device */}
        <div className='d-flex border-bottom border-light pb-3 mb-3'>
          <i className='fi-device-mobile fs-5 text-light me-1'></i>
          <div className='ps-2 text-light'>
            <div className='fw-bold mb-1'>iPhone 12 &mdash; New York, USA</div>
            <span className='d-inline-block fs-sm border-end border-light pe-2 me-2'>
              <span className='opacity-70'>Finder App</span>
            </span>
            <span className='fs-sm opacity-70'>20 hours ago</span>
          </div>
          <div className='align-self-center ms-auto'>
            <Dropdown>
              <Dropdown.Toggle size='xs' variant='translucent-light btn-icon rounded-circle'>
                <i className='fi-dots-vertical'></i>
              </Dropdown.Toggle>
              <Dropdown.Menu variant='dark' align='end' className='pb-3 my-1'>
                <Dropdown.Item>Not you?</Dropdown.Item>
                <a href='#' className='d-block px-3'>Sign out</a>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Device */}
        <div className='d-flex border-bottom border-light pb-3 mb-3'>
          <i className='fi-device-desktop fs-5 text-light me-1'></i>
          <div className='ps-2 text-light'>
            <div className='fw-bold mb-1'>Windows 10.1 &mdash; New York, USA</div>
            <span className='d-inline-block fs-sm border-end border-light pe-2 me-2'>
              <span className='opacity-70'>Chrome</span>
            </span>
            <span className='fs-sm opacity-70'>November 15 at 8:42 AM</span>
          </div>
          <div className='align-self-center ms-auto'>
            <Dropdown>
              <Dropdown.Toggle size='xs' variant='translucent-light btn-icon rounded-circle'>
                <i className='fi-dots-vertical'></i>
              </Dropdown.Toggle>
              <Dropdown.Menu variant='dark' align='end' className='pb-3 my-1'>
                <Dropdown.Item>Not you?</Dropdown.Item>
                <a href='#' className='d-block px-3'>Sign out</a>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <a href='#' className='nav-link nav-link-light px-0 mt-4'>Sign out of all sessions</a>
      </CarFinderAccountLayout>
    </CarFinderPageLayout>
  )
}

export default AccountSecurityPage
