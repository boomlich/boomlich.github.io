---
layout: post
title:  "Personal website"
short_description: "static website"
thumbnail_image: "/assets/images/project_thumbnail_pers-website_01.png"
github: "https://github.com/boomlich/boomlich.github.io"
tags: "web javascript"
categories: game, java
collection: projects

tldr: true
tldr_desc: "Personal webpage for displaying my projects"
tldr_lang: "Javascript, Liquid, html, scss"
tldr_tools: "VScode, jekyll"

---
The current website you are on. It was created to display and present my projects. 

This website was built using `Jekyll` static site generator and hosted on GitHub pages. The benefit of choosing Jekyll is that it is closely integrated with Github pages, which offer free website hosting. Additionally, Jekyll allows me to create a static website that is fast to load and easy to maintain and update. 

To add a new project, I only have to make a new markdown file, and `Jekyll` generates a new static HTML document for that post with all the layout and style as specified by the theme.

### Displaying my projects with javascript

For displaying the project cards and make them interactive, I used javascript. This includes the tag-filtering, allowing the user
to display only the projects with the desired tag. Also, the video playback when the mouse hovers over a tile was custom javascript.

### Building an resume with json

Another perk of using `Jekyll` is that it works well with `JSON` files. Through its `liquid templating language` I was able
to turn data into a complete resume. 

Here is an example of the JSON data for one an entry in my resume:
``` json
{
    "start":"Aug 2022",
    "end":"Present",
    "title":"Teaching assistant",
    "description":"Leading group sessions and teach students",
    "vacancy":"Part-time",
    "company":"University of Bergen",
    "company_logo":"/assets/images/resume/resume_logo_uib.svg",
    "industry":"Education"
}
```
Resulting in the following resume panel:

{% assign entry=site.data.resume.work[0] %}
{% include resume-panel.html 
    start=entry.start end=entry.end title=entry.title description=entry.description vacancy=entry.vacancy
    company=entry.company company_logo=entry.company_logo industry=entry.industry %}

