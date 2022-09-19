var btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".box").style.display = "block";
  const user = document.querySelector("#text").value;
  getData(user);

  document.querySelector("#form").style.display = "none";
});

function getData(username) {
  let url = "https://api.github.com/users/" + username;
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      document.querySelector("#avatar_url").src = data.avatar_url;
      document.querySelector("#user_name").innerHTML = data.name;
      document.querySelector("#user_userName").innerHTML = data.login;
      document.querySelector("#user_bio").innerHTML = data.bio;
      document.querySelector("#followers").innerHTML = data.followers;
      document.querySelector("#following").innerHTML = data.following;
      document.querySelector("#repositories").innerHTML = data.public_repos;
    });
}