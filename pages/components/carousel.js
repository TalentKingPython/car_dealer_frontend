// Carousel (slider) component documentation page with code examples

import { useState } from 'react'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Link from 'next/link'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Code from '../../components/Code'
import ImageLoader from '../../components/ImageLoader'
import VenueCardOverlay from '../../components/VenueCardOverlay'
import Blockquote from '../../components/Blockquote'
import { Navigation, Pagination, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const CarouselPage = () => {

  const anchorLinks = [
    {
      label: 'Nav (prev/next) on hover + Light pagination (bullets) inside',
      anchor: 'carousel-example1'
    },
    {
      label: 'Static nav (prev/next) + Pagination (bullets) outside + No loop',
      anchor: 'carousel-example2'
    },
    {
      label: 'Fade transition + Layer animations',
      anchor: 'carousel-example3'
    },
    {
      label: 'Vertical carousel',
      anchor: 'carousel-example4'
    },
    {
      label: 'Responsive with multiple items + Nav and pagination outside',
      anchor: 'carousel-example5'
    },
    {
      label: 'Light controls',
      anchor: 'carousel-example6'
    },
    {
      label: 'Thumbnails + Slides count',
      anchor: 'carousel-example7'
    },
    {
      label: 'Inside card',
      anchor: 'carousel-example8'
    },
    {
      label: 'Center slide',
      anchor: 'carousel-example9'
    },
    {
      label: 'Content carousel with external controls',
      anchor: 'carousel-example10'
    }
  ]


  // Example of Swiper slider with custom thumbnails and slides count

  const SwiperGallery = () => {

    const [currentSlide, setCurrentSlide] = useState()
    const [totalSlides, setTotalSlides] = useState()

    const thumbnails = [
      '/images/car-finder/single/gallery/th01.jpg',
      '/images/car-finder/single/gallery/th02.jpg',
      '/images/car-finder/single/gallery/th03.jpg',
      '/images/car-finder/single/gallery/th04.jpg',
      '/images/car-finder/single/gallery/th05.jpg'
    ]

    const SlidesCount = () => (
      <div className='swiper-slides-count text-light'>
        <i className='fi-image fs-lg me-2'></i>
        <div className='fs-5 fw-bold ps-1'>
          <span>{currentSlide}</span>
          <span>/</span>
          <span>{totalSlides}</span>
        </div>
      </div>
    )

    return (
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1)
          }}
          onInit={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1)
            setTotalSlides(swiper.slides.length - 2)
          }}
          pagination={{
            el: '.swiper-thumbnails',
            clickable: true,
            renderBullet: (index, className) => {
              return `<li class='swiper-thumbnail ${className}'>
                <img src='${thumbnails[index]}' alt='Thumbnail'>
              </li>`
            }
          }}
          navigation
          spaceBetween={12}
          loop
          grabCursor
          className='swiper-nav-onhover rounded-3'
        >
          <SwiperSlide className='d-flex'>
            <ImageLoader className='rounded-3' src='/images/car-finder/single/gallery/01.jpg' width={746} height={420} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader className='rounded-3' src='/images/car-finder/single/gallery/02.jpg' width={746} height={420} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader className='rounded-3' src='/images/car-finder/single/gallery/03.jpg' width={746} height={420} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader className='rounded-3' src='/images/car-finder/single/gallery/04.jpg' width={746} height={420} alt='Image' />
          </SwiperSlide>
          <SwiperSlide className='d-flex'>
            <ImageLoader className='rounded-3' src='/images/car-finder/single/gallery/05.jpg' width={746} height={420} alt='Image' />
          </SwiperSlide>
          <SlidesCount />
        </Swiper>

        <ul className='swiper-thumbnails'></ul>
      </>
    )
  }


  return (
    <ComponentPageLayout
      pageTitle='Carousel (Slider)'
      pageDescription='A slideshow component for cycling through elements (images or slides with any content) like a carousel.'
      activeNav='/components/carousel'
      anchorLinks={anchorLinks}
    >

      {/* Info alert */}
      <Alert variant='info' className='mb-5'>
        <div className='d-flex'>
          <i className='fi-alert-circle lead me-2 me-sm-3'></i>
          <div className='text-break'>
            <p className='mb-1'>Carousel component is powered by <Alert.Link href='https://swiperjs.com/react' target='_blank' rel='noreferrer'>Swiper React</Alert.Link> plugin.</p>
          </div>
        </div>
      </Alert>
      

      {/* Nav (prev/next) on hover + Light pagination (bullets) inside */}
      <ComponentPageSection id='carousel-example1' title='Nav (prev/next) on hover + Light pagination (bullets) inside'>
        <Tab.Pane eventKey='preview'>
          <div style={{maxWidth: '45rem'}}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{clickable: true}}
              spaceBetween={16}
              loop
              grabCursor
              className='swiper-nav-onhover swiper-pagination-light'
            >
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/20.jpg' width={720} height={329} alt='Image' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/10.jpg' width={720} height={329} alt='Image' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/12.jpg' width={720} height={329} alt='Image' />
              </SwiperSlide>
            </Swiper>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ImageLoader from '../components/ImageLoader'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
      
