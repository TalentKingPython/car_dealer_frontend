// Forms related components documentation page with code examples

import { useState } from 'react'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Code from '../../components/Code'
import PasswordToggle from '../../components/PasswordToggle'
import ReactSlider from 'react-slider'
import NumberFormat from 'react-number-format'

const FormsPage = () => {

  const anchorLinks = [
    {
      label: 'Supported input types',
      anchor: 'forms-types'
    },
    {
      label: 'Floating labels',
      anchor: 'forms-floating-labels'
    },
    {
      label: 'Password visibility toggle',
      anchor: 'forms-password-toggle'
    },
    {
      label: 'Checkboxes',
      anchor: 'forms-checkboxes'
    },
    {
      label: 'Radios',
      anchor: 'forms-radios'
    },
    {
      label: 'Switches',
      anchor: 'forms-switches'
    },
    {
      label: 'Range slider (React Slider)',
      anchor: 'forms-range-slider'
    },
    {
      label: 'Sizing',
      anchor: 'forms-sizing'
    },
    {
      label: 'Readonly & disabled',
      anchor: 'forms-readonly'
    },
    {
      label: 'Inline form',
      anchor: 'forms-inline'
    },
    {
      label: 'Help text',
      anchor: 'forms-help-text'
    },
    {
      label: 'Validation: status text',
      anchor: 'forms-valitation-text'
    },
    {
      label: 'Validation: status tooltips',
      anchor: 'forms-valitation-tooltips'
    },
    {
      label: 'Format input value',
      anchor: 'forms-input-format'
    },
    {
      label: 'Light version',
      anchor: 'forms-light'
    }
  ]


  // Range slider 2-way binding to inputs example

  const [minPrice, setMinPrice] = useState(280)
  const [maxPrice, setMaxPrice] = useState(720)

  const handleInputChange = e => {
    if (e.target.name === 'minPrice') {
      setMinPrice(e.target.value)
    } else {
      setMaxPrice(e.target.value)
    }
  }

  const handleSliderChange = sliderVal => {
    let sliderMinVal = sliderVal[0]
    let sliderMaxVal = sliderVal[1]
    setMinPrice(sliderMinVal)
    setMaxPrice(sliderMaxVal)
  }


  // Form validation text example

  const [validated1, setValidated1] = useState(false)
  const handleSubmit1 = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated1(true);
  }


  // Form validation tooltips example

  const [validated2, setValidated2] = useState(false)
  const handleSubmit2 = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated2(true);
  }


  return (
    <ComponentPageLayout
      pageTitle='Forms'
      pageDescription='Form control styles, layout options, and custom components.'
      activeNav='/components/forms'
      docsLink='https://react-bootstrap.github.io/forms/overview/'
      docsLinkLabel='React Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Info alert */}
      <Alert variant='info' className='mb-5'>
        <div className='d-flex'>
          <i className='fi-alert-circle lead me-2 me-sm-3'></i>
          <div className='text-break'>
            <p className='mb-2'><strong>Range slider</strong> depends on <strong>React Slider plugin</strong>. Check plugin <Alert.Link href='https://zillow.github.io/react-slider/' target='_blank' rel='noreferrer'>documentation here</Alert.Link></p>
            <p className='mb-1'>Input content formatting is powered by <strong>react-number-format</strong>. Check plugin <Alert.Link href='https://www.npmjs.com/package/react-number-format' target='_blank' rel='noreferrer'>documentation here</Alert.Link></p>
          </div>
        </div>
      </Alert>


      {/* Supported input types */}
      <ComponentPageSection id='forms-types' title='Supported input types'>
        <Tab.Pane eventKey='preview'>
          <Form.Group as={Row} controlId='text-input' className='mb-3'>
            <Form.Label column md={2}>Text</Form.Label>
            <Col md={10}>
              <Form.Control defaultValue='Artisanal kale' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='search-input' className='mb-3'>
            <Form.Label column md={2}>Search</Form.Label>
            <Col md={10}>
              <Form.Control type='search' defaultValue='How do I shoot web' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='email-input' className='mb-3'>
            <Form.Label column md={2}>Email</Form.Label>
            <Col md={10}>
              <Form.Control type='email' defaultValue='email@example.com' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='url-input' className='mb-3'>
            <Form.Label column md={2}>URL</Form.Label>
            <Col md={10}>
              <Form.Control type='url' defaultValue='https://getbootstrap.com' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='tel-input' className='mb-3'>
            <Form.Label column md={2}>Phone</Form.Label>
            <Col md={10}>
              <Form.Control type='tel' defaultValue='1-(770)-334-2518' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='password-input' className='mb-3'>
            <Form.Label column md={2}>Password</Form.Label>
            <Col md={10}>
              <Form.Control type='password' defaultValue='mypasswordexample' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='textarea-input' className='mb-3'>
            <Form.Label column md={2}>Textarea</Form.Label>
            <Col md={10}>
              <Form.Control as='textarea' rows={5} defaultValue='Hello World!' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='select-input' className='mb-3'>
            <Form.Label column md={2}>Select</Form.Label>
            <Col md={10}>
              <Form.Select defaultValue='default'>
                <option value='default' disabled>Choose option...</option>
                <option value='1'>Option item 1</option>
                <option value='2'>Option item 2</option>
                <option value='3'>Option item 3</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='multiselect-input' className='mb-3'>
            <Form.Label column md={2}>Multiselect</Form.Label>
            <Col md={10}>
              <Form.Select multiple htmlSize='3'>
                <option value='1'>Option item 1</option>
                <option value='2'>Option item 2</option>
                <option value='3'>Option item 3</option>
                <option value='4'>Option item 4</option>
                <option value='5'>Option item 5</option>
                <option value='6'>Option item 6</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='file-input' className='mb-3'>
            <Form.Label column md={2}>File</Form.Label>
            <Col md={10}>
              <Form.Control type='file' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='number-input' className='mb-3'>
            <Form.Label column md={2}>Number</Form.Label>
            <Col md={10}>
              <Form.Control type='number' defaultValue='37' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='datalist-input' className='mb-3'>
            <Form.Label column md={2}>Datalist</Form.Label>
            <Col md={10}>
              <Form.Control list='datalist-options' placeholder='Type to search...' />
              <datalist id='datalist-options'>
                <option value='San Francisco' />
                <option value='New York' />
                <option value='Seattle' />
                <option value='Los Angeles' />
                <option value='Chicago' />
              </datalist>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='range-input' className='mb-3 align-items-center'>
            <Form.Label column md={2}>Range</Form.Label>
            <Col md={10}>
              <Form.Range />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='color-input' className='mb-2'>
            <Form.Label column md={2}>Color</Form.Label>
            <Col md={10}>
              <Form.Control type='color' className='form-control-color' defaultValue='#5d3cf2' />
            </Col>
          </Form.Group>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import From from 'react-bootstrap/Form'

{/* Text input */}
<Form.Group controlId='text-input' className='mb-3'>
  <Form.Label>Text</Form.Label>
  <Form.Control defaultValue='Artisanal kale' />
</Form.Group>

{/* Search input */}
<Form.Group controlId='search-input' className='mb-3'>
  <Form.Label>Search</Form.Label>
  <Form.Control type='search' defaultValue='How do I shoot web' />
</Form.Group>

{/* Email input */}
<Form.Group controlId='email-input' className='mb-3'>
  <Form.Label>Email</Form.Label>
  <Form.Control type='email' defaultValue='email@example.com' />
</Form.Group>

{/* URL input */}
<Form.Group controlId='url-input' className='mb-3'>
  <Form.Label>URL</Form.Label>
  <Form.Control type='url' defaultValue='https://getbootstrap.com' />
</Form.Group>

{/* Tel input */}
<Form.Group controlId='tel-input' className='mb-3'>
  <Form.Label>Phone</Form.Label>
  <Form.Control type='tel' defaultValue='1-(770)-334-2518' />
</Form.Group>

{/* Password input */}
<Form.Group controlId='password-input' className='mb-3'>
  <Form.Label>Password</Form.Label>
  <Form.Control type='password' defaultValue='mypasswordexample' />
</Form.Group>

{/* Textarea */}
<Form.Group controlId='textarea-input' className='mb-3'>
  <Form.Label>Textarea</Form.Label>
  <Form.Control as='textarea' rows={5} defaultValue='Hello World!' />
</Form.Group>

{/* Select */}
<Form.Group controlId='select-input' className='mb-3'>
  <Form.Label>Select</Form.Label>
  <Form.Select defaultValue='default'>
    <option value='default' disabled>Choose option...</option>
    <option value='1'>Option item 1</option>
    <option value='2'>Option item 2</option>
    <option value='3'>Option item 3</option>
  </Form.Select>
</Form.Group>

{/* Multiselect */}
<Form.Group controlId='multiselect-input' className='mb-3'>
  <Form.Label>Multiselect</Form.Label>
  <Form.Select multiple htmlSize='3'>
    <option value='1'>Option item 1</option>
    <option value='2'>Option item 2</option>
    <option value='3'>Option item 3</option>
    <option value='4'>Option item 4</option>
    <option value='5'>Option item 5</option>
    <option value='6'>Option item 6</option>
  </Form.Select>
</Form.Group>

{/* File input */}
<Form.Group controlId='file-input' className='mb-3'>
  <Form.Label>File</Form.Label>
  <Form.Control type='file' />
</Form.Group>

{/* Number input */}
<Form.Group controlId='number-input' className='mb-3'>
  <Form.Label>Number</Form.Label>
  <Form.Control type='number' defaultValue='37' />
</Form.Group>

{/* Datalist */}
<Form.Group controlId='datalist-input' className='mb-3'>
  <Form.Label>Datalist</Form.Label>
  <Form.Control list='datalist-options' placeholder='Type to search...' />
  <datalist id='datalist-options'>
    <option value='San Francisco' />
    <option value='New York' />
    <option value='Seattle' />
    <option value='Los Angeles' />
    <option value='Chicago' />
  </datalist>
</Form.Group>

{/* Range input */}
<Form.Group controlId='range-input' className='mb-3 align-items-center'>
  <Form.Label>Range</Form.Label>
  <Form.Range />
</Form.Group>

{/* Color input */}
<Form.Group controlId='color-input' className='mb-3'>
  <Form.Label>Color</Form.Label>
  <Form.Control type='color' className='form-control-color' defaultValue='#5d3cf2' />
</Form.Group>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Floating labels */}
      <ComponentPageSection id='forms-floating-labels' title='Floating labels'>
        <Tab.Pane eventKey='preview'>
          <FloatingLabel
            controlId='floating-text-input'
            label='Your name'
            className='mb-3'
          >
            <Form.Control placeholder='Your name' />
          </FloatingLabel>
          <FloatingLabel
            controlId='floating-select'
            label='Choose option'
          >
            <Form.Select defaultValue='default' aria-label='Floating label select example'>
              <option value='default' disabled>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </Form.Select>
          </FloatingLabel>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import From from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

