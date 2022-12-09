const array = ['|', '/', '-', '\\','|', '/', '-', '\\'] 
let time = 0

for (let animation of array) {
  setTimeout( () => {
    process.stdout.write(`\r${animation}   `)
  }, time += 100)
}
/* 

1.) create an array to hold your animation characters
2.) create a time varaible to hold time and later increment your animation by with timeout
3.) use a loop to go through your array
4.) use your set timeout from spinner 1 but implement your array with your animation elements!
5.) increment the time in set timeout per character by whatever you want with +=


*/