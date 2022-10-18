const BASE_URL = "http://localhost:3000/";

async function fetchTracks () {

  const headers = {
    'Content-Type': 'application/json',
  } 
  
  let url = BASE_URL + "tracks"; 

  return await fetch(url, {headers: headers})
  .then( request => {
    return request.json();
  })
  .catch(err => {
    console.log(err);
    return false;
  })
}

async function sendPresentatiosnFile (formData) {

  const headers = {
    // 'Content-Type': 'multipart/form-data'
  }

  let url = BASE_URL + "tracks";

  return await fetch(url, {
    headers: headers,
    method: 'POST',
    body: formData
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
  fetchTracks,
  sendPresentatiosnFile
}
