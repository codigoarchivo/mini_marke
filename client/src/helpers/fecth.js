const baseUrl = process.env.REACT_APP_API_URL;

const fecthSinToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; //localhost:5000/api/
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

const fecthConToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; //localhost:5000/api/
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "x-access-token": token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};

export { fecthSinToken, fecthConToken };
