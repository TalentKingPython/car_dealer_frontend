// Dropdown component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Link from 'next/link'
import Tab from 'react-bootstrap/Tab'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Code from '../../components/Code'

const DropdownPage = () => {

  const anchorLinks = [
    {
      label: 'Static menu examples',
      anchor: 'dropdowns-static'
    },
    {
      label: 'Next.js Link example',
      anchor: 'dropdowns-links'
    },
    {
      label: 'Dark dropdowns',
      anchor: 'dropdowns-dark'
    },
    {
      label: 'Forms inside dropdown',
      anchor: 'dropdowns-forms'
    },
    {
      label: 'Directions',
      anchor: 'dropdowns-directions'
    },
    {
      label: 'Menu alignment',
      anchor: 'dropdowns-alignment'
    },
    {
      label: 'Split button',
      anchor: 'dropdowns-split-button'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Dropdowns'
      pageDescription='Toggle contextual overlays for displaying lists of links or other content.'
      activeNav='/components/dropdowns'
      docsLink='https://react-bootstrap.github.io/components/dropdowns/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Static menu examples */}
      <ComponentPageSection id='dropdowns-static' title='Static menu examples'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap align-items-start'>
            <Dropdown.Menu show className='position-static me-4 mb-4' style={{width: '13rem'}}>
              <Dropdown.Item eventKey='1'>Some action</Dropdown.Item>
              <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
              <Dropdown.Item eventKey='3' active>Active</Dropdown.Item>
              <Dropdown.Item eventKey='4' disabled>Disabled</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu show className='position-static me-4 mb-4' style={{width: '13rem'}}>
              <Dropdown.Header as='h6'>Dropdown header</Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='1'>Some action</Dropdown.Item>
              <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='3'>Separated link</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu show className='position-static mb-4' style={{width: '13rem'}}>
              <Dropdown.Item eventKey='1'>
                <i className='fi-home opacity-70 me-2'></i>
                Home
                <Badge bg='secondary' className='ms-2'>2</Badge>
              </Dropdown.Item>
              <Dropdown.Item eventKey='2'>
                <i className='fi-user opacity-70 me-2'></i>
                Profile
                <Badge bg='info' className='ms-2'>3</Badge>
              </Dropdown.Item>
              <Dropdown.Item eventKey='3'>
                <i className='fi-chat-left opacity-70 me-2'></i>
                Messages
                <Badge bg='success' className='ms-2'>5</Badge>
              </Dropdown.Item>
              <Dropdown.Item eventKey='4'>
                <i className='fi-settings opacity-70 me-2'></i>
                Settings
                <Badge bg='warning' className='ms-2'>1</Badge>
              </Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Dropdown from 'react-bootstrap/Dropdown'

{/* Dropdown example with active and disabled links */}
<Dropdown.Menu show className='position-static'>
  <Dropdown.Item eventKey='1'>Some action</Dropdown.Item>
  <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
  <Dropdown.Item eventKey='3' active>Active</Dropdown.Item>
  <Dropdown.Item eventKey='4' disabled>Disabled</Dropdown.Item>
</Dropdown.Menu>

{/* Dropdown example with header and dividers */}
<Dropdown.Menu show className='position-static'>
  <Dropdown.Header as='h6'>Dropdown header</Dropdown.Header>
  <Dropdown.Divider />
  <Dropdown.Item eventKey='1'>Some action</Dropdown.Item>
  <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey='3'>Separated link</Dropdown.Item>
</Dropdown.Menu>

{/* Dropdown example with icons and badges */}
<Dropdown.Menu show className='position-static'>
  <Dropdown.Item eventKey='1'>
    <i className='fi-home opacity-70 me-2'></i>
    Home
    <Badge bg='secondary' className='ms-2'>2</Badge>
  </Dropdown.Item>
  <Dropdown.Item eventKey='2'>
    <i className='fi-user opacity-70 me-2'></i>
    Profile
    <Badge bg='info' className='ms-2'>3</Badge>
  </Dropdown.Item>
  <Dropdown.Item eventKey='3'>
    <i className='fi-chat-left opacity-70 me-2'></i>
    Messages
    <Badge bg='success' className='ms-2'>5</Badge>
  </Dropdown.Item>
  <Dropdown.Item eventKey='4'>
    <i className='fi-settings opacity-70 me-2'></i>
    Settings
    <Badge bg='warning' className='ms-2'>1</Badge>
  </Dropdown.Item>
</Dropdown.Menu>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Next.js Link example */}
      <ComponentPageSection id='dropdowns-links' title='Next.js Link example'>
        <Tab.Pane eventKey='preview'>
          <Dropdown.Menu show className='position-static mb-4' style={{width: '13rem'}}>
            <Dropdown.Item as={Link} href='#'>Regular link</Dropdown.Item>
            <Dropdown.Item as={Link} href='#'>Another regular link</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} href='#'>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'

{/* Add as={Link} prop to <Dropdown.Item> so the links work as expected without page reload. */}
<Dropdown.Menu show className='position-static'>
  <Dropdown.Item as={Link} href='#'>Regular link</Dropdown.Item>
  <Dropdown.Item as={Link} href='#'>Another regular link</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item as={Link} href='#'>Separated link</Dropdown.Item>
</Dropdown.Menu>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Dark dropdowns */}
      <ComponentPageSection id='dropdowns-dark' title='Dark dropdowns'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap align-items-start'>
            <Dropdown.Menu show variant='dark' className='position-static me-4 mb-4' style={{width: '13rem'}}>
              <Dropdown.Item eventKey='1'>Some action</Dropdown.Item>
              <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
              <Dropdown.Item eventKey='3' active>Active</Dropdown.Item>
              <Dropdown.Item eventKey='4' disabled>Disabled</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu show variant='dark' className='position-static me-4 mb-4' style={{width: '13rem'}}>
              <Dropdown.Header as='h6'>Dropdown header</Dropdown.Header>
              <Dropdown.Divider as='div' />
              <Dropdown.Item eventKey='1'>Some action</Dropdown.Item>
              <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
              <Dropdown.Divider as='div' />
              <Dropdown.Item eventKey='3'>Separated link</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu show variant='dark' className='position-static mb-4' style={{width: '13rem'}}>
              <Dropdown.Item eventKey='1'>
                <i className='fi-home me-2'></i>
                Home
                <Badge bg='secondary' className='ms-2'>2</Badge>
              </Dropdown.Item>
              <Dropdown.Item eventKey='2'>
                <i className='fi-user me-2'></i>
                Profile
                <Badge bg='info' className='ms-2'>3</Badge>
              </Dropdown.Item>
              <Dropdown.Item eventKey='3'>
                <i className='fi-chat-left me-2'></i>
                Messages
                <Badge bg='success' className='ms-2'>5</Badge>
              </Dropdown.Item>
              <Dropdown.Item eventKey='4'>
                <i className='fi-settings me-2'></i>
                Settings
                <Badge bg='warning' className='ms-2'>1</Badge>
              </Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Dropdown from 'react-bootstrap/Dropdown'

