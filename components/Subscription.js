import { useRef, useCallback } from 'react'

const Subscription = ({
  action,
  antispam,
  placeholder,
  btnLabel,
  helperText,
  size,
  pill,
  light,
  className,
  ...props
}) => {


  // Create ref callback
  const useHookWithRefCallback = () => {
    const form = useRef(null)
    
    const setForm = useCallback(node => {

      // Main logic
      const subscribe = (form) => {
        const button = form.querySelector('button[type="submit"]'),
              buttonText = button.innerHTML,
              input = form.querySelector('.form-control'),
              status = form.querySelector('.subscription-status')

        button.innerHTML = 'Sending...'

        // Get url for MailChimp
        const url = form.action.replace('/post?', '/post-json?')

        // Add form data to object
        const data = '&' + input.name + '=' + encodeURIComponent(input.value)

        // Create and add post script to the DOM
        const script = document.createElement('script')
        script.src = url + '&c=callback' + data
        document.body.appendChild(script)
        
        // Callback function
        const callback = 'callback'
        window[callback] = (response) => {

          // Remove post script from the DOM
          delete window[callback];
          document.body.removeChild(script)

          // Change button text back to initial
          button.innerHTML = buttonText

          // Display content and apply styling to response message conditionally
          if(response.result === 'success') {
            input.classList.remove('is-invalid')
            input.classList.add('is-valid')
            status.classList.remove('status-error')
            status.classList.add('status-success')
            status.innerHTML = response.msg
            setTimeout(() => {
              input.classList.remove('is-valid')
              status.innerHTML = ''
              status.classList.remove('status-success')
            }, 7500)
          } else {
            input.classList.remove('is-valid')
            input.classList.add('is-invalid')
            status.classList.remove('status-success')
            status.classList.add('status-error')
            status.innerHTML = response.msg.substring(4)
            setTimeout(() => {
              input.classList.remove('is-invalid')
              status.innerHTML = ''
              status.classList.remove('status-error')
            }, 7500)
          }
        }
      }

      // Form submission handler
      const subscribeHandler = (e) => {
        const antispam = e.target.querySelector('.subscription-form-antispam')
        if (e) e.preventDefault()
        if (antispam.value !== '') return
        subscribe(e.target)
      }

      // Atach event listener to form on component mount and update
      if (node) node.addEventListener('submit', subscribeHandler)

      // Detach event listener from form on component unmount
      if (form.current) {
        form.current.removeEventListener('submit', subscribeHandler)
      }

      form.current = node
    }, [])

    return [setForm]
  }

  const [form] = useHookWithRefCallback()


  // Render markup
  return (
    <form
      ref={form}
      action={action}
      method='post'
      name='mc-embedded-subscribe-form'
      target='_blank'
      noValidate
      {...props}
      className={`subscription-form${className ? ` ${className}` : ''}`}
    >
      <div className={`form-group${pill ? ' rounded-pill' : ''}${light ? ' form-group-light' : ''}`}>
        <div className={`input-group${size ? ` input-group-${size}` : ''} flex-nowrap`}>
          <span className='input-group-text text-muted'>
            <i className='fi-mail'></i>
          </span>
          <input type='email' className='form-control' name='EMAIL' placeholder={placeholder}></input>
        </div>
        <button type='submit' className={`btn btn-primary${pill ? ' rounded-pill' : ''}${size ? ` btn-${size}` : ''}`} name='subscribe'>{btnLabel}</button>
      </div>
      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true'>
        <input type='text' className='subscription-form-antispam' name={antispam} tabIndex='-1' />
      </div>
      <div className='subscription-status'></div>
      <div className={`form-text fs-xs mt-3${light ? ' text-light opacity-70' : ''}`}>
        {helperText}
      </div>
    </form>
  )
}

export default Subscription
