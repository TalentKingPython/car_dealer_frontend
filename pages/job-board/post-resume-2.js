import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import JobBoardPostResumeLayout from '../../components/partials/JobBoardPostResumeLayout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const PostResumeStepTwoPage = () => (

  <JobBoardPageLayout
    pageTitle='Post Resume - Education'
    activeNav='Account'
    userLoggedIn
  >
    <JobBoardPostResumeLayout
      activeStep='Education'
      prevStep='/job-board/post-resume-1'
      nextStep='/job-board/post-resume-3'
    >
      <h2 className='h4 mb-4'>
        <i className='fi-education text-primary mt-n1 me-2'></i>
        Education
      </h2>
      <Row className='gy-4'>
        <Col xs={12} sm={6} as={Form.Group} controlId='pr-level'>
          <Form.Label>
            Level of education
            <span className='text-danger'>&nbsp;*</span>
          </Form.Label>
          <Form.Select size='lg' defaultValue='default' required>
            <option value='default' disabled>Choose your level of education</option>
            <option value='Associate Degree'>Associate Degree</option>
            <option value='Bachelors Degree'>Bachelor&apos;s Degree</option>
            <option value='Graduate Degree'>Graduate Degree</option>
            <option value='Professional Degree'>Professional Degree</option>
            <option value='Master Degree'>Master Degree</option>
            <option value='PhD'>PhD</option>
          </Form.Select>
        </Col>
        <Col xs={12} sm={6} as={Form.Group} controlId='pr-study-field'>
          <Form.Label>
            Field of study
            <span className='text-danger'>&nbsp;*</span>
          </Form.Label>
          <Form.Control size='lg' placeholder='Enter field of study' required/>
        </Col>
        <Col xs={12} sm={6} as={Form.Group} controlId='pr-college'>
          <Form.Label>
            College / University
            <span className='text-danger'>&nbsp;*</span>
          </Form.Label>
          <Form.Control size='lg' placeholder='Enter your college name' required/>
        </Col>
        <Col xs={12} sm={6} as={Form.Group} controlId='pr-country'>
          <Form.Label>
            Country &amp; city
            <span className='text-danger'>&nbsp;*</span>
          </Form.Label>
          <Form.Control size='lg' placeholder='Enter country, city of your college' required/>
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
            id='still-visiting'
            value='Still visiting'
            label='I currently go here'
          />
        </Col>
        <Col xs={12}>
          <Button variant='link text-primary' className='px-0'>
            <i className='fi-plus me-2'></i>
            Add education
          </Button>
        </Col>
      </Row>
    </JobBoardPostResumeLayout>
  </JobBoardPageLayout>
)

export default PostResumeStepTwoPage
