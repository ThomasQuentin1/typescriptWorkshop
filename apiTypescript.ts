import fetch from "isomorphic-unfetch";

interface coord {
  lon: number;
  lat: number;
}

interface wheather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface mainTemp {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface wind {
  speed: number;
  deg: number;
}

interface clouds {
  all: number;
}

interface sys {
  type: number;
  id: number;
  country: string;
  sunrise: Date;
  sunset: Date;
}

interface apiResponse {
  coord: coord;
  wheather: Array<wheather>;
  base: string;
  main: mainTemp;
  visibility: number;
  wind: wind;
  clouds: clouds;
  dt: number;
  sys: sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const getMeteo = async (city: string): Promise<apiResponse> => {
  const location =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=444efc955721cf12413d55eb13621fbb";
  const response = await fetch(location);
  const jsonObject = (await response.json()) as apiResponse;

  return jsonObject;
};

// step 2 fetch this api and print the data. you must make the interface: https://jsonplaceholder.typicode.com/todos/3
