const Loader = {
  load: function(validate, boot, error) {
    Axios.get('/api/data')
      .then(function(response) {
        if(validate(response.data)) {
          boot(response.data);
        } else {
          console.log("No data, response: ", response);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};

export default Loader;
