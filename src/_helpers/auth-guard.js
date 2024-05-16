import router from "@/router";
import { accountService } from "@/_services/account.service";

export function authGuardPublic() {
  let token = localStorage.getItem("token");

  if (token) {
    const userToken = accountService.jwtRoleId(token);
    // console.log("userToken : " + userToken.userId);
    if (userToken.roleId == 1) {
      return true;
    } else {
      router.push("/login");
      return console.log("you dont have the good token to acces has public");
    }
  }
  router.push("/login");
  return console.log("you dont have token");
}

export function authGuardAdmin() {
  let token = localStorage.getItem("token");

  if (token) {
    const userToken = accountService.jwtRoleId(token);
    // console.log("userToken : " + userToken.userId);
    if (userToken.roleId == 2) {
      return true;
    } else {
      router.push("/login");
      return console.log("you dont have the good token to acces has admin");
    }
  }
  router.push("/login");
  return console.log("you dont have token");
}
