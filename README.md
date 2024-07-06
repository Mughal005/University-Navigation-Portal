# Universities Navigation Portal

A web application to help users navigate and explore universities. This project utilizes HTML, CSS, and JavaScript for the frontend and Firebase for the database.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo
A live demo of the project can be found at [Demo Link](#)

## Features
- Search for universities
- View detailed information about universities
- Add universities to favorites
- User authentication with Firebase

## Technologies Used
- HTML
- CSS
- JavaScript
- Firebase

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/universities-navigation-portal.git
    ```
2. Navigate to the project directory:
    ```bash
    cd universities-navigation-portal
    ```
3. Create a Firebase project and configure it. Replace the Firebase config in `firebaseConfig.js` with your Firebase project credentials:
    ```javascript
    // firebaseConfig.js
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    export default firebaseConfig;
    ```


## Usage
1. Open your web browser and navigate to `http://localhost:3000`.
2. Register or log in to the portal.
3. Search for universities using the search bar.
4. Click on a university to view more details.
5. Add universities to your favorites for quick access.

## Project Structure
universities-navigation-portal/
├── public/
│ ├── index.html
│ └── styles.css
├── src/
│ ├── firebaseConfig.js
│ ├── index.js
│ ├── App.js
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── SearchBar.js
│ │ ├── UniversityCard.js
│ │ └── UniversityDetails.js
│ └── pages/
│ ├── HomePage.js
│ ├── LoginPage.js
│ └── FavoritesPage.js
├── .gitignore
├── package.json
└── README.md

## Contributing
Contributions are welcome! Please create a pull request or submit an issue to this repository.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