{/* Nav (prev/next) on hover + Light pagination (bullets) inside */}
<Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{clickable: true}}
  spaceBetween={16}
  loop
  grabCursor
  className='swiper-nav-onhover swiper-pagination-light'
>
  <SwiperSlide className='d-flex'>
    <ImageLoader src='/images/real-estate/catalog/20.jpg' width={720} height={329} alt='Image' />
  </SwiperSlide>
  <SwiperSlide className='d-flex'>
    <ImageLoader src='/images/real-estate/catalog/10.jpg' width={720} height={329} alt='Image' />
  </SwiperSlide>
  <SwiperSlide className='d-flex'>
    <ImageLoader src='/images/real-estate/catalog/12.jpg' width={720} height={329} alt='Image' />
  </SwiperSlide>
</Swiper>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Static nav (prev/next) + Pagination (bullets) outside + No loop */}
      <ComponentPageSection id='carousel-example2' title='Static nav (prev/next) + Pagination (bullets) outside + No loop'>
        <Tab.Pane eventKey='preview'>
          <div style={{maxWidth: '45rem'}}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{
                el: '#bullets',
                clickable: true
              }}
              spaceBetween={16}
              grabCursor
            >
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/09.jpg' width={720} height={329} alt='Image' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/06.jpg' width={720} height={329} alt='Image' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/07.jpg' width={720} height={329} alt='Image' />
              </SwiperSlide>
            </Swiper>
            <div id='bullets' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ImageLoader from '../components/ImageLoader'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
      
{/* Static nav (prev/next) + Pagination (bullets) outside + No loop */}
<Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{
    el: '#bullets',
    clickable: true
  }}
  spaceBetween={16}
  grabCursor
>
  <SwiperSlide className='d-flex'>
    <ImageLoader src='/images/real-estate/catalog/09.jpg' width={720} height={329} alt='Image' />
  </SwiperSlide>
  <SwiperSlide className='d-flex'>
    <ImageLoader src='/images/real-estate/catalog/06.jpg' width={720} height={329} alt='Image' />
  </SwiperSlide>
  <SwiperSlide className='d-flex'>
    <ImageLoader src='/images/real-estate/catalog/07.jpg' width={720} height={329} alt='Image' />
  </SwiperSlide>
</Swiper>

{/* External pagination (bullets) */}
<div id='bullets' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Fade transition + Layer animations */}
      <ComponentPageSection id='carousel-example3' title='Fade transition + Layer animations'>
        <Tab.Pane eventKey='preview'>
          <div style={{maxWidth: '45rem'}}>
            <Swiper
              modules={[Navigation, EffectFade]}
              navigation
              loop
              effect='fade'
              className='swiper-nav-onhover'
            >
              <SwiperSlide className='bg-light'>
                <div className='bg-faded-primary text-center py-5 px-3'>
                  <div className='py-4'>
                    <h3 className='from-top'>From top to bottom</h3>
                    <p className='fs-lg mb-4 pb-2 from-bottom delay-1'>From bottom to top</p>
                    <div className='scale-down delay-2'>
                      <Button>Scale down</Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='bg-light'>
                <div className='bg-faded-success text-center py-5 px-3'>
                  <div className='py-4'>
                    <h3 className='from-start'>From left to right</h3>
                    <p className='fs-lg mb-4 pb-2 from-end'>From right to left</p>
                    <div className='scale-up delay-2'>
                      <Button variant='success'>Scale up</Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from 'react-bootstrap/Button'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
      
