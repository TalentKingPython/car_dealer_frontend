import DocsPageLayout from '../../components/partials/DocsPageLayout'
import ImageLoader from '../../components/ImageLoader'

const BrowserSupportPage = () => (

  <DocsPageLayout pageTitle='Browser support' activeNav='/docs/browser-support'>
    <div className='pb-5'>
      <p>Vendor prefixes are not used inside SCSS instead we use <a href='https://github.com/postcss/autoprefixer' className='fw-bold' target='_blank' rel='noreferrer'>Autoprefixer</a> to handle intended browser support via CSS prefixes. After compilation CSS styles are passed through Autoprefixer to add necessary vendor prefixes. As you know vendor prefixes are important to ensure cross-browser compatibility of latest CSS3 features.</p>
      <h2 className='h4 pt-3'>Customize browser support via Autoprefixer settings</h2>
      <p>To customize Autoprfixer settings you need to go to <code>package.json</code> and find <code>&quot;browserslist&quot;</code> array. It&apos;s currently set to the Bootstrap&apos;s default list of browsers.</p>
      <p>Generally it&apos;s a good practice to collect some analytics about what Browsers/OSs your visitors use. And then customize Autoprefixer settings based on this data.</p>
      <p>For more information about available Browserlist options visit <a href='https://github.com/browserslist/browserslist' className='fw-bold' target='_blank' rel='noreferrer'>https://github.com/browserslist/browserslist</a>.</p>
      <div className='img-thumbnail mt-3'>
        <ImageLoader
          src='/images/docs/browserlist.png'
          width={679}
          height={503}
          alt='Browserlist'
        />
      </div>
    </div>
  </DocsPageLayout>
)

export default BrowserSupportPage
