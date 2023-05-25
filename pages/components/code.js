// Code component documentation page with code examples

import ComponentPageLayout from '../../components/partials/ComponentPageLayout'
import ComponentPageSection from '../../components/partials/ComponentPageSection'
import Tab from 'react-bootstrap/Tab'
import Code from '../../components/Code'

const CodePage = () => {

  const anchorLinks = [
    {
      label: 'Inline code',
      anchor: 'code-inline'
    },
    {
      label: 'User input',
      anchor: 'code-user-input'
    },
    {
      label: 'Variables',
      anchor: 'code-variables'
    },
    {
      label: 'Code block',
      anchor: 'code-block'
    },
    {
      label: 'Code block scrollable',
      anchor: 'code-scrollable'
    },
    {
      label: 'Code highlighting',
      anchor: 'code-highlighting'
    }
  ]

  return (
    <ComponentPageLayout
      pageTitle='Code'
      pageDescription='Displaying inline and multiline blocks of code.'
      activeNav='/components/code'
      docsLink='https://getbootstrap.com/docs/5.2/content/reboot/#code-blocks'
      docsLinkLabel='Bootstrap docs'
      anchorLinks={anchorLinks}
    >

      {/* Inline code */}
      <ComponentPageSection id='code-inline' title='Inline code'>
        <Tab.Pane eventKey='preview'>
          <p>Wrap inline snippets of code with <code>&lt;code&gt;</code>. Be sure to escape HTML angle brackets.</p>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='html'>{`<p>Wrap inline snippets of code with <code>&lt;code&gt;</code>. Be sure to escape HTML angle brackets.</p>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* User input */}
      <ComponentPageSection id='code-user-input' title='User input'>
        <Tab.Pane eventKey='preview'>
          <p>To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br /> To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd></p>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`<p>
  To switch directories, type <kbd>cd</kbd> followed by the name of the directory.
  To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
</p>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Variables */}
      <ComponentPageSection id='code-variables' title='Variables'>
        <Tab.Pane eventKey='preview'>
          <var>y</var> = <var>mx</var> + <var>b</var>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='html'>{`<var>y</var> = <var>mx</var> + <var>b</var>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Code block */}
      <ComponentPageSection id='code-block' title='Code block'>
        <Tab.Pane eventKey='preview'>
          <pre>
          <code>{`<p>Sample text here...</p>
<p>And another line of sample text here...</p>`}</code>
          </pre>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`<pre>
  <code>{\`<p>Sample text here...</p>
<p>And another line of sample text here...</p>\`}</code>
</pre>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Code block scrollable */}
      <ComponentPageSection id='code-scrollable' title='Code block scrollable'>
        <Tab.Pane eventKey='preview'>
          <pre style={{maxHeight: '20rem'}}>
            <code>{`<div class='table-responsive'>
  <table class='table'>
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
  </table>
</div>`}</code>
          </pre>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`<pre style={{maxHeight: '20rem'}}>
<code>{\`<div class='table-responsive'>
  <table class='table'>
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
  </table>
</div>\`}</code>
</pre>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>


      {/* Code highlighting */}
      <ComponentPageSection id='code-highlighting' title='Code highlighting'>
        <Tab.Pane eventKey='preview'>
          <Code language='jsx'>{`<div class='table-responsive'>
  <table class='table'>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name &amp;</th>
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
  </table>
</div>`}</Code>
        </Tab.Pane>
        <Tab.Pane eventKey='code'>
          <Code language='jsx'>{`import Code from '../components/Code'

<Code language='jsx'>{\`
  JavaScript / JSX / HTML / CSS Code goes here. No escaping needed.
\`}</Code>`}</Code>
        </Tab.Pane>
      </ComponentPageSection>
    </ComponentPageLayout>
  )
}

export default CodePage
