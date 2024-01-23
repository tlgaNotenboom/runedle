import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('runedle-header')
export class Header extends LitElement {
  static styles = [
    css`
      .logo {
        font-size: 40px;
        padding-top: 20px;
        display: block;
        margin: 0 auto;
        text-align: center;
      }
    `,
  ];

  render() {
    return html`
      <div class="logo"><p>
        Runedle
      </p>
      </div>
      </div>
    `;
  }
}
