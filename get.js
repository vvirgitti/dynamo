var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-west-2'});
// set the end point
AWS.config.update({endpoint: 'http://localhost:8000'});
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'USER_LIST',
  Key: {
    'USER_ID' : {N: '001'},
    'USER_NAME' : {S: 'jon'}
  },
  ProjectionExpression: 'USER_ID , USER_NAME'
};

// Call DynamoDB to read the item from the table
const item = ddb.getItem(params).promise();
item.then((data) => {
  console.log('Success', data.Item)
}).catch(err => console.log(err))
