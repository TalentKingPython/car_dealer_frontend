// Spinners component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Code from '../../components/Code'

const SpinnersPage = () => {

  const anchorLinks = [
    {
      label: 'Border spinner',
      anchor: 'spinners-border'
    },
    {
      label: 'Growing spinner',
      anchor: 'spinners-growing'
    },
    {
      label: 'Size',
      anchor: 'spinners-size'
    },
    {
      label: 'Inside button',
      anchor: 'spinners-button'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Spinners'
      pageDescription='Indicate the loading state of a component or page.'
      activeNav='/components/spinners'
      docsLink='https://react-bootstrap.github.io/components/spinners/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Border spinner */}
      <ComponentPageSection id='spinners-border' title='Border spinner'>
        <Tab.Pane eventKey='preview'>
          <Spinner animation='border' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='border' variant='muted' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='border' variant='primary' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='border' variant='accent' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='border' variant='secondary' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='border' variant='success' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='border' variant='danger' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='border' variant='warning' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='border' variant='info' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <div className='d-inline-block bg-dark mx-2'>
            <Spinner animation='border' variant='light' role='status' className='m-2 mb-1'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
          <Spinner animation='border' variant='dark' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Spinner from 'react-bootstrap/Spinner'

{/* Default border spinner */}
<Spinner animation='border' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Gray (muted) border spinner */}
<Spinner animation='border' variant='muted' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Primary border spinner */}
<Spinner animation='border' variant='primary' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Accent border spinner */}
<Spinner animation='border' variant='accent' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Secondary border spinner */}
<Spinner animation='border' variant='secondary' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Success border spinner */}
<Spinner animation='border' variant='success' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Danger border spinner */}
<Spinner animation='border' variant='danger' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Warning border spinner */}
<Spinner animation='border' variant='warning' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Info border spinner */}
<Spinner animation='border' variant='info' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Light border spinner */}
<Spinner animation='border' variant='light' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Dark border spinner */}
<Spinner animation='border' variant='dark' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Growing spinner */}
      <ComponentPageSection id='spinners-growing' title='Growing spinner'>
        <Tab.Pane eventKey='preview'>
          <Spinner animation='grow' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='grow' variant='muted' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='grow' variant='primary' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='grow' variant='accent' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='grow' variant='secondary' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='grow' variant='success' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='grow' variant='danger' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='grow' variant='warning' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <Spinner animation='grow' variant='info' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
          <div className='d-inline-block bg-dark mx-2'>
            <Spinner animation='grow' variant='light' role='status' className='m-2 mb-1'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
          <Spinner animation='grow' variant='dark' role='status' className='m-2'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Spinner from 'react-bootstrap/Spinner'

{/* Default growing spinner */}
<Spinner animation='grow' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Gray (muted) growing spinner */}
<Spinner animation='grow' variant='muted' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Primary growing spinner */}
<Spinner animation='grow' variant='primary' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Accent growing spinner */}
<Spinner animation='grow' variant='accent' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Secondary growing spinner */}
<Spinner animation='grow' variant='secondary' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Success growing spinner */}
<Spinner animation='grow' variant='success' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Danger growing spinner */}
<Spinner animation='grow' variant='danger' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Warning growing spinner */}
<Spinner animation='grow' variant='warning' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Info growing spinner */}
<Spinner animation='grow' variant='info' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Light growing spinner */}
<Spinner animation='grow' variant='light' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Dark growing spinner */}
<Spinner animation='grow' variant='dark' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Size */}
      <ComponentPageSection id='spinners-size' title='Size'>
        <Tab.Pane eventKey='preview'>
          <div className='d-inline-block align-middle me-2'>
            <Spinner animation='border' size='sm' role='status' className='m-2'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <Spinner animation='grow' size='sm' role='status' className='m-2'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
          <div className='d-inline-block align-middle'>
            <Spinner animation='border' role='status' style={{width: '3rem', height: '3rem'}} className='m-2'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <Spinner animation='grow' role='status' style={{width: '3rem', height: '3rem'}} className='m-2'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Spinner from 'react-bootstrap/Spinner'

{/* Small border spinner */}
<Spinner animation='border' size='sm' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Small growing spinner */}
<Spinner animation='grow' size='sm' role='status'>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Custom size border spinner */}
<Spinner animation='border' role='status' style={{width: '3rem', height: '3rem'}}>
  <span className='visually-hidden'>Loading...</span>
</Spinner>

{/* Custom size growing spinner */}
<Spinner animation='grow' role='status' style={{width: '3rem', height: '3rem'}}>
  <span className='visually-hidden'>Loading...</span>
</Spinner>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inside button */}
      <ComponentPageSection id='spinners-button' title='Inside button'>
        <Tab.Pane eventKey='preview'>
          <Button variant='primary btn-icon' className='me-2 mb-3'>
            <Spinner animation='border' size='sm' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </Button>
          <Button variant='primary' className='me-3 mb-3'>
            <Spinner animation='border' size='sm' role='status' className='me-2' />
            Loading...
          </Button>
          <Button variant='secondary btn-icon' className='me-2 mb-3'>
            <Spinner animation='grow' size='sm' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </Button>
          <Button variant='secondary' className='mb-3'>
            <Spinner animation='grow' size='sm' role='status' className='me-2' />
            Loading...
          </Button>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

{/* Button with border spinner */}
<Button variant='primary btn-icon'>
  <Spinner animation='border' size='sm' role='status'>
    <span className='visually-hidden'>Loading...</span>
  </Spinner>
</Button>

{/* Button with border spinner and text */}
<Button variant='primary'>
  <Spinner animation='border' size='sm' role='status' className='me-2' />
  Loading...
</Button>

{/* Button with growing spinner */}
<Button variant='secondary btn-icon'>
  <Spinner animation='grow' size='sm' role='status'>
    <span className='visually-hidden'>Loading...</span>
  </Spinner>
</Button>

{/* Button with growing spinner and text */}
<Button variant='secondary'>
  <Spinner animation='grow' size='sm' role='status' className='me-2' />
  Loading...
</Button>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default SpinnersPage
