
jQuery(document).ready(function($) {
	// Stuff to do as soon as the DOM is ready. Use $() w/o colliding with other libs;
	$('#cloud').pan({
		fps: 30, // Frame trên giây, fps càng nhỏ thì chuyển động sẽ càng giật.
		speed: 1, // tốc độ di chuyển của vậy thể
		dir: 'left' // hướng chuyển động, left: phải>trái, right: trái>phải
	});
	$('#city').pan({
		fps: 30, // Frame trên giây, fps càng nhỏ thì chuyển động sẽ càng giật.
		speed: 2, // tốc độ di chuyển của vậy thể
		dir: 'right' // hướng chuyển động, left: phải>trái, right: trái>phải
	});
	
	$('#birds-1')
		.sprite({
			fps: 12, // Khung hình / giây
			no_of_frames: 3 // số lượng khung hình trong bức ảnh
		})
		.spRandom({ // Bay tự do trong khoãng cách như dưới
          	top: 70,
          	left: 100,
          	right: 200,
          	bottom: 340,
          	speed: 4000,
          	pause: 2000
      	})
      	.isDraggable({ // Nếu drag hoạt động, phải thêm Jquery Ui vào
		    start: function() { // Khi click chuột vào đối tượng và kéo
		        // Các sự kiện sẽ diễn ra
		        $('#birds-1').fadeTo('fast', 0.7);
		    },
		    stop: function() { // Khi bỏ buôn chuột ra
		        // Các sự kiện sẽ diễn ra
		        $('#birds-1').fadeTo('fast', 1);
		        $('#birds-1').find("p").html("Kéo em đi....");
		    },
		    drag: function() { // Trong quá trình kéo
		        // các sự kiện sẽ diễn ra.
		      	$('#birds-1').find("p").html("Hãy kéo em đi thật xa....");
		    }
		});
	$('#birds-3')
		.sprite({
			fps: 12, // Khung hình / giây
			no_of_frames: 3 // số lượng khung hình trong bức ảnh
		})
		.spRandom({ // Bay tự do trong khoãng cách như dưới
          	top: 70,
          	left: 100,
          	right: 200,
          	bottom: 340,
          	speed: 4000,
          	pause: 2000
      	})
      	.isDraggable({ // Nếu drag hoạt động, phải thêm Jquery Ui vào
		    start: function() { // Khi click chuột vào đối tượng và kéo
		        // Các sự kiện sẽ diễn ra
		       $('#birds-3').fadeTo('fast', 0.7);
		    },
		    stop: function() { // Khi bỏ buôn chuột ra
		        // Các sự kiện sẽ diễn ra
		       	$('#birds-3').fadeTo('fast', 1);
		        $('#birds-3').find("p").html("Đưa thư cho izwebz nào !!!");
		    },
		    drag: function() { // Trong quá trình kéo
		        // các sự kiện sẽ diễn ra.
		      	$('#birds-3').find("p").html("Đưa thư đưa thư nào....");
		    }
		});	
	$('#birds-2')
		.sprite({
			fps: 12, 
			no_of_frames: 3
		})
		.spRandom({
	      	top: 140,
		    left: 500,
		    right: 250,
		    bottom: 140,
		    speed: 3000,
		    pause: 2000
	    });
});
