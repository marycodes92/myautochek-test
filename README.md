# End-To-End-tests for Autochek 
The scope of this project covers just the Sign in and Fix Your Car Module of Autochek website using Cypress.
The granularity of the tests covers the behaviour of the feature until when a user fills the sign in form and
submits. I only checked for the error message that should be returned for an invalid/unregistered user 
because I don't have the correct login details.

For the Fix Your Car module, the test covers uptil the point where a user fills the appointment form and submits. 


# Running the End-To-End-tests 
Install the dependencies. Run
`npm install`
Execute using `npx cypress open` or `npx cypress open`

## Note: 
The version of cypress used for this project is 3.0, this is due to some irregularity encountered with the current version.

# End-To-End-tests Staging URL 
The current target URL is the staging URL for Autochek website 
Edit the target URL in `cypress.json` by modifying the set `baseUrl` environment variable



## Why and When to use the tool
Each time you want to make a change to the schema, create a migration.
 As software evolves, we may need to fix mistakes on the data schema or adapt existing data as requirements change. Doing this manually is not advisable for the following reasons:
1. Manually editing production DB is against Indeed’s engineering policies.
2. Manual updates are prone to errors and can be difficult to reverse.
3. We need to be able to undo DB schema changes or data changes.
4. We also need to maintain a history of such changes.
This migration tool provides an incremental, reversible, and version-controlled way to handle database schema migrations. 
So if there’s a need to change “user_name” to “userName”, or add a new field called “location”, or make “email'' field values to be lowercase, make use of the migration tool.
1. To migrate up, use the command
   `npm run migrate:up`
2. To migrate down, use the command
   `npm run migrate:down`