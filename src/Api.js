import axios from "axios";

export default {
  requestPost: function(param) {
    return axios.get(`http://localhost:5000/api/v1.0/query?query=None&my_param=${param}`)
      .then(response => {
        console.log("Response: ", response);
        return {
          response: response.data
        };
      })
  }
}