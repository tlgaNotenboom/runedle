import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { NPC, Response } from '../types/response.js';
import { styles } from '../css/styles.js';

@customElement('runedle-game')
export class Game extends LitElement {
  @property({ attribute: false })
  private chosenNpc?: NPC;

  @property({ attribute: false })
  private npcs: NPC[] = [];

  @property()
  private guesses: NPC[] = [];

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
        <p>${this.chosenNpc!.name}</p>
        <select class="guessing-input" @change="${this.addGuess}">
          ${this.npcs?.map(
            i => html` <option value=${i.name}>${i.name}</option>`
          )}
        </select>
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

  addGuess(e: Event & { target: HTMLSelectElement }) {
    const npcGuess = this.npcs.find(
      npc => npc.name.toLowerCase() === e.target.value.toLowerCase()
    );
    this.guesses = [...this.guesses, npcGuess!];
  }
}
