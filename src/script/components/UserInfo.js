export default class UserInfo {
   constructor(nameSelector, infoSelector) {
      this._nameEl = document.querySelector(nameSelector);
      this._infoEl = document.querySelector(infoSelector);
      this.setUserInfo = this.setUserInfo.bind(this);
   }
   getUserInfo() {
      return {
         name: this._nameEl.innerText,
         job: this._infoEl.innerText
      }
   }
   setUserInfo({ name, job }) {
      this._nameEl.innerText = name;
      this._infoEl.innerText = job;
   }
}