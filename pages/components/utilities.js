// Finder custom utility CSS classes documentation page with code examples

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Code from '../../components/Code'

const UtilitiesPage = () => {

  const anchorLinks = [
    {
      label: 'Faded background colors',
      anchor: 'bg-faded'
    },
    {
      label: 'Gradient background',
      anchor: 'bg-gradient'
    },
    {
      label: 'Translucent image overlay',
      anchor: 'image-overlay'
    },
    {
      label: 'Opacity',
      anchor: 'opacity'
    },
    {
      label: 'Text shadow',
      anchor: 'text-shadow'
    },
    {
      label: 'Opacity transition',
      anchor: 'opacity-transition'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Finder utilities'
      pageDescription='Custom Finder CSS classes with a purpose to reduce the frequency of highly repetitive declarations.'
      activeNav='/components/utilities'
      anchorLinks={anchorLinks}
    >

      {/* Faded background colors */}
      <ComponentPageSection id='bg-faded' title='Faded background colors'>
        <Tab.Pane eventKey='preview'>
          <div className='bg-faded-primary p-4 text-center mb-4'>
            <h5 className='text-primary mb-0 py-2'>Primary faded background</h5>
          </div>
          <div className='bg-faded-accent p-4 text-center mb-4'>
            <h5 className='text-accent mb-0 py-2'>Accent faded background</h5>
          </div>
          <div className='bg-secondary p-4 text-center mb-4'>
            <h5 className='mb-0 py-2'>Secondary background</h5>
          </div>
          <div className='bg-faded-info p-4 text-center mb-4'>
            <h5 className='text-info mb-0 py-2'>Info faded background</h5>
          </div>
          <div className='bg-faded-success p-4 text-center mb-4'>
            <h5 className='text-success mb-0 py-2'>Success faded background</h5>
          </div>
          <div className='bg-faded-warning p-4 text-center mb-4'>
            <h5 className='text-warning mb-0 py-2'>Warning faded background</h5>
          </div>
          <div className='bg-faded-danger p-4 text-center mb-4'>
            <h5 className='text-danger mb-0 py-2'>Danger faded background</h5>
          </div>
          <div className='bg-faded-dark p-4 text-center'>
            <h5 className='mb-0 py-2'>Dark faded background</h5>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Primary faded background */}
<div className='bg-faded-primary'>...</div>

{/* Accent faded background */}
<div className='bg-faded-accent'>...</div>

{/* Secondary background */}
<div className='bg-secondary'>...</div>

{/* Info faded background */}
<div className='bg-faded-info'>...</div>

{/* Success faded background */}
<div className='bg-faded-success'>...</div>

{/* Warning faded background */}
<div className='bg-faded-warning'>...</div>

{/* Danger faded background */}
<div className='bg-faded-danger'>...</div>

{/* Dark faded background */}
<div className='bg-faded-dark'>...</div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Gradient background */}
      <ComponentPageSection id='bg-gradient' title='Gradient background'>
        <Tab.Pane eventKey='preview'>
          <div className='bg-gradient p-4 text-center'>
            <h5 className='text-light mb-0 py-2'>Gradient background</h5>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Gradient background */}
<div className='bg-gradient'>...</div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Translucent image overlay */}
      <ComponentPageSection id='image-overlay' title='Gradient background'>
        <Tab.Pane eventKey='preview'>
          <Row className='g-3'>
            <Col md={4} sm={6}>
              <div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
                <span className='img-overlay bg-primary opacity-60'></span>
                <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Primary overlay</div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
                <span className='img-overlay bg-accent opacity-60'></span>
                <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Accent overlay</div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
                <span className='img-overlay bg-success opacity-60'></span>
                <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Success overlay</div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
                <span className='img-overlay bg-warning opacity-60'></span>
                <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Warning overlay</div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
                <span className='img-overlay bg-danger opacity-60'></span>
                <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Danger overlay</div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
                <span className='img-overlay bg-info opacity-60'></span>
                <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Info overlay</div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
                <span className='img-overlay bg-dark opacity-60'></span>
                <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Dark overlay</div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
                <span className='img-overlay bg-white opacity-60'></span>
                <div className='content-overlay fw-bold text-center py-5'>White overlay</div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
                <span className='img-overlay bg-gradient opacity-60'></span>
                <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Gradient overlay</div>
              </div>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Primary overlay */}
<div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
  <span className='img-overlay bg-primary opacity-60'></span>
  <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Primary overlay</div>
</div>

