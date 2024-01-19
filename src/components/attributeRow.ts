import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../css/styles.js';

@customElement('runedle-attributes')
export class attributeRow extends LitElement {
  static styles = [
    styles,
    css`
      .attributes {
        display: flex;
        justify-content: center;
      }
    `,
  ];

  render() {
    return html`
      <div class="attributes">
        <div>
          <span>Gender</span>
        </div>
        <div>
          <span>Race</span>
        </div>
        <div>
          <span>Region</span>
        </div>
        <div>
          <span>Combat level</span>
        </div>
        <div>
          <span>Release date</span>
        </div>
      </div>
    `;
  }
}
