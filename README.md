# ramen-rating-app
# Ramen Menu Web App

This project is a simple **Ramen Menu Web Application** that allows users to view different types of ramen, click on images to see detailed information, and add new ramen entries via a form submission.

## Features

- Display a list of ramen images dynamically.
- Click on a ramen image to display its details.
- Add new ramen images and details via a form.
- Supports both local and online images.
- Dynamically updates the DOM without requiring data persistence.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and layout.
- **JavaScript**: Dynamic content manipulation.

## Setup Instructions

1. Clone this repository:
   ```sh
   git clone https://github.com/vasileiosInnovs/ramen-rating-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd ramen-menu-app
   ```
3. Open `index.html` in your browser.

## File Structure

```
📂 ramen-menu-app
├── 📜 index.html  # Main HTML structure
├── 📂 style       # Styling for the page
├── 📜 index.js    # JavaScript logic
├── 📂 images      # Folder for local ramen images
└── 📜 README.md   # Project documentation


## How It Works

1. **Displays ramen images** dynamically from an array.
2. **Clicking an image** shows the ramen’s details (name, restaurant, rating, and comment).
3. **Submitting the form** adds a new ramen entry to the list.
4. **Handles both local and online image sources** dynamically.
5. **Resets the form** after submission.

## Future Improvements
- Add persistent storage (local storage or database integration).
- Allow image uploads instead of just URLs.
- Implement edit and delete functionality for ramen entries.


Enjoy your Ramen Menu App! 🍜😃