export type NPC = {
  name: string;
  gender: string;
  race: string;
  region: string;
  combatLevel: string;
  releaseDate: string;
  disabled: boolean;
};

export type Response = {
  npcs: NPC[];
};
