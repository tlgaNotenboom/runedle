export enum GuessDataOptions {
  CORRECT = 'correct',
  PARTIAL = 'partial',
  INCORRECT = 'incorrect',
}

export type GuessData = {
  gender: GuessDataOptions;
  race: GuessDataOptions;
  region: GuessDataOptions;
  combatLevel: GuessDataOptions;
  releaseDate: GuessDataOptions;
};
