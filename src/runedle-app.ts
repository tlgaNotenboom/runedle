import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './css/styles.js';

const bufferTime = 3;

@customElement('runedle-app')
export class RunedleApp extends LitElement {
  static styles = [
    styles,
    css`
      main {
        display: flex;
        justify-content: center;
      }
    `,
  ];

  @property({ type: String }) header = 'Runedle';

  @property()
  private correctGuess: boolean = false;

  render() {
    if (this.correctGuess) {
      return html`
        <main>
          <runedle-game-over></runedle-game-over>
        </main>
      `;
    }
    return html`
      <main>
        <runedle-game @guess-made="${this.isCorrectGuess}"></runedle-game>
      </main>
    `;
  }

  async isCorrectGuess(event: CustomEvent) {
    if (event.detail.correctlyGuessed) {
      await new Promise(r => {
        setTimeout(r, bufferTime * 1000);
      });
      this.correctGuess = true;
    }
  }
}
