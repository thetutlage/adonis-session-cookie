'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.get('/', ({ session, view }) => {
  session.put('user', 'virk')
  return view.render('welcome')
})

Route.post('user', ({ session, request, view }) => {
  return { user: session.get('user'), frontendUser: request.plainCookie('frontendUser') }
})
