// main.js
window.onload = function () {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const ulRoutine = document.getElementById("ul-routine");
  const imgRoutine = document.getElementById("img-routine");
  const audRoutine = document.getElementById("aud-routine");
  const currentTimeDisplay = document.getElementById("current-time");

  let routineItems, imgSrc, audioSrc;

  // Display the current time
  currentTimeDisplay.textContent = `Current time: ${currentTime.toLocaleTimeString()}`;

  if (hours < 11) {
    // Morning routine
    routineItems = [
      "Workout & Meditate",
      "Work",
      "Have Coffee. Lots of Coffee",
      "Check Schedule and Make Plan",
      "Eat Breakfast",
    ];
    imgSrc = "images/Coffee.jfif";
    audioSrc = "images/morning-birdsong-246402.mp3";
  } else if (hours < 19) {
    // Afternoon routine
    routineItems = [
      "Walk Dog",
      "Pick Up Kids From School",
      "Chores",
      "Help Kids with Homework",
      "Moment Of Down Time",
    ];
    imgSrc = "images/Noon.jpg";
    audioSrc = "images/afternoon-ambient-piano-solo-24367.mp3";
  } else {
    // Evening routine
    routineItems = [
      "Make and Eat Dinner",
      "Do Homework",
      "Set Alarms",
      "Take Bath",
      "Brush and Floss Teeth",
    ];
    imgSrc = "images/Night.webp";
    audioSrc = "images/night-ambience-17064.mp3";
  }

  // Populate the list
  routineItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ulRoutine.appendChild(li);
  });

  // Set image and audio source
  imgRoutine.src = imgSrc;
  audRoutine.querySelector("source").src = audioSrc;
  audRoutine.load(); // Load the new audio file
};
