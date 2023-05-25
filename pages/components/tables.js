// Table component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import Code from '../../components/Code'

const TablesPage = () => {

  const anchorLinks = [
    {
      label: 'Basic example',
      anchor: 'tables-basic'
    },
    {
      label: 'Dark table',
      anchor: 'tables-dark'
    },
    {
      label: 'Small table',
      anchor: 'tables-small'
    },
    {
      label: 'Striped rows',
      anchor: 'tables-striped-rows'
    },
    {
      label: 'Bordered table',
      anchor: 'tables-bordered'
    },
    {
      label: 'Hoverable rows',
      anchor: 'tables-hoverable'
    },
    {
      label: 'Contextual colors',
      anchor: 'tables-contextual'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Tables'
      pageDescription='Examples for opt-in styling of tables.'
      activeNav='/components/tables'
      docsLink='https://react-bootstrap.github.io/components/table/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Basic example */}
      <ComponentPageSection id='tables-basic' title='Basic example'>
        <Tab.Pane eventKey='preview'>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <td>Jane</td>
                <td>Birkins</td>
                <td>Support</td>
                <td>+3 774 28 50</td>
              </tr>
            </tbody>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Table from 'react-bootstrap/Table'

{/* Basic responsive table */}
<Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>John</td>
      <td>Doe</td>
      <td>CEO, Founder</td>
      <td>+3 555 68 70</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Anna</td>
      <td>Cabana</td>
      <td>Designer</td>
      <td>+3 434 65 93</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Kale</td>
      <td>Thornton</td>
      <td>Developer</td>
      <td>+3 285 42 88</td>
    </tr>
    <tr>
      <th scope='row'>4</th>
      <td>Jane</td>
      <td>Birkins</td>
      <td>Support</td>
      <td>+3 774 28 50</td>
    </tr>
  </tbody>
</Table>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Dark table */}
      <ComponentPageSection id='tables-dark' title='Dark table'>
        <Tab.Pane eventKey='preview'>
          <Table responsive variant='dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <td>Jane</td>
                <td>Birkins</td>
                <td>Support</td>
                <td>+3 774 28 50</td>
              </tr>
            </tbody>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Table from 'react-bootstrap/Table'

{/* Dark responsive table */}
<Table responsive variant='dark'>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>John</td>
      <td>Doe</td>
      <td>CEO, Founder</td>
      <td>+3 555 68 70</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Anna</td>
      <td>Cabana</td>
      <td>Designer</td>
      <td>+3 434 65 93</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Kale</td>
      <td>Thornton</td>
      <td>Developer</td>
      <td>+3 285 42 88</td>
    </tr>
    <tr>
      <th scope='row'>4</th>
      <td>Jane</td>
      <td>Birkins</td>
      <td>Support</td>
      <td>+3 774 28 50</td>
    </tr>
  </tbody>
</Table>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Small table */}
      <ComponentPageSection id='tables-small' title='Small table'>
        <Tab.Pane eventKey='preview'>
          <Table responsive size='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <td>Jane</td>
                <td>Birkins</td>
                <td>Support</td>
                <td>+3 774 28 50</td>
              </tr>
            </tbody>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Table from 'react-bootstrap/Table'

{/* Small responsive table */}
<Table responsive size='sm'>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>John</td>
      <td>Doe</td>
      <td>CEO, Founder</td>
      <td>+3 555 68 70</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Anna</td>
      <td>Cabana</td>
      <td>Designer</td>
      <td>+3 434 65 93</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Kale</td>
      <td>Thornton</td>
      <td>Developer</td>
      <td>+3 285 42 88</td>
    </tr>
    <tr>
      <th scope='row'>4</th>
      <td>Jane</td>
      <td>Birkins</td>
      <td>Support</td>
      <td>+3 774 28 50</td>
    </tr>
  </tbody>
</Table>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Striped rows */}
      <ComponentPageSection id='tables-striped-rows' title='Striped rows'>
        <Tab.Pane eventKey='preview'>
          <Table responsive striped className='mb-4'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </Table>
          <Table responsive striped variant='dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Table from 'react-bootstrap/Table'

{/* Light table with striped rows */}
<Table responsive striped>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>John</td>
      <td>Doe</td>
      <td>CEO, Founder</td>
      <td>+3 555 68 70</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Anna</td>
      <td>Cabana</td>
      <td>Designer</td>
      <td>+3 434 65 93</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Kale</td>
      <td>Thornton</td>
      <td>Developer</td>
      <td>+3 285 42 88</td>
    </tr>
  </tbody>
</Table>

{/* Dark table with striped rows */}
<Table responsive striped variant='dark'>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>John</td>
      <td>Doe</td>
      <td>CEO, Founder</td>
      <td>+3 555 68 70</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Anna</td>
      <td>Cabana</td>
      <td>Designer</td>
      <td>+3 434 65 93</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Kale</td>
      <td>Thornton</td>
      <td>Developer</td>
      <td>+3 285 42 88</td>
    </tr>
  </tbody>
