fetch("settings.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").innerText = data.name;
    document.getElementById("bio").innerText = data.bio;
    document.getElementById("profile-pic").src = data.profilePicture;

    const linksContainer = document.getElementById("links");

    data.links.forEach(link => {
      if (link.visible) {
        const a = document.createElement("a");
        a.href = link.url;
        a.className = "link";
        a.target = "_blank";

        const img = document.createElement("img");
        img.src = link.icon;

        const span = document.createElement("span");
        span.innerText = link.text;

        a.appendChild(img);
        a.appendChild(span);

        linksContainer.appendChild(a);
      }
    });
  })
  .catch(err => console.error("Error loading settings.json", err));