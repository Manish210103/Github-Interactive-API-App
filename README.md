# Github-Interactive-API-App

## Task :
    Build an Angular Application which retrieves all the public repositories for the searched user. 
    User should be able to sign-in/sign-up (Firebase Authentication) to our application using basic forms. 
    Once User is logged in, he/she should be able to search GitHub users using a search box by 
    entering the username achieved using API call After Entering correct username, the home page should 
    be populated with user details and all its public repositories.
    
 Deployed app : [https://github-interactive-api.vercel.app/](https://github-interactive-api.vercel.app/)    

## Instruction
### How to Run :
  1. Clone the repo.
     ```bash
     git clone https://github.com/Manish210103/Github-Interactive-API-App.git
     cd Github-Interactive-API-App
     ```
  3. Install the latest version of Angular
     ```bash
     npm install -g @angular/cli
     ```
  5. Install the necessary packages using
     ```bash
     npm install
     ```
  7. Create a firebase project and copy the firebase config to environment folder
     `environment.ts` and `environment.development.ts`
  8. Run the server
     ```bash
     ng serve
     ```
     The application will be accessible at [http://localhost:4200/](http://localhost:4200/) .
### Folders : 
        - Components : contains (user-card) and (repos)
        - Layout : conatins (footer) and (header)
        - Pages : contains (home), (pagenotfound), (signin) and (signout)
        - Services : contains (authservice) and (github service)
        - environments : contains (firebase configurations)
### Files :
        - app.modules.ts : contains all modules and components
        - app.routes.ts : contains routes to navigate through pages

## Sample Screenshots 
![image](https://github.com/Manish210103/Github-Interactive-API-App/assets/102723626/387ae472-dbf1-47b0-97ca-344abcd6a021)

![image](https://github.com/Manish210103/Github-Interactive-API-App/assets/102723626/50ede251-6946-4de1-a42a-bcd876a5d094)

![image](https://github.com/Manish210103/Github-Interactive-API-App/assets/102723626/2bedc3fa-3010-415b-b35d-d3b5159bd81c)

![image](https://github.com/Manish210103/Github-Interactive-API-App/assets/102723626/f2c627d3-9cee-4563-b67d-4bb3c327a7dd)

![image](https://github.com/Manish210103/Github-Interactive-API-App/assets/102723626/6418d4f2-1b60-422f-af4b-33db8d311c18)




