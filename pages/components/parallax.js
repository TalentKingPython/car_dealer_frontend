// Scroll and Cursor Parallax components documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Tab from 'react-bootstrap/Tab'
import Alert from 'react-bootstrap/Alert'
import Code from '../../components/Code'
import CursorParallax, { Layer } from '../../components/CursorParallax'
import ElementParallax from '../../components/ElementParallax'

const BgParallax = dynamic(() => import('../../components/BgParallax'), { ssr: false })

const ParallaxPage = () => {

  const anchorLinks = [
    {
      label: 'Background image',
      anchor: 'parallax-background'
    },
    {
      label: 'Element parallax',
      anchor: 'parallax-element'
    },
    {
      label: 'Cursor position parallax',
      anchor: 'parallax-cursor'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Parallax'
      pageDescription='Finder supports 2 types of parallax effect: on page scrolling and cursor position.'
      activeNav='/components/parallax'
      anchorLinks={anchorLinks}
    >

      {/* Info alert */}
      <Alert variant='info' className='mb-5'>
        <div className='d-flex'>
          <i className='fi-alert-circle lead me-2 me-sm-3'></i>
          <div className='text-break'>
            <p className='mb-2'>Background Parallax component is powered by <Alert.Link href='https://www.npmjs.com/package/jarallax' target='_blank' rel='noreferrer'>Jarallax plugin</Alert.Link>.</p>
            <p className='mb-2'>Element Parallax relies on <Alert.Link href='https://www.npmjs.com/package/rellax' target='_blank' rel='noreferrer'>Rellax.js plugin</Alert.Link>.</p>
            <p className='mb-1'>Cursor Parallax is powered by <Alert.Link href='https://www.npmjs.com/package/parallax-js' target='_blank' rel='noreferrer'>Parallax.js plugin</Alert.Link>.</p>
          </div>
        </div>
      </Alert>

      {/* Background image */}
      <ComponentPageSection id='parallax-background' title='Background image'>
        <Tab.Pane eventKey='preview'>
          <div className='pb-4 mx-auto' style={{maxWidth: '38rem'}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat.</p>
          </div>
          <BgParallax
            imgSrc='/images/city-guide/home/hero-bg.jpg'
            type='scroll'
            speed={0.5}
            overlay={50}
            className='bg-dark py-5'
          >
            <div className='text-center my-md-4 py-sm-5'>
              <h2 className='h1 text-light py-lg-5 my-5'>Parallax background image</h2>
            </div>
          </BgParallax>
          <div className='pt-5 mx-auto' style={{maxWidth: '38rem'}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat.</p>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import dynamic from 'next/dynamic'
const BgParallax = dynamic(() => import('../components/BgParallax'), { ssr: false })

{/* Background image parallax */}
<BgParallax
  imgSrc='/images/city-guide/home/hero-bg.jpg'
  type='scroll' // scale, opacity, scroll-opacity, scale-opacity
  speed={0.5} // from -1.0 to 2.0
  overlay={50} // from 0 to 100 or 'gradient' to apply gradient overlay
  className='bg-dark py-5'
>
  <div className='text-center my-md-4 py-sm-5'>
    <h2 className='h1 text-light py-lg-5 my-5'>Parallax background image</h2>
  </div>
</BgParallax>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Element parallax */}
      <ComponentPageSection id='parallax-element' title='Element parallax'>
        <Tab.Pane eventKey='preview' className='m-n3 px-3 py-5 bg-dark'>
          <div id='wrapper' className='position-relative overflow-hidden mx-auto' style={{maxWidth:' 5rem', minHeight: '33rem'}}>            
            <ElementParallax
              options={{
                speed: -2.5,
                center: true
              }}
              className='content-overlay pt-5'
            >
              <Image src='/images/car-finder/home/car.svg' width={80} height={177} alt='Car image' />
            </ElementParallax>
            <div className='position-absolute top-0 start-50 translate-middle-x h-100 overflow-hidden'>
              <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={2} height={656} x='0px' y='0px' viewBox='0 0 2 656'><path fill='#fff' fillOpacity='.16' d='M2,335.1V354H0l0-18.9H2z M2,368.6v18.9H0l0-18.9H2z M2,402.1v18.9H0l0-18.9H2z M2,435.7v18.9H0l0-18.9H2z M2,469.2v18.9H0l0-18.9H2z M2,502.8v18.9H0l0-18.9H2z M2,536.3v18.9H0l0-18.9H2z M2,569.9v18.9H0l0-18.9H2z M2,603.4l0,18.9H0l0-18.9H2z M2,637v9.5v9.5H0L0,637H2z'/><g fillOpacity='.16'><path fill='#fff' d='M2,18.9H0L0,0h2V18.9z'/><path fill='#fff' d='M2,52.5H0l0-18.9h2V52.5z'/><path fill='#fff' d='M2,86H0l0-18.9h2V86z'/><path fill='#fff' d='M2,119.6H0l0-18.9h2V119.6z'/><path fill='#fff' d='M2,153.1H0l0-18.9h2V153.1z'/><path fill='#fff' d='M2,186.7H0l0-18.9h2V186.7z'/><path fill='#fff' d='M2,220.2H0l0-18.9h2V220.2z'/><path fill='#fff' d='M2,253.8H0l0-18.9h2V253.8z'/><path fill='#fff' d='M2,287.3H0l0-18.9h2L2,287.3z'/><path fill='#fff' d='M2,320.8H0l0-18.9h2v9.5V320.8z'/></g></svg>
            </div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Image from 'next/image'
import ElementParallax from '../components/ElementParallax'

{/* Element parallax */}
<div className='px-4 py-5 bg-dark'>
  <div id='wrapper' className='position-relative overflow-hidden mx-auto' style={{maxWidth:' 5rem', minHeight: '33rem'}}>            
    <ElementParallax
      options={{
        speed: -2.5,
        center: true
      }}
      className='content-overlay pt-5'
    >
      <Image src='/images/car-finder/home/car.svg' width={80} height={177} alt='Car image' />
    </ElementParallax>
    <div className='position-absolute top-0 start-50 translate-middle-x h-100 overflow-hidden'>
      <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={2} height={656} x='0px' y='0px' viewBox='0 0 2 656'><path fill='#fff' fillOpacity='.16' d='M2,335.1V354H0l0-18.9H2z M2,368.6v18.9H0l0-18.9H2z M2,402.1v18.9H0l0-18.9H2z M2,435.7v18.9H0l0-18.9H2z M2,469.2v18.9H0l0-18.9H2z M2,502.8v18.9H0l0-18.9H2z M2,536.3v18.9H0l0-18.9H2z M2,569.9v18.9H0l0-18.9H2z M2,603.4l0,18.9H0l0-18.9H2z M2,637v9.5v9.5H0L0,637H2z'/><g fillOpacity='.16'><path fill='#fff' d='M2,18.9H0L0,0h2V18.9z'/><path fill='#fff' d='M2,52.5H0l0-18.9h2V52.5z'/><path fill='#fff' d='M2,86H0l0-18.9h2V86z'/><path fill='#fff' d='M2,119.6H0l0-18.9h2V119.6z'/><path fill='#fff' d='M2,153.1H0l0-18.9h2V153.1z'/><path fill='#fff' d='M2,186.7H0l0-18.9h2V186.7z'/><path fill='#fff' d='M2,220.2H0l0-18.9h2V220.2z'/><path fill='#fff' d='M2,253.8H0l0-18.9h2V253.8z'/><path fill='#fff' d='M2,287.3H0l0-18.9h2L2,287.3z'/><path fill='#fff' d='M2,320.8H0l0-18.9h2v9.5V320.8z'/></g></svg>
    </div>
  </div>
</div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Cursor position parallax */}
      <ComponentPageSection id='parallax-cursor' title='Cursor position parallax'>
        <Tab.Pane eventKey='preview' className='m-n3 px-3 py-5 bg-dark'>
          <CursorParallax className='mx-auto' style={{maxWidth: '526px'}}>
            <Layer depth={0.1}>
              <Image priority src='/images/job-board/hero-banner-1/layer01.svg' width={526} height={353} alt='Layer' />
            </Layer>
            <Layer depth={0.16}>
              <Image priority src='/images/job-board/hero-banner-1/layer02.svg' width={526} height={353} alt='Layer' />
            </Layer>
            <Layer depth={0.38}>
              <Image priority src='/images/job-board/hero-banner-1/layer03.svg' width={526} height={353} alt='Layer' />
            </Layer>
            <Layer depth={0.16}>
              <Image priority src='/images/job-board/hero-banner-1/layer04.svg' width={526} height={353} alt='Layer' />
            </Layer>
            <Layer depth={0.16}>
              <Image priority src='/images/job-board/hero-banner-1/layer05.svg' width={526} height={353} alt='Layer' />
            </Layer>
            <Layer depth={0.45}>
              <Image priority src='/images/job-board/hero-banner-1/layer06.svg' width={526} height={353} alt='Layer' />
            </Layer>
            <Layer depth={0.3}>
              <Image priority src='/images/job-board/hero-banner-1/layer07.svg' width={526} height={353} alt='Layer' />
            </Layer>
            <Layer depth={0.2}>
              <Image priority src='/images/job-board/hero-banner-1/layer08.svg' width={526} height={353} alt='Layer' />
            </Layer>
          </CursorParallax>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Image from 'next/image'
import CursorParallax, { Layer } from '../components/CursorParallax'

{/* Cursor position parallax */}
<div className='px-4 py-5 bg-dark'>
  <CursorParallax className='mx-auto' style={{maxWidth: '526px'}}>
    <Layer depth={0.1}>
      <Image priority src='/images/job-board/hero-banner-1/layer01.svg' width={526} height={353} alt='Layer' />
    </Layer>
    <Layer depth={0.16}>
      <Image priority src='/images/job-board/hero-banner-1/layer02.svg' width={526} height={353} alt='Layer' />
    </Layer>
    <Layer depth={0.38}>
      <Image priority src='/images/job-board/hero-banner-1/layer03.svg' width={526} height={353} alt='Layer' />
    </Layer>
    <Layer depth={0.16}>
      <Image priority src='/images/job-board/hero-banner-1/layer04.svg' width={526} height={353} alt='Layer' />
    </Layer>
    <Layer depth={0.16}>
      <Image priority src='/images/job-board/hero-banner-1/layer05.svg' width={526} height={353} alt='Layer' />
    </Layer>
    <Layer depth={0.45}>
      <Image priority src='/images/job-board/hero-banner-1/layer06.svg' width={526} height={353} alt='Layer' />
    </Layer>
    <Layer depth={0.3}>
      <Image priority src='/images/job-board/hero-banner-1/layer07.svg' width={526} height={353} alt='Layer' />
    </Layer>
    <Layer depth={0.2}>
      <Image priority src='/images/job-board/hero-banner-1/layer08.svg' width={526} height={353} alt='Layer' />
    </Layer>
  </CursorParallax>
</div>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default ParallaxPage
