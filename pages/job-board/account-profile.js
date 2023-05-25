import { useState } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import JobBoardAccountLayout from '../../components/partials/JobBoardAccountLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import PasswordToggle from '../../components/PasswordToggle'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AccountProfilePage = () => {

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

  // Email field state
  const [email, setEmail] = useState('annette_black@email.com')

  // Password field state
  const [password, setPassword] = useState('hidden@password')

  // Name field state
  const [name, setName] = useState('Annette Black')

  // Gender field state
  const [gender, setGender] = useState('Female')

  // Date of birth field state
  const [birthdate, setBirthdate] = useState(new Date('06/07/1995'))

  // Phone field state
  const [phone, setPhone] = useState('(302) 555-0107')

  // Address field state
  const [address, setAddress] = useState('')

  // More socials collapse
  const [socialsOpen, setSocialsOpen] = useState(false)

  // Account field state
  const [account, setAccount] = useState('Job seeker (looking for a job)')

  // Account field state
  const [authentication, setAuthentication] = useState('')

  return (
    <JobBoardPageLayout
      pageTitle='Account - Profile Settings'
      activeNav='Account'
      userLoggedIn
    >
      <JobBoardAccountLayout
        accountPageTitle='Profile Settings'
        activeAccountNav='/job-board/account-profile'
      >

        {/* Authorization info */}
        <Row className='pt-4 mt-3'>
          <Col xs={12} lg={3}>
            <h2 className='h4'>Authorization info</h2>
          </Col>
          <Col xs={12} lg={9}>
            <Accordion>
              <div className='border rounded-3 p-3'>

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

                {/* Password */}
                <div>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='pe-2'>
                      <h2 className='form-label fw-bold'>Password</h2>
                      <p className='mb-0'>{password ? password.replace(/./gi, '*') : 'Not specified'}</p>
                    </div>
                    <CustomToggle eventKey='password' />
                  </div>
                  <Accordion.Collapse eventKey='password'>
                    <>
                      <Row as={Form.Group} controlId='ap-current-password' className='gx-3 align-items-center my-3' >
                        <Form.Label column xs={12} sm={4} md={3}>
                          Current password:
                        </Form.Label>
                        <Col xs={12} sm={8} md={9}>
                          <PasswordToggle
                            id='ap-current-password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter current password'
                          />
                        </Col>
                      </Row>
                      <Row as={Form.Group} controlId='ap-new-password' className='gx-3 align-items-center my-3' >
                        <Form.Label column xs={12} sm={4} md={3}>
                          New password:
                        </Form.Label>
                        <Col xs={12} sm={8} md={9}>
                          <PasswordToggle id='ap-new-password' placeholder='Enter new password' />
                        </Col>
                      </Row>
                      <Row as={Form.Group} controlId='ap-new-password-confirm' className='gx-3 align-items-center' >
                        <Form.Label column xs={12} sm={4} md={3}>
                          Conform new password:
                        </Form.Label>
                        <Col xs={12} sm={8} md={9}>
                          <PasswordToggle id='ap-new-password-confirm' placeholder='Confirm new password' />
                        </Col>
                      </Row>
                    </>
                  </Accordion.Collapse>
                </div>
              </div>
            </Accordion>
          </Col>
        </Row>

        {/* Personal details */}
        <Row className='pt-4 mt-3'>
          <Col xs={12} lg={3}>
            <h2 className='h4'>Personal details</h2>
          </Col>
          <Col xs={12} lg={9}>
            <Accordion>
              <div className='border rounded-3 p-3'>

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
                      placeholder='Enter your email address'
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
                    <div className='mt-3 position-relative'>
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
                      placeholder='Enter address'
                    />
                  </Accordion.Collapse>
                </div>

                {/* Socials */}
                <div>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='pe-2'>
                      <h2 className='form-label fw-bold'>Socials</h2>
                      <p className='mb-0'>Not specified</p>
                    </div>
                    <CustomToggle eventKey='socials' />
                  </div>
                  <Accordion.Collapse eventKey='socials'>
                    <>
                      <div className='d-flex align-items-center mt-3'>
                        <div className='btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                          <i className='fi-facebook text-body'></i>
                        </div>
                        <Form.Control type='url' placeholder='Your Facebook account'/>
                      </div>
                      <div className='d-flex align-items-center mt-3'>
                        <div className='btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                          <i className='fi-linkedin text-body'></i>
                        </div>
                        <Form.Control type='url' placeholder='Your LinkedIn account'/>
                      </div>
                      <div className='d-flex align-items-center mt-3'>
                        <div className='btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                          <i className='fi-twitter text-body'></i>
                        </div>
                        <Form.Control type='url' placeholder='Your Twitter account'/>
                      </div>
                      <Collapse in={socialsOpen}>
                        <div id='moreSocials'>
                          <div className='d-flex align-items-center pt-3'>
                            <div className='btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                              <i className='fi-instagram text-body'></i>
                            </div>
                            <Form.Control type='url' placeholder='Your Instagram account'/>
                          </div>
                          <div className='d-flex align-items-center pt-3'>
                            <div className='btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                              <i className='fi-behance text-body'></i>
                            </div>
                            <Form.Control type='url' placeholder='Your Behance account'/>
                          </div>
                        </div>
                      </Collapse>
                      <Button size='sm' variant='link'
                        onClick={(e) => {
                          e.preventDefault()
                          setSocialsOpen(!socialsOpen)
                        }}
                        aria-controls='moreSocials'
                        aria-expanded={socialsOpen}
                        className={`collapse-label${socialsOpen ? '' : ' collapsed'} mt-3 px-0 text-primary`}
                      >
                        <i className='fi-arrow-down me-1'></i>
                        {socialsOpen ? 'Show less' : 'Show more'}
                      </Button>
                    </>
                  </Accordion.Collapse>
                </div>

              </div>
            </Accordion>
          </Col>
        </Row>

        {/* Account settings */}
        <Row className='pt-4 mt-3'>
          <Col xs={12} lg={3}>
            <h2 className='h4'>Account settings</h2>
          </Col>
          <Col xs={12} lg={9}>
            <Accordion>
              <div className='border rounded-3 p-3'>

                {/* Account type */}
                <div className='border-bottom pb-3 mb-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='pe-2'>
                      <h2 className='form-label fw-bold'>Account type</h2>
                      <p className='mb-0'>{account ? account : 'Not specified'}</p>
                    </div>
                    <CustomToggle eventKey='account' />
                  </div>
                  <Accordion.Collapse eventKey='account'>
                    <FormSelect className='mt-3' value={account} onChange={(e) => setAccount(e.target.value)}>
                      <option value='Not specified'>Select account type</option>
                      <option value='Employer (looking for an employee)'>Employer (looking for an employee)</option>
                      <option value='Job seeker (looking for a job)'>Job seeker (looking for a job)</option>
                    </FormSelect>
                  </Accordion.Collapse>
                </div>

                {/* Two-factor authentication */}
                <div>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='pe-2'>
                      <h2 className='form-label fw-bold'>Two-factor authentication</h2>
                      <p className='mb-0'>{authentication ? authentication : 'Inactive'}</p>
                    </div>
                    <CustomToggle eventKey='authentication' />
                  </div>
                  <Accordion.Collapse eventKey='authentication'>
                    <FormSelect className='mt-3' value={authentication} onChange={(e) => setAuthentication(e.target.value)}>
                      <option value='' disabled>Enable / disable two-factor authentication</option>
                      <option value='Inactive'>Disable</option>
                      <option value='Active'>Enable</option>
                    </FormSelect>
                  </Accordion.Collapse>
                </div>
              </div>
            </Accordion>
          </Col>
        </Row>

        <Row className='pt-4 mt-2'>
          <Col xs={12} lg={{span: 9, offset: 3}}>
            <div className='d-flex align-items-center justify-content-between'>
              <Button variant='primary rounded-pill' className='px-3 px-sm-4' type='submit'>Save changes</Button>
              <Button size='sm' variant='link' className='px-0'>
                <i className='fi-trash me-2'></i>
                Delete account
              </Button>
            </div>
          </Col>
        </Row>

      </JobBoardAccountLayout>
    </JobBoardPageLayout>
  )
}

export default AccountProfilePage