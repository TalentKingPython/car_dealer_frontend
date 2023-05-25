import DocsPageLayout from '../../components/partials/DocsPageLayout'

const UsingSassPage = () => (

  <DocsPageLayout pageTitle='Using Sass (Scss) instead of CSS' activeNav='/docs/using-sass'>
    <div className='pb-4 pb-md-5'>
      <h2 className='h4'>Sass (Syntactically Awesome Style Sheets)</h2>
      <p>Sass is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It is the most mature, stable, and powerful professional grade CSS extension language in the world. Sass gives you the power of variables, mixins, functions, etc.</p>
      <h2 className='h4 pt-3'>Compiling Sass</h2>
      <p>Next.js allows you to import Sass using both the <code>.scss</code> and <code>.sass</code> extensions. Finder uses <code>.scss</code> syntax. If you check <code>_app.js</code> file you&apos;ll find out that<code>theme.scss</code> (not <code>.css</code>) is referenced from this root file. Sass will automatically compiled when you aapply any changes to any <code>.scss</code> fil inside <code>Finder/scss</code> folder.</p>
    </div>
  </DocsPageLayout>
)

export default UsingSassPage
