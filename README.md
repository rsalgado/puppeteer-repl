# puppeteer-repl

A small and experimental REPL for Puppeteer. With this project you can launch a browser instance and page, 
and dynamically run code in an REPL fashion.

I created this project for learning purposes and practice; it was inspired by the ideas from 
[puppeteer-extra-plugin-repl](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-repl)
and more importantly, [puppeteer-debug](https://github.com/nswbmw/puppeteer-debug). I also wanted to have more freedom
in the REPL, because those two projects already assume you want to run methods in a `page` instance, whereas here
you can run more arbitrary code.

Additionally, the article [3 different ways to debug puppeteer code](https://github.com/berstend/puppeteer-extra/wiki/How-to-debug-puppeteer) from
the `puppeteer-extra` wiki has useful tips on how to debug and even achieve an REPL-like experience
using Chrome's inspector. Bear in mind that this is done because when you use breakpoints or `debugger` statements
it is not possible to perform most actions, as promises/`await` **don't resolve** when the code is paused and, **most of Puppeteer's code is based on promises**. 
That link, offers a workaround to run code in a REPL fashion in the inspector's console.

I'd recommend checking the previous article instead of using this project, as I did it for personal
and learning purposes only.

## Running
```bash
$ npm run start

# Or alternatively
$ node index.js
```
