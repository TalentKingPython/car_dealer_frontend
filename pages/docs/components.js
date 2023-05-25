import DocsPageLayout from '../../components/partials/DocsPageLayout'
import ImageLoader from '../../components/ImageLoader'

const ComponentsPage = () => (

  <DocsPageLayout pageTitle='Components' activeNav='/docs/components'>
    <div className='pb-5'>
      <p>Along with all default React Bootstrap components Finder introduces new components you can use across your web application. There are more than 50 components in total.</p>
      <p><a href='/components/accordion' className='fw-bold' target='_blank' rel='noreferrer'>List of all Components as well as their visual reference and code snippets can be found here.</a></p>
      <p className='pb-3'><a href='https://react-bootstrap.github.io/components/alerts' className='fw-bold' target='_blank' rel='noreferrer'>React Bootstrap components and documentation.</a></p>
      <p className='text-dark fw-bold pb-1'>Below is the image showing how to see code snippet for each component:</p>
      <div className='img-thumbnail shadow-none'>
        <ImageLoader
          src='/images/docs/component.jpg'
          width={499}
          height={551}
          quality={100}
          alt='Component show code'
        />
      </div>
    </div>
  </DocsPageLayout>
)

export default ComponentsPage
