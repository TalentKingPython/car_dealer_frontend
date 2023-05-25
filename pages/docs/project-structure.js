import DocsPageLayout from '../../components/partials/DocsPageLayout'
import Table from 'react-bootstrap/Table'

const ProjectStructurePage = () => (

  <DocsPageLayout pageTitle='Project structure' activeNav='/docs/project-structure'>
    <div className='pb-5'>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th className='w-25'>Folder / File name</th>
            <th className='w-75'>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='w-25'>
              <span className='text-nav fw-bold text-break'>Finder</span>
            </td>
            <td className='w-75'>Folder contains all template source files.</td>
          </tr>
          <tr>
            <td className='w-25'>
              <span className='text-nav fw-bold text-break'>Finder/components</span>
            </td>
            <td className='w-75'>This folder includes all React components one can use to build pages.</td>
          </tr>
          <tr>
            <td className='w-25'>
              <span className='text-nav fw-bold text-break'>Finder/components/partials</span>
            </td>
            <td className='w-75'>Partials are specific type of components that reprsent the common parts of the page like: <code>Navbar</code>, <code>Footer</code>, <code>Layout</code>, etc.</td>
          </tr>
          <tr>
            <td className='w-25'>
              <span className='text-nav fw-bold text-break'>Finder/pages</span>
            </td>
            <td className='w-75'>Folder contains all page files structured as subfolders that represent each demo, components and documentation: <code>/car-finder</code>, <code>/city-guide</code>, <code>/job-board</code>, <code>/real-estate</code>, <code>/components</code>, <code>/docs</code></td>
          </tr>
          <tr>
            <td className='w-25'>
              <span className='text-nav fw-bold text-break'>Finder/pages/api</span>
            </td>
            <td className='w-75'>This is a specific folder created by Next.js by default. It&apos;s designed to hold all API endpoints. <a href='https://nextjs.org/docs/api-routes/introduction' className='fw-bold fs-sm' target='_blank' rel='noreferrer'>Read more here.</a></td>
          </tr>
          <tr>
            <td className='w-25'>
              <span className='text-nav fw-bold text-break'>Finder/public</span>
            </td>
            <td className='w-75'>Folder contains static files like: <code>images</code>, <code>fonts</code>, <code>favicon</code>, <code>json</code>, etc. Next.js can serve static files under a folder called <code>public</code> in the root directory. Files inside public can then be referenced by your code starting from the base URL <code>(/)</code>.</td>
          </tr>
          <tr>
            <td className='w-25'>
              <span className='text-nav fw-bold text-break'>Finder/scss</span>
            </td>
            <td className='w-75'>This folder contains all project <code>.sass</code> (<code>.scss</code>) style files that are compiled and minified to <code>.css</code> on production build.</td>
          </tr>
          <tr>
            <td className='w-25'>
              <span className='text-nav fw-bold text-break'>Finder/package.json</span>
            </td>
            <td className='w-75'>File contains meta data about your app. Most importantly, it includes the list of dependencies to install from <code>npm</code> when running <kbd>npm install</kbd>; scripts to rund the project in dev mode <kbd>npm run dev</kbd> or production build <kbd>npm run build</kbd>.</td>
          </tr>
          <tr>
            <td className='w-25'>
              <span className='text-nav fw-bold text-break'>Finder/next.config.js</span>
            </td>
            <td className='w-75'>For custom advanced configuration of Next.js, you can use a <code>next.config.js</code> file. <a href='https://nextjs.org/docs/api-reference/next.config.js/introduction' className='fw-bold fs-sm' target='_blank' rel='noreferrer'>Read more here.</a></td>
          </tr>
        </tbody>
      </Table>
    </div>
  </DocsPageLayout>
)

export default ProjectStructurePage
