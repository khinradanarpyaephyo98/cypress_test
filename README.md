### Build npx
Run this command
``` npm init -y ```

### Install cypress
``` npm install cypress ```

### Check Cypress version
``` npx cypress -v ```


### Open Cypress 
``` npx cypress open ```

<img src="/images/cypress_software.png" alt="Alt text" title="cypress software">



Then go to the visual code and check folders of cypress .
The folders are built accoring to this directory. 

My_project_Name
    |--- cypress_folder
           |-- downloads_folder
           |-- fixtures_folder
           |-- integration_folder
           |-- plugins
           |-- support
    |--- node_modules_folder
    |--- cypress.json
    |--- package.json
    |--- package-lock.json


Then build the new cypress testing file('first_test.js') under the directory path of ( My_project_Name/cypress_folder/integration_folder)

### Launching Cypress and run 
Then go to the cypress software and open first_test.js file.





