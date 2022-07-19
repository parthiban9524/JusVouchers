var hitPostAPI = async function (params, URL) {
    console.log("hitting man ==>", URL + " params=>" + JSON.stringify(params));
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((response) => Promise.all([response, response.json()]));
  };
  
  var hitAPI = async function (URL) {
    console.log("hitting man ==>", URL);
    return fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(params),
    }).then((response) => Promise.all([response, response.json()]));
  };
  var hitGetAPI = async function (URL) {
    return fetch(URL, {
      method: "GET",
      headers: {
        //Accept: "application/json",
      },
    }).then((response) => Promise.all([response, response.json()]));
  };
  
  var hitDeletAPI = async function (params, URL) {
    console.log("hitting man ==>", URL + " params=>" + JSON.stringify(params));
    return fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "multipart/form-data",
        // Accept: "application/json",
      },
      // body: JSON.stringify(params),
      body: params,
    }).then((response) => Promise.all([response, response.json()]));
  };
  
  var hitPostAPIwithImage = async function (body, URL) {
    console.log("hitting man ==>", URL + " params=>" + JSON.stringify(body));
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: body,
    }).then((response) => Promise.all([response, response.json()]));
  };
  
  export { hitPostAPI, hitGetAPI, hitPostAPIwithImage, hitDeletAPI, hitAPI };
  