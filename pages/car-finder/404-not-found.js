import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import lottie from 'lottie-web/build/player/lottie_light'

const NotFoundPage = () => {

  // Add class to body to enable dark background
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('bg-dark')
    return () => body.classList.remove('bg-dark')
  })

  // Animation settings
  const animationContainer = useRef(null)
  useEffect(() => {
    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animation/car-finder-404.json'
      })

      return () => animation.destroy()
    }
  }, [])

  return (
    <>
      {/* Custom page title attribute */}
      <Head>
        <title>Finder | Car Finder - 404 Not Found</title>
      </Head>

      {/* Page content */}
      <main className='page-wrapper'>
        <section className='d-flex align-items-center position-relative min-vh-100 py-5'>
          <span className='position-absolute top-50 start-50 translate-middle zindex-1 rounded-circle mt-sm-0 mt-n5' style={{width: '50vw', height: '50vw', backgroundColor: 'rgba(83, 74, 117, 0.3)', filter: 'blur(6.4vw)'}}></span>
          <Container className='d-flex justify-content-center position-relative zindex-5 text-center'>
            <Col xs={12} md={10} lg={8} className='px-0'>
              <h1 className='display-1 mb-lg-5 mt-n2 mb-4 text-light'>Oops!</h1>
              <div className='ratio ratio-16x9 mx-auto mb-lg-5 mb-4 pb-lg-2 pt-4' style={{maxWidth: '556px'}}>
                <div ref={animationContainer}></div>
              </div>
              <p className='h2 mb-lg-5 mb-4 pb-2 text-light'>The requested page doesn&apos;t exist</p>
              <div className='d-flex flex-sm-row flex-column justify-content-sm-center mt-n3 ms-n4'>
                <Button as={Link} href='/car-finder' size='lg' variant='primary mt-3 ms-4'>Go to homepage</Button>
                <Button as={Link} href='/car-finder/contacts' size='lg' variant='outline-light mt-3 ms-4'>Contact Us</Button>
              </div>
            </Col>
          </Container>
        </section>
      </main>
    </>
  )
}

export default NotFoundPage
