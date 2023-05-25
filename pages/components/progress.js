// Progress bar component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Code from '../../components/Code'

const ProgressPage = () => {

  const anchorLinks = [
    {
      label: 'Color variation (thick)',
      anchor: 'progress-colors-thick'
    },
    {
      label: 'Color variation (thin)',
      anchor: 'progress-colors-thin'
    },
    {
      label: 'Multiple bars',
      anchor: 'progress-multiple'
    },
    {
      label: 'Animated striped bars',
      anchor: 'progress-animated'
    },
    {
      label: 'Light version',
      anchor: 'progress-light'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Progress'
      pageDescription='Custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.'
      activeNav='/components/progress'
      docsLink='https://react-bootstrap.github.io/components/progress/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Color variation (thick) */}
      <ComponentPageSection id='progress-colors-thick' title='Color variation (thick)'>
        <Tab.Pane eventKey='preview'>
          <ProgressBar variant='primary' now={45} label='45%' className='mb-3' />
          <ProgressBar variant='accent' now={60} label='60%' className='mb-3' />
          <ProgressBar variant='success' now={55} label='55%' className='mb-3' />
          <ProgressBar variant='danger' now={40} label='40%' className='mb-3' />
          <ProgressBar variant='warning' now={70} label='70%' className='mb-3' />
          <ProgressBar variant='info' now={60} label='60%' className='mb-3' />
          <ProgressBar variant='dark' now={33} label='33%' />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ProgressBar from 'react-bootstrap/ProgressBar'

{/* Primary progress bar */}
<ProgressBar variant='primary' now={45} label='45%' />

{/* Accent progress bar */}
<ProgressBar variant='accent' now={60} label='60%' />

{/* Success progress bar */}
<ProgressBar variant='success' now={55} label='55%' />

{/* Danger progress bar */}
<ProgressBar variant='danger' now={40} label='40%' />

{/* Warning progress bar */}
<ProgressBar variant='warning' now={70} label='70%' />

{/* Info progress bar */}
<ProgressBar variant='info' now={60} label='60%' />

{/* Dark progress bar */}
<ProgressBar variant='dark' now={33} label='33%' />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Color variation (thin) */}
      <ComponentPageSection id='progress-colors-thin' title='Color variation (thin)'>
        <Tab.Pane eventKey='preview'>
          <div className='fs-sm mb-2'>45%</div>
          <ProgressBar variant='primary' now={45} style={{height: '4px'}} className='mb-3' />
          <div className='fs-sm mb-2'>60%</div>
          <ProgressBar variant='accent' now={60} style={{height: '4px'}} className='mb-3' />
          <div className='fs-sm mb-2'>55%</div>
          <ProgressBar variant='success' now={55} style={{height: '4px'}} className='mb-3' />
          <div className='fs-sm mb-2'>40%</div>
          <ProgressBar variant='danger' now={40} style={{height: '4px'}} className='mb-3' />
          <div className='fs-sm mb-2'>70%</div>
          <ProgressBar variant='warning' now={70} style={{height: '4px'}} className='mb-3' />
          <div className='fs-sm mb-2'>60%</div>
          <ProgressBar variant='info' now={60} style={{height: '4px'}} className='mb-3' />
          <div className='fs-sm mb-2'>33%</div>
          <ProgressBar variant='dark' now={33} style={{height: '4px'}} />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ProgressBar from 'react-bootstrap/ProgressBar'

{/* Primary progress bar */}
<div className='fs-sm mb-2'>45%</div>
<ProgressBar variant='primary' now={45} style={{height: '4px'}} />

{/* Accent progress bar */}
<div className='fs-sm mb-2'>60%</div>
<ProgressBar variant='accent' now={60} style={{height: '4px'}} />

{/* Success progress bar */}
<div className='fs-sm mb-2'>55%</div>
<ProgressBar variant='success' now={55} style={{height: '4px'}} />

{/* Danger progress bar */}
<div className='fs-sm mb-2'>40%</div>
<ProgressBar variant='danger' now={40} style={{height: '4px'}} />

{/* Warning progress bar */}
<div className='fs-sm mb-2'>70%</div>
<ProgressBar variant='warning' now={70} style={{height: '4px'}} />

{/* Info progress bar */}
<div className='fs-sm mb-2'>60%</div>
<ProgressBar variant='info' now={60} style={{height: '4px'}} />

{/* Dark progress bar */}
<div className='fs-sm mb-2'>33%</div>
<ProgressBar variant='dark' now={33} style={{height: '4px'}} />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Multiple bars */}
      <ComponentPageSection id='progress-multiple' title='Multiple bars'>
        <Tab.Pane eventKey='preview'>
          <ProgressBar className='mb-3'>
            <ProgressBar variant='info' now={15} />
            <ProgressBar variant='primary' now={10} />
            <ProgressBar variant='success' now={20} />
            <ProgressBar variant='warning' now={25} />
          </ProgressBar>
          <ProgressBar style={{height: '4px'}}>
            <ProgressBar variant='warning' now={20} />
            <ProgressBar variant='info' now={25} />
            <ProgressBar variant='danger' now={10} />
            <ProgressBar variant='success' now={15} />
          </ProgressBar>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ProgressBar from 'react-bootstrap/ProgressBar'

{/* Thick bars */}
<ProgressBar>
  <ProgressBar variant='info' now={15} />
  <ProgressBar variant='primary' now={10} />
  <ProgressBar variant='success' now={20} />
  <ProgressBar variant='warning' now={25} />
</ProgressBar>

{/* Thin bars */}
<ProgressBar style={{height: '4px'}}>
  <ProgressBar variant='warning' now={20} />
  <ProgressBar variant='info' now={25} />
  <ProgressBar variant='danger' now={10} />
  <ProgressBar variant='success' now={15} />
</ProgressBar>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Animated striped bars */}
      <ComponentPageSection id='progress-animated' title='Animated striped bars'>
        <Tab.Pane eventKey='preview'>
          <ProgressBar animated variant='primary' now={45} className='mb-3' />
          <ProgressBar animated variant='accent' now={60} className='mb-3' />
          <ProgressBar animated variant='success' now={55} className='mb-3' />
          <ProgressBar animated variant='danger' now={40} className='mb-3' />
          <ProgressBar animated variant='warning' now={70} className='mb-3' />
          <ProgressBar animated variant='info' now={60} className='mb-3' />
          <ProgressBar animated variant='dark' now={33} />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ProgressBar from 'react-bootstrap/ProgressBar'

