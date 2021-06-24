# Progress

See the `SourceFiles/assignment.md` file for what the end product needs to look like.

## Status
Currently in the `dev` branch.

## To-Do
* styling/content
  - [ ] 3. Make the style look like the mockup.
    - [ ] 3a. The "Available for hire" needs to be in red. (For this, see: https://github.com/takaides/robotUsers)
    - [ ] 3b. The way the skills are listed do not match the way they're listed in the mockup.
    - [ ] 3c. The mobile version of the profile page doesn't match the mockup. make the mobile version match the mockup. Among the changes that are needed are the font size. 
    - [ ] 3d. The mobile version of the home page doesn't exist. Make the mobile version of the home page.mustache, and the /views/profile.mustache files.
  - [ ] 4. Clean up the comments and unneeded code.
  - [ ] 5. Clean up the `/public/css/style.css` file.
  - [ ] 6. Remove the `/public/css/copy_style.css`, `/views/copy_profile.mustache`, `/views/copy_profile_available` files.
  - [ ] Clean up the  `README.md` file.
  - [ ] Update gh-pages or delete the branch. (`git branch -d gh-pages` & `git push origin --delete gh-pages` from https://trello.com/c/XZXUcEjo/757-read-up-on-deleting-old-github-branches)

* coding
  - [ ] Create an `error` page such that `response.render('error', {})` is used in the `main.js` file. Rather than the `response.status(404).send()` method that is currently being used.

## Completed
- [X] Remove/delete the `temp/` directory.
- [X] Delete the `host` branch.
- [ ] ~~Host this project on Netlify. See: https://github.com/JamieBort/LearningDirectory/tree/master/Hosting/Netlify~~ This didn't work out.
- [X] Move files around such that
  * Move the `images/` directory and the `Assignment.md` file into the `SourceFiles` directory.
  * add a `SourceFiles/README.md` file and add a `Directory and Files` section to it.
- [X] 8. Remove the 'old' directory.
- [X] 1. Add code so that the url is displayed on the page; either with innerHTML and/or using window.location.href. See the [Node JS Tutorial for Beginners #25 - Template Engines](https://www.youtube.com/watch?v=oZGmHNZv7Sc) YouTube video to accomplish that. Use a unique branch for this.
  * Use `url` as a branch name.
- [X] 2. Come back to identify what is the model, what is the view, and what is the controller. See `/LearningDirectory/SoftwareDesignPatterns/MVC/`. `data.js` is the model. `home.mustache` is a view. `profile. `main.js` is the controller.mustache` is a view.
  - [X] 7. Update the README.md with the Heroku [link](https://vast-island-13423.herokuapp.com/).
  - [ ] 10. ~~Update gh-pages.~~ gh-pages will no longer suffice for this repo on account of using Node. gh-pages serves only static sites.
  - [ ] 9. ~~Find out if `gh-pages` is still a thing. If it isn't delete that branch.~~ It is still a thing. However, it will no longer suffice for this repo on account of using Node. gh-pages serves only static sites.
  - [ ] ~~"Push" the `main.js` file data to the `index.html` file. Use `git push origin <branch current name pushing from>:gh-pages` to do this. So that gh-pages will work. If this works, then I wont need `https://dashboard.heroku.com/apps/create-a-user-directory` until a database is used.~~ gh-pages will no longer suffice for this repo on account of using Node. gh-pages serves only static sites.
  - [X] Change the name of the `CreateAUserdirectory` repo to `CreateAUserDirectory`. Better yet, change it to `Create A User Directory`. Done. Changed it to `Create A User Directory`.