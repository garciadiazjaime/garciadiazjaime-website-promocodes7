const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});

const documentClient = new AWS.DynamoDB.DocumentClient();

const saveCode = async (code, website) => {
  if (website?.length < 5 || code?.length < 2) {
    return Promise.reject("empty params");
  }

  const batch = [
    {
      PutRequest: {
        Item: {
          website,
          code,
          created: new Date().getTime(),
        },
      },
    },
  ];

  const params = {
    RequestItems: {
      code: batch,
    },
  };

  return documentClient.batchWrite(params).promise();
};

module.exports = {
  saveCode,
};
