# Task-Dashboard
Devloped this Task-Dashboard which allows users to manage their tasks efficiently.


## Hosted Link:
### 

## Features
* ADD TASK: Allows users to add task with title, description, due-date.
* EDIT TASK: Allows users to update the task.
* DELETE TASK: Allows users to delete a task.
* TOGGLE TASK: Allows users to toggle task status between "Pending" and "Completed".
* SEARCH TASKS BY TITLE: Search tasks by thier title.
* FILTER TASKS: Filter tasks on the basis of thier status.

## Tools Used:
* JSX
* React 
* Redux
* React-Redux
* Styled-components
* React-chartjs
* React-Router-Dom

## Folder Structure:
```bash
task_dashboard/
├── public/
│   ├── index.html
│   ├── 404.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── hero/
│   │   │    ├── Hero.jsx
│   │   │    └── Hero.module.css
│   │   ├── navbar/
│   │   │    ├── Navbar.jsx
│   │   │    └── Navbar.module.css
│   │   ├── sidebar/
│   │   │    ├── Sidebar.jsx
│   │   │    └── Sidebar.module.css
│   │   └── tasks/
│   │        ├── Modal.jsx
│   │        ├── Task.module.css
│   │        ├── TaskForm.jsx
│   │        └── TaskList.jsx
│   ├── constants/
│   │        └── ThemeContext.js
│   ├── data/
│   │        └── taskData.json
│   ├── pages/
│   │        ├── Home.jsx
│   │        └── Tasks.js
│   ├── redus/
│   │   ├── actions/
│   │   │    └── tasksActions.js
│   │   ├── reducers/
│   │   │    └── taskReducer.js
│   │   └── store.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── ...
```

## Installation On Local Machine:
Follow these steps to get the project up and running on your local system:

1. Clone the repository to your local machine:
```bash
  https://github.com/SinhaKhushiTheRockc2/task_dashboard
```
2. Navigate to the root directory of the project:

3. Install all the dependencies:
```bash
    npm install
```
4. Start the development server
```bash 
    npm run start
```
5. Open your web browser and go to http://localhost:3000 to see the application in action.


