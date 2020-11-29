var TravelTimeApi = require('travel_time_api');

var defaultClient = TravelTimeApi.ApiClient.instance;
// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['60cf6646c39e45a0de83a59baa00a57d'];
ApiKey.apiKey = "YOUR API KEY"
ApiKey.apiKeyPrefix['60cf6646c39e45a0de83a59baa00a57d'] = "Token"
// Configure API key authorization: ApplicationId
var ApplicationId = defaultClient.authentications['dfc45614'];
ApplicationId.apiKey = "YOUR API KEY"
ApplicationId.apiKeyPrefix['dfc45614'] = "Token"

var api = new TravelTimeApi.DefaultApi()
var lat = 3.4; // {Number} 
var lng = 3.4; // {Number} 
var opts = {
  'withinCountry': "withinCountry_example" // {String} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.geocodingReverseSearch(lat, lng, opts, callback);