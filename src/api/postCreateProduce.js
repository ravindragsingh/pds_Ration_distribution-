import axios from 'axios';
const TRANSFER_PRODUCE = `http://pds-blockchain.mybluemix.net/create-produce`;
let createProduce = function (userName, produceID, produceType, produceQuantity,ownerType,ownerId) {
    let postData = {
        "produce":{
            "userName":userName,
                    "produceId":produceID,
                    "produceType":produceType,
                    "produceQuantity":produceQuantity,
                    "ownerType":ownerType,
                    "ownerId":ownerId
        }


    };

    return axios.post(TRANSFER_PRODUCE, postData).then(function (res) {
      return res.data;
    }, function (err) {
        throw new Error('Unable to Create Produce');
    });

};

export default createProduce;




