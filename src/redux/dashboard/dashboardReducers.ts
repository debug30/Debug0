//redux
import { Reducer } from "redux";

import { SELECTED_FEED } from "./dashboardActionTypes";

interface DashboardState {
  selectedFeed: string;
}

const initialState: DashboardState = {
  selectedFeed: "MY PR",
};

const dashboard: Reducer<DashboardState, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SELECTED_FEED:
      return { ...state, selectedFeed: action.payload.selected };
    default:
      return state;
  }
};

export default dashboard;
