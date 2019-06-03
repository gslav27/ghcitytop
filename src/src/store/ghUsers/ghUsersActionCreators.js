import { ghAPI } from '../../utilities/constants/constants';
import * as types from './ghUsersActionTypes';



export const getGhTopUsers = () => ({
  type: types.GET_TOP_USERS,
  callAPI: `${ghAPI.URL}`,
  options: {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${ghAPI.TKN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: (`
        query topCityUsers($queryString: String!){
          search(query:$queryString, type:USER, first:10){
            repositoryCount
            edges {
              node {
                ...on User{
                  id
                  login
                  name
                  email
                  location
                  url
                  bio
                  avatarUrl
                  followers(){
                    totalCount
                  }
                }
              }
            }
          }
        }`),
      variables: { queryString: 'location:rivne' },
    }),
  },
});
