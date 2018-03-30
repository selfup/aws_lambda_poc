import calculateKeyLength from './calculateKeyLength';

/**
 * Example payload
 * [{hello: 'world'}, {world: 'hello'}]
 * will be actual JSON (aka stringified) in API Gateway
 * Otherwise in lambda console it will be parsed JSON
 */

const handler = (event, context, callback) => {
  /**
   * if you end up using API Gateway
   * event.body will be your request body
   * if you just test on lambda console
   * event is already parsed
   */

  // JSON.parse(event.body) is needed when using API Gateway
  const reqBody = event.body ? JSON.parse(event.body) : event;

  const payloadLength = calculateKeyLength(reqBody);

  // creating a body and statusCode is required for API Gateway
  const body = JSON.stringify({ payloadLength });
  const statusCode = 200;

  const res = {
    statusCode,
    body,
  };

  // here we pass the response to the callback :)
  callback(null, res);
};

// this is the expected export
export default {
  handler,
};
