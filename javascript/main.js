$(function() {

    $("img").click(function() {
        $('audio').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
        id = this.id
        mySound = $('audio#sound_'+id)[0];
        mySound.play()
	});
});