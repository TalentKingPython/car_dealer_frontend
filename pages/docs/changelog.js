import DocsPageLayout from '../../components/partials/DocsPageLayout'
import Link from 'next/link'

const ChangelogPage = () => (

  <DocsPageLayout pageTitle='Changelog' activeNav='/docs/changelog'>
    <h2 className='h4 pb-1'>
      <span className='text-primary'> v1.1.0</span>&nbsp;&ndash;&nbsp;January 9, 2023
    </h2>
    <ul className='list-unstyled'>
      <li className='d-flex align-items-start mb-3'>
        <span className='badge bg-success fs-sm pt-1 me-3'>Updated</span>
        <div>All dependencies, plugins and libraries to latest versions, including <strong>Next.js to v13.1.1</strong>, <strong>React to v18.2.0</strong>, <strong>Bootstrap to v5.2.3</strong>, <strong>React Bootstrap to v2.7.0</strong></div>
      </li>
      <li className='d-flex align-items-start mb-3'>
        <span className='badge bg-success fs-sm pt-1 me-3'>Updated</span>
        <div>Range Slider component to a different plugin. Now it is powered by React Slider instead of noUISlider React which is deprecated. Check the <Link href='/components/forms#forms-range-slider' className='fw-bold text-decoration-none'>updated component&apos;s page</Link>.</div>
      </li>
      <li className='d-flex align-items-start mb-3'>
        <span className='badge bg-success fs-sm pt-1 me-3'>Updated</span>
        <div>Breadcrumb to be compatible with new Nex.js <code>Link</code> component. Check the <Link href='/components/breadcrumb' className='fw-bold text-decoration-none'>updated component&apos;s page</Link>.</div>
      </li>
      <li className='d-flex align-items-start mb-3'>
        <span className='badge bg-warning fs-sm pt-1 me-3'>Fixed</span>
        <div>Compatibility issue with updated Next.js <code>Link</code> component. Removed nested <code>&lt;a&gt;</code> tag everywhere in the app.</div>
      </li>
      <li className='d-flex align-items-start mb-3'>
        <span className='badge bg-warning fs-sm pt-1 me-3'>Fixed</span>
        <div>Compatibility issue with updated React Bootstrap responsive <code>Offcanvas</code> component. <code>react-responsive</code> plugin is no loger needed to build responssive offcanvas. Also updated the <code>_offcanvas.scss</code> file to be compatible with new responsive offcanvas.</div>
      </li>
      <li className='d-flex align-items-start mb-3'>
        <span className='badge bg-warning fs-sm pt-1 me-3'>Fixed</span>
        <div>Button styles. Modified <code>_buttons.scss</code> file.</div>
      </li>
      <li className='d-flex align-items-start mb-3'>
        <span className='badge bg-warning fs-sm pt-1 me-3'>Fixed</span>
        <div>Compatibility issue with the updated Next.js <code>Image</code> component. Dependant Finder <code>ImageLoader</code> component has to fall back to the legacy <code>Image</code> component that properly supports custom animated svg <code>placeholder</code>. We'll switch to the new <code>Image</code> component as soon as Nex.js fixed the issue. Read the <a href='https://github.com/vercel/next.js/issues/42140' target='_blank' rel='noreferrer'>issue thread here</a>.</div>
      </li>
      <li className='d-flex align-items-start mb-3'>
        <span className='badge bg-warning fs-sm pt-1 me-3'>Fixed</span>
        <div>Page <code>title</code> that breaks the page after updating to Next.js 13. The error message: "A title element received an array with more than 1 element as children". Read the <a href='https://github.com/vercel/next.js/discussions/38256' target='_blank' rel='noreferrer'>issue thread here</a>.</div>
      </li>
    </ul>
    
    <hr className='my-5' />

    <h2 className='h4 pb-1'>
      <span className='text-primary'> v1.0.0</span>&nbsp;&ndash;&nbsp;May 3, 2022
    </h2>
    <ul className='list-unstyled mb-4 pb-3'>
      <li>Initial release</li>
    </ul>
  </DocsPageLayout>
)

export default ChangelogPage
