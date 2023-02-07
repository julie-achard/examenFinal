class User {
  //propriétés
  present = false;
  element;
  constructor(title, name, age, email, location, picture) {
    this.title = title;
    this.name = name;
    this.age = age;
    this.email = email;
    this.location = location;
    this.picture = picture;
    this.element = this.generateUserElement();
  }
  //Méthodes pour générer un élément utilisatuer
  generateUserElement() {
    //Créer l'élément div
    const divElement = document.createElement("div");
    //Créer class user
    divElement.classList.add("user");
    //Créer la data-present
    divElement.dataset.present = this.present;
    //Créer class user--info
    const userInfoClass = divElement.classList.add("user--info");
    //Créer class mail
    const emailClass = divElement.classList.add("mail");
    //ma constante html
    const html = `<img src=${this.picture}>
    <div${userInfoClass}> 
    <h1>${this.title}${this.name}</h1>
    <p>${this.age} years old</p>
    </div>
    <a href=${this.email}>
    <span class=${emailClass}>✉️</span>
    </a>`;
    //J'ajoute mon html a ma div
  }

  generateUser() {
    const userName = [];
  }
  display(parentElement) {
    // Ajoute this.element comme enfant d'un élément parent passé en argument.
    parentElement.appendChild(this.element);
  }
}
export default User;
