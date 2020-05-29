var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-west-2'});
// set the end point
AWS.config.update({endpoint: 'http://localhost:8000'});
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});


var params = {
  TableName: 'USER_LIST',
  Item: {
    'USER_ID' : {N: '001'},
    'USER_NAME' : {S: 'jon'}
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});