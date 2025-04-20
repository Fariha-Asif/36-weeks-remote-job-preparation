# 🧠 Week 2.3 | Bash (Advanced) & Installing Node.js

Welcome to Week 2.3 of our 36-week journey! In this session, we dive deeper into the **power of Bash scripting**, learning how to manipulate files, filter data, automate tasks, and manage system behavior using the terminal.

---

## 📌 Table of Contents

1. [Advanced Bash Commands](#1-advanced-bash-commands)
   - pwd
   - ls
   - cat
   - touch
   - mkdir
   - mv
   - cp
   - rm
   - chmod
   - echo
   - head & tail
   - pipe (`|`) operator
   - wc
   - grep
   - history
2. [Scripts in Bash](#2-scripts-in-bash)
3. [Install Node.js](#3-install-nodejs)
4. [Text Filtering Power Tools](#4-grep-sed-and-awk)

---

## 1. ⚙️ Advanced Bash Commands

### 🔍 `pwd` – Print Working Directory
Shows the full path of the current directory.

```bash
pwd

📂 ls – List Directory Contents

ls           # Basic
ls -a        # Show hidden files
ls -l        # Long listing format

📖 cat – View File Contents

cat file.txt

📄 touch – Create Empty File

touch newfile.txt

📁 mkdir – Create New Folder

mkdir folderName

🚚 mv – Move or Rename Files

mv oldname.txt newname.txt
mv file.txt /another/location/

📋 cp – Copy Files or Folders

cp file.txt copy.txt
cp -r folder1 folder2  # copy folders

❌ rm – Remove Files or Directories

rm file.txt
rm -r folderName
⚠️ Caution: rm permanently deletes files. Use with care!

🔐 chmod – Change File Permissions

chmod +x script.sh   # Make script executable
chmod 755 file.sh    # Set specific permissions

🗨️ echo – Print to Terminal or File

echo "Hello World"
echo "Saved to file" > myfile.txt
🧾 head & tail – View Start or End of Files

head file.txt     # First 10 lines
tail file.txt     # Last 10 lines
head -n 5 file.txt
tail -n 5 file.txt

🔗 Pipe (|) – Chain Commands

cat file.txt | grep "error"

🔢 wc – Word, Line, Character Count

wc file.txt
wc -l file.txt     # Line count

🔍 grep – Search Inside Files

grep "searchTerm" filename.txt
grep -i "term" file.txt     # Case insensitive
grep -r "something" .       # Recursive search

⏳ history – Command History

history
!45      # Repeat command number 45
2. 📜 Scripts in Bash
You can automate tasks using Bash scripts.

Example: hello.sh

#!/bin/bash
echo "Hello, Fariha!"
To run:

chmod +x hello.sh
./hello.sh
3. 🛠️ Install Node.js
🪟 On Windows:
Download from: https://nodejs.org

Choose LTS version, follow installer steps

🍏 On macOS:

brew install node

🐧 On Ubuntu/Linux:

sudo apt update
sudo apt install nodejs npm
Verify installation:

node -v
npm -v
4. 🧪 grep, sed, and awk – Text Filtering Power Tools
🔍 grep – Pattern Searcher
Searches for lines matching a pattern.

grep "name" data.txt
✂️ sed – Stream Editor
Performs find and replace.

sed 's/old/new/g' file.txt
📊 awk – Pattern Scanner and Processor
Powerful text processor for structured data.

awk '{print $1}' file.txt         # Print first column
awk -F',' '{print $2}' data.csv   # Print second column from CSV
✅ Summary
By the end of this session, you should be comfortable with:

Navigating and manipulating files via terminal

Writing basic bash scripts

Using filters like grep, sed, and awk

Installing and verifying Node.js and npm

This builds a strong foundation for automating your workflows and boosting development productivity! 💪