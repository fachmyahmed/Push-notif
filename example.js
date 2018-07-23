/**
 * Created by Leonardo on 02/08/2016.
 */
FCM = require('fcm-node');


var SERVER_API_KEY='AAAALJJj8S0:APA91bHiiKWPFuh-HGbOW9upcN6szMk9EADpMJVn6bd2cO2be0-GGL713MYZofasIOcppUAUaCab9ogMvBGAr6x5OTJCRvTNU-AeJJ13quWVkMb7ouVCpBxhdS_pJNk5bJWlRyQNISvC';//put your api key here
//var serverKey = 'AAAALJJj8S0:APA91bHiiKWPFuh-HGbOW9upcN6szMk9EADpMJVn6bd2cO2be0-GGL713MYZofasIOcppUAUaCab9ogMvBGAr6x5OTJCRvTNU-AeJJ13quWVkMb7ouVCpBxhdS_pJNk5bJWlRyQNISvC'; //put your server key here
var validDeviceRegistrationToken = 'dYlFRev2ToM:APA91bEag09MyD_IchRbcPIlwOAQ3kDUIM-9B5F7hkbQlkRURJj4TPhfa_BNXU8rolhEXCn_XOH1PrdkRsGeF4bcdI3O5zLFkPLz7eEfkAw1eG3016imv1dzQcGcVk6V_3h4_ENTuX_c'; //put a valid device token here
var regis_ids = [validDeviceRegistrationToken,
        validDeviceRegistrationToken,
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        'wrong', //valid token among invalid tokens to see the error and ok response
        'daf', //valid token among invalid tokens to see the error and ok response
        
        validDeviceRegistrationToken]
var fcmCli= new FCM(SERVER_API_KEY);

var payloadOK = {
    to: validDeviceRegistrationToken,
    data: { //some data object (optional)
        url: 'news',
        foo:'fooooooooooooo',
        bar:'bar bar bar'
    },
    priority: 'high',
    content_available: true,
    notification: { //notification object
        title: 'HELLO', body: 'World!', sound : "default", badge: "1"
    }
};

var payloadError = {
    to: "4564654654654654", //invalid registration token
    data: {
        url: "news"
    },
    priority: 'high',
    content_available: true,
    notification: { title: 'TEST HELLO', body: '123', sound : "default", badge: "1" }
};

var payloadMulticast = {
    registration_ids:regis_ids,
    data: {
        url: "news"
    },
    priority: 'high',
    content_available: true,
    dry_run : true,
    notification: { title: 'Hello AQN', body: 'AQN Test Multicast', sound : "default", badge: "1" }
};

var callbackLog = function (sender, err, res) {
    console.log("\n__________________________________")
    console.log("\t"+sender);
    console.log("----------------------------------")
    console.log("res="+res);
    //console.log("----------------------------------\n>>>");
    //console.log("regis_ids="+regis_ids);
    //console.log("----------------------------------\n>>>");
    console.log("count regis_ids="+regis_ids.length);
    console.log("----------------------------------\n>>>");
    var obj = JSON.parse(res);
    
    var arr1 = regis_ids;
    var arr2 = obj.results;

    if (arr1.length == arr2.length) 
    {
        arr1.forEach(function(u, i) {
            //console.log(u + '==>' + JSON.stringify(arr2[i]));
            
            //console.log(i + '==>' + JSON.stringify(arr2[i]) + '\n');
        })
        console.log(arr2.length);
    } else {
       console.log(false);
    }
};

function sendOK()
{
    fcmCli.send(payloadOK,function(err,res){
        callbackLog('sendOK',err,res);
    });
}

function sendError() {
    fcmCli.send(payloadError,function(err,res){
        callbackLog('sendError',err,res);
    });
}

function sendMulticast(){
    fcmCli.send(payloadMulticast,function(err,res){
        callbackLog('sendMulticast',err,res);
        //setTimeout(function(){
        //    console.log('Send request');
        //}, 5000);
    });
}


//function setDelay(i) {
//  setTimeout(function(){
//    console.log('Looping ke - ' + i);
    //sendMulticast(); ;
//  }, 5000);
//}

//sendOK();
//var i;
//for (i = 0; i < 99; i++) {
    //setTimeout(3000);
    //console.log('Looping ke - ' + i);
    //setDelay(i);
    sendMulticast(); 
    
//}
//sendMulticast();
//sendError();