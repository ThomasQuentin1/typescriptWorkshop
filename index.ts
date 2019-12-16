import { createServer, IncomingMessage, ServerResponse } from "http";
import { getMeteo } from "./apiTypescript";
const port: number = 5000;

const requestHandler = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const meteo = await getMeteo("strasbourg");
  //const meteo = await getMeteo(1);

  response.end("Ici doit s'afficher la météo");
};

const server = createServer(requestHandler);

server.listen(port, () => {
  console.log(`Javascript nodejs is listening on ${port}`);
});
