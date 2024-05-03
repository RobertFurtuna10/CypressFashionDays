# Automated Testing Project for FashionDays Website :computer:
Welcome to the documentation for the automated testing project designed for the FashionDays website. This project leverages Cypress  implement a robust suite of tests, ensuring the functionality and reliability.
## Table of Contents

1. [Introduction/Tools and version](#introduction-notebook)
2. [Project Structure](#project-structure)
3. [Test Scenario](#test-scenarios-for-login-functionality)
4. [Getting-Started](#getting-started--pushpin)
7. [Reports](#reports)

# Introduction :notebook:
 
This project aims to implement automated tests for the FashionDays opensource website using Cypress.
The primary objectives include simulating user interactions on  several functionalities ,such as : main page , wishlist ,cart ,filter product ,search.

- Language:**JavaScript**
- Editor code:**VsCode**
- Library:
  - [![Cypress](https://img.shields.io/npm/v/cypress?color=33ff99&label=cypress&logo=cypress&logoColor=33ff99&style=for-the-badge)](https://www.cypress.io)
  - cypress-mochawesome-reporter 3.8.2

**FashionDays** is a platform tailored for the fashion industry, offering a suite of tools for efficiently managing clothing and accessory businesses. 
It enables easy product catalog management, inventory control, online store integration, and customer relationship management. 
The platform also includes order processing, data analytics, and extensive support to aid growing businesses. 
Available in both cloud and on-premise options, FashionDays is the ideal solution for fashion brands and retailers.

- [Website](https://www.fashiondays.ro/)

# Project Structure 

- **cypress/**: This is the main directory of the Cypress project.
- **cypress/fixtures/**: Static test data, such as JSON files, is stored here.
- **cypress/integration/**: All spec files for tests are stored here. Inside this directory, each subdirectory corresponds to a specific testing module.
- **cypress/support/**: Custom Cypress commands and other support files are defined here.
- **cypress/integration/Tests/**: All the tests are stored here.
- **cypress/reports/**: This directory is where Cypress generates test reports.

## Getting Started  :pushpin:

1.**Prerequisites:**

Make sure you have installed the following prerequisites on your development machine:

| OS      | Node                                    |
| ------- | --------------------------------------- |
| Windows | `winget install --id OpenJS.NodeJS.LTS` |
|         | ` npm i --save-dev cypress-mochawesome-reporter`        |
| macOS   | `brew install node@20`    
|         | ` npm i --save-dev cypress-mochawesome-reporter`        |


2. **Clone the Repository:**

    ```bash
    git clone https://github.com/RobertFurtuna10/CypressFashionDays.git
    ```

4. **Run all the tests with html report:**

    ```bash
    npx cypress run
    ```

# Report 

This report outlines the testing conducted and documents all the functionalities that have been thoroughly tested. The report comprises 23 tests, all of which have successfully passed within a total time of 55.5 seconds.

![TestsReport](https://github.com/RobertFurtuna10/CypressFashionDays/blob/main/Screenshot%202024-05-03%20at%2013.23.16.png)

