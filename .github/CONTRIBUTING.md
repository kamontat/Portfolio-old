# Not accepted all pull request for unauthorized user

## How to CONTRIBUTE

- [How to CONTRIBUTE](#how-to-contribute)
  - [To create branch](#to-create-branch)
    - [Action](#action)
    - [Where](#where)
  - [To commit](#to-commit)
    - [Allow action](#allow-action)

## To create branch

The `master` branch cannot be committed on every situation. When you need to add more feature or fix bug. You must create new branch and the syntax must be `<action>/<where>/<extra>`

### Action

The primary action of the branch

1. **ui** - for design and implement ui
2. **model** - for implement update or model and database
3. **controller** - for controller, util and helper function

Add prefix to action to specify primary action

1. **fix** - for fix action

### Where

The location of action, for example: 

1. **landing** (ui) - for landing page
2. **user** (model) - for user model
3. **user** (fix) - for fix user model

## To commit

The commit format must be

```txt
[action] title
message
```

### Allow action

1. [feature] - Tell the primary adding feature
2. [model] - When add or change database model
3. [improve] - If code or ui have improvement
4. [doc] - When update documents
5. [config] - When update configuration
6. [fix] - If bug or error have be resolve
7. [test] - If adding, changing or removing testcase
8. [release] - If deploy the code to master branch
