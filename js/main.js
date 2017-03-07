/**
 * Created by Актилек on 25.02.2017.
 */
$('#registration-form').validate({
    rules: {
        userPassword :{
            minlength: 6,
        }
    }
});
$('#registration-form2').validate({
    rules: {
        userPassword :{
            minlength: 6,
        }
    }
});
$('#phone').mask('+(999)999-99-99-99');
$('#phone-popup').mask('+(777)777-77-77-77');

$('#popup-open').click(function () {
    $('.popup-wrap').fadeIn(500);
});
$('#popup-closed').click(function () {
    $('#popup-wrap').fadeOut(100);
});