{/* Floating label input */}
<FloatingLabel
  controlId='floating-text-input'
  label='Your name'
  className='mb-3'
  >
  <Form.Control placeholder='Your name' />
</FloatingLabel>

{/* Floating label select */}
<FloatingLabel
controlId='floating-select'
label='Choose option'
className='mb-3'
>
  <Form.Select defaultValue='default' aria-label='Floating label select example'>
    <option value='default' disabled>Open this select menu</option>
    <option value='1'>One</option>
    <option value='2'>Two</option>
    <option value='3'>Three</option>
  </Form.Select>
</FloatingLabel>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Password visibility toggle */}
      <ComponentPageSection id='forms-password-toggle' title='Password visibility toggle'>
        <Tab.Pane eventKey='preview'>
          <Form.Group className='mb-2' style={{maxWidth: '25rem'}}>
            <Form.Label htmlFor='password-toggle-example'>Password</Form.Label>
            <PasswordToggle id='password-toggle-example' defaultValue='hidden@password' />
          </Form.Group>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import From from 'react-bootstrap/Form'
import PasswordToggle from '../components/PasswordToggle'

{/* Password visibility toggle */}
<Form.Group className='mb-3'>
  <Form.Label htmlFor='password-toggle-example'>Password</Form.Label>
  <PasswordToggle id='password-toggle-example' defaultValue='hidden@password' />
