import axios from 'axios';
const LOGIN = `http://pds-blockchain.mybluemix.net/login`;
let loginCheck = function (userName, password, category) {

    // let hardCredentials = {
    //     "credentials":{
    //         "userName":"farmer@poc",
    //         "password":"poc@1234"
    //     }
    // };

    let credentials = {
        "credentials":{
            "userName": userName,
            "password": password
        }
    };

    return axios.post(LOGIN, credentials).then(function (res) {

        return res;

    }, function (err) {
        throw new Error('Unable to login');
    });
};
export default loginCheck;




