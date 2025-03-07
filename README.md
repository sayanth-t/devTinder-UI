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