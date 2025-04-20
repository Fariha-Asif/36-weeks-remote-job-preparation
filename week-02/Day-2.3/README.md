# 📁 Week 2.2 | Bash and Terminal (Basics)

Welcome to Week 2.2 of our programming journey! In this module, we will explore the fundamentals of using the **Terminal** or **Command Line Interface (CLI)** to interact with our operating system. This is an essential skill for any developer.

---

## 📌 Table of Contents

1. [Introduction to Terminals](#1-introduction-to-terminals)
2. [How to Open the Terminal](#2-how-to-open-the-terminal)
3. [Basic Commands](#3-basic-commands)
   - pwd
   - cd
   - ls
   - mkdir
   - touch
   - cat
   - vi
   - mv
   - cp
4. [Advanced Directory Navigation](#4-changing-directly-into-multiple-folders-using-a-single-command)
5. [Installing Node.js](#5-how-to-install-node-in-our-machine)
6. [Working with Node.js and npm](#6-node-command--npm-command)

---

## 1. 🖥️ Introduction to Terminals

The **Terminal** (or Shell) is a text-based interface that allows you to interact with your computer’s file system and run scripts or programs. Instead of clicking around, you type commands to tell the computer what to do.

Common shells include:
- `bash` (Bourne Again Shell)
- `zsh`
- `powershell` (on Windows)

---

## 2. 🚪 How to Open the Terminal

### 💻 On Windows:
- Use `Windows + R`, type `cmd` or `powershell`, and hit Enter.
- Alternatively, use **Windows Terminal** or **Git Bash**.

### 🍏 On macOS:
- Use `Cmd + Space`, type `Terminal`, and press Enter.

### 🐧 On Linux:
- Press `Ctrl + Alt + T` or search for "Terminal" from the app menu.

---

## 3. 📄 Basic Commands

### 🔍 `pwd` – Print Working Directory
Displays the current folder location you're in.

```bash
pwd


📁 cd – Change Directory
Used to move between folders.

cd folderName
cd ..        # Go back one directory
cd /         # Go to the root directory

📂 ls – List Files and Directories
Shows all files and folders in the current directory.

ls
ls -a    # Include hidden files
ls -l    # Detailed view

📁 mkdir – Make Directory
Creates a new folder.

mkdir newFolder
📄 touch – Create Empty File
Creates a new empty file.

touch file.txt
📖 cat – Concatenate and Display File Content
Displays the contents of a file.

cat file.txt
✍️ vi – Open File in Editor
Opens a file in the vi (or vim) text editor.

vi file.txt
Basic vi commands:

i → insert mode

Esc → exit insert mode

:wq → save and exit

:q! → quit without saving

📦 mv – Move or Rename Files/Folders
Moves or renames a file.

mv oldName.txt newName.txt        # Rename
mv file.txt ../anotherFolder/     # Move to another folder
📋 cp – Copy Files/Folders
Copies files or directories.


cp file.txt backup.txt
cp -r folder1 folder2             # Copy folder and its contents

4. 📁 Changing Directly into Multiple Folders Using a Single Command

mkdir -p folder1/folder2/folder3
cd folder1/folder2/folder3
-p creates all nested folders in one go.

You can navigate directly into deeply nested folders after creating them.

5. 🛠️ How to Install Node.js on Your Machine
🪟 On Windows:
Visit https://nodejs.org

Download the LTS version

Run the installer and follow instructions

🍏 On macOS (using Homebrew):

brew install node
🐧 On Linux (Ubuntu):

sudo apt update
sudo apt install nodejs npm
Check if installed:

node -v
npm -v

6. 🧠 Node Command & npm Command
▶️ node – Run JavaScript Files
You can run .js files using node.

node hello.js
Or launch a REPL (interactive shell):


node
> console.log("Hello World")

📦 npm – Node Package Manager
Install JavaScript libraries and packages.

npm init -y                          # Create a package.json
npm install axios                    # Install a library
npm install express --save           # Install and save to dependencies

✅ Summary

By learning these terminal commands and tools, you're laying the foundation for more advanced development work. Command Line is powerful and boosts your productivity as a developer.

