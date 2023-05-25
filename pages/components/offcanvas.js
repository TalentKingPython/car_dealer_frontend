// Offcanvas component documentation page with code examples

import { useState, useRef } from 'react'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Code from '../../components/Code'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'


const OffcanvasPage = () => {

  const anchorLinks = [
    {
      label: 'Offcanvas components',
      anchor: 'offcanvas-components'
    },
    {
      label: 'Placement',
      anchor: 'offcanvas-placement'
    },
    {
      label: 'Backdrop and scrolling',
      anchor: 'offcanvas-backdrop'
    }
  ]


  // Static offcanvas container
  const offcanvasContainer = useRef(null)


  // Offcanvas placement example

  const OffcanvasExample = ({ name, ...props }) => {
    const [show, setShow] = useState(false)
  
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  
    return (
      <>
        <Button variant='accent' onClick={handleShow} className='my-2 me-2'>
          Offcanvas {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton className='border-bottom'>
            <Offcanvas.Title>Offcanvas {name}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  }
  
  const OffcanvasPlacement = () => {
    return (
      <>
        {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
          <OffcanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </>
    )
  }


  // Backdrop and scrolling options example

  const options = [
    {
      name: 'Enable backdrop (default)',
      scroll: false,
      backdrop: true,
    },
    {
      name: 'Disable backdrop',
      scroll: false,
      backdrop: false,
    },
    {
      name: 'Enable body scrolling',
      scroll: true,
      backdrop: false,
    },
    {
      name: 'Enable both scrolling & backdrop',
      scroll: true,
      backdrop: true,
    }
  ]

  const OffcanvasExample2 = ({ name, ...props }) => {
    const [show2, setShow2] = useState(false)
  
    const handleClose2 = () => setShow2(false)
    const toggleShow2 = () => setShow2((s) => !s)
  
    return (
      <>
        <Button variant='outline-secondary' onClick={toggleShow2} className='my-2 me-2'>
          {name}
        </Button>
        <Offcanvas show={show2} onHide={handleClose2} {...props}>
          <Offcanvas.Header closeButton className='border-bottom'>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  }
  
  function BackdropExample() {
    return (
      <>
        {options.map((props, idx) => (
          <OffcanvasExample2 key={idx} {...props} />
        ))}
      </>
    )
  }


  return (
    <ComponentPageLayout
      pageTitle='Offcanvas'
      pageDescription='Build hidden sidebars into your project for navigation, shopping carts, etc.'
      activeNav='/components/offcanvas'
      docsLink='https://react-bootstrap.github.io/components/offcanvas/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Offcanvas components */}
      <ComponentPageSection id='offcanvas-components' title='Offcanvas components'>
        <Tab.Pane ref={offcanvasContainer} eventKey='preview'>
          <Offcanvas
            show
            scroll
            backdrop={false}
            container={offcanvasContainer}
            className='shadow-sm my-2'
            style={{position: 'static', transform: 'none'}}
          >
            <Offcanvas.Header closeButton className='border-bottom'>
              <Offcanvas.Title as='h6'>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <SimpleBar className='offcanvas-body' style={{maxHeight: '16.5rem'}}>
              <Nav as='ul' className='flex-column'>
                <Nav.Item as='li'>
                  <Nav.Link href='#' active>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='#'>User Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='#'>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='#'>Our Works</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='#'>About</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='#'>Our Team</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='#'>Vendor Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='#'>Contacts</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='#'>Help Center</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='#'>Support</Nav.Link>
                </Nav.Item>
              </Nav>
            </SimpleBar>
            <Offcanvas.Header className='border-top'>
              <Button variant='outline-primary' size='sm' className='w-100 me-2'>
                <i className='fi-login me-1'></i>
                Sign In
              </Button>
              <Button variant='primary' size='sm' className='w-100'>
                <i className='fi-user me-1'></i>
                Sign In
              </Button>
            </Offcanvas.Header>
          </Offcanvas>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

{/* Offcanvas */}
<Offcanvas
  show
  scroll
  backdrop={false}
>

  {/* Header */}
  <Offcanvas.Header closeButton className='border-bottom'>
    <Offcanvas.Title as='h6'>Menu</Offcanvas.Title>
  </Offcanvas.Header>

  {/* Body with custom scrollbar */}
  <SimpleBar className='offcanvas-body'>
    <Nav as='ul' className='flex-column'>
      <Nav.Item as='li'>
        <Nav.Link href='#' active>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='#'>User Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='#'>Services</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='#'>Our Works</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='#'>About</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='#'>Our Team</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='#'>Vendor Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='#'>Contacts</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='#'>Help Center</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='#'>Support</Nav.Link>
      </Nav.Item>
    </Nav>
  </SimpleBar>

  {/* Footer */}
  <Offcanvas.Header className='border-top'>
    <Button variant='outline-primary' size='sm' className='w-100 me-2'>
      <i className='fi-login me-1'></i>
      Sign In
    </Button>
    <Button variant='primary' size='sm' className='w-100'>
      <i className='fi-user me-1'></i>
      Sign In
    </Button>
  </Offcanvas.Header>
</Offcanvas>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Placement */}
      <ComponentPageSection id='offcanvas-placement' title='Placement'>
        <Tab.Pane eventKey='preview'>
          <OffcanvasPlacement />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

{/* Offcanvas placement options */}
const OffcanvasExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='accent' onClick={handleShow} className='my-2 me-2'>
        Offcanvas {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton className='border-bottom'>
          <Offcanvas.Title>Offcanvas {name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

const OffcanvasPlacement = () => {
  return (
    <>
      {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
        <OffcanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  )
}

render(<OffcanvasPlacement />)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Backdrop and scrolling */}
      <ComponentPageSection id='offcanvas-backdrop' title='Backdrop and scrolling'>
        <Tab.Pane eventKey='preview'>
          <BackdropExample />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

{/* Bacdrop annd scrolling options */}
const options = [
  {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true,
  },
  {
    name: 'Disable backdrop',
    scroll: false,
    backdrop: false,
  },
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
  },
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  }
]

const OffcanvasExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const toggleShow = () => setShow((s) => !s)

  return (
    <>
      <Button variant='outline-secondary' onClick={toggleShow} className='my-2 me-2'>
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton className='border-bottom'>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

function BackdropExample() {
  return (
    <>
      {options.map((props, idx) => (
        <OffcanvasExample key={idx} {...props} />
      ))}
    </>
  )
}

render(<BackdropExample />)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default OffcanvasPage
