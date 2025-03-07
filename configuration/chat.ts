import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, your personal cycling guide! Born from a passion for the open road and the thrill of the Tour de France, I'm here to help you with everything from bike recommendations to race insights.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Oops, I seem to have taken a wrong turn. Please try again later.`;
export const WORD_CUTOFF: number = 8000;
export const WORD_BREAK_MESSAGE: string = `[Need a breather – too many words!]`;
export const HISTORY_CONTEXT_LENGTH: number = 7;
