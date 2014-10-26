
<script type="text/javascript">
$(function($){
     $( '.menu-btn' ).click(function(){
     $('.responsive-menu').addClass('expand')
     $('.menu-btn').addClass('btn-none')
     })

     $( '.close-btn' ).click(function(){
     $('.responsive-menu').removeClass('expand')
     $('.menu-btn').removeClass('btn-none')
     })
   })

$(function($){
           $( '.menu-btn' ).click(function(){
           $('.responsive-menu').toggleClass('expand')
           })
        })
</script>