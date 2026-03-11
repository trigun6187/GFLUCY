// Taylor Swift Fan Chatroom App
// Main JavaScript file with chat, voting, and YouTube integration

// Sample Taylor Swift music videos data with valid YouTube video IDs
// Removed Gangnam Style and added comprehensive song list
const taylorSwiftVideos = [
    // Original videos
    {
        id: '1',
        title: 'Blank Space',
        description: 'Official Music Video for "Blank Space" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/e-ORhEE9VVg/maxresdefault.jpg',
        videoId: 'e-ORhEE9VVg'
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
    },
    // Additional popular songs
    {
        id: '7',
        title: 'Tim McGraw',
        description: 'Official Music Video for "Tim McGraw" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/GkD20ajVxnY/maxresdefault.jpg',
        videoId: 'GkD20ajVxnY'
    },
    {
        id: '8',
        title: 'Teardrops On My Guitar',
        description: 'Official Music Video for "Teardrops On My Guitar" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/xKCek6_dB0M/maxresdefault.jpg',
        videoId: 'xKCek6_dB0M'
    },
    {
        id: '9',
        title: 'Our Song',
        description: 'Official Music Video for "Our Song" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/Jb2stN7kH28/maxresdefault.jpg',
        videoId: 'Jb2stN7kH28'
    },
    {
        id: '10',
        title: 'Picture To Burn',
        description: 'Official Music Video for "Picture To Burn" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/yCMqcFAigRg/maxresdefault.jpg',
        videoId: 'yCMqcFAigRg'
    },
    {
        id: '11',
        title: 'Shouldve Said No',
        description: 'Official Music Video for "Shouldve Said No" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/v9bxXO9fj98/maxresdefault.jpg',
        videoId: 'v9bxXO9fj98'
    },
    {
        id: '12',
        title: 'Im Only Me When Im With You',
        description: 'Official Music Video for "Im Only Me When Im With You" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/AlTfYj7q5gQ/maxresdefault.jpg',
        videoId: 'AlTfYj7q5gQ'
    },
    {
        id: '13',
        title: 'White Horse',
        description: 'Official Music Video for "White Horse" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/D1Xr-JFLxik/maxresdefault.jpg',
        videoId: 'D1Xr-JFLxik'
    },
    {
        id: '14',
        title: 'You Belong With Me',
        description: 'Official Music Video for "You Belong With Me" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/VuNIsY6JdUw/maxresdefault.jpg',
        videoId: 'VuNIsY6JdUw'
    },
    {
        id: '15',
        title: 'Fifteen',
        description: 'Official Music Video for "Fifteen" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/Pb-K2tXWK4w/maxresdefault.jpg',
        videoId: 'Pb-K2tXWK4w'
    },
    {
        id: '16',
        title: 'Fearless',
        description: 'Official Music Video for "Fearless" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/ptSjNWnzpjg/maxresdefault.jpg',
        videoId: 'ptSjNWnzpjg'
    },
    {
        id: '17',
        title: 'Mine',
        description: 'Official Music Video for "Mine" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/XPBwXKgDTdE/maxresdefault.jpg',
        videoId: 'XPBwXKgDTdE'
    },
    {
        id: '18',
        title: 'Back To December',
        description: 'Official Music Video for "Back To December" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/QUwxKWT6m7U/maxresdefault.jpg',
        videoId: 'QUwxKWT6m7U'
    },
    {
        id: '19',
        title: 'Mean',
        description: 'Official Music Video for "Mean" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/jYa1eI1hpDE/maxresdefault.jpg',
        videoId: 'jYa1eI1hpDE'
    },
    {
        id: '20',
        title: 'The Story Of Us',
        description: 'Official Music Video for "The Story Of Us" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/nN6VR92V70M/maxresdefault.jpg',
        videoId: 'nN6VR92V70M'
    },
    {
        id: '21',
        title: 'Sparks Fly',
        description: 'Official Music Video for "Sparks Fly" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/oKar-tF__ac/maxresdefault.jpg',
        videoId: 'oKar-tF__ac'
    },
    {
        id: '22',
        title: 'Ours',
        description: 'Official Music Video for "Ours" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/LZ34LlaIk88/maxresdefault.jpg',
        videoId: 'LZ34LlaIk88'
    },
    {
        id: '23',
        title: 'We Are Never Ever Getting Back Together',
        description: 'Official Music Video for "We Are Never Ever Getting Back Together" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/WA4iX5D9Z64/maxresdefault.jpg',
        videoId: 'WA4iX5D9Z64'
    },
    {
        id: '24',
        title: 'Begin Again',
        description: 'Official Music Video for "Begin Again" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/cMPEd8m79Hw/maxresdefault.jpg',
        videoId: 'cMPEd8m79Hw'
    },
    {
        id: '25',
        title: 'I Knew You Were Trouble',
        description: 'Official Music Video for "I Knew You Were Trouble" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/vNoKguSdy4Y/maxresdefault.jpg',
        videoId: 'vNoKguSdy4Y'
    },
    {
        id: '26',
        title: '22',
        description: 'Official Music Video for "22" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/AgFeZr5ptV8/maxresdefault.jpg',
        videoId: 'AgFeZr5ptV8'
    },
    {
        id: '27',
        title: 'Everything Has Changed',
        description: 'Official Music Video for "Everything Has Changed" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/w1oM3kQpXRo/maxresdefault.jpg',
        videoId: 'w1oM3kQpXRo'
    },
    {
        id: '28',
        title: 'The Last Time',
        description: 'Official Music Video for "The Last Time" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/QuijXg8wm28/maxresdefault.jpg',
        videoId: 'QuijXg8wm28'
    },
    {
        id: '29',
        title: 'Red',
        description: 'Official Music Video for "Red" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/Zlot0i3Zykw/maxresdefault.jpg',
        videoId: 'Zlot0i3Zykw'
    },
    {
        id: '30',
        title: 'Shake It Off',
        description: 'Official Music Video for "Shake It Off" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/nfWlot6h_JM/maxresdefault.jpg',
        videoId: 'nfWlot6h_JM'
    },
    {
        id: '31',
        title: 'Blank Space',
        description: 'Official Music Video for "Blank Space" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/e-ORhEE9VVg/maxresdefault.jpg',
        videoId: 'e-ORhEE9VVg'
    },
    {
        id: '32',
        title: 'Style',
        description: 'Official Music Video for "Style" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/-CmadmM5cOk/maxresdefault.jpg',
        videoId: '-CmadmM5cOk'
    },
    {
        id: '33',
        title: 'Bad Blood',
        description: 'Official Music Video for "Bad Blood" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/QcIy9NiNbmo/maxresdefault.jpg',
        videoId: 'QcIy9NiNbmo'
    },
    {
        id: '34',
        title: 'Wildest Dreams',
        description: 'Official Music Video for "Wildest Dreams" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/IdneKLhsWOQ/maxresdefault.jpg',
        videoId: 'IdneKLhsWOQ'
    },
    {
        id: '35',
        title: 'Out Of The Woods',
        description: 'Official Music Video for "Out Of The Woods" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/JLf9q36UsBk/maxresdefault.jpg',
        videoId: 'JLf9q36UsBk'
    },
    {
        id: '36',
        title: 'New Romantics',
        description: 'Official Music Video for "New Romantics" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/wyK7YuwUWsU/maxresdefault.jpg',
        videoId: 'wyK7YuwUWsU'
    },
    {
        id: '37',
        title: 'Look What You Made Me Do',
        description: 'Official Music Video for "Look What You Made Me Do" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/3tmd-ClpJxA/maxresdefault.jpg',
        videoId: '3tmd-ClpJxA'
    },
    {
        id: '38',
        title: 'Ready For It?',
        description: 'Official Music Video for "Ready For It?" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/wIft-t-MQuE/maxresdefault.jpg',
        videoId: 'wIft-t-MQuE'
    },
    {
        id: '39',
        title: 'End Game',
        description: 'Official Music Video for "End Game" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/dfnCAmr569k/maxresdefault.jpg',
        videoId: 'dfnCAmr569k'
    },
    {
        id: '40',
        title: 'Delicate',
        description: 'Official Music Video for "Delicate" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/tCXGJQYZ9JA/maxresdefault.jpg',
        videoId: 'tCXGJQYZ9JA'
    },
    {
        id: '41',
        title: 'ME!',
        description: 'Official Music Video for "ME!" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/FuXNumBwDOM/maxresdefault.jpg',
        videoId: 'FuXNumBwDOM'
    },
    {
        id: '42',
        title: 'You Need To Calm Down',
        description: 'Official Music Video for "You Need To Calm Down" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/Dkk9gvTmCXY/maxresdefault.jpg',
        videoId: 'Dkk9gvTmCXY'
    },
    {
        id: '43',
        title: 'Lover',
        description: 'Official Music Video for "Lover" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/-BjZmE2gtdo/maxresdefault.jpg',
        videoId: '-BjZmE2gtdo'
    },
    {
        id: '44',
        title: 'The Man',
        description: 'Official Music Video for "The Man" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/AqAJLh9wuZ0/maxresdefault.jpg',
        videoId: 'AqAJLh9wuZ0'
    },
    {
        id: '45',
        title: 'Cardigan',
        description: 'Official Music Video for "Cardigan" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/K-a8s8OLBSE/maxresdefault.jpg',
        videoId: 'K-a8s8OLBSE'
    },
    {
        id: '46',
        title: 'Willow',
        description: 'Official Music Video for "Willow" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/RsEZmictANA/maxresdefault.jpg',
        videoId: 'RsEZmictANA'
    },
    {
        id: '47',
        title: 'I Bet You Think About Me',
        description: 'Official Music Video for "I Bet You Think About Me" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/5UMCrq-bBCg/maxresdefault.jpg',
        videoId: '5UMCrq-bBCg'
    },
    {
        id: '48',
        title: 'All Too Well (The Short Film)',
        description: 'Official Music Video for "All Too Well (The Short Film)" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/tollGa3S0o8/maxresdefault.jpg',
        videoId: 'tollGa3S0o8'
    },
    {
        id: '49',
        title: 'I Can See You',
        description: 'Official Music Video for "I Can See You" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/lVkKLf4DCn8/maxresdefault.jpg',
        videoId: 'lVkKLf4DCn8'
    },
    {
        id: '50',
        title: 'Anti-Hero',
        description: 'Official Music Video for "Anti-Hero" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/b1kbLwvqugk/maxresdefault.jpg',
        videoId: 'b1kbLwvqugk'
    },
    {
        id: '51',
        title: 'Bejeweled',
        description: 'Official Music Video for "Bejeweled" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/b7QlX3yR2xs/maxresdefault.jpg',
        videoId: 'b7QlX3yR2xs'
    },
    {
        id: '52',
        title: 'Lavender Haze',
        description: 'Official Music Video for "Lavender Haze" by Taylor Swift',
        thumbnail: 'https://img.youtube.com/vi/h8DLofLM7No/maxresdefault.jpg',
        videoId: 'h8DLofLM7No'
    }
];

