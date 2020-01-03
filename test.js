import ws from "k6/ws";
import { check } from "k6";

const data = JSON.parse(open("./data.json"));

export let options = {
  vus: 1000,
  iterations: 1000
};

export default function () {
  const params = {
    host: data.host,
    param1: randomString(24),
    param2: randomString(24),
    param3: randomString(10)
  }
  const url = `ws://${params.host}/${params.param1}/${params.param2}?param3=${params.param3}`;

  let response = ws.connect(url, params, function (ws) {
    ws.on('open', function open() {
      console.log('connected');
    });

    ws.on('close', function close() {
      console.log('disconnected');
    });

    ws.on('error', function (e) {
      if (e.error() != "webws: close sent") {
        console.log('An unexpected error occured: ', e.error());
      }
    });

    ws.setTimeout(function () {
      console.log('3 Minutes passed, closing the ws');
      ws.close();
    }, 180000);
  });

  check(response, { "status is 101": (r) => r && r.status === 101 });
}

function randomString(length) {
  const min = Math.pow(16, Math.min(length, 8) - 1);
  const max = Math.pow(16, Math.min(length, 8)) - 1;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  let randstring = result.toString(16);
  while (randstring.length < length) { randstring = randstring + randomString(length - 8); }
  return randstring;
}
