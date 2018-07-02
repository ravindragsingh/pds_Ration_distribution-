import axios from 'axios';

const GET_PRODUCE_URL = 'http://pds-blockchain.mybluemix.net/get-all-produce?userName=farmer@poc&ownerId=1001';

//'http://pds-blockchain.mybluemix.net/get-all-produce?userName='+ownerName+'&ownerId='+ uniqueId;
let getAllProduce = function(ownerName, uniqueId)
{

    return axios.get(GET_PRODUCE_URL)
    .then(function (res) {
        console.log(res);
       return res;
    }, function (err) {
        throw new Error('Unable to Get Produce');
    });

};

export default getAllProduce;