</Form.Group>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Checkboxes */}
      <ComponentPageSection id='forms-checkboxes' title='Checkboxes'>
        <Tab.Pane eventKey='preview'>
          <div className='mb-3'>
            <Form.Check
              type='checkbox'
              id='check-1'
              label='Default checkbox'
            />
            <Form.Check
              type='checkbox'
              id='check-2'
              label='Checked checkbox'
              defaultChecked
            />
            <Form.Check
              type='checkbox'
              id='check-3'
              label='Disabled checkbox'
              disabled
            />
          </div>
          <Form.Check
            inline
              type='checkbox'
              id='check-4'
              label='Default checkbox'
            />
            <Form.Check
              inline
              type='checkbox'
              id='check-5'
              label='Checked checkbox'
              defaultChecked
            />
            <Form.Check
              inline
              type='checkbox'
              id='check-6'
              label='Disabled checkbox'
              disabled
            />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import From from 'react-bootstrap/Form'

{/* Stacked checkboxes */}
<Form.Check
  type='checkbox'
  id='check-1'
  label='Default checkbox'
/>
<Form.Check
  type='checkbox'
  id='check-2'
  label='Checked checkbox'
  defaultChecked
/>
<Form.Check
  type='checkbox'
  id='check-3'
  label='Disabled checkbox'
  disabled
/>

{/* Inline checkboxes */}
<Form.Check
  inline
  type='checkbox'
  id='check-4'
  label='Default checkbox'
/>
<Form.Check
  inline
  type='checkbox'
  id='check-5'
  label='Checked checkbox'
  defaultChecked
/>
<Form.Check
  inline
  type='checkbox'
  id='check-6'
  label='Disabled checkbox'
  disabled
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Radios */}
      <ComponentPageSection id='forms-radios' title='Radios'>
        <Tab.Pane eventKey='preview'>
          <div className='mb-3'>
            <Form.Check
              type='radio'
              id='radio-1'
              name='radio'
              label='Default radio'
            />
            <Form.Check
              type='radio'
              id='radio-2'
              name='radio'
              label='Checked radio'
              defaultChecked
            />
            <Form.Check
              type='radio'
              id='radio-3'
              name='radio'
              label='Disabled radio'
              disabled
            />
          </div>
          <Form.Check
            inline
              type='radio'
              id='radio-4'
              name='radio2'
              label='Default radio'
            />
            <Form.Check
              inline
              type='radio'
              id='radio-5'
              name='radio2'
              label='Checked radio'
              defaultChecked
            />
            <Form.Check
              inline
              type='radio'
              id='radio-6'
              name='radio2'
              label='Disabled radio'
              disabled
            />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import From from 'react-bootstrap/Form'

{/* Stacked radio buttons */}
<Form.Check
  type='radio'
  id='radio-1'
  name='radio'
  label='Default radio'
/>
<Form.Check
  type='radio'
  id='radio-2'
  name='radio'
  label='Checked radio'
  defaultChecked
/>
<Form.Check
  type='radio'
  id='radio-3'
  name='radio'
  label='Disabled radio'
  disabled
/>

{/* Inline radio buttons */}
<Form.Check
  inline
  type='radio'
  id='radio-4'
  name='radio2'
  label='Default radio'
/>
<Form.Check
  inline
  type='radio'
  id='radio-5'
  name='radio2'
  label='Checked radio'
  defaultChecked
