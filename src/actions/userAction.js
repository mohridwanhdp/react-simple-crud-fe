import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";

export const getUsersList = () => {
  return dispatch =>
    axios
      .get(
        "http://my-json-server.typicode.com/mohridwanhdp/react-simple-crud/users"
      )
      .then(function(response) {
        // handle success
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false
          }
        });
      })
      .catch(function(error) {
        // handle error
        dispatch({
            type: GET_USERS_LIST,
            payload: {
              data: false,
              errorMessage: error.message
            }
          });
      });
};
