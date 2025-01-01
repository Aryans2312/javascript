const accountID = 2312
let accountEmail = "aryanstyagi@gmail.com"
var accountPassword = "12345"
accountCity = "Bhopal"
let accountState ;
//accountID = 2
/* prefer not to use var because of issue in block scope and function scope */

console.log(accountID);

console.table([accountEmail , accountPassword , accountID , accountCity , accountState]);