{/* Dark dropdown example with active and disabled links */}
<Dropdown.Menu show variant='dark' className='position-static'>
  <Dropdown.Item eventKey='1'>Some action</Dropdown.Item>
  <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
  <Dropdown.Item eventKey='3' active>Active</Dropdown.Item>
  <Dropdown.Item eventKey='4' disabled>Disabled</Dropdown.Item>
</Dropdown.Menu>

{/* Dark dropdown example with header and dividers */}
<Dropdown.Menu show variant='dark' className='position-static'>
  <Dropdown.Header as='h6'>Dropdown header</Dropdown.Header>
  <Dropdown.Divider as='div' />
  <Dropdown.Item eventKey='1'>Some action</Dropdown.Item>
  <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
  <Dropdown.Divider as='div' />
  <Dropdown.Item eventKey='3'>Separated link</Dropdown.Item>
</Dropdown.Menu>

{/* Dark dropdown example with icons and badges */}
<Dropdown.Menu show variant='dark' className='position-static'>
  <Dropdown.Item eventKey='1'>
    <i className='fi-home me-2'></i>
    Home
    <Badge bg='secondary' className='ms-2'>2</Badge>
  </Dropdown.Item>
  <Dropdown.Item eventKey='2'>
    <i className='fi-user me-2'></i>
    Profile
    <Badge bg='info' className='ms-2'>3</Badge>
  </Dropdown.Item>
  <Dropdown.Item eventKey='3'>
    <i className='fi-chat-left me-2'></i>
    Messages
    <Badge bg='success' className='ms-2'>5</Badge>
  </Dropdown.Item>
  <Dropdown.Item eventKey='4'>
    <i className='fi-settings me-2'></i>
    Settings
    <Badge bg='warning' className='ms-2'>1</Badge>
  </Dropdown.Item>
</Dropdown.Menu>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Forms inside dropdown */}
      <ComponentPageSection id='dropdowns-forms' title='Forms inside dropdown'>
        <Tab.Pane eventKey='preview'>
          <Dropdown.Menu show className='position-static mb-3' style={{width: '19rem'}}>
            <Form className='p-4' autoComplete='off'>
              <Form.Group className='mb-3' controlId='exampleDropdownFormEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='email@example.com' required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='exampleDropdownFormPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' required />
              </Form.Group>
              <Form.Check type='checkbox' id='dropdownCheck' label='Remember me' className='mb-3' />
              <Button type='submit' variant='primary'>Sign In</Button>
            </Form>
          </Dropdown.Menu>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

