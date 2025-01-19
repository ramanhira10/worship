const gayatriMantraButton = document.getElementById('play-gayatri-mantra');

const charChakharOharButton = document.getElementById('play-char-chakhar-ohar');

const hareRamHareRamButton = document.getElementById('play-hare-ram-hare-ram');

const gayatriMantra = document.getElementById("counterGayatriMantra");
const counterCharChakharOhar = document.getElementById("counterCharChakharOhar");
const counterHareRamHareRam = document.getElementById("counterHareRamHareRam");


gayatriMantraButton.addEventListener('click', () => {
  const audio = document.getElementById('audio-gayatri-mantra');
  let playCount = 0;
  const maxPlays = 108;

  function playAudio() {
    counterGayatriMantra.innerText = playCount;
    if (playCount < maxPlays) {
      playCount++;
      audio.play();
    } else {
      playCount = 0;
      counterGayatriMantra.innerText = playCount;
      gayatriMantraButton.innerText = (
        gayatriMantraButton.innerText === "Pause Gayatri Mantra" ?
          "Play Gayatri Mantra 108 Times" :
          "Pause Gayatri Mantra"
      );
      audio.removeEventListener('ended', playAudio); // Clean up event listener
    }
  }

  // Listen for when the audio finishes playing
  audio.addEventListener('ended', playAudio);

  if (gayatriMantraButton.innerText === "Play Gayatri Mantra 108 Times") {

    gayatriMantraButton.innerText = "Pause Gayatri Mantra";
    // Start the first play
    playAudio();
  } else {
    gayatriMantraButton.innerText = "Play Gayatri Mantra 108 Times";
    audio.pause()
  }
});

charChakharOharButton.addEventListener('click', () => {
  const audio = document.getElementById('audio-char-chakhar-ohar');
  let playCount = 0;
  const maxPlays = 119;

  function playAudio() {
    counterCharChakharOhar.innerText = playCount;

    if (playCount < maxPlays) {
      playCount++;
      audio.play();
    } else {
      playCount = 0;
      counterCharChakharOhar.innerText = playCount;
      charChakharOharButton.innerText = (
        charChakharOharButton.innerText === "Pause Char Chakhar Ohar" ?
          "Play Char Chakhar Ohar 119 Times" :
          "Pause Char Chakhar Ohar"
      );
      audio.removeEventListener('ended', playAudio); // Clean up event listener
    }
  }

  // Listen for when the audio finishes playing
  audio.addEventListener('ended', playAudio);

  if (charChakharOharButton.innerText === "Play Char Chakhar Ohar 119 Times") {

    charChakharOharButton.innerText = "Pause Char Chakhar Ohar";
    // Start the first play
    playAudio();
  } else {
    charChakharOharButton.innerText = "Play Char Chakhar Ohar 119 Times";
    audio.pause()
  }
});

hareRamHareRamButton.addEventListener('click', () => {
  const audio = document.getElementById('audio-hare-ram-hare-ram');
  let playCount = 0;
  const maxPlays = 5;

  function playAudio() {
    counterHareRamHareRam.innerText = playCount;
    if (playCount < maxPlays) {
      playCount++;
      audio.play();
    } else {
      playCount = 0;
      counterHareRamHareRam.innerText = playCount;
      hareRamHareRamButton.innerText = (
        hareRamHareRamButton.innerText === "Pause hare-ram-hare-ram" ?
          "Play hare-ram-hare-ram" :
          "Pause hare-ram-hare-ram"
      );
      audio.removeEventListener('ended', playAudio); // Clean up event listener
    }
  }

  // Listen for when the audio finishes playing
  audio.addEventListener('ended', playAudio);


  if (hareRamHareRamButton.innerText === "Play hare-ram-hare-ram") {

    hareRamHareRamButton.innerText = "Pause hare-ram-hare-ram";
    // Start the first play
    playAudio();
  } else {
    hareRamHareRamButton.innerText = "Play hare-ram-hare-ram";
    audio.pause()
  }
});
