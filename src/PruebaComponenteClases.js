import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComboBox from './Componentes/ComboBoxClases/ComboBox'
import ComboBoxH from './Componentes/ComboBoxHooks/ComboBoxH'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
const axios = require('axios')

import 'font-awesome/css/font-awesome.min.css';

class PruebaComponenteClases extends Component {
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
    this.getEmpresas = this.getEmpresas.bind(this)
    this.formatearRespuesta = this.formatearRespuesta.bind()
  }

  static defaultProps = {
    lista: []
  }
  async componentWillMount () {
    const algo = await this.getEmpresas()
    this.setState({
      lista: algo,
    })
  }

  getEmpresas = async () => {
    try {
      const { data } = await axios.get(`https://fb-api-tugerente-default-rtdb.firebaseio.com/empresas.json`)
      const respForm = this.formatearRespuesta(data)
      const pLista = this.FormatearLista(respForm, {id:'codigo', categoria: 'Empresas', idItem: 'codigo', valor: 'codigo', desc: 'nombre' })
      return pLista
    } catch (error) {
      console.error(error)
      return error
    }
  }

  /**
   * Metodo para formatear repuestas
   */
  formatearRespuesta(respData) {
    const arrayFormateado = []
    for(let city in respData)
    {
      let obj = {...respData[city]}
      obj.fbCodigo = city
      arrayFormateado.push(obj)
    }
    return arrayFormateado
  }

  /**
 * Metodo para Formatear los datos del Clasificador Multas
 */
  FormatearLista (pLista = [], pParametros = {}) {
    const rLista = pLista.map( data => {
      return {
      id: data[pParametros.id],
      categoria: pParametros.categoria,
      idItem: data[pParametros.idItem],
      valor: data[pParametros.valor].toString(),
      desc: data[pParametros.desc].toString(),
      }
    })
    return rLista
  }
  /**
   * Método encargado de armar la cabecera
   */
  render () {
    return (
      <div >
        <ComboBox 
          etiqueta={'CLASES'}
          placeholderItems={'buscar....'}
          visible={true}
          datos={lista}
          valor={1}
        />
        <ComboBoxH
          etiqueta={'HOOKS'}
          visible={true}
          datos={this.state.lista}
          valor={1}
          visibleItem={true}
          placeholderItems={'hola mundo'}
          valorMostrado={'MacDonals'}
        />
              <FaHeart />
      <FaRegHeart />
      </div>
    )
  }
}

export default PruebaComponenteClases