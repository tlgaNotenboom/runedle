export type GuessDataOptions = 'correct' | 'partial' | 'incorrect';

export type GuessData = {
  gender: GuessDataOptions;
  race: GuessDataOptions;
  region: GuessDataOptions;
  combatLevel: GuessDataOptions;
  releaseDate: GuessDataOptions;
};
