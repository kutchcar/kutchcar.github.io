(function ($) {
    $('#contact-form').on('submit', (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const message = event.target.message.value;
        const whatsappMessage = message + '\n\n' + '- ' + name
        const data = {
            text: whatsappMessage
        }
        const searchParams = new URLSearchParams(data);
        const number = '918069409841'
        const whatsappUrl = new URL(`https://wa.me/${number}/?`) + searchParams
        location.href = whatsappUrl
    })
  })(jQuery);