{/* Fade transition + Layer animations */}
<Swiper
  modules={[Navigation, EffectFade]}
  navigation
  loop
  effect='fade'
  className='swiper-nav-onhover'
>
  <SwiperSlide className='bg-light'>
    <div className='bg-faded-primary text-center py-5 px-3'>
      <div className='py-4'>
        <h3 className='from-top'>From top to bottom</h3>
        <p className='fs-lg mb-4 pb-2 from-bottom delay-1'>From bottom to top</p>
        <div className='scale-down delay-2'>
          <Button>Scale down</Button>
        </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide className='bg-light'>
    <div className='bg-faded-success text-center py-5 px-3'>
      <div className='py-4'>
        <h3 className='from-start'>From left to right</h3>
        <p className='fs-lg mb-4 pb-2 from-end'>From right to left</p>
        <div className='scale-up delay-2'>
          <Button variant='success'>Scale up</Button>
        </div>
      </div>
    </div>
  </SwiperSlide>
</Swiper>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Vertical carousel */}
      <ComponentPageSection id='carousel-example4' title='Vertical carousel'>
        <Tab.Pane eventKey='preview'>
          <div style={{maxWidth: '45rem'}}>
            <Swiper
              modules={[Navigation, Pagination]}
              direction='vertical'
              navigation
              pagination={{clickable: true}}
              loop
              grabCursor
              style={{height:'340px'}}
              className='swiper-nav-onhover'
            >
              <SwiperSlide>
                <div className='d-flex h-100 bg-secondary justify-content-center align-items-center'>
                  <h2 className="mb-0">First</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='d-flex h-100 bg-secondary justify-content-center align-items-center'>
                  <h2 className="mb-0">Second</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='d-flex h-100 bg-secondary justify-content-center align-items-center'>
                  <h2 className="mb-0">Third</h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
      
{/* The fixed height should be set to swiper container in order for vertical slider to work */}
<Swiper
  modules={[Navigation, Pagination]}
  direction='vertical'
  navigation
  pagination={{clickable: true}}
  loop
  grabCursor
  style={{height:'340px'}}
  className='swiper-nav-onhover'
>
  <SwiperSlide>
    <div className='d-flex h-100 bg-secondary justify-content-center align-items-center'>
      <h2 className="mb-0">First</h2>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='d-flex h-100 bg-secondary justify-content-center align-items-center'>
      <h2 className="mb-0">Second</h2>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='d-flex h-100 bg-secondary justify-content-center align-items-center'>
      <h2 className="mb-0">Third</h2>
    </div>
  </SwiperSlide>
</Swiper>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Responsive with multiple items + Nav and pagination outside */}
      <ComponentPageSection id='carousel-example5' title='Responsive with multiple items + Nav and pagination outside'>
        <Tab.Pane eventKey='preview'>
          <div className='position-relative px-5'>
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
                500: {
                  slidesPerView: 2,
                  spaceBetween: 18
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 24
                }
              }}
            >
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/01.jpg' width={340} height={222} alt='Image' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/03.jpg' width={340} height={222} alt='Image' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/04.jpg' width={340} height={222} alt='Image' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/05.jpg' width={340} height={222} alt='Image' />
              </SwiperSlide>
            </Swiper>
            <Button id='prev' variant='prev' />
            <Button id='next' variant='next' />
          </div>
          <div id='pagination' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ImageLoader from '../components/ImageLoader'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from 'react-bootstrap/Button'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
      
{/* Wrapper for keeping external Prev/Next buttons */}
<div className='position-relative px-5'>

  {/* Swiper slider */}
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
      500: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    }}
  >
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/01.jpg' width={340} height={222} alt='Image' />
    </SwiperSlide>
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/03.jpg' width={340} height={222} alt='Image' />
    </SwiperSlide>
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/04.jpg' width={340} height={222} alt='Image' />
    </SwiperSlide>
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/05.jpg' width={340} height={222} alt='Image' />
    </SwiperSlide>
  </Swiper>

  {/* External Prev/Next buttons */}
  <Button id='prev' variant='prev' />
  <Button id='next' variant='next' />
</div>

