# Albums Application

This Angular application demonstrates the use of Angular's routing module and HTTP client for interacting with a RESTful API (JSONPlaceholder).

## Features

- View a list of albums
- Create new albums
- View album details
- Edit album titles
- Delete albums
- View photos associated with albums

## Routes

- `/home` - Static welcome page
- `/about` - Information about the project
- `/albums` - List of all albums with delete functionality
- `/albums/:id` - Detail view for a specific album with edit functionality
- `/albums/:id/photos` - Photos view for a specific album
- Root URL redirects to `/home`

## Technologies Used

- Angular (latest version)
- Angular Router
- HttpClient
- RxJS
- JSONPlaceholder API

## Components

- **Home Component** - Welcome page
- **About Component** - Project information
- **Albums Component** - Displays and manages albums
- **Album Detail Component** - Shows and allows editing of album details
- **Album Photos Component** - Displays photos for a specific album

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `ng serve` to start the development server
4. Navigate to `http://localhost:4200/`

## API Notes

This application uses JSONPlaceholder as the backend API for demonstration purposes. Since JSONPlaceholder doesn't actually persist data on their server, the create, update, and delete operations are simulated with appropriate HTTP responses, but won't actually modify their database.

## Note About JSONPlaceholder Availability

If JSONPlaceholder links are unavailable, please use a VPN to access the API.
