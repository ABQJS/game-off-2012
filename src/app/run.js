/**
 * This file is used to reconfigure parts of the loader at runtime for this application. We've put this extra
 * configuration in a separate file, instead of adding it directly to index.html, because it contains options that
 * can be shared if the application is run on both the client and the server.
 *
 * If you aren't planning on running your app on both the client and the server, you could easily move this
 * configuration into index.html (as a dojoConfig object) if it makes your life easier.
 */
require({
	// The base path for all packages and modules. If you don't provide this, baseUrl defaults to the directory
	// that contains dojo.js. Since all packages are in the root, we just leave it blank. (If you change this, you
	// will also need to update `app.profile.js`).
	baseUrl: '',

	// A list of packages to register. Strictly speaking, you do not need to register any packages,
	// but you can't require "app" and get app/main.js if you do not register the "app" package (the loader will look
	// for a module at <baseUrl>/app.js instead). Unregistered packages also cannot use the `map` feature, which
	// might be important to you if you need to relocate dependencies. TL;DR, register all your packages all the time:
	// it will make your life easier.
	packages: [
		'dojo',
		'dijit',
		'dojox',
		'app',
		{
			name: "socket.io",
			main: "socket.io"
		}
	],

	// Use the 'lite' selector engine because we really don't care about oldIE
	selectorEngine: 'lite'
// Require `app`. This loads the main application module, `app/main`, since we registered the `app` package above.
}, ['app'], function(app){
	// Start up the application
	app.init();
});
