$(function(){ //Initializes jQuery
        
        $(".tag.women").click(function(){//When the element with classes tag and women is clicked
                $(".feature").each(function(){ //look for each feature
                        if($(this).hasClass("women")){ //if it has the class women...
                                $(this).show();//show it!
                        }
                        else{
                                $(this).hide();
                        }
                });

        });

        $(".tag.doctors").click(function(){//When the element with classes tag and women is clicked
                $(".feature").each(function(){ //look for each feature
                        if($(this).hasClass("doctors")){ //if it has the class women...
                                $(this).show();//show it!
                        }
                        else{
                                $(this).hide();
                        }
                });

        });
        $(".tag.life").click(function(){//When the element with classes tag and women is clicked
                $(".feature").each(function(){ //look for each feature
                        if($(this).hasClass("life")){ //if it has the class women...
                                $(this).show();//show it!
                        }
                        else{
                                $(this).hide();
                        }
                });

        });
        $(".tag.all").click(function(){//When the element with classes tag and women is clicked
                $(".feature").each(function(){ //look for each feature
                                $(this).show();//show it!
                });

        });
});
