    const audio = new Audio('C:/Users/reeda/OneDrive/Documents/ART101/ART101Git/excercises/208063__further_roman__in-the-barn-1-48k-[AudioTrimmer.com].wav'); // Replace with your sound file path
    const button = document.getElementById('button'); // Replace with your button's ID

    button.addEventListener('click', () => {
        audio.play();
    });