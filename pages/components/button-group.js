// Button group component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Code from '../../components/Code'

const ButtonGroupPage = () => {

  const anchorLinks = [
    {
      label: 'Basic example',
      anchor: 'btn-group-basic'
    },
    {
      label: 'Button toolbar',
      anchor: 'btn-group-toolbar'
    },
    {
      label: 'Sizing',
      anchor: 'btn-group-sizing'
    },
    {
      label: 'Nested dropdown',
      anchor: 'btn-group-dropdown'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Button group'
      pageDescription='Groups a series of buttons together on a single line.'
      activeNav='/components/button-group'
      docsLink='https://react-bootstrap.github.io/components/button-group/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Basic example */}
      <ComponentPageSection id='btn-group-basic' title='Basic example'>
        <Tab.Pane eventKey='preview'>
          <ButtonGroup aria-label='Solid button group' className='mb-4 me-3'>
            <Button variant='primary'>Left</Button>
            <Button variant='primary'>Middle</Button>
            <Button variant='primary'>Right</Button>
          </ButtonGroup>
          <ButtonGroup aria-label='Outline button group' className='mb-4'>
            <Button variant='outline-primary'>Left</Button>
            <Button variant='outline-primary'>Middle</Button>
            <Button variant='outline-primary'>Right</Button>
          </ButtonGroup>
          <br />
          <ButtonGroup aria-label='Pill solid button group' className='mb-4 me-3'>
            <Button variant='secondary rounded-pill rounded-end-0'>Left</Button>
            <Button variant='secondary'>Middle</Button>
            <Button variant='secondary rounded-pill rounded-start-0'>Right</Button>
          </ButtonGroup>
          <ButtonGroup aria-label='Pill outline button group' className='mb-4'>
            <Button variant='outline-primary rounded-pill rounded-end-0'>Left</Button>
            <Button variant='outline-primary'>Middle</Button>
            <Button variant='outline-primary rounded-pill rounded-start-0'>Right</Button>
          </ButtonGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

{/* Solid button group */}
<ButtonGroup aria-label='Solid button group'>
  <Button variant='primary'>Left</Button>
  <Button variant='primary'>Middle</Button>
  <Button variant='primary'>Right</Button>
</ButtonGroup>

{/* Outline button group */}
<ButtonGroup aria-label='Outline button group'>
  <Button variant='outline-primary'>Left</Button>
  <Button variant='outline-primary'>Middle</Button>
  <Button variant='outline-primary'>Right</Button>
</ButtonGroup>

{/* Pill solid button group */}
<ButtonGroup aria-label='Pill solid button group'>
  <Button variant='secondary rounded-pill rounded-end-0'>Left</Button>
  <Button variant='secondary'>Middle</Button>
  <Button variant='secondary rounded-pill rounded-start-0'>Right</Button>
</ButtonGroup>

{/* Pill outline button group */}
<ButtonGroup aria-label='Pill outline button group'>
  <Button variant='outline-primary rounded-pill rounded-end-0'>Left</Button>
  <Button variant='outline-primary'>Middle</Button>
  <Button variant='outline-primary rounded-pill rounded-start-0'>Right</Button>
</ButtonGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Button toolbar */}
      <ComponentPageSection id='btn-group-toolbar' title='Button toolbar'>
        <Tab.Pane eventKey='preview'>
          <ButtonToolbar className='mb-3' aria-label='Settings toolbar'>
            <ButtonGroup className='mb-2 me-2'>
              <Button variant='dark btn-icon'>
                <i className='fi-settings'></i>
              </Button>
              <Button variant='secondary btn-icon'>A</Button>
              <Button variant='secondary btn-icon'>
                <i className='fi-align-right'></i>
              </Button>
              <Button variant='secondary btn-icon'>
                <i className='fi-rotate-right'></i>
              </Button>
            </ButtonGroup>
            <ButtonGroup className='mb-2 me-2'>
              <Button variant='success'>
                <i className='fi-check me-2'></i>
                Apply
              </Button>
            </ButtonGroup>
            <ButtonGroup className='mb-2'>
              <Button variant='translucent-danger btn-icon'>
                <i className='fi-trash'></i>
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          <ButtonToolbar aria-label='Pagination'>
            <ButtonGroup className='mb-2 me-2'>
              <Button variant='outline-secondary'>1</Button>
              <Button variant='outline-secondary'>2</Button>
              <Button variant='outline-secondary'>3</Button>
            </ButtonGroup>
            <ButtonGroup className='mb-2 me-2'>
              <Button variant='outline-secondary'>4</Button>
              <Button variant='outline-secondary'>5</Button>
            </ButtonGroup>
            <ButtonGroup className='mb-2'>
              <Button variant='outline-secondary'>6</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

{/* Toolbar example */}
<ButtonToolbar aria-label='Settings toolbar'>
  <ButtonGroup className='mb-2 me-2'>
    <Button variant='dark btn-icon'>
      <i className='fi-settings'></i>
    </Button>
    <Button variant='secondary btn-icon'>A</Button>
    <Button variant='secondary btn-icon'>
      <i className='fi-align-right'></i>
    </Button>
    <Button variant='secondary btn-icon'>
      <i className='fi-rotate-right'></i>
    </Button>
  </ButtonGroup>
  <ButtonGroup className='mb-2 me-2'>
    <Button variant='success'>
      <i className='fi-check me-2'></i>
      Apply
    </Button>
  </ButtonGroup>
  <ButtonGroup className='mb-2'>
    <Button variant='translucent-danger btn-icon'>
      <i className='fi-trash'></i>
    </Button>
  </ButtonGroup>
</ButtonToolbar>

{/* Pagination example */}
<ButtonToolbar aria-label='Pagination'>
  <ButtonGroup className='mb-2 me-2'>
    <Button variant='outline-secondary'>1</Button>
    <Button variant='outline-secondary'>2</Button>
    <Button variant='outline-secondary'>3</Button>
  </ButtonGroup>
  <ButtonGroup className='mb-2 me-2'>
    <Button variant='outline-secondary'>4</Button>
    <Button variant='outline-secondary'>5</Button>
  </ButtonGroup>
  <ButtonGroup className='mb-2'>
    <Button variant='outline-secondary'>6</Button>
  </ButtonGroup>
</ButtonToolbar>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Sizing */}
      <ComponentPageSection id='btn-group-sizing' title='Sizing'>
        <Tab.Pane eventKey='preview'>
          <Row>
            <Col md={6}>
              <ButtonGroup size='lg' className='mb-3'>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
              <br />
              <ButtonGroup className='mb-3'>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
              <br />
              <ButtonGroup size='sm' className='mb-3'>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Col>
            <Col md={6}>
              <ButtonGroup size='lg' className='mb-3'>
                <Button variant='outline-secondary'>Left</Button>
                <Button variant='outline-secondary'>Middle</Button>
                <Button variant='outline-secondary'>Right</Button>
              </ButtonGroup>
              <br />
              <ButtonGroup className='mb-3'>
                <Button variant='outline-secondary'>Left</Button>
                <Button variant='outline-secondary'>Middle</Button>
                <Button variant='outline-secondary'>Right</Button>
              </ButtonGroup>
              <br />
              <ButtonGroup size='sm' className='mb-3'>
                <Button variant='outline-secondary'>Left</Button>
                <Button variant='outline-secondary'>Middle</Button>
                <Button variant='outline-secondary'>Right</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

{/* Large button group */}
<ButtonGroup size='lg'>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>

{/* Normal button group */}
<ButtonGroup>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>

{/* Small button group */}
<ButtonGroup size='sm'>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Nested dropdown */}
      <ComponentPageSection id='btn-group-dropdown' title='Nested dropdown'>
        <Tab.Pane eventKey='preview'>
          <Row>
            <Col md={6} className='mb-3'>
              <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>
                <DropdownButton as={ButtonGroup} title='Dropdown'>
                  <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                  <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </Col>
            <Col md={6} className='mb-3'>
              <ButtonGroup>
                <Button variant='outline-secondary'>1</Button>
                <Button variant='outline-secondary'>2</Button>
                <DropdownButton as={ButtonGroup} variant='outline-secondary' title='Dropdown'>
                  <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                  <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

<ButtonGroup>
  <Button>1</Button>
  <Button>2</Button>
  <DropdownButton as={ButtonGroup} title='Dropdown'>
    <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
    <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey='3'>Something else</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default ButtonGroupPage
