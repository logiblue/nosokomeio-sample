jQuery(document).ready(function() {
  jQuery('#datepicker').datepicker();
  jQuery('.input-daterange input').each(function() {
    console.log('t');
    jQuery(this).datepicker('clearDates');
});

const myModal = document.getElementById('myModal')

  jQuery('#myModal').modal({
    show: false
  });



});
