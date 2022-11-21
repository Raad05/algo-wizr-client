# AlgoWizR

### Features:
- It will contain a navbar with the options: website logo, website name, Courses, FAQ, Blog, toggle theme (dark/ light), and User Profile Picture (or login). The user profile picture on the navbar is conditional. If the user is signed in, the navbar will show the profile pic. The user's name will be visible when the mouse is in the picture.
- After clicking "Log in," it will redirect to a login page. 3 types of login systems will be implemented: Email & password login, Google, and GitHub login. The login page will have a toggle option to go to the register page. 
- In your Email and Password registration form, there will be an input box for "Full name," where the user will type their full name. Other fields will be Email and Password.
- Clicking "Courses" in the navbar will redirect to a page that shows the courses. 
- The Courses page will be divided into two parts: a sidebar & content detail section. In the sidebar, the courses will be shown. Every option is clickable. 
- By clicking an option, It will take you to the course detail page. All details must be relevant to the topic. 
- There will be a button at the bottom of the content detail called "Get premium access." Clicking the button will take the user to the Checkout route. This route will be a private/protected route.
- The private route redirects to the login page if the user is not logged in. After login, the user will be redirected to the checkout page.
- The checkout page will be a dynamic route with route parameters having the id of the content that the user had clicked. On the checkout page, the name based on the id will be displayed.
- If we reload the protected/private route, this page will not redirect the user to the login page. Instead, it will keep the logged-in user on the protected route.
### Functionalities:
- Display errors when the user's email address or password doesn't match.
- Create an Error 404 page.
 
 
### Tech Stack:
- HTML
- CSS
- Javascript
#### Frameworks and Libraries:
- Bootstrap or react-bootstap / Tailwind CSS (With Daisy UI).
- React.JS
- Node.JS
- Express.JS
#### Authentication system:
- Firebase Authentication
 
 ### Live website Link:
 - https://algo-wizr-client.web.app/

 ### Repositories
#### Client Side:
 - https://github.com/programming-hero-web-course1/b610-learning-platform-client-side-Raad05
#### Server side:
- https://github.com/programming-hero-web-course1/b610-lerning-platform-server-side-Raad05
