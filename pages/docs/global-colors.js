import DocsPageLayout from '../../components/partials/DocsPageLayout'
import ImageLoader from '../../components/ImageLoader'

const GlobalColorsPage = () => (

  <DocsPageLayout pageTitle='Global colors' activeNav='/docs/global-colors'>
    <div className='pb-5'>
      <h2 className='h4'>Customize global colors via Sass variables</h2>
      <p>In case you want to create your own color scheme - the fastest and painless way to do that is via Sass variables.</p>
      <p>Simply copy the necessary variable from <code>Finder/scss/_variables.scss</code> file and paste to <code>Finder/scss/_user-variables.scss</code>. As you know from prvious sections whn you change any file inside <code>Finder/scss</code> the styles will be automatically compiled.</p>
      <p><u className='text-dark'>Blelow is the screenshot of the part of Sass variables file responsible for global colors:</u></p>
      <div className='img-thumbnail'>
        <ImageLoader
          src='/images/docs/sass-variables.png'
          width={552}
          height={1028}
          alt='Sass variables'
        />
      </div>
    </div>
  </DocsPageLayout>
)

export default GlobalColorsPage
