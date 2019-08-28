const defaults = {
	name: 'Awesome Everything',
	prefix: 'tt',
	icon: 'https://cdn.imgbin.com/25/9/11/imgbin-everything-is-awesome-logo-the-lego-movie-brand-everything-is-awesome-47XMADTLwVjGFND7W1uErJr5a.jpg'
}

const { addonBuilder, getInterface, getRouter } = require('stremio-addon-sdk')

const manifest = {
	id: 'org.' + defaults.name.toLowerCase().replace(/[^a-z]+/g,''),
	version: '1.0.0',
	name: defaults.name,
	description: 'Tons of free movies and TV episode streams! This add-on may take up to 8 seconds to answer with streams.',
	resources: ['stream'],
	types: ['movie', 'series'],
	idPrefixes: [defaults.prefix],
	icon: defaults.icon,
	catalogs: []
}

const cinemeta = require('internal').cinemeta

const res = require('./res')

res.init(manifest)

const builder = new addonBuilder(manifest)

builder.defineStreamHandler(res.handler.bind(null, cinemeta))

const addonInterface = getInterface(builder)

module.exports = getRouter(addonInterface)
