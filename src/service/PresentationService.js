const BASE_URL = "http://localhost:3000/";

async function fetchPresentations () {

  const headers = {
    'Content-Type': 'application/json',
  } 
  
  let url = BASE_URL + "lectures"; 

  return await fetch(url, {headers: headers})
  .then( request => {
    return request.json();
  })
  .catch(err => {
    console.log(err);
    return false;
  })
}

async function createPresentation (name, duration) {

  const headers = {
    'Content-Type': 'application/json',
  }

  const body = {
    name: name,
    duration : duration
  }

  let url = BASE_URL + "lectures";
  
  return await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  })
  .then( request => {
    return request.json();
  })
  .catch(err => {
    console.log(err);
    return false;
  })
}

async function deletePresentation (id) {

  const headers = {
    'Content-Type': 'application/json',
  }

  let url = BASE_URL + `lectures/${id}`;
  
  return await fetch(url, {
    method: 'DELETE',
    headers: headers,
  })
  .then( request => {
    return request.json();
  })
  .catch(err => {
    console.log(err);
    return false;
  })
}

async function updatePresentation (id, name, duration) {

  const headers = {
    'Content-Type': 'application/json',
  }

  let url = BASE_URL + `lectures/${id}`;

  const body = {
    name: name,
    duration : duration
  }
  
  return await fetch(url, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(body)
  })
  .then( request => {
    return request.json();
  })
  .catch(err => {
    console.log(err);
    return false;
  })
}

export {
  fetchPresentations,
  createPresentation,
  deletePresentation,
  updatePresentation,
}
