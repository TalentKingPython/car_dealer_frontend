// Gallery component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Code from '../../components/Code'
import GalleryItem from '../../components/GalleryItem'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import lgVideo from 'lightgallery/plugins/video'
import { Navigation, Pagination, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-fullscreen.css'
import 'lightgallery/css/lg-video.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const GalleryPage = () => {

  const anchorLinks = [
    {
      label: 'Media: Image',
      anchor: 'gallery-image'
    },
    {
      label: 'Media: Video',
      anchor: 'gallery-video'
    },
    {
      label: 'Media: Iframe (Google map)',
      anchor: 'gallery-iframe'
    },
    {
      label: 'Grid with gutters',
      anchor: 'gallery-grid-gutters'
    },
    {
      label: 'Grid no gutters',
      anchor: 'gallery-grid-nogutters'
    },
    {
      label: 'Inside card',
      anchor: 'gallery-card'
    },
    {
      label: 'Inside carousel',
      anchor: 'gallery-carousel'
    },
    {
      label: 'Thumbnails',
      anchor: 'gallery-thumbnails'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Gallery'
      pageDescription='Lightbox component for presenting various types of media: Images, Videos, iFrames.'
      activeNav='/components/gallery'
      anchorLinks={anchorLinks}
    >

      {/* Info alert */}
      <Alert variant='info' className='mb-5'>
        <div className='d-flex'>
          <i className='fi-alert-circle lead me-2 me-sm-3'></i>
          <div className='text-break'>
            <p className='mb-1'>Gallery component is powered by <Alert.Link href='https://www.lightgalleryjs.com/docs/react/' target='_blank' rel='noreferrer'>lightGallery React</Alert.Link> plugin.</p>
          </div>
        </div>
      </Alert>


      {/* Media: Image */}
      <ComponentPageSection id='gallery-image' title='Media: Image'>
        <Tab.Pane eventKey='preview'>
          <LightGallery
            licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
            plugins={[lgZoom, lgFullScreen]}
          >
            <GalleryItem
              href='/images/real-estate/single/07.jpg'
              thumb={['/images/real-estate/single/th07.jpg', 400, 244]}
              caption='Gallery image caption'
              className='rounded'
              style={{maxWidth: '400px'}}
            />
          </LightGallery>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import GalleryItem from '../components/GalleryItem'
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-fullscreen.css'

{/* Basic image gallery */}
<LightGallery
  plugins={[lgZoom, lgFullScreen]}
>
  <GalleryItem
    href='/images/real-estate/single/07.jpg'
    thumb={['/images/real-estate/single/th07.jpg', 400, 244]}
    caption='Gallery image caption'
    className='rounded'
    style={{maxWidth: '400px'}}
  />
</LightGallery>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Media: Video */}
      <ComponentPageSection id='gallery-video' title='Media: Video'>
        <Tab.Pane eventKey='preview'>
          <LightGallery
            licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
            plugins={[lgVideo]}
            zoomFromOrigin={false}
            youTubePlayerParams={{
              modestbranding : 1,
              showinfo : 0
            }}
          >
            <GalleryItem
              href='https://www.youtube.com/watch?v=BBOlp54-gW4'
              video
              thumb={['/images/real-estate/single/th06.jpg', 400, 244]}
              caption='Gallery video caption'
              className='rounded'
              style={{maxWidth: '400px'}}
            />
          </LightGallery>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import GalleryItem from '../components/GalleryItem'
import LightGallery from 'lightgallery/react'
import lgVideo from 'lightgallery/plugins/video'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-video.css'

{/* Basic video (YouTube) gallery */}
<LightGallery
  plugins={[lgVideo]}
  zoomFromOrigin={false}
  youTubePlayerParams={{
    modestbranding : 1,
    showinfo : 0
  }}
>
  <GalleryItem
    href='https://www.youtube.com/watch?v=BBOlp54-gW4'
    video
    thumb={['/images/real-estate/single/th06.jpg', 400, 244]}
    caption='Gallery video caption'
    className='rounded'
    style={{maxWidth: '400px'}}
  />
</LightGallery>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Media: Iframe (Google map) */}
      <ComponentPageSection id='gallery-video' title='Media: Iframe (Google map)'>
        <Tab.Pane eventKey='preview'>
          <LightGallery
            licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
            plugins={[lgFullScreen]}
          >
            <GalleryItem
              href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91476818218!2d-74.11976253858133!3d40.69740344296443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sua!4v1568574342685!5m2!1sen!2sua'
              data-iframe={true}
              thumb={['/images/components/04.jpg', 400, 267]}
              caption='Google map embed'
              className='rounded'
              style={{maxWidth: '400px'}}
            />
          </LightGallery>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import GalleryItem from '../components/GalleryItem'
import LightGallery from 'lightgallery/react'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-fullscreen.css'

{/* Basic iframe (Google map) gallery */}
<LightGallery
  plugins={[lgFullScreen]}
>
  <GalleryItem
    href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91476818218!2d-74.11976253858133!3d40.69740344296443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sua!4v1568574342685!5m2!1sen!2sua'
    data-iframe={true}
    thumb={['/images/components/04.jpg', 400, 267]}
    caption='Google map embed'
    className='rounded'
    style={{maxWidth: '400px'}}
  />
</LightGallery>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Grid with gutters */}
      <ComponentPageSection id='gallery-grid-gutters' title='Grid with gutters'>
        <Tab.Pane eventKey='preview'>
          <LightGallery
            selector='.gallery-item'
            licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
            plugins={[lgVideo, lgZoom, lgFullScreen]}
            zoomFromOrigin={false}
          >
            <Row className='g-4'>
              <Col xl={4} sm={6}>
                <GalleryItem
                  href='/images/real-estate/single/03.jpg'
                  thumb={['/images/real-estate/single/th03.jpg', 450, 274]}
                  caption='Gallery caption #1'
                  className='rounded'
                />
              </Col>
              <Col xl={4} sm={6}>
                <GalleryItem
                  href='/images/real-estate/single/04.jpg'
                  thumb={['/images/real-estate/single/th04.jpg', 450, 274]}
                  caption='Gallery caption #2'
                  className='rounded'
                />
              </Col>
              <Col xl={4} sm={6}>
                <GalleryItem
                  href='https://www.youtube.com/watch?v=BBOlp54-gW4'
                  video
                  thumb={['/images/real-estate/single/th05.jpg', 450, 274]}
                  caption='Gallery caption #3'
                  className='rounded'
                />
              </Col>
              <Col xl={4} sm={6}>
                <GalleryItem
                  href='/images/real-estate/single/06.jpg'
                  thumb={['/images/real-estate/single/th06.jpg', 450, 274]}
                  caption='Gallery caption #4'
                  className='rounded'
                />
              </Col>
              <Col xl={4} sm={6}>
                <GalleryItem
                  href='https://www.youtube.com/watch?v=DuLp5spvqXA'
                  video
                  thumb={['/images/real-estate/single/th07.jpg', 450, 274]}
                  caption='Gallery caption #5'
                  className='rounded'
                />
              </Col>
              <Col xl={4} sm={6}>
                <GalleryItem
                  href='/images/real-estate/single/08.jpg'
                  thumb={['/images/real-estate/single/th08.jpg', 450, 274]}
                  caption='Gallery caption #6'
                  className='rounded'
                />
              </Col>
            </Row>
          </LightGallery>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GalleryItem from '../components/GalleryItem'
