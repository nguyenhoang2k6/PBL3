function loadPartial(targetId, filePath) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  fetch(filePath)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to load ${filePath}: ${res.status}`);
      }
      return res.text();
    })
    .then((data) => {
      target.innerHTML = data;
    })
    .catch((err) => {
      console.error(err);
    });
}

loadPartial("header", "header.html");
loadPartial("footer", "footer.html");
