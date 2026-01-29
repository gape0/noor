const story = {
  0: {text:"Morning sunshine fills the room. How do you start your day?", choices:[{text:"Go wander around the city streets", next:1}, {text:"Go out for activities like coffee or mini golf", next:2}, {text:"Stay cozy at home, chatting and cuddling", next:3}]},
  1: {text:"Strolling through the streets, the city feels alive. Where to head?", choices:[{text:"Explore a quirky market full of treats", next:4}, {text:"Visit a street performer and watch them perform", next:5}, {text:"Sit on a bench and people-watch together", next:6}]},
  2: {text:"At activities, excitement is in the air. Pick one to start.", choices:[{text:"Bowling: try for fun strikes", next:7}, {text:"Coffee: enjoy aromas and talk together", next:8}, {text:"Mini golf: playful competition with laughs", next:9}]},
  3: {text:"Home feels warm. What do you do first?", choices:[{text:"Read a story together aloud", next:10}, {text:"Play a board game or cards", next:11}, {text:"Cuddle and chat about life dreams", next:12}]},
  4: {text:"Market treats are delicious. Share them or do something else?", choices:[{text:"Share snacks and take funny selfies", next:13}, {text:"Buy small souvenirs for each other", next:14}, {text:"Try a really unusual snack together", next:15}]},
  5: {text:"The performer amazes you. How do you react?", choices:[{text:"Cheer loudly and dance along", next:16}, {text:"Record a funny video to remember", next:17}, {text:"Tip generously and smile at each other", next:18}]},
  6: {text:"Sitting on the bench, a dog approaches. What do you do?", choices:[{text:"Pet the dog and play together", next:19}, {text:"Take cute photos of the moment", next:20}, {text:"Chat about childhood memories while watching people", next:21}]},
  7: {text:"Bowling begins. First throw approaches. Outcome?", choices:[{text:"Strike! Celebrate with laughter", next:22}, {text:"Spare! Giggle at your attempts", next:23}, {text:"Gutter ball 😅, laugh anyway", next:24}]},
  8: {text:"Coffee done. Next step?", choices:[{text:"Stay and sip slowly, talk more", next:22}, {text:"Take coffee to go, walk nearby", next:23}, {text:"Order a second cup and enjoy pastries", next:24}]},
  9: {text:"Mini golf starts. How do you play?", choices:[{text:"Compete playfully, joke about misses", next:22}, {text:"Help each other aim shots", next:23}, {text:"Just enjoy hitting balls and laughing", next:24}]},
  10: {text:"Reading aloud. Pick story type?", choices:[{text:"Funny story that makes you laugh", next:22}, {text:"Romantic tale that touches your hearts", next:23}, {text:"Adventure story to act out together", next:24}]},
  11: {text:"Board game time. Who goes first?", choices:[{text:"You go first, teasing playfully", next:22}, {text:"Let partner start and cheer them", next:23}, {text:"Take turns quickly joking all along", next:24}]},
  12: {text:"Cuddling and chatting. Topic?", choices:[{text:"Talk about dreams and future adventures", next:22}, {text:"Share funny or embarrassing stories", next:23}, {text:"Discuss favorite memories and secrets", next:24}]},
  13: {text:"Snacks done. Lunch time! What to eat?", choices:[{text:"Cook together something simple yet delicious", next:25}, {text:"Go to a small café nearby", next:26}, {text:"Order delivery and eat cozy at home", next:27}]},
  14: {text:"Souvenir bought. Next lunch choice?", choices:[{text:"Try exotic dishes together for fun", next:25}, {text:"Stick to comfort foods you love", next:26}, {text:"Mix both comfort and new foods", next:27}]},
  15: {text:"Tried unusual snack. Afternoon approaches. What do you do?", choices:[{text:"Share reactions with strangers nearby", next:28}, {text:"Walk to park and laugh at the experience", next:29}, {text:"Take selfies to remember the silly moment", next:30}]},
  16: {text:"Cheering and dancing done. Next activity?", choices:[{text:"Go to a nearby park for a walk", next:28}, {text:"Visit an art gallery together", next:29}, {text:"Stop at a small shop to browse", next:30}]},
  17: {text:"Video recorded. Next choice?", choices:[{text:"Take a long nature walk", next:28}, {text:"Visit an art exhibit", next:29}, {text:"Sit in a quiet café and relax", next:30}]},
  18: {text:"Tipped performer. Next?", choices:[{text:"Relax in the park enjoying nature", next:28}, {text:"Walk along the river watching scenery", next:29}, {text:"Visit library to explore books", next:30}]},
  19: {text:"Played with dog. Afternoon ideas?", choices:[{text:"Go to dog park and interact more", next:28}, {text:"Visit pet shop and pick small toy", next:29}, {text:"Sit at café enjoying pets around", next:30}]},
  20: {text:"Photos taken. Afternoon begins. Choice?", choices:[{text:"Have picnic in nearby park", next:28}, {text:"Walk to scenic viewpoint", next:29}, {text:"Sit by fountain talking quietly", next:30}]},
  21: {text:"Childhood stories shared. Afternoon ideas?", choices:[{text:"Play frisbee in the park", next:28}, {text:"Visit small museum", next:29}, {text:"Walk slowly exploring streets", next:30}]},
  22: {text:"Outdoor relaxation. What do you do?", choices:[{text:"Lie on grass watching clouds", next:31}, {text:"Take playful photos together", next:32}, {text:"Feed birds and chat about life", next:33}]},
  23: {text:"Indoors relaxation. Activity?", choices:[{text:"Build something fun from materials", next:31}, {text:"Read or watch a movie together", next:32}, {text:"Play puzzles or games together", next:33}]},
  24: {text:"Chatting and playing. Evening comes. Dinner time?", choices:[{text:"Eat dinner outside at favorite restaurant", next:34}, {text:"Cook at home together", next:35}, {text:"Order delivery and enjoy indoors", next:36}]},
  25: {text:"Cooking together. How to cook?", choices:[{text:"Try a new recipe and laugh at mistakes", next:37}, {text:"Cook favorite comfort foods slowly", next:38}, {text:"Experiment with funny ingredient swaps", next:39}]},
  26: {text:"Café lunch done. Next?", choices:[{text:"Walk under city lights after meal", next:37}, {text:"Sit in nearby park to relax", next:38}, {text:"Do window-shopping nearby", next:39}]},
  27: {text:"Delivery lunch eaten. Next?", choices:[{text:"Eat in bed chatting", next:37}, {text:"Eat on balcony enjoying view", next:38}, {text:"Share food while listening to music", next:39}]},
  28: {text:"Afternoon outdoors. Activity?", choices:[{text:"Play catch or frisbee in park", next:40}, {text:"Go to a small shopping area", next:41}, {text:"Sit and talk on a bench", next:42}]},
  29: {text:"Afternoon cultural. Activity?", choices:[{text:"Visit museum or exhibit", next:40}, {text:"Explore library or bookstore", next:41}, {text:"Walk streets and take photos", next:42}]},
  30: {text:"Afternoon quirky. Next?", choices:[{text:"Laugh about snack experiences", next:40}, {text:"Take funny selfies together", next:41}, {text:"Do a silly mini-challenge together", next:42}]},
  31: {text:"Lie on grass. Night approaches. Next?", choices:[{text:"Watch clouds until sun sets", next:43}, {text:"Talk about silly dreams and wishes", next:44}, {text:"Take nature photos together", next:45}]},
  32: {text:"Photos done. Night approaches. Choice?", choices:[{text:"Edit funny photos and laugh", next:43}, {text:"Make a video montage", next:44}, {text:"Send them to friends jokingly", next:45}]},
  33: {text:"Feeding birds done. Night approaches. Next?", choices:[{text:"Stargaze on blanket and talk quietly", next:43}, {text:"Walk hand-in-hand in park", next:44}, {text:"Sit on bench sharing stories", next:45}]},
  34: {text:"Dinner outside. Evening fun?", choices:[{text:"Take long walk afterwards", next:46}, {text:"Sit at bench talking quietly", next:47}, {text:"Go to rooftop and see stars", next:48}]},
  35: {text:"Dinner home. Evening plans?", choices:[{text:"Watch romantic movie together", next:46}, {text:"Play calm board game", next:47}, {text:"Stargaze from balcony", next:48}]},
  36: {text:"Dinner delivery. Evening?", choices:[{text:"Walk to park under lamplights", next:46}, {text:"Sit by window and talk", next:47}, {text:"Cuddle on sofa listening music", next:48}]},
  37: {text:"Trying new recipe together. Outcome?", choices:[{text:"Laugh at mistakes, enjoy the process", next:55},{text:"Successfully cook and taste happily", next:55},{text:"Create a funny mess, but memories made", next:55}]},
  38: {text:"Comfort foods cooked slowly. Feeling?", choices:[{text:"Relaxed and cozy together", next:55},{text:"Share stories while cooking", next:55},{text:"Try small tweaks to recipe for fun", next:55}]},
  39: {text:"Experimenting with ingredients. Results?", choices:[{text:"Funny taste, laugh together", next:55},{text:"Surprisingly good, cheers together", next:55},{text:"Messy but memorable cooking", next:55}]},
  40: {text:"Afternoon activity done. Evening approaches. What now?", choices:[{text:"Relax in a quiet spot and chat", next:31},{text:"Take scenic photos before sunset", next:32},{text:"Play a small game together outdoors", next:33}]},
  41: {text:"Shopping! Where to go?", choices:[{text:"Go to clothing stores", next:49}, {text:"Visit bookstore", next:50}, {text:"Go gadget shop", next:51}]},
  42: {text:"Sitting and talking on bench. Next?", choices:[{text:"Plan evening stroll", next:34},{text:"Head home and relax", next:35},{text:"Grab a quick snack nearby", next:36}]},
  43: {text:"Watching clouds / night sky. Thoughts?", choices:[{text:"Reflect on fun moments today", next:55},{text:"Make silly wishes together", next:55},{text:"Take photos to remember night", next:55}]},
  44: {text:"Talking about dreams / wishes. Feeling?", choices:[{text:"Plan imaginary future adventures", next:55},{text:"Laugh and share silly ideas", next:55},{text:"Feel closer while chatting quietly", next:55}]},
  45: {text:"Taking photos / stargazing. Thoughts?", choices:[{text:"Keep photos as memories", next:55},{text:"Watch stars quietly together", next:55},{text:"Share playful comments about sky", next:55}]},
  46: {text:"Evening stroll / post-dinner. Feeling?", choices:[{text:"Walk hand-in-hand quietly", next:55},{text:"Take scenic photos together", next:55},{text:"Sit somewhere and relax before night", next:55}]},
  47: {text:"Sitting / talking quietly. Next?", choices:[{text:"Reflect on the day lovingly", next:55},{text:"Share funny moments", next:55},{text:"Plan future mini-adventures", next:55}]},
  48: {text:"Stargazing or rooftop view. Thoughts?", choices:[{text:"Admire stars and talk softly", next:55},{text:"Take photos / videos together", next:55},{text:"Cuddle and enjoy quiet moment", next:55}]},
  49: {text:"In clothing stores. What to buy?", choices:[{text:"Pick something silly for each other", next:52}, {text:"Buy matching outfits", next:53}, {text:"Try on funny hats", next:54}]},
  50: {text:"Bookstore. Which section?", choices:[{text:"Romance novels", next:52}, {text:"Fantasy and adventure", next:53}, {text:"Cookbooks for fun", next:54}]},
  51: {text:"Gadget store. What do you pick?", choices:[{text:"Funny small gadgets", next:52}, {text:"Useful tools for each other", next:53}, {text:"Tech toys to play together", next:54}]},
  52: {text:"Silly choice made. Reactions?", choices:[{text:"Laugh uncontrollably together", next:55}, {text:"Take selfies of silly moment", next:55}, {text:"Share the moment with friends", next:55}]},
  53: {text:"Matching or thoughtful items. Reactions?", choices:[{text:"Smile and feel closer", next:55}, {text:"Try them on and laugh", next:55}, {text:"Plan to use together later", next:55}]},
  54: {text:"Funny or adventurous items. Reactions?", choices:[{text:"Joke and laugh heartily", next:55}, {text:"Take playful photos", next:55}, {text:"Hide from staff playfully", next:55}]},
  55: {text:"Evening ends. Reflecting on day, what do you do?", choices:[{text:"Stargaze holding hands quietly", next:56}, {text:"Share dreams for future adventures", next:56}, {text:"Cuddle and drift to sleep happily", next:56}]},
  56: {text:"The perfect day concludes. Hearts are full.", choices:[{text:"Restart adventure and relive day", next:0}]}
};

let currentStep = 0;

function displayStep() {
  const storyText = document.getElementById('storyText');
  const choicesDiv = document.getElementById('choices');
  const step = story[currentStep];
  storyText.innerHTML = step.text;
  choicesDiv.innerHTML = '';
  step.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice.text;
    button.onclick = () => chooseAdventure(choice.next);
    choicesDiv.appendChild(button);
  });
}

function chooseAdventure(next) {
  currentStep = next;
  displayStep();
}

// Initialize the adventure
displayStep();
