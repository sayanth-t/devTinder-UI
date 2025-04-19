# Steps 

- create vite react app
- remove unwanted files 
- install tailwind css
- use daisyui for better components
    - install daisyui
- for routing use react-router-dom
    - install react-router-dom package
    - then setup route in app.jsx
    - in App.jsx , set route for Body.jsx . Body.jsx contain all our components
    - by using children routing , set rout for other components 
    - add `Outlet` in Body.jsx for rendering children components. otherwise they not rendered . 
        - any childer route of Body , will render on `Outlet` 
    - set navBar and footer in top and bottom of Body.jsx . This will need in our all pages 

- Login , Signup , Logout features are done first
    - using useState , define state & setState for email and passsord
    - in input , setState calls by onChange() 
    
    - use **AXIOS** for making API calls ( or other way we can use `fetch` to make API calls )

- we get an **CORS** Error
    - because we are trying to access backend (running on port 3000) from frontend (running on port 5173) . these are two different domains . So browser throws CORS error
    
    - for fix this Error
        - we want to install `cors` npm package in backend
        - use cors middleware in backend app.js with configuration => origin : 'http://localhost:5173'  & credentials : true

    **when ever we make an API call , so pass axios { withcredentials : true }**
- instal Redux toolkit 
    - check 'https://redux.js.org/tutorials/quick-start

- after successfull login , user rederect to feed page
    - by using useNavigate() Hook 

- when token is present user is redirect to feed otherwise login feature added
    - in the body create a function named fetchUser
        - if the user is present with the token , store is updated 
    - fetchuser function is called from useEffect , which call immediately after component is rendered

- logout feature

- swipe feature
    - by using @use-gesture/react , @react-spring/web packages
        - by using @react-spring/web , we can create animated components

- New page - see all my connections
- New page - seel all my connection requests

- New Section - for showing messages and connections list
    - install lucid react for icons 
    - for showing message time , install date-fns for formating time

- For Real Time Chat Feature use **Socket.IO**
    - install socket.io-client
    - in utils folder create socke.js

 - AuthO
    - create a application in authO official website
    - configure the application
        - set callback URL , logout URL , allowed origins
    - then install `@auth0/auth0-react`

- AWS Steps 
    - For create instance 
        - add name => eg: devTinder
        - select the operating system => select Ubundu => Ubundu is most companies used
        - select instance type => on free tier we are only eligible to use micro
        - create a key pair to securely connect to our instances => eneter name eg: devTinderSecret =>  select RSA => also select perm
        - then launch instance
    - Connect to instance
        - use SSH Client
        - open gitBash => run - `chmod 400 <secretKey>`
        - then copy the ssh prompt and run => `ssh -i <secretkey> ubuntu@ipAddress`
        - now we are in our virtual machine
        - install node js => `curl -o- https://fnm.vercel.app/install | bash`
        - **then check wich node version is installed on local , then install same vesion of node in virtual server**
        - install same version of node => `fnm install 20.16.0`
        - clone backend & frontend from github 
            - go to GITHUB => copy the HTTPS Url => then run => git clone <HTTPS link>
            - do same thing for backend and frontend seperately
   

- STRIPE integration
    - npm install @stripe/stripe-js @stripe/react-stripe-js
    - import loadStripe
    - then create stripePromise => const stripePromise = loadStripe('your_stripe_public_key')
    - redirect user to checkout page with session id
        - const stripe = await stripePromise;
        - await stripe.redirectToCheckout({ sessionId });