import DocsPageLayout from '../../components/partials/DocsPageLayout'

const GettingStartedPage = () => (

  <DocsPageLayout pageTitle='Getting started' activeNav='/docs'>
    <div className='pb-4 pb-md-5'>
      
      {/* Disclaimer */}
      <div className='card card-body border-0 shadow-sm position-relative overflow-hidden ps-sm-5 mb-5'>
        <div className='position-absolute top-0 start-0 h-100 bg-danger' style={{width: '3px'}}></div>
        <h2 className='h5 fw-normal lh-base'><span className='fw-bold'>Finder template</span> you are currently viewing is a <span className='fw-bold'>React / Next.js (Bootstrap 5) Template</span>, <span className='text-danger fw-bold'>NEITHER a WordPress Theme, NOR a Static HTML Template!</span></h2>
        <p className='fs-lg mb-1'>Please DO NOT try to install Finder files into WordPress this will not work. If you need a WordPress version of Finder do not hesitate to contact us via email <a href='mailto:support@createx.studio'>support@createx.studio</a>. We&apos;ll put you on the waiting list and notify you when Finder WordPress is released.</p>
      </div>

      <h2 className='h4 mt-n2 mt-xl-0'>Prerequisites</h2>
      <p>Make sure you are familiar with the following technologies before purchasing Finder React / Nxt.js (Bootstrap 5) Template:</p>
      <ul>
        <li className='mb-1'>React (required)</li>
        <li className='mb-1'>Next.js (required)</li>
        <li className='mb-1'>Bootstrap 5 (required)</li>
        <li className='mb-1'>React Bootstrap (highly recommended).</li>
        <li className='mb-1'>Sass / Scss (highly recommended). It&apos;s much easier to customize a template using Scss variables then find and replace codde in vanilla CSS.</li>
        <li>Npm (optional)*. Npm is a package manager for Node. With Npm can manage (install, update, delete) your project dependencies much easier.</li>
      </ul>
      <p>* All the configuration files like <code>package.json</code> and <code>next.config.js</code> are included in the download package.</p>
      <h2 className='h4 pt-3'>Project setup</h2>
      <ol>
        <li className='mb-1'>Install Node.js and Npm (Node Package Manager) <a href='https://nodejs.org/en/' target='_blank' rel='noreferrer'>https://nodejs.org/en/</a></li>
        <li>Run <kbd>npm install</kbd> in your terminal to install all project dependencies</li>
        <li>After you have installed Node.js and Npm, run the development server: <kbd>npm run dev</kbd>.<br/>To create production build run <kbd>npm run build</kbd></li>
        <li>Open <code>http://localhost:3000</code> with your browser to see the result.</li>
        <li>You can start editing the page by modifying <code>pages/index.js</code> or any other file inside <code>pages</code> directory. The page auto-updates as you edit the file.</li>
      </ol>
      <h2 className='h4 pt-3'>Usefull links</h2>
      <ul className='list-unstyled mb-sm-1'>
        <li className='mb-1'>
          <a href='https://reactjs.org/docs/getting-started.html' className='nav-link d-inline-block py-1 px-0' target='_blank' rel='noreferrer'>
            React library documentation
            <i className='fi-external-link align-middle ms-2 mt-n1'></i>
          </a>
        </li>
        <li className='mb-1'>
          <a href='https://nextjs.org/docs/getting-started' className='nav-link d-inline-block py-1 px-0' target='_blank' rel='noreferrer'>
            Next.js framework documentation
            <i className='fi-external-link align-middle ms-2 mt-n1'></i>
          </a>
        </li>
        <li className='mb-1'>
          <a href='https://react-bootstrap.github.io/getting-started/introduction/' className='nav-link d-inline-block py-1 px-0' target='_blank' rel='noreferrer'>
            React Bootstrap documentation
            <i className='fi-external-link align-middle ms-2 mt-n1'></i>
          </a>
        </li>
      </ul>
    </div>
  </DocsPageLayout>
)

export default GettingStartedPage
