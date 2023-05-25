import DocsPageLayout from '../../components/partials/DocsPageLayout'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Code from '../../components/Code'
import ImageLoader from '../../components/ImageLoader'

const IconFontPage = () => (

  <DocsPageLayout pageTitle='UI icons (Icon font)' activeNav='/docs/ui-icons'>
    <div className='pb-5'>
      <p>Finder includes the collection of vector based font icons to use across the website. See the code example below:</p>
      <Tab.Container defaultActiveKey='code' transition={Fade}>
        <Card className='border-0 shadow-sm'>
          <Card.Header>
            <Nav variant='tabs'>
              <Nav.Item>
                <Nav.Link as='button' eventKey='code'>
                  <i className='fi-code me-2'></i>
                  Code
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as='button' eventKey='preview'>
                  <i className='fi-eye-on me-2'></i>
                  Preview
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Tab.Content>
              <Tab.Pane eventKey='code'>
                <Code language='jsx'>{`<i className='fi-camera-plus'></i>`}</Code>
              </Tab.Pane>
              <Tab.Pane eventKey='preview'>
                <i className='fi-camera-plus lead'></i>
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>
      <a href='/components/icon-font' className='d-inline-block fw-bold pt-4' target='_blank' rel='noreferrer'>You can find the list of all available icons as well as their respective css classes here.</a>
      <h2 className='h4 pt-5'>Add new icons to the set</h2>
      <p>In order to add new icons to the set follow these easy steps:</p>
      <ol className='pb-3'>
        <li>Upload this file to <a href='https://icomoon.io/app' className='fw-bold' target='_blank' rel='noreferrer'>Icomoon App</a>. See the screnshot below.</li>
        <li>Add new icons by dragging them to the end of the list (this is important to add icons to the end). Make sure you upload icons in <span className='fw-bold'>.svg format</span>. Each SVG icon should be <span className='fw-bold'>24x24px</span> and <span className='fw-bold'>all paths should be outlined (converted to shapes)</span> for better rendering.</li>
        <li>Make sure to select new icons with selection tool at the top and click <span className='fw-bold'>Generate Font</span>.</li>
        <li>Download generated font, extact .zip archive. Copy new font files as well as selection.json to <code>Finder/public/fonts</code>.</li>
        <li>Open <code>styles.css</code> or <code>styles.scss</code> (depending on whether you use CSS or SCSS) inside downloaded .zip, copy your new icons styles and add them to <code>Finder/scss/components/_icons.scss</code> to the end of the file.</li>
      </ol>
      <div className='img-thumbnail mb-2'>
        <ImageLoader
          src='/images/docs/icomoon.png'
          width={839}
          height={555}
          quality={90}
          alt='Icomoon App'
        />
      </div>
    </div>
  </DocsPageLayout>
)

export default IconFontPage
