$(function() {

    $("img").click(function() {
        id = this.id
        mySound = new Audio('sounds/'+id+'.mp3');
        mySound.play()
	});
});