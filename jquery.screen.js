			
      
      		var mousetimeout;
			var screensaver_active = false;
			var idletime = 15;
			var hour = new Date().getMinutes(); 
      		var div = document.createElement("div");
			document.body.appendChild(div);
      		div.style.cssText = 'background-size: 100% 100%; position: absolute; width: 100%; height:100%; left:0px; top: 0px; display: none; z-index:9999;  ';
			
			
      
			var imgArray = new Array("*/img/foto.jpg","https://www.boomvriendjes.nl/wp-content/uploads/2015/01/Aapje.jpg");

			function show_screensaver(){
			    $('div').fadeIn();
			    screensaver_active = true;
			    screensaver_animation();
			}

			function stop_screensaver(){
			    location.reload(); //Reloads Session
			    screensaver_active = false;
			}

			$(document).mousemove(function(){
			    clearTimeout(mousetimeout);
				
			    if (screensaver_active) {
			        stop_screensaver();
			    }

			    mousetimeout = setTimeout(function(){
			        show_screensaver();
			    }, 1000 * idletime); // 5 secs			
			});


    function screensaver_animation(){
			    if (hour % 10 == 2 && (screensaver_active)) {
			        $('div').css({'backgroundImage': 'url(' + imgArray[1] + ')'});
			} else {
				
				$('div').css({'backgroundImage': 'url(' + imgArray[1] + ')'});
			}



			};
			