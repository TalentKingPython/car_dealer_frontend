// Popover component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Code from '../../components/Code'

const PopoversPage = () => {

  const anchorLinks = [
    {
      label: 'Static example',
      anchor: 'popovers-static'
    },
    {
      label: 'Live demo',
      anchor: 'popovers-demo'
    },
    {
      label: 'Toggle on click / hover',
      anchor: 'popovers-toggle'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Popovers'
      pageDescription='A pop-up box that appears when the user clicks/hovers on an element.'
      activeNav='/components/popovers'
      docsLink='https://react-bootstrap.github.io/components/overlays/#popovers'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Static example */}
      <section id='popovers-static' className='pb-5 mb-md-2'>
        <h2 className='h5 mb-3'>Static example</h2>
        <div className='card border-0 shadow-sm'>
          <div className='card-body'>
            <style>{`
              .example-popover .popover {
                display: block;
                position: relative;
                width: 16.25rem;
                margin: 1rem;
                float: left;
              }
              .example-popover .bs-popover-top .popover-arrow,
              .example-popover .bs-popover-bottom .popover-arrow {
                left: 50% !important;
                margin-left: -.126rem !important;
              }
              .example-popover .bs-popover-start .popover-arrow,
              .example-popover .bs-popover-end .popover-arrow {
                top: 50%;
                margin-top: -.375rem;
              }
            `}
            </style>
            <div className='example-popover'>
              <Popover placement='top'>
                <Popover.Header as='h3'>Popover top</Popover.Header>
                <Popover.Body>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
                </Popover.Body>
              </Popover>
              <Popover placement='end'>
                <Popover.Header as='h3'>Popover right</Popover.Header>
                <Popover.Body>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
                </Popover.Body>
              </Popover>
              <Popover placement='bottom'>
                <Popover.Header as='h3'>Popover bottom</Popover.Header>
                <Popover.Body>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
                </Popover.Body>
              </Popover>
              <Popover placement='start'>
                <Popover.Header as='h3'>Popover left</Popover.Header>
                <Popover.Body>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
                </Popover.Body>
              </Popover>
            </div>
          </div>
        </div>
      </section>


      {/* Live demo */}
      <ComponentPageSection id='popovers-demo' title='Live demo'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap'>
            <OverlayTrigger
              placement='top'
              overlay={
                <Popover>
                  <Popover.Header as='h3'>Popover top</Popover.Header>
                  <Popover.Body>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant='accent' className='me-3 mb-3'>Popover on top</Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement='right'
              overlay={
                <Popover>
                  <Popover.Header as='h3'>Popover right</Popover.Header>
                  <Popover.Body>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant='accent' className='me-3 mb-3'>Popover on right</Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement='bottom'
              overlay={
                <Popover>
                  <Popover.Header as='h3'>Popover bottom</Popover.Header>
                  <Popover.Body>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant='accent' className='me-3 mb-3'>Popover on bottom</Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement='left'
              overlay={
                <Popover>
                  <Popover.Header as='h3'>Popover left</Popover.Header>
                  <Popover.Body>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant='accent' className='mb-3'>Popover on left</Button>
            </OverlayTrigger>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'

{/* Popover on the top */}
<OverlayTrigger
  placement='top'
  overlay={
    <Popover>
      <Popover.Header as='h3'>Popover top</Popover.Header>
      <Popover.Body>
        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
      </Popover.Body>
    </Popover>
  }
>
  <Button variant='accent'>Popover on top</Button>
</OverlayTrigger>

{/* Popover on the right */}
<OverlayTrigger
  placement='right'
  overlay={
    <Popover>
      <Popover.Header as='h3'>Popover right</Popover.Header>
      <Popover.Body>
        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
      </Popover.Body>
    </Popover>
  }
>
  <Button variant='accent'>Popover on right</Button>
</OverlayTrigger>

{/* Popover on the bottom */}
<OverlayTrigger
  placement='bottom'
  overlay={
    <Popover>
      <Popover.Header as='h3'>Popover bottom</Popover.Header>
      <Popover.Body>
        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
      </Popover.Body>
    </Popover>
  }
>
  <Button variant='accent'>Popover on bottom</Button>
</OverlayTrigger>

{/* Popover on the left */}
<OverlayTrigger
  placement='left'
  overlay={
    <Popover>
      <Popover.Header as='h3'>Popover left</Popover.Header>
      <Popover.Body>
        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
      </Popover.Body>
    </Popover>
  }
>
  <Button variant='accent'>Popover on left</Button>
</OverlayTrigger>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Toggle on click / hover */}
      <ComponentPageSection id='popovers-toggle' title='Toggle on click / hover'>
        <Tab.Pane eventKey='preview'>
          <div className='d-flex flex-wrap'>
            <OverlayTrigger
              trigger='click'
              placement='top'
              overlay={
                <Popover>
                  <Popover.Header as='h3'>Popover on click</Popover.Header>
                  <Popover.Body>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant='primary' className='me-3 mb-3'>Toggle popover on click</Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement='top'
              overlay={
                <Popover>
                  <Popover.Header as='h3'>Popover on hover</Popover.Header>
                  <Popover.Body>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant='outline-primary' className='mb-3'>Toggle popover on hover</Button>
            </OverlayTrigger>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'

{/* Toggle popover on click */}
<OverlayTrigger
  trigger='click'
  placement='top'
  overlay={
    <Popover>
      <Popover.Header as='h3'>Popover on click</Popover.Header>
      <Popover.Body>
        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
      </Popover.Body>
    </Popover>
  }
>
  <Button variant='primary'>Toggle popover on click</Button>
</OverlayTrigger>

{/* Toggle popover on hover (hover is a default trigger) */}
<OverlayTrigger
  placement='top'
  overlay={
    <Popover>
      <Popover.Header as='h3'>Popover on hover</Popover.Header>
      <Popover.Body>
        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.
      </Popover.Body>
    </Popover>
  }
>
  <Button variant='outline-primary'>Toggle popover on hover</Button>
</OverlayTrigger>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default PopoversPage
