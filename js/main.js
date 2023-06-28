function generateURL() {
  const pathParts = window.location.href.split('/');
  pathParts.pop();
  pathParts.push("comp.html");

  let newURL = "";
  for (const pathPart of pathParts)
    newURL += `${pathPart}/`;
  newURL = newURL.slice(0, -1);

  newURL += '#';
  const urls = document.getElementById("urlInput");
  newURL += JSON.stringify(urls.value.split('\n'));

  prompt("This is the new URL! Simply copy it and then paste it into the URL bar and it'll open all the tabs that you need!", newURL);
}
