# User Notebook

A simple, intuitive web app to manage and save your personal notes. Built with React (frontend) and Node.js (backend), this project provides a seamless, responsive experience for creating, editing, and organizing your notes.

---

##  Features

- View a list of notes
- Create, edit, and delete notes
- Responsive UI built with React
- Backend powered by Node.js and Express
- Persistent storage using a database (e.g., MongoDB or PostgreSQL)
- Optional: Authentication, if applicable

---

##  Screenshots

<img width="1897" height="957" alt="image" src="https://github.com/user-attachments/assets/c4df101d-0172-4af9-bb73-c0c5f691e83c" />


### Home / Notes List View
<img width="1892" height="957" alt="image" src="https://github.com/user-attachments/assets/dee609f8-c002-49ca-a950-f82e3c04f229" />



### Create / Edit Note View
<img width="1893" height="947" alt="image" src="https://github.com/user-attachments/assets/e88c578e-4346-4ad2-a18c-9c05de20c281" />


---

##  Project Structure

```

user\_notebook/
├── backend/             # Node.js + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/            # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
├── .gitignore
├── Dockerfile (optional)
├── README.md
└── package.json

````

*(Update the paths if your structure differs.)*

---

##  Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- MongoDB or PostgreSQL (if using locally)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/vivekkumarsoni123/user_notebook.git
   cd user_notebook
````

2. **Backend setup**

   ```bash
   cd backend
   npm install
   # or
   yarn install
   ```

3. **Frontend setup**
   Open a new terminal tab:

   ```bash
   cd frontend
   npm install
   # or
   yarn install
   ```

4. **Configure environment variables**
   Create `.env` files as needed:

   ```env
   # backend/.env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/user_notebook
   ```

5. **Run the app**

   * **Backend**:

     ```bash
     cd backend
     npm start
     ```
   * **Frontend**:

     ```bash
     cd frontend
     npm start
     ```

   The React frontend will typically be available at `http://localhost:3000`, and the backend at `http://localhost:5000`.

---

## Usage Examples

* Navigate to `http://localhost:3000`
* Add new notes, edit existing ones, and view your changes in real time.

*(Insert demo GIF or video link here if available)*

---

## Technologies Used

| Layer    | Technology           |
| -------- | -------------------- |
| Frontend | React, CSS3          |
| Backend  | Node.js, Express     |
| Database | MongoDB / PostgreSQL |
| Optional | Docker               |

---

## Contributing

Contributions are welcome! Please follow this process:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to your branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

---

## Contact

For questions or feedback, reach out via [GitHub Issues](https://github.com/vivekkumarsoni123/user_notebook/issues) or open a pull request.

---
