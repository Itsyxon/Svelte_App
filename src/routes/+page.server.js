import { browser } from '$app/environment'
import { redirect } from '@sveltejs/kit'

export const load = async () => {
  if (browser) {
    const token = localStorage.getItem('token')

    if (token === 'admin') {
      throw redirect(302, '/')
    } else {
      throw redirect(302, '/login')
    }
  }

  return {}
}
