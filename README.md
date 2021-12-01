# End-To-End-tests for Autochek 
The scope of this project covers just the landing page, Sign-in, Fix-Your-Car and Sell-A-Car Module of Autochek website using Cypress. The granularity of the tests focuses on the core functionalities of the modules.


# Running the End-To-End-tests 
Install the dependencies. Run
`npm install`
Execute test using `npx cypress open` or `npx cypress open`
You may need comment out some test to run some in each of the files or attach `.only` to the test you want to run at a particular time

## Note: 
The version of cypress used for this project is 3.0, this is due to some irregularity encountered with the current version.

# End-To-End-tests Staging URL 
The current target URL is the staging URL for Autochek website 
Edit the target URL in `cypress.json` by modifying the set `baseUrl` environment variable