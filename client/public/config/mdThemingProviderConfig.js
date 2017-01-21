/**
 * Created by avzal on 05.01.2017.
 */
angular.module("config")
	.config(['$mdThemingProvider', function($mdThemingProvider) {
		$mdThemingProvider.definePalette('dark', {
			'50': 'f7f7f7',//background-main
			'100': 'ffcdd2',
			'200': 'ef9a9a',
			'300': 'e57373',
			'400': '2e3336',
			'500': '292c33',//Toolbar
			'600': '242431',
			'700': '1e1a2e',
			'800': '190b2b',// Search bar
			'900': '0f0b25',
			'A100': 'ffffff',//background-toolbar
			'A200': '6b6b99',//fab-button
			'A400': '5e588f',
			'A700': '553b82',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
																					// on this palette should be dark or light

			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
														 '200', '300', '400', 'A100'],
			'contrastLightColors':undefined,    // could also specify this if default was 'dark'
		});

		var accent = $mdThemingProvider.extendPalette('dark', {
			'A100': 'b3bbcb',
		});
		$mdThemingProvider.definePalette('accent', accent);

		var back = $mdThemingProvider.extendPalette('dark', {
			'A100': '292c33'
		});
		$mdThemingProvider.definePalette('back', back);

		// Register the new color palette map with the name <code>neonRed</code>
		$mdThemingProvider.theme('default')
			.primaryPalette('dark')
			.accentPalette('accent')
			.backgroundPalette('dark');

		// Register the new color palette map with the name <code>neonRed</code>
		$mdThemingProvider.theme('toast-success')
			.primaryPalette('green')
			.accentPalette('green')
			.backgroundPalette('green');

	}]);