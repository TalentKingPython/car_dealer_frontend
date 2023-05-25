// Steps component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Code from '../../components/Code'
import Steps, { Step } from '../../components/Steps'
import StepCard from '../../components/StepCard'

const StepsPage = () => {

  const anchorLinks = [
    {
      label: 'Inline steps: Default',
      anchor: 'steps-inline'
    },
    {
      label: 'Inline steps: Links',
      anchor: 'steps-inline-links'
    },
    {
      label: 'Inline steps: Vertical',
      anchor: 'steps-inline-vertical'
    },
    {
      label: 'Inline steps: Light version',
      anchor: 'steps-inline-light'
    },
    {
      label: 'Card based: Default',
      anchor: 'steps-card'
    },
    {
      label: 'Card based: Links',
      anchor: 'steps-card-link'
    },
    {
      label: 'Card based: Alignment',
      anchor: 'steps-card-alignment'
    },
    {
      label: 'Card based: Light version',
      anchor: 'steps-card-light'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Steps'
      pageDescription='Series of steps or conditions that the user needs to complete in order to accomplish a goal.'
      activeNav='/components/steps'
      anchorLinks={anchorLinks}
    >

      {/* Inline steps: Default */}
      <ComponentPageSection id='steps-inline' title='Inline steps: Default'>
        <Tab.Pane eventKey='preview'>
          <Steps className='pt-4 pb-3'>
            <Step active>Basic info</Step>
            <Step active>Company details</Step>
            <Step>Job details</Step>
            <Step>Post a job</Step>
          </Steps>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Steps, { Step } from '../components/Steps'

{/* Default inline steps */}
<Steps>
  <Step active>Basic info</Step>
  <Step active>Company details</Step>
  <Step>Job details</Step>
  <Step>Post a job</Step>
</Steps>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inline steps: Links */}
      <ComponentPageSection id='steps-inline-links' title='Inline steps: Links'>
        <Tab.Pane eventKey='preview'>
          <Steps className='pt-4 pb-3'>
            <Step href='#' active>Basic info</Step>
            <Step href='#'>Company details</Step>
            <Step href='#'>Job details</Step>
            <Step href='#'>Post a job</Step>
          </Steps>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Steps, { Step } from '../components/Steps'

{/* Clickable inline steps (links) */}
<Steps>
  <Step href='#' active>Basic info</Step>
  <Step href='#'>Company details</Step>
  <Step href='#'>Job details</Step>
  <Step href='#'>Post a job</Step>
</Steps>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>

      
      {/* Inline steps: Vertical */}
      <ComponentPageSection id='steps-inline-vertical' title='Inline steps: Vertical'>
        <Tab.Pane eventKey='preview'>
          <Steps vertical className='pt-4 pb-3' style={{maxWidth: '42rem'}}>
            <Step active>
              <h5 className='mb-2 pb-1'>2019</h5>
              <p className='mb-0'>Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis risus, donec in ac ultricies tempor eu, amet.</p>
            </Step>
            <Step active>
              <h5 className='mb-2 pb-1'>2020</h5>
              <p className='mb-0'>Vitae erat ornare facilisi id sollicitudin turpis tempus, semper. Velit integer et volutpat, a. Massa ut amet amet, vitae nunc nulla sed.</p>
            </Step>
            <Step>
              <h5 className='mb-2 pb-1'>2021</h5>
              <p className='mb-0'>Ut mattis nascetur aliquam neque velit nunc sed. Morbi congue mauris amet ultrices molestie tellus proin odio diam. Feugiat elit, habitasse egestas egestas id nec potenti. Donec convallis donec tristique mattis et viverra.</p>
            </Step>
            <Step>
              <h5 className='mb-2 pb-1'>2022</h5>
              <p className='mb-0'>Tempor nullam pellentesque suspendisse nec. Arcu sagittis sed ut diam in ultrices. Leo lacinia feugiat interdum pellentesque nulla vitae duis.</p>
            </Step>
          </Steps>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Steps, { Step } from '../components/Steps'

{/* Vertical inline steps */}
<Steps vertical>
  <Step active>
    <h5 className='mb-2 pb-1'>2019</h5>
    <p className='mb-0'>Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis risus, donec in ac ultricies tempor eu, amet.</p>
  </Step>
  <Step active>
    <h5 className='mb-2 pb-1'>2020</h5>
    <p className='mb-0'>Vitae erat ornare facilisi id sollicitudin turpis tempus, semper. Velit integer et volutpat, a. Massa ut amet amet, vitae nunc nulla sed.</p>
  </Step>
  <Step>
    <h5 className='mb-2 pb-1'>2021</h5>
    <p className='mb-0'>Ut mattis nascetur aliquam neque velit nunc sed. Morbi congue mauris amet ultrices molestie tellus proin odio diam. Feugiat elit, habitasse egestas egestas id nec potenti. Donec convallis donec tristique mattis et viverra.</p>
  </Step>
  <Step>
    <h5 className='mb-2 pb-1'>2022</h5>
    <p className='mb-0'>Tempor nullam pellentesque suspendisse nec. Arcu sagittis sed ut diam in ultrices. Leo lacinia feugiat interdum pellentesque nulla vitae duis.</p>
  </Step>
</Steps>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inline steps: Light version */}
      <ComponentPageSection id='steps-inline-light' title='Inline steps: Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <Steps light className='pt-4 pb-3'>
            <Step active>Basic info</Step>
            <Step active>Company details</Step>
            <Step>Job details</Step>
            <Step>Post a job</Step>
          </Steps>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Steps, { Step } from '../components/Steps'

{/* Light inline steps */}
<Steps light>
  <Step active>Basic info</Step>
  <Step active>Company details</Step>
  <Step>Job details</Step>
  <Step>Post a job</Step>
</Steps>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Card based: Default */}
      <ComponentPageSection id='steps-card' title='Card based: Default'>
        <Tab.Pane eventKey='preview'>
          <Row className='py-2'>
            <Col md={4}>
              <StepCard
                number='01'
                title='Create a Job Ad'
                text='In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras.'
              />
            </Col>
            <Col md={4}>
              <StepCard
                number='02'
                title='Select a Pricing Plan'
                text='Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui.'
              />
            </Col>
            <Col md={4}>
              <StepCard
                number='03'
                title='Post Your Job'
                text='Sit auctor aliquam leo duis. Praesent ut penatibus faucibus nibh arcu tempor.'
              />
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'          
import StepCard from '../components/StepCard'