{/* Accent overlay */}
<div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
  <span className='img-overlay bg-accent opacity-60'></span>
  <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Accent overlay</div>
</div>

{/* Success overlay */}
<div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
  <span className='img-overlay bg-success opacity-60'></span>
  <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Success overlay</div>
</div>

{/* Warning overlay */}
<div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
  <span className='img-overlay bg-warning opacity-60'></span>
  <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Warning overlay</div>
</div>

{/* Danger overlay */}
<div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
  <span className='img-overlay bg-danger opacity-60'></span>
  <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Danger overlay</div>
</div>

{/* Info overlay */}
<div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
  <span className='img-overlay bg-info opacity-60'></span>
  <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Info overlay</div>
</div>

{/* Dark overlay */}
<div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
  <span className='img-overlay bg-dark opacity-60'></span>
  <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Dark overlay</div>
</div>

{/* White overlay */}
<div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
  <span className='img-overlay bg-white opacity-60'></span>
  <div className='content-overlay fw-bold text-center py-5'>White overlay</div>
</div>

{/* Gradient overlay */}
<div className='position-relative bg-size-cover py-5' style={{backgroundImage: 'url(/images/real-estate/city/dallas.jpg)'}}>
  <span className='img-overlay bg-gradient opacity-60'></span>
  <div className='content-overlay fw-bold text-white text-shadow text-center py-5'>Gradient overlay</div>
</div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Opacity */}
      <ComponentPageSection id='opacity' title='Opacity'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap pt-2'>
            <span className='text-dark opacity-10 mb-3 me-4'>Opacity 10%</span>
            <span className='text-dark opacity-15 mb-3 me-4'>Opacity 15%</span>
            <span className='text-dark opacity-25 mb-3 me-4'>Opacity 25%</span>
            <span className='text-dark opacity-35 mb-3 me-4'>Opacity 35%</span>
            <span className='text-dark opacity-40 mb-3 me-4'>Opacity 40%</span>
            <span className='text-dark opacity-50 mb-3 me-4'>Opacity 50%</span>
            <span className='text-dark opacity-60 mb-3 me-4'>Opacity 60%</span>
            <span className='text-dark opacity-65 mb-3 me-4'>Opacity 65%</span>
            <span className='text-dark opacity-70 mb-3 me-4'>Opacity 70%</span>
            <span className='text-dark opacity-75 mb-3 me-4'>Opacity 75%</span>
            <span className='text-dark opacity-80 mb-3 me-4'>Opacity 80%</span>
            <span className='text-dark opacity-90 mb-3 me-4'>Opacity 90%</span>
            <span className='text-dark opacity-100 mb-3'>Opacity 100%</span>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Opacity classes */}
<div className='opacity-10'>Opacity 10%</div>
<div className='opacity-15'>Opacity 15%</div>
<div className='opacity-25'>Opacity 25%</div>
<div className='opacity-35'>Opacity 35%</div>
<div className='opacity-40'>Opacity 40%</div>
<div className='opacity-50'>Opacity 50%</div>
<div className='opacity-60'>Opacity 60%</div>
<div className='opacity-65'>Opacity 65%</div>
<div className='opacity-70'>Opacity 70%</div>
<div className='opacity-75'>Opacity 75%</div>
<div className='opacity-80'>Opacity 80%</div>
<div className='opacity-90'>Opacity 90%</div>
<div className='opacity-100'>Opacity 100%</div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Text shadow */}
      <ComponentPageSection id='text-shadow' title='Text shadow'>
        <Tab.Pane eventKey='preview'>
          <h2 className='text-white text-shadow'>Text shadow</h2>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Text shadow */}
<h2 className='text-white text-shadow'>Text shadow</h2>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Opacity transition */}
      <ComponentPageSection id='opacity-transition' title='Opacity transition'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex'>
            <div className='p-4 bg-accent text-light opacity-25 opacity-transition me-4'>Opacity from 25% to 100%</div>
            <div className='p-4 bg-accent text-light opacity-50 opacity-transition me-4'>Opacity from 50% to 100%</div>
            <div className='p-4 bg-accent text-light opacity-75 opacity-transition'>Opacity from 75% to 100%</div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Opacity transition from 25% to 100% */}
<div className='opacity-25 opacity-transition'>...</div>

{/* Opacity transition from 50% to 100% */}
<div className='opacity-50 opacity-transition'>...</div>

{/* Opacity transition from 75% to 100% */}
<div className='opacity-75 opacity-transition'>...</div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default UtilitiesPage
