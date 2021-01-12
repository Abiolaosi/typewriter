// const sentence = "hello there from lighthouse labs";

// for (const char of sentence ) {
//   console.log(char);

// }
// ------------------------------------
// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   process.stdout.write(char);
// }
// ---------------------------------
// const sentence = "hello there from lighthouse labs";
// setTimeout(function(){
//   for (const char of sentence){
//     process.stdout.write(char);
//   }
// }, 1000);
// for (const char of sentence) {
//   process.stdout.write(char);
// }

// ---------------------------------
// Fixing the NewLine At The End

// We still have one last thing to implement. It would be nice of the program to output a newline character before exiting, so that the next prompt starts on its own line.

// Fix the bug we identified earlier by adding a newline character at the end of the animation.

// Tip: We can use console.log, or write \n to stdout. That said, we can't output this character until all the characters are written out to stdout.
let interval = 0
const sentence = "hello there from lighthouse labs";
for (const char of sentence ) {
  setTimeout(() => {
    process.stdout.write(char)
  } ,interval)
  interval += 500;
  
}

setTimeout(() => {
 console.log("\n")
} ,500 * sentence.length);