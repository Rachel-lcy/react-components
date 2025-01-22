# README

This repo features a set of activities designed to help you practice using the unix command line.

## Instructions

1. open this repo in the command line
2. verify that you're there with the correct command
3. switch to the src directory
4. list everything inside src
5. use the appropriate flag to check for hidden files
6. move the `.gitignore` file to the project root
7. list all the files in components without cd-ing into the folder
8. cd into the dist folder
9. delete the `corrupted.js` file
10. move the `index.html` file to `src`
11. switch to the project root
12. move the assets directory into `src` (make sure to use the correct flag)

---

## Commands

- `pwd` Print working directory
- `cd`: Change Directory
- `ls`: List directory contents
- `mv`: Move or rename
- `cp`: Copy
- `rm`: Remove
- `touch`: Create a file
- `mkdir`: Create a new directory

### Patterns to know

- `cd ../` change directory to parent directory
  - ie: if `/home/documents/project/`, then `cd ../` takes you to `/home/documents/
- `pwd` prints where you are right now
- `ls -la` shows hidden directories and files
- `mv oldfilename newfilename` rename a file
- `cp filename ../otherproject/filename`
  - copies a file back a level and then into a directory called "otherproject"
- `rm -r ./directoryname`
  - removes the specified directory (providing your in the same parent directory)
  - **never ever ever write `rm -rf /`** this will delete literally everything
  - always be certain of where you are when executing `rm` commands
- `touch README.md` creates a markdown file called README
- `mkdir project-name`: Creates a directory called project-name

## Naming Convention Notes

- name multi word files and folders with kebab-case
  - example: `mkdir assignment-1`
  - as a developer, spaces in filenames are not your friend
- name javascript files with camelCase or PascalCase (default to camelCase)
  - example: `touch errorLogger.js` for a utility function that formats error logging
  - example: `touch CardButton.js` for a react component that is a Button specifically formatted for a Card component