/>
<Form.Check
  inline
  type='radio'
  id='radio-6'
  name='radio2'
  label='Disabled radio'
  disabled
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Switches */}
      <ComponentPageSection id='forms-switches' title='Switches'>
        <Tab.Pane eventKey='preview'>
          <Form.Check
            type='switch'
            id='switch-1'
            label='Default switch'
            className='mb-2'
          />
          <Form.Check
            type='switch'
            id='switch-2'
            label='Checked switch'
            defaultChecked
            className='mb-2'
          />
          <Form.Check
            type='switch'
            id='switch-3'
            label='Disabled switch'
            disabled
            className='mb-2'
          />
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import From from 'react-bootstrap/Form'

{/* Default switch */}
<Form.Check
  type='switch'
  id='switch-1'
  label='Default switch'
/>

{/* Checked switch */}
<Form.Check
  type='switch'
  id='switch-2'
  label='Checked switch'
  defaultChecked
/>

{/* Disabled switch */}
<Form.Check
  type='switch'
  id='switch-3'
  label='Disabled switch'
  disabled
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Range slider (noUISlider) */}
      <ComponentPageSection id='forms-range-slider' title='Range slider (noUISlider)'>
        <Tab.Pane eventKey='preview'>
          <Form.Group className='mb-4' style={{maxWidth: '20rem'}}>
            <h6 className='fs-base'>Two handles + inputs</h6>
            <ReactSlider
              className='range-slider'
              thumbClassName='range-slider-handle'
              trackClassName='range-slider-track'
              min={0}
              max={1000}
              value={[minPrice, maxPrice]}
              ariaLabel={['Lower handle', 'Upper handle']}
              ariaValuetext={state => `Handle value ${state.valueNow}`}
              step={1}
              renderThumb={(props, state) => (<div {...props}>
                <div className='range-slider-tooltip'>$ {state.valueNow}</div>
              </div>)}
              pearling
              minDistance={50}
              onChange={handleSliderChange}
            />
            <div className='d-flex align-items-center'>
              <div className='w-100 pe-2'>
                <InputGroup>
                  <InputGroup.Text className='fs-base'>$</InputGroup.Text>
                  <Form.Control
                    name='minPrice'
                    value={minPrice}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </div>
              <div className='text-muted'>—</div>
              <div className='w-100 ps-2'>
                <InputGroup>
                  <InputGroup.Text className='fs-base'>$</InputGroup.Text>
                  <Form.Control
                    name='maxPrice'
                    value={maxPrice}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </div>
            </div>
          </Form.Group>
          <Form.Group className='py-2' style={{maxWidth: '20rem'}}>
            <h6 className='fs-base'>One handle + no inputs</h6>
            <ReactSlider
              className='range-slider range-slider-single'
              thumbClassName='range-slider-handle'
              trackClassName='range-slider-track'
              min={0}
              max={1000}
              defaultValue={450}
              ariaLabel={['Handle']}
              ariaValuetext={state => `Handle value ${state.valueNow}`}
              step={1}
              renderThumb={(props, state) => (<div {...props}>
                <div className='range-slider-tooltip'>$ {state.valueNow}</div>
              </div>)}
            />
          </Form.Group>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`{/* Example of Range slider with 2-way binded inputs */}

import { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import ReactSlider from 'react-slider'

const RangeSliderExample = () => {

  const [minPrice, setMinPrice] = useState(280)
  const [maxPrice, setMaxPrice] = useState(720)

  const handleInputChange = e => {
    if (e.target.name === 'minPrice') {
      setMinPrice(e.target.value)
    } else {
      setMaxPrice(e.target.value)
    }
  }

  const handleSliderChange = sliderVal => {
    let sliderMinVal = sliderVal[0]
    let sliderMaxVal = sliderVal[1]
    setMinPrice(sliderMinVal)
    setMaxPrice(sliderMaxVal)
  }

  retun (
    <Form.Group className='mb-3'>
      <h6 className='fs-base'>Two handles + inputs</h6>
      <ReactSlider
        className='range-slider'
        thumbClassName='range-slider-handle'
        trackClassName='range-slider-track'
        min={0}
        max={1000}
        value={[minPrice, maxPrice]}
        ariaLabel={['Lower handle', 'Upper handle']}
        ariaValuetext={state => \`Handle value $\{state.valueNow\}\`}
        step={1}
        renderThumb={(props, state) => (<div {...props}>
          <div className='range-slider-tooltip'>$ {state.valueNow}</div>
        </div>)}
        pearling
        minDistance={50}
        onChange={handleSliderChange}
      />
      <div className='d-flex align-items-center'>
        <div className='w-100 pe-2'>
          <InputGroup>
            <InputGroup.Text className='fs-base'>$</InputGroup.Text>
            <Form.Control
              name='minPrice'
              value={minPrice}
              onChange={handleInputChange}
            />
          </InputGroup>
        </div>
        <div className='text-muted'>—</div>
        <div className='w-100 ps-2'>
          <InputGroup>
            <InputGroup.Text className='fs-base'>$</InputGroup.Text>
            <Form.Control
              name='maxPrice'
              value={maxPrice}
              onChange={handleInputChange}
            />
          </InputGroup>
        </div>
      </div>
    </Form.Group>
  )
}

render(<RangeSliderExample />)


{/* Example of Range slider with single handle */}

import Form from 'react-bootstrap/Form'
import ReactSlider from 'react-slider'

<Form.Group className='py-2' style={{maxWidth: '20rem'}}>
  <h6 className='fs-base'>One handle + no inputs</h6>
  <ReactSlider
    className='range-slider range-slider-single'
    thumbClassName='range-slider-handle'
    trackClassName='range-slider-track'
    min={0}
    max={1000}
    defaultValue={450}
    ariaLabel={['Handle']}
    ariaValuetext={state => \`Handle value $\{state.valueNow\}\`}
    step={1}
    renderThumb={(props, state) => (<div {...props}>
      <div className='range-slider-tooltip'>$ {state.valueNow}</div>
    </div>)}
  />
</Form.Group>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Sizing */}
      <ComponentPageSection id='forms-sizing' title='Sizing'>
        <Tab.Pane eventKey='preview'>
          <div className='d-sm-flex'>
            <div className='w-100 me-sm-4'>
              <Form.Group controlId='input-lg' className='mb-3'>
                <Form.Label>Large input</Form.Label>
                <Form.Control size='lg' placeholder='Large input placeholder' />
              </Form.Group>
              <Form.Group controlId='input-normal' className='mb-3'>
                <Form.Label>Normal input</Form.Label>
                <Form.Control placeholder='Normal input placeholder' />
              </Form.Group>
              <Form.Group controlId='input-small' className='mb-3'>
                <Form.Label className='fs-sm'>Small input</Form.Label>
                <Form.Control size='sm' placeholder='Small input placeholder' />
              </Form.Group>
            </div>
            <div className='w-100'>
              <Form.Group controlId='select-lg' className='mb-3'>
                <Form.Label>Large select</Form.Label>
                <Form.Select size='lg' defaultValue='default'>
                  <option value='default' disabled>Large select option</option>
                  <option value='1'>Option item 1</option>
                  <option value='2'>Option item 2</option>
                  <option value='3'>Option item 3</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId='select-normal' className='mb-3'>
                <Form.Label>Normal select</Form.Label>
                <Form.Select defaultValue='default'>
                  <option value='default' disabled>Normal select option</option>
                  <option value='1'>Option item 1</option>
                  <option value='2'>Option item 2</option>
                  <option value='3'>Option item 3</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId='select-sm' className='mb-3'>
                <Form.Label className='fs-sm'>Small select</Form.Label>
                <Form.Select size='sm' defaultValue='default'>
                  <option value='default' disabled>Small select option</option>
                  <option value='1'>Option item 1</option>
                  <option value='2'>Option item 2</option>
                  <option value='3'>Option item 3</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Form from 'react-bootstrap/Form'
          
{/* Large input */}
<Form.Group controlId='input-lg' className='mb-3'>
  <Form.Label>Large input</Form.Label>
  <Form.Control size='lg' placeholder='Large input placeholder' />
</Form.Group>

{/* Normal input */}
<Form.Group controlId='input-normal' className='mb-3'>
  <Form.Label>Normal input</Form.Label>
  <Form.Control placeholder='Normal input placeholder' />
</Form.Group>

{/* Small input */}
<Form.Group controlId='input-small' className='mb-3'>
  <Form.Label className='fs-sm'>Small input</Form.Label>
  <Form.Control size='sm' placeholder='Small input placeholder' />
</Form.Group>

{/* Large select */}
<Form.Group controlId='select-lg' className='mb-3'>
  <Form.Label>Large select</Form.Label>
  <Form.Select size='lg' defaultValue='default'>
    <option value='default' disabled>Large select option</option>
    <option value='1'>Option item 1</option>
    <option value='2'>Option item 2</option>
    <option value='3'>Option item 3</option>
  </Form.Select>
</Form.Group>

{/* Normal select */}
<Form.Group controlId='select-normal' className='mb-3'>
  <Form.Label>Normal select</Form.Label>
  <Form.Select defaultValue='default'>
    <option value='default' disabled>Normal select option</option>
    <option value='1'>Option item 1</option>
    <option value='2'>Option item 2</option>
    <option value='3'>Option item 3</option>
  </Form.Select>
</Form.Group>

{/* Small select */}
<Form.Group controlId='select-sm' className='mb-3'>
  <Form.Label className='fs-sm'>Small select</Form.Label>
  <Form.Select size='sm' defaultValue='default'>
    <option value='default' disabled>Small select option</option>
    <option value='1'>Option item 1</option>
    <option value='2'>Option item 2</option>
    <option value='3'>Option item 3</option>
  </Form.Select>
</Form.Group>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Readonly & disabled */}
      <ComponentPageSection id='forms-readonly' title='Readonly &amp; disabled'>
        <Tab.Pane eventKey='preview'>
          <Form.Control readOnly placeholder='Readonly input placeholder' className='mb-3' />
          <Form.Control disabled placeholder='Disabled input placeholder' className='mb-3' />
          <Form.Select defaultValue='default' disabled>
            <option value='default' disabled>Disabled select</option>
            <option value='1'>Option item 1</option>
            <option value='2'>Option item 2</option>
            <option value='3'>Option item 3</option>
          </Form.Select>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Form from 'react-bootstrap/Form'
          
{/* Readonly input */}
<Form.Control readOnly placeholder='Readonly input placeholder' />

{/* Disabled input */}
<Form.Control disabled placeholder='Disabled input placeholder' />

{/* Disabled select */}
<Form.Select defaultValue='default' disabled>
  <option value='default' disabled>Disabled select</option>
  <option value='1'>Option item 1</option>
  <option value='2'>Option item 2</option>
  <option value='3'>Option item 3</option>
</Form.Select>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Inline form */}
      <ComponentPageSection id='forms-inline' title='Inline form'>
        <Tab.Pane eventKey='preview'>
          <Row as='form' className='row-cols-sm-auto g-3 align-items-center'>
            <Col xs={12}>
              <Form.Control placeholder='Username' />
            </Col>
            <Col xs={12}>
              <Form.Select defaultValue='default'>
                <option value='default' disabled>Choose...</option>
                <option value='1'>Option item 1</option>
                <option value='2'>Option item 2</option>
                <option value='3'>Option item 3</option>
              </Form.Select>
            </Col>
            <Col xs={12}>
              <Form.Check
                type='checkbox'
                id='inline-checkbox'
                label='Remember me'
              />
            </Col>
            <Col xs={12}>
              <Button type='submit'>Submit</Button>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
          
{/* Build inline forms with Row and Col */}
<Row as='form' className='row-cols-sm-auto g-3 align-items-center'>
  <Col xs={12}>
    <Form.Control placeholder='Username' />
  </Col>
  <Col xs={12}>
    <Form.Select defaultValue='default'>
      <option value='default' disabled>Choose...</option>
      <option value='1'>Option item 1</option>
      <option value='2'>Option item 2</option>
      <option value='3'>Option item 3</option>
    </Form.Select>
  </Col>
  <Col xs={12}>
    <Form.Check
      type='checkbox'
      id='inline-checkbox'
      label='Remember me'
    />
  </Col>
  <Col xs={12}>
    <Button type='submit'>Submit</Button>
  </Col>
</Row>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Help text */}
      <ComponentPageSection id='forms-help-text' title='Help text'>
        <Tab.Pane eventKey='preview'>
          <Form.Group controlId='input-password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' aria-describedby='passwordHelpBlock' />
            <Form.Text id='passwordHelpBlock'>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</Form.Text>
          </Form.Group>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Form from 'react-bootstrap/Form'
          
{/* Form help text example */}
<Form.Group controlId='input-password'>
  <Form.Label>Password</Form.Label>
  <Form.Control type='password' aria-describedby='passwordHelpBlock' />
  <Form.Text id='passwordHelpBlock'>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</Form.Text>
</Form.Group>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Validation: status text */}
      <ComponentPageSection id='forms-valitation-text' title='Validation: status text'>
        <Tab.Pane eventKey='preview'>
          <Form noValidate validated={validated1} onSubmit={handleSubmit1}>
            <Row>
              <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustom01'>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='First name'
                  defaultValue='John'
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustom02'>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Last name'
                  defaultValue='Doe'
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustomUsername'>
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
                  <Form.Control
                    type='text'
                    placeholder='Username'
                    aria-describedby='inputGroupPrepend'
                    required
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md='6' className='mb-3' controlId='validationCustom03'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder='City' required />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='3' className='mb-3' controlId='validationCustom04'>
                <Form.Label>State</Form.Label>
                <Form.Control type='text' placeholder='State' required />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='3' className='mb-3' controlId='validationCustom05'>
                <Form.Label>Zip</Form.Label>
                <Form.Control type='text' placeholder='Zip' required />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className='mb-3'>
              <Form.Check
                required
                id='validationCheck01'
                label='Agree to terms and conditions'
                feedback='You must agree before submitting.'
                feedbackType='invalid'
              />
            </Form.Group>
            <Button type='submit'>Submit form</Button>
          </Form>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

{/* Form validation status text example */}
const FormExample = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustom01'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='First name'
            defaultValue='John'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustom02'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Last name'
            defaultValue='Doe'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustomUsername'>
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
            <Form.Control
              type='text'
              placeholder='Username'
              aria-describedby='inputGroupPrepend'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md='6' className='mb-3' controlId='validationCustom03'>
          <Form.Label>City</Form.Label>
          <Form.Control type='text' placeholder='City' required />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='3' className='mb-3' controlId='validationCustom04'>
          <Form.Label>State</Form.Label>
          <Form.Control type='text' placeholder='State' required />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='3' className='mb-3' controlId='validationCustom05'>
          <Form.Label>Zip</Form.Label>
          <Form.Control type='text' placeholder='Zip' required />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className='mb-3'>
        <Form.Check
          required
          id='validationCheck'
          label='Agree to terms and conditions'
          feedback='You must agree before submitting.'
          feedbackType='invalid'
        />
      </Form.Group>
      <Button type='submit'>Submit form</Button>
    </Form>
  )
}

render(<FormExample />)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Validation: status tooltips */}
      <ComponentPageSection id='forms-valitation-tooltips' title='Validation: status tooltips'>
        <Tab.Pane eventKey='preview'>
          <Form noValidate validated={validated2} onSubmit={handleSubmit2}>
            <Row>
              <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustom06'>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='First name'
                  defaultValue='John'
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustom07'>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Last name'
                  defaultValue='Doe'
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustomUsername02'>
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
                  <Form.Control
                    type='text'
                    placeholder='Username'
                    aria-describedby='inputGroupPrepend'
                    required
                  />
                  <Form.Control.Feedback type='invalid' tooltip>
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md='6' className='mb-3' controlId='validationCustom08'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder='City' required />
                <Form.Control.Feedback type='invalid' tooltip>
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='3' className='mb-3' controlId='validationCustom09'>
                <Form.Label>State</Form.Label>
                <Form.Control type='text' placeholder='State' required />
                <Form.Control.Feedback type='invalid' tooltip>
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='3' className='mb-3' controlId='validationCustom10'>
                <Form.Label>Zip</Form.Label>
                <Form.Control type='text' placeholder='Zip' required />
                <Form.Control.Feedback type='invalid' tooltip>
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className='mb-3'>
              <Form.Check
                required
                id='validationCheck02'
                label='Agree to terms and conditions'
                feedback='You must agree before submitting.'
                feedbackType='invalid'
                feedbackTooltip
              />
            </Form.Group>
            <Button type='submit'>Submit form</Button>
          </Form>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

{/* Form validation status tooltips example */}
const FormExample = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustom01'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='First name'
            defaultValue='John'
          />
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustom02'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Last name'
            defaultValue='Doe'
          />
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='4' className='mb-3' controlId='validationCustomUsername'>
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
            <Form.Control
              type='text'
              placeholder='Username'
              aria-describedby='inputGroupPrepend'
              required
            />
            <Form.Control.Feedback type='invalid' tooltip>
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md='6' className='mb-3' controlId='validationCustom03'>
          <Form.Label>City</Form.Label>
          <Form.Control type='text' placeholder='City' required />
          <Form.Control.Feedback type='invalid' tooltip>
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='3' className='mb-3' controlId='validationCustom04'>
          <Form.Label>State</Form.Label>
          <Form.Control type='text' placeholder='State' required />
          <Form.Control.Feedback type='invalid' tooltip>
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='3' className='mb-3' controlId='validationCustom05'>
          <Form.Label>Zip</Form.Label>
          <Form.Control type='text' placeholder='Zip' required />
          <Form.Control.Feedback type='invalid' tooltip>
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className='mb-3'>
        <Form.Check
          required
          id='validationCheck'
          label='Agree to terms and conditions'
          feedback='You must agree before submitting.'
          feedbackType='invalid'
          feedbackTooltip
        />
      </Form.Group>
      <Button type='submit'>Submit form</Button>
    </Form>
  )
}

render(<FormExample />)`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Format input value */}
      <ComponentPageSection id='forms-input-format' title='Format input value'>
        <Tab.Pane eventKey='preview'>
          <Form.Group controlId='card-number' className='mb-3' style={{maxWidth: '25rem'}}>
            <Form.Label>Card number</Form.Label>
            <Form.Control
              as={NumberFormat}
              format='#### #### #### ####'
              placeholder='0000 0000 0000 0000'
            />
          </Form.Group>
          <Form.Group controlId='card-cvc' className='mb-3' style={{maxWidth: '25rem'}}>
            <Form.Label>Card CVC</Form.Label>
            <Form.Control
              as={NumberFormat}
              format='###'
              placeholder='000'
            />
          </Form.Group>
          <Form.Group controlId='date' className='mb-3' style={{maxWidth: '25rem'}}>
            <Form.Label>Date</Form.Label>
            <Form.Control
              as={NumberFormat}
              format='##/##'
              placeholder='mm/yy'
            />
          </Form.Group>
          <Form.Group controlId='date-long' className='mb-3' style={{maxWidth: '25rem'}}>
            <Form.Label>Date long</Form.Label>
            <Form.Control
              as={NumberFormat}
              format='####-##-##'
              placeholder='yyyy-mm-dd'
            />
          </Form.Group>
          <Form.Group controlId='time' className='mb-3' style={{maxWidth: '25rem'}}>
            <Form.Label>Time</Form.Label>
            <Form.Control
              as={NumberFormat}
              format='##:##:##'
              placeholder='hh:mm:ss'
            />
          </Form.Group>
          <Form.Group controlId='phone' className='mb-3' style={{maxWidth: '25rem'}}>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              as={NumberFormat}
              format='+1(##) ###-####'
              placeholder='+1(00) 000-0000'
            />
          </Form.Group>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Form from 'react-bootstrap/Form'
