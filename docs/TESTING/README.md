# Taylor Swift Fan Chatroom

A Progressive Web App (PWA) for Taylor Swift fans to chat and vote on which music video plays next.

## Features

- Dark mode interface with vibrant Taylor Swift themed colors
- Chat functionality for fans to discuss music
- Voting system to choose which music video plays next
- YouTube video playback directly in the app
- Kid-friendly environment (no cursing or suggestive content)
- Responsive design that works on mobile and desktop
- PWA capabilities for offline access and installation

## How to Use

1. Enter a username (no cursing or suggestive content allowed)
2. Chat with other fans in the chat room
3. Vote for your favorite Taylor Swift music videos
4. The selected video will play automatically

## Hosting on GitHub Pages

To host this app on GitHub Pages:

1. Create a new repository on GitHub
2. Push this code to your repository
3. Go to your repository settings
4. In the "Pages" section, select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Save and your site will be live at `https://<username>.github.io/<repository-name>`

## Technical Details

- Built as a Progressive Web App (PWA)
- Uses YouTube IFrame API for video playback
- Responsive design with CSS Grid and Flexbox
- Service Worker for offline functionality
- Manifest file for PWA installation

## Development

This is a client-side only application. For a production version, you would need to:

1. Implement a backend to handle:
   - User authentication (without phone/email)
   - Message persistence
   - Vote tracking
2. Add proper error handling
3. Implement real-time updates using WebSockets or similar

## License

This project is created for educational purposes and fan enjoyment only.