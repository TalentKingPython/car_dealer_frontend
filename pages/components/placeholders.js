// Placeholder component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Placeholder from 'react-bootstrap/Placeholder'
import Card from 'react-bootstrap/Card'
import Code from '../../components/Code'

const PlaceholdersPage = () => {

  const anchorLinks = [
    {
      label: 'Width',
      anchor: 'placeholders-width'
    },
    {
      label: 'Color',
      anchor: 'placeholders-color'
    },
    {
      label: 'Sizing',
      anchor: 'placeholders-sizing'
    },
    {
      label: 'Animation',
      anchor: 'placeholders-animation'
    },
    {
      label: 'Use case example',
      anchor: 'placeholders-example'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Placeholders'
      pageDescription='Use loading placeholders for your components or pages to indicate something may still be loading.'
      activeNav='/components/placeholders'
      docsLink='https://react-bootstrap.github.io/components/placeholder/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Width */}
      <ComponentPageSection id='placeholders-width' title='Width'>
        <Tab.Pane eventKey='preview'>
          <Placeholder xs={6} />
          <Placeholder className='w-75' />
          <Placeholder style={{ width: '33%' }} />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Placeholder from 'react-bootstrap/Placeholder'

{/* Width via col-* attribute */}
<Placeholder xs={6} />

{/* Width via w-* class */}
<Placeholder className='w-75' />

{/* Width via style attribute */}
<Placeholder style={{ width: '33%' }} />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Color */}
      <ComponentPageSection id='placeholders-color' title='Color'>
        <Tab.Pane eventKey='preview'>
          <Placeholder xs={12} />
          <Placeholder xs={12} bg='primary' />
          <Placeholder xs={12} bg='accent' />
          <Placeholder xs={12} bg='success' />
          <Placeholder xs={12} bg='danger' />
          <Placeholder xs={12} bg='warning' />
          <Placeholder xs={12} bg='info' />
          <div className='bg-dark p-2 my-2'>
            <Placeholder xs={12} bg='light' />
          </div>
          <Placeholder xs={12} bg='dark' />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Placeholder from 'react-bootstrap/Placeholder'

{/* Default */}
<Placeholder xs={12} />

{/* Primary */}
<Placeholder xs={12} bg='primary' />

{/* Accent */}
<Placeholder xs={12} bg='accent' />

{/* Success */}
<Placeholder xs={12} bg='success' />

{/* Danger */}
<Placeholder xs={12} bg='danger' />

{/* Warning */}
<Placeholder xs={12} bg='warning' />

{/* Info */}
<Placeholder xs={12} bg='info' />

{/* Light */}
<Placeholder xs={12} bg='light' />

{/* Dark */}
<Placeholder xs={12} bg='dark' />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Sizing */}
      <ComponentPageSection id='placeholders-sizing' title='Sizing'>
        <Tab.Pane eventKey='preview'>
          <Placeholder xs={12} size='lg' />
          <Placeholder xs={12} />
          <Placeholder xs={12} size='sm' />
          <Placeholder xs={12} size='xs' />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Placeholder from 'react-bootstrap/Placeholder'

{/* Large */}
<Placeholder xs={12} size='lg' />

{/* Default */}
<Placeholder xs={12} />

{/* Small */}
<Placeholder xs={12} size='sm' />

{/* Extra small */}
<Placeholder xs={12} size='xs' />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Animation */}
      <ComponentPageSection id='placeholders-animation' title='Animation'>
        <Tab.Pane eventKey='preview'>
          <Placeholder as='p' animation='glow'>
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as='p' animation='wave' className='mb-0'>
            <Placeholder xs={12} />
          </Placeholder>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Placeholder from 'react-bootstrap/Placeholder'

{/* Glow animation */}
<Placeholder as='p' animation='glow'>
  <Placeholder xs={12} />
</Placeholder>

{/* Wave animation */}
<Placeholder as='p' animation='wave'>
  <Placeholder xs={12} />
</Placeholder>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Use case example */}
      <ComponentPageSection id='placeholders-example' title='Use case example'>
        <Tab.Pane eventKey='preview'>
          <Card className='border-0 shadow' style={{maxWidth: '22rem'}}>
            <Placeholder as='div' animation='wave' className='position-relative'>
              <Placeholder as='div' className='card-img-top ratio ratio-16x9' />
              <i className='fi-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40'></i>
            </Placeholder>
            <Card.Body>
              <Placeholder as='h5' animation='glow' className='card-title'>
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as='p' animation='glow' className='card-text'>
                <Placeholder size='sm' xs={7} className='me-2' />
                <Placeholder size='sm' xs={4} />
                <Placeholder size='sm' xs={4} className='me-2' />
                <Placeholder size='sm' xs={6} />
                <Placeholder size='sm' xs={8} />
              </Placeholder>
              <Placeholder.Button xs={6} aria-hidden='true' className='placeholder-wave' />
            </Card.Body>
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'

{/* Loading card placeholder example */}
<Card className='border-0 shadow'>
  <Placeholder as='div' animation='wave' className='position-relative'>
    <Placeholder as='div' className='card-img-top ratio ratio-16x9' />
    <i className='fi-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40'></i>
  </Placeholder>
  <Card.Body>
    <Placeholder as='h5' animation='glow' className='card-title'>
      <Placeholder xs={6} />
    </Placeholder>
    <Placeholder as='p' animation='glow' className='card-text'>
      <Placeholder size='sm' xs={7} className='me-2' />
      <Placeholder size='sm' xs={4} />
      <Placeholder size='sm' xs={4} className='me-2' />
      <Placeholder size='sm' xs={6} />
      <Placeholder size='sm' xs={8} />
    </Placeholder>
    <Placeholder.Button xs={6} aria-hidden='true' className='placeholder-wave' />
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default PlaceholdersPage