{/* Forms inside dropdown */}
<Dropdown.Menu show className='position-static' style={{width: '19rem'}}>
  <Form className='p-4' autoComplete='off'>
    <Form.Group className='mb-3' controlId='exampleDropdownFormEmail'>
      <Form.Label>Email address</Form.Label>
      <Form.Control type='email' placeholder='email@example.com' required />
    </Form.Group>
    <Form.Group className='mb-3' controlId='exampleDropdownFormPassword'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password' placeholder='Password' required />
    </Form.Group>
    <Form.Check type='checkbox' id='dropdownCheck' label='Remember me' className='mb-3' />
    <Button type='submit' variant='primary'>Sign In</Button>
  </Form>
</Dropdown.Menu>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Directions */}
      <ComponentPageSection id='dropdowns-directions' title='Directions'>
        <Tab.Pane eventKey='preview'>
          <div className="d-flex flex-wrap">
            <Dropdown className='me-3 mb-3'>
              <Dropdown.Toggle variant='outline-secondary'>Dropdown</Dropdown.Toggle>
              <Dropdown.Menu className='my-1'>
                <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown drop='up' className='me-3 mb-3'>
              <Dropdown.Toggle variant='outline-secondary'>Dropup</Dropdown.Toggle>
              <Dropdown.Menu className='my-1'>
                <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown drop='end' className='me-3 mb-3'>
              <Dropdown.Toggle variant='outline-secondary'>Dropend</Dropdown.Toggle>
              <Dropdown.Menu className='mx-1'>
                <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown drop='start' className='mb-3'>
              <Dropdown.Toggle variant='outline-secondary'>Dropstart</Dropdown.Toggle>
              <Dropdown.Menu className='mx-1'>
                <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Dropdown from 'react-bootstrap/Dropdown'

{/* Dropdown */}
<Dropdown>
  <Dropdown.Toggle variant='outline-secondary'>Dropdown</Dropdown.Toggle>
  <Dropdown.Menu className='my-1'>
    <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
    <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

{/* Dropup */}
<Dropdown drop='up'>
  <Dropdown.Toggle variant='outline-secondary'>Dropup</Dropdown.Toggle>
  <Dropdown.Menu className='my-1'>
    <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
    <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

{/* Dropend */}
<Dropdown drop='end'>
  <Dropdown.Toggle variant='outline-secondary'>Dropend</Dropdown.Toggle>
  <Dropdown.Menu className='mx-1'>
    <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
    <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

{/* Dropstart */}
<Dropdown drop='start'>
  <Dropdown.Toggle variant='outline-secondary'>Dropstart</Dropdown.Toggle>
  <Dropdown.Menu className='mx-1'>
    <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
    <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Menu alignment */}
      <ComponentPageSection id='dropdowns-alignment' title='Menu alignment'>
        <Tab.Pane eventKey='preview'>
          <Dropdown>
            <Dropdown.Toggle variant='primary'>Right-aligned menu</Dropdown.Toggle>
            <Dropdown.Menu align='end' className='my-1'>
              <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
              <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Dropdown from 'react-bootstrap/Dropdown'

{/* Right aligned dropdown menu */}
<Dropdown>
  <Dropdown.Toggle variant='primary'>Right-aligned menu</Dropdown.Toggle>
  <Dropdown.Menu align='end' className='my-1'>
    <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
    <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Split button */}
      <ComponentPageSection id='dropdowns-split-button' title='Split button'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap'>
            <Dropdown as={ButtonGroup} className='me-3 mb-3'>
              <Button variant='primary'>Button</Button>
              <Dropdown.Toggle split variant='primary' />
              <Dropdown.Menu className='my-1'>
                <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className='mb-3'>
              <Button variant='outline-primary'>Button</Button>
              <Dropdown.Toggle split variant='outline-primary' />
              <Dropdown.Menu className='my-1'>
                <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

{/* Solid split button */}
<Dropdown as={ButtonGroup}>
  <Button variant='primary'>Button</Button>
  <Dropdown.Toggle split variant='primary' />
  <Dropdown.Menu className='my-1'>
    <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
    <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

{/* Outline split button */}
<Dropdown as={ButtonGroup}>
  <Button variant='outline-primary'>Button</Button>
  <Dropdown.Toggle split variant='outline-primary' />
  <Dropdown.Menu className='my-1'>
    <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
    <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default DropdownPage
