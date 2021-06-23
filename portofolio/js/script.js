// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangka elemen yg bersangkutan

  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $('body,html').animate({
  	scrollTop: elemenTujuan.offset().top -50
  }, 1250, 'easeOutBounce' );

  e.preventDefault();



});
