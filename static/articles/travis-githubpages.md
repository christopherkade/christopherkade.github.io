# Automatically deploying a website to Github pages using Travis CI

**Travis CI** is a continuous integration service used to build and test software hosted on Github.  
In this blog post I'll briefly cover the subject of Continuous Integration and explain step by step how to deploy your project to Github pages using Travis.

Table of contents:

- [What is Continuous Integration?](#ci)
- [How to deploy a website to Github pages using Travis CI](#howto)
  - [Activate Travis on your Github repository](#activate)
  - [Configure the CI process for your repository](#configure)
  - [Trigger your first Travis CI build](#trigger)

## <a name="ci"></a> What is Continuous Integration?

Continuous Integration, or CI for short is the development practice of automating the build and testing of code every time a team member commits changes to their version control system.

This diagram represents the process pretty well:

<p align="center">
  <img width="460" height="300" src="https://user-images.githubusercontent.com/15229355/47021076-04f20880-d15b-11e8-8667-1dada62a08af.png">
</p>

## <a name="howto"></a> How to deploy a website to Github pages using Travis CI

In my specific case, I wanted to automate the deployment process for the website you're currently visiting.  
In other words, for each new article or change to the website itself, I wanted to test, build and deploy it to Github pages to keep it up to date.

I turned to Travis CI for multiple reasons, it's free, easy to set up and the web client is practical.

So, how did I do exactly what I wanted?

### <a name="activate"></a> Step 1: Activate Travis on your Github repository

- Simply go to Travis-ci.com and Sign up with Github.

- Accept the Authorization of Travis CI. You’ll be redirected to GitHub.

- Click the green Activate button, and activate the repositories you want to use with Travis CI.

### <a name="configure"></a> Step 2: Configure the CI process for your repository

To do so, add a `.travis.yml` file at the **root** of your repository, this file will basically tell Travis what to do and in what order.  
Thankfully, the process is simplified, especially when it comes to deploying to Github pages, take a look at this example:

```yaml
# Important for the Travis container set up
language: 'node_js' # Language used by the project
node_js: '8' # Node version used

cache:
  directories:
    - 'node_modules' # Travis will cache node_modules so it doesn't reinstall them every time

# Lifecycle job, will execute the actions bellow before the build and deployment.
# Find other build lifecycle hooks here: https://docs.travis-ci.com/user/job-lifecycle
before_script:
  - npm run lint

# This is where the magic happens, Travis handles Github pages deployment automatically
deploy:
  provider: pages # Tells Travis we're deploying on Github Pages
  skip-cleanup: true # Make sure you have it set to true
  github-token: $GITHUB_TOKEN # See notes bellow
  local_dir: dist # The directory to deploy
  repo: github_username/repository_name # For example christopherkade/christopherkade.github.io
  target_branch: master # Branch to be deployed on
  on:
    branch: code # Deployement only triggered when code is pushed on the code branch
```

Note that the `$GITHUB_TOKEN` must be set up directly in the repository's Settings on the Travis client.

To get that token, follow these brief [instructions](https://docs.travis-ci.com/user/deployment/pages/#setting-the-github-token).

### Step 3: <a name="trigger"></a> Trigger your first Travis CI build

To do so, start by adding, committing and pushing your `.travis.yml` file to Git.  
You can now go back to the Travis client and see your build status.

If said build fails for reasons you cannot understand through the logs, feel free to check out [common build problems](https://docs.travis-ci.com/user/common-build-problems/).

If not, your Github page is now up and running thanks to the `deploy` statement in your configuration file. The deployment is visible as one of the very last logs of your build.

I hope this was useful to some of you, as discovering CI has truly made my development process more enjoyable as a whole.

Have a good one :-)  
[@christo_kade](https://twitter.com/christo_kade)
