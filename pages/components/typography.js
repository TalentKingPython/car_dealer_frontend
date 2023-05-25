// Typography related components documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Code from '../../components/Code'
import Blockquote from '../../components/Blockquote'

const TypographyPage = () => {

  const anchorLinks = [
    {
      label: 'Headings',
      anchor: 'type-headings'
    },
    {
      label: 'Display headings',
      anchor: 'type-displays'
    },
    {
      label: 'Body text sizes',
      anchor: 'type-body-text'
    },
    {
      label: 'Inline text elements',
      anchor: 'type-inline'
    },
    {
      label: 'Abbreviations',
      anchor: 'type-abbreviations'
    },
    {
      label: 'Blockquote',
      anchor: 'type-blockquote'
    },
    {
      label: 'Lists: Unordered and ordered',
      anchor: 'type-lists'
    },
    {
      label: 'Lists: Unstyled',
      anchor: 'type-lists-unstyled'
    },
    {
      label: 'Lists: Inline',
      anchor: 'type-lists-inline'
    },
    {
      label: 'Description list basic example',
      anchor: 'type-description-list'
    },
    {
      label: 'Description list alignment',
      anchor: 'type-description-list-align'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Typography'
      pageDescription='Headings, body text, lists, blockquotes and more.'
      activeNav='/components/typography'
      docsLink='https://getbootstrap.com/docs/5.2/content/typography/'
      docsLinkLabel='Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Headings */}
      <ComponentPageSection id='type-headings' title='Headings'>
        <Tab.Pane eventKey='preview'>
          <h1>h1. Finder heading</h1>
          <hr />
          <h2 className='pt-3'>h2. Finder heading</h2>
          <hr />
          <h3 className='pt-3'>h3. Finder heading</h3>
          <hr />
          <h4 className='pt-3'>h4. Finder heading</h4>
          <hr />
          <h5 className='pt-3'>h5. Finder heading</h5>
          <hr />
          <h6 className='pt-3'>h6. Finder heading</h6>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Headings */}
<h1>h1. Finder heading</h1>
<h2>h2. Finder heading</h2>
<h3>h3. Finder heading</h3>
<h4>h4. Finder heading</h4>
<h5>h5. Finder heading</h5>
<h6>h6. Finder heading</h6>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Display headings */}
      <ComponentPageSection id='type-displays' title='Display headings'>
        <Tab.Pane eventKey='preview'>
          <h1 className='display-1'>Display 1</h1>
          <hr />
          <h1 className='display-2 pt-3'>Display 2</h1>
          <hr />
          <h1 className='display-3 pt-3'>Display 3</h1>
          <hr />
          <h1 className='display-4 pt-3'>Display 4</h1>
          <hr />
          <h1 className='display-5 pt-3'>Display 5</h1>
          <hr />
          <h1 className='display-6 pt-3'>Display 6</h1>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Display headings */}
<h1 className='display-1'>Display 1</h1>
<h1 className='display-2'>Display 2</h1>
<h1 className='display-3'>Display 3</h1>
<h1 className='display-4'>Display 4</h1>
<h1 className='display-5'>Display 5</h1>
<h1 className='display-6'>Display 6</h1>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Body text sizes */}
      <ComponentPageSection id='type-body-text' title='Body text sizes'>
        <Tab.Pane eventKey='preview'>
          <p className='fs-1'><strong>fs-1.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p className='fs-2'><strong>fs-2.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p className='fs-3'><strong>fs-3.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p className='fs-4'><strong>fs-4.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p className='fs-5'><strong>fs-5.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p className='fs-6'><strong>fs-6.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p className='lead'><strong>Lead.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p className='fs-lg'><strong>Large.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p><strong>Normal.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p className='fs-sm'><strong>Small.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p className='fs-xs'><strong>Medium small.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
          <p className='fs-xxs'><strong>Extra small.</strong> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Body text sizes */}
<p className='fs-1'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className='fs-2'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className='fs-3'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className='fs-4'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className='fs-5'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className='fs-6'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className='lead'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className='fs-lg'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className='fs-sm'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className='fs-xs'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className='fs-xxs'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inline text elements */}
      <ComponentPageSection id='type-inline' title='Inline text elements'>
        <Tab.Pane eventKey='preview'>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
          <p><u>This line of text will render as underlined.</u></p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
          <p><a href="#">Inline link</a></p>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Inline text elements */}
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
<p><a href="#">Inline link</a></p>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Abbreviations */}
      <ComponentPageSection id='type-abbreviations' title='Abbreviations'>
        <Tab.Pane eventKey='preview'>
          <p><abbr title='attribute'>attr</abbr></p>
          <p><abbr className='initialism' title='HyperText Markup Language'>HTML</abbr></p>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Abbreviations */}
