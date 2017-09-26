import Axios from 'axios'
import Ractive from 'ractive'
import Router from 'ractive-route'

import App from './App'
import About from './About'

const boot = function(data) {
  const router = new Router({
    el: 'body',
    basePath: '/',
    data: function() {
      return data;
    }
  });

  router.addRoute('/', App);
  router.addRoute('/about', About);

  router.init({
    noHistory: true,
    reload: false,
  });

  router.watchLinks();
  router.watchState(); 
}

Axios.get('/api/data')
  .then(function(response) {
    if(response.data.name) {
      boot(response.data);
    } else {
      console.log("No data, response: ", response);
    }
  })
  .catch(function(error) {
    console.log(error);
  });

if(module.hot) {
  module.hot.accept();
}

