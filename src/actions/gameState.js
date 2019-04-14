export const CHANGE_GAME_PHASE = "CHANGE_GAME_PHASE";

export function changeGamePhase(phase) {
  return {
    type: CHANGE_GAME_PHASE,
    payload: phase
  };
}
