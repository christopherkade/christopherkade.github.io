# Understanding the Node.js Event Loop

Next week, I will be presenting Node's Event Loop system (we'll call it the EL from now on) during a [BBL](https://www.hrzone.com/hr-glossary/what-is-a-brown-bag-lunch) organized by [Zenika](https://www.zenika.com/). I chose this subject as I always wanted to delve deeper in my understanding of it and this was the perfect opportunity to do so.

This blog post is a textual representation of what I will say using the following [slides](https://slides.com/christopherkade/deck-1/fullscreen).

## Why learn about the Event Loop?

It's always a good thing to understand how the tools we use work on a lower level. In the case of the EL specifically, it would allow me to understand the workflow of one of the runtimes I use the most which, in time, could help me debug my code more efficiently.

## Summing up the Event Loop

Let's sum up the EL beyond what you'd find on Google images, as checking "Node.js Event Loop" often gives out a rather high-level representation of the process like so:

<p align="center">
  <img width="460" height="300" src="https://user-images.githubusercontent.com/15229355/51047335-80335100-15c8-11e9-88b4-51a4e4f91e06.png">
</p>

The Event Loop could be represented as a postwoman/postman delivering a pile of letters, she/he would give out the first letter to its recipient, **wait until it finishes reading it** and would move on to the next person.

See how I pointed out part of that statement? That's because the **Event Loop executes only one task at a time**. This is extremely important as we will see later on when it comes to performance and the way we design our applications.

Before moving on, it's important to note that Node.js is composed of the following blocks:

<p align="center">
  <img width="260" height="100" src="https://user-images.githubusercontent.com/15229355/51047832-bcb37c80-15c9-11e9-8058-ce1b05f9f7c2.png">
</p>

The **Event Loop**, a layer of **C++** (used for Chrome's V8 engine) and a layer of **Javascript**.

When the EL received a message to execute, it passes through that layer of C++, to the JS, executes it and then goes back to the EL like so.

<p align="center">
  <img width="400" height="100" src="https://user-images.githubusercontent.com/15229355/51048338-00f34c80-15cb-11e9-9cfb-956d76246006.png">
</p>

An important parts of this process are the following two queues: the **nextTickQueue** (NTQ) and the **microTaskQueue** (MTQ).

<p align="center">
  <img width="400" height="100" src="https://user-images.githubusercontent.com/15229355/51048451-4152ca80-15cb-11e9-9c24-e431ba9b9063.png">
</p>

The NTQ contains callbacks used with `process.nextTick(callback)` and the MTQ contains all callbacks used with the resolution of a promise via `.then(callback)`, `.catch(callback)` and `.finally(callback)`. So when one of these is called, its callback is added to its respective queue to be executed later.

When do they get executed you may ask?  
Whenever the back and forth we mentioned earlier is done, it checks the queues, executes any existing callback and then resumes its work.

This brings up our second very important point: **when Javascript is running, the Event Loop is not**. This is also known as the Event Loop delay.

Here's some code to illustrate:

<p align="center">
  <img width="400" height="100" src="https://user-images.githubusercontent.com/15229355/51048951-bd014700-15cc-11e9-9799-b6ab13cf99be.png ">
</p>

As you can see, the rather large `for` loop blocks any other execution (that includes I/O, HTTP requests etc.) for its whole duration.

We've summarized the Event Loop pretty well, let's talk about its architecture.

## The Event Loop's architecture

When most developers think of the EL, they usually visualize a single stack or queue. This is actually a misconception (that even I had in the past) as it is composed of multiple queues (or queue-like structures) like so:

<p align="center">
  <img width="400" height="100" src="https://user-images.githubusercontent.com/15229355/51109357-4e530200-17f5-11e9-8976-fe754a7092eb.png">
</p>

Each one of these queues have their own purpose that I'll cover without going into too much detail. For more detail, visit [the official documentation](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#phases-in-detail).

### Timer

The start of the loop, handles timer related callbacks from [`setTimeout`](https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args) and [`setInterval`](https://nodejs.org/api/timers.html#timers_setinterval_callback_delay_args).

### Pending I/O callbacks

Handles the execution of some system callbacks, for example, a TCP error would be queued here.

### Idle, prepare

Handles internal operations for Node.

### Poll

This phase handles data related operations (such as a file read) and new connections (such as a new socket).

### Check

Handles [`setImmediate`](https://nodejs.org/api/timers.html#timers_setimmediate_callback_args) callbacks.

### Close callbacks

Handles callbacks related to closing, such as `socket.on('close', () => {})` when a socket or handle is closed abruptly.

There is so much more to these phases, I truly recommend to read up on them in the documentation linked earlier as each phase has a different way of handling callback execution.

## Things to remember from this article

We covered some very important points in this article, so here's a TL;DR to remember:

- The Event Loop executes only **one** task at a time
- When Javascript **is running**, the Event Loop **is not** (as they both run on a single thread)
- The Event Loop is composed of **more than one** queue (or queue-like structure)

Thank you so much for taking the time to read this article, I hope it has taught you on a lower level the workings of Node's Event Loop system. Researching on it helped be grasp some concepts that will probably be of use in my future projects.
