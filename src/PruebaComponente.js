import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComboBox from './Componentes/ComboBoxClases/ComboBox'
import ComboBoxH from './Componentes/ComboBoxHooks/ComboBoxH'

class PruebaComponente extends Component {
  /**
   * Define las Propiedades de la pantalla
   */
  static propTypes = {
    lista: PropTypes.array
  }

  constructor (props) {
    super(props)
    this.state = {
      lista: this.props.lista
    }
    this.FormatearLista = this.FormatearLista.bind(this)
  }

  static defaultProps = {
    lista: [
      { codigo: 1, nombre: 'MacDonals', razonSocial: 'Restaurantes MacDonals S.A.', nit:'117878956', telefono:'2224471' },
      { codigo: 2, nombre: 'AirEuropa', razonSocial: 'Air Europa Lineas Areas S.A.', nit:'226868478', telefono:'3335569' },
      { codigo: 3, nombre: 'FarmaCorp', razonSocial: 'Farmacias corp S.A.', nit:'335151243', telefono:'4442271' },
      { codigo: 4, nombre: 'Toyosa', razonSocial: 'Toyosa AAA S.A.', nit:'443232796', telefono:'5559981' },
      { codigo: 5, nombre: 'Samsung', razonSocial: 'Samsung S.R.L', nit:'556969497', telefono:'6661179' },
      { codigo: 6, nombre: 'Imcruz', razonSocial: 'Imcruz S.R.L', nit:'667171321', telefono:'7772122' },
      { codigo: 7, nombre: 'PilAndina', razonSocial: 'Pil Andina S.R.L', nit:'774141224', telefono:'8883233' }
    ]
  }
  componentWillMount () {
    console.log('componentWillMount, lista filtrado', this)
    const pLista = this.FormatearLista(this.state.lista, {id:'codigo', categoria: 'Empresas', idItem: 'codigo', valor: 'codigo', desc: 'nombre' })
    console.log('sasuke lista', pLista)
    this.setState({
      lista: pLista,
    })
  }

  /**
 * Metodo para Formatear los datos del Clasificador Multas
 */
  FormatearLista (pLista = [], pParametros = {}) {
    console.log('FormatearDatosListaFiltrado', pLista, pParametros)

    const rLista = pLista.map( data => {
      return {
      id: data[pParametros.id],
      categoria: pParametros.categoria,
      idItem: data[pParametros.idItem],
      valor: data[pParametros.valor].toString(),
      desc: data[pParametros.desc].toString(),
      }
    }

    )
    return rLista
  }
  /**
   * Método encargado de armar la cabecera
   */
  render () {
    return (
      <div >

        <ComboBox ref='TipoMulta'
          etiqueta={'Hola Mundo'}
          visible={true}
          datos={this.state.lista}
          valor={1}
          filtroItem= {'desc'}
        />
        <ComboBoxH 
          etiqueta={'HOOKS'}
          visible={true}
          datos={this.state.lista}
          valor={1}
          filtroItem= {''}
          visibleItem={true}
          placeholderItems={'hola mundo'}
        />
      </div>
    )
  }
}

export default PruebaComponente