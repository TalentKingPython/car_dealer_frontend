import DocsPageLayout from '../../components/partials/DocsPageLayout'
import Alert from 'react-bootstrap/Alert'

const UtilitiesPage = () => (

  <DocsPageLayout pageTitle='Utility classes' activeNav='/docs/utilities'>
    <div className='pb-4 pb-md-5'>
      <Alert variant='info' className='d-flex mb-4'>
        <i className='fi-alert-circle lead me-2 me-sm-3'></i>
        Bootstrap includes dozens of utilities - classes with a single purpose to reduce the frequency of highly repetitive declarations.
      </Alert>
      <p>Along with <a href='https://getbootstrap.com/docs/5.2/utilities/borders/' className='fw-bold' target='_blank' rel='noreferrer'>default Bootstrap utility classes</a> Finder introduces its own. They all live inside <code>Finder/scss/_utilities.scss</code> file.</p>
      <p>The list of most important Finder utilities as well as their visual reference and code snippets <a className='fw-bold' href='/components/utilities' target='_blank' rel='noreferrer'>can be found here.</a></p>
    </div>
  </DocsPageLayout>
)

export default UtilitiesPage
