// Pagination component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Pagination from 'react-bootstrap/Pagination'
import Code from '../../components/Code'

const PaginationPage = () => {

  const anchorLinks = [
    {
      label: 'Basic example',
      anchor: 'pagination-basic'
    },
    {
      label: 'Render dynamically',
      anchor: 'pagination-dynamic'
    },
    {
      label: 'With icons',
      anchor: 'pagination-icons'
    },
    {
      label: 'Sizing',
      anchor: 'pagination-sizing'
    },
    {
      label: 'Light version',
      anchor: 'pagination-light'
    }
  ]

  // Dynamic paginaation example
  let active = 3
  let items = []
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    )
  }

  const dynamicPaginaion = (
    <>
      <Pagination>
        <Pagination.Item>Prev</Pagination.Item>
        {items}
        <Pagination.Item>Next</Pagination.Item>
      </Pagination>
    </>
  )

  return (
    <ComponentPageLayout
      pageTitle='Pagination'
      pageDescription='Indicate a series of related content exists across multiple pages.'
      activeNav='/components/pagination'
      docsLink='https://react-bootstrap.github.io/components/pagination/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Basic example */}
      <ComponentPageSection id='pagination-basic' title='Basic example'>
        <Tab.Pane eventKey='preview'>
          <Pagination className='mt-3'>
            <Pagination.Item>Prev</Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
          </Pagination>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Pagination from 'react-bootstrap/Pagination'

{/* Basic example */}
<Pagination>
  <Pagination.Item>Prev</Pagination.Item>
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item active>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Ellipsis />
  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>Next</Pagination.Item>
</Pagination>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Render dynamically */}
      <ComponentPageSection id='pagination-dynamic' title='Render dynamically'>
        <Tab.Pane eventKey='preview'>
          {dynamicPaginaion}
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Pagination from 'react-bootstrap/Pagination'

{/* Render page links dynamically */}
let active = 3
let items = []
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  )
}

const dynamicPaginaion = (
  <>
    <Pagination>
      <Pagination.Item>Prev</Pagination.Item>
      {items}
      <Pagination.Item>Next</Pagination.Item>
    </Pagination>
  </>
)

render(dynamicPaginaion)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* With icons */}
      <ComponentPageSection id='pagination-icons' title='With icons'>
        <Tab.Pane eventKey='preview'>
          <Pagination className='mt-3'>
            <Pagination.Item>
              <i className='fi-chevron-left'></i>
            </Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>
              <i className='fi-chevron-right'></i>
            </Pagination.Item>
          </Pagination>
          <Pagination className='mt-4'>
            <Pagination.Item>
              <i className='fi-chevron-left me-sm-2'></i>
              <span className='d-none d-sm-inline'>Prev</span>
            </Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>
              <span className='d-none d-sm-inline'>Next</span>
              <i className='fi-chevron-right ms-sm-2'></i>
            </Pagination.Item>
          </Pagination>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Pagination from 'react-bootstrap/Pagination'

{/* Pagination with prev / next icons */}
<Pagination>
  <Pagination.Item>
    <i className='fi-chevron-left'></i>
  </Pagination.Item>
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item active>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Ellipsis />
  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>
    <i className='fi-chevron-right'></i>
  </Pagination.Item>
</Pagination>

{/* Pagination with prev / next icons + text */}
<Pagination>
  <Pagination.Item>
    <i className='fi-chevron-left me-sm-2'></i>
    <span className='d-none d-sm-inline'>Prev</span>
  </Pagination.Item>
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item active>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Ellipsis />
  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>
    <span className='d-none d-sm-inline'>Next</span>
    <i className='fi-chevron-right ms-sm-2'></i>
  </Pagination.Item>
</Pagination>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Sizing */}
      <ComponentPageSection id='pagination-sizing' title='Sizing'>
        <Tab.Pane eventKey='preview'>
          <Pagination size='lg' className='mt-3'>
            <Pagination.Item>
              <i className='fi-chevron-left'></i>
            </Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>
              <i className='fi-chevron-right'></i>
            </Pagination.Item>
          </Pagination>
          <Pagination className='mt-4'>
            <Pagination.Item>
              <i className='fi-chevron-left'></i>
            </Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>
              <i className='fi-chevron-right'></i>
            </Pagination.Item>
          </Pagination>
          <Pagination size='sm' className='mt-4'>
            <Pagination.Item>
              <i className='fi-chevron-left'></i>
            </Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>
              <i className='fi-chevron-right'></i>
            </Pagination.Item>
          </Pagination>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Pagination from 'react-bootstrap/Pagination'

{/* Large size */}
<Pagination size='lg'>
  <Pagination.Item>
    <i className='fi-chevron-left'></i>
  </Pagination.Item>
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item active>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Ellipsis />
  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>
    <i className='fi-chevron-right'></i>
  </Pagination.Item>
</Pagination>

{/* Normal size */}
<Pagination>
  <Pagination.Item>
    <i className='fi-chevron-left'></i>
  </Pagination.Item>
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item active>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Ellipsis />
  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>
    <i className='fi-chevron-right'></i>
  </Pagination.Item>
</Pagination>

{/* Small size */}
<Pagination size='sm'>
  <Pagination.Item>
    <i className='fi-chevron-left'></i>
  </Pagination.Item>
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item active>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Ellipsis />
  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>
    <i className='fi-chevron-right'></i>
  </Pagination.Item>
</Pagination>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light version */}
      <ComponentPageSection id='pagination-light' title='Light version'>
        <Tab.Pane className='m-n3 p-3 bg-dark' eventKey='preview'>
          <Pagination className='pagination-light mt-3'>
            <Pagination.Item>
              <i className='fi-chevron-left'></i>
            </Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>
              <i className='fi-chevron-right'></i>
            </Pagination.Item>
          </Pagination>
          <Pagination className='pagination-light mt-4'>
            <Pagination.Item>
              <i className='fi-chevron-left me-sm-2'></i>
              <span className='d-none d-sm-inline'>Prev</span>
            </Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>
              <span className='d-none d-sm-inline'>Next</span>
              <i className='fi-chevron-right ms-sm-2'></i>
            </Pagination.Item>
          </Pagination>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Pagination from 'react-bootstrap/Pagination'

{/* Pagination: light version */}
<Pagination className='pagination-light'>
  <Pagination.Item>
    <i className='fi-chevron-left me-sm-2'></i>
    <span className='d-none d-sm-inline'>Prev</span>
  </Pagination.Item>
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item active>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Ellipsis />
  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>
    <span className='d-none d-sm-inline'>Next</span>
    <i className='fi-chevron-right ms-sm-2'></i>
  </Pagination.Item>
</Pagination>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default PaginationPage
