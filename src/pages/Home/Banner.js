import { html } from 'lit-html'

const Banner = ({ appName, token }) => {
  if (token) {
    return null
  }
  return html`
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">${appName.toLowerCase()}</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  `
}

export default Banner
