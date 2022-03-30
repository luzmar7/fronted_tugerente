/**
 * Created by Mariluz Vargas Hilari 29/03/2022
 * CampoLabel es la vista de la seccion CampoLabel que se encarga de dar acceso al uso de la aplicacion
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CampoLabel.scss'

class CampoLabel extends Component {

  /**
   * Define las Propiedades de la pantalla
   * @type {{estado: *}}
   */
  static propTypes = {
    titulo: PropTypes.string,
    estiloEtiqueta: PropTypes.object,
    visible: PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.state = {
      titulo: this.props.titulo,
      estiloEtiqueta: this.props.estiloEtiqueta,
      visible: this.props.visible
    }
    this.obtenerEtiqueta = this.obtenerEtiqueta.bind(this)
    this.validarEstilosEtiqueta = this.validarEstilosEtiqueta.bind(this)
  }

  static defaultProps = {
    titulo : '',
    estiloEtiqueta: {
      posicionEtiqueta: 'centro',
      color: '',
      cursiva: false,
      subRayado: false,
      negrilla: true,
      tamanio: 20,
      fondo: ''
    },
    visible : true
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.titulo !== null) {
      this.setState({ titulo: nextProps.titulo })
    }
    if (nextProps.estiloEtiqueta !== null) {
      this.setState({ estiloEtiqueta: nextProps.estiloEtiqueta })
    }
    if (nextProps.visible !== null) {
      if (nextProps.visible) {
        this.setState({ visible: true })
      } else {
        this.setState({ visible: false })
      }
    }
  }
  /**
   * Método para validar los estilos para la etiqueta
   */
  validarEstilosEtiqueta () {
    let { estiloEtiqueta } = this.state
    let estilo = {}
    estiloEtiqueta = (estiloEtiqueta === undefined || estiloEtiqueta === null) ? {} : estiloEtiqueta
    if (estiloEtiqueta.color !== undefined) {
      estilo.color = estiloEtiqueta.color
    }
    if (estiloEtiqueta.cursiva !== undefined) {
      if (estiloEtiqueta.cursiva) {
        estilo.fontStyle = 'italic'
      } else {
        estilo.fontStyle = 'none'
      }
    }
    if (estiloEtiqueta.subRayado !== undefined) {
      if (estiloEtiqueta.subRayado) {
        estilo.textDecoration = 'underline'
      } else {
        estilo.textDecoration = 'none'
      }
    }
    if (estiloEtiqueta.negrilla !== undefined) {
      if (estiloEtiqueta.negrilla) {
        estilo.fontWeight = 'bold'
      } else {
        estilo.fontWeight = 'normal'
      }
    }
    if (estiloEtiqueta.tamanio !== undefined) {
      estilo.fontSize = estiloEtiqueta.tamanio + 'px'
    }
    if (estiloEtiqueta.fondo !== undefined) {
      estilo.background = estiloEtiqueta.fondo
    }
    if (!this.state.visible) {
      estilo.display = 'none'
    }
    return estilo
  }

  /**
   * Método para validar la posicion de la etiqueta
   */
  obtenerEtiqueta () {
    let { estiloEtiqueta } = this.state
    estiloEtiqueta = (estiloEtiqueta === undefined || estiloEtiqueta === null) ? {} : estiloEtiqueta
    let estilo = ''
    if (estiloEtiqueta !== undefined && estiloEtiqueta !== null && estiloEtiqueta.posicionEtiqueta !== undefined) {
      switch (estiloEtiqueta.posicionEtiqueta) {
        case 'derecha':
          estilo += ' texto-derecha'
          break
        case 'centro':
          estilo += ' texto-centro'
          break
        case 'izquierda':
          estilo += ' texto-izquierda'
          break
      }
    }
    return estilo
  }
  render () {
    let { titulo } = this.state
    let estiloEtiqueta = this.validarEstilosEtiqueta()
    return (
      <div className={'containerCampoLabel'} style={estiloEtiqueta} >
        <label className={'label-style tituloCampoLabel'} style={estiloEtiqueta} >{'  ' + titulo}</label>
      </div>
    )
  }
}

export default CampoLabel
