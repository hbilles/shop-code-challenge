import { STORAGE_KEY } from './modules/cart'

const localStoragePlugin = store => {
	// watch for cart updates and save state to localStorage
	store.subscribe((mutation, { cart }) => {
		if (mutation.type === 'ADD_TO_CART' || mutation.type === 'REMOVE_FROM_CART') {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(cart.added))
		}
	})
}

export default [localStoragePlugin]
