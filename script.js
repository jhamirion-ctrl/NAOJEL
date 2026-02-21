import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai@0.1.0";

// 1. Setup API
const API_KEY = "PASTE_APIKEY_HERE"; // Replace with your real key
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// 2. AI Logic
const aiBtn = document.getElementById("aiBtn");
const userInput = document.getElementById("userInput");
const aiResponse = document.getElementById("aiResponse");

aiBtn.onclick = async () => {
    const text = userInput.value;
    if (!text) return alert("Tell CalmBot how you feel first!");

    aiResponse.textContent = "CalmBot is thinking...";
    
    try {
        // System instructions to keep it "Calm"
        const prompt = `You are a mental health assistant for students. 
        The student says: "${text}". 
        Give a warm, 2-sentence empathetic response and one very small, actionable self-care tip.
        if requested, include contact information of a mental health professional from prairie view a&m university.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        aiResponse.textContent = response.text();
    } catch (error) {
        console.error(error);
        aiResponse.textContent = "CalmBot is resting right now. Try again in a minute.";
    }
};

// Data arrays from original project
const soloActivities = [
    "Step outside for 5 minutes of fresh air",
    "Do a 2 minute deep breathing exercise",
    "Try a quick grounding exercise (54321 senses)",
    "Stretch your whole body for 3 minutes",
    "Listen to one calming song with eyes closed",
    "Do 10 jumping jacks or a quick shake out",
    "Try a 5 minute yoga flow",
    "Sit in the sun for a few minutes",
    "Do a slow body scan to release tension",
    "Doodle or sketch whatever comes to mind",
    "Write a quick journal entry or brain dump",
    "Take a photo walk and capture small details",
    "Hum or sing quietly to release tension",
    "Rearrange or tidy a small part of your space"
];

const groupActivities = [
    "Take a short walk together",
    "Share one good thing from your day",
    "Do a 2 minute group breathing exercise",
    "Sit outside and chat casually",
    "Play a quick round of 'Would You Rather'",
    "Do a 5 minute group stretch",
    "Watch a funny short video together",
    "Have a 1 song dance break",
    "Try a 60 second drawing challenge",
    "Give each other one sincere compliment",
    "Do a 'rose, thorn, bud' check in",
    "Take a group photo walk",
    "Sit in a common area and people watch",
    "Do a 3 minute 'collective silence' reset"
];

const quotes = [
    "You are doing better than you think.",
    "Small steps still move you forward.",
    "You have handled hard things before — you can handle this too.",
    "Progress is progress, no matter how small.",
    "You deserve rest, kindness, and patience with yourself.",
    "One tough day does not define your whole journey.",
    "It is okay to pause — recharging is part of the process.",
    "Your mental health matters more than any assignment."
];

// --- Logic Implementation ---

// Random Content Logic
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("soloBtn").onclick = () => {
    document.getElementById("soloText").textContent = getRandom(soloActivities);
};

document.getElementById("groupBtn").onclick = () => {
    document.getElementById("groupText").textContent = getRandom(groupActivities);
};

document.getElementById("quoteBtn").onclick = () => {
    document.getElementById("quoteText").textContent = getRandom(quotes);
};

// Theme Switcher Logic
const themeSelect = document.getElementById("themeSelect");
themeSelect.addEventListener("change", (e) => {
    document.body.style.backgroundImage = `url('${e.target.value}')`;
});

// Improved Audio Logic
let isPlaying = false;
const audio = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
    if (!isPlaying) {
        audio.play();
        musicBtn.textContent = "🔇 Mute Sound";
        isPlaying = true;
    } else {
        audio.pause();
        musicBtn.textContent = "🎵 Enable Ambient Sound";
        isPlaying = false;
    }
}

musicBtn.addEventListener("click", toggleMusic);

// Check-in Alert
setInterval(() => { 
    alert("Hey, just checking in. How are you feeling?"); 
}, 6 * 60 * 60 * 1000);

