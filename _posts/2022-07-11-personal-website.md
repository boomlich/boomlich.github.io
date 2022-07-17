---
layout: post
title:  "Personal website"
short_description: "static website"

thumbnail_img_webp: "/assets/images/project_thumbnail_pers-website_01.webp"
thumbnail_img_png: "/assets/images/project_thumbnail_pers-website_01.png"


github: "https://github.com/boomlich/boomlich.github.io"
tags: "web javascript"
categories: game, java
collection: projects

tldr: true
tldr_desc: "Personal webpage for displaying my projects"
tldr_lang: "Javascript, Liquid, html, scss"
tldr_tools: "VScode, jekyll"

---
The current website you are on. I created it to display and present my projects.

This website was built using `Jekyll` static site generator. The benefit of choosing Jekyll is the close integration with `Github Pages`, which offers free web hosting. Additionally, Jekyll allows me to create a static website that is fast to load and easy to maintain and update.

To add a new project, I only have to make a new `markdown` file, and Jekyll generates a new static HTML document with all the layout and style specified by the theme.

### Making my projects interactive with javascript

Each project is showcased as a card on the "home" and "projects" pages. Hovering the mouse over a card will play a brief demo video of the project. Additionally, the cards can be filtered by their tags. Clicking the "Java" filter button will hide all other unrelated projects.

Projects with available downloads feature a download panel. Only the download link available to a specific operating system is displayed. For example, a Windows user will only see the Windows versions. Here is a demo download-panel:

{% include download-file.html 
    title='Website' version='1.3.5 / 17.07.22'
    win_installer='demo-installer' win_installer_size='295 KB'
    win_zip='demo-zip' win_zip_size='2 MB'
    mac_installer='demo-installer' mac_installer_size='395 KB'
%}

Javascript is used to detect the operating system of the user and automatically serve the correct download link. Furthermore, javascript enables switching between OS download versions.

### Building an resume with json

Another perk of using Jekyll is that it works well with `JSON` files. Through [Liquid templating language](https://shopify.github.io/liquid/){:target="_blank"} I turn data into a complete resume. 

Here is an example of the JSON data for one entry in my resume:
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

