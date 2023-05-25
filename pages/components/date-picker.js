// Date / time picker component documentation page with code examples

import { useState } from 'react'
import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Code from '../../components/Code'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerPage = () => {

  const anchorLinks = [
    {
      label: 'Date picker (with placeholder)',
      anchor: 'picker-date'
    },
    {
      label: 'Date and time picker (custom date format)',
      anchor: 'picker-date-time'
    },
    {
      label: 'Min / max date',
      anchor: 'picker-min-max-date'
    },
    {
      label: 'Date range',
      anchor: 'picker-date-range'
    }
  ]

  // Example 1
  const [startDate, setStartDate] = useState(null)

  // Example 2
  const [startDate2, setStartDate2] = useState(new Date())

  // Example 3
  const [startDate3, setStartDate3] = useState(null)

  // Example 4
  const [startDate4, setStartDate4] = useState(new Date('03/10/2022'))
  const [endDate, setEndDate] = useState(new Date('03/20/2022'))

  return (
    <ComponentPageLayout
      pageTitle='Date / time picker'
      pageDescription='A lightweight and powerful date / time picker component.'
      activeNav='/components/date-picker'
      anchorLinks={anchorLinks}
    >

      {/* Info alert */}
      <Alert variant='info' className='mb-5'>
        <div className='d-flex'>
          <i className='fi-alert-circle lead me-2 me-sm-3'></i>
          <div className='text-break'>
            <p className='mb-1'>Date / time picker component is powered by <strong>React Datepicker plugin</strong>. Check plugin <Alert.Link href='https://www.npmjs.com/package/react-datepicker' target='_blank' rel='noreferrer'>documentation here</Alert.Link></p>
          </div>
        </div>
      </Alert>


      {/* Date picker (with placeholder) */}
      <ComponentPageSection id='picker-date' title='Date picker (with placeholder)'>
        <Tab.Pane eventKey='preview'>
          <Form.Group controlId='date-input' className='mb-2' style={{maxWidth: '22rem'}}>
            <Form.Label>Choose date</Form.Label>
            <InputGroup>
              <Form.Control
                as={DatePicker}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText='Choose date'
                className='rounded pe-5'
              />
              <i className='fi-calendar position-absolute top-50 end-0 translate-middle-y me-3'></i>
            </InputGroup>
          </Form.Group>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

{/* Date picker example with placeholder */}
const DatePickerExample = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <Form.Group controlId='date-input'>
      <Form.Label>Choose date</Form.Label>
      <InputGroup>
        <Form.Control
          as={DatePicker}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText='Choose date'
          className='rounded pe-5'
        />
        <i className='fi-calendar position-absolute top-50 end-0 translate-middle-y me-3'></i>
      </InputGroup>
    </Form.Group>
  )
}`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Date and time picker (custom date format) */}
      <ComponentPageSection id='picker-date-time' title='Date and time picker (custom date format)'>
        <Tab.Pane eventKey='preview'>
          <Form.Group controlId='date-time-input' className='mb-2' style={{maxWidth: '22rem'}}>
            <Form.Label>Choose date and time</Form.Label>
            <InputGroup>
              <Form.Control
                as={DatePicker}
                showTimeSelect
                selected={startDate2}
                onChange={(date) => setStartDate2(date)}
                dateFormat='MMMM d, yyyy h:mm aa'
                className='rounded pe-5'
              />
              <i className='fi-calendar position-absolute top-50 end-0 translate-middle-y me-3'></i>
            </InputGroup>
          </Form.Group>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

{/* Date and time picker example with custom date format */}
const DateTimePickerExample = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <Form.Group controlId='date-time-input'>
      <Form.Label>Choose date and time</Form.Label>
      <InputGroup>
        <Form.Control
          as={DatePicker}
          showTimeSelect
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat='MMMM d, yyyy h:mm aa'
          className='rounded pe-5'
        />
        <i className='fi-calendar position-absolute top-50 end-0 translate-middle-y me-3'></i>
      </InputGroup>
    </Form.Group>
  )
}`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Min / max date */}
      <ComponentPageSection id='picker-min-max-date' title='Min / max date'>
        <Tab.Pane eventKey='preview'>
          <Form.Group controlId='date-min-max-input' className='mb-2' style={{maxWidth: '22rem'}}>
            <Form.Label>Choose date</Form.Label>
            <InputGroup>
              <Form.Control
                as={DatePicker}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date('02/01/2022')}
                maxDate={new Date('02/29/2022')}
                placeholderText="Select a date in Feb 2022"
                className='rounded pe-5'
              />
              <i className='fi-calendar position-absolute top-50 end-0 translate-middle-y me-3'></i>
            </InputGroup>
          </Form.Group>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

{/* Date picker example with min and max date set */}
const DateMaxMinPickerExample = () => {
  const [startDate, setStartDate] = useState(null)

  return (
    <Form.Group controlId='date-min-max-input'>
      <Form.Label>Choose date</Form.Label>
      <InputGroup>
        <Form.Control
          as={DatePicker}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date('02/01/2022')}
          maxDate={new Date('02/29/2022')}
          placeholderText="Select a date in Feb 2022"
          className='rounded pe-5'
        />
        <i className='fi-calendar position-absolute top-50 end-0 translate-middle-y me-3'></i>
      </InputGroup>
    </Form.Group>
  )
}`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Date range */}
      <ComponentPageSection id='picker-date-range' title='Date range'>
        <Tab.Pane eventKey='preview'>
          <Form.Group>
            <Form.Label>Date range</Form.Label>
            <InputGroup className='flex-nowrap mb-2' style={{maxWidth: '30rem'}}>
              <InputGroup.Text>
                <i className='fi-calendar'></i>
              </InputGroup.Text>
              <Form.Control
                as={DatePicker}
                selected={startDate4}
                onChange={(date) => setStartDate4(date)}
                selectsStart
                startDate={startDate4}
                endDate={endDate}
                placeholderText='To date'
                className='rounded-0'
              />
              <Form.Control
                as={DatePicker}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate4}
                endDate={endDate}
                minDate={startDate4}
                placeholderText='To date'
                className='rounded-start-0'
              />
            </InputGroup>
          </Form.Group>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

{/* Date range example */}
const DateRangeExample = () => {
  const [startDate4, setStartDate4] = useState(new Date('03/10/2022'))
  const [endDate, setEndDate] = useState(new Date('03/20/2022'))

  return (
    <Form.Group>
      <Form.Label>Date range</Form.Label>
      <InputGroup className='flex-nowrap'>
        <InputGroup.Text>
          <i className='fi-calendar'></i>
        </InputGroup.Text>
        <Form.Control
          as={DatePicker}
          selected={startDate4}
          onChange={(date) => setStartDate4(date)}
          selectsStart
          startDate={startDate4}
          endDate={endDate}
          placeholderText='To date'
          className='rounded-0'
        />
        <Form.Control
          as={DatePicker}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate4}
          endDate={endDate}
          minDate={startDate4}
          placeholderText='To date'
          className='rounded-start-0'
        />
      </InputGroup>
    </Form.Group>
  )
}`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default DatePickerPage
