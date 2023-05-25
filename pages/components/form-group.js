// Form group component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Code from '../../components/Code'
import FormGroup from '../../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import ReactSlider from 'react-slider'

const FormGroupPage = () => {

  const anchorLinks = [
    {
      label: 'Supported controls',
      anchor: 'fg-controls'
    },
    {
      label: 'Multiple controls (Responsive)',
      anchor: 'fg-multiple'
    },
    {
      label: 'Pill shape',
      anchor: 'fg-pill'
    },
    {
      label: 'Sizing',
      anchor: 'fg-sizing'
    },
    {
      label: 'Light version',
      anchor: 'fg-light'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Form group'
      pageDescription='Component for grouping form controls, buttons, dropdowns together.'
      activeNav='/components/form-group'
      anchorLinks={anchorLinks}
    >

      {/* Supported controls */}
      <ComponentPageSection id='fg-controls' title='Supported controls'>
        <Tab.Pane eventKey='preview'>
          <FormGroup className='mb-3' style={{maxWidth: '25rem'}}>
            <Form.Control placeholder='Text input' />
            <Button variant='translucent-primary'>Button</Button>
          </FormGroup>
          <FormGroup className='mb-3' style={{maxWidth: '25rem'}}>
            <Form.Select defaultValue='default'>
              <option value='default' disabled>Select box</option>
              <option value='1'>Option item 1</option>
              <option value='2'>Option item 2</option>
              <option value='3'>Option item 3</option>
            </Form.Select>
            <Button variant='translucent-primary'>Button</Button>
          </FormGroup>
          <FormGroup className='mb-3' style={{maxWidth: '25rem'}}>
            <InputGroup>
              <InputGroup.Text className='text-muted'>
                <i className='fi-camera-plus'></i>
              </InputGroup.Text>
              <Form.Control placeholder='Input group' />
            </InputGroup>
            <Button variant='translucent-primary'>Button</Button>
          </FormGroup>
          <FormGroup className='mb-3' style={{maxWidth: '25rem'}}>
            <DropdownSelect
              defaultValue='Dropdown here'
              options={[
                [null, 'Action'],
                [null, 'Another action'],
                [null, 'Something else here'],
                [null, 'Yet another action']
              ]}
            />
            <Button variant='translucent-primary' className='ms-auto'>Button</Button>
          </FormGroup>
          <FormGroup className='mb-1' style={{maxWidth: '25rem'}}>
            <ReactSlider
              className='range-slider range-slider-single'
              thumbClassName='range-slider-handle'
              trackClassName='range-slider-track'
              min={0}
              max={1000}
              defaultValue={450}
              ariaLabel={['Handle']}
              ariaValuetext={state => `Handle value ${state.valueNow}`}
              renderThumb={(props, state) => (<div {...props}>
                <div className='range-slider-tooltip'>$ {state.valueNow}</div>
              </div>)}
            />
            <Button variant='translucent-primary'>Button</Button>
          </FormGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import FormGroup from '../../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ReactSlider from 'react-slider'

{/* Form group: Text input + Button */}
<FormGroup>
  <Form.Control placeholder='Text input' />
  <Button variant='translucent-primary'>Button</Button>
</FormGroup>

{/* Form group: Select + Button */}
<FormGroup>
  <Form.Select defaultValue='default'>
    <option value='default' disabled>Select box</option>
    <option value='1'>Option item 1</option>
    <option value='2'>Option item 2</option>
    <option value='3'>Option item 3</option>
  </Form.Select>
  <Button variant='translucent-primary'>Button</Button>
</FormGroup>


{/* Form group: Input group + Button */}
<FormGroup>
  <InputGroup>
    <InputGroup.Text className='text-muted'>
      <i className='fi-camera-plus'></i>
    </InputGroup.Text>
    <Form.Control placeholder='Input group' />
  </InputGroup>
  <Button variant='translucent-primary'>Button</Button>
</FormGroup>


{/* Form group: Dropdown + Button */}
<FormGroup>
  <DropdownSelect
    defaultValue='Dropdown here'
    options={[
      [null, 'Action'], // First element is an icon class, null means no icon
      [null, 'Another action'],
      [null, 'Something else here'],
      [null, 'Yet another action']
    ]}
  />
  <Button variant='translucent-primary' className='ms-auto'>Button</Button>
</FormGroup>

{/* Form group: Range slider + Button */}
<FormGroup>
  <ReactSlider
    className='range-slider range-slider-single'
    thumbClassName='range-slider-handle'
    trackClassName='range-slider-track'
    min={0}
    max={1000}
    defaultValue={450}
    ariaLabel={['Handle']}
    ariaValuetext={state => \`Handle value $\{state.valueNow\}\`}
    renderThumb={(props, state) => (<div {...props}>
      <div className='range-slider-tooltip'>$ {state.valueNow}</div>
    </div>)}
  />
<Button variant='translucent-primary'>Button</Button>
</FormGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Multiple controls (Responsive) */}
      <ComponentPageSection id='fg-multiple' title='Multiple controls (Responsive)'>
        <Tab.Pane eventKey='preview'>
          <FormGroup className='d-block'>
            <Row className='g-0 ms-sm-n2'>
              <Col md={7} className='d-sm-flex align-items-center'>
                <InputGroup className='w-sm-50 border-end-sm'>
                  <InputGroup.Text className='text-muted'>
                    <i className='fi-search'></i>
                  </InputGroup.Text>
                  <Form.Control placeholder='Search site...' />
                </InputGroup>
                <hr className='d-sm-none my-2' />
                <DropdownSelect
                  defaultValue='All categories'
                  options={[
                    [null, 'Accomodation'],
                    [null, 'Food & Drink'],
                    [null, 'Shopping'],
                    [null, 'Art & History']
                  ]}
                  icon='fi-list'
                  className='w-sm-50 border-end-md'
                />
              </Col>
              <hr className='d-md-none mt-2' />
              <Col md={5} className='d-sm-flex align-items-center pt-4 pt-md-0'>
                <div className='d-flex align-items-center w-100 pt-2 pb-4 py-sm-0 ps-3'>
                  <i className='fi-cash fs-lg text-muted me-2'></i>
                  <span className='text-muted'>Price</span>
                  <ReactSlider
                    className='range-slider range-slider-single'
                    thumbClassName='range-slider-handle'
                    trackClassName='range-slider-track'
                    min={0}
                    max={1000}
                    defaultValue={450}
                    ariaLabel={['Handle']}
                    ariaValuetext={state => `Handle value ${state.valueNow}`}
                    renderThumb={(props, state) => (<div {...props}>
                      <div className='range-slider-tooltip'>$ {state.valueNow}</div>
                    </div>)}
                  />
                </div>
                <Button variant='primary w-100 w-md-auto'>Search</Button>
              </Col>
            </Row>
          </FormGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import FormGroup from '../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactSlider from 'react-slider'

{/* Form group: Multiple controls (Responsive) */}
<FormGroup className='d-block'>
  <Row className='g-0 ms-sm-n2'>
    <Col md={7} className='d-sm-flex align-items-center'>
      <InputGroup className='w-sm-50 border-end-sm'>
        <InputGroup.Text className='text-muted'>
          <i className='fi-search'></i>
        </InputGroup.Text>
        <Form.Control placeholder='Search site...' />
      </InputGroup>
      <hr className='d-sm-none my-2' />
      <DropdownSelect
        defaultValue='All categories'
        options={[
          [null, 'Accomodation'], // First element is an icon class, null means no icon
          [null, 'Food & Drink'],
          [null, 'Shopping'],
          [null, 'Art & History']
        ]}
        icon='fi-list'
        className='w-sm-50 border-end-md'
      />
    </Col>
    <hr className='d-md-none mt-2' />
    <Col md={5} className='d-sm-flex align-items-center pt-4 pt-md-0'>
      <div className='d-flex align-items-center w-100 pt-2 pb-4 py-sm-0 ps-3'>
        <i className='fi-cash fs-lg text-muted me-2'></i>
        <span className='text-muted'>Price</span>
        <ReactSlider
          className='range-slider range-slider-single'
          thumbClassName='range-slider-handle'
          trackClassName='range-slider-track'
          min={0}
          max={1000}
          defaultValue={450}
          ariaLabel={['Handle']}
          ariaValuetext={state => \`Handle value $\{state.valueNow\}\`}
          renderThumb={(props, state) => (<div {...props}>
            <div className='range-slider-tooltip'>$ {state.valueNow}</div>
          </div>)}
        />
      </div>
      <Button variant='primary w-100 w-md-auto'>Search</Button>
    </Col>
  </Row>
</FormGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Pill shape */}
      <ComponentPageSection id='fg-pill' title='Pill shape'>
        <Tab.Pane eventKey='preview'>
          <FormGroup className='d-block rounded-md-pill'>
            <Row className='g-0 ms-sm-n2'>
              <Col md={7} className='d-sm-flex align-items-center'>
                <InputGroup className='w-sm-50 border-end-sm'>
                  <InputGroup.Text className='text-muted'>
                    <i className='fi-search'></i>
                  </InputGroup.Text>
                  <Form.Control placeholder='Search site...' />
                </InputGroup>
                <hr className='d-sm-none my-2' />
                <DropdownSelect
                  defaultValue='All categories'
                  options={[
                    [null, 'Accomodation'],
                    [null, 'Food & Drink'],
                    [null, 'Shopping'],
                    [null, 'Art & History']
                  ]}
                  icon='fi-list'
                  className='w-sm-50 border-end-md'
                />
              </Col>
              <hr className='d-md-none mt-2' />
              <Col md={5} className='d-sm-flex align-items-center pt-4 pt-md-0'>
                <div className='d-flex align-items-center w-100 pt-2 pb-4 py-sm-0 ps-3'>
                  <i className='fi-cash fs-lg text-muted me-2'></i>
                  <span className='text-muted'>Price</span>
                  <ReactSlider
                    className='range-slider range-slider-single'
                    thumbClassName='range-slider-handle'
                    trackClassName='range-slider-track'
                    min={0}
                    max={1000}
                    defaultValue={450}
                    ariaLabel={['Handle']}
                    ariaValuetext={state => `Handle value ${state.valueNow}`}
                    renderThumb={(props, state) => (<div {...props}>
                      <div className='range-slider-tooltip'>$ {state.valueNow}</div>
                    </div>)}
                  />
                </div>
                <Button variant='primary rounded-pill w-100 w-md-auto'>Search</Button>
              </Col>
            </Row>
          </FormGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import FormGroup from '../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactSlider from 'react-slider'

{/* Form group pill shape: Multiple controls (Responsive) */}
<FormGroup className='d-block rounded-md-pill'>
  <Row className='g-0 ms-sm-n2'>
    <Col md={7} className='d-sm-flex align-items-center'>
      <InputGroup className='w-sm-50 border-end-sm'>
        <InputGroup.Text className='text-muted'>
          <i className='fi-search'></i>
        </InputGroup.Text>
        <Form.Control placeholder='Search site...' />
      </InputGroup>
      <hr className='d-sm-none my-2' />
      <DropdownSelect
        defaultValue='All categories'
        options={[
          [null, 'Accomodation'], // First element is an icon class, null means no icon
          [null, 'Food & Drink'],
          [null, 'Shopping'],
          [null, 'Art & History']
        ]}
        icon='fi-list'
        className='w-sm-50 border-end-md'
      />
    </Col>
    <hr className='d-md-none mt-2' />
    <Col md={5} className='d-sm-flex align-items-center pt-4 pt-md-0'>
      <div className='d-flex align-items-center w-100 pt-2 pb-4 py-sm-0 ps-3'>
        <i className='fi-cash fs-lg text-muted me-2'></i>
        <span className='text-muted'>Price</span>
        <ReactSlider
          className='range-slider range-slider-single'
          thumbClassName='range-slider-handle'
          trackClassName='range-slider-track'
          min={0}
          max={1000}
          defaultValue={450}
          ariaLabel={['Handle']}
          ariaValuetext={state => \`Handle value $\{state.valueNow\}\`}
          renderThumb={(props, state) => (<div {...props}>
            <div className='range-slider-tooltip'>$ {state.valueNow}</div>
          </div>)}
        />
      </div>
      <Button variant='primary rounded-pill w-100 w-md-auto'>Search</Button>
    </Col>
  </Row>
</FormGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Sizing */}
      <ComponentPageSection id='fg-sizing' title='Sizing'>
        <Tab.Pane eventKey='preview'>
          <FormGroup className='mb-3' style={{maxWidth: '25rem'}}>
            <InputGroup size='lg'>
              <InputGroup.Text className='text-muted'>
                <i className='fi-search'></i>
              </InputGroup.Text>
              <Form.Control placeholder='Search query...' />
            </InputGroup>
            <Button variant='translucent-primary' size='lg'>Search</Button>
          </FormGroup>
          <FormGroup className='mb-3' style={{maxWidth: '25rem'}}>
            <InputGroup>
              <InputGroup.Text className='text-muted'>
                <i className='fi-search'></i>
              </InputGroup.Text>
              <Form.Control placeholder='Search query...' />
            </InputGroup>
            <Button variant='translucent-primary'>Search</Button>
          </FormGroup>
          <FormGroup className='mb-1' style={{maxWidth: '25rem'}}>
            <InputGroup size='sm'>
              <InputGroup.Text className='text-muted'>
                <i className='fi-search'></i>
              </InputGroup.Text>
              <Form.Control placeholder='Search query...' />
            </InputGroup>
            <Button variant='translucent-primary' size='sm'>Search</Button>
          </FormGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import FormGroup from '../components/FormGroup'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

{/* Large form group */}
<FormGroup>
  <InputGroup size='lg'>
    <InputGroup.Text className='text-muted'>
      <i className='fi-search'></i>
    </InputGroup.Text>
    <Form.Control placeholder='Search query...' />
  </InputGroup>
  <Button variant='translucent-primary' size='lg'>Search</Button>
</FormGroup>

{/* Normal form group */}
<FormGroup>
  <InputGroup>
    <InputGroup.Text className='text-muted'>
      <i className='fi-search'></i>
    </InputGroup.Text>
    <Form.Control placeholder='Search query...' />
  </InputGroup>
  <Button variant='translucent-primary'>Search</Button>
</FormGroup>

{/* Small form group */}
<FormGroup>
  <InputGroup size='sm'>
    <InputGroup.Text className='text-muted'>
      <i className='fi-search'></i>
    </InputGroup.Text>
    <Form.Control placeholder='Search query...' />
  </InputGroup>
  <Button variant='translucent-primary' size='sm'>Search</Button>
</FormGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light version */}
      <ComponentPageSection id='fg-light' title='Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <FormGroup light className='mb-3' style={{maxWidth: '25rem'}}>
            <Form.Control placeholder='Text input' />
            <Button variant='primary'>Button</Button>
          </FormGroup>
          <FormGroup light className='mb-3' style={{maxWidth: '25rem'}}>
            <Form.Select defaultValue='default'>
              <option value='default' disabled>Select box</option>
              <option value='1'>Option item 1</option>
              <option value='2'>Option item 2</option>
              <option value='3'>Option item 3</option>
            </Form.Select>
            <Button variant='primary'>Button</Button>
          </FormGroup>
          <FormGroup light className='mb-3' style={{maxWidth: '25rem'}}>
            <InputGroup>
              <InputGroup.Text className='text-muted'>
                <i className='fi-camera-plus'></i>
              </InputGroup.Text>
              <Form.Control placeholder='Input group' />
            </InputGroup>
            <Button variant='primary'>Button</Button>
          </FormGroup>
          <FormGroup light className='mb-3' style={{maxWidth: '25rem'}}>
            <DropdownSelect
              defaultValue='Dropdown here'
              options={[
                [null, 'Action'],
                [null, 'Another action'],
                [null, 'Something else here'],
                [null, 'Yet another action']
              ]}
              darkMenu
            />
            <Button variant='primary' className='ms-auto'>Button</Button>
          </FormGroup>
          <FormGroup light className='mb-1' style={{maxWidth: '25rem'}}>
            <ReactSlider
              className='range-slider range-slider-single range-slider-light'
              thumbClassName='range-slider-handle'
              trackClassName='range-slider-track'
              min={0}
              max={1000}
              defaultValue={450}
              ariaLabel={['Handle']}
              ariaValuetext={state => `Handle value ${state.valueNow}`}
              renderThumb={(props, state) => (<div {...props}>
                <div className='range-slider-tooltip'>$ {state.valueNow}</div>
              </div>)}
            />
            <Button variant='primary'>Button</Button>
          </FormGroup>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import FormGroup from '../../components/FormGroup'
import DropdownSelect from '../../components/DropdownSelect'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ReactSlider from 'react-slider'

{/* Light form group: Text input + Button */}
<FormGroup light>
  <Form.Control placeholder='Text input' />
  <Button variant='primary'>Button</Button>
</FormGroup>

{/* Light form group: Select + Button */}
<FormGroup light>
  <Form.Select defaultValue='default'>
    <option value='default' disabled>Select box</option>
    <option value='1'>Option item 1</option>
    <option value='2'>Option item 2</option>
    <option value='3'>Option item 3</option>
  </Form.Select>
  <Button variant='primary'>Button</Button>
</FormGroup>


{/* Light form group: Input group + Button */}
<FormGroup light>
  <InputGroup>
    <InputGroup.Text className='text-muted'>
      <i className='fi-camera-plus'></i>
    </InputGroup.Text>
    <Form.Control placeholder='Input group' />
  </InputGroup>
  <Button variant='primary'>Button</Button>
</FormGroup>


{/* Light form group: Dropdown + Button */}
<FormGroup light>
  <DropdownSelect
    defaultValue='Dropdown here'
    options={[
      [null, 'Action'], // First element is an icon class, null means no icon
      [null, 'Another action'],
      [null, 'Something else here'],
      [null, 'Yet another action']
    ]}
    darkMenu
  />
  <Button variant='primary' className='ms-auto'>Button</Button>
</FormGroup>

{/* Light form group: Range slider + Button */}
<FormGroup light>
  <ReactSlider
    className='range-slider range-slider-single range-slider-light'
    thumbClassName='range-slider-handle'
    trackClassName='range-slider-track'
    min={0}
    max={1000}
    defaultValue={450}
    ariaLabel={['Handle']}
    ariaValuetext={state => \`Handle value $\{state.valueNow\}\`}
    renderThumb={(props, state) => (<div {...props}>
      <div className='range-slider-tooltip'>$ {state.valueNow}</div>
    </div>)}
  />
  <Button variant='primary'>Button</Button>
</FormGroup>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default FormGroupPage
