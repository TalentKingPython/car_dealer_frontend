import { useState } from 'react'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import ImageLoader from '../ImageLoader'
import PasswordToggle from '../PasswordToggle'

const SignUpModalDark = ({ onSwap, pillButtons, ...props }) => {

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
    <Modal {...props} className='signup-modal' contentClassName='bg-dark border-light'>
      <Modal.Body className='px-0 py-2 py-sm-0'>
        <CloseButton
          variant='white'
          onClick={props.onHide}
          aria-label='Close modal'
          className='position-absolute top-0 end-0 mt-3 me-3'
        />
        <div className='row mx-0 align-items-center'>
          <div className='col-md-6 border-end-md border-light p-4 p-sm-5'>
            <h2 className='h3 text-light mb-4 mb-sm-5'>Join Finder.<br />Get premium benefits:</h2>
            <ul className='text-light list-unstyled mb-4 mb-sm-5'>
              <li className='d-flex mb-2'>
                <i className='fi-check-circle text-primary mt-1 me-2'></i>
                <span>Add and promote your listings</span>
              </li>
              <li className='d-flex mb-2'>
                <i className='fi-check-circle text-primary mt-1 me-2'></i>
                <span>Easily manage your wishlist</span>
              </li>
              <li className='d-flex mb-0'>
                <i className='fi-check-circle text-primary mt-1 me-2'></i>
                <span>Leave reviews</span>
              </li>
            </ul>
            <div className='d-flex justify-content-center'>
              <ImageLoader
                src='/images/signin-modal/signup-dark.svg'
                width={344}
                height={404}
                alt='Illusration'
              />
            </div>
            <div className='text-light mt-sm-4 pt-md-3'><span className='opacity-60'>Already have an account?</span> <a href='#' className='text-light' onClick={onSwap}>Sign in</a></div>
          </div>
          <div className='col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5'>
            <Button variant={`outline-info ${pillButtons ? 'rounded-pill' : ''} w-100 mb-3`}>
              <i className='fi-google fs-lg me-1'></i>
              Sign in with Google
            </Button>
            <Button variant={`outline-info ${pillButtons ? 'rounded-pill' : ''} w-100 mb-3`}>
              <i className='fi-facebook fs-lg me-1'></i>
              Sign in with Facebook
            </Button>
            <div className='d-flex align-items-center py-3 mb-3'>
              <hr className='hr-light w-100' />
              <div className='text-light opacity-70 px-3'>Or</div>
              <hr className='hr-light w-100' />
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId='su-name' className='mb-4'>
                <Form.Label className='text-light'>Full name</Form.Label>
                <Form.Control
                  placeholder='Enter your full name'
                  className='form-control-light'
                  required
                />
              </Form.Group>
              <Form.Group controlId='su-email' className='mb-4'>
                <Form.Label className='text-light'>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  className='form-control-light'
                  required
                />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='text-light' htmlFor='su-password'>
                  Password <span className='fs-sm opacity-50'>min. 8 char</span>
                </Form.Label>
                <PasswordToggle light id='su-password' minLength='8' required />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='text-light' htmlFor='su-confirm-password'>Confirm password</Form.Label>
                <PasswordToggle light id='su-confirm-password' minLength='8' required />
              </Form.Group>
              <Form.Check
                type='checkbox'
                id='terms-agree'
                label={[<span key={1} className='opacity-70'>By joining, I agree to the </span>, <Link key={2} href='#' className='text-light'>Terms of use</Link>, <span key={3} className='opacity-70'> and </span>, <Link key={4} href='#' className='text-light'>Privacy policy</Link>]}
                required
                className='form-check-light mb-4'
              />
              <Button type='submit' size='lg' variant={`primary ${pillButtons ? 'rounded-pill' : ''} w-100`}>Sign up</Button>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SignUpModalDark
