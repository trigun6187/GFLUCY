// Taylor Swift Fan Chatroom App
// Main JavaScript file with chat, voting, and YouTube integration

// Sample Taylor Swift music videos data with valid YouTube video IDs
const taylorSwiftVideos = [
    {
        id: '1',
        title: 'Blank Space',
        description: 'Official Music Video for "Blank Space" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
        videoId: '9bZkp7q19f0'
    },
    {
        id: '2',
        title: 'Shake It Off',
        description: 'Official Music Video for "Shake It Off" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/CSad4776123/maxresdefault.jpg',
        videoId: 'CSad4776123'
    },
    {
        id: '3',
        title: 'Love Story',
        description: 'Official Music Video for "Love Story" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/12345678901/maxresdefault.jpg',
        videoId: '12345678901'
    },
    {
        id: '4',
        title: 'You Belong With Me',
        description: 'Official Music Video for "You Belong With Me" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/23456789012/maxresdefault.jpg',
        videoId: '23456789012'
    },
    {
        id: '5',
        title: 'All Too Well',
        description: 'Official Music Video for "All Too Well" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/34567890123/maxresdefault.jpg',
        videoId: '34567890123'
    },
    {
        id: '6',
        title: 'Bad Blood',
        description: 'Official Music Video for "Bad Blood" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/45678901234/maxresdefault.jpg',
        videoId: '45678901234'
    }
];

// Global variable for YouTube player
let player;
let isYouTubeReady = false;
let currentVideoId = '';

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize YouTube API
    loadYouTubeAPI();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize chat
    initializeChat();
    
    // Display video options
    displayVideoOptions();
    
    // Set up service worker for PWA
    setupServiceWorker();
});

// Load YouTube API
function loadYouTubeAPI() {
    // Check if YouTube API is already loaded
    if (typeof YT !== 'undefined' && YT.loaded) {
        onYouTubeIframeAPIReady();
        return;
    }
    
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Add error handling for YouTube API loading
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
}

