// Image component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Figure from 'react-bootstrap/Figure'
import Code from '../../components/Code'
import ImageLoader from '../../components/ImageLoader'
import ImageSwap from '../../components/ImageSwap'

const ImagesPage = () => {

  const anchorLinks = [
    {
      label: 'Image shapes',
      anchor: 'image-shapes'
    },
    {
      label: 'Thumbnails',
      anchor: 'image-thumbnails'
    },
    {
      label: 'Figures with caption',
      anchor: 'image-figures'
    },
    {
      label: 'Image swap on hover',
      anchor: 'image-swap'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Images &amp; figures'
      pageDescription='Image styles and figure component for displaying images and text.'
      activeNav='/components/images'
      docsLink='https://react-bootstrap.github.io/components/images/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Image shapes */}
      <ComponentPageSection id='image-shapes' title='Image shapes'>
        <Tab.Pane eventKey='preview'>
          <Row xs={1} md={4} sm={3}>
            <Col className='text-center mb-3'>
              <ImageLoader
                src='/images/components/03.jpg'
                width={256}
                height={256}
                alt='Square image'
              />
            </Col>
            <Col className='text-center mb-3'>
              <ImageLoader
                src='/images/components/02.jpg'
                width={256}
                height={256}
                alt='Rounded image'
                className='rounded-3'
              />
            </Col>
            <Col className='text-center mb-3'>
              <ImageLoader
                src='/images/components/01.jpg'
                width={256}
                height={256}
                alt='Circle image'
                className='rounded-circle'
              />
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ImageLoader from '../components/ImageLoader'

{/* Square image (default) */}
<ImageLoader
  src='/images/components/03.jpg'
  width={256}
  height={256}
  alt='Square image'
/>

{/* Rounded image */}
<ImageLoader
  src='/images/components/02.jpg'
  width={256}
  height={256}
  alt='Rounded image'
  className='rounded-3'
/>

{/* Circle image */}
<ImageLoader
  src='/images/components/01.jpg'
  width={256}
  height={256}
  alt='Circle image'
  className='rounded-circle'
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Thumbnails */}
      <ComponentPageSection id='image-thumbnails' title='Thumbnails'>
        <Tab.Pane eventKey='preview'>
          <Row xs={1} md={4} sm={3}>
            <Col className='text-center mb-3'>
              <div className='img-thumbnail rounded-0'>
                <ImageLoader
                  src='/images/components/03.jpg'
                  width={256}
                  height={256}
                  alt='Square thumbnail'
                />
              </div>
            </Col>
            <Col className='text-center mb-3'>
              <div className='img-thumbnail'>
                <ImageLoader
                  src='/images/components/02.jpg'
                  width={256}
                  height={256}
                  alt='Rounded thumbnail'
                />
              </div>
            </Col>
            <Col className='text-center mb-3'>
              <div className='img-thumbnail rounded-circle'>
                <ImageLoader
                  src='/images/components/01.jpg'
                  width={256}
                  height={256}
                  alt='Circle thumbnail'
                />
              </div>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ImageLoader from '../components/ImageLoader'

{/* Square thumbnail */}
<div className='img-thumbnail rounded-0'>
  <ImageLoader
    src='/images/components/03.jpg'
    width={256}
    height={256}
    alt='Square thumbnail'
  />
</div>

{/* Rounded thumbnail (default) */}
<div className='img-thumbnail'>
  <ImageLoader
    src='/images/components/02.jpg'
    width={256}
    height={256}
    alt='Rounded thumbnail'
  />
</div>

{/* Circle thumbnail */}
<div className='img-thumbnail rounded-circle'>
  <ImageLoader
    src='/images/components/01.jpg'
    width={256}
    height={256}
    alt='Circle thumbnail'
  />
</div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Figures with caption */}
      <ComponentPageSection id='image-figures' title='Figures with caption'>
        <Tab.Pane eventKey='preview'>
          <Row xs={1} md={4} sm={3}>
            <Col className='text-center mb-3'>
              <Figure>
                <ImageLoader
                  src='/images/components/01.jpg'
                  width={256}
                  height={256}
                  alt='Figure with caption'
                  className='rounded'
                />
                <Figure.Caption className='text-start'>Caption on the left</Figure.Caption>
              </Figure>
            </Col>
            <Col className='text-center mb-3'>
              <Figure>
                <ImageLoader
                  src='/images/components/02.jpg'
                  width={256}
                  height={256}
                  alt='Figure with caption'
                  className='rounded'
                />
                <Figure.Caption className='text-center'>Caption in the center</Figure.Caption>
              </Figure>
            </Col>
            <Col className='text-center mb-3'>
              <Figure>
                <ImageLoader
                  src='/images/components/03.jpg'
                  width={256}
                  height={256}
                  alt='Figure with caption'
                  className='rounded'
                />
                <Figure.Caption className='text-end'>Caption on the right</Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ImageLoader from '../components/ImageLoader'
import Figure from 'react-bootstrap/Figure'

{/* Figure caption on the left (default) */}
<Figure>
  <ImageLoader
    src='/images/components/01.jpg'
    width={256}
    height={256}
    alt='Figure with caption'
    className='rounded'
  />
  <Figure.Caption>Caption on the left</Figure.Caption>
</Figure>

{/* Figure Caption in the center */}
<Figure>
  <ImageLoader
    src='/images/components/02.jpg'
    width={256}
    height={256}
    alt='Figure with caption'
    className='rounded'
  />
  <Figure.Caption className='text-center'>Caption in the center</Figure.Caption>
</Figure>

{/* Figure caption on the right */}
<Figure>
  <ImageLoader
    src='/images/components/03.jpg'
    width={256}
    height={256}
    alt='Figure with caption'
    className='rounded'
  />
  <Figure.Caption className='text-end'>Caption on the right</Figure.Caption>
</Figure>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Image swap on hover */}
      <ComponentPageSection id='image-swap' title='Image swap on hover'>
        <Tab.Pane eventKey='preview'>
          <div className='d-sm-flex align-items-center pt-3'>
            <ImageSwap
              className='mb-2 me-sm-2'
              swapFrom={{
                imgSrc: '/images/real-estate/brands/02_gray.svg',
                imgSize: [196, 80],
                imgAlt: 'Image from'
              }}
              swapTo={{
                imgSrc: '/images/real-estate/brands/02_color.svg',
                imgSize: [196, 80],
                imgAlt: 'Image to'
              }}
            />
            <ImageSwap
              href='#'
              className='mb-2'
              swapFrom={{
                imgSrc: '/images/real-estate/brands/04_gray.svg',
                imgSize: [196, 80],
                imgAlt: 'Image from'
              }}
              swapTo={{
                imgSrc: '/images/real-estate/brands/04_color.svg',
                imgSize: [196, 80],
                imgAlt: 'Image to'
              }}
            />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ImageSwap from '../components/ImageSwap'

{/* Non-clickable div example */}
<ImageSwap
  swapFrom={{
    imgSrc: '/images/real-estate/brands/02_gray.svg',
    imgSize: [196, 80],
    imgAlt: 'Image from'
  }}
  swapTo={{
    imgSrc: '/images/real-estate/brands/02_color.svg',
    imgSize: [196, 80],
    imgAlt: 'Image to'
  }}
/>

{/* Clickable link example */}
<ImageSwap
  href='#'
  swapFrom={{
    imgSrc: '/images/real-estate/brands/04_gray.svg',
    imgSize: [196, 80],
    imgAlt: 'Image from'
  }}
  swapTo={{
    imgSrc: '/images/real-estate/brands/04_color.svg',
    imgSize: [196, 80],
    imgAlt: 'Image to'
  }}
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default ImagesPage
