import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('runedle-game-over')
export class GameOver extends LitElement {
  static styles = [
    css`
      .congratulations {
        font-size: 80px;
        padding-top: 20px;
        display: block;
        margin: 0 auto;
        text-align: center;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <runedle-header></runedle-header>
        <div class="congratulations">
          <p>Congratulations!</p>
        </div>
        </main>
    `;
  }
}
