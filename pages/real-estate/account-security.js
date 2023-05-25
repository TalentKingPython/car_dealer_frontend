import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import RealEstateAccountLayout from '../../components/partials/RealEstateAccountLayout'
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
    <RealEstatePageLayout
      pageTitle='Account Password &amp; Security'
      activeNav='Account'
      userLoggedIn
    >
      <RealEstateAccountLayout accountPageTitle='Password &amp; Security'>
        <h1 className='h2'>Password &amp; Security</h1>
        <p className='pt-1'>Manage your password settings and secure your account.</p>
        <h2 className='h5'>Password</h2>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className='pb-4'
        >
          <Row xs={1} sm={2} className='align-items-end mb-2'>
            <Col className='mb-2'>
              <Form.Label htmlFor='account-password'>Current password</Form.Label>
              <PasswordToggle id='account-password' required />
            </Col>
            <Col className='mb-2'>
              <Link href='#' className='d-inline-block mb-2'>Forgot password?</Link>
            </Col>
          </Row>
          <Row xs={1} sm={2} className='align-items-end mb-2'>
            <Col className='mb-3'>
              <Form.Label htmlFor='account-password-new'>New password</Form.Label>
              <PasswordToggle id='account-password-new' required />
            </Col>
            <Col className='mb-3'>
              <Form.Label htmlFor='account-password-confirm'>Confirm password</Form.Label>
              <PasswordToggle id='account-password-confirm' required />
            </Col>
          </Row>
          <Button type='submit' variant='outline-primary'>Update password</Button>
        </Form>
        <div className='border-top pt-4 mt-3'></div>
        <h2 className='h5 pt-2 mb-4'>Where you&apos;re signed in on</h2>

        {/* Device */}
        <div className='d-flex border-bottom pb-3 mb-3'>
          <i className='fi-device-desktop fs-5 text-muted me-1'></i>
          <div className='ps-2'>
            <div className='fw-bold mb-1'>Mac &mdash; New York, USA</div>
            <span className='d-inline-block fs-sm border-end pe-2 me-2'>Chrome</span>
            <span className='fs-sm fw-bold text-success'>Active now</span>
          </div>
        </div>

        {/* Device */}
        <div className='d-flex border-bottom pb-3 mb-3'>
          <i className='fi-device-mobile fs-5 text-muted me-1'></i>
          <div className='ps-2'>
            <div className='fw-bold mb-1'>iPhone 12 &mdash; New York, USA</div>
            <span className='d-inline-block fs-sm border-end pe-2 me-2'>Finder App</span>
            <span className='fs-sm'>20 hours ago</span>
          </div>
          <div className='align-self-center ms-auto'>
            <Dropdown>
              <Dropdown.Toggle size='xs' variant='light btn-icon rounded-circle shadow-sm'>
                <i className='fi-dots-vertical'></i>
              </Dropdown.Toggle>
              <Dropdown.Menu align='end' className='pb-3 my-1'>
                <Dropdown.Item>Not you?</Dropdown.Item>
                <a href='#' className='d-block px-3'>Sign out</a>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Device */}
        <div className='d-flex border-bottom pb-3 mb-3'>
          <i className='fi-device-desktop fs-5 text-muted me-1'></i>
          <div className='ps-2'>
            <div className='fw-bold mb-1'>Windows 10.1 &mdash; New York, USA</div>
            <span className='d-inline-block fs-sm border-end pe-2 me-2'>Chrome</span>
            <span className='fs-sm'>November 15 at 8:42 AM</span>
          </div>
          <div className='align-self-center ms-auto'>
            <Dropdown>
              <Dropdown.Toggle size='xs' variant='light btn-icon rounded-circle shadow-sm'>
                <i className='fi-dots-vertical'></i>
              </Dropdown.Toggle>
              <Dropdown.Menu align='end' className='pb-3 my-1'>
                <Dropdown.Item>Not you?</Dropdown.Item>
                <a href='#' className='d-block px-3'>Sign out</a>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <a href='#' className='d-inline-block fw-bold text-decoration-none mt-3'>Sign out of all sessions</a>
      </RealEstateAccountLayout>
    </RealEstatePageLayout>
  )
}

export default AccountSecurityPage