<p><abbr title='attribute'>attr</abbr></p>
<p><abbr className='initialism' title='HyperText Markup Language'>HTML</abbr></p>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Blockquote */}
      <ComponentPageSection id='type-blockquote' title='Blockquote'>
        <Tab.Pane eventKey='preview'>
          <Blockquote author={{name: 'Someone famous in Source Title'}} className='mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </Blockquote>
          <Blockquote author={{name: 'Someone famous in Source Title'}} align='center' className='mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </Blockquote>
          <Blockquote author={{name: 'Someone famous in Source Title'}} align='end'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </Blockquote>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Blockquote from '../components/Blockquote'

{/* Blockquote: left aligned (Default) */}
<Blockquote author={{name: 'Someone famous in Source Title'}}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
</Blockquote>

{/* Blockquote: center aligned */}
<Blockquote author={{name: 'Someone famous in Source Title'}} align='center'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
</Blockquote>

{/* Blockquote: right aligned */}
<Blockquote author={{name: 'Someone famous in Source Title'}} align='end'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
</Blockquote>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Lists: Unordered and ordered */}
      <ComponentPageSection id='type-lists' title='Lists: Unordered and ordered'>
        <Tab.Pane eventKey='preview'>
          <Row>
            <Col sm={6}>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit</li>
              </ul>
            </Col>
            <Col sm={6}>
              <ol>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit</li>
              </ol>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Unordered list */}
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
</ul>

{/* Ordered list */}
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
</ol>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Lists: Unstyled */}
      <ComponentPageSection id='type-lists-unstyled' title='Lists: Unstyled'>
        <Tab.Pane eventKey='preview'>
          <ul className='list-unstyled'>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
          </ul>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Unstyled list */}
<ul className='list-unstyled'>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
</ul>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Lists: Inline */}
      <ComponentPageSection id='type-lists-inline' title='Lists: Inline'>
        <Tab.Pane eventKey='preview'>
          <ul className='list-inline'>
            <li className='list-inline-item'>Lorem ipsum dolor</li>
            <li className='list-inline-item'>Consectetur adipiscing</li>
            <li className='list-inline-item'>Integer molestie</li>
          </ul>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Inline list */}
<ul className='list-inline'>
  <li className='list-inline-item'>Lorem ipsum dolor</li>
  <li className='list-inline-item'>Consectetur adipiscing</li>
  <li className='list-inline-item'>Integer molestie</li>
</ul>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Description list basic example */}
      <ComponentPageSection id='type-description-list' title='Description list basic example'>
        <Tab.Pane eventKey='preview'>
          <dl>
            <dt>Description lists</dt>
            <dd>A description list is perfect for defining terms.</dd>
            <dt>Malesuada porta</dt>
            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
            <dt>Euismod</dt>
            <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
          </dl>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Description list basic example */}
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
</dl>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Description list alignment */}
      <ComponentPageSection id='type-description-list-align' title='Description list alignment'>
        <Tab.Pane eventKey='preview'>
          <Row as='dl' className='mb-0'>
            <Col as='dt' sm={3}>Description lists</Col>
            <Col as='dd' sm={9}>A description list is perfect for defining terms.</Col>
            <Col as='dt' sm={3}>Euismod</Col>
            <Col as='dd' sm={9}>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</Col>
            <Col as='dt' sm={3}>Malesuada porta</Col>
            <Col as='dd' sm={9}>Etiam porta sem malesuada magna mollis euismod.</Col>
            <Col as='dt' sm={3} className='text-truncate'>Long truncated term is truncated</Col>
            <Col as='dd' sm={9}>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</Col>
            <Col as='dt' sm={3}>Nesting</Col>
            <Col as='dd' sm={9}>
              <Row as='dl'>
                <Col as='dt' sm={4}>Nested definition list</Col>
                <Col as='dd' sm={8}>Aenean posuere, tortor sed cursus feugiat nunc augue.</Col>
              </Row>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

{/* Description alignment using rows and columns */}
<Row as='dl' className='mb-0'>
  <Col as='dt' sm={3}>Description lists</Col>
  <Col as='dd' sm={9}>A description list is perfect for defining terms.</Col>
  <Col as='dt' sm={3}>Euismod</Col>
  <Col as='dd' sm={9}>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</Col>
  <Col as='dt' sm={3}>Malesuada porta</Col>
  <Col as='dd' sm={9}>Etiam porta sem malesuada magna mollis euismod.</Col>
  <Col as='dt' sm={3} className='text-truncate'>Long truncated term is truncated</Col>
  <Col as='dd' sm={9}>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</Col>
  <Col as='dt' sm={3}>Nesting</Col>
  <Col as='dd' sm={9}>
    <Row as='dl'>
      <Col as='dt' sm={4}>Nested definition list</Col>
      <Col as='dd' sm={8}>Aenean posuere, tortor sed cursus feugiat nunc augue.</Col>
    </Row>
  </Col>
</Row>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default TypographyPage
