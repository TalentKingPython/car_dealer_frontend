import { useState, useRef } from 'react'
import JobBoardPageLayout from '../../components/partials/JobBoardPageLayout'
import JobBoardPostResumeLayout from '../../components/partials/JobBoardPostResumeLayout'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const PostResumeStepFivePage = () => {

  // Enetered skills array
  const entredSkills = [
    'User Interface',
    'Typography',
    'User Experience',
    'Illustration'
  ]

  // Add new skill
  const [skills, setSkills] = useState(entredSkills)

  const inputRef = useRef(null)

  const addNewSkillHandler = skill => {
    if (!skills.includes(skill)) {
      const newSkills = [...skills]
      newSkills.unshift(skill)
      setSkills(newSkills)
    }
  }

  // Recommended skills array
  const recommendedSkills = [
    'CSS',
    'Usability Testing',
    'InDesign',
    'Adobe After Effects',
    'Premiere Pro',
    'Visual Design',
    'HTML',
    'Logo Development',
    'Mobile Applications',
    'Researching',
    'Adobe Photoshop',
    'Adobe Illustrator'
  ]

  return (
    <JobBoardPageLayout
      pageTitle='Post Resume - Skills'
      activeNav='Account'
      userLoggedIn
    >
      <JobBoardPostResumeLayout
        activeStep='Skills'
        prevStep='/job-board/post-resume-3'
        nextStep='/job-board/post-resume-5'
      >
        <h2 className='h4 mb-4'>
          <i className='fi-star text-primary mt-n1 me-2'></i>
          Skills
        </h2>

        <Form.Group controlId='pr-add-skill' className='mb-4'>
          <Form.Label>Add skill</Form.Label>
          <div className='d-flex flex-column flex-sm-row'>
            <Form.Control
              ref={inputRef}
              size='lg'
              placeholder='Enter skill here'
              className='w-100 me-sm-3 me-md-4 mb-3 mb-sm-0'
              onKeyUp={e => {
                if (e.key === 'Enter' || e.keyCode === 13) {
                  addNewSkillHandler(e.target.value)
                }
              }}
            />
            <Button
              size='lg'
              variant='primary rounded-pill'
              onClick={() => addNewSkillHandler(inputRef.current.value)}
            >Add</Button>
          </div>
          <div className='form-text pt-1'>You can add 26 more skills</div>
        </Form.Group>

        {/* Entered skills */}
        <div className='d-flex flex-wrap mt-n2 ms-n2'>
          {skills.map((skill, indx) => (
            <Button key={indx} as='span' size='xs' variant='success text-light rounded-pill' className='fs-sm mt-2 ms-2 me-1 mb-1 pe-none'>
              {skill}
              <i className='fi-check fs-xs ms-2'></i>
            </Button>
          ))}
        </div>

        <hr className='my-4'/>

        {/* Recommended skills */}
        <h6 className='fs-base py-2 mb-3'>Recommended skills based on your profile info:</h6>
        <div className='d-flex flex-wrap mt-n2 ms-n2 mb-4'>
          {recommendedSkills.map((skill, indx) => (
            <Button key={indx} as='span' size='xs' variant='outline-secondary text-nav rounded-pill' className='fs-sm mt-2 ms-2 me-1 mb-1 pe-none'>
              {skill}
              <i className='fi-plus fs-xs ms-2'></i>
            </Button>
            ))}
        </div>
        <Form.Check
          type='checkbox'
          id='no-skills'
          value='No skills'
          label='I do not want to enter any skills at this time'
        />
      </JobBoardPostResumeLayout>
    </JobBoardPageLayout>
  )
}

export default PostResumeStepFivePage
