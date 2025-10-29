🌐 Tech Stack

Frontend Framework: React.js

Styling: Tailwind CSS (or custom CSS)

API: Open Library API 

Routing: React Router

State Management: useState, useEffect (basic hooks)

📁 Project Folder Structure
BookFinder/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── logo.png              # Optional app logo
│   │
│   ├── components/
│   │   ├── Navbar.jsx            # Top navigation bar with search input
│   │   ├── BookCard.jsx          # Displays individual book details
│   │   ├── FilterBar.jsx         # For filtering by author, rating, genre, etc.
│   │   └── Loader.jsx            # Spinner while data is loading
│   │
│   ├── pages/
│   │   ├── Home.jsx              # Main page with search + book list
│   │   ├── BookDetails.jsx       # Detailed info of selected book
│   │   └── About.jsx             # Optional: About the project or Alex
│   │
│   ├── services/
│   │   └── bookService.js        # Handles API calls (fetch/search books)
│   │
│   ├── App.jsx                   # Root component (defines routes)
│   ├── index.js                  # Entry point (renders the app)
│   ├── App.css                   # Global styles (if not using Tailwind)
│   └── tailwind.config.js        # Tailwind config (if used)
│
├── package.json
└── README.md

⚙️ Component Overview
Component	Purpose
Navbar.jsx	Contains search bar and navigation links. On typing a query, triggers search via API.
BookCard.jsx	Displays book image, title, author, rating, price (mocked), etc.
FilterBar.jsx	Allows Alex to filter books by author, category, or rating.
Home.jsx	Main container that fetches and displays a grid of books based on search/filter.
BookDetails.jsx	Shows detailed view when Alex clicks on a book card (description, author bio, etc.).
bookService.js	Contains reusable API functions using axios.
Loader.jsx	Displays while fetching API data.
🧠 Example Workflow (for Alex)

Alex opens the app → lands on Home page.

Searches “Harry Potter” → fetches books via API and displays cards.

Applies filter → chooses “Author: J.K. Rowling” or “Rating: 4+”.

Clicks a card → navigates to detailed page with cover image, description, and author info.
