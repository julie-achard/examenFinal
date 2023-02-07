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
  //   user.renderUserElement(
  //     data.results.name,
  //     data.results.location,
  //     data.results.email,
  //     data.results.dob,
  //     data.results.picture
  //   );
}
getUserInformation();
