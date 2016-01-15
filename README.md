The live site is hosted on Heroku: [http://brandlivingstyleguide.herokuapp.com](http://brandlivingstyleguide.herokuapp.com/)

Brand Living Style Guide: What is it?
======================================
A Living Style Guide is a library of modular components that can be easily reused by any developer working on a site's UI, supporting efficiency, code reuse, and brand consistency. The site is architected to make changing colors, fonts, grid systems, etc. as simple as updating a single variable. The modules are organized into semantically named and easily understood files and folder structures in a repo that can easily be pulled in to other projects via [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). The concept is based on successful predecessors, such as [Primer](http://primercss.io/), [Mail Chimp's style guide](http://ux.mailchimp.com/patterns), and many others that can be found at [styleguides.io](http://styleguides.io/examples.html). 

To build out the style guide, I used the Node.js platform with Express as the framework, built the views with Jade, styled with Sass and CSS, and designed a custom grid system.

This Living Style Guide incorporates:

* [SMACSS](https://smacss.com/) conceptual framework (SMACSS = Scalable and Modular Architecture for CSS, isolating concepts like typography, forms, components, layouts, etc ...)

* Sass and Sass Modular Architecture

* A view exposing each key foundation of the UI and highlighting the HTML/CSS/JS code/syntax making up each component

* ARIA-friendly, semantic, HTML5 and CSS3

* Lightweight, but does contains some functional JavaScript components utilzing jQuery and the D3 library (easily forked and removed if this is not a need)

* Built in a Node/Express development environment, utilizing Angular routes and views

Please feel welcome to use, fork, or contribute to this library... it is a work in progress!

To install, run, and contribute: 1) Clone and run 'npm install' and 'bower install' 2) Run 'grunt' 3) Navigate to localhost:3000 
