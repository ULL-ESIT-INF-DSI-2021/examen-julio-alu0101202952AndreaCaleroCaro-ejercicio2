import * as net from 'net';


/**
 * @function checkFields
 */
function checkFields(req: RequestType, checkName: boolean, checkDescription: boolean, checkColor: boolean): boolean {
  if (checkName && typeof req.name !== 'string') {
    return false;
  }
  if (checkDescription && typeof req.description !== 'string') {
    return false;
  }

  return true;
}

/**
 * @function processRequest, 
 */
function processRequest(req: RequestType): ResponseType {
  if (typeof req.type === 'string' && typeof req.user === 'string') {
    switch (req.type) {
      case 'add':
        
      case 'update':
        
      case 'remove':
       
      case 'read':
        

    }
  } else {
  }
}

const server = net.createServer((connection) => {
  const listener = new RequestEmitter(connection);
  listener.on('request', (req) => {
    const resp = processRequest(req);
    connection.write(JSON.stringify(resp));
    connection.end();
  });
});

server.listen(60300);