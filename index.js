const http = require("http");
const getMeteo = require("./apiJavascript").getMeteo;
const port = 3000;

const requestHandler = async (request, response) => {
  const meteo = await getMeteo();
  response.end("Ici doit s'afficher la météo");
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Javascript nodejs is listening on ${port}`);
});
