import http, { IncomingMessage, ServerResponse } from "http";
import { getMeteo } from "./apiTypescript";
const port: number = 3000;

const requestHandler = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const meteo = await getMeteo("strasbourg");
  response.end("Ici doit s'afficher la météo");
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Javascript nodejs is listening on ${port}`);
});
