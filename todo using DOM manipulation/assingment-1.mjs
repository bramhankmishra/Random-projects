// import chalk from "chalk";

// console.log(chalk.bgGreen.bold("This is printed with green background and boldly formatted."))


// Creating the CLI of your own which can count the number of characters in a txt file.
import {Command} from 'commander'
const program = new Command()
import fs from 'fs';
// import chalk from 'chalk';
import { fileURLToPath } from 'url'; // 👈 Import the helper function
import path from 'path';             // 👈 Import the path module

// --- Create the modern equivalents of __filename and __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program 
    .name("Word counter")
    .description("This CLI tool counts the number of characters in a file")

program
    .argument("<file_path>")
    .option('-p, --path','prints the path of the file for the user')
    .action((file_path, options) => {
        fs.readFile(file_path,'utf-8',(err, data) =>{
            if(err){
                console.log("Error encountered")
                process.exit(1)
            }
            else{
                const word_array = data.split(' ')
                console.log(`The number of words in the document are ${word_array.length}`)
            }
        })
    })

    
program.parse(process.argv);

const options = program.opts()
if(options.path)
    console.log(`This is the path of the file: ${__dirname}` + "\\file.text")
else
    console.log("path not found")


