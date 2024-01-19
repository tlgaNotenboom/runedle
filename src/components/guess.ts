import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from '../css/styles.js';
import { GuessData, GuessDataOptions } from '../types/guessData.js';

@customElement('runedle-guess')
export class Guess extends LitElement {
  @property({ attribute: false })
  guess: GuessData = {
    gender: GuessDataOptions.INCORRECT,
    race: GuessDataOptions.INCORRECT,
    region: GuessDataOptions.INCORRECT,
    combatLevel: GuessDataOptions.INCORRECT,
    releaseDate: GuessDataOptions.INCORRECT,
  };

  static styles = [
    styles, 
    css`
      .attributes {
        display: flex;
        justify-content: center;
      }
    `
  ];

  render() {
    return html`
        <div class="attributes">
          <div class=${this.guess.gender.toString()}><span>Gender</span></div>
          <div class=${this.guess.race.toString()}><span>Race</span></div>
          <div class=${this.guess.region.toString()}><span>Region</span></div>
          <div class=${this.guess.combatLevel.toString()}>
            <span>Combat level</span>
          </div>
          <div class=${this.guess.releaseDate.toString()}>
            <span>Release date</span>
          </div>
        </div>
      </div>
    `;
  }
}