{/* External pagination (bullets) buttons */}
<div id='pagination' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light controls */}
      <ComponentPageSection id='carousel-example6' title='Light controls'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <div className='position-relative mt-3 px-5'>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: '#prev2',
                nextEl: '#next2'
              }}
              pagination={{
                el: '#pagination2',
                clickable: true
              }}
              loop
              grabCursor
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 16
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 18
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 24
                }
              }}
              className='swiper-pagination-light'
            >
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/01.jpg' width={340} height={222} alt='Image' light='true' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/03.jpg' width={340} height={222} alt='Image' light='true' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/04.jpg' width={340} height={222} alt='Image' light='true' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/05.jpg' width={340} height={222} alt='Image' light='true' />
              </SwiperSlide>
            </Swiper>
            <Button id='prev2' variant='prev btn-light' />
            <Button id='next2' variant='next btn-light' />
          </div>
          <div id='pagination2' className='swiper-pagination swiper-pagination-light position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import ImageLoader from '../components/ImageLoader'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from 'react-bootstrap/Button'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
      
{/* Wrapper for keeping external Prev/Next buttons */}
<div className='position-relative px-5'>

  {/* Swiper slider */}
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
      500: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    }}
  >
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/01.jpg' width={340} height={222} alt='Image' light='true' />
    </SwiperSlide>
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/03.jpg' width={340} height={222} alt='Image' light='true' />
    </SwiperSlide>
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/04.jpg' width={340} height={222} alt='Image' light='true' />
    </SwiperSlide>
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/05.jpg' width={340} height={222} alt='Image' light='true' />
    </SwiperSlide>
  </Swiper>

  {/* External light Prev/Next buttons */}
  <Button id='prev' variant='prev btn-light' />
  <Button id='next' variant='next btn-light' />
</div>

{/* External light pagination (bullets) buttons */}
<div id='pagination' className='swiper-pagination swiper-pagination-light position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Thumbnails + Slides count */}
      <ComponentPageSection id='carousel-example7' title='Thumbnails + Slides count'>
        <Tab.Pane eventKey='preview'>
          <div style={{maxWidth: '746px'}}>
            <SwiperGallery />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import ImageLoader from '../components/ImageLoader'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
      

{/* Example of Swiper slider with custom thumbnails and slides count */}

