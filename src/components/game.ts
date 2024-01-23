import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { NPC, Response } from '../types/response.js';
import { styles } from '../css/styles.js';

@customElement('runedle-game')
export class Game extends LitElement {
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
    `,
  ];

  @property({ attribute: false })
  private chosenNpc?: NPC;

  @property({ attribute: false })
  private npcs: NPC[] = [];

  @property()
  private guesses: NPC[] = [];

  override async connectedCallback() {
    super.connectedCallback?.();
    const data = await fetch('/assets/data.json');
    const response = (await data.json()) as Response;
    this.npcs = response.npcs;
    this.chosenNpc = this.npcs[Math.floor(Math.random() * this.npcs.length)];
  }

  render() {
    return html`
      <div class="game">
        <runedle-header></runedle-header>
        <input
          id="npc-input"
          type="text"
          placeholder="Make a guess"
          list="npcList"
          autocomplete="off"
          @keypress="${this.keyPressed}"
        />
        <button @click="${this.processGuess}">submit</button>
        <datalist id="npcList">
          ${this.npcs
            ?.filter(x => !x.disabled)
            .map(i => html` <option value=${i.name}>${i.name}</option>`)}
        </datalist>
        <div class="attributes">
          <div>
            <span>Name</span>
          </div>
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
        ${this.guesses?.map(
          i => html`
            <runedle-guess
              .correctNPC="${this.chosenNpc}"
              .guessNPC="${i}"
            ></runedle-guess>
          `
        )}
      </div>
    `;
  }

  keyPressed(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.processGuess();
    }
  }

  processGuess() {
    const guessElement = this.renderRoot.querySelector(
      '#npc-input'
    ) as HTMLInputElement;
    if (guessElement) {
      const npcGuess = this.npcs.find(
        npc =>
          npc.name.toLowerCase() === guessElement.value.toLowerCase() &&
          !npc.disabled
      );
      if (npcGuess) {
        this.guesses = [...this.guesses, npcGuess];
        npcGuess.disabled = true;
        guessElement.value = '';
      }
    }
  }
}
