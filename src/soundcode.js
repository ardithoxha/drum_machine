export const soundArrayOne = [
    {id: 'Heater 1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', letter: "Q"},
    {id: "Heater 2", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', letter: "W"},
    {id: "Heater 3", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', letter: "E"},
    {id: "Heater 4", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', letter: "A"},
    {id: "Clap", url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', letter: "S"},
    {id: "Open HH", url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', letter: "D"},
    {id: "Kick n Hat", url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', letter: "Z"},
    {id: "Kick", url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', letter: "X"},
    {id: "Closed HH", url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', letter: "C"}
]

export const soundArrayTwo = [
    {id: 'Chord 1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3', letter: "Q"},
    {id: "Chord 2", url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3', letter: "W"},
    {id: "Chord 3", url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3', letter: "E"},
    {id: "Shaker",url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3', letter: "A"},
    {id: "Open HH", url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3', letter: "S"},
    {id: "Closed HH", url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', letter: "D"},
    {id: "Punchy Kick", url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', letter: "Z"},
    {id: "Side Stick", url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', letter: "X"},
    {id: "Snare", url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', letter: "C"}
]

export function playSound(url) {
    let audio = new Audio(url);
    // audio.volume = document.getElementById("myRange").value*0.01;
    audio.play();
}

export const nameArray = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

