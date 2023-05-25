import { useState } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import JobBoardPostResumeLayout from '../../components/partials/JobBoardPostResumeLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Collapse from 'react-bootstrap/Collapse'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const PostResumeStepOnePage = () => {

  // Birth date picker
  const [startDate, setStartDate] = useState(new Date())

  // More socials collapse
  const [socialsOpen, setSocialsOpen] = useState(false)

  // Categories checkboxes
  const categories = [
    { value: 'Accounting', checked: false },
    { value: 'Management', checked: false },
    { value: 'Music', checked: false },
    { value: 'Mass media & publishing', checked: false },
    { value: 'Marketing & PR', checked: true },
    { value: 'HoReCa', checked: false },
    { value: 'Logistics', checked: false },
    { value: 'Insurance', checked: false },
    { value: 'Medicine', checked: false },
    { value: 'Design & creativity', checked: true },
    { value: 'Education & science', checked: false },
    { value: 'Construction', checked: false },
    { value: 'Agriculture', checked: false },
    { value: 'Fitness & sports', checked: false },
    { value: 'Sales & purchases', checked: false },
    { value: 'Architecture', checked: false },
    { value: 'Internet technology', checked: true },
    { value: 'Beauty', checked: false },
    { value: 'Industry', checked: false },
    { value: 'HR management', checked: false },
    { value: 'Security', checked: false },
    { value: 'Culture', checked: false },
    { value: 'Transportation', checked: false },
    { value: 'Law', checked: false }
  ]

  // Job type checkboxes
  const jobType = [
    [
      { value: 'Full-time', checked: false },
      { value: 'Part-time', checked: true },
      { value: 'Remote', checked: false }
    ],
    [
      { value: 'Temporary', checked: true },
      { value: 'Contract', checked: false },
      { value: 'Internship', checked: false }
    ]
  ]

  return (
    <JobBoardPageLayout
      pageTitle='Post Resume - Basic Info'
      activeNav='Account'
      userLoggedIn
    >
      <JobBoardPostResumeLayout
        activeStep='Basic info'
        nextStep='/job-board/post-resume-2'
      >
        <h2 className='h4 mb-4'>
          <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
          Basic info
        </h2>

        <Row xs={1} sm={2} className='gy-4 mb-4'>
          <Col as={Form.Group} controlId='pr-fn'>
            <Form.Label>
              First name
              <span className='text-danger'>&nbsp;*</span>
            </Form.Label>
            <Form.Control size='lg' placeholder='Enter your first name' defaultValue='Annette' required/>
          </Col>
          <Col as={Form.Group} controlId='pr-sn'>
            <Form.Label>
              Second name
              <span className='text-danger'>&nbsp;*</span>
            </Form.Label>
            <Form.Control size='lg' placeholder='Enter your second name' defaultValue='Black' required/>
          </Col>
          <Col as={Form.Group} controlId='pr-email'>
            <Form.Label>
              Email address
              <span className='text-danger'>&nbsp;*</span>
            </Form.Label>
            <Form.Control size='lg' type='email' placeholder='Enter your email address' defaultValue='annette_black@email.com' required/>
          </Col>
          <Col as={Form.Group} controlId='pr-phone'>
            <Form.Label>
              Phone
            </Form.Label>
            <Form.Control size='lg' type='tel' placeholder='Enter your phone number' defaultValue='(302) 555-0107'/>
          </Col>
          <Col as={Form.Group} controlId='pr-birth'>
            <Form.Label>
              Date of birth
              <span className='text-danger'>&nbsp;*</span>
            </Form.Label>
            <InputGroup>
              <Form.Control
                as={DatePicker}
                size='lg'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText='Choose date'
                className='rounded pe-5'
              />
              <i className='fi-calendar position-absolute top-50 end-0 translate-middle-y me-3'></i>
            </InputGroup>
          </Col>
        </Row>

        {/* Location */}
        <Row className='gy-4 mb-4'>
          <Col sm={6} as={Form.Group} controlId='pr-country'>
            <Form.Label>
              Country where you want to work
              <span className='text-danger'>&nbsp;*</span>
            </Form.Label>
            <Form.Select size='lg' defaultValue='default' required>
              <option value='default' disabled>Choose country</option>
              <option value='Australia'>Australia</option>
              <option value='Belgium'>Belgium</option>
              <option value='Canada'>Canada</option>
              <option value='China'>China</option>
              <option value='Denmark'>Denmark</option>
              <option value='France'>France</option>
              <option value='Germany'>Germany</option>
              <option value='Japan'>Japan</option>
              <option value='UK'>UK</option>
              <option value='USA'>USA</option>
            </Form.Select>
          </Col>
          <Col sm={6} as={Form.Group} controlId='pr-city'>
            <Form.Label>
              City where you want to work
              <span className='text-danger'>&nbsp;*</span>
            </Form.Label>
            <Form.Select size='lg' defaultValue='default' required>
              <option value='default' disabled>Choose city</option>
              <option value='Beijing'>Beijing</option>
              <option value='Berlin'>Berlin</option>
              <option value='Brussels'>Brussels</option>
              <option value='Copenhagen'>Copenhagen</option>
              <option value='London'>London</option>
              <option value='Ottawa'>Ottawa</option>
              <option value='Paris'>Paris</option>
              <option value='Sydney'>Sydney</option>
              <option value='Tokyo'>Tokyo</option>
              <option value='Washington'>Washington</option>
            </Form.Select>
          </Col>
          <Col xs={12} as={Form.Group} controlId='pr-address'>
            <Form.Label>
              Your address
            </Form.Label>
            <Form.Control size='lg' placeholder='Enter the address'/>
          </Col>
        </Row>

        {/* Socials */}
        <label className='form-label fw-bold mb-3'>Socials</label>
        <div className='mt-n3'>
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

          <hr className='my-4' />

          {/* Position */}
          <Form.Group className='mb-4' controlId='pr-position'>
            <Form.Label className='mb-2 fw-bold'>
              Position you want to work on
            </Form.Label>
            <Form.Control size='lg' placeholder='Indicate the position'/>
          </Form.Group>

          {/* Categories checkboxes */}
          <h6 className='mb-2 pb-1 fs-base'>Choose categories for posting resume</h6>
          <Row xs={1} sm={2} md={4} className='gx-3 gx-lg-4 mb-4'>
            {categories.map((category, indx) => (
              <Col key={indx}>
                <Form.Check
                  type='checkbox'
                  id={`pr-category-${indx}`}
                  value={category.value}
                  label={category.value}
                  defaultChecked={category.checked}
                />
              </Col>
            ))}
          </Row>

          {/* Job type checkboxes */}
          <h6 className='mb-2 pb-1 fs-base'>Job type</h6>
          <Row xs={1} sm={2} md={4} className='gx-3 gx-lg-4 mb-4'>
            {jobType.map((type, indx) => (
              <Col key={indx}>
                {type.map((check, indx) => (
                  <Form.Check
                    key={indx}
                    type='checkbox'
                    id={`pr-${check.value.toLowerCase().replace(/\s/g, '-')}-${indx}`}
                    value={check.value}
                    label={check.value}
                    defaultChecked={check.checked}
                  />
                ))}
              </Col>
            ))}
          </Row>

          {/* Salary range */}
          <h6 className='mb-2 pb-1 fs-base'>Salary range</h6>
          <Row className='gy-3 gx-2 gx-lg-3 gx-xl-4'>
            <Col md={2}>
              <Form.Select size='lg' defaultValue='default' required>
                <option value='default'>&#36;</option>
                <option value='eur'>&#8364;</option>
                <option value='gbp'>&#163;</option>
                <option value='jpy'>&#165;</option>
              </Form.Select>
            </Col>
            <Col md={7}>
              <div className='d-flex align-items-center'>
                <Form.Control size='lg' type='number' step='100' min='300' placeholder='from'/>
                <div className='mx-2'>&mdash;</div>
                <Form.Control size='lg' type='number' step='100' min='500' placeholder='to'/>
              </div>
            </Col>
            <Col md={3}>
              <Form.Select size='lg' defaultValue='default' required>
                <option value='default'>monthly</option>
                <option value='per hour'>per hour</option>
                <option value='weekly'>weekly</option>
                <option value='annually'>annually</option>
              </Form.Select>
            </Col>
          </Row>
        </div>
      </JobBoardPostResumeLayout>
    </JobBoardPageLayout>
  )
}

export default PostResumeStepOnePage
