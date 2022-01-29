import DraftLog from "draftlog";
import chalk from "chalk";
import chalkTable from "chalk-table";
import readline from "readline";
import database from "./../database.json" assert { type: "json" };
import Person from "./person.js";

DraftLog(console).addLineListener(process.stdin);

const options = {
  leftPad: 2,
  columns: [
    { field: "id", name: chalk.cyan("ID") },
    { field: "vehicles", name: chalk.magenta("vehicles") },
    { field: "kmTraveled", name: chalk.cyan("kmTraveled") },
    { field: "from", name: chalk.cyan("from") },
    { field: "to", name: chalk.cyan("to") },
  ],
};

const table = chalkTable(options, database.map(item => new Person(item).formatted()));
const print = console.draft(table);

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question("Qual é seu nome?", (msg) => {
  console.log("msg", msg.toString());
});
