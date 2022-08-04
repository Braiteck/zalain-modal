$(() => {
	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<img src="images/ic_close.svg" alt="">',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Всплывашка со скидкой
	if ($('#discount_modal').length) {
		setTimeout(() => {
			Fancybox.show([{
				src: '#discount_modal',
				type: 'inline'
			}])
		}, 500)

		$('#discount_modal .stock .btn').click(function (e) {
			e.preventDefault()

			$('#discount_modal').addClass('disclosed')
		})

		$('#discount_modal .stock .close_btn').click(function (e) {
			e.preventDefault()

			$('#discount_modal').removeClass('disclosed')
		})
	}
})