import LightGallery from 'lightgallery/react'
import lgVideo from 'lightgallery/plugins/video'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-video.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-fullscreen.css'

{/* Gallery grid with gutters (mixed image/video content) */}
<LightGallery
  plugins={[lgVideo, lgZoom, lgFullScreen]}
  selector='.gallery-item'
  zoomFromOrigin={false}
>
  <Row className='g-4'>
    <Col xl={4} sm={6}>
      <GalleryItem
        href='/images/real-estate/single/03.jpg'
        thumb={['/images/real-estate/single/th03.jpg', 450, 274]}
        caption='Gallery caption #1'
        className='rounded'
      />
    </Col>
    <Col xl={4} sm={6}>
      <GalleryItem
        href='/images/real-estate/single/04.jpg'
        thumb={['/images/real-estate/single/th04.jpg', 450, 274]}
        caption='Gallery caption #2'
        className='rounded'
      />
    </Col>
    <Col xl={4} sm={6}>
      <GalleryItem
        href='https://www.youtube.com/watch?v=BBOlp54-gW4'
        video
        thumb={['/images/real-estate/single/th05.jpg', 450, 274]}
        caption='Gallery caption #3'
        className='rounded'
      />
    </Col>
    <Col xl={4} sm={6}>
      <GalleryItem
        href='/images/real-estate/single/06.jpg'
        thumb={['/images/real-estate/single/th06.jpg', 450, 274]}
        caption='Gallery caption #4'
        className='rounded'
      />
    </Col>
    <Col xl={4} sm={6}>
      <GalleryItem
        href='https://www.youtube.com/watch?v=DuLp5spvqXA'
        video
        thumb={['/images/real-estate/single/th07.jpg', 450, 274]}
        caption='Gallery caption #5'
        className='rounded'
      />
    </Col>
    <Col xl={4} sm={6}>
      <GalleryItem
        href='/images/real-estate/single/08.jpg'
        thumb={['/images/real-estate/single/th08.jpg', 450, 274]}
        caption='Gallery caption #6'
        className='rounded'
      />
    </Col>
  </Row>
