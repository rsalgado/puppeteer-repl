// TODO: Read https://nodejs.org/api/repl.html and consider using it instead of readline
// if it makes more sense to do so.

const readline = require('readline');
const puppeteer = require('puppeteer');

// Main IIFE (this was done in order to use `await` instead of the promise API)
(async () => {
  // Basic configuration for the readline interface
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">> "
  });

  // Launch browser and create a page instance
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  // Register callback handler for prompt 'line' event
  rl.on("line", (line) => {
    // Run line code inside of an async IIFE. This will return a promise
    eval(`(async () => {
      console.log(${line});
    })()`)
    .catch(error => console.error(error))   // Catch possible errors
    .finally(() => rl.prompt());            // Show a new prompt always
  });

  // Register callback handler for prompt 'close' event
  rl.on("close", () => {
    console.log("**Leaving the Puppeteer REPL...**");
    browser
      .close()
      .then(() => 
        rl.close()
      );
  });

  // Show initial prompt
  console.log("**You are now in the Puppeteer REPL**");
  rl.prompt();
})();
