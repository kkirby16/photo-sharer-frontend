# React Project - Photo Sharing app

I built a photo sharing app which has some similarities to Instagram. This app has a rails backend and a React/Redux/Thunk frontend. It also uses Active Storage for image upload ability.

I've always liked Instagram and posting my own photography there. So, for my final project I decided to make an app that's similar to Instagram in ways.<br><br>

###

###

## Overview of functionality

This app has signup, login and logout functionality. It allows users to see posts that other users have uploaded, like posts, comment on posts, and search posts by username.

It also allows you to share your own posts that contain an uploaded image and a caption, as well as delete your posts if you'd like. Additionally, you can unlike posts you've liked and delete comments you've made on posts.

I've also added custom CSS to style my frontend.

## Built with:

-React

-React Router and RESTful Routing

-Redux

-Ruby on Rails API

-Redux-thunk middleware

-Active Storage for image upload

-Custom CSS

## To install and run:

-I have two repos that you need to get into to run my app: a backend one and a frontend one

-Fork and clone the backend repo at this link: https://github.com/kkirby16/photo-sharer-backend

-Once in the program, open the terminal and run bundle install.

-Next, run rake db:migrate and rake db:seed.

-Then, run rails s -p 4500

-Next, fork and clone the frontend repository at this link: https://github.com/kkirby16/photo-sharer-frontend

-Run npm start

-You'll then see my site open in the browser.

## How to use the site:

-When the site opens in the browser, you'll come to a greeting page with some descriptive text and buttons for signup and login.

-Click signup to go to the signup page which will allow you to signup. There is also a link on this page that goes to the homepage.

-If a user has used the site already and has an account, they can choose to login by clicking the login button instead. There is also an option to click a link that takes you to the homepage from here.

-Once you're logged in you can upload towards the top of the screen by choosing an image to upload from your computer and writing a caption for the post.

-Once created, you'll see the post you just made towards the top of the screen. You can delete posts you've made by clicking the trashcan icon underneath the post.

-You can also scroll down and see posts others have potentially posted, although if nobody else has posted from an account yet, you'll just see some test posts that I created with the seeds file.

-You can like posts by clicking the heart icon underneath them, and you can also comment on posts by typing in a post's "Add a comment..." input box and pressing the "Post" button. Comments made on posts will be displayed underneath the "Add a comment..." input box. You can also unlike a post you've liked by clicking the red heart icon and you can delete comments you've made on a post by clicking the trashcan icon to the right of the comment.

-You can search posts by username in the search bar at the top of the site.

-If you want to logout of the site, you can press the icon in the top right corner of the screen.

Video of how to use my app: https://youtu.be/cJb1p153Y-0

Blog I wrote related to this project: https://dev.to/kkirby16/how-i-can-like-posts-in-my-instagram-esque-rails-react-redux-app-pcl

This project is licensed under: https://www.gnu.org/licenses/gpl-3.0.en.html
