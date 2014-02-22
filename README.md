Angular Barebone
================

A project scaffold for applications using AngularJS library. Angular Barebone
can run on Apache or NodeJS servers.

Usage
-----

1. Install Node packages:   
   `$ npm install`
2. Install Bower packages:   
  `$ bower install`
3. (a) If you decide to go full Javascript and run your application on NodeJS server
       we got you covered, just run: `$ npm start`
4. (b) If there's nowhere to place your app and apache is available, that's
       okay too, we have included an `.htaccess` file with HTML5 mode on so you
       can take over your application's routing needs.

### Directory Structure

``` shell
jekyll-barebone   # root directory
├── application
│   ├── assets
│   │   ├── css
│   │   ├── fonts
|   │   ├── img
|   |   └── js
|   |        ├── app
|   |        └── lib
|   ├── .htaccess
|   └── index.html
├── server
├── source
├── bower.json
├── Gruntfile.js
├── package.json
└── README.md
```

### Source directory `source/`

source directory is where we place precompiled assets e.g., less, scss, image
files or in other words the  'raw-sources' we then specify and use Gruntfile to
everything that is in here for to their respective destinations in build the
application directory for staging or production use.

**Bootstrap Less:**

Bootstrap less css are placed in `source/less/bootstrap` and an bootstrap main
less file is created in `source/less/bootstrap.less` that imports all bootstrap
components from the bootstrap directory, if you don't intend to migrate to newer
versions or pull massive updates from github then you may edit the less files
in there but if you'd like to stay up to date, just create a new directory with
all your overrides and then import them to your main less file.

**Font-Awesome Less:**

Don't forget to edit `source/less/font-awesome/variables.less` font path and
point it to `/assets/fonts/font-awesome` otherwise fonts will not show up.

Grunt Tasks
-----------

These are the default tasks that Gruntfile executes, you may add necessary tasks
to build your application. You may run `$ grunt` to perform default tasks.

**copy**

it copies all packages downloaded inside `bower_components` which are also 
listed in `bower.json` you may add additional package anytime just make sure 

`$ grunt updatepkg`

**less**

compiles the default Less stylesheet and outputs it to `application/assets/css`
with a full and minified version.

watch:

you may run this while working on your less stylesheets, it watches `source/less/`
directory for file changes and automatically executes the less task that compiles
less stylesheets to css, outputs go to `application/assets/css`.

`$ grunt watchless` or `$ grunt buildless` 

**imagemin**

optimises image files `*.{gif,jpg,png}` and compresses 
these up to 20% less of the the original file size.

`$ grunt buildimg`

**jshint**

watch folders changes and automatically jshint to lint the `.js` filez you're 
currently working on just run

`$ grunt watchjs` or `$ grunt lint`