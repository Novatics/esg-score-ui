import { Global, css } from '@emotion/react'

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        html {
          overflow-y: overlay;
        }
        body {
          margin: 0;
          padding: 0;
          font-size: 1rem;
          line-height: normal;
        }
        * {
          box-sizing: border-box;
        }
      `}
    />
  )
}