import NumberFormat from 'react-number-format'

{/* Card number format example */}
<Form.Group controlId='card-number' className='mb-3'>
  <Form.Label>Card number</Form.Label>
  <Form.Control
    as={NumberFormat}
    format='#### #### #### ####'
    placeholder='0000 0000 0000 0000'
  />
</Form.Group>

{/* Card CVC format example */}
<Form.Group controlId='card-cvc' className='mb-3'>
  <Form.Label>Card CVC</Form.Label>
  <Form.Control
    as={NumberFormat}
    format='###'
    placeholder='000'
  />
</Form.Group>

{/* Date format example */}
<Form.Group controlId='date' className='mb-3'>
  <Form.Label>Date</Form.Label>
  <Form.Control
    as={NumberFormat}
    format='##/##'
    placeholder='mm/yy'
  />
</Form.Group>

{/* Date long format example */}
<Form.Group controlId='date-long' className='mb-3'>
  <Form.Label>Date</Form.Label>
  <Form.Control
    as={NumberFormat}
    format='####-##-##'
    placeholder='yyyy-mm-dd'
  />
</Form.Group>

{/* Time format example */}
<Form.Group controlId='time' className='mb-3'>
  <Form.Label>Time</Form.Label>
  <Form.Control
    as={NumberFormat}
    format='##:##:##'
    placeholder='hh:mm:ss'
  />
