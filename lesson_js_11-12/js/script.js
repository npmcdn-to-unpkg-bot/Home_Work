$(document).ready(function () {
    
    
    $('.container').myCarousel();

    
    var data = {
        name: 'Гарасько Антон Викторович',
        photo: {
            src: 'img/2.jpg',
            alt: 'Моё фото'
        },
        job: 'Студеннт курса GoFrontend Online',
        why: 'Хочу учить фронтенд, потому что:',
        reasons: ['Хочу кардинально изменить свой вид деятельности',
                  'Делать то, что мне приносит удовольствие',
                  'Обеспечить свое счастливое будущее'],
        tel: 'Мой контактный телефон:',
        number: '+380990328878',
        fb: 'Мой профиль в контакте:',
        fb_link: 'https://www.facebook.com/profile.php?id=100001357627033',
        feedback: 'Мой фидбек:',
        feedback_text: 'Учиться никогда не поздно!'
    };
    
    var profile = $('#profile').html();
    var content = tmpl(profile, data);

    $('.template').append(content);
    
});

