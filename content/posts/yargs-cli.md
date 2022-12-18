---
title: "Building a CLI with Yargs"
description: "YAAARG(S) MATEY!"
date: "2019-02-07"
slug: "/posts/yargs-cli"
isPublished: true
category: "Tutorial"
tags:
  - "Tutorial"
  - "Javascript"
template: "post"
---

[Yargs](http://yargs.js.org/) is a great library to build command line apps, simply put, it will make the process of creating an application that runs in the console a breeze. What could make it even better? It's PIRATE themed (it's called YARgs you guys), making it officially the best tool ever.

You may know other CLIs such as [vue-cli](https://cli.vuejs.org/) to easily set up a Vue.js project or [create-react-app](https://facebook.github.io/create-react-app/), so the concept should be familiar to most of you.

In today's article we'll be creating a basic CLI from start to finish covering the following points:

- [Project set up](#setup)
- [Creating a basic CLI](#cli)
- [Deploying our CLI to NPM](#deploy)

<br><br>

## <a name="setup"></a> Project set up

Setting up the project is very easy, start by doing the following:

```bash
mkdir yargs-project
cd yargs-project
npm init -y
```

We now have created our project's folder and initiated the `package.json` file that contains its meta data.

Here's the file that was created:

`package.json`:

```json
{
  "name": "yargs-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\"
      && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

We need to do a few adjustments to this file since we're creating a CLI. It should now look like this:

```json
{
  "name": "yargs-example",
  "version": "1.0.0",
  "description": "A simple Yargs CLI",
  "bin": {
    "yargs-example": "./yargs-example.js"
  },
  "keywords": ["cli"],
  "preferGlobal": true,
  "author": "Christopher Kade",
  "license": "ISC"
}
```

Here are the important changes to note:

- We've added a `bin` value, which maps the entry file we'll create later to its executable name (you can set it to whatever you'd like)
- We've set `preferGlobal` to true, meaning that our package would prefer to be installed globally (via `npm install -g` for example)

Other tweaks include changing the `description`, removing usuned `scripts`, adding an `author` name etc.

Before we can start coding our CLI, we need to install `yargs`, do it like so:  
`npm install yargs`

Let's get to it.

<br><br>

## <a name="cli"></a> Creating a basic CLI

Yargs makes it very easy to parse command line parameters, many example projects can be found [here](https://github.com/yargs/yargs/blob/master/docs/examples.md).

We'll create a basic CLI that takes in a file as parameter and counts the number of lines it has.

To do so, start by creating our main script file.  
`touch yargs-example.js`

And fill it with the following:

```js
#!/usr/bin/env node
const argv = require("yargs")
  .usage("Usage: $0 <command> [options]")
  .help("h")
  .alias("h", "help").argv;
```

Let's cover everything line by line:

1 - `#!/usr/bin/env node` is an instance of a shebang line that tells our system what interpreter to use to execute that file.

2 - `const argv = require("yargs")` imports the `yargs` package.

3 - `.usage('Usage: $0 <command> [options]')` sets the usage information of your CLI that will be displayed when the `--help` command is called.

4 - `.help('h')` binds the help command to the option `h`.

5 - `.alias('h', 'help')` creates an alias for the option `-h`, namely `--help`.

As you can see, this first step is extremely simple, and `yargs` syntax is intuitive.

<br>

Next we'll add the `count` command.

Just add the following lines to your already existing CLI:

```js
.command("count", "Count the lines in a file")
.example("$0 count -f foo.js",
  "count the lines in the given file")
```

Once again, let's review them line by line.

1 - `.command("count", "Count the lines in a file")` creates a new command with the name `count` and sets a description.

2 - `.example("$0 count -f foo.js", "count the lines in the given file")` creates an example with a description, it will be displayed when the user calls the `--help` option or when they mess up the command.

<br>

That's all great, but right now running `node yargs-example.js count` doesn't do much, next up we'll require a file name and finish the CLI by counting and displaying its number of lines.

To do so, add the following:

```js
.alias("f", "file")
.nargs("f", 1)
.describe("f", "Load a file")
.demandOption(["f"])
```

Your file should end up looking like this:

```js
#!/usr/bin/env node
const argv = require("yargs")
  .usage("Usage: $0 <command> [options]")
  .command("count", "Count the lines in a file")
  .example("$0 count -f foo.js", "count the lines in the given file")
  .alias("f", "file")
  .nargs("f", 1)
  .describe("f", "Load a file")
  .demandOption(["f"])
  .help("h")
  .alias("h", "help").argv;
```

1 - `.alias("f", "file")` creates the alias `--file` for the `-f` option.

2 - `.nargs("f", 1)` sets the requirement of one argument for that option (the file name), otherwise display the `--help` menu.

3 - `.describe("f", "Load a file")` adds a description for the option.

4 - `.demandOption(["f"])` since we'll need a file name, we're demanding the option `-f`.

<br>

Finally, let's add the program's logic like so:

```js
const fs = require("fs");

// Create stream with the file
const s = fs.createReadStream(argv.file);

var lines = 0;
s.on("data", (buf) => {
  // Get the number of lines
  lines += buf.toString().match(/\n/g).length;
});

s.on("end", () => {
  // Display the number of lines
  console.log(lines);
});
```

And that's it, let's test it out.

```sh
$ node line-count.js -f package.json
21
```

Up until now, we've been running our program this way, but if we tried running it by calling it directly we would get an error.

```
$ line-count count -f package.json
zsh: command not found: line-count
```

We can fix that by registering the binary (that we defined earlier as `bin` in the `package.json`) globally using the `npm link` command.

In your application's directory, run the following:  
`npm link`

Hurray ! You can now run your script locally like so:  
`yargs-example count -f package.json`

<br><br>

## <a name="deploy"></a> Deploying our CLI to NPM

Before deploying it, we'll need to add some information to our `package.json`.

```json
"homepage": "YOUR GITHUB REPO OR SITE HERE",
"repository": {
  "type": "git",
  "url": "git+YOUR GITHUB REPOSITORY HERE"
},
"engines": {
  "node": ">=8"
},
```

Don't forget to replace the `homepage` and `repository` info with your own, this will allow the npmjs.com website to fill up your future project's page.

The `engine` value simply defines the minimum version of node your project should work on. Set it to whatever your project requires (depending on what JS features you may end up using, such as `async/await`).

Here are the next steps:

- Create an account on npmjs.com
- Run the `npm login` command and input your information
- Run the `npm publish` command which will automatically publish it in a matter of minutes

That's it ! If you wish to update your project in the future you'll need to change its version number in the `package.json` file and then run the publish command again.

You now have your own NPM package published and accessible to the community, congrats !

If you have any questions, feel free to ask them on twitter [@christo_kade](https://twitter.com/christo_kade).

Thank you for reading :-)
