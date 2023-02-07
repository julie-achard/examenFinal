import User from "./User.js";
const user = new User();
async function getTwentyUser() {
  const urlUser = `https://randomuser.me/api/?results=20`;
  const res = await fetch(urlUser);
  const data = await res.json();
  console.log(data);
  return data;
}
getTwentyUser();
async function getUserInformation() {
  const urlInfo = `https://randomuser.me/api/?inc=gender,name,location,email,dob,picture`;
  const res = await fetch(urlInfo);
  const data = await res.json();
  console.log(data);
  renderUserElement(data.results.name);
  //   user.renderUserElement(
  //     data.results.name,
  //     data.results.location,
  //     data.results.email,
  //     data.results.dob,
  //     data.results.picture
  //   );
}
getUserInformation();

const renderUserElement = (userName) => {
  const mainElement = document.querySelector("main");
  userName.map((u) => new User(u).display(mainElement));
};

// async function init() {
//   const users = await getTwentyUser();
//   const info = await getUserInformation();
//   console.log(info);
//   const user = new User();
//   user.renderUserElement(
//     info.userName,
//     info.userLocation,
//     info.userEmail,
//     info.userDob,
//     info.userPicture
//   );
// }
