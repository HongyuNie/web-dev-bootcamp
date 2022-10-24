// OLD FESHION WAY MAKE REQUEST VIA XHR
// No support for promises or async functions

const req = new XMLHttpRequest();

req.onload = function () {
  console.log("IT LOADED!!");
  const data = JSON.parse(this.responseText);
  console.log(data.name, data.height);
    //need nesed request here if we need another request after the first one finished
};

req.onerror = function () {
  console.log("ERROR!!!!");
  console.log(this);
};

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();
