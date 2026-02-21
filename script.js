const soloActivities = [
    "Step outside for 5 minutes of fresh air",
    "Do a 2 minute deep breathing exercise",
    "Try a quick grounding exercise (54321 senses)",
    "Stretch your whole body for 3 minutes",
    "Listen to one calming song with eyes closed",
    "Do 10 jumping jacks or a quick shake out",
    "Try a 5 minute yoga flow (YouTube or memory)",
    "Sit in the sun for a few minutes",
    "Do a slow body scan to release tension",
    "Doodle or sketch whatever comes to mind",
    "Write a quick journal entry or brain dump",
    "Take a photo walk and capture small details",
    "Hum or sing quietly to release tension",
    "Rearrange or tidy a small part of your space"
];

document.getElementById("soloBtn").onclick = function() {
    const random = Math.floor(Math.random() * soloActivities.length);
    document.getElementById("soloText").textContent = soloActivities[random];
};

const groupActivities = [
    "Take a short walk together",
    "Share one good thing from your day",
    "Do a 2 minute group breathing exercise",
    "Sit outside and chat casually",
    "Play a quick round of 'Would You Rather'",
    "Do a 5 minute group stretch",
    "Watch a funny short video together",
    "Have a 1 song dance break",
    "Try a 60 second drawing challenge (Skribbl.io)",
    "Give each other one sincere compliment",
    "Do a 'rose, thorn, bud' check in (good, challenge, something to look forward to)",
    "Take a group photo walk",
    "Sit in a common area and people watch",
    "Do a 3 minute 'collective silence' reset"
];

document.getElementById("groupBtn").onclick = function() {
    const random = Math.floor(Math.random() * groupActivities.length);
    document.getElementById("groupText").textContent = groupActivities[random];
};

const quotes = [
    "You are doing better than you think.",
    "Small steps still move you forward.",
    "You have handled hard things before — you can handle this too.",
    "Progress is progress, no matter how small.",
    "You deserve rest, kindness, and patience with yourself.",
    "One tough day does not define your whole journey.",
    "You are learning, growing, and becoming stronger every day.",
    "It is okay to pause — recharging is part of the process.",
    "You do not need to be perfect to make progress.",
    "Your effort matters, even when the results aren’t visible yet.",
    "You are capable of more than you realize.",
    "Take a breath — you are allowed to slow down.",
    "You have overcome 100% of your hardest days so far.",
    "Your future self will thank you for not giving up.",
    "You are not behind — you are on your own timeline.",
    "Asking for help is a sign of strength, not weakness.",
    "You are allowed to rest without earning it.",
    "You are doing your best, and that is enough.",
    "Every challenge you face is shaping you into someone stronger.",
    "You are not alone — many students feel the same way.",
    "Your mental health matters more than any assignment.",
    "You are allowed to take breaks without feeling guilty.",
    "You have got this — one step at a time.",
    "Be proud of how far you have come, even if you are not where you want to be yet."
];
document.getElementById("quoteBtn").onclick = function() { const random = Math.floor(Math.random() * quotes.length); document.getElementById("quoteText").textContent = quotes[random]; };

setInterval(() => { alert("Hey, just checking in. How are you feeling?"); }, 6 * 60 * 60 * 1000); // 6 hours
