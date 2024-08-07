# CaffAnimeList

CaffAnimeList is a web application built using Next.js and TailwindCSS that allows users to browse and search for anime information. It utilizes the Jikan API to fetch data about various anime series and movies.

**Note: This project is still in development.**

## Features

- Browse popular anime
- Search for anime by title
- View detailed information about each anime, including synopsis, ratings, and more

## Tech Stack

- **Frontend Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **API:** [Jikan API](https://jikan.moe/)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/EvanescenT07/CaffAnimeList.git
    cd CaffAnimeList
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add the following environment variable:

    ```plaintext
    NEXT_PUBLIC_ANIME_BASE_URL=https://api.jikan.moe/v4
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Home Page:** Displays a list of popular anime.
- **Search:** Use the search bar to find anime by title.
- **Anime Details:** Click on an anime title to view detailed information, including the synopsis, ratings, and more.
