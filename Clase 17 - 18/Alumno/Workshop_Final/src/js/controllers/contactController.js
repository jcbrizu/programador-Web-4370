import { validateEmail, validateNotEmptyField, allValidationsOk } from '../utils/validations'

function contactController() {
  $('#root').load('./partials/contact.html')
  console.log('Se cargo la contacts')

}


export default contactController