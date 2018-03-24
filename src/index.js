const handler = (event, context, callback) => {
  /**
   * if you end up using API Gateway
   * event.body will be your request body
   * if you just test on lambda console
   * event is already parsed
   */
  
  const reqBody = event.body ? JSON.parse(event.body) : event;

  // this is not necessary but shows that you can do stuff anyways :P
  const randomStuff = reqBody.map(e => Object.keys(e).map(e => e));

  // creating a body and statusCode is required for API Gateway
  const body = JSON.stringify({ randomStuff: randomStuff.length });
  const res = { statusCode: 200, body };

  // here we pass the response to the callback :)
  callback(null, res);
};

// this is the expected export
exports.handler = handler; 
