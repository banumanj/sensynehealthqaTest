# sensynehealthqaTest
Sensynehealth Tech Test



Run this project locally:

Testing the below endpoints :
POST /product
DELETE /product/{product_code}
GET /product/{product_code}
PUT /product/{product_code}

Get the latest Source Code
Open Terminal or command line cd to the desired folder where the test automation source code needs to be checkout

Run command git clone

This will download the latest template source code https://github.com/banumanj/sensynehealthqaTest.git

Tools
*Cucumber-JVM:- BDD Framework
*JAVA: - Programming language
*TestNg: - TestNg Java testing framework
*Maven: - Build tool
*Intellij : - Integrated Development Environment
*Git: - Version Control
*Rest-Assured : - Restful Api framework

Import Project into Intellij using pom.xml
File>Import Project>

Compile Build or Run Tests
Command Line

cd to root sensynehealthqaTest project directory

To clean and compile the build
mvn clean install -DskipTests

To run the tests :Run the following maven command from command line
mvn clean test

Report:

A report will be generated at https://github.com/banumanj/sensynehealthqaTest/blob/master/target/cucumber-reports/cucumber-pretty/index.html
Screenshot attached : https://github.com/banumanj/sensynehealthqaTest/blob/master/Test%20Report.JPG