{/* Card based steps */}
<Row>
  <Col md={4}>
    <StepCard
      number='01'
      title='Create a Job Ad'
      text='In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras.'
    />
  </Col>
  <Col md={4}>
    <StepCard
      number='02'
      title='Select a Pricing Plan'
      text='Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui.'
    />
  </Col>
  <Col md={4}>
    <StepCard
      number='03'
      title='Post Your Job'
      text='Sit auctor aliquam leo duis. Praesent ut penatibus faucibus nibh arcu tempor.'
    />
  </Col>
</Row>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Card based: Links */}
      <ComponentPageSection id='steps-card-link' title='Card based: Links'>
        <Tab.Pane eventKey='preview'>
          <Row className='py-2'>
            <Col md={4}>
              <StepCard
                href='#'
                number='01'
                title='Create a Job Ad'
                text='In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras.'
              />
            </Col>
            <Col md={4}>
              <StepCard
                href='#'
                number='02'
                title='Select a Pricing Plan'
                text='Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui.'
              />
            </Col>
            <Col md={4}>
              <StepCard
                href='#'
                number='03'
                title='Post Your Job'
                text='Sit auctor aliquam leo duis. Praesent ut penatibus faucibus nibh arcu tempor.'
              />
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'          
import StepCard from '../../components/StepCard'

{/* Clickable card based steps (links) */}
<Row>
  <Col md={4}>
    <StepCard
      href='#'
      number='01'
      title='Create a Job Ad'
      text='In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras.'
    />
  </Col>
  <Col md={4}>
    <StepCard
      href='#'
      number='02'
      title='Select a Pricing Plan'
      text='Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui.'
    />
  </Col>
  <Col md={4}>
    <StepCard
      href='#'
      number='03'
      title='Post Your Job'
      text='Sit auctor aliquam leo duis. Praesent ut penatibus faucibus nibh arcu tempor.'
    />
  </Col>
</Row>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Card based: Alignment */}
      <ComponentPageSection id='steps-card-alignment' title='Card based: Alignment'>
        <Tab.Pane eventKey='preview'>
          <Row className='py-2'>
            <Col md={4}>
              <StepCard
                number='01'
                title='Create a Job Ad'
                text='In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras.'
                align='center'
              />
            </Col>
            <Col md={4}>
              <StepCard
                number='02'
                title='Select a Pricing Plan'
                text='Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui.'
                align='end'
              />
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import StepCard from '../../components/StepCard'

{/* Center aligned step */}
<StepCard
  number='01'
  title='Create a Job Ad'
  text='In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras.'
  align='center'
/>

{/* Right aligned step */}
<StepCard
  number='02'
  title='Select a Pricing Plan'
  text='Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui.'
  align='end'
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Card based: Light version */}
      <ComponentPageSection id='steps-card-light' title='Card based: Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <Row className='py-2'>
            <Col md={4}>
              <StepCard
                number='01'
                title='Create a Job Ad'
                text='In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras.'
                light
              />
            </Col>
            <Col md={4}>
              <StepCard
                number='02'
                title='Select a Pricing Plan'
                text='Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui.'
                light
              />
            </Col>
            <Col md={4}>
              <StepCard
                number='03'
                title='Post Your Job'
                text='Sit auctor aliquam leo duis. Praesent ut penatibus faucibus nibh arcu tempor.'
                light
              />
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'          
import StepCard from '../../components/StepCard'

{/* Light card based steps */}
<Row>
  <Col md={4}>
    <StepCard
      number='01'
      title='Create a Job Ad'
      text='In volutpat lacus orci volutpat nulla tristique eu. Ullamcorper in est lectus cras.'
      light
    />
  </Col>
  <Col md={4}>
    <StepCard
      number='02'
      title='Select a Pricing Plan'
      text='Cursus duis ridiculus purus eget velit mattis id vel. Semper aliquet auctor cras dui.'
      light
    />
  </Col>
  <Col md={4}>
    <StepCard
      number='03'
      title='Post Your Job'
      text='Sit auctor aliquam leo duis. Praesent ut penatibus faucibus nibh arcu tempor.'
      light
    />
  </Col>
</Row>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default StepsPage
