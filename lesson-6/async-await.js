async function loadJson (url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
  }
  
let response = await loadJson('url');

response.json()

