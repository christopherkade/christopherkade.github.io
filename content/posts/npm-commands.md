---
title: "Lesser known npm commands"
description: "npm pack, view, dedupe & much more."
date: "2019-07-09"
slug: "/posts/npm-commands"
draft: false
category: "Javascript"
tags:
  - "Javascript"  
template: "post"
---

We all know and use `npm start`, `npm audit`, `npm init` and many more `npm` commands on a daily basis, but there are quite a few of them that are underutilized ! This article is here to show you some awesome things you can do with the `npm` CLI.

## `npm pack`

> Create a tarball from a package

If you're developing an `npm` package and want to test if it installs without publishing, running `npm pack` will package your module into a `tgz` file that can be installed using `npm install`.

![npm pack](https://thepracticaldev.s3.amazonaws.com/i/ig80blt6yg7ur05abgjd.png)

📄 [Docs](https://docs.npmjs.com/cli/pack.html)

## `npm outdated`

> Checks for outdates packages

Pretty self-explanatory, it checks the registry if any of the currently installed packages are outdated.

![npm outdated](https://thepracticaldev.s3.amazonaws.com/i/j79740spfxioivjjr6cu.png)

📄 [Docs](https://docs.npmjs.com/cli/outdated.html)

## `npm prune`

> Remove extraneous packages

Removes packages that are not listed on the parent package's dependencies list.

![npm prune](https://thepracticaldev.s3.amazonaws.com/i/t2o0kpgy7cvu2cayto8i.png)

📄 [Docs](https://docs.npmjs.com/cli/prune.html)

## `npm star <pkg>`

> Mark your favorite packages

Allows you to show some love for a given package.  
`npm stars` lists your currently starred packages.

📄 [Docs](https://docs.npmjs.com/cli/star.html)

## `npm view <name> <field>`

> View registry info


![npm view](https://thepracticaldev.s3.amazonaws.com/i/ykiu334due6d8pho3kvt.png)

You may also add any `field` that can be found in a `package.json` such as `dependencies` to view the related information.

📄 [Docs](https://docs.npmjs.com/cli/view.html)

## `npm docs <pkg>`

> Docs for a package in a web browser

How many times did you end up looking for a package's documentation manually? Running `npm docs <pkg>` will automatically open the relevant page for you (only if it is listed in the package's `package.json` file).

📄 [Docs](https://docs.npmjs.com/cli/repo.html)

## `npm dedupe`

> Reduce duplication

Dedupe searches the local package tree and tries to simplify its structure by moving dependencies further up the tree. This way, they can be shared more effectively by multiple dependent packages.

📄 [Docs](https://docs.npmjs.com/cli/dedupe.html)

## `npm completion`

> Tab Completion for npm

Running `npm completion` will display a bash script that will take care of auto-completion of any future npm command. All you have to do is follow the instructions given by the command.  
In my case, `npm completion >> ~/.bashrc` was enough for me to take advantage of that feature !

![npm completion](https://thepracticaldev.s3.amazonaws.com/i/lvy7rb6s1ccprxj0k6l2.png)

📄 [Docs](https://docs.npmjs.com/cli/completion.html)

And that's enough for one day !  

Some of these commands are really, **really** useful in my opinion so I hope you've enjoyed this article.  
If you did, following me on Twitter [@christo_kade](http://twitter.com/christo_kade) is probably the best way of showing your support. I post a lot about some cool open-source things I find, JS & CSS tricks and much more.

Thank you for reading !
