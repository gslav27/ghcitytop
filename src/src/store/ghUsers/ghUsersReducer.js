import * as types from './ghUsersActionTypes';
import { SUCCESS, START, FAIL } from '../actionTypes';


const initialState = {
  ghTopUsers: [],
  loading: { ghTopUsers: false },
  loadingErrors: { ghTopUsers: null },
};


export default function (state = initialState, { type, payload }) {
  switch (type) {
    // START REQUESTS----------------------------------------------------
    case (types.GET_TOP_USERS + START):
      return {
        ...state,
        loading: { ...state.loading, ghTopUsers: true },
        loadingErrors: { ...state.loadingErrors, ghTopUsers: null },
      };

    // SUCCESS REQUESTS----------------------------------------------------
    case (types.GET_TOP_USERS + SUCCESS):
      return {
        ...state,
        loading: { ...state.loading, ghTopUsers: false },
        ghTopUsers: payload.data.search.edges.map(({ node }) => node),
      };

    // FAIL REQUESTS----------------------------------------------------
    case (types.GET_TOP_USERS + FAIL):
      return {
        ...state,
        loading: { ...state.loading, ghTopUsers: false },
        loadingErrors: { ...state.loadingErrors, ghTopUsers: payload },
      };

    default:
      return state;
  }
}
