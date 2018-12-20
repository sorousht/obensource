#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  float: 'center',
}

const newline = '\n';

// Text + chalk definitions
const data = [
  chalk.bold.white('Soroush Torkzadeh'),
  chalk.white('Front-end JavaScript Developer'),
  chalk.white(newline),
  chalk.dim.white('    Website:') + chalk.bold.white(' http://sorousht.com'),
  chalk.dim.white('     GitHub:') + chalk.bold.white(' https://github.com/sorousht'),
  chalk.dim.white('   Linkedin:') + chalk.bold.white(' https://www.linkedin.com/in/sorousht/'),
  chalk.white(newline),
  chalk.green('$ npx sorousht'),
];

// Put all our output together into a single variable so we can use boxen effectively
const output = data.join(newline);

console.log(chalk.green(boxen(output, options)))
