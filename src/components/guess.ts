import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from '../css/styles.js';
import { NPC } from '../types/response.js';
import { GuessData } from '../types/guessData.js';
import { IndicatorOption } from '../types/indicator.js';

const upArrow: IndicatorOption = '↑';
const downArrow: IndicatorOption = '↓';

function processNpcCombatLevel(level: string) {
  if (level.toString() === '0') {
    return 'N/A';
  }
  return level;
}

@customElement('runedle-guess')
export class Guess extends LitElement {
  static styles = [
    styles,
    css`
      .attributes {
        display: flex;
        justify-content: center;
      }
    `,
  ];

  correctNPC?: NPC;

  @property()
  guessNPC?: NPC;

  @property({ attribute: false })
  guessData: GuessData = {
    gender: 'incorrect',
    race: 'incorrect',
    region: 'incorrect',
    combatLevel: 'incorrect',
    releaseDate: 'incorrect',
  };

  @property({ attribute: false })
  combatLevelIndicator: IndicatorOption = '';

  @property({ attribute: false })
  releaseDateIndicator: IndicatorOption = '';

  render() {
    this.compareAttributes();
    return html`
      <div class="attributes">
        <div><span>${this.guessNPC?.name}</span></div>
        <div class=${this.guessData.gender}><span>${
      this.guessNPC?.gender
    }</span></div>
        <div class=${this.guessData.race}><span>${
      this.guessNPC?.race
    }</span></div>
        <div class=${this.guessData.region}><span>${
      this.guessNPC?.region
    }</span></div>
        <div class=${this.guessData.combatLevel}>
          <span>${processNpcCombatLevel(this.guessNPC!.combatLevel)} ${
      this.combatLevelIndicator
    }</span></div>
        <div class=${this.guessData.releaseDate}><span>${
      this.guessNPC?.releaseDate
    } ${this.releaseDateIndicator}</span>
        </div>
      </div>
      </div>
    `;
  }

  compareAttributes() {
    if (this.guessNPC && this.correctNPC) {
      if (this.guessNPC.gender.includes(this.correctNPC.gender)) {
        if (this.guessNPC.gender === this.correctNPC.gender) {
          this.guessData.gender = 'correct';
        } else {
          this.guessData.gender = 'partial';
        }
      } else {
        this.guessData.gender = 'incorrect';
      }

      if (this.guessNPC.race.includes(this.correctNPC.race)) {
        if (this.guessNPC.race === this.correctNPC.race) {
          this.guessData.race = 'correct';
        } else {
          this.guessData.race = 'partial';
        }
      } else {
        this.guessData.race = 'incorrect';
      }

      if (this.guessNPC.region.includes(this.correctNPC.region)) {
        if (this.guessNPC.region === this.correctNPC.region) {
          this.guessData.region = 'correct';
        } else {
          this.guessData.region = 'partial';
        }
      } else {
        this.guessData.region = 'incorrect';
      }

      if (this.guessNPC.combatLevel === this.correctNPC.combatLevel) {
        this.guessData.combatLevel = 'correct';
      } else if (this.correctNPC.combatLevel === 'N/A') {
        this.guessData.combatLevel = 'incorrect';
        this.releaseDateIndicator = downArrow;
      } else if (this.guessNPC.combatLevel === 'N/A') {
        this.guessData.combatLevel = 'incorrect';
        this.releaseDateIndicator = upArrow;
      } else if (this.guessNPC.combatLevel < this.correctNPC.combatLevel) {
        this.guessData.combatLevel = 'incorrect';
        this.combatLevelIndicator = upArrow;
      } else {
        this.guessData.combatLevel = 'incorrect';
        this.combatLevelIndicator = downArrow;
      }

      if (this.guessNPC.releaseDate === this.correctNPC.releaseDate) {
        this.guessData.releaseDate = 'correct';
      } else if (this.guessNPC.releaseDate < this.correctNPC.releaseDate) {
        this.guessData.releaseDate = 'incorrect';
        this.releaseDateIndicator = upArrow;
      } else {
        this.guessData.releaseDate = 'incorrect';
        this.releaseDateIndicator = downArrow;
      }
    }

    this.dispatchEvent(
      new CustomEvent('guess-made', {
        bubbles: true,
        composed: true,
        detail: {
          correctlyGuessed: this.guessNPC?.name === this.correctNPC?.name,
        },
      })
    );
  }
}
