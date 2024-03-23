var employee =["employee 1","employee 2"]
interface AddressType {
    streetName : string ;
    city : string ;
    country :string;
    zipCode: string ;}

type userType ={
    firstName :string ;
    lastName : string ;
    cnicNo : number ;
    isEmployee : boolean ;
    day : string [] ;
    Address : AddressType ;

    
}
var user1 : userType = {
firstName : "sonia",
lastName : "anis",
cnicNo : 123456789 ,
isEmployee : true ,
day: [ "monday" , "friday"] ,
 Address : {
    streetName : " johar street",
    city : "karachi"  ,
    country :"pakistan",
    zipCode: "7520" }
}
type userType2 ={
    firstName :string ;
    lastName : string ;
    cnicNo : number ;
    isEmployee : boolean ;
    day : string [] ;
    Address : AddressType ;

    
}
var user2 : userType = {
firstName : "syed",
lastName : "usman",
cnicNo : 987654321 ,
isEmployee : true ,
day: [ "monday" , "friday"] ,
 Address : {
    streetName : " sheike zayed street",
    city : "sharja"  ,
    country :"dubai",
    zipCode: "25314" },}

    console.log(employee);
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.cnicNo);
console.log(user1.isEmployee);
console.log(user1.day);
console.log(user1.Address);
console.log(
    user1.day[1],
    user1.Address.city,
    user1.day[0],
    user1.Address.country


);

console.log(employee);
console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.cnicNo);
console.log(user2.isEmployee);
console.log(user2.day);
console.log(user2.Address);
console.log(
    user2.day[1],
    user2.Address.city,
    user2.day[0],
    user2.Address.country


);




