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

  // DATEPICKER gia rantevou

  jQuery(function () {
    var datepicker = jQuery('.js-datepicker-inline');

    datepicker.datepicker({
      dateFormat: 'dd/m/y',
      immediateUpdates: true,
      todayBtn: false,
      todayHighlight: true,
      "autoclose": true,
      startDate: '1d',
      endDate: '+6m',
      maxViewMode: 0,
      language: 'el-GR',
      templates: {
          leftArrow: '<img src="./assets/icons/cal-arrow-left.svg">',
          rightArrow: '<img src="./assets/icons/cal-arrow-right.svg">'
      },
      beforeShowDay: function(date) {
           var hilightedDays = [1,3,8,20,21,16,26,30];
           var medium = [2,15,17];
           var low = [4,6,18,22];


           if (~hilightedDays.indexOf(date.getDate())) {
              return {classes: 'highAva', tooltip: 'Αυξημένη Διαθεσιμότητα'};
           }
           else if(~medium.indexOf(date.getDate())){
              return {classes: 'mediumAva', tooltip: 'Περιορισμένη Διαθεσιμότητα'}
            }
            else if(~low.indexOf(date.getDate())){
               return {classes: 'lowAva', tooltip: 'Περιορισμένη Διαθεσιμότητα'}
             }
        }
    });
  });

  jQuery('.dataTable').DataTable({
    searching: false ,
    ordering: true,
    info: false,
    // dom: '<"row"<"col-md-6"<"d-flex align-items-center"l><"d-flex align-items-center"f>><"col-md-6"<"d-flex align-items-center"p><"d-flex align-items-center"<"ml-3"i>>>>t'
    // dom: 't<"row"<"col-md-6"<"d-flex align-items-center"l><"d-flex align-items-center"f>><"col-md-6"<"d-flex align-items-center"p><"d-flex align-items-center"<"ml-3"i>>>>',
    dom: 't<"row"<"col-md-6"<"d-flex align-items-center justify-content-between"l><"d-flex align-items-center justify-content-between"f>><"col-md-6"<"d-flex align-items-center justify-content-end"p><"d-flex align-items-center justify-content-between"<"ml-3"i>>>>',
    language: {
        "sEmptyTable": "Δεν υπάρχουν δεδομένα στον πίνακα",
        "sInfo": "Εμφανίζονται οι εγγραφές _START_ έως _END_ από σύνολο _TOTAL_ εγγραφών",
        "sInfoEmpty": "Εμφανίζονται 0 εγγραφές",
        "sInfoFiltered": "(από σύνολο _MAX_ εγγραφών)",
        "sInfoPostFix": "",
        "sInfoThousands": ".",
        "sLengthMenu": "Εμφάνιση _MENU_ εγγραφών",
        "sLoadingRecords": "Φόρτωση...",
        "sProcessing": "Επεξεργασία...",
        "sSearch": "Αναζήτηση:",
        "sZeroRecords": "Δεν βρέθηκαν αποτελέσματα",
        "oPaginate": {
          "sFirst": "Πρώτη",
          "sLast": "Τελευταία",
          "sNext": "Επόμενη",
          "sPrevious": "Προηγούμενη"
        }
      }
    });


});