// Global variables
let player;
let isYouTubeReady = false;
let currentVideoId = '';
let swiftieCounter = 1;
let usedSwiftieNames = new Set();
let currentSongIndex = 0;
let isVotingActive = false;

// DOM Elements
const youtubePlayer = document.getElementById('youtube-player');
const videoTitle = document.getElementById('video-title');
const videoDescription = document.getElementById('video-description');
const videoContainer = document.querySelector('.video-container');
const videoError = document.getElementById('video-error');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const videoOptionsContainer = document.getElementById('video-options');
const votingContainer = document.getElementById('voting-container');
const votingOptions = document.getElementById('voting-options');
const votingThanks = document.getElementById('voting-thanks');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Check for existing Swiftie name in localStorage
    const storedName = localStorage.getItem('swiftieName');
    if (storedName) {
        // Use existing name
        swiftieCounter = parseInt(storedName.split(' ')[1]) + 1;
        usedSwiftieNames.add(storedName);
    } else {
        // Generate first Swiftie name
        generateAndStoreSwiftieName();
    }
    
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

// Generate and store a unique Swiftie username
function generateAndStoreSwiftieName() {
    // Find next available number
    while (usedSwiftieNames.has(`Swifties${swiftieCounter}`)) {
        swiftieCounter++;
    }
    const username = `Swifties${swiftieCounter}`;
    usedSwiftieNames.add(username);
    localStorage.setItem('swiftieName', username);
    swiftieCounter++;
    return username;
}

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
        youtubePlayer.style.display = 'none';
        videoError.style.display = 'block';
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
    
    // When video ends, start voting for next song
    if (event.data === YT.PlayerState.ENDED && !isVotingActive) {
        startVoting();
    }
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

// Show video error message
function showVideoError() {
    videoContainer.style.display = 'none';
    videoError.style.display = 'block';
}

// Update video info display
function updateVideoInfo(videoId) {
    const video = taylorSwiftVideos.find(v => v.videoId === videoId);
    if (video) {
        videoTitle.textContent = video.title;
        videoDescription.textContent = video.description;
    }
}

// Set up event listeners
function setupEventListeners() {
    // Send message button
    sendBtn.addEventListener('click', sendMessage);
    
    // Enter key in message input field
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Video options click
    videoOptionsContainer.addEventListener('click', function(e) {
        if (e.target.closest('.video-option')) {
            const videoOption = e.target.closest('.video-option');
            const videoId = videoOption.dataset.videoId;
            voteForVideo(videoId, videoOption);
        }
    });
    
    // Voting option click
    votingOptions.addEventListener('click', function(e) {
        if (e.target.closest('.voting-option')) {
            const votingOption = e.target.closest('.voting-option');
            const videoId = votingOption.dataset.videoId;
            handleVotingVote(videoId, votingOption);
        }
    });
}

// Initialize chat
function initializeChat() {
    // Add welcome message
    addMessage('system', 'Welcome to the Taylor Swift Fan Chatroom! Vote for videos to play next.');
    
    // Display current user's Swiftie name
    const username = getSwiftieUsername();
    addMessage('system', `You are now known as ${username} in this chatroom!`);
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

// Get current Swiftie username
function getSwiftieUsername() {
    // Get from localStorage or generate
    const storedName = localStorage.getItem('swiftieName');
    return storedName || generateAndStoreSwiftieName();
}

// Send message
function sendMessage() {
    const message = messageInput.value.trim();
    
    // Validate message
    if (message) {
        const username = getSwiftieUsername();
        addMessage('user', message, username);
        messageInput.value = '';
    }
}

// Generate a unique Swiftie username
function generateAndStoreSwiftieName() {
    // Find next available number
    while (usedSwiftieNames.has(`Swifties${swiftieCounter}`)) {
        swiftieCounter++;
    }
    const username = `Swifties${swiftieCounter}`;
    usedSwiftieNames.add(username);
    localStorage.setItem('swiftieName', username);
    swiftieCounter++;
    return username;
}

// Display video options
function displayVideoOptions() {
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
        videoOptionsContainer.appendChild(videoOption);
    });
}

// Vote for a video
function voteForVideo(videoId, element) {
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
            playVideo(videoId);
        }, 500);
    }
}

// Start voting for next song
function startVoting() {
    if (isVotingActive) return;
    isVotingActive = true;
    
    // Randomly select two distinct songs
    const availableVideos = taylorSwiftVideos.filter(v => v.id !== currentVideoId);
    if (availableVideos.length < 2) return;
    
    // Shuffle and pick first two
    const shuffled = [...availableVideos].sort(() => Math.random() - 0.5);
    const song1 = shuffled[0];
    const song2 = shuffled[1];
    
    // Store selected songs
    window.selectedVotingSongs = [song1, song2];
    
    // Display voting options
    votingOptions.innerHTML = '';
    
    // Create voting options
    const voteOption1 = document.createElement('div');
    voteOption1.classList.add('voting-option');
    voteOption1.dataset.videoId = song1.videoId;
    voteOption1.innerHTML = `
        <img src="${song1.thumbnail}" alt="${song1.title}">
        <h4>${song1.title}</h4>
    `;
    votingOptions.appendChild(voteOption1);
    
    const voteOption2 = document.createElement('div');
    voteOption2.classList.add('voting-option');
    voteOption2.dataset.videoId = song2.videoId;
    voteOption2.innerHTML = `
        <img src="${song2.thumbnail}" alt="${song2.title}">
        <h4>${song2.title}</h4>
    `;
    votingOptions.appendChild(voteOption2);
    
    // Show voting container
    votingContainer.style.display = 'block';
}

// Handle voting vote
function handleVotingVote(videoId, element) {
    // Hide voting container
    votingContainer.style.display = 'none';
    isVotingActive = false;
    
    // Play selected video
    playVideo(videoId);
    
    // Show thanks message
    votingThanks.style.display = 'block';
    setTimeout(() => {
        votingThanks.style.display = 'none';
    }, 3000);
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