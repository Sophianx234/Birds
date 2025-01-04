# Bird Info App
<img src="https://i.ibb.co/wsGKVkg/inter-1.png" alt="Bird Info App" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;">


## Description
Bird Info App is a simple web application that displays a list of birds with their scientific and common names. Users can interact with the app to view, add, and manage bird information. The app is designed to provide an intuitive and user-friendly experience for bird enthusiasts and researchers.

---

## Features
- Display a list of birds with their scientific and common names.
- Add new birds to the list.
- View detailed information about each bird.
- Edit existing bird entries.
- Delete birds from the list.

---

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other Tools**: Axios, React Query

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bird-info-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     REACT_APP_API_URL=<your_api_endpoint>
     ```

4. Start the application:
   ```bash
   npm start
   ```

---

## Usage

1. Open the app in your browser at `http://localhost:3000`.
2. View the list of birds.
3. Add new bird entries using the form.
4. Edit or delete existing entries as needed.

---

## API Endpoints

- `GET /birds`: Retrieve the list of all birds.
- `POST /birds`: Add a new bird.
- `PUT /birds/:id`: Update an existing bird.
- `DELETE /birds/:id`: Delete a bird.

---

## Contribution

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgements
Special thanks to all contributors and the bird enthusiast community for their support.
