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

### Step-by-Step Instructions:

1. **Create a new GitHub repository**
   - Go to GitHub.com and create a new repository
   - Name it something like `taylor-swift-chatroom`
   - Make sure it's public

2. **Upload your files**
   - You can either:
     - Clone the repository locally and add all the files we created
     - Or upload the files directly through GitHub's web interface

3. **Push files to GitHub**
   If cloning locally:
   ```bash
   git clone https://github.com/your-username/taylor-swift-chatroom.git
   cd taylor-swift-chatroom
   # Add all your files here
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be live at `https://your-username.github.io/taylor-swift-chatroom`

## Files Included

- `index.html` - Main application structure
- `styles.css` - Dark mode styling with vibrant colors
- `app.js` - JavaScript functionality for chat and voting
- `sw.js` - Service worker for PWA functionality
- `manifest.json` - PWA manifest file
- `README.md` - This documentation file

## Technical Details

This is a client-side only application. For a production version, you would need to:

1. Implement a backend to handle:
   - User authentication (without phone/email)
   - Message persistence
   - Vote tracking
2. Add proper error handling
3. Implement real-time updates using WebSockets or similar

## Troubleshooting

### YouTube Player Issues
If you encounter YouTube player errors:
- The error "Error 153: Video player configuration error" is common with certain video IDs
- This is a known limitation with YouTube's API and may occur due to:
  - Video unavailability
  - Network restrictions
  - YouTube's content restrictions
- The application gracefully handles these errors and continues to function for all other features

### GitHub Pages Deployment Issues
If your site doesn't load properly:
1. Make sure you're using the correct branch (main)
2. Make sure the root folder is selected
3. Wait a few minutes for GitHub Pages to build
4. Check the GitHub Pages section in repository settings for any error messages

## License

This project is created for educational purposes and fan enjoyment only.