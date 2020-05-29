// snippet-start:[dynamodb.JavaScript.table.createTable]
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-west-2'});

// set the end point
AWS.config.update({endpoint: 'http://localhost:8000'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  AttributeDefinitions: [
    {
      AttributeName: 'USER_ID',
      AttributeType: 'N'
    },
    {
      AttributeName: 'USER_NAME',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'USER_ID',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'USER_NAME',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'USER_LIST',
  StreamSpecification: {
    StreamEnabled: false
  }
};


// Call DynamoDB to create the table
ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});
