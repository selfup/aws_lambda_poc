// this is not necessary but shows that you can do stuff anyways :P
const payloadLength = reqBody => (!Array.isArray(reqBody)
  ? Object.keys(reqBody).length
  : reqBody.length);

export default payloadLength;
