function showSection(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

// Adventure story array (simplified example)
const story = [
  {text:"Morning sunshine fills the room. How do you start your day?", choices:[
    {text:"Go wander around the city streets", next:1},
    {text:"Go out for activities like coffee or mini golf", next:2},
    {text:"Stay cozy at home, chatting and cuddling", next:3}
  ]},
  {text:"Exploring streets, you see a cute market. Next?", choices:[
    {text:"Buy snacks and take selfies", next:4},
    {text:"Watch street performers", next:5},
    {text:"Sit on bench and people-watch", next:6}
  ]}
  // Add the full story array here...
];

// Function to display adventure step
function showAdventureStep(stepIndex) {
  const step = story[stepIndex];
  const container = document.getElementById("adventure-content");
  container.innerHTML = `<p>${step.text}</p>`;
  step.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => showAdventureStep(choice.next);
    container.appendChild(btn);
  });
}
