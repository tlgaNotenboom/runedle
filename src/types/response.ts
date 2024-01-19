export type NPC = {
    name: string;
    gender: string;
    race: string;
    region: string;
    combatLevel: string;
    releaseDate: string;
};

export type Response = {
    npcs: NPC[];
};
  