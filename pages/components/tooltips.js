// Tooltip component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import Code from '../../components/Code'

const TooltipsPage = () => {

  const anchorLinks = [
    {
      label: 'Static example',
      anchor: 'tooltips-static'
    },
    {
      label: 'Live demo',
      anchor: 'tooltips-demo'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Tooltips'
      pageDescription='Custom tooltips for local title storage.'
      activeNav='/components/tooltips'
      docsLink='https://react-bootstrap.github.io/components/overlays/#tooltips'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Static example */}
      <section id='tooltips-static' className='pb-5 mb-md-2'>
        <h2 className='h5 mb-3'>Static example</h2>
        <div className='card border-0 shadow-sm'>
          <div className='card-body'>
            <style>{`
              .example-tooltip .tooltip {
                display: inline-block;
                position: relative;
                margin: .625rem 1.25rem;
                opacity: 1;
                z-index: 1;
              }
              .example-tooltip .tooltip.bs-tooltip-top .tooltip-arrow,
              .example-tooltip .tooltip.bs-tooltip-bottom .tooltip-arrow {
                left: 50%;
                margin-left: -.375rem;
              }
              .example-tooltip .tooltip.bs-tooltip-end .tooltip-arrow,
              .example-tooltip .tooltip.bs-tooltip-start .tooltip-arrow {
                top: 50%;
                margin-top: -.375rem;
              }
            `}
            </style>
            <div className='example-tooltip'>
              <Tooltip show='true' placement='top'>Tooltip on the top</Tooltip>
              <Tooltip show='true' placement='end'>Tooltip on the right</Tooltip>
              <Tooltip show='true' placement='bottom'>Tooltip on the bottom</Tooltip>
              <Tooltip show='true' placement='start'>Tooltip on the left</Tooltip>
              <Tooltip show='true' placement='top'>
                <i>Tooltip</i> <u>with</u> <strong>JSX</strong>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>


      {/* Live demo */}
      <ComponentPageSection id='tooltips-demo' title='Live demo'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap'>
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip>Tooltp on top</Tooltip>}
            >
              <Button variant='outline-secondary' className='me-3 mb-3'>Tooltp on top</Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement='right'
              overlay={<Tooltip>Tooltp on right</Tooltip>}
            >
              <Button variant='outline-secondary' className='me-3 mb-3'>Tooltp on right</Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement='bottom'
              overlay={<Tooltip>Tooltp on bottom</Tooltip>}
            >
              <Button variant='outline-secondary' className='me-3 mb-3'>Tooltp on bottom</Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement='left'
              overlay={<Tooltip>Tooltp on left</Tooltip>}
            >
              <Button variant='outline-secondary' className='me-3 mb-3'>Tooltp on left</Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip><i>Tooltip</i> <u>with</u> <strong>JSX</strong></Tooltip>}
            >
              <Button variant='outline-secondary' className='mb-3'>Tooltp with JSX</Button>
            </OverlayTrigger>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'

{/* Tooltip on the top */}
<OverlayTrigger
  placement='top'
  overlay={<Tooltip>Tooltp on top</Tooltip>}
>
  <Button variant='outline-secondary'>Tooltp on top</Button>
</OverlayTrigger>

{/* Tooltip on the right */}
<OverlayTrigger
  placement='right'
  overlay={<Tooltip>Tooltp on right</Tooltip>}
>
  <Button variant='outline-secondary'>Tooltp on right</Button>
</OverlayTrigger>

{/* Tooltip on the bottom */}
<OverlayTrigger
  placement='bottom'
  overlay={<Tooltip>Tooltp on bottom</Tooltip>}
>
  <Button variant='outline-secondary'>Tooltp on bottom</Button>
</OverlayTrigger>

{/* Tooltip on the left */}
<OverlayTrigger
  placement='left'
  overlay={<Tooltip>Tooltp on left</Tooltip>}
>
  <Button variant='outline-secondary'>Tooltp on left</Button>
</OverlayTrigger>

{/* Tooltp with JSX */}
<OverlayTrigger
  placement='top'
  overlay={<Tooltip><i>Tooltip</i> <u>with</u> <strong>JSX</strong></Tooltip>}
>
  <Button variant='outline-secondary'>Tooltp with JSX</Button>
</OverlayTrigger>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default TooltipsPage
