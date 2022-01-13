window.addEventListener('DOMContentLoaded', function () {
    "use strict";
    const swiper = new Swiper('.swiper', {
        loop: true,
        // spaceBetween: 130,
        autoplay: {
            delay: 2000,
        },
        speed: 500,
        slidesPwgGroup: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
        },
    });

    // ! validation


    let validateForms = function (selector, rules, successModal, yaGoal) {
        new window.JustValidate(selector, {
            rules: rules,

            messages: {
                name: {
                    required: 'Введите имя пользователя',
                    minLength: 'Слишком короткое Имя',

                },
                tel: {
                    required: 'Укажите ваш телефон'
                },
            },


            submitHandler: function (form) {
                let formData = new FormData(form);
                let xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {

                        if (xhr.status === 200) {
                            console.log("Отправлено");
                            // let modal = document.querySelector('.overlay');
                            // modal.classList.add('thanks');
                            // let closes = document.querySelector('.modal__close');
                            // closes.addEventListener('click', function () {
                            //     modal.classList.remove('thanks');
                            // });
                        }
                    }
                };
                xhr.open('POST', 'mailer/smart.php', true);
                xhr.send(formData);

                form.reset();
            },

        });

    };
    validateForms('#form', {
        name: {
            required: true,
            minLength: 2,
        },
        tel: {
            required: true,

        },
    }, 'thanks-popup', 'send goal');
    
        
});


