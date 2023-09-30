//redux
import { Reducer } from "redux";

import {
  SELECTED_FEED,
  OPEN_SIDE_BAR,
  CLOSE_SIDE_BAR,
} from "./dashboardActionTypes";

interface DashboardState {
  selectedFeed: string;
  openSideNav: boolean;
}

const initialState: DashboardState = {
  selectedFeed: "MY PR",
  openSideNav: false,
};

const dashboard: Reducer<DashboardState, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SELECTED_FEED:
      return { ...state, selectedFeed: action.payload.selected };
    case OPEN_SIDE_BAR:
      return { ...state, openSideNav: true };
    case CLOSE_SIDE_BAR:
      return { ...state, openSideNav: false };
    default:
      return state;
  }
};

export default dashboard;
