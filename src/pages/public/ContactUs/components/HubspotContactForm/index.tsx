/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react'

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js?pre=1'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      // @ts-ignore:next-line
      if (window.hbspt) {
        // @ts-ignore:next-line
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '21825411',
          formId: 'dbd5055f-6ec8-4b73-9a16-d666607ac57e',
          target: '#hubspotForm',
        })
      }
    })
  }, [])
  return (
    <div>
      <div id="hubspotForm" />
    </div>
  )
}

export default HubspotContactForm
