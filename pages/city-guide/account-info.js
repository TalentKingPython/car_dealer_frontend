import { useEffect, useState } from 'react'
import CityGuidePageLayout from '../../components/partials/CityGuidePageLayout'
import CityGuideAccountHeader from '../../components/partials/CityGuideAccountHeader'
import CityGuideAccountNav from '../../components/partials/CityGuideAccountNav'
import PasswordToggle from '../../components/PasswordToggle'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AccountInfoPage = () => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
  })


  // Custom accordion toggle
  const CustomToggle = ({ eventKey }) => {
    const handleClick = useAccordionButton(eventKey, (e) => e.preventDefault())
    return (
      <OverlayTrigger
        placement='top'
        overlay={<Tooltip>Edit</Tooltip>}
      >
        <a
          href='#'
          className='nav-link py-0'
          onClick={handleClick}
        >
          <i className='fi-edit'></i>
        </a>
      </OverlayTrigger>
    )
  }

  // Name field state
  const [name, setName] = useState('Annette Black')

  // Gender field state
  const [gender, setGender] = useState('')

  // Date of birth field state
  const [birthdate, setBirthdate] = useState(null)

  // Email field state
  const [email, setEmail] = useState('annette_black@email.com')

  // Phone field state
  const [phone, setPhone] = useState('(302) 555-0107')

  // Address field state
  const [address, setAddress] = useState('')

  // Password field state
  const [password, setPassword] = useState('hidden@password')


  return (
    <CityGuidePageLayout
      pageTitle='Account - Personal Info'
      activeNav='Account'
      userLoggedIn
    >
      
      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Page header */}
        <CityGuideAccountHeader breadcrumb='Personal info' />
        
        <Card className='shadow-sm'>
          <Card.Body className='p-4 p-md-5'>

            {/* Account navigation */}
            <CityGuideAccountNav activeNav='/city-guide/account-info' />

            {/* Page content */}
            <h1 className='h3 mb-4 pt-2'>Personal Info</h1>
            <Accordion className='border rounded-3 p-3 mb-2'>

              {/* Name */}
              <div className='border-bottom pb-3 mb-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='pe-2'>
                    <h2 className='form-label fw-bold'>Full name</h2>
                    <p className='mb-0'>{name ? name : 'Not specified'}</p>
                  </div>
                  <CustomToggle eventKey='name' />
                </div>
                <Accordion.Collapse eventKey='name'>
                  <FormControl
                    className='mt-3'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your name'
                  />
                </Accordion.Collapse>
              </div>

              {/* Gender */}
              <div className='border-bottom pb-3 mb-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='pe-2'>
                    <h2 className='form-label fw-bold'>Gender</h2>
                    <p className='mb-0'>{gender ? gender : 'Not specified'}</p>
                  </div>
                  <CustomToggle eventKey='gender' />
                </div>
                <Accordion.Collapse eventKey='gender'>
                  <FormSelect className='mt-3' value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value='Not specified'>Choose gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </FormSelect>
                </Accordion.Collapse>
              </div>

              {/* Date of birth */}
              <div className='border-bottom pb-3 mb-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='pe-2'>
                    <h2 className='form-label fw-bold'>Date of birth</h2>
                    <p className='mb-0'>{birthdate ? moment(birthdate).format('MMMM D, yyyy') : 'Not specified'}</p>
                  </div>
                  <CustomToggle eventKey='birthdate' />
                </div>
                <Accordion.Collapse eventKey='birthdate'>
                  <div className='position-relative mt-3'>
                    <FormControl
                      as={DatePicker}
                      selected={birthdate}
                      onChange={(date) => setBirthdate(date)}
                      dateFormat='MMMM d, yyyy'
                      placeholderText='Choose date'
                      className='rounded pe-5'
                    />
                    <i className='fi-calendar position-absolute top-50 end-0 translate-middle-y me-3'></i>
                  </div>
                </Accordion.Collapse>
              </div>

              {/* Email */}
              <div className='border-bottom pb-3 mb-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='pe-2'>
                    <h2 className='form-label fw-bold'>Email</h2>
                    <p className='mb-0'>{email ? email : 'Not specified'}</p>
                  </div>
                  <CustomToggle eventKey='email' />
                </div>
                <Accordion.Collapse eventKey='email'>
                  <FormControl
                    type='email'
                    className='mt-3'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address'
                  />
                </Accordion.Collapse>
              </div>

              {/* Phone number */}
              <div className='border-bottom pb-3 mb-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='pe-2'>
                    <h2 className='form-label fw-bold'>Phone number</h2>
                    <p className='mb-0'>{phone ? phone : 'Not specified'}</p>
                  </div>
                  <CustomToggle eventKey='phone' />
                </div>
                <Accordion.Collapse eventKey='phone'>
                  <FormControl
                    type='tel'
                    className='mt-3'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Enter your phone number'
                  />
                </Accordion.Collapse>
              </div>

              {/* Address */}
              <div className='border-bottom pb-3 mb-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='pe-2'>
                    <h2 className='form-label fw-bold'>Address</h2>
                    <p className='mb-0'>{address ? address : 'Not specified'}</p>
                  </div>
                  <CustomToggle eventKey='address' />
                </div>
                <Accordion.Collapse eventKey='address'>
                  <FormControl
                    className='mt-3'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Enter your address'
                  />
                </Accordion.Collapse>
              </div>

              {/* Password */}
              <div className='d-flex align-items-center justify-content-between'>
                <div className='pe-2'>
                  <h2 className='form-label fw-bold'>Password</h2>
                  <p className='mb-0'>{password ? password.replace(/./gi, '*') : 'Not specified'}</p>
                </div>
                <CustomToggle eventKey='password' />
              </div>
              <Accordion.Collapse eventKey='password'>
                <PasswordToggle
                  className='mt-3'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter password'
                />
              </Accordion.Collapse>
            </Accordion>
            <div className='d-flex align-items-center justify-content-between mt-4'>
              <Button variant='primary rounded-pill px-3 px-sm-4'>Save changes</Button>
              <Button variant='link btn-sm px-0'>
                <i className='fi-trash me-2'></i>
                Delete account
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </CityGuidePageLayout>
  )
}

export default AccountInfoPage
