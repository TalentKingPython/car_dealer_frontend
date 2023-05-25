import { useState } from 'react'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import CarFinderAccountLayout from '../../components/partials/CarFinderAccountLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import FormControl from 'react-bootstrap/FormControl'
import FormSelect from 'react-bootstrap/FormSelect'
import Button from 'react-bootstrap/Button'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

const AccountInfoPage = () => {

  // Register Filepond plugins
  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
  )

  // Init Filepond state
  const [profile, setProfile] = useState([])

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
          className='nav-link nav-link-light py-0'
          onClick={handleClick}
        >
          <i className='fi-edit'></i>
        </a>
      </OverlayTrigger>
    )
  }

  // Name field state
  const [name, setName] = useState('Robert Fox')

  // Gender field state
  const [gender, setGender] = useState('')

  // Email field state
  const [email, setEmail] = useState('robert_fox@email.com')

  // Phone field state
  const [phone, setPhone] = useState('(302) 555-0107')

  // Address field state
  const [address, setAddress] = useState('')
  

  return (
    <CarFinderPageLayout
      pageTitle='Account Personal Info'
      activeNav='Account'
      userLoggedIn
    >
      <CarFinderAccountLayout accountPageTitle='Personal Info'>
        <h1 className='h2 text-light'>Personal Info</h1>
        <div className='text-light mb-2 pt-1'>Your personal info is 50% completed</div>
        <ProgressBar variant='warning' now={50} className='progress-light mb-4' style={{height: '.25rem'}} />
        <Row className='pt-2'>
          <Col sm={8} md={12} lg={9} className='mb-2 mb-m-4'>
            <Accordion className='border border-light rounded-3 p-3 mb-4'>

              {/* Name */}
              <div className='border-bottom border-light pb-3 mb-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='opacity-75 pe-2'>
                    <h2 className='form-label text-light fw-bold'>Full name</h2>
                    <p className='text-light mb-0'>{name ? name : 'Not specified'}</p>
                  </div>
                  <CustomToggle eventKey='name' />
                </div>
                <Accordion.Collapse eventKey='name'>
                  <FormControl
                    className='form-control-light mt-3'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your name'
                  />
                </Accordion.Collapse>
              </div>

              {/* Gender */}
              <div className='border-bottom border-light pb-3 mb-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='opacity-75 pe-2'>
                    <h2 className='form-label text-light fw-bold'>Gender</h2>
                    <p className='text-light mb-0'>{gender ? gender : 'Not specified'}</p>
                  </div>
                  <CustomToggle eventKey='gender' />
                </div>
                <Accordion.Collapse eventKey='gender'>
                  <FormSelect className='form-select-light mt-3' value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value='Not specified'>Choose gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </FormSelect>
                </Accordion.Collapse>
              </div>

              {/* Email */}
              <div className='border-bottom border-light pb-3 mb-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='opacity-75 pe-2'>
                    <h2 className='form-label text-light fw-bold'>Email</h2>
                    <p className='text-light mb-0'>{email ? email : 'Not specified'}</p>
                  </div>
                  <CustomToggle eventKey='email' />
                </div>
                <Accordion.Collapse eventKey='email'>
                  <FormControl
                    type='email'
                    className='form-control-light mt-3'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address'
                  />
                </Accordion.Collapse>
              </div>

              {/* Phone number */}
              <div className='border-bottom border-light pb-3 mb-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='opacity-75 pe-2'>
                    <h2 className='form-label text-light fw-bold'>Phone number</h2>
                    <p className='text-light mb-0'>{phone ? phone : 'Not specified'}</p>
                  </div>
                  <CustomToggle eventKey='phone' />
                </div>
                <Accordion.Collapse eventKey='phone'>
                  <FormControl
                    type='tel'
                    className='form-control-light mt-3'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Enter your phone number'
                  />
                </Accordion.Collapse>
              </div>

              {/* Address */}
              <div className='d-flex align-items-center justify-content-between'>
                <div className='opacity-75 pe-2'>
                  <h2 className='form-label text-light fw-bold'>Address</h2>
                  <p className='text-light mb-0'>{address ? address : 'Not specified'}</p>
                </div>
                <CustomToggle eventKey='address' />
              </div>
              <Accordion.Collapse eventKey='address'>
                <FormControl
                  className='form-control-light mt-3'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder='Enter your address'
                />
              </Accordion.Collapse>
            </Accordion>
          </Col>
          <Col sm={4} md={12} lg={3} className='mb-4'>
            <FilePond
              files={profile}
              onupdatefiles={setProfile}
              // server='/api' {/* Configure your server here. See plugin docs */}
              name='profile'
              labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-light mb-2"></i><br><span class="fw-bold text-light opacity-70">Change picture</span>'
              acceptedFileTypes={['image/png', 'image/jpeg']}
              stylePanelLayout='compact'
              imagePreviewHeight={160}
              imageCropAspectRatio='1:1'
              imageResizeTargetWidth={200}
              imageResizeTargetHeight={200}
              className='file-uploader border-light bg-faded-light'
            />
            <div className='pt-4 pb-2 py-lg-5'>
              <h6 className='text-light mb-2'>Who can see my profile?</h6>
              <p className='fs-sm text-light opacity-70 mb-0'>Your profile is private. No one else will see it untill a reservation is confirmed.</p>
            </div>
          </Col>
        </Row>

        {/* Action buttons */}
        <Row>
          <Col lg={9}>
            <div className='d-flex align-items-center justify-content-between pb-1'>
              <Button>Save changes</Button>
              <Button size='sm' variant='light btn-link px-0'>
                <i className='fi-trash me-2'></i>
                Delete account
              </Button>
            </div>
          </Col>
        </Row>
      </CarFinderAccountLayout>
    </CarFinderPageLayout>
  )
}

export default AccountInfoPage
