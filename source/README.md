
source
------

`source/`

source directory is where we place precompiled assets e.g., less, scss, image
files or in other words the  'raw-sources' we then specify and use Gruntfile to
everything that is in here for to their respective destinations in build the
application directory for staging or production use.


### img


### less/

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