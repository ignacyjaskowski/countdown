for (let indeks = 0; indeks <= 20; indeks++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(11 - indeks)
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("GO!")
