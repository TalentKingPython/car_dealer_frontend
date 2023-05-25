import { useState } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import RealEstateAccountLayout from '../../components/partials/RealEstateAccountLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Collapse from 'react-bootstrap/Collapse'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import FormControl from 'react-bootstrap/FormControl'
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

  // Email field state
  const [email, setEmail] = useState('annette_black@email.com')

  // Phone field state
  const [phone, setPhone] = useState('(302) 555-0107')

  // Company field state
  const [company, setCompany] = useState('')

  // Address field state
  const [address, setAddress] = useState('')

  // Socials collapse state
  const [socialOpen, setSocialOpen] = useState(false)


  return (
    <RealEstatePageLayout
      pageTitle='Account Personal Info'
      activeNav='Account'
      userLoggedIn
    >
      <RealEstateAccountLayout accountPageTitle='Personal Info'>
        <h1 className='h2'>Personal Info</h1>
        <div className='mb-2 pt-1'>Your personal info is 50% completed</div>
        <ProgressBar variant='warning' now={50} className='mb-4' style={{height: '.25rem'}} />
        <label className='form-label pt-2' htmlFor='account-bio'>Short bio</label>
        <Row className='pb-2'>

          {/* Bio textarea */}
          <Col lg={9} sm={8} className='mb-4'>
            <FormControl as='textarea' id='account-bio' rows={6} placeholder='Write your bio here. It will be displayed on your public profile.' />
          </Col>

          {/* Profile picture uploader */}
          <Col sm={4} lg={3} className='mb-4'>
            <FilePond
              files={profile}
              onupdatefiles={setProfile}
              // server='/api' {/* Configure your server here. See plugin docs */}
              name='profile'
              labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-muted mb-2"></i><br><span class="fw-bold">Change picture</span>'
              acceptedFileTypes={['image/png', 'image/jpeg']}
              stylePanelLayout='compact'
              imagePreviewHeight={160}
              imageCropAspectRatio='1:1'
              imageResizeTargetWidth={200}
              imageResizeTargetHeight={200}
              className='file-uploader bg-secondary'
            />
          </Col>
        </Row>
        <Accordion className='border rounded-3 p-3 mb-4'>

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

          {/* Company */}
          <div className='border-bottom pb-3 mb-3'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='pe-2'>
                <h2 className='form-label fw-bold'>Company name</h2>
                <p className='mb-0'>{company ? company : 'Not specified'}</p>
              </div>
              <CustomToggle eventKey='company' />
            </div>
            <Accordion.Collapse eventKey='company'>
              <FormControl
                className='mt-3'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder='Enter your company name'
              />
            </Accordion.Collapse>
          </div>

          {/* Address */}
          <div>
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
        </Accordion>

        {/* Socials */}
        <div className='pt-2'>
          <label className='form-label fw-bold mb-3'>Socials</label>
          <div className='d-flex align-items-center mb-3'>
            <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
              <i className='fi-facebook text-body'></i>
            </Button>
            <FormControl placeholder='Your Facebook account' />
          </div>
          <div className='d-flex align-items-center mb-3'>
            <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
              <i className='fi-linkedin text-body'></i>
            </Button>
            <FormControl placeholder='Your LinkedIn account' />
          </div>
          <div className='d-flex align-items-center mb-3'>
            <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
              <i className='fi-twitter text-body'></i>
            </Button>
            <FormControl placeholder='Your Twitter account' />
          </div>
          <Collapse in={socialOpen}>
            <div id='moreSocials'>
              <div className='d-flex align-items-center mb-3'>
                <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                  <i className='fi-instagram text-body'></i>
                </Button>
                <FormControl placeholder='Your Instagram account' />
              </div>
              <div className='d-flex align-items-center mb-3'>
                <Button size='xs' variant='icon btn-light shadow-sm rounded-circle pe-none flex-shrink-0 me-3'>
                  <i className='fi-pinterest text-body'></i>
                </Button>
                <FormControl placeholder='Your Pinterest account' />
              </div>
            </div>
          </Collapse>
          <a
            href='#'
            onClick={(e) => {
              e.preventDefault()
              setSocialOpen(!socialOpen)
            }}
            aria-controls='moreSocials'
            aria-expanded={socialOpen}
            className={`collapse-label d-inline-block fs-sm fw-bold text-decoration-none py-2${socialOpen ? '' : ' collapsed'}`}
          >
            <i className='fi-arrow-down me-2'></i>
            {socialOpen ? 'Show less' : 'Show more'}
          </a>
        </div>

        {/* Action buttons */}
        <div className='d-flex align-items-center justify-content-between border-top mt-4 pt-4 pb-1'>
          <Button className='px-3 px-sm-4'>Save changes</Button>
          <Button variant='link btn-sm px-0'>
            <i className='fi-trash me-2'></i>
            Delete account
          </Button>
        </div>
      </RealEstateAccountLayout>
    </RealEstatePageLayout>
  )
}

export default AccountInfoPage