</Form.Group>

{/* Phone format example */}
<Form.Group controlId='phone' className='mb-3'>
  <Form.Label>Phone</Form.Label>
  <Form.Control
    as={NumberFormat}
    format='+1(##) ###-####'
    placeholder='+1(00) 000-0000'
  />
</Form.Group>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Light version */}
      <ComponentPageSection id='forms-light' title='Light version'>
        <Tab.Pane eventKey='preview' className='m-n3 p-3 bg-dark'>
          <div className='d-sm-flex'>
            <div className='w-100 me-4'>
              <Form.Group controlId='light-input' className='mb-3'>
                <Form.Label className='text-light'>Light input</Form.Label>
                <Form.Control className='form-control-light' defaultValue='Artisanal kale' />
              </Form.Group>
              <Form.Group controlId='light-select' className='mb-3'>
                <Form.Label className='text-light'>Light select</Form.Label>
                <Form.Select className='form-select-light' defaultValue='default'>
                  <option value='default' disabled>Choose option...</option>
                  <option value='1'>Option item 1</option>
                  <option value='2'>Option item 2</option>
                  <option value='3'>Option item 3</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label htmlFor='light-password' className='text-light'>Password</Form.Label>
                <PasswordToggle light id='light-password' defaultValue='hidden@password' />
              </Form.Group>
              <Form.Group controlId='light-textarea' className='mb-3'>
                <Form.Label className='text-light'>Light textarea</Form.Label>
                <Form.Control as='textarea' rows={5} className='form-control-light' defaultValue='Hello World!' />
              </Form.Group>
            </div>
            <div className='w-100'>
              <div className='mt-4 mb-3'>
                <Form.Check
                  type='checkbox'
                  id='light-check-1'
                  label='Light checkbox'
                  className='form-check-light'
                />
                <Form.Check
                  type='checkbox'
                  id='light-check-2'
                  label='Checked checkbox'
                  defaultChecked
                  className='form-check-light'
                />
                <Form.Check
                  type='checkbox'
                  id='light-check-3'
                  label='Disabled checkbox'
                  disabled
                  className='form-check-light'
                />
              </div>
              <div className='mb-3'>
                <Form.Check
                  type='radio'
                  id='light-radio-1'
                  name='light-radio'
                  label='Light radio'
                  className='form-check-light'
                />
                <Form.Check
                  type='radio'
                  id='light-radio-2'
                  name='light-radio'
                  label='Checked radio'
                  defaultChecked
                  className='form-check-light'
                />
                <Form.Check
                  type='radio'
                  id='light-radio-3'
                  name='light-radio'
                  label='Disabled radio'
                  disabled
                  className='form-check-light'
                />
              </div>
              <div className='mb-3'>
                <Form.Check
                  type='switch'
                  id='light-switch-1'
                  label='Light switch'
                  className='form-switch-light'
                />
                <Form.Check
                  type='switch'
                  id='light-switch-2'
                  label='Checked switch'
                  defaultChecked
                  className='form-switch-light'
                />
                <Form.Check
                  type='switch'
                  id='light-switch-3'
                  label='Disabled switch'
                  disabled
                  className='form-switch-light'
                />
              </div>
            </div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Form from 'react-bootstrap/Form'
