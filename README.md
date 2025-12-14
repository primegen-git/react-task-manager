# React Practice Project - Task Manager

This project was built as a hands-on learning exercise to master the core concepts of React. It is a simple Task Manager application that allows users to create projects, manage tasks, and delete items.


### React Hooks
- **`useState`**: Used extensively for managing local component state (e.g., controlling modals, input visibility, and selected project IDs).
- **`useContext`**: Implemented to manage global state (Projects and Tasks) across the application without prop drilling.
- **`useRef`**: Used to directly access DOM elements (e.g., focusing the input field in the sidebar and detecting clicks outside the component).
- **`useEffect`**: Used to handle side effects like adding global event listeners for keyboard shortcuts and mouse clicks.
- **`useCallback`**: Applied to memoize functions passed to the context, preventing unnecessary re-renders.

### Context Management
- Created a `ProjectContext` to centralize the state logic for Projects and Tasks.
- Implemented a `ProjectContextProvider` to wrap the application and provide state and actions (`addProject`, `deleteProject`, `addTask`, `deleteTask`) to all components.

### Props Forwarding & Uplifting
- **Props Forwarding**: Passing data down from parent to child components (e.g., passing `tasks` to the `Task` component).
- **State Uplifting**: Passing callback functions from parent to child to allow the child to update the parent's state (e.g., `SideBar` updating the `selectedProjectId` in `App`).

### 4. Refs & DOM Manipulation
- Utilized `useRef` to create a seamless user experience, such as auto-focusing inputs and implementing "click outside to close" functionality for the project creation input.

## Tech Stack

- **React 19**: The core library for building the user interface.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.

##  Features

- **Project Management**: Create new projects with a title and creation date.
- **Task Management**: Add tasks to specific projects.
- **Sidebar Navigation**: Switch between different projects.
- **Deletion**: Delete projects and tasks with a confirmation dialog.
- **Responsive Design**: Basic responsive layout using Tailwind CSS.

## How to Run

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

