# My Daily Routine

A web page that shows a different daily routine, background image, and ambient audio track depending on the current time of day.

## Files

- **routine.html** - the page structure: a heading, a list for the routine items, an image, an audio player, and a line showing the current time.
- **main.js** - runs on page load, checks the current hour, and populates the routine list, image, and audio source based on whether it's morning, afternoon, or evening.
- **styles.css** - page styling: centered layout, background color, and image borders/rounding.
- **images/** - the images and audio clips used for each time of day.
  - `Coffee.jfif` - morning image
  - `Noon.jpg` - afternoon image
  - `Night.webp` - evening image
  - `morning-birdsong-246402.mp3` - morning audio
  - `afternoon-ambient-piano-solo-24367.mp3` - afternoon audio
  - `night-ambience-17064.mp3` - evening audio

## What it does

On page load, the script checks the current hour and picks one of three routines:

- **Before 11 AM (Morning):** workout, work, coffee, planning, breakfast. Shows the coffee image and morning birdsong audio.
- **11 AM to 6:59 PM (Afternoon):** dog walk, school pickup, chores, homework help, downtime. Shows the noon image and afternoon piano audio.
- **7 PM and later (Evening):** dinner, homework, alarms, bath, brushing teeth. Shows the night image and night ambience audio.

The current time is also displayed on the page, and the audio player lets you play, pause, and control volume for whichever track was selected.

## Requirements

- Just a browser, no build step or server strictly required, though serving it locally avoids any `file://` path quirks with audio playback.

## Usage

Open `routine.html` directly in a browser, or serve the folder locally, for example:

```
python3 -m http.server
```

Then visit `http://localhost:8000/routine.html`.

## Notes

- The image and audio files all live under `images/`, including the `.mp3` files, everything is grouped there rather than split into separate `images/` and `audio/` folders.
- The routine, image, and audio are entirely determined by the browser's local time at the moment the page loads. Reloading later in the day will show a different routine automatically.
