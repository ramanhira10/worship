document.getElementById('play-gayatri-mantra').addEventListener('click', () => {
  const audio = document.getElementById('audio-gayatri-mantra');
  let playCount = 0;
  const maxPlays = 108;

  function playAudio() {
    if (playCount < maxPlays) {
      playCount++;
      audio.play();
    } else {
      audio.removeEventListener('ended', playAudio); // Clean up event listener
    }
  }

  // Listen for when the audio finishes playing
  audio.addEventListener('ended', playAudio);

  // Start the first play
  playAudio();
});

document.getElementById('play-char-chakhar-ohar').addEventListener('click', () => {
  const audio = document.getElementById('audio-char-chakhar-ohar');
  let playCount = 0;
  const maxPlays = 119;

  function playAudio() {
    if (playCount < maxPlays) {
      playCount++;
      audio.play();
    } else {
      audio.removeEventListener('ended', playAudio); // Clean up event listener
    }
  }

  // Listen for when the audio finishes playing
  audio.addEventListener('ended', playAudio);

  // Start the first play
  playAudio();
});

document.getElementById('play-hare-ram-hare-ram').addEventListener('click', () => {
  const audio = document.getElementById('audio-hare-ram-hare-ram');
  let playCount = 0;
  const maxPlays = 5;

  function playAudio() {
    if (playCount < maxPlays) {
      playCount++;
      audio.play();
    } else {
      audio.removeEventListener('ended', playAudio); // Clean up event listener
    }
  }

  // Listen for when the audio finishes playing
  audio.addEventListener('ended', playAudio);

  // Start the first play
  playAudio();
});
