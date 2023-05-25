import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import JobBoardPostResumeLayout from '../../components/partials/JobBoardPostResumeLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

const PostResumeStepThreePage = () => (
    
  <JobBoardPageLayout
    pageTitle='Post Resume - Work Experience'
    activeNav='Account'
    userLoggedIn
  >
    <JobBoardPostResumeLayout
      activeStep='Experience'
      prevStep='/job-board/post-resume-2'
      nextStep='/job-board/post-resume-4'
    >
      <h2 className='h4 mb-4'>
        <i className='fi-briefcase text-primary mt-n1 me-2'></i>
        Work experience
      </h2>
      <Alert variant='info' className='d-flex mb-4'>
        <i className='fi-alert-circle me-2'></i>
        <div className='fs-sm'>Filling out 2 or more work experiences will double your chances of being contacted by an employer.</div>
      </Alert>

      <Form.Check
        type='checkbox'
        id='no-experience'
        value='No experience'
        label='I dont have any work experience yet'
        className='mb-4'
      />

      <Row className='gy-4'>
        <Col xs={12} as={Form.Group} controlId='pr-job-title'>
          <Form.Label>
            Job title
            <span className='text-danger'>&nbsp;*</span>
          </Form.Label>
          <Form.Control size='lg' placeholder='Enter company name' required/>
        </Col>
        <Col xs={12} sm={6} as={Form.Group} controlId='pr-company'>
          <Form.Label>
            Company name
            <span className='text-danger'>&nbsp;*</span>
          </Form.Label>
          <Form.Control size='lg' placeholder='Enter company name' required/>
        </Col>
        <Col xs={12} sm={6} as={Form.Group} controlId='pr-activity'>
          <Form.Label>
            Field of activity
            <span className='text-danger'>&nbsp;*</span>
          </Form.Label>
          <Form.Select size='lg' defaultValue='default' required>
            <option value='default' disabled>Choose field</option>
            <option value='Accounting'>Accounting</option>
            <option value='Marketing &amp; PR'>Marketing &amp; PR</option>
            <option value='Medicine'>Medicine</option>
            <option value='Agriculture'>Agriculture</option>
            <option value='Internet technology'>Internet technology</option>
            <option value='Security'>Security</option>
            <option value='Management'>Management</option>
            <option value='HoReCa'>HoReCa</option>
            <option value='Insurance'>Insurance</option>
          </Form.Select>
        </Col>
        <Col sm={6} as={Form.Group} controlId='pr-country'>
          <Form.Label>
            Country
          </Form.Label>
          <Form.Select size='lg' defaultValue='default'>
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
            City
          </Form.Label>
          <Form.Select size='lg' defaultValue='default'>
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
        <Col xs={12} lg={6}>
          <Form.Label>
            Study period from
            <span className='text-danger'>&nbsp;*</span>
          </Form.Label>
          <Row className='gx-2 gx-sm-3'>
            <Col xs={7} sm={8}>
              <Form.Select size='lg' defaultValue='default' required>
                <option value='default' disabled>Month</option>
                <option value='January'>January</option>
                <option value='February'>February</option>
                <option value='March'>March</option>
                <option value='April'>April</option>
                <option value='May'>May</option>
                <option value='June'>June</option>
                <option value='July'>July</option>
                <option value='August'>August</option>
                <option value='September'>September</option>
                <option value='October'>October</option>
                <option value='November'>November</option>
                <option value='December'>December</option>
              </Form.Select>
            </Col>
            <Col xs={5} sm={4}>
              <Form.Select size='lg' defaultValue='default' required>
                <option value='default' disabled>Year</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                <option value='2018'>2018</option>
                <option value='2017'>2017</option>
                <option value='2016'>2016</option>
                <option value='2015'>2015</option>
                <option value='2014'>2014</option>
                <option value='2013'>2013</option>
                <option value='2012'>2012</option>
                <option value='2011'>2011</option>
                <option value='2010'>2010</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={6}>
          <Form.Label>
            To
            <span className='text-danger'>&nbsp;*</span>
          </Form.Label>
          <Row className='gx-2 gx-sm-3'>
            <Col xs={7} sm={8}>
              <Form.Select size='lg' defaultValue='default' required>
                <option value='default' disabled>Month</option>
                <option value='January'>January</option>
                <option value='February'>February</option>
                <option value='March'>March</option>
                <option value='April'>April</option>
                <option value='May'>May</option>
                <option value='June'>June</option>
                <option value='July'>July</option>
                <option value='August'>August</option>
                <option value='September'>September</option>
                <option value='October'>October</option>
                <option value='November'>November</option>
                <option value='December'>December</option>
              </Form.Select>
            </Col>
            <Col xs={5} sm={4}>
              <Form.Select size='lg' defaultValue='default' required>
                <option value='default' disabled>Year</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                <option value='2018'>2018</option>
                <option value='2017'>2017</option>
                <option value='2016'>2016</option>
                <option value='2015'>2015</option>
                <option value='2014'>2014</option>
                <option value='2013'>2013</option>
                <option value='2012'>2012</option>
                <option value='2011'>2011</option>
                <option value='2010'>2010</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Form.Check
            type='checkbox'
            id='still-work'
            value='Still work'
            label='I currently work here'
          />
        </Col>
        <Col xs={12} as={Form.Group} controlId='pr-description'>
          <Form.Label>
            Description
            <span className='text-danger'>&nbsp;*</span>
          </Form.Label>
          <Form.Control as='textarea' size='lg' rows='5' placeholder='Describe your position and any significant accomplishments' required/>
          <div className='form-text pt-1'>8,000 characters left</div>
        </Col>
        <Col xs={12}>
          <Button variant='link text-primary' className='px-0'>
            <i className='fi-plus me-2'></i>
            Add experience
          </Button>
        </Col>
      </Row>
    </JobBoardPostResumeLayout>
  </JobBoardPageLayout>
)

export default PostResumeStepThreePage
