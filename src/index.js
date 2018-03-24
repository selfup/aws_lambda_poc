const handler = (event, context, callback) => {
  const reqBody = event.body ? JSON.parse(event.body) : event;
  const randomStuff = reqBody.map(e => Object.keys(e).map(e => e));

  JSON.stringify(randomStuff);

  const body = JSON.stringify({ randomStuff: randomStuff.length });
  const res = { statusCode: 200, body };

  callback(null, res);
};

exports.handler = handler; 
