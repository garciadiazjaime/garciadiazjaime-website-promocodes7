const { saveCode } = require("../../support/dynamo-service");

exports.handler = async function (event, _context) {
  const { code, website } = JSON.parse(event.body || "{}");

  const response = await saveCode(code, website)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });

  const statusCode = !response || response.errorMessage ? 400 : 201;

  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(response),
  };
};
