// Toast component documentation page with code examples

import { useState } from 'react'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Code from '../../components/Code'

const ToastsPage = () => {

  const anchorLinks = [
    {
      label: 'Dismissible toast',
      anchor: 'toasts-dismissible'
    },
    {
      label: 'Stacking',
      anchor: 'toasts-stacking'
    },
    {
      label: 'Placement',
      anchor: 'toasts-placement'
    },
    {
      label: 'Color variations',
      anchor: 'toasts-colors'
    }
  ]


  // Dismissible toast example

  const ToastDismissible = () => {

    const [show, setShow] = useState(true)
    const toggleShow = () => setShow(!show)

    return (
      <>
        <Button variant='outline-secondary' className='mb-3' onClick={toggleShow}>Toggle Toast</Button>
        <Toast show={show} onClose={toggleShow}>
          <Toast.Header>
            <div
              className='d-inline-block align-middle bg-primary rounded-1 me-2'
              style={{width: '1.25rem', height: '1.25rem'}}
            ></div>
            <h6 className='fs-sm mb-0 me-auto'>Bootstrap</h6>
            <small className='text-muted'>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </>
    )
  }


  // Toast position

  const ToastPosition = () => {
    
    const [position, setPosition] = useState('top-start')

    return (
      <>
        <Form.Group controlId='selectToastPlacement' className='mb-3'>
          <Form.Label>Toast position</Form.Label>
          <Form.Select onChange={(e) => setPosition(e.currentTarget.value)}>
            {[
              'top-start',
              'top-center',
              'top-end',
              'middle-start',
              'middle-center',
              'middle-end',
              'bottom-start',
              'bottom-center',
              'bottom-end',
            ].map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <div
          aria-live='polite'
          aria-atomic='true'
          className='position-relative'
          style={{minHeight: '15rem'}}
        >
          <ToastContainer className='py-3' position={position}>
            <Toast>
              <Toast.Header>
                <div
                  className='d-inline-block align-middle bg-primary rounded-1 me-2'
                  style={{width: '1.25rem', height: '1.25rem'}}
                ></div>
                <h6 className='fs-sm mb-0 me-auto'>Bootstrap</h6>
                <small className='text-muted'>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </>
    )
  }


  return (
    <ComponentPageLayout
      pageTitle='Toasts'
      pageDescription='Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.'
      activeNav='/components/toasts'
      docsLink='https://react-bootstrap.github.io/components/toasts/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Dismissible toast */}
      <ComponentPageSection id='toasts-dismissible' title='Dismissible toast'>
        <Tab.Pane eventKey='preview'>
          <ToastDismissible />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'

{/* Dismisible toast example */}
const ToastDismissible = () => {

  const [show, setShow] = useState(true)
  const toggleShow = () => setShow(!show)

  return (
    <>
      <Button variant='outline-secondary' className='mb-3' onClick={toggleShow}>Toggle Toast</Button>
      <Toast show={show} onClose={toggleShow}>
        <Toast.Header>
          <div
            className='d-inline-block align-middle bg-primary rounded-1 me-2'
            style={{width: '1.25rem', height: '1.25rem'}}
          ></div>
          <h6 className='fs-sm mb-0 me-auto'>Bootstrap</h6>
          <small className='text-muted'>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </>
  )
}

render(<ToastDismissible />)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Stacking */}
      <ComponentPageSection id='toasts-stacking' title='Stacking'>
        <Tab.Pane eventKey='preview'>
          <ToastContainer>
            <Toast>
              <Toast.Header>
                <div
                  className='d-inline-block align-middle bg-primary rounded-1 me-2'
                  style={{width: '1.25rem', height: '1.25rem'}}
                ></div>
                <h6 className='fs-sm mb-0 me-auto'>Bootstrap</h6>
                <small className='text-muted'>just now</small>
              </Toast.Header>
              <Toast.Body>See? Just like this.</Toast.Body>
            </Toast>
            <Toast>
              <Toast.Header>
                <div
                  className='d-inline-block align-middle bg-primary rounded-1 me-2'
                  style={{width: '1.25rem', height: '1.25rem'}}
                ></div>
                <h6 className='fs-sm mb-0 me-auto'>Bootstrap</h6>
                <small className='text-muted'>5 seconds ago</small>
              </Toast.Header>
              <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
            </Toast>
          </ToastContainer>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'

{/* Stack toasts under each other by wrapiing with <ToastContainer> */}
<ToastContainer>
  <Toast>
    <Toast.Header>
      <div
        className='d-inline-block align-middle bg-primary rounded-1 me-2'
        style={{width: '1.25rem', height: '1.25rem'}}
      ></div>
      <h6 className='fs-sm mb-0 me-auto'>Bootstrap</h6>
      <small className='text-muted'>just now</small>
    </Toast.Header>
    <Toast.Body>See? Just like this.</Toast.Body>
  </Toast>
  <Toast>
    <Toast.Header>
      <div
        className='d-inline-block align-middle bg-primary rounded-1 me-2'
        style={{width: '1.25rem', height: '1.25rem'}}
      ></div>
      <h6 className='fs-sm mb-0 me-auto'>Bootstrap</h6>
      <small className='text-muted'>5 seconds ago</small>
    </Toast.Header>
    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
  </Toast>
</ToastContainer>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Placement */}
      <ComponentPageSection id='toasts-placement' title='Placement'>
        <Tab.Pane eventKey='preview'>
          <ToastPosition />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'
import Form from 'react-bootstrap/Form'

{/* Toast position example */}
const ToastPosition = () => {
    
  const [position, setPosition] = useState('top-start')

  return (
    <>
      <Form.Group controlId='selectToastPlacement' className='mb-3'>
        <Form.Label>Toast position</Form.Label>
        <Form.Select onChange={(e) => setPosition(e.currentTarget.value)}>
          {[
            'top-start',
            'top-center',
            'top-end',
            'middle-start',
            'middle-center',
            'middle-end',
            'bottom-start',
            'bottom-center',
            'bottom-end',
          ].map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <div
        aria-live='polite'
        aria-atomic='true'
        className='position-relative'
        style={{minHeight: '15rem'}}
      >
        <ToastContainer className='py-3' position={position}>
          <Toast>
            <Toast.Header>
              <div
                className='d-inline-block align-middle bg-primary rounded-1 me-2'
                style={{width: '1.25rem', height: '1.25rem'}}
              ></div>
              <h6 className='fs-sm mb-0 me-auto'>Bootstrap</h6>
              <small className='text-muted'>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  )
}

render(<ToastPosition />)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Color variations */}
      <ComponentPageSection id='toasts-colors' title='Color variations'>
        <Tab.Pane eventKey='preview'>
          <Row>
            <Col sm={6}>
              <Toast className='mb-4'>
                <Toast.Header closeVariant='white' className='bg-primary text-white'>
                  <i className='fi-bell me-2'></i>
                  <span className='fw-bold me-auto'>Primary toast</span>
                </Toast.Header>
                <Toast.Body className='text-primary'>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
              <Toast className='mb-4'>
                <Toast.Header closeVariant='white' className='bg-accent text-white'>
                  <i className='fi-lock me-2'></i>
                  <span className='fw-bold me-auto'>Accent toast</span>
                </Toast.Header>
                <Toast.Body className='text-accent'>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
              <Toast className='mb-4'>
                <Toast.Header closeVariant='white' className='bg-success text-white'>
                  <i className='fi-check-circle me-2'></i>
                  <span className='fw-bold me-auto'>Success toast</span>
                </Toast.Header>
                <Toast.Body className='text-success'>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
              <Toast className='mb-4'>
                <Toast.Header closeVariant='white' className='bg-danger text-white'>
                  <i className='fi-x-circle me-2'></i>
                  <span className='fw-bold me-auto'>Danger toast</span>
                </Toast.Header>
                <Toast.Body className='text-danger'>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
            </Col>
            <Col sm={6}>
              <Toast className='mb-4'>
                <Toast.Header closeVariant='white' className='bg-warning text-white'>
                  <i className='fi-alert-triange me-2'></i>
                  <span className='fw-bold me-auto'>Warning toast</span>
                </Toast.Header>
                <Toast.Body className='text-warning'>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
              <Toast className='mb-4'>
                <Toast.Header closeVariant='white' className='bg-info text-white'>
                  <i className='fi-info-circle me-2'></i>
                  <span className='fw-bold me-auto'>Info toast</span>
                </Toast.Header>
                <Toast.Body className='text-info'>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
              <Toast className='mb-4'>
                <Toast.Header closeVariant='white' className='bg-dark text-white'>
                  <i className='fi-clock me-2'></i>
                  <span className='fw-bold me-auto'>Dark toast</span>
                </Toast.Header>
                <Toast.Body className='text-dark'>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
              <Toast className='mb-4'>
                <Toast.Header closeVariant='white' className='text-white' style={{backgroundColor: '#69459e'}}>
                  <i className='fi-map-pin me-2'></i>
                  <span className='fw-bold me-auto'>Custom color toast</span>
                </Toast.Header>
                <Toast.Body style={{color: '#69459e'}}>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Toast from 'react-bootstrap/Toast'

{/* Primary toast */}
<Toast>
  <Toast.Header closeVariant='white' className='bg-primary text-white'>
    <i className='fi-bell me-2'></i>
    <span className='fw-bold me-auto'>Primary toast</span>
  </Toast.Header>
  <Toast.Body className='text-primary'>
    Hello, world! This is a toast message.
  </Toast.Body>
</Toast>

{/* Accent toast */}
<Toast>
  <Toast.Header closeVariant='white' className='bg-accent text-white'>
    <i className='fi-lock me-2'></i>
    <span className='fw-bold me-auto'>Accent toast</span>
  </Toast.Header>
  <Toast.Body className='text-accent'>
    Hello, world! This is a toast message.
  </Toast.Body>
</Toast>

{/* Success toast */}
<Toast>
  <Toast.Header closeVariant='white' className='bg-success text-white'>
    <i className='fi-check-circle me-2'></i>
    <span className='fw-bold me-auto'>Success toast</span>
  </Toast.Header>
  <Toast.Body className='text-success'>
    Hello, world! This is a toast message.
  </Toast.Body>
</Toast>

{/* Danger toast */}
<Toast>
  <Toast.Header closeVariant='white' className='bg-danger text-white'>
    <i className='fi-x-circle me-2'></i>
    <span className='fw-bold me-auto'>Danger toast</span>
  </Toast.Header>
  <Toast.Body className='text-danger'>
    Hello, world! This is a toast message.
  </Toast.Body>
</Toast>

{/* Warning toast */}
<Toast>
  <Toast.Header closeVariant='white' className='bg-warning text-white'>
    <i className='fi-alert-triange me-2'></i>
    <span className='fw-bold me-auto'>Warning toast</span>
  </Toast.Header>
  <Toast.Body className='text-warning'>
    Hello, world! This is a toast message.
  </Toast.Body>
</Toast>

{/* Info toast */}
<Toast>
  <Toast.Header closeVariant='white' className='bg-info text-white'>
    <i className='fi-info-circle me-2'></i>
    <span className='fw-bold me-auto'>Info toast</span>
  </Toast.Header>
  <Toast.Body className='text-info'>
    Hello, world! This is a toast message.
  </Toast.Body>
</Toast>

{/* Dark toast */}
<Toast>
  <Toast.Header closeVariant='white' className='bg-dark text-white'>
    <i className='fi-clock me-2'></i>
    <span className='fw-bold me-auto'>Dark toast</span>
  </Toast.Header>
  <Toast.Body className='text-dark'>
    Hello, world! This is a toast message.
  </Toast.Body>
</Toast>

{/* Custom color toast */}
<Toast>
  <Toast.Header closeVariant='white' className='text-white' style={{backgroundColor: '#69459e'}}>
    <i className='fi-map-pin me-2'></i>
    <span className='fw-bold me-auto'>Custom color toast</span>
  </Toast.Header>
  <Toast.Body style={{color: '#69459e'}}>
    Hello, world! This is a toast message.
  </Toast.Body>
</Toast>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default ToastsPage
