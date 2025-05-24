# 🏫 School_Management API

A Node.js + Express REST API to manage and list schools by proximity. Built with MySQL and documented using Swagger.

## 🚀 Features

- Add new schools to the database
- List schools sorted by distance from user location
- Swagger UI for API documentation and testing

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MySQL (via `mysql2`)
- Swagger (`swagger-ui-express`, `swagger-jsdoc`)
- Dotenv

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/school_management_api.git
cd school_management_api
```

2. **Install Dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

```bash
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=your_database_name
PORT=3000
```

4. **Run the Server**

```bash
npm run server
```

5. **View API Docs (Swagger)**
- https://school-management-api-nfsn.onrender.com/api-docs

## 📦 API Endpoints

### 1. ➕ Add a School

- **URL**: `/addSchool`
- **Method**: `POST`
- **Content-Type**: `application/json`

#### 📥 Request Body

```json
{
  "name": "Delhi Public School",
  "address": "Sector 21, New Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```
### Response Body

```json
{
  "message": "School added successfully",
  "schoolId": 3
}
```

### 2. 📍 List Nearby Schools

Fetches all schools from the database and returns a list sorted by proximity to the user's location using latitude and longitude.

- **URL**: `/listSchools`
- **Method**: `GET`
- **Content-Type**: `application/json`


### 📌 Query Parameters

| Name       | Type   | Required | Description                      |
|------------|--------|----------|----------------------------------|
| `latitude` | number | ✅ Yes    | The user's current latitude      |
| `longitude`| number | ✅ Yes    | The user's current longitude     |

---

### 🧪 Example Request

GET https://school-management-api-nfsn.onrender.com/listSchools?latitude=28.7041&longitude=77.1025


### 📤 Example Response

```json
[
  {
    "id": 1,
    "name": "Delhi Public School",
    "address": "Sector 21, New Delhi",
    "distance": "0.00 km"
  },
  {
    "id": 2,
    "name": "Modern Public School",
    "address": "Connaught Place, Delhi",
    "distance": "2.45 km"
  },
  {
    "id": 3,
    "name": "Springfield School",
    "address": "Karol Bagh, Delhi",
    "distance": "5.88 km"
  }
]



