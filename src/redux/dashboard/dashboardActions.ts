import { SELECTED_FEED } from "./dashboardActionTypes";

export const setSelectedFeed = (selected: string): any => ({
  type: SELECTED_FEED,
  payload: {
    selected,
  },
});
