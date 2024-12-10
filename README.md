# Game Recommendation Wizard

## Overview

The **Game Recommendation Wizard** is a personalized game suggestion tool designed to help users discover new games based on their platform preferences, favorite genres, and previously played titles. The wizard uses a **Cosine Similarity** algorithm to provide relevant game recommendations from the Game Wizards library, enhancing user engagement by offering tailored suggestions without the need for users to leave the platform.

This application retrieves game data through the **RAWG.io API**, allowing users to select their preferences and receive recommendations based on real-time data. The platform is built with **React** and utilizes **Axios** for handling API requests and **Cosine Similarity** for generating personalized game suggestions.

## Features
- **Personalized Recommendations**: Users can input their platform preferences, genres, and previously played games to get a curated list of recommended games.
- **Game Details Page**: Clickable game recommendations lead to detailed pages with game descriptions, ratings, release dates, and more.
- **User-friendly Interface**: Simple steps for users to select their preferences and get real-time suggestions.
- **Dynamic Experience**: The system adapts to the user’s choices, providing recommendations for platforms, genres, and games.
- **Final Outcome**: At the end of the wizard, users are shown a summary of their selections and can browse the Game Library or change their preferences.

## Technologies Used
- **React.js**: For building the user interface and handling state management.
- **Axios**: To interact with the RAWG.io API and retrieve game data.
- **Cosine Similarity**: For the machine learning algorithm to compare user preferences and generate personalized recommendations.
- **RAWG.io API**: The external data source providing detailed information on thousands of games.

## Installation

To run this project locally, you will need **Node.js** and **npm** installed. 

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/capstone-site.git

2. Navigate into the project directory
   ```bash
   cd capstone-site

3. Install the dependencies
   ```bash
   npm install

4. Start the Development Server:
   ```bash
   npm start

Your app will now be available at http://localhost:3000

---
## Development

The **Game Recommendation Wizard** is developed using modern web technologies with a focus on user-centric design and real-time personalized recommendations. The machine learning aspect of the project relies on the **Cosine Similarity** algorithm to compute similarity scores between a user's preferences and the available games in the Game Wizards database.

### Development Phases:
- **UI/UX Design**: The user interface was designed to be intuitive, providing an easy way for users to input their preferences and navigate through their recommendations.
- **API Integration**: The app pulls data from the **RAWG.io API**, which provides detailed game metadata (platforms, genres, release dates, etc.). **Axios** handles the API requests, and the data is processed to match user inputs.
- **Machine Learning Algorithm**: We implemented the **Cosine Similarity** algorithm, which takes the user's selected preferences and compares them to games in the database to generate a list of relevant recommendations.
- **Testing & Validation**: The app went through a thorough testing process, including **unit testing**, **integration testing**, and **user acceptance testing (UAT)**, ensuring that the recommendation system works as intended.

## User Guide

### 1. Access the Game Recommendation Wizard
- Open your web browser and go to [https://capstone-site.vercel.app](https://capstone-site.vercel.app).
- Click on **"Get Started"** to begin.

### 2. Select Your Preferred Platforms
- On the **Platform Selection** page, choose your preferred gaming platforms (e.g., PlayStation, Xbox, PC).
- After selecting, click **“Next”**.

### 3. Select Your Favorite Game Genres
- Choose the genres you enjoy (e.g., RPG, Action, Strategy).
- Click **“Next”** after making your selections.

### 4. Select Previously Played Games
- Pick games you’ve enjoyed in the past from the list.
- Click **“Next”** to proceed.

### 5. View Recommended Platforms, Genres, and Games
- View your recommended platforms, genres, and games.
- You can click on any game title to get detailed information about it.

### 6. Finish the Wizard
- Once you've reviewed your recommendations, click **“Finish”**.
- You'll be taken to a **Thank You** page, with options to either go back and adjust your selections or continue browsing the Game Library.

## Future Enhancements
- **User Feedback Integration**: Implement a feedback mechanism to improve recommendation accuracy based on user ratings.
- **Expanded Game Database**: Continue to add new games to the recommendation system for more diverse suggestions.
- **Subscription Model**: After the feature is out of beta, a subscription model may be introduced to provide premium recommendations and additional features.

## Contributing

We welcome contributions to improve the Game Recommendation Wizard! If you'd like to help with new features, bug fixes, or documentation, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Open a pull request to the main repository.
