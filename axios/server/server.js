const express = require('express'); //load the express
var cors = require('cors'); // load cors
var app = express();

app.use(cors())

/*
req = request
res = response
*/
app.get('/', (req, res) => {
  // console.log("headers ", req.headers)
  res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name: 'Andrew',
  //   likes: [
  //     'Biking',
  //     'Cities'
  //   ]
  // });
});

// app.get('/about', (req, res) => {
//   res.send('About Page');
// });
// app.get('/hello', (req, res) => {
//   res.sendFile(`${ __dirname }/hello/hello.html`);
//   // res.sendFile('/data/helder/programacao2/nodejs/servers/estudos/hello/hello.html');
// });

app.get('/ajax-info', (req, res) => {
  setTimeout(() => {
    console.log("request finish")
    res.sendFile(`${ __dirname }/api/ajax-info.txt`);
  }, 1000);
});

app.get('/cd-catalog', (req, res) => {
  setTimeout(() => {
    res.sendFile(`${ __dirname }/files/cd-catalog.xml`);
  }, 1000);
});

app.get('/demo-get', (req, res) => {
  setTimeout(() => {
    res.send(
      `
        <p>This content was requested using the GET method.</p>
        <p>${ new Date() }</p>
      `
    );
  }, 1000);
});

app.get('/demo-get-send-information', (req, res) => {
  setTimeout(() => {
    res.send(
      `
        <p> Hello ${ req.query.fname  } ${ req.query.lname }</p>
      `
    );
  }, 1000);
});

// em uma aplicação real use o npm install body-parser
app.post('/demo-post', (req, res) => {

  const body = [];

  req.on("data", (chunck) => {
    body.push(chunck)
  })

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
  });
});

// app.get('/hello/ajax-info', (req, res) => {
//   setTimeout(() => {
//     res.sendFile(`${ __dirname }/hello/ajax_info.txt`);
//   }, 1000);
//   // res.sendFile('/data/helder/programacao2/nodejs/servers/estudos/hello/ajax_info.txt');
// });

// // /bad - send back json with errorMessage
// app.get('/bad', (req, res) => {
//   res.send({
//     errorMessage: 'Unable to handle request'
//   });
// });

// app.post('/test', (req, res) => {
//   console.log("no post")
//   console.log("headers ", req.headers)
//   res.send('NO POST');
// });

console.log("localhost:3000")
app.listen(3000); //localhost:3000