</LightGallery>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Grid no gutters */}
      <ComponentPageSection id='gallery-grid-nogutters' title='Grid no gutters'>
        <Tab.Pane eventKey='preview'>
          <LightGallery
            selector='.gallery-item'
            licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
            plugins={[lgVideo, lgZoom, lgFullScreen]}
            zoomFromOrigin={false}
          >
            <Row className='g-0'>
              <Col xl={4} sm={6} className='border border-light'>
                <GalleryItem
                  href='/images/real-estate/single/03.jpg'
                  thumb={['/images/real-estate/single/th03.jpg', 450, 274]}
                  caption='Gallery caption #1'
                />
              </Col>
              <Col xl={4} sm={6} className='border border-light'>
                <GalleryItem
                  href='/images/real-estate/single/04.jpg'
                  thumb={['/images/real-estate/single/th04.jpg', 450, 274]}
                  caption='Gallery caption #2'
                />
              </Col>
              <Col xl={4} sm={6} className='border border-light'>
                <GalleryItem
                  href='https://www.youtube.com/watch?v=BBOlp54-gW4'
                  video
                  thumb={['/images/real-estate/single/th05.jpg', 450, 274]}
                  caption='Gallery caption #3'
                />
              </Col>
              <Col xl={4} sm={6} className='border border-light'>
                <GalleryItem
                  href='/images/real-estate/single/06.jpg'
                  thumb={['/images/real-estate/single/th06.jpg', 450, 274]}
                  caption='Gallery caption #4'
                />
              </Col>
              <Col xl={4} sm={6} className='border border-light'>
                <GalleryItem
                  href='https://www.youtube.com/watch?v=DuLp5spvqXA'
                  video
                  thumb={['/images/real-estate/single/th07.jpg', 450, 274]}
                  caption='Gallery caption #5'
                />
              </Col>
              <Col xl={4} sm={6} className='border border-light'>
                <GalleryItem
                  href='/images/real-estate/single/08.jpg'
                  thumb={['/images/real-estate/single/th08.jpg', 450, 274]}
                  caption='Gallery caption #6'
                />
              </Col>
            </Row>
          </LightGallery>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GalleryItem from '../components/GalleryItem'
import LightGallery from 'lightgallery/react'
import lgVideo from 'lightgallery/plugins/video'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-video.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-fullscreen.css'

{/* Gallery grid with gutters (mixed image/video content) */}
<LightGallery
  plugins={[lgVideo, lgZoom, lgFullScreen]}
  selector='.gallery-item'
  zoomFromOrigin={false}
>
  <Row className='g-0'>
    <Col xl={4} sm={6} className='border border-light'>
      <GalleryItem
        href='/images/real-estate/single/03.jpg'
        thumb={['/images/real-estate/single/th03.jpg', 450, 274]}
        caption='Gallery caption #1'
      />
    </Col>
    <Col xl={4} sm={6} className='border border-light'>
      <GalleryItem
        href='/images/real-estate/single/04.jpg'
        thumb={['/images/real-estate/single/th04.jpg', 450, 274]}
        caption='Gallery caption #2'
      />
    </Col>
    <Col xl={4} sm={6} className='border border-light'>
      <GalleryItem
        href='https://www.youtube.com/watch?v=BBOlp54-gW4'
        video
        thumb={['/images/real-estate/single/th05.jpg', 450, 274]}
        caption='Gallery caption #3'
      />
    </Col>
    <Col xl={4} sm={6} className='border border-light'>
      <GalleryItem
        href='/images/real-estate/single/06.jpg'
        thumb={['/images/real-estate/single/th06.jpg', 450, 274]}
        caption='Gallery caption #4'
      />
    </Col>
    <Col xl={4} sm={6} className='border border-light'>
      <GalleryItem
        href='https://www.youtube.com/watch?v=DuLp5spvqXA'
        video
        thumb={['/images/real-estate/single/th07.jpg', 450, 274]}
        caption='Gallery caption #5'
      />
    </Col>
    <Col xl={4} sm={6} className='border border-light'>
      <GalleryItem
        href='/images/real-estate/single/08.jpg'
        thumb={['/images/real-estate/single/th08.jpg', 450, 274]}
        caption='Gallery caption #6'
      />
    </Col>
  </Row>
</LightGallery>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inside card */}
      <ComponentPageSection id='gallery-card' title='Inside card'>
        <Tab.Pane eventKey='preview'>
          <Card style={{maxWidth: '25rem'}}>
            <LightGallery licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646' plugins={[lgZoom, lgFullScreen]}>
              <GalleryItem
                href='/images/real-estate/single/02.jpg'
                thumb={['/images/real-estate/single/02.jpg', 398, 279]}
                caption='Gallery image caption'
                className="card-img-top"
              />
            </LightGallery>
            <Card.Body>
              <Card.Title as='h5'>Card with gallery thumbnail</Card.Title>
              <Card.Text className='fs-sm text-muted'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</Card.Text>
              <Button size='sm'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import GalleryItem from '../components/GalleryItem'
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-fullscreen.css'

{/* Gallery inside card example */}
<Card style={{maxWidth: '25rem'}}>
  <LightGallery plugins={[lgZoom, lgFullScreen]}>
    <GalleryItem
      href='/images/real-estate/single/02.jpg'
      thumb={['/images/real-estate/single/02.jpg', 398, 279]}
      caption='Gallery image caption'
      className="card-img-top"
    />
  </LightGallery>
  <Card.Body>
    <Card.Title as='h5'>Card with gallery thumbnail</Card.Title>
    <Card.Text className='fs-sm text-muted'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</Card.Text>
    <Button size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inside carousel */}
      <ComponentPageSection id='gallery-carousel' title='Inside carousel'>
        <Tab.Pane eventKey='preview'>
          <div className='position-relative px-5'>
            <LightGallery
              selector='.gallery-item'
              licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
              plugins={[lgVideo, lgZoom, lgFullScreen]}
              zoomFromOrigin={false}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: '#prev',
                  nextEl: '#next'
                }}
                pagination={{
                  el: '#pagination',
                  clickable: true
                }}
                loop
                grabCursor
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 16
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  1500: {
                    slidesPerView: 3,
                    spaceBetween: 24
                  }
                }}
              >
                <SwiperSlide>
                  <GalleryItem
                    href='/images/real-estate/single/03.jpg'
                    thumb={['/images/real-estate/single/th03.jpg', 450, 274]}
                    caption='Gallery caption #1'
                    className='rounded'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GalleryItem
                    href='/images/real-estate/single/04.jpg'
                    thumb={['/images/real-estate/single/th04.jpg', 450, 274]}
                    caption='Gallery caption #2'
                    className='rounded'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GalleryItem
                    href='https://www.youtube.com/watch?v=BBOlp54-gW4'
                    video
                    thumb={['/images/real-estate/single/th05.jpg', 450, 274]}
                    caption='Gallery caption #3'
                    className='rounded'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GalleryItem
                    href='/images/real-estate/single/06.jpg'
                    thumb={['/images/real-estate/single/th06.jpg', 450, 274]}
                    caption='Gallery caption #4'
                    className='rounded'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GalleryItem
                    href='https://www.youtube.com/watch?v=DuLp5spvqXA'
                    video
                    thumb={['/images/real-estate/single/th07.jpg', 450, 274]}
                    caption='Gallery caption #5'
                    className='rounded'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <GalleryItem
                    href='/images/real-estate/single/08.jpg'
                    thumb={['/images/real-estate/single/th08.jpg', 450, 274]}
                    caption='Gallery caption #6'
                    className='rounded'
                  />
                </SwiperSlide>
              </Swiper>
            </LightGallery>
            <Button id='prev' variant='prev' />
            <Button id='next' variant='next' />
          </div>
          <div id='pagination' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import GalleryItem from '../components/GalleryItem'
import LightGallery from 'lightgallery/react'
import lgVideo from 'lightgallery/plugins/video'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import { Navigation, Pagination, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-video.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-fullscreen.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

{/* Gallery inside carousel example */}
<div className='position-relative px-5'>
  <LightGallery
    plugins={[lgVideo, lgZoom, lgFullScreen]}
    selector='.gallery-item'
    zoomFromOrigin={false}
  > 
    
    {/* Swiper carousel */}
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        prevEl: '#prev',
        nextEl: '#next'
      }}
      pagination={{
        el: '#pagination',
        clickable: true
      }}
      loop
      grabCursor
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }}
    >
      
      {/* Item */}
      <SwiperSlide>
        <GalleryItem
          href='/images/real-estate/single/03.jpg'
          thumb={['/images/real-estate/single/th03.jpg', 450, 274]}
          caption='Gallery caption #1'
          className='rounded'
        />
      </SwiperSlide>

      {/* Item */}
      <SwiperSlide>
        <GalleryItem
          href='/images/real-estate/single/04.jpg'
          thumb={['/images/real-estate/single/th04.jpg', 450, 274]}
          caption='Gallery caption #2'
          className='rounded'
        />
      </SwiperSlide>

      {/* Item */}
      <SwiperSlide>
        <GalleryItem
          href='https://www.youtube.com/watch?v=BBOlp54-gW4'
          video
          thumb={['/images/real-estate/single/th05.jpg', 450, 274]}
          caption='Gallery caption #3'
          className='rounded'
        />
      </SwiperSlide>

      {/* Item */}
      <SwiperSlide>
        <GalleryItem
          href='/images/real-estate/single/06.jpg'
          thumb={['/images/real-estate/single/th06.jpg', 450, 274]}
          caption='Gallery caption #4'
          className='rounded'
        />
      </SwiperSlide>

      {/* Item */}
      <SwiperSlide>
        <GalleryItem
          href='https://www.youtube.com/watch?v=DuLp5spvqXA'
          video
          thumb={['/images/real-estate/single/th07.jpg', 450, 274]}
          caption='Gallery caption #5'
          className='rounded'
        />
      </SwiperSlide>

      {/* Item */}
      <SwiperSlide>
        <GalleryItem
          href='/images/real-estate/single/08.jpg'
          thumb={['/images/real-estate/single/th08.jpg', 450, 274]}
          caption='Gallery caption #6'
          className='rounded'
        />
      </SwiperSlide>
    </Swiper>
  </LightGallery>

  {/* External Prev/Next buttons */}
  <Button id='prev' variant='prev' />
  <Button id='next' variant='next' />
</div>

{/* External pagination (bullets) buttons */}
<div id='pagination' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Thumbnails */}
      <ComponentPageSection id='gallery-thumbnails' title='Thumbnails'>
        <Tab.Pane eventKey='preview'>
          <LightGallery
            selector='.gallery-item'
            licenseKey='D4194FDD-48924833-A54AECA3-D6F8E646'
            plugins={[lgThumbnail, lgZoom, lgFullScreen]}
            zoomFromOrigin={false}
            exThumbImage='data-external-thumb-image'
          >
            <Row className='g-2 g-md-3'>
              <Col sm={8}>
                <GalleryItem
                  href='/images/real-estate/single/01.jpg'
                  thumb={['/images/real-estate/single/01.jpg', 720, 510]}
                  data-external-thumb-image='/images/real-estate/single/01.jpg'
                  imgAlt='Image caption #1'
                  className='rounded-3'
                />
              </Col>
              <Col sm={4}>
                <GalleryItem
                  href='/images/real-estate/single/02.jpg'
                  thumb={['/images/real-estate/single/02.jpg', 450, 316]}
                  data-external-thumb-image='/images/real-estate/single/02.jpg'
                  imgAlt='Image caption #2'
                  className='rounded-3 mb-2 mb-md-3'
                />
                <GalleryItem
                  href='/images/real-estate/single/03.jpg'
                  thumb={['/images/real-estate/single/03.jpg', 450, 316]}
                  data-external-thumb-image='/images/real-estate/single/th03.jpg'
                  imgAlt='Image caption #3'
                  className='rounded-3'
                />
              </Col>
              <Col xs={12}>
                <Row className='g-2 g-md-3'>
                  <Col sm={true}>
                    <GalleryItem
                      href='/images/real-estate/single/04.jpg'
                      thumb={['/images/real-estate/single/th04.jpg', 450, 275]}
                      data-external-thumb-image='/images/real-estate/single/th04.jpg'
                      imgAlt='Image caption #4'
                      className='rounded'
                    />
                  </Col>
                  <Col sm={true}>
                    <GalleryItem
                      href='/images/real-estate/single/05.jpg'
                      thumb={['/images/real-estate/single/th05.jpg', 450, 275]}
                      data-external-thumb-image='/images/real-estate/single/th05.jpg'
                      imgAlt='Image caption #5'
                      className='rounded'
                    />
                  </Col>
                  <Col sm={true}>
                    <GalleryItem
                      href='/images/real-estate/single/06.jpg'
                      thumb={['/images/real-estate/single/th06.jpg', 450, 275]}
                      data-external-thumb-image='/images/real-estate/single/th06.jpg'
                      imgAlt='Image caption #6'
                      className='rounded'
                    />
                  </Col>
                  <Col sm={true}>
                    <GalleryItem
                      href='/images/real-estate/single/07.jpg'
                      thumb={['/images/real-estate/single/th07.jpg', 450, 275]}
                      data-external-thumb-image='/images/real-estate/single/th07.jpg'
                      imgAlt='Image caption #7'
                      className='rounded'
                    />
                  </Col>
                  <Col sm={true}>
                    <GalleryItem
                      href='/images/real-estate/single/08.jpg'
                      thumb={['/images/real-estate/single/th08.jpg', 450, 275]}
                      data-external-thumb-image='/images/real-estate/single/th08.jpg'
                      imgAlt='Image caption #8'
                      caption={<>+5 <span className='d-inline d-sm-none d-md-inline'>photos</span></>}
                      className='more-item rounded'
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </LightGallery>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GalleryItem from '../components/GalleryItem'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-fullscreen.css'

