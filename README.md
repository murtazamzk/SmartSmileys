SmartSmileys
============
<h3>Usage </h3>
            

                $(".class").dosmile();

<h4>How I used</h4>
                
            jQuery(document).ready(function(){
                    $(".button").click(function(){
                        if($(".inputtext").val().length > 0 ) {
                            $("#chatbox").append($(".inputtext").val() + "&lt;br/&gt;");
                            $(".inputtext").val("");
                            $(".smiley").dosmile();
		
                        }
                    });

                    $(".inputtext").keypress(function(e) {
                        if(e.which === 13) {
                            if($(".inputtext").val().length > 0 ) {
                                $("#chatbox").append($(".inputtext").val() + "&lt;br/&gt;");
                                $(".inputtext").val("");
                                $(".smiley").dosmile();
                            }
                        }
                    });

                    $(".smiley").blur(function() {
                            $(".smiley").dosmile();
                    });
            });
                

            
