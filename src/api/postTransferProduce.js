import axios from 'axios';
const TRANSFER_PRODUCE = `http://pds-blockchain.mybluemix.net/transfer-produce-ownership`;
let transferProduce = function (userName, produceID, newOwnerType, newOwnerId) {
    let postData = {
        "transferRequest":{
            "userName":userName,
            "produceId":produceID,
            "newOwnerType":newOwnerType,
            "newOwnerId":newOwnerId
        }
    };

    return axios.post(TRANSFER_PRODUCE, postData).then(function (res) {
      return res.data;
    }, function (err) {
        throw new Error('Unable to Transfer Produce');
    });

};

export default transferProduce;




