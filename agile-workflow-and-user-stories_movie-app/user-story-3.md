# Title

## Value Proposition

**As a** `user` <br>
**I want to** `add movies to my watchlist` <br>
**so that** `I can keep track of movies I want to watch later` <br>

## Description

![wireframe](./assets/scribble-watchlist.png)
The user should be able to add movies to their watchlist from the movie detail page. Once added, these movies should appear in the watchlist section, accessible from the bottom navigation bar. The watchlist page should show the added movies with their poster images and ratings. If no movies have been added, the watchlist page should display a message indicating that the watchlist is empty.

## Acceptance Criteria

- [ ] The "Add to Watchlist" button on the movie detail page should add the movie to the user's watchlist.
- [ ] The watchlist page should display all added movies, including their poster image and rating.
- [ ] If no movies are in the watchlist, a message should appear stating that the watchlist is empty.
- [ ] The user should be able to navigate to the watchlist using the bottom navigation bar.

## Tasks

- [ ] Create the feature branch watchlist-functionality
- [ ] Implement the "Add to Watchlist" functionality in the MovieDetails component
- [ ] Store the added movie data in a watchlist state
- [ ] Create the component Watchlist, which renders:
  - [ ] Map through the watchlist state and render the added movies
  - [ ] For each movie, render: - [ ] the poster image of the movie - [ ]the rating of the movie
- [ ] Create an empty state in the Watchlist component
- [ ] Display a message indicating the watchlist is empty if no movies have been added
- [ ] Implement navigation to the Watchlist component using the bottom navigation bar
- [ ] Render the Watchlist component when the watchlist tab is clicked
