const pathParts = window.location.href.split('#');
pathParts.shift();

let urlsJSON = "";
for (const pathPart of pathParts)
  urlsJSON += `${pathPart}#`;
urlsJSON = urlsJSON.slice(0, -1);
urlsJSON = urlsJSON.replaceAll("%22", '"');

console.log(urlsJSON);
const urls = JSON.parse(urlsJSON);
const lastURL = urls.pop();
for (const url of urls)
  window.open(url, "_blank");
window.open(lastURL, '_self');
