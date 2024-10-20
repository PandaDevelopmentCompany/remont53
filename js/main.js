(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					phone: "required",
					email: {
						required: true,
						email: true
					},
					pass_message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Пожалуйста, введите ваше имя.",
					phone: "Пожалуйста, введите номер вашего телефона.",
					pass_message: "Пожалуйста, введите ваше сообщение."
				},
				

			});
		}
	};
	contactForm();

})(jQuery);
