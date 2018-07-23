var FCM = require('fcm-node');
var serverKey = 'AAAALJJj8S0:APA91bHiiKWPFuh-HGbOW9upcN6szMk9EADpMJVn6bd2cO2be0-GGL713MYZofasIOcppUAUaCab9ogMvBGAr6x5OTJCRvTNU-AeJJ13quWVkMb7ouVCpBxhdS_pJNk5bJWlRyQNISvC'; //put your server key here
var fcm = new FCM(serverKey);
var reg_ids = [
'eF75WjP4BnU:APA91bFgIA53_41Q8UllwOhRRI8FTrMSdvWYHuNB5R0hsNOGf1yy4uVINQV2vg3_15tZjFtZZMqWeN8ui9pDCsuoFSzvRAtPsCBBsIZFyIljRYApOYsAX1fSHAKNX1JtGGTL3U4ls5rQuEFTq0os4MYoney8VF1FhQ',
'dYlFRev2ToM:APA91bEag09MyD_IchRbcPIlwOAQ3kDUIM-9B5F7hkbQlkRURJj4TPhfa_BNXU8rolhEXCn_XOH1PrdkRsGeF4bcdI3O5zLFkPLz7eEfkAw1eG3016imv1dzQcGcVk6V_3h4_ENTuX_c',
'fNbS-c7bW2Y:APA91bGIj_rA30Ci1-p6pAPtbcbt4-4vU4oxgeY62w5gebA0tah58-HwYoPGA8MPkZFyXuyNdm45ZzZMfV5aYPblvkbRMg6qyOtkXXDNh5gsr92zLzMSpl3W_V8gjFBbQ5YqEBBMt7z5']

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    //to: 'dYlFRev2ToM:APA91bEag09MyD_IchRbcPIlwOAQ3kDUIM-9B5F7hkbQlkRURJj4TPhfa_BNXU8rolhEXCn_XOH1PrdkRsGeF4bcdI3O5zLFkPLz7eEfkAw1eG3016imv1dzQcGcVk6V_3h4_ENTuX_c', 
    registration_ids : reg_ids,
    //collapse_key: 'your_collapse_key',
    
    notification: {
        title: 'AQN NodeJs Test', 
        body: 'Dont worry be happy' 
    },
    dry_run : false,
    
    /*data: {  //you can send only notification or only data(or include both)
        Nick: 'my value',
        Room: 'my another value'
    }*/
};

fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!", err);
    } else {
        console.log("Successfully sent with response: ", response);
    }
});