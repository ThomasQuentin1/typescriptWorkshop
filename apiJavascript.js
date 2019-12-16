import fetch from "isomorphic-unfetch";

const getMeteo = async city => {
  const location =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=444efc955721cf12413d55eb13621fbb";
  const response = await fetch(location);
  const jsonObject = await response.json();
  return jsonObject;
};

module.exports = { getMeteo };
