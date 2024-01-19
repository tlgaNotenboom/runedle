import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { styles } from './css/styles.js';
import { GuessDataOptions } from './types/guessData.js';
import { NPC, Response } from './types/response.js';
// const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

@customElement('runedle-app')
export class RunedleApp extends LitElement {
  @property({ type: String }) header = 'Runedle';

  static styles = [
    styles,
    css`
      main {
        display: flex;
        justify-content: center;
      }
      .game {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 800px;
        gap: 20px;
      }
      .guessing-input {
        display: block;
        padding: 12px 16px;
        font-size: 18px;
        border-radius: 3px;
        max-width: 300px;
      }
      .logo {
        font-size: 40px;
        padding-top: 20px;
        display: block;
        margin: 0 auto;
      }
    `,
  ];

  private npc?: NPC;

  override connectedCallback(): void {
    super.connectedCallback();

    (async () => {
      const data = await fetch('/assets/data.json');
      const response = await data.json() as Response;
      this.npc = response.npcs[0];
      this.requestUpdate();
    })();
  }

  render() {
    return html`
      <main>
        <div class="game">
            <div class="logo">
              Runedle
            </div>  
            <div>
              ${this.npc?.name}
            </div>
            <input type="text" class="guessing-input" />
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
