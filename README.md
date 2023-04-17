# personnal website


## To run locally (not on GitHub Pages, to serve on your own computer)

1. Clone the repository 
1. Install Jekyll [How to](https://jekyllrb.com/docs/installation/)
1. Run `bundle clean` to clean up the directory (no need to run `--force`)
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `bundle exec jekyll liveserve` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

## To build it for CREATIS personnal webpage publishing (not on GitHub Pages)

1. Run `bundle exec jekyll clean`
1. Run `bundle exec jekyll build --config _configCREATIS.yml`

All the website ready to be published is located inside the '_site' folder.

1. Connect to tux (using your SSH key etc..) with FileZila
1. Copy/Paste the content of your '_site' folder into the remote 'public_html' folder
1. Connect with SSH to tux
1. Inside your home folder, run `chmod 755 -R public_html/`

Finally, check that all works by going on creatis.insa-lyon.fr/~yourName/
