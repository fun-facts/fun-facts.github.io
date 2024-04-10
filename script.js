const funFacts = [
  "A group of owls is called a parliament.",
  "The population of the earth is about 8 billion people.",
  "The world's quietest room is located at Microsoft and is so quiet you can hear your own heartbeat.",
  "Cats have 32 muscles in each ear.",
  "The world's hottest chili pepper is the Carolina Reaper."
];

function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  return funFacts[randomIndex];
}

document.addEventListener("DOMContentLoaded", function() {
  const factElement = document.getElementById("fact");
  factElement.textContent = getRandomFact();
});