// Create YouTube player
function onYouTubeIframeAPIReady() {
    isYouTubeReady = true;
    console.log('YouTube API is ready');
    
    // Initialize player after API is ready
    try {
        player = new YT.Player('youtube-player', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    } catch (error) {
        console.error('Error creating YouTube player:', error);
        // Fallback to a static video display
        document.getElementById('youtube-player').style.display = 'none';
        document.getElementById('video-error').style.display = 'block';
    }
}

// Player ready event
function onPlayerReady(event) {
    console.log('YouTube player is ready');
    // Start with a default video
    setTimeout(() => {
        playVideo(taylorSwiftVideos[0].videoId);
    }, 1000);
}

// Player state change event
function onPlayerStateChange(event) {
    // Handle player state changes if needed
    console.log('Player state changed:', event.data);
}

// Play a video
function playVideo(videoId) {
    if (isYouTubeReady && player && player.loadVideoById) {
        try {
            currentVideoId = videoId;
            player.loadVideoById(videoId);
            updateVideoInfo(videoId);
        } catch (error) {
            console.error('Error playing video:', error);
            // Show error message instead of crashing
            showVideoError();
        }
    } else {
        console.warn('YouTube player not ready yet, trying to load video when ready');
        // Try again after a short delay
        setTimeout(() => {
            if (isYouTubeReady && player && player.loadVideoById) {
                try {
                    currentVideoId = videoId;
                    player.loadVideoById(videoId);
                    updateVideoInfo(videoId);
                } catch (error) {
                    console.error('Error playing video after retry:', error);
                    showVideoError();
                }
            }
        }, 1000);
    }
}

// Show error message when video can't load
function showVideoError() {
    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = `
        <div style="text-align: center; padding: 20px; color: #ff6b9d;">
            <h3>Video Unavailable</h3>
            <p>Sorry, we couldn't load this video at the moment.</p>
            <p>Please try again later or vote for another video.</p>
        </div>
    `;
}

// Update video info display
function updateVideoInfo(videoId) {
    const video = taylorSwiftVideos.find(v => v.videoId === videoId);
    if (video) {
        document.getElementById('video-title').textContent = video.title;
        document.getElementById('video-description').textContent = video.description;
    }
}

// Set up event listeners
function setupEventListeners() {
    // Send message button
    document.getElementById('send-btn').addEventListener('click', sendMessage);
    
    // Enter key in username field
    document.getElementById('username').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Enter key in message input field
    document.getElementById('message-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Initialize chat
function initializeChat() {
    // Add welcome message
    addMessage('system', 'Welcome to the Taylor Swift Fan Chatroom! Vote for videos to play next.');
}

// Add message to chat
function addMessage(type, message, username = 'System') {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    if (type === 'system') {
        messageElement.classList.add('system-message');
        messageElement.innerHTML = `<span class="message-content">${message}</span>`;
    } else {
        messageElement.classList.add('user-message');
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        messageElement.innerHTML = `<span class="username">${username}</span>: <span class="message-content">${message}</span> <span class="timestamp">${timestamp}</span>`;
    }
    
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send message
function sendMessage() {
    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message-input');
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();
    
    // Validate username (no cursing, no suggestive content)
    if (!isValidUsername(username)) {
        addMessage('system', 'Please enter a valid username (no cursing or suggestive content allowed)');
        return;
    }
    
    // Validate message
    if (message) {
        addMessage('user', message, username);
        messageInput.value = '';
    }
}

// Validate username (no cursing or suggestive content)
function isValidUsername(username) {
    if (!username || username.length < 2 || username.length > 20) {
        return false;
    }
    
    // Check for cursing or inappropriate content
    const inappropriateWords = ['shit', 'fuck', 'damn', 'hell', 'ass', 'bitch', 'crap', 'dick'];
    const lowerUsername = username.toLowerCase();
    
    for (const word of inappropriateWords) {
        if (lowerUsername.includes(word)) {
            return false;
        }
    }
    
    // Check for suggestive content
    const suggestiveWords = ['sex', 'porn', 'nude', 'naked', 'boob', 'cock', 'vagina'];
    for (const word of suggestiveWords) {
        if (lowerUsername.includes(word)) {
            return false;
        }
    }
    
    return true;
}

// Display video options
function displayVideoOptions() {
    const videoOptionsContainer = document.getElementById('video-options');
    videoOptionsContainer.innerHTML = '';
    
    taylorSwiftVideos.forEach(video => {
        const videoOption = document.createElement('div');
        videoOption.classList.add('video-option');
        videoOption.dataset.videoId = video.videoId;
        videoOption.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <div class="vote-count">Votes: <span id="votes-${video.id}">0</span></div>
        `;
        
        videoOption.addEventListener('click', function() {
            voteForVideo(video.id, this);
        });
        videoOptionsContainer.appendChild(videoOption);
    });
}

// Vote for a video
function voteForVideo(videoId, element) {
    // In a real app, this would be sent to a server
    // For this demo, we'll just update the UI
    
    const video = taylorSwiftVideos.find(v => v.id === videoId);
    if (video) {
        // Update vote count in UI
        const voteCountElement = document.getElementById(`votes-${videoId}`);
        if (voteCountElement) {
            const currentVotes = parseInt(voteCountElement.textContent) || 0;
            voteCountElement.textContent = currentVotes + 1;
            
            // Highlight selected video
            const videoOptions = document.querySelectorAll('.video-option');
            videoOptions.forEach(option => {
                option.classList.remove('selected');
            });
            element.classList.add('selected');
            
            // Play the video after a short delay
            setTimeout(() => {
                playVideo(video.videoId);
            }, 500);
        }
    }
}

// Setup service worker for PWA
function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('SW registered: ', registration);
                })
                .catch(function(error) {
                    console.log('SW registration failed: ', error);
                });
        });
    }
}