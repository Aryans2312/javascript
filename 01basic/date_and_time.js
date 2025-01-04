let tareek = new Date()
// console.log(typeof tareek);
// console.log(tareek)
// console.log(tareek.toString());
// console.log(tareek.toISOString());
// console.log(tareek.toJSON());
// console.log(tareek.toDateString());
// console.log(tareek.toTimeString());
// console.log(tareek.toLocaleDateString());
// console.log(tareek.toLocaleTimeString());
// console.log(tareek.toLocaleString());
// console.log(tareek.toUTCString());

// let aglitareek = new Date(2003 , 11 , 23) // months start from 0 in js , and this is how you can set a date
// let aglitareek = new Date(2003 , 11 , 23 , 5, 4 ,5) 
// you can give to format to your date to , in that month starts from 1
let aglitareek = new Date("12-23-2003")
// console.log(aglitareek.toLocaleString())


//--------------//timestamp---------------

let mytimestamp = Date.now()
// console.log(Date.now())
// console.log(aglitareek.getTime())

//if i want to get time in sec i will follow the below given format

// console.log(Math.floor(aglitareek.getTime()/1000));
// console.log(Math.floor(Date.now()/1000))

let sabsenayitareek = new Date()
// console.log(sabsenayitareek.getDate());
// console.log(sabsenayitareek.getDay());
// console.log(sabsenayitareek.getHours());
// console.log(sabsenayitareek.getMonth());
// console.log(sabsenayitareek.getTime());
// console.log(sabsenayitareek.getTimezoneOffset());

console.log(sabsenayitareek.toLocaleString('default',{
    weekday : "long"

}));
                                                        







