# Title

## Value Proposition

**As a** `user` <br>
**I want to** `view detailed information about a movie when I click on it`<br>
**so that**`I can learn more about the movie before deciding to watch or add it to my watchlist` <br>

## Description

![wireframe](./assets/scribble-movie-detail-page.png)
The user should be able to click on any movie in the main list and be taken to a detailed view page. This page will display the movie's title, release date, description, and a larger version of the movie poster. The page will also have a button that allows the user to add the movie to their watchlist.

## Acceptance Criteria

- [ ] The user should be able to click on a movie in the main list to view more details.
- [ ] The movie detail page should display the title, release date, description, and poster image.
- [ ] There should be a button labeled "Add to Watchlist."
- [ ] The back button should allow the user to return to the main movie list.

## Tasks

- [ ] Create the feature branch movie-details-view
- [ ] Implement the navigation logic to route to the movie details page when a movie is clicked
- [ ] Fetch the detailed movie data from The MovieDB API using the selected movie's ID
- [ ] Implement error handling logic to display an error message if there's an issue loading the movie details
- [ ] Create the component MovieDetails, which renders:
  - [ ] the title of the movie
  - [ ] the release date of the movie
  - [ ] the poster image of the movie
  - [ ] the description of the movie
  - [ ] the "Add to Watchlist" button
- [ ] Render the MovieDetails component when navigating to a movie detail page
- [ ] Implement the back button functionality to navigate back to the movie list
