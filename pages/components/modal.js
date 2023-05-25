// Modal component documentation page with code examples

import { useState } from 'react'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Link from 'next/link'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PasswordToggle from '../../components/PasswordToggle'
import Code from '../../components/Code'

const ModalPage = () => {

  const anchorLinks = [
    {
      label: 'Modal markup',
      anchor: 'modal-markup'
    },
    {
      label: 'Tabs and forms',
      anchor: 'modal-tabs-forms'
    },
    {
      label: 'Live demo (Sizes)',
      anchor: 'modal-demo'
    }
  ]


  // Modal live demo
  const [smShow, setSmShow] = useState(false)
  const [show, setShow] = useState(false)
  const [lgShow, setLgShow] = useState(false)
  const [xlShow, setXlShow] = useState(false)
  const [longShow, setLongShow] = useState(false)
  const [scrollShow, setScrollShow] = useState(false)
  const [centerShow, setCenterShow] = useState(false)
  const [fullShow, setFullShow] = useState(false)

  return (
    <ComponentPageLayout
      pageTitle='Modal'
      pageDescription='Add dialogs to your site for lightboxes, user notifications, etc.'
      activeNav='/components/modal'
      docsLink='https://react-bootstrap.github.io/components/modal/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Small modal live demo example */}
      <Modal size='sm' show={smShow} onHide={() => setSmShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>

      {/* Default modal live demo example */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' size='sm' onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant='primary' size='sm'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Large modal live demo example */}
      <Modal size='lg' show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' size='sm' onClick={() => setLgShow(false)}>
            Close
          </Button>
          <Button variant='primary' size='sm'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Extra large modal live demo example */}
      <Modal size='xl' show={xlShow} onHide={() => setXlShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' size='sm' onClick={() => setXlShow(false)}>
            Close
          </Button>
          <Button variant='primary' size='sm'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Long modal live demo example */}
      <Modal show={longShow} onHide={() => setLongShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fs-sm'>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' size='sm' onClick={() => setLongShow(false)}>
            Close
          </Button>
          <Button variant='primary' size='sm'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal with scrollable content live demo example */}
      <Modal show={scrollShow} scrollable onHide={() => setScrollShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fs-sm'>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' size='sm' onClick={() => setScrollShow(false)}>
            Close
          </Button>
          <Button variant='primary' size='sm'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Vertically centered modal live demo example */}
      <Modal centered show={centerShow} onHide={() => setCenterShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' size='sm' onClick={() => setCenterShow(false)}>
            Close
          </Button>
          <Button variant='primary' size='sm'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Full screen modal live demo example */}
      <Modal fullscreen show={fullShow} onHide={() => setFullShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' size='sm' onClick={() => setFullShow(false)}>
            Close
          </Button>
          <Button variant='primary' size='sm'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Modal markup */}
      <ComponentPageSection id='modal-markup' title='Modal markup'>
        <Tab.Pane eventKey='preview'>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title as='h5'>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' size='sm'>Close</Button>
              <Button variant='primary' size='sm'>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Modal from 'react-bootstrap/Modal'

{/* Modal dialog component markup */}
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title as='h5'>Modal title</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant='secondary' size='sm'>Close</Button>
    <Button variant='primary' size='sm'>Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Tabs and forms */}
      <ComponentPageSection id='modal-tabs-forms' title='Tabs and forms'>
        <Tab.Pane eventKey='preview'>
          <Modal.Dialog>
            <Tab.Container defaultActiveKey='signin' transition={Fade}>
              <Modal.Header closeButton>
                <Nav variant='tabs' className='mb-0'>
                  <Nav.Item>
                    <Nav.Link as='button' eventKey='signin'>
                      <i className='fi-login ms-n1 me-2'></i>
                      Sign in
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as='button' eventKey='signup'>
                      <i className='fi-user ms-n1 me-2'></i>
                      Sign up
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Modal.Header>
              <Modal.Body className='py-4'>
                <Tab.Content>
                  <Tab.Pane as={Form} autoComplete='off' eventKey='signin'>
                    <Form.Group className='mb-3' controlId='si-email'>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type='email' placeholder='johndoe@example.com' required />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                      <Form.Label htmlFor='si-pass'>Password</Form.Label>
                      <PasswordToggle id='si-pass' required />
                    </Form.Group>
                    <Form.Group className='d-flex flex-wrap justify-content-between mb-3'>
                      <Form.Check id='remember' label='Remember me' className='mb-2' />
                      <Link href='#' className='fs-sm'>Forgot password?</Link>
                    </Form.Group>
                    <Button type='submit' variant='primary w-100'>Sign in</Button>
                  </Tab.Pane>
                  <Tab.Pane as={Form} eventKey='signup'>
                    <Form.Group className='mb-3' controlId='su-name'>
                      <Form.Label>Full name</Form.Label>
                      <Form.Control type='text' placeholder='John Doe' required />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='su-email'>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type='email' placeholder='johndoe@example.com' required />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                      <Form.Label htmlFor='su-pass'>Password</Form.Label>
                      <PasswordToggle id='su-pass' required />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                      <Form.Label htmlFor='su-confirm-pass'>Confirm password</Form.Label>
                      <PasswordToggle id='su-confirm-pass' required />
                    </Form.Group>
                    <Button type='submit' variant='primary w-100'>Sign un</Button>
                  </Tab.Pane>
                </Tab.Content>
              </Modal.Body>
            </Tab.Container>
          </Modal.Dialog>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PasswordToggle from '../components/PasswordToggle'

{/* Modal with tabs and forms */}
<Modal.Dialog>
  <Tab.Container defaultActiveKey='signin' transition={Fade}>
    <Modal.Header closeButton>
      <Nav variant='tabs' className='mb-0'>
        <Nav.Item>
          <Nav.Link as='button' eventKey='signin'>
            <i className='fi-login ms-n1 me-2'></i>
            Sign in
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as='button' eventKey='signup'>
            <i className='fi-user ms-n1 me-2'></i>
            Sign up
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Modal.Header>
    <Modal.Body className='py-4'>
      <Tab.Content>
        <Tab.Pane as={Form} autoComplete='off' eventKey='signin'>
          <Form.Group className='mb-3' controlId='si-email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='johndoe@example.com' required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='si-pass'>Password</Form.Label>
            <PasswordToggle id='si-pass' required />
          </Form.Group>
          <Form.Group className='d-flex flex-wrap justify-content-between mb-3'>
            <Form.Check id='remember' label='Remember me' className='mb-2' />
            <Link href='#' className='fs-sm'>Forgot password?</Link>
          </Form.Group>
          <Button type='submit' variant='primary w-100'>Sign in</Button>
        </Tab.Pane>
        <Tab.Pane as={Form} eventKey='signup'>
          <Form.Group className='mb-3' controlId='su-name'>
            <Form.Label>Full name</Form.Label>
            <Form.Control type='text' placeholder='John Doe' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='su-email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='johndoe@example.com' required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='su-pass'>Password</Form.Label>
            <PasswordToggle id='su-pass' required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='su-confirm-pass'>Confirm password</Form.Label>
            <PasswordToggle id='su-confirm-pass' required />
          </Form.Group>
          <Button type='submit' variant='primary w-100'>Sign un</Button>
        </Tab.Pane>
      </Tab.Content>
    </Modal.Body>
  </Tab.Container>
</Modal.Dialog>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Live demo (Sizes) */}
      <ComponentPageSection id='modal-demo' title='Live demo (Sizes)'>
        <Tab.Pane eventKey='preview'>
          <Button variant='outline-secondary' className='me-3 mb-3' onClick={() => setSmShow(true)}>Small modal</Button>
          <Button variant='outline-secondary' className='me-3 mb-3' onClick={() => setShow(true)}>Default modal</Button>
          <Button variant='outline-secondary' className='me-3 mb-3' onClick={() => setLgShow(true)}>Large modal</Button>
          <Button variant='outline-secondary' className='me-3 mb-3' onClick={() => setXlShow(true)}>Extra large modal</Button>
          <Button variant='outline-secondary' className='me-3 mb-3' onClick={() => setLongShow(true)}>Long modal</Button>
          <Button variant='outline-secondary' className='me-3 mb-3' onClick={() => setScrollShow(true)}>Scrolling content</Button>
          <Button variant='outline-secondary' className='me-3 mb-3' onClick={() => setCenterShow(true)}>Vertically centered modal</Button>
          <Button variant='outline-secondary' className='mb-3' onClick={() => setFullShow(true)}>Full screen modal</Button>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

{/* Example of how to lauch modal */}
const ModalExample = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' size='sm' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' size='sm' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

render(<ModalExample />)


{/* Small modal */}
<Modal size='sm' show={} onHide={}>...</Modal>

{/* Default modal */}
<Modal show={} onHide={}>...</Modal>

{/* Large modal */}
<Modal size='lg' show={} onHide={}>...</Modal>

{/* Extra large modal */}
<Modal size='xl' show={} onHide={}>...</Modal>

{/* Modal with scrollable content (body) */}
<Modal scrollable show={} onHide={}>...</Modal>

{/* Vertically centered modal */}
<Modal centered show={} onHide={}>...</Modal>

{/* Full screen modal */}
<Modal fullscreen show={} onHide={}>...</Modal>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default ModalPage
