import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn()
  let wrapper

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={ setCategories } />)
  })


  test('Debe de mostrarse <AddCategory /> correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe cambiar el input', () => {
    const input = wrapper.find('input')
    const value = 'Hola Mundo'

    // {} - evento
    input.simulate('change', {
      target: {
        value: value
      }
    })
  })

  test('No debe de postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect(setCategories).not.toHaveBeenCalled()
  })

  test('Debe de llamar el setCategories y limpiar el input', () => {
    const value = 'Prueba'

    // Simulamos el input
    wrapper.find('input').simulate('change', { target: { value: value } })

    // Simulamos el submit
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    // setCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledWith( expect.any(Array) )

    // El valor de input debe estar en ''
    expect(wrapper.find('input').prop('value')).toBe('')

  })

})