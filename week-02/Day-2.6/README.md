# Week 2.6 | Git and GitHub

This document covers the essentials of **Git** and **GitHub**, foundational tools used in version control and collaborative software development. This week focuses on understanding how version control systems work, using Git effectively, and leveraging GitHub for project collaboration.

---

## 📌 Table of Contents

1. [What is Git & Version Control System?](#what-is-git--version-control-system)
2. [Centralized vs Distributed Version Control](#centralized-vs-distributed-version-control)
3. [Why Git?](#why-git)
4. [What is GitHub?](#what-is-github)
5. [Git Terminology](#git-terminology)
6. [Git Workflow](#git-workflow)
7. [Commits](#commits)
8. [Essential Git Commands](#essential-git-commands)
9. [Installing Git](#installing-git)
10. [Creating a New Repository](#creating-a-new-repository)
11. [Pushing Code via CLI](#pushing-code-via-cli)
12. [Authentication](#authentication)
13. [Branching in Git](#branching-in-git)
14. [Merging Branches](#merging-branches)
15. [Pull Requests (PR)](#pull-requests-pr)
16. [Understanding Git Merge Conflicts](#understanding-git-merge-conflicts)

---

## 🔍 What is Git & Version Control System?

A **Version Control System (VCS)** is a tool that helps developers track and manage changes in their code over time. Git is a **Distributed VCS** that allows multiple developers to work on a project simultaneously without overwriting each other's changes.

---

## 🔗 Centralized vs Distributed Version Control

- **Centralized VCS**: Uses a single central server to store all versions of a project. Example: SVN.
- **Distributed VCS (DVCS)**: Every contributor has a full copy of the repository. Example: Git.

---

## 🚀 Why Git?

- Open-source and fast
- Tracks changes efficiently
- Allows multiple contributors
- Branching and merging capabilities
- Works offline

---

## 💻 What is GitHub?

**GitHub** is a web-based platform built on top of Git that provides tools for:
- Hosting code repositories
- Collaborating with teams
- Issue tracking
- Code review through Pull Requests

---

## 📘 Git Terminology

- **Repository (repo)**: A directory or storage space for your project.
- **Clone**: A copy of a repository.
- **Commit**: A snapshot of changes made to the code.
- **Branch**: A separate version of the repository.
- **Merge**: Combine changes from different branches.
- **Pull Request (PR)**: Request to merge code from one branch to another.
- **Conflict**: Occurs when incompatible changes are made to the same file.

---

## 🔄 Git Workflow

1. Initialize or clone a repo
2. Make changes in the working directory
3. Stage the changes
4. Commit the changes
5. Push to GitHub
6. Collaborate via PRs and merges

---

## 📝 Commits

A commit is a record of what changes were made and by whom. Each commit has:
- A unique ID (hash)
- A message describing the change
- Author info
- Timestamp

---

## 🧰 Essential Git Commands

```bash
git init                 # Initialize a new Git repo
git clone <url>          # Clone an existing repo
git status               # Check status of files
git add <file>           # Stage files for commit
git commit -m "message"  # Commit changes
git push                 # Push to remote repo
git pull                 # Fetch and merge changes
git branch               # List branches
git checkout -b <name>   # Create and switch to a new branch
git merge <branch>       # Merge a branch into current

🧱 Installing Git
Install Git from the official Git website. Follow the OS-specific instructions for:

Windows

macOS

Linux

🆕 Creating a New Repository
On GitHub, click on New Repository

Name your repo

Optionally add a README

Clone the repo:

git clone https://github.com/username/repo.git
🧭 Pushing Code via CLI
Make changes locally

Use Git to track and commit:

git add .
git commit -m "Initial commit"
git push origin main
🔐 Authentication
Authentication methods for GitHub:

Username & password (deprecated)

Personal Access Tokens (recommended)

SSH keys (secure and reusable)

🌿 Branching in Git
Branches let you work on different features or fixes independently:

git checkout -b new-feature

Switch back:

git checkout main

🧬 Merging Branches
To integrate changes from one branch into another:


git checkout main
git merge new-feature
🔁 Pull Requests (PR)
Pull Requests allow:

Code review

Team discussion

Merging after approval

Steps:

Push a branch to GitHub

Open a Pull Request

Get feedback or approval

Merge PR

⚠️ Understanding Git Merge Conflicts
Conflicts occur when:

Two branches modify the same line in a file

Git cannot automatically resolve changes

Steps to resolve:

Open the conflicting file

Edit the conflict markers

Stage and commit the resolved file

📎 Conclusion
Git and GitHub are essential tools for modern development. Understanding their workflows and features enables better collaboration, version tracking, and productivity in software projects.

📚 Resources
Pro Git Book

GitHub Docs

Git Cheatsheet PDF