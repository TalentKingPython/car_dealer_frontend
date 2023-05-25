import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormGroup from '../../components/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import lottie from 'lottie-web/build/player/lottie_light'

const NotFoundPage = () => {

  const animationContainer = useRef(null)

  useEffect(() => {
    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animation/job-board-404.json'
      })

      return () => animation.destroy()
    }
  }, [])

  return (
    <>
      {/* Custom page title attribute */}
      <Head>
        <title>Finder | Job Board - 404 Not Found</title>
      </Head>

      {/* Page content */}
      <main className='page-wrapper'>
        <section
          className='d-flex align-items-center position-relative min-vh-100 pt-sm-5 pt-4 pb-5'
          style={{background: 'radial-gradient(95.96% 126.3% at 88.07% 109.91%, #F4F1FF 6.21%, #F5F4F8 40.55%, rgba(245, 244, 248, 0) 100%)'}}
        >
          <Container>
            <Row className='gy-4'>
              <Col md={5} className='align-self-sm-end mt-lg-5 pt-lg-5'>
                <div className='ratio ratio-1x1 mx-auto' style={{maxWidth: '526px'}}>
                  <div ref={animationContainer}></div>
                </div>
              </Col>
              <Col md={{span: 6, offset: 1}} lg={{span: 5, offset: 2}} className='text-md-start text-center'>
                <h1 className='display-3 mb-4 pb-md-3'>Whoops, <br/> the page is gone <span className='text-nowrap'>:(</span></h1>
                <p className='lead mb-md-5 mb-4'>
                  The link you clicked may be broken or the page may have been removed. You can try the search box or get back to the <Link href='/job-board'>homepage</Link>.
                </p>
                <FormGroup className='rounded-pill'>
                  <InputGroup size='lg'>
                    <FormControl placeholder='Your search keywords...' />
                  </InputGroup>
                  <Button variant='primary rounded-pill' size='lg'>Search</Button>
                </FormGroup>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default NotFoundPage