const SwiperGallery = () => {

  const [currentSlide, setCurrentSlide] = useState()
  const [totalSlides, setTotalSlides] = useState()

  const thumbnails = [
    '/images/car-finder/single/gallery/th01.jpg',
    '/images/car-finder/single/gallery/th02.jpg',
    '/images/car-finder/single/gallery/th03.jpg',
    '/images/car-finder/single/gallery/th04.jpg',
    '/images/car-finder/single/gallery/th05.jpg'
  ]

  const SlidesCount = () => (
    <div className='swiper-slides-count text-light'>
      <i className='fi-image fs-lg me-2'></i>
      <div className='fs-5 fw-bold ps-1'>
        <span>{currentSlide}</span>
        <span>/</span>
        <span>{totalSlides}</span>
      </div>
    </div>
  )

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1)
        }}
        onInit={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1)
          setTotalSlides(swiper.slides.length - 2)
        }}
        pagination={{
          el: '.swiper-thumbnails',
          clickable: true,
          renderBullet: (index, className) => {
            return \`<li class='swiper-thumbnail \${className}'>
              <img src='\${thumbnails[index]}' alt='Thumbnail'>
            </li>\`
          }
        }}
        navigation
        spaceBetween={12}
        loop
        grabCursor
        className='swiper-nav-onhover rounded-3'
      >
        <SwiperSlide className='d-flex'>
          <ImageLoader className='rounded-3' src='/images/car-finder/single/gallery/01.jpg' width={746} height={420} alt='Image' />
        </SwiperSlide>
        <SwiperSlide className='d-flex'>
          <ImageLoader className='rounded-3' src='/images/car-finder/single/gallery/02.jpg' width={746} height={420} alt='Image' />
        </SwiperSlide>
        <SwiperSlide className='d-flex'>
          <ImageLoader className='rounded-3' src='/images/car-finder/single/gallery/03.jpg' width={746} height={420} alt='Image' />
        </SwiperSlide>
        <SwiperSlide className='d-flex'>
          <ImageLoader className='rounded-3' src='/images/car-finder/single/gallery/04.jpg' width={746} height={420} alt='Image' />
        </SwiperSlide>
        <SwiperSlide className='d-flex'>
          <ImageLoader className='rounded-3' src='/images/car-finder/single/gallery/05.jpg' width={746} height={420} alt='Image' />
        </SwiperSlide>
        <SlidesCount />
      </Swiper>

      <ul className='swiper-thumbnails'></ul>
    </>
  )
}

render(<SwiperGallery />)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inside card */}
      <ComponentPageSection id='carousel-example8' title='Inside card'>
        <Tab.Pane eventKey='preview'>
          <Card className='card-hover' style={{maxWidth: '20rem'}}>
            <Swiper
              modules={[Navigation]}
              navigation
              loop
              className='card-img-top card-img-hover'
            >
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/04.jpg' width={318} height={208} alt='Image' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/03.jpg' width={318} height={208} alt='Image' />
              </SwiperSlide>
              <SwiperSlide className='d-flex'>
                <ImageLoader src='/images/real-estate/catalog/05.jpg' width={318} height={208} alt='Image' />
              </SwiperSlide>
              <span className='img-overlay'></span>
            </Swiper>
            <Card.Body>
              <Card.Title as='h5'>Hover over me</Card.Title>
              <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
              <Button as={Link} href='#' size='sm'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import ImageLoader from '../components/ImageLoader'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
      
{/* Carousel inside card */}
<Card className='card-hover'>
  <Swiper
    modules={[Navigation]}
    navigation
    loop
    className='card-img-top card-img-hover'
  >
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/04.jpg' width={318} height={208} alt='Image' />
    </SwiperSlide>
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/03.jpg' width={318} height={208} alt='Image' />
    </SwiperSlide>
    <SwiperSlide className='d-flex'>
      <ImageLoader src='/images/real-estate/catalog/05.jpg' width={318} height={208} alt='Image' />
    </SwiperSlide>
    <span className='img-overlay'></span>
  </Swiper>
  <Card.Body>
    <Card.Title as='h5'>Hover over me</Card.Title>
    <Card.Text className='fs-sm'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.</Card.Text>
    <Button as={Link} href='#' size='sm'>Go somewhere</Button>
  </Card.Body>
</Card>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Center slide */}
      <ComponentPageSection id='carousel-example9' title='Center slide'>
        <Tab.Pane eventKey='preview'>
          <Swiper
            modules={[Navigation, Pagination]}
            centeredSlides
            loop
            navigation
            pagination={{
              el: '#bullets2',
              clickable: true
            }}
            spaceBetween={16}
            breakpoints={{
              600: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 1
              },
              991: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              1600: {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }}
            className='swiper-centered swiper-nav-onhover'
          >
            <SwiperSlide>
              <VenueCardOverlay
                img={{
                  src: '/images/city-guide/home/upcoming-1.jpg',
                  alt: 'Background image'
                }}
                title='Simon Rock Concert'
                date='Nov 15'
                time='21:00'
                button={{
                  href: '#',
                  title: 'Tickets from $50',
                  variant: 'primary rounded-pill',
                  props: {
                    onClick: () => alert('You\'ve just bought tickets to Simon Rock Concert.')
                  },
                  wishlistProps: {
                    onClick: () => alert('You\'ve added Simon Rock Concert event to your wishlist!')
                  }
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <VenueCardOverlay
                img={{
                  src: '/images/city-guide/home/upcoming-2.jpg',
                  alt: 'Background image'
                }}
                title='Holi Festival'
                date='Dec 12'
                time='10:00'
                button={{
                  href: '#',
                  title: 'Tickets from $35',
                  variant: 'primary rounded-pill',
                  props: {
                    onClick: () => alert('You\'ve just bought tickets to Holi Festival.')
                  },
                  wishlistProps: {
                    onClick: () => alert('You\'ve added Holi Festival event to your wishlist!')
                  }
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <VenueCardOverlay
                img={{
                  src: '/images/city-guide/home/upcoming-3.jpg',
                  alt: 'Background image'
                }}
                title='Football Match'
                date='Nov 11'
                time='18:00'
                button={{
                  href: '#',
                  title: 'Tickets from $40',
                  variant: 'primary rounded-pill',
                  props: {
                    onClick: () => alert('You\'ve just bought tickets to Football Match.')
                  },
                  wishlistProps: {
                    onClick: () => alert('You\'ve added Football Match event to your wishlist!')
                  }
                }}
              />
            </SwiperSlide>
          </Swiper>
          <div id='bullets2' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import VenueCardOverlay from '../components/VenueCardOverlay'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

{/* Center slide carousel */}

<Swiper
  modules={[Navigation, Pagination]}
  centeredSlides
  loop
  navigation
  pagination={{
    el: '#bullets',
    clickable: true
  }}
  spaceBetween={16}
  breakpoints={{
    600: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }}
  className='swiper-nav-onhover'
>
  <SwiperSlide>
    <VenueCardOverlay
      img={{
        src: '/images/city-guide/home/upcoming-1.jpg',
        alt: 'Background image'
      }}
      title='Simon Rock Concert'
      date='Nov 15'
      time='21:00'
      button={{
        href: '#',
        title: 'Tickets from $50',
        variant: 'primary rounded-pill',
        props: {
          onClick: () => alert('You\'ve just bought tickets to Simon Rock Concert.')
        },
        wishlistProps: {
          onClick: () => alert('You\'ve added Simon Rock Concert event to your wishlist!')
        }
      }}
    />
  </SwiperSlide>
  <SwiperSlide>
    <VenueCardOverlay
      img={{
        src: '/images/city-guide/home/upcoming-2.jpg',
        alt: 'Background image'
      }}
      title='Holi Festival'
      date='Dec 12'
      time='10:00'
      button={{
        href: '#',
        title: 'Tickets from $35',
        variant: 'primary rounded-pill',
        props: {
          onClick: () => alert('You\'ve just bought tickets to Holi Festival.')
        },
        wishlistProps: {
          onClick: () => alert('You\'ve added Holi Festival event to your wishlist!')
        }
      }}
    />
  </SwiperSlide>
  <SwiperSlide>
    <VenueCardOverlay
      img={{
        src: '/images/city-guide/home/upcoming-3.jpg',
        alt: 'Background image'
      }}
      title='Football Match'
      date='Nov 11'
      time='18:00'
      button={{
        href: '#',
        title: 'Tickets from $40',
        variant: 'primary rounded-pill',
        props: {
          onClick: () => alert('You\'ve just bought tickets to Football Match.')
        },
        wishlistProps: {
          onClick: () => alert('You\'ve added Football Match event to your wishlist!')
        }
      }}
    />
  </SwiperSlide>
</Swiper>

{/* External pagination (bullets) buttons */}
<div id='bullets' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Content carousel with external controls */}
      <ComponentPageSection id='carousel-example10' title='Content carousel with external controls'>
        <Tab.Pane eventKey='preview'>
          <div className='pb-2' style={{maxWidth: '40rem'}}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              navigation={{
                prevEl: '#prev3',
                nextEl: '#next3'
              }}
              pagination={{
                el: '#pagination2',
                clickable: true
              }}
              loop
              grabCursor
            >
              <SwiperSlide>
                <Blockquote author={{name: 'Someone famous in Source Title'}} align='center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Blockquote>
              </SwiperSlide>
              <SwiperSlide>
                <Blockquote author={{name: 'Someone famous in Source Title'}} align='center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Blockquote>
              </SwiperSlide>
            </Swiper>
            <div className='d-flex justify-content-center'>
              <Button id='prev3' variant='prev' className='position-relative mx-2' />
              <Button id='next3' variant='next' className='position-relative mx-2' />
            </div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Blockquote from '../components/Blockquote'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

{/* Center slide carousel */}

<Swiper
  modules={[Navigation]}
  slidesPerView={1}
  navigation={{
    prevEl: '#prev3',
    nextEl: '#next3'
  }}
  pagination={{
    el: '#pagination2',
    clickable: true
  }}
  loop
  grabCursor
>
  <SwiperSlide>
    <Blockquote author={{name: 'Someone famous in Source Title'}} align='center'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Blockquote>
  </SwiperSlide>
  <SwiperSlide>
    <Blockquote author={{name: 'Someone famous in Source Title'}} align='center'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Blockquote>
  </SwiperSlide>
</Swiper>
<div className='d-flex justify-content-center'>
  <Button id='prev3' variant='prev' className='position-relative mx-2' />
  <Button id='next3' variant='next' className='position-relative mx-2' />
</div>

`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default CarouselPage