{/* Gallery with thumbnails example */}
<LightGallery
  plugins={[lgThumbnail, lgZoom, lgFullScreen]}
  selector='.gallery-item'
  zoomFromOrigin={false}
  exThumbImage='data-external-thumb-image'
>
<Row className='g-2 g-md-3'>
  <Col sm={8}>
    <GalleryItem
      href='/images/real-estate/single/01.jpg'
      thumb={['/images/real-estate/single/01.jpg', 720, 510]}
      data-external-thumb-image='/images/real-estate/single/01.jpg'
      imgAlt='Image caption #1'
      className='rounded-3'
    />
  </Col>
  <Col sm={4}>
    <GalleryItem
      href='/images/real-estate/single/02.jpg'
      thumb={['/images/real-estate/single/02.jpg', 450, 316]}
      data-external-thumb-image='/images/real-estate/single/02.jpg'
      imgAlt='Image caption #2'
      className='rounded-3 mb-2 mb-md-3'
    />
    <GalleryItem
      href='/images/real-estate/single/03.jpg'
      thumb={['/images/real-estate/single/03.jpg', 450, 316]}
      data-external-thumb-image='/images/real-estate/single/th03.jpg'
      imgAlt='Image caption #3'
      className='rounded-3'
    />
  </Col>
  <Col xs={12}>
    <Row className='g-2 g-md-3'>
      <Col sm={true}>
        <GalleryItem
          href='/images/real-estate/single/04.jpg'
          thumb={['/images/real-estate/single/th04.jpg', 450, 275]}
          data-external-thumb-image='/images/real-estate/single/th04.jpg'
          imgAlt='Image caption #4'
          className='rounded'
        />
      </Col>
      <Col sm={true}>
        <GalleryItem
          href='/images/real-estate/single/05.jpg'
          thumb={['/images/real-estate/single/th05.jpg', 450, 275]}
          data-external-thumb-image='/images/real-estate/single/th05.jpg'
          imgAlt='Image caption #5'
          className='rounded'
        />
      </Col>
      <Col sm={true}>
        <GalleryItem
          href='/images/real-estate/single/06.jpg'
          thumb={['/images/real-estate/single/th06.jpg', 450, 275]}
          data-external-thumb-image='/images/real-estate/single/th06.jpg'
          imgAlt='Image caption #6'
          className='rounded'
        />
      </Col>
      <Col sm={true}>
        <GalleryItem
          href='/images/real-estate/single/07.jpg'
          thumb={['/images/real-estate/single/th07.jpg', 450, 275]}
          data-external-thumb-image='/images/real-estate/single/th07.jpg'
          imgAlt='Image caption #7'
          className='rounded'
        />
      </Col>
      <Col sm={true}>
        <GalleryItem
          href='/images/real-estate/single/08.jpg'
          thumb={['/images/real-estate/single/th08.jpg', 450, 275]}
          data-external-thumb-image='/images/real-estate/single/th08.jpg'
          imgAlt='Image caption #8'
          caption={<>+5 <span className='d-inline d-sm-none d-md-inline'>photos</span></>}
          className='more-item rounded'
        />
      </Col>
    </Row>
  </Col>
</Row>
</LightGallery>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default GalleryPage
