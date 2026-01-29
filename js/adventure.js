function chooseAdventure(choice) {
  const nameInput = document.getElementById('playerName');
  const name = nameInput ? nameInput.value || 'You' : 'You';

  if (choice === 'city') {
    const place = prompt(`${name}, where should we explore first? (park/museum/cafe)`);
    if (place === 'park') alert(`We run through the park laughing and taking silly pictures 💘`);
    else if (place === 'museum') alert(`We get lost among the exhibits, whispering secrets to each other 🫶`);
    else if (place === 'cafe') alert(`We sip hot chocolate and watch the world go by together ☕❤️`);
    else alert(`We wander aimlessly, enjoying our time together 💕`);
  } else if (choice === 'chaos') {
    const activity = prompt(`${name}, what chaotic thing do we do? (dance/cook/pillowfight)`);
    if (activity === 'dance') alert(`We dance like nobody's watching, laughter fills the room 💃🕺`);
    else if (activity === 'cook') alert(`We make a mess in the kitchen, but it tastes amazing 😋`);
    else if (activity === 'pillowfight') alert(`Feathers fly everywhere, we collapse laughing on the floor 🫶`);
    else alert(`We just enjoy each other's company in a chaotic way 💕`);
  } else if (choice === 'silly') {
    const sillyAction = prompt(`${name}, what silly thing should we do? (sing/jump/draw)`);
    if (sillyAction === 'sing') alert(`We sing loudly in the street, drawing confused stares 😈🎶`);
    else if (sillyAction === 'jump') alert(`We jump in every puddle we find, completely carefree 💦💘`);
    else if (sillyAction === 'draw') alert(`We draw funny faces on each other's notes 😆🖌️`);
    else alert(`We do something so ridiculous that we'll laugh about it forever 😈`);
  }
}
