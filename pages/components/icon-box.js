// Icon Box component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import IconBox from '../../components/IconBox'
import Code from '../../components/Code'

const IconBoxPage = () => {

  const anchorLinks = [
    {
      label: 'Media type and shape',
      anchor: 'icon-box-media-type-shape'
    },
    {
      label: 'Alignment',
      anchor: 'icon-box-alignment'
    },
    {
      label: 'Card style',
      anchor: 'icon-box-card'
    },
    {
      label: 'Pill style',
      anchor: 'icon-box-pill'
    },
    {
      label: 'Color variants',
      anchor: 'icon-box-colors'
    },
    {
      label: 'Light version',
      anchor: 'icon-box-light'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Icon box'
      pageDescription='A simple component to describe the various benefits of a product.'
      activeNav='/components/icon-box'
      anchorLinks={anchorLinks}
    >

      {/* Media type and shape */}
      <ComponentPageSection id='icon-box-media-type-shape' title='Media type and shape'>
        <Tab.Pane eventKey='preview'>
          <div className='d-sm-flex'>
            <IconBox
              media='fi-bed'
              title='Rounded font icon media'
              text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
              className='pb-2 mb-4 me-sm-5'
              style={{maxWidth: '18rem'}}
            />
            <IconBox
              media='image'
              imageSrc='/images/job-board/blog/thumbs/01.jpg'
              title='Rounded image media'
              text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
              className='pb-2 mb-4'
              style={{maxWidth: '18rem'}}
            />
          </div>
          <div className='d-sm-flex'>
            <IconBox
              media='fi-cafe'
              mediaColor='accent'
              mediaShape='circle'
              title='Cicle font icon media'
              text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
              className='pb-2 mb-4 me-sm-5'
              style={{maxWidth: '18rem'}}
            />
            <IconBox
              media='image'
              mediaShape='circle'
              imageSrc='/images/job-board/blog/thumbs/02.jpg'
              title='Cicle image media'
              text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
              className='pb-2 mb-4'
              style={{maxWidth: '18rem'}}
            />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import IconBox from '../components/IconBox'

{/* Icon box: Rounded font icon media */}
<IconBox
  media='fi-bed'
  title='Rounded font icon media'
  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
  className='pb-2 mb-4'
/>

{/* Icon box: Rounded image media */}
<IconBox
  media='image'
  imageSrc='/images/job-board/blog/thumbs/01.jpg'
  title='Rounded image media'
  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
  className='pb-2 mb-4'
/>

{/* Icon box: Cicle font icon media (accent color) */}
<IconBox
  media='fi-cafe'
  mediaColor='accent'
  mediaShape='circle'
  title='Cicle font icon media'
  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
  className='pb-2 mb-4'
/>

{/* Icon box: Cicle image media */}
<IconBox
  media='image'
  mediaShape='circle'
  imageSrc='/images/job-board/blog/thumbs/02.jpg'
  title='Cicle image media'
  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
  className='pb-2 mb-4'
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Alignment */}
      <ComponentPageSection id='icon-box-alignment' title='Alignment'>
        <Tab.Pane eventKey='preview'>
          <div className='d-sm-flex'>
            <IconBox
              media='fi-apartment'
              title='Center aligned'
              text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
              align='center'
              className='pb-2 mb-4 me-sm-5'
              style={{maxWidth: '18rem'}}
            />
            <IconBox
              media='fi-apartment'
              title='Right aligned'
              text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
              align='end'
              className='pb-2 mb-4'
              style={{maxWidth: '18rem'}}
            />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import IconBox from '../components/IconBox'

{/* Center aligned */}
<IconBox
  media='fi-apartment'
  title='Center aligned'
  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
  align='center'
  className='pb-2 mb-4'
/>

{/* Right aligned */}
<IconBox
  media='fi-apartment'
  title='Right aligned'
  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
  align='end'
  className='pb-2 mb-4'
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Card style */}
      <ComponentPageSection id='icon-box-card' title='Card style'>
        <Tab.Pane eventKey='preview'>
          <div className='d-sm-flex'>
            <IconBox
              href='#'
              media='fi-meds'
              mediaShape='circle'
              title='Border card'
              type='card'
              align='center'
              className='mb-4 me-sm-4'
              style={{maxWidth: '12.5rem'}}
            />
            <IconBox
              href='#'
              media='fi-house-chosen'
              mediaShape='circle'
              title='Shadow card'
              type='card-shadow'
              align='center'
              className='mb-4 me-sm-4'
              style={{maxWidth: '12.5rem'}}
            />
            <IconBox
              href='#'
              media='fi-spa'
              mediaShape='circle'
              title='Background card'
              type='card'
              align='center'
              className='bg-secondary border-0 mb-4'
              style={{maxWidth: '12.5rem'}}
            />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import IconBox from '../components/IconBox'

{/* Icon box card type with border */}
<IconBox
  href='#'
  media='fi-meds'
  mediaShape='circle'
  title='Border card'
  type='card'
  align='center'
  className='mb-4'
/>

{/* Icon box card type with shadow */}
<IconBox
  href='#'
  media='fi-house-chosen'
  mediaShape='circle'
  title='Shadow card'
  type='card-shadow'
  align='center'
  className='mb-4'
/>

{/* Icon box card type with color background */}
<IconBox
  href='#'
  media='fi-spa'
  mediaShape='circle'
  title='Background card'
  type='card'
  align='center'
  className='bg-secondary border-0 mb-4'
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Pill style */}
      <ComponentPageSection id='icon-box-pill' title='Pill style'>
        <Tab.Pane eventKey='preview'>
          <div className='d-sm-flex'>
            <IconBox
              href='#'
              media='fi-meds'
              title='Border card'
              type='pill-rounded'
              className='mb-4 me-sm-4'
              style={{maxWidth: '14rem'}}
            />
            <IconBox
              href='#'
              media='fi-house-chosen'
              title='Shadow card'
              type='pill-rounded-shadow'
              className='mb-4 me-sm-4'
              style={{maxWidth: '14rem'}}
            />
            <IconBox
              href='#'
              media='fi-spa'
              title='Background card'
              type='pill-rounded'
              className='bg-secondary border-0 mb-4'
              style={{maxWidth: '14rem'}}
            />
          </div>
          <div className='d-sm-flex'>
            <IconBox
              href='#'
              media='fi-meds'
              title='Border card'
              type='pill'
              className='mb-4 me-sm-4'
              style={{maxWidth: '14rem'}}
            />
            <IconBox
              href='#'
              media='fi-house-chosen'
              title='Shadow card'
              type='pill-shadow'
              className='mb-4 me-sm-4'
              style={{maxWidth: '14rem'}}
            />
            <IconBox
              href='#'
              media='fi-spa'
              title='Background card'
              type='pill'
              className='bg-secondary border-0 mb-4'
              style={{maxWidth: '14rem'}}
            />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import IconBox from '../components/IconBox'

{/* Icon box horizontal card type with border (Rounded) */}
<IconBox
  href='#'
  media='fi-meds'
  title='Border card'
  type='pill-rounded'
  className='mb-4'
/>

{/* Icon box horizontal card type with shadow (Rounded) */}
<IconBox
  href='#'
  media='fi-house-chosen'
  title='Shadow card'
  type='pill-rounded-shadow'
  className='mb-4'
/>

{/* Icon box horizontal card type with color background (Rounded) */}
<IconBox
  href='#'
  media='fi-spa'
  title='Background card'
  type='pill-rounded'
  className='bg-secondary border-0 mb-4'
/>

{/* Icon box horizontal card type with border (Pill) */}
<IconBox
  href='#'
  media='fi-meds'
  title='Border card'
  type='pill'
  className='mb-4'
/>

{/* Icon box horizontal card type with shadow (Pill) */}
<IconBox
  href='#'
  media='fi-house-chosen'
  title='Shadow card'
  type='pill-shadow'
  className='mb-4'
/>

{/* Icon box horizontal card type with color background (Pill) */}
<IconBox
  href='#'
  media='fi-spa'
  title='Background card'
  type='pill'
  className='bg-secondary border-0 mb-4'
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Color variants */}
      <ComponentPageSection id='icon-box-colors' title='Color variants'>
        <Tab.Pane eventKey='preview'>
          <Row xs={2} sm={4} xxl={6} className='g-4'>
            <Col
              as={IconBox}
              media='fi-apartment'
              mediaShape='circle'
              title='Primary icon box'
              align='center'
              className='pb-2'
            />
            <Col
              as={IconBox}
              media='fi-bath'
              mediaShape='circle'
              mediaColor='accent'
              title='Accent icon box'
              align='center'
              className='pb-2'
            />
            <Col
              as={IconBox}
              media='fi-bed'
              mediaShape='circle'
              mediaColor='success'
              title='Success icon box'
              align='center'
              className='pb-2'
            />
            <Col
              as={IconBox}
              media='fi-billboard-house'
              mediaShape='circle'
              mediaColor='info'
              title='Info icon box'
              align='center'
              className='pb-2'
            />
            <Col
              as={IconBox}
              media='fi-cafe'
              mediaShape='circle'
              mediaColor='warning'
              title='Warning icon box'
              align='center'
              className='pb-2'
            />
            <Col
              as={IconBox}
              media='fi-cctv'
              mediaShape='circle'
              mediaColor='danger'
              title='Danger icon box'
              align='center'
              className='pb-2'
            />
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import IconBox from '../components/IconBox'

{/* Primary icon box */}
<IconBox
  media='fi-apartment'
  mediaShape='circle'
  title='Primary icon box'
  align='center'
/>

{/* Accent icon box */}
<IconBox
  media='fi-bath'
  mediaShape='circle'
  mediaColor='accent'
  title='Accent icon box'
  align='center'
/>

{/* Success icon box */}
<IconBox
  media='fi-bed'
  mediaShape='circle'
  mediaColor='success'
  title='Success icon box'
  align='center'
/>

{/* Info icon box */}
<IconBox
  media='fi-billboard-house'
  mediaShape='circle'
  mediaColor='info'
  title='Info icon box'
  align='center'
/>

{/* Warning icon box */}
<IconBox
  media='fi-cafe'
  mediaShape='circle'
  mediaColor='warning'
  title='Warning icon box'
  align='center'
/>

{/* Danger icon box */}
<IconBox
  media='fi-cctv'
  mediaShape='circle'
  mediaColor='danger'
  title='Danger icon box'
  align='center'
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light version */}
      <ComponentPageSection id='icon-box-light' title='Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 pt-4 p-3 bg-dark'>
          <div className='d-flex flex-wrap align-items-center'>
            <IconBox
              media='fi-spa'
              title='Basic icon box'
              text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
              light
              align='center'
              className='pb-2 mb-4 me-sm-5'
              style={{maxWidth: '18rem'}}
            />
            <IconBox
              href='#'
              media='fi-spa'
              mediaShape='circle'
              title='Card icon box'
              type='card'
              light
              align='center'
              className='mb-4 me-4 me-sm-5'
              style={{maxWidth: '12.5rem'}}
            />
            <IconBox
              href='#'
              media='fi-meds'
              title='Pill icon box'
              type='pill'
              light
              className='mb-4'
              style={{maxWidth: '14rem'}}
            />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import IconBox from '../components/IconBox'

{/* Light basic icon box */}
<IconBox
  media='fi-spa'
  title='Basic icon box'
  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'
  light
  align='center'
/>

{/* Light card icon box */}
<IconBox
  href='#'
  media='fi-spa'
  mediaShape='circle'
  title='Card icon box'
  type='card'
  light
  align='center'
/>

{/* Light pill icon box */}
<IconBox
  href='#'
  media='fi-meds'
  title='Pill icon box'
  type='pill'
  light
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default IconBoxPage
