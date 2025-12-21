# Design Document  
## Coding Practice Platform (LeetCode-like) — Version 0

---

## 1. Objective

Build a **Version-0 coding practice platform** similar to LeetCode/HackerRank with a strong focus on **core engineering problems**, not scale theatrics or UI polish.

The platform will allow:
- Users to browse coding problems publicly
- Authenticated users to view problem descriptions and submit code
- Admins to create and manage problems
- Secure execution of user code against test cases
- Persistent submission history per user

---

## 2. Non-Goals (Explicitly Out of Scope)

To keep the project focused and realistic for V0:

- No leaderboards
- No discussions / comments
- No editorial solutions
- No plagiarism detection
- No distributed judging
- No real-time collaboration
- No advanced sandbox hardening beyond Docker isolation

---

## 3. Tech Stack

### 3.1 Frontend (Client)

- **Framework:** React 18
- **Language:** JavaScript
- **Routing:** React Router DOM
- **State / Data Fetching:** TanStack Query (React Query)
- **Editor:** Monaco Editor (VS Code engine)
- **Styling:** Tailwind CSS or CSS Modules
- **Markdown Rendering:** react-markdown
- **Auth Storage:** In-memory + HTTP-only cookies (refresh token)

#### Client Libraries

```bash
npm install react-router-dom
npm install @tanstack/react-query
npm install @monaco-editor/react
npm install react-markdown
npm install axios
```

### 3.2 Backend (Server)

- **Runtime:** Node.js
- **Framework:** Express
- **Language:** JavaScript
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JWT + Refresh Tokens
- **Password Hashing:** bcrypt
- **Code Execution:** Docker containers

#### Server Libraries

```bash
npm install express
npm install mongoose
npm install jsonwebtoken
npm install bcrypt
npm install cors
npm install dotenv
npm install uuid
npm install dockerode
npm install express-rate-limit
```
---

## 4. High-Level Architecture

```mathematica

Client (React)
 ├── Auth Pages
 ├── Problems List
 ├── Problem Page + Editor
 ├── Submission History
 └── Admin Dashboard

Backend (Node + Express)
 ├── Auth Module
 ├── Problem Module
 ├── Submission Module
 ├── Execution Module
 └── Admin Module

Execution Layer
 ├── Docker Containers
 ├── Language Runtimes
 └── Test Runner

Database (MongoDB)
 ├── Users
 ├── Problems
 ├── Submissions
```

---

## 5. Authentication & Authorization

### 5.1 Authentication Model

- Short-lived JWT Access Token
- Long-lived Refresh Token stored in HTTP-only cookies
- Role-based access control


### 5.2 User Roles

- **USER:** Can solve problems and submit code
- **ADMIN:** Can create, edit, and delete problems

### 5.3 Access Rules

| Feature                  | Authentication Required |
| ------------------------ | ----------------------- |
| View problem list        | No                      |
| View problem description | Yes                     |
| Run code                 | Yes                     |
| Submit code              | Yes                     |
| View submissions         | Yes                     |
| Admin problem management | Admin only              |

---

## 6. Database Design (MongoDB Schemas)

### 6.1 User Schema

```js
{
  _id: ObjectId,
  email: String,
  passwordHash: String,
  role: "USER" | "ADMIN",
  createdAt: Date
}

```

### 6.2 Problem Schema

```js
{
  _id: ObjectId,
  title: String,
  slug: String,
  difficulty: "easy" | "medium" | "hard",
  description: String, // markdown
  constraints: String,
  examples: [
    {
      input: String,
      output: String
    }
  ],
  testCases: [
    {
      input: String,
      output: String,
      hidden: Boolean
    }
  ],
  supportedLanguages: ["js", "python"],
  createdBy: ObjectId,
  createdAt: Date
}

```

### 6.3 Submission Schema

```js
{
  _id: ObjectId,
  userId: ObjectId,
  problemId: ObjectId,
  language: String,
  code: String,
  status: "PENDING" | "ACCEPTED" | "WRONG_ANSWER" | "TLE" | "ERROR",
  runtime: String,
  memory: String,
  createdAt: Date
}
```

---

## 7. API Design

### 7.1 Authentication APIs

| Method | Endpoint       | Description          |
| ------ | -------------- | -------------------- |
| POST   | /auth/register | Register a new user  |
| POST   | /auth/login    | Login user           |
| POST   | /auth/refresh  | Refresh access token |
| POST   | /auth/logout   | Logout user          |
| GET    | /auth/me       | Get logged-in user   |


### 7.2 Problem APIs

| Method | Endpoint           | Auth | Description              |
| ------ | ------------------ | ---- | ------------------------ |
| GET    | /problems          | No   | List all problems        |
| GET    | /problems/:id/meta | Yes  | Metadata only            |
| GET    | /problems/:id      | Yes  | Full problem description |


### 7.3 Exeuction & Submission APIs

| Method | Endpoint         | Description                        |
| ------ | ---------------- | ---------------------------------- |
| POST   | /execute/run     | Run code with example/custom input |
| POST   | /submissions     | Submit code for judging            |
| GET    | /submissions/:id | Get submission result              |
| GET    | /submissions     | Get user submission history        |


### 7.4 Admin APIs

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| POST   | /admin/problems     | Create problem     |
| PUT    | /admin/problems/:id | Update problem     |
| DELETE | /admin/problems/:id | Delete problem     |
| GET    | /admin/problems     | Admin problem list |


### 7.5 Utility APIs

| Method | Endpoint   | Purpose             |
| ------ | ---------- | ------------------- |
| GET    | /languages | Supported languages |
| GET    | /health    | Health check        |


---

## 8. Why Docker Is Required

### 8.1 Problem Statement

Executing user-submitted code on a server is extremely dangerous because:

- Users can write infinite loops
- Users can access filesystem or environment variables
- Users can attempt malicious operations
- Code execution can block the server process

Running code directly in Node.js using eval or child_process is not acceptable in production systems.

### 8.2 Why Docker Solves This

Docker provides:

- Process isolation
- Filesystem isolation
- CPU and memory limits
- Execution time limits
- Language runtime consistency

This is the same fundamental approach used by real online judges.

---

## 9. Code Execution Flow (Detailed)

```css
User Code Submission
        ↓
POST /submissions
        ↓
Save submission (PENDING)
        ↓
Start Docker Container
        ↓
Write code to container filesystem
        ↓
Run code with test cases
        ↓
Capture stdout / stderr
        ↓
Compare output
        ↓
Update submission result
```

---

## 10. Execution Constraints (v0)

- One container per submission
- Execution timeout (e.g. 2 seconds)
- CPU and memory limits
- No network access inside container
- Predefined language runtimes

---

## 11. Frontend Pages (v0)

| Page               | Purpose                   |
| ------------------ | ------------------------- |
| Login / Register   | Authentication            |
| Problems List      | Public problem browsing   |
| Problem Page       | Description + code editor |
| Submission History | User submissions          |
| Admin Dashboard    | Problem management        |

---

## 12. Engineering Risks & Mitigations

| Risk              | Mitigation        |
| ----------------- | ----------------- |
| Infinite loops    | Execution timeout |
| Malicious code    | Docker isolation  |
| Resource abuse    | CPU/memory limits |
| Test case leakage | Hidden test cases |
| API abuse         | Rate limiting     |


---

## 13. Future Enhancements (Post V0)

- Execution queue (Redis/BullMQ)
- More languages
- Editorial solutions
- Leaderboards
- Performance analytics
- Difficulty-based recommendations