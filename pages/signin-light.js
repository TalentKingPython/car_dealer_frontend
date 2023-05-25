import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../components/ImageLoader'
import PasswordToggle from '../components/PasswordToggle'

const SigninLightPage = () => {

  // Add class to body to enable gray background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-secondary')
    return () => body.classList.remove('bg-secondary')
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
        <title>Finder | Sing In Page</title>
      </Head>

      {/* Page wrapper */}
      <main className='page-wrapper'>

        <div className='container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5'>
          
          {/* Sign in card */}
          <div className='card card-body' style={{maxWidth: '940px'}}>
            <div
              className="position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3"
              onClick={() => router.back()}
            >
              <i className="fi-arrow-long-left fs-base me-2"></i>
              Go back
            </div>
            <div className='row mx-0 align-items-center'>
              <div className='col-md-6 border-end-md p-2 p-sm-5'>
                <h2 className='h3 mb-4 mb-sm-5'>Hey there!<br />Welcome back.</h2>
                <div className='d-flex justify-content-center'>
                  <ImageLoader
                    src='/images/signin-modal/signin.svg'
                    width={344}
                    height={292}
                    alt='Illusration'
                  />
                </div>
                <div className='mt-4 mt-sm-5'>Don&apos;t have an account? <Link href='/signup-light'>Sign up here</Link></div>
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
                  <hr className='w-100' />
                  <div className='px-3'>Or</div>
                  <hr className='w-100' />
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId='si-email' className='mb-4'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter your email'
                      required
                    />
                  </Form.Group>
                  <Form.Group className='mb-4'>
                    <div className='d-flex align-items-center justify-content-between mb-2'>
                      <Form.Label htmlFor='si-password' className='mb-0'>Password</Form.Label>
                      <Link href='#' className='fs-sm'>Forgot password?</Link>
                    </div>
                    <PasswordToggle id='si-password' placeholder='Enter password' required />
                  </Form.Group>
                  <Button type='submit' size='lg' variant='primary w-100'>Sign in</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SigninLightPage