{/* Animated striped primary progress bar */}
<ProgressBar animated variant='primary' now={45} />

{/* Animated striped accent progress bar */}
<ProgressBar animated variant='accent' now={60} />

{/* Animated striped success progress bar */}
<ProgressBar animated variant='success' now={55} />

{/* Animated striped danger progress bar */}
<ProgressBar animated variant='danger' now={40} />

{/* Animated striped warning progress bar */}
<ProgressBar animated variant='warning' now={70} />

{/* Animated striped info progress bar */}
<ProgressBar animated variant='info' now={60} />

{/* Animated striped dark progress bar */}
<ProgressBar animated variant='dark' now={33} />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light version */}
      <ComponentPageSection id='progress-light' title='Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <ProgressBar variant='primary' now={45} label='45%' className='progress-light mb-3' />
          <ProgressBar variant='accent' now={60} label='60%' className='progress-light mb-3' />
          <ProgressBar variant='success' now={55} label='55%' className='progress-light mb-3' />
          <ProgressBar variant='danger' now={40} label='40%' className='progress-light mb-3' />
          <ProgressBar variant='warning' now={70} label='70%' className='progress-light mb-3' />
          <ProgressBar variant='info' now={60} label='60%' className='progress-light' />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ProgressBar from 'react-bootstrap/ProgressBar'

{/* Primary light progress bar */}
<ProgressBar variant='primary' now={45} label='45%' className='progress-light' />

{/* Accent light progress bar */}
<ProgressBar variant='accent' now={60} label='60%' className='progress-light' />

{/* Success light progress bar */}
<ProgressBar variant='success' now={55} label='55%' className='progress-light' />

{/* Danger light progress bar */}
<ProgressBar variant='danger' now={40} label='40%' className='progress-light' />

{/* Warning light progress bar */}
<ProgressBar variant='warning' now={70} label='70%' className='progress-light' />

{/* Info light progress bar */}
<ProgressBar variant='info' now={60} label='60%' className='progress-light' />`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default ProgressPage
