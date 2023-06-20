# module-thirteen-challenge
E-Commerce Back End

## Description

The goal of this project was to build the back end for an e-commerce site. 

## Installation

1. Clone the repository: `git clone https://github.com/BAJones22/e-commerce-back-end`

2. Install the dependencies: 
`cd e-commerce-back-end`
`npm install`

3. Create a file named .env in the project root directory.

4. Open the .env file and add the following lines, replacing DB_NAME, DB_USER, and DB_PASSWORD with your MySQL database details:

`DB_NAME=your_database_name` <br>
`DB_USER=your_mysql_username` <br>
`DB_PASSWORD=your_mysql_password`

5. Open a terminal and navigate to the project root directory.

6. Run the following command to create the database tables and seed them with test data:

`node seeds/index.js`

7. To start the server and sync the Sequelize models with the MySQL database, use the following command:
`node server`


## Usage

<img src="assets/RM1.png"/>
<img src="assets/RM2.png"/>


This project is a functional Express.js API that allows you to connect to a MySQL database using Sequelize. It provides various routes for retrieving and manipulating data related to categories, products, and tags.

Please refer to the video at the following link to see a walkthrough video demonstration for this application: https://youtu.be/Dst-STilwAc

## Credits

Starter files can be found by going to the following link: https://github.com/coding-boot-camp/fantastic-umbrella

## License

Please refer to the license in the repo