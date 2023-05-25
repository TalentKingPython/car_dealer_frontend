// Badge component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Code from '../../components/Code'

const BadgesPage = () => {

  const anchorLinks = [
    {
      label: 'Contextual variations',
      anchor: 'badge-contextual'
    },
    {
      label: 'Translucent badges',
      anchor: 'badge-translucent'
    },
    {
      label: 'Pill badges',
      anchor: 'badge-pill'
    },
    {
      label: 'Inside heading',
      anchor: 'badge-heading'
    },
    {
      label: 'Inside button',
      anchor: 'badge-button'
    },
    {
      label: 'Inside list group',
      anchor: 'badge-list-group'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Badges'
      pageDescription='Small count and labeling component.'
      activeNav='/components/badge'
      docsLink='https://react-bootstrap.github.io/components/badge/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Contextual variations */}
      <ComponentPageSection id='badge-contextual' title='Contextual variations'>
        <Tab.Pane eventKey='preview'>
          <Badge bg='primary' className='me-2 mb-2'>Primary</Badge>
          <Badge bg='accent' className='me-2 mb-2'>Accent</Badge>
          <Badge bg='secondary' className='me-2 mb-2'>Secondary</Badge>
          <Badge bg='success' className='me-2 mb-2'>Success</Badge>
          <Badge bg='danger' className='me-2 mb-2'>Danger</Badge>
          <Badge bg='warning' className='me-2 mb-2'>Warning</Badge>
          <Badge bg='info' className='me-2 mb-2'>Info</Badge>
          <div className='d-inline-block bg-dark py-2 px-2 me-2 mb-2'>
            <Badge bg='light'>Light</Badge>
          </div>
          <Badge bg='dark' className='mb-2'>Dark</Badge>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Badge from 'react-bootstrap/Badge'

{/* Primary badge */}
<Badge bg='primary'>Primary</Badge>

{/* Accent badge */}
<Badge bg='accent'>Accent</Badge>

{/* Secondary badge */}
<Badge bg='secondary'>Secondary</Badge>

{/* Success badge */}
<Badge bg='success'>Success</Badge>

{/* Danger badge */}
<Badge bg='danger'>Danger</Badge>

{/* Warning badge */}
<Badge bg='warning'>Warning</Badge>

{/* Info badge */}
<Badge bg='info'>Info</Badge>

{/* Light badge */}
<Badge bg='light'>Light</Badge>

{/* Dark badge */}
<Badge bg='dark'>Dark</Badge>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Translucent badges */}
      <ComponentPageSection id='badge-translucent' title='Translucent badges'>
        <Tab.Pane eventKey='preview'>
          <Badge bg='faded-primary' className='me-2 mb-2'>Primary</Badge>
          <Badge bg='faded-accent' className='me-2 mb-2'>Accent</Badge>
          <Badge bg='faded-success' className='me-2 mb-2'>Success</Badge>
          <Badge bg='faded-danger' className='me-2 mb-2'>Danger</Badge>
          <Badge bg='faded-warning' className='me-2 mb-2'>Warning</Badge>
          <Badge bg='faded-info' className='me-2 mb-2'>Info</Badge>
          <div className='d-inline-block bg-dark py-2 px-2 me-2 mb-2'>
            <Badge bg='faded-light'>Light</Badge>
          </div>
          <Badge bg='faded-dark' className='mb-2'>Dark</Badge>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Badge from 'react-bootstrap/Badge'

{/* Primary badge */}
<Badge bg='faded-primary'>Primary</Badge>

{/* Accent badge */}
<Badge bg='faded-accent'>Accent</Badge>

{/* Success badge */}
<Badge bg='faded-success'>Success</Badge>

{/* Danger badge */}
<Badge bg='faded-danger'>Danger</Badge>

{/* Warning badge */}
<Badge bg='faded-warning'>Warning</Badge>

{/* Info badge */}
<Badge bg='faded-info'>Info</Badge>

{/* Light badge */}
<Badge bg='faded-light'>Light</Badge>

{/* Dark badge */}
<Badge bg='faded-dark'>Dark</Badge>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Pill badges */}
      <ComponentPageSection id='badge-pill' title='Pill badges'>
        <Tab.Pane eventKey='preview'>
          <Badge pill bg='primary' className='me-2 mb-2'>Primary</Badge>
          <Badge pill bg='accent' className='me-2 mb-2'>Accent</Badge>
          <Badge pill bg='secondary' className='me-2 mb-2'>Secondary</Badge>
          <Badge pill bg='success' className='me-2 mb-2'>Success</Badge>
          <Badge pill bg='danger' className='me-2 mb-2'>Danger</Badge>
          <Badge pill bg='warning' className='me-2 mb-2'>Warning</Badge>
          <Badge pill bg='info' className='me-2 mb-2'>Info</Badge>
          <div className='d-inline-block bg-dark py-2 px-2 me-2 mb-2'>
            <Badge pill bg='light'>Light</Badge>
          </div>
          <Badge pill bg='dark' className='mb-2'>Dark</Badge>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Badge from 'react-bootstrap/Badge'

{/* Primary pill badge */}
<Badge pill bg='primary'>Primary</Badge>

{/* Accent pill badge */}
<Badge pill bg='accent'>Accent</Badge>

{/* Secondary pill badge */}
<Badge pill bg='secondary'>Accent</Badge>

{/* Success pill badge */}
<Badge pill bg='success'>Success</Badge>

{/* Danger pill badge */}
<Badge pill bg='danger'>Danger</Badge>

{/* Warning pill badge */}
<Badge pill bg='warning'>Warning</Badge>

{/* Info pill badge */}
<Badge pill bg='info'>Info</Badge>

{/* Light pill badge */}
<Badge pill bg='light'>Light</Badge>

{/* Dark pill badge */}
<Badge pill bg='dark'>Dark</Badge>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inside heading */}
      <ComponentPageSection id='badge-heading' title='Inside heading'>
        <Tab.Pane eventKey='preview'>
          <h1>Example heading <Badge bg='secondary'>New</Badge></h1>
          <h2>Example heading <Badge bg='secondary'>New</Badge></h2>
          <h3>Example heading <Badge bg='secondary'>New</Badge></h3>
          <h4>Example heading <Badge bg='secondary'>New</Badge></h4>
          <h5>Example heading <Badge bg='secondary'>New</Badge></h5>
          <h6>Example heading <Badge bg='secondary'>New</Badge></h6>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Badge from 'react-bootstrap/Badge'

<h1>Example heading <Badge bg='secondary'>New</Badge></h1>
<h2>Example heading <Badge bg='secondary'>New</Badge></h2>
<h3>Example heading <Badge bg='secondary'>New</Badge></h3>
<h4>Example heading <Badge bg='secondary'>New</Badge></h4>
<h5>Example heading <Badge bg='secondary'>New</Badge></h5>
<h6>Example heading <Badge bg='secondary'>New</Badge></h6>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inside button */}
      <ComponentPageSection id='badge-button' title='Inside button'>
        <Tab.Pane eventKey='preview'>
          <Button variant='primary' className='me-3 mb-3'>
            Notifications <Badge bg='light' className='ms-1'>4</Badge>
          </Button>
          <Button variant='dark' className='rounded-pill me-3 mb-3'>
            Profile <Badge pill bg='info' className='ms-1'>9</Badge>
          </Button>
          <Button variant='outline-secondary' className='mb-3'>
            Messages <Badge bg='success' className='ms-1'>18</Badge>
          </Button>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

{/* Button + badge */}
<Button variant='primary'>
  Notifications <Badge bg='light' className='ms-1'>4</Badge>
</Button>

{/* Pill button + pill badge */}
<Button variant='dark' className='rounded-pill'>
  Profile <Badge pill bg='info' className='ms-1'>9</Badge>
</Button>

{/* Outline button + badge */}
<Button variant='outline-secondary'>
  Messages <Badge bg='success' className='ms-1'>18</Badge>
</Button>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inside list group */}
      <ComponentPageSection id='badge-list-group' title='Inside list group'>
        <Tab.Pane eventKey='preview'>
          <ListGroup style={{maxWidth: '20.5rem'}}>
            <ListGroup.Item action href='#' className='d-flex justify-content-between align-items-center'>
              Messages <Badge pill bg='info'>4</Badge>
            </ListGroup.Item>
            <ListGroup.Item action href='#' className='d-flex justify-content-between align-items-center'>
              Orders <Badge pill bg='warning'>2</Badge>
            </ListGroup.Item>
            <ListGroup.Item action href='#' className='d-flex justify-content-between align-items-center'>
              Favorites <Badge pill bg='danger'>6</Badge>
            </ListGroup.Item>
          </ListGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'

{/* Badges inside list group */}
<ListGroup>
  <ListGroup.Item action href='#' className='d-flex justify-content-between align-items-center'>
    Messages <Badge pill bg='info'>4</Badge>
  </ListGroup.Item>
  <ListGroup.Item action href='#' className='d-flex justify-content-between align-items-center'>
    Orders <Badge pill bg='warning'>2</Badge>
  </ListGroup.Item>
  <ListGroup.Item action href='#' className='d-flex justify-content-between align-items-center'>
    Favorites <Badge pill bg='danger'>6</Badge>
  </ListGroup.Item>
</ListGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default BadgesPage
