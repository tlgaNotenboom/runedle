import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { styles } from './css/styles.js';
import { GuessDataOptions } from './types/guessData.js';
// const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

@customElement('runedle-app')
export class RunedleApp extends LitElement {
  @property({ type: String }) header = 'Runedle';

  static styles = [
    styles,
    css`
      .game {
        display: flex;
        justify-content: center;
      }
    `,
  ];

  render() {
    return html`
      <main>
        <input type="text" />
        <div class="game">
          <runedle-guess
            .guess=${{
              gender: GuessDataOptions.CORRECT,
              race: GuessDataOptions.PARTIAL,
              region: GuessDataOptions.INCORRECT,
              combatLevel: GuessDataOptions.INCORRECT,
              releaseDate: GuessDataOptions.INCORRECT,
            }}
          ></runedle-guess>
        </div>
      </main>
    `;
  }
}