import PasswordToggle from '../components/PasswordToggle'

{/* Light input */}
<Form.Group controlId='light-input' className='mb-3'>
  <Form.Label className='text-light'>Light input</Form.Label>
  <Form.Control className='form-control-light' defaultValue='Artisanal kale' />
</Form.Group>

{/* Light select */}
<Form.Group controlId='light-select' className='mb-3'>
  <Form.Label className='text-light'>Light select</Form.Label>
  <Form.Select className='form-select-light' defaultValue='default'>
    <option value='default' disabled>Choose option...</option>
    <option value='1'>Option item 1</option>
    <option value='2'>Option item 2</option>
    <option value='3'>Option item 3</option>
  </Form.Select>
</Form.Group>

{/* Light password visibility toggle */}
<Form.Group className='mb-3'>
  <Form.Label htmlFor='light-password' className='text-light'>Password</Form.Label>
  <PasswordToggle light id='light-password' defaultValue='hidden@password' />
</Form.Group>

{/* Light textarea */}
<Form.Group controlId='light-textarea' className='mb-3'>
  <Form.Label className='text-light'>Light textarea</Form.Label>
  <Form.Control as='textarea' rows={5} className='form-control-light' defaultValue='Hello World!' />
</Form.Group>

{/* Light checkbox */}
<Form.Check
  type='checkbox'
  id='light-check-1'
  label='Light checkbox'
  className='form-check-light'
/>

{/* Light radio */}
<Form.Check
  type='radio'
  id='light-radio-1'
  name='light-radio'
  label='Light radio'
  className='form-check-light'
/>

{/* Light switch */}
<Form.Check
  type='switch'
  id='light-switch-1'
  label='Light switch'
  className='form-switch-light'
/>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default FormsPage
