---
title: How to Use
publishedOn: 2020-03-01
---

# How to use this website

### Svelte and Sapper

This website, like all websites, is written in HTML, CSS, and Javascript. This section focuses on the last language, Javascript. As far as programming languages go, Javascript is one of the most used in the industry, so I won't blame you if you're surprised to find out that it's actually one of the [most hated programming languages ever](https://hackernoon.com/the-javascript-phenomenon-is-a-mass-psychosis-57adebb09359). Javascript is such a pain in the butt to use, that for anything non-trivial, most developers use [libraries](https://www.techopedia.com/definition/3828/software-library) to help lessen the burden. For this website I too used a library... well sorta. I actually used a tool called Svelte, which is actually a Javascript compiler. What this means is that I would write all of my code in ```.svelte``` files instead of the usual ```.html``` files. Svelte would then *compile* the ```.svelte``` files into the appropriate HTML, CSS, and Javascript files. To help deal with blog posts (a problem known as dynamic routing) I used a framework built by the same team that built Svelte called Sapper.

Check out the Svelte documentation [here](https://svelte.dev).
Check out the Sapper documentation [here](https://sapper.svelte.dev).

### Portfolio

The portfolio is what's called a flat file blog. This means that every single project in your portfolio is listed in its own file. The project file is written in a language called *markdown*. The markdown is parsed by javascript and turned into HTML that then gets displayed in your browser. This post that you're reading right now was written in markdown!

Let's add a new project together!

1. Go to the folder ```/content```.
2. Create a new file named ```this-is-a-test.md```.
3. Each markdown file needs data about itself in order to work. We can add that data at the top of the file like so: 
```
    ---
    title: This is a test
    publishedOn: 2020-03-01
    ---
```
Make sure to change the date to todays date, it should follow the format yyyy-mm-dd.
4. Below the *frontmatter*, the name for what we just created, we can begin to add some data. Grab some filler text from [Hipsum](https://hipsum.co) and paste it below the front matter.
5. Save the file and navigate to the portfolio section of your site. You should see the new post now!
6. Lets add an image just to see how that works. We will use your logo since it's already available in the project. In the markdown file on a new line, enter ```![My logo](images/nw-logo.svg)```. Save and refresh the page in the browser.

That's it! You now know how to add pieces to your portfolio. To delete portfolio pages, just delete the accompanying markdown file.

For tips on how to use markdown, [check out this guide!](https://www.markdownguide.org/basic-syntax/)