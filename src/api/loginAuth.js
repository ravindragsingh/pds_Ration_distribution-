import axios from 'axios';
const LOGIN = `http://pds-blockchain.mybluemix.net/login`;
let loginCheck = function (userName, password, category) {
    let hardCredentials = {
        "credentials":{
            "userName":"farmer2@poc",
            "password":"poc@1234"
        }
    };
    let credentials = {
        "credentials":{
            "userName": userName,
            "password": password
        }
    };
    return axios.post(LOGIN, credentials).then(function (res) {
      return res.data;
    }, function (err) {
        throw new Error('Unable to login');
    });

};

//let data = loginCheck();

export default loginCheck;




