import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../components/ImageLoader'
import PasswordToggle from '../components/PasswordToggle'

const SignupDarkPage = () => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-dark')
    return () => body.classList.remove('bg-dark')
  })

  // Router
  const router = useRouter()

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
    <>
      {/* Custom page title attribute */}
      <Head>
        <title>Finder | Sing Up Page (Dark)</title>
      </Head>

      {/* Page wrapper */}
      <main className='page-wrapper'>

        <div className='container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5'>
          
          {/* Sign in card */}
          <div className='card card-light card-body' style={{maxWidth: '940px'}}>
            <div
              className="position-absolute top-0 end-0 nav-link-light fs-sm py-1 px-2 mt-3 me-3"
              onClick={() => router.back()}
            >
              <i className="fi-arrow-long-left fs-base me-2"></i>
              Go back
            </div>
            <div className='row mx-0 align-items-center'>
              <div className='col-md-6 border-end-md border-light p-2 p-sm-5'>
                <h2 className='h3 text-light mb-4 mb-sm-5'>Join Finder.<br />Get premium benefits:</h2>
                <ul className='list-unstyled mb-4 mb-sm-5'>
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
                <div className='mt-sm-4 pt-md-3'>
                  <span className='opacity-60'>Already have an account? </span>
                  <Link href='/signin-dark' className='text-light'>Sign in</Link>
                </div>
              </div>
              <div className='col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5'>
                <Button variant='outline-info w-100 mb-3'>
                  <i className='fi-google fs-lg me-1'></i>
                  Sign in with Google
                </Button>
                <Button variant='outline-info w-100 mb-3'>
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
                    label={[
                      <span key={1} className='opacity-70'>By joining, I agree to the </span>,
                      <Link key={2} href='#' className='text-light'>Terms of use</Link>,
                      <span key={3} className='opacity-70'> and </span>,
                      <Link key={4} href='#' className='text-light'>Privacy policy</Link>
                    ]}
                    required
                    className='form-check-light mb-4'
                  />
                  <Button type='submit' size='lg' variant='primary w-100'>Sign up</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupDarkPage
