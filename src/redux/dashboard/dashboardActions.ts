import {
  SELECTED_FEED,
  OPEN_SIDE_BAR,
  CLOSE_SIDE_BAR,
} from "./dashboardActionTypes";

export const setSelectedFeed = (selected: string): any => ({
  type: SELECTED_FEED,
  payload: {
    selected,
  },
});

export const openSidebar = (): any => ({
  type: OPEN_SIDE_BAR,
});

export const closeSidebar = (): any => ({
  type: CLOSE_SIDE_BAR,
});