</Table>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Bordered table */}
      <ComponentPageSection id='tables-bordered' title='Bordered table'>
        <Tab.Pane eventKey='preview'>
          <Table responsive bordered className='mb-4'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </Table>
          <Table responsive bordered variant='dark' className='mb-4'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </Table>
          <Table responsive bordered className='border-primary'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Table from 'react-bootstrap/Table'

{/* Light bordered table */}
<Table responsive bordered>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>John</td>
      <td>Doe</td>
      <td>CEO, Founder</td>
      <td>+3 555 68 70</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Anna</td>
      <td>Cabana</td>
      <td>Designer</td>
      <td>+3 434 65 93</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Kale</td>
      <td>Thornton</td>
      <td>Developer</td>
      <td>+3 285 42 88</td>
    </tr>
  </tbody>
</Table>

{/* Dark bordered table */}
<Table responsive bordered variant='dark'>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>John</td>
      <td>Doe</td>
      <td>CEO, Founder</td>
      <td>+3 555 68 70</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Anna</td>
      <td>Cabana</td>
      <td>Designer</td>
      <td>+3 434 65 93</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Kale</td>
      <td>Thornton</td>
      <td>Developer</td>
      <td>+3 285 42 88</td>
    </tr>
  </tbody>
</Table>

{/* Table with color border. Supports all theme colors */}
<Table responsive bordered className='border-primary'>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>John</td>
      <td>Doe</td>
      <td>CEO, Founder</td>
      <td>+3 555 68 70</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Anna</td>
      <td>Cabana</td>
      <td>Designer</td>
      <td>+3 434 65 93</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Kale</td>
      <td>Thornton</td>
      <td>Developer</td>
      <td>+3 285 42 88</td>
    </tr>
  </tbody>
</Table>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Hoverable rows */}
      <ComponentPageSection id='tables-hoverable' title='Hoverable rows'>
        <Tab.Pane eventKey='preview'>
          <Table responsive hover className='mb-4'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </Table>
          <Table responsive hover variant='dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>John</td>
                <td>Doe</td>
                <td>CEO, Founder</td>
                <td>+3 555 68 70</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Anna</td>
                <td>Cabana</td>
                <td>Designer</td>
                <td>+3 434 65 93</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Kale</td>
                <td>Thornton</td>
                <td>Developer</td>
                <td>+3 285 42 88</td>
              </tr>
            </tbody>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Table from 'react-bootstrap/Table'

{/* Light table with hoverable rows */}
<Table responsive hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>John</td>
      <td>Doe</td>
      <td>CEO, Founder</td>
      <td>+3 555 68 70</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Anna</td>
      <td>Cabana</td>
      <td>Designer</td>
      <td>+3 434 65 93</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Kale</td>
      <td>Thornton</td>
      <td>Developer</td>
      <td>+3 285 42 88</td>
    </tr>
  </tbody>
</Table>

{/* Dark table with hoverable rows */}
<Table responsive hover variant='dark'>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>John</td>
      <td>Doe</td>
      <td>CEO, Founder</td>
      <td>+3 555 68 70</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Anna</td>
      <td>Cabana</td>
      <td>Designer</td>
      <td>+3 434 65 93</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Kale</td>
      <td>Thornton</td>
      <td>Developer</td>
      <td>+3 285 42 88</td>
    </tr>
  </tbody>
</Table>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Contextual colors */}
      <ComponentPageSection id='tables-contextual' title='Contextual colors'>
        <Tab.Pane eventKey='preview'>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Heading</th>
                <th>Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr className='table-active'>
                <th scope='row'>1</th>
                <td>Active</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Default</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr className='table-primary'>
                <th scope='row'>3</th>
                <td>Primary</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <td>Default</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr className='table-accent'>
                <th scope='row'>5</th>
                <td>Accent</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope='row'>6</th>
                <td>Default</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr className='table-secondary'>
                <th scope='row'>7</th>
                <td>Secondary</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope='row'>8</th>
                <td>Default</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr className='table-success'>
                <th scope='row'>9</th>
                <td>Success</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope='row'>10</th>
                <td>Default</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr className='table-info'>
                <th scope='row'>11</th>
                <td>Info</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope='row'>12</th>
                <td>Default</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr className='table-warning'>
                <th scope='row'>13</th>
                <td>Warning</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope='row'>14</th>
                <td>Default</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr className='table-danger'>
                <th scope='row'>15</th>
                <td>Danger</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
            </tbody>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Table from 'react-bootstrap/Table'

{/* Table with contextual colored rows */}
<Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Class</th>
      <th>Heading</th>
      <th>Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr className='table-active'>
      <th scope='row'>1</th>
      <td>Active</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className='table-primary'>
      <th scope='row'>2</th>
      <td>Primary</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className='table-accent'>
      <th scope='row'>3</th>
      <td>Accent</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className='table-secondary'>
      <th scope='row'>4</th>
      <td>Secondary</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className='table-success'>
      <th scope='row'>5</th>
      <td>Success</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className='table-info'>
      <th scope='row'>6</th>
      <td>Info</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className='table-warning'>
      <th scope='row'>7</th>
      <td>Warning</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className='table-danger'>
      <th scope='row'>8</th>
      <td>Danger</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
  </tbody>
</Table>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default TablesPage
