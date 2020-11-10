// menu 인터랙션
// console.log("Script Load");
(function($) {
    $(document).ready(function() {
        // console.log('menu.js jQuery Ready');
        
        var IsMouseIn = false;

        $('#menu-bar').click(function(event) { 
            event.preventDefault();
            console.log('click');
            if(!IsMouseIn)
            {
                IsMouseIn = true;
                console.log(IsMouseIn);
                $('#menu-items').css({
                    'left' : 0 + '%'
                });
            }
            else if(IsMouseIn)
            {
                IsMouseIn = false;
                console.log(IsMouseIn);
                $('#menu-items').css({
                    'left' : -180 + '%'
                });
            }
        });

        // 카드 펼쳐지는거 도전

        // $('#menu-bar').click(function(event) { 
        //     event.preventDefault();
        //     console.log('click');
        //     if(!IsMouseIn){
        //         IsMouseIn = true;
        //         console.log(IsMouseIn);
        //     }
        //     else if(IsMouseIn){
        //         $('.menu-card').css({
        //             'transform' : 'rotate(30deg)',
        //             // 'top' : 0,
        //             // 'left' : 0
        //         });
        //         for(var i = 1; i <= 2; i++)
        //         {
        //             $('.menu-card').eq(i).css({
        //                 'top' : 0,
        //                 'left' : 0
        //             });
        //         }
        //         for(var i = 3; i <= 5; i++)
        //         {
        //             $('.menu-card').eq(i).css({
        //                 'bottom' : 450 + 'px',
        //                 'left' : 0
        //             });
        //         }
        //         IsMouseIn = false;
        //     }
        // });

    });
})(jQuery);