// Alert component documentation page with code examples

import { useState } from 'react'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Link from 'next/link'
import Tab from 'react-bootstrap/Tab'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Code from '../../components/Code'

const AlertsPage = () => {

  const anchorLinks = [
    {
      label: 'Basic example',
      anchor: 'alerts-basic'
    },
    {
      label: 'Alert with icon',
      anchor: 'alerts-icon'
    },
    {
      label: 'Dismissible alert',
      anchor: 'alerts-dismissible'
    }
  ]


  // Dismisible alert state
  const [show, setShow] = useState(true)

  return (
    <ComponentPageLayout
      pageTitle='Alerts'
      pageDescription='Provide contextual feedback messages for typical user actions.'
      activeNav='/components/alerts'
      docsLink='https://react-bootstrap.github.io/components/alerts/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Basic example */}
      <ComponentPageSection id='alerts-basic' title='Basic example'>
        <Tab.Pane eventKey='preview'>
          <Alert variant='primary'>
            A simple primary alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
          </Alert>
          <Alert variant='accent'>
            A simple accent alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
          </Alert>
          <Alert variant='secondary'>
            A simple secondary alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
          </Alert>
          <Alert variant='success'>
            A simple success alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
          </Alert>
          <Alert variant='danger'>
            A simple danger alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
          </Alert>
          <Alert variant='warning'>
            A simple warning alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
          </Alert>
          <Alert variant='info'>
            A simple info alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
          </Alert>
          <Alert variant='light'>
            A simple light alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
          </Alert>
          <Alert variant='dark'>
            A simple dark alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
          </Alert>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Alert from 'react-bootstrap/Alert'

{/* Primary alert */}
<Alert variant='primary'>
  A simple primary alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
</Alert>

{/* Accent alert */}
<Alert variant='accent'>
  A simple accent alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
</Alert>

{/* Secondary alert */}
<Alert variant='secondary'>
  A simple secondary alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
</Alert>

{/* Success alert */}
<Alert variant='success'>
  A simple success alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
</Alert>

{/* Danger alert */}
<Alert variant='danger'>
  A simple danger alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
</Alert>

{/* Warning alert */}
<Alert variant='warning'>
  A simple warning alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
</Alert>

{/* Info alert */}
<Alert variant='info'>
  A simple info alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
</Alert>

{/* Light alert */}
<Alert variant='light'>
  A simple light alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
</Alert>

{/* Dark alert */}
<Alert variant='dark'>
  A simple dark alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.
</Alert>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Alert with icon */}
      <ComponentPageSection id='alerts-icon' title='Alert with icon'>
        <Tab.Pane eventKey='preview'>
          <Alert variant='primary' className='d-flex'>
            <i className='fi-bell me-2 me-sm-3 lead'></i>
            <div>A simple primary alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
          </Alert>
          <Alert variant='accent' className='d-flex'>
            <i className='fi-star me-2 me-sm-3 lead'></i>
            <div>A simple accent alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
          </Alert>
          <Alert variant='secondary' className='d-flex'>
            <i className='fi-clock me-2 me-sm-3 lead'></i>
            <div>A simple secondary alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
          </Alert>
          <Alert variant='success' className='d-flex'>
            <i className='fi-check-circle me-2 me-sm-3 lead'></i>
            <div>A simple success alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
          </Alert>
          <Alert variant='danger' className='d-flex'>
            <i className='fi-x-circle me-2 me-sm-3 lead'></i>
            <div>A simple danger alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
          </Alert>
          <Alert variant='warning' className='d-flex'>
            <i className='fi-alert-triange me-2 me-sm-3 lead'></i>
            <div>A simple warning alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
          </Alert>
          <Alert variant='info' className='d-flex'>
            <i className='fi-alert-circle me-2 me-sm-3 lead'></i>
            <div>A simple info alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
          </Alert>
          <Alert variant='light' className='d-flex'>
            <i className='fi-unlock me-2 me-sm-3 lead'></i>
            <div>A simple light alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
          </Alert>
          <Alert variant='dark' className='d-flex'>
            <i className='fi-map-pin me-2 me-sm-3 lead'></i>
            <div>A simple dark alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
          </Alert>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Alert from 'react-bootstrap/Alert'

{/* Primary alert */}
<Alert variant='primary' className='d-flex'>
  <i className='fi-bell me-2 me-sm-3 lead'></i>
  <div>A simple primary alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
</Alert>

{/* Accent alert */}
<Alert variant='accent' className='d-flex'>
  <i className='fi-star me-2 me-sm-3 lead'></i>
  <div>A simple accent alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
</Alert>

{/* Secondary alert */}
<Alert variant='secondary' className='d-flex'>
  <i className='fi-clock me-2 me-sm-3 lead'></i>
  <div>A simple secondary alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
</Alert>

{/* Success alert */}
<Alert variant='success' className='d-flex'>
  <i className='fi-check-circle me-2 me-sm-3 lead'></i>
  <div>A simple success alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
</Alert>

{/* Danger alert */}
<Alert variant='danger' className='d-flex'>
  <i className='fi-x-circle me-2 me-sm-3 lead'></i>
  <div>A simple danger alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
</Alert>

{/* Warning alert */}
<Alert variant='warning' className='d-flex'>
  <i className='fi-alert-triange me-2 me-sm-3 lead'></i>
  <div>A simple warning alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
</Alert>

{/* Info alert */}
<Alert variant='info' className='d-flex'>
  <i className='fi-alert-circle me-2 me-sm-3 lead'></i>
  <div>A simple info alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
</Alert>

{/* Light alert */}
<Alert variant='light' className='d-flex'>
  <i className='fi-unlock me-2 me-sm-3 lead'></i>
  <div>A simple light alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
</Alert>

{/* Dark alert */}
<Alert variant='dark' className='d-flex'>
  <i className='fi-map-pin me-2 me-sm-3 lead'></i>
  <div>A simple dark alert with <Alert.Link as={Link} href='#'>an example link</Alert.Link>. Give it a click if you like.</div>
</Alert>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Dismissible alert */}
      <ComponentPageSection id='alerts-dismissible' title='Dismissible alert'>
        <Tab.Pane eventKey='preview'>
          {show ? <Alert variant='primary' onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p className='mb-1'>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
            </Alert> : <Button variant='secondary' onClick={() => setShow(true)}>Show alert</Button>
          }
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

const AlertDismissibleExample = () => {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    )
  }
}

render(<AlertDismissibleExample />)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default AlertsPage
