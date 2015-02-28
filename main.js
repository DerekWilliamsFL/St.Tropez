
$( document ).ready(function() {
   
    //IMAGE SWAPPING
       var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function () {
        $('img.swap').hover(sourceSwap, sourceSwap);
    });

});