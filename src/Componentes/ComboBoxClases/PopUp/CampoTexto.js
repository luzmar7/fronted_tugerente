/**
 * Created by Mariluz Vargas Hilari 29/03/2022
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CampoTexto.scss'


class CampoTexto extends Component {
  static propTypes = {
    etiqueta: PropTypes.string,
    estiloEtiqueta: PropTypes.object,
    estiloCampo: PropTypes.object,
    sinEtiqueta: PropTypes.bool,
    fontIcon: PropTypes.string,
    nombre: PropTypes.string,
    placeholder: PropTypes.string,
    valor: PropTypes.string,
    limite: PropTypes.number,
    habilitado: PropTypes.bool,
    visible: PropTypes.bool,
    obligatorio: PropTypes.bool,
    expresion: PropTypes.string,
    obtenerValor: PropTypes.func,
    obtenerOnBlur: PropTypes.func,
    error: PropTypes.bool,
    mensajeError: PropTypes.string,
    password: PropTypes.bool,
    tipo: PropTypes.string,
    horizontal: PropTypes.bool,
    toUpperCase: PropTypes.bool,
    excepcionToUpperCase: PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.state = {
      etiqueta: this.props.etiqueta,
      estiloEtiqueta: this.props.estiloEtiqueta,
      estiloCampo: this.props.estiloCampo,
      sinEtiqueta: this.props.sinEtiqueta,
      fontIcon: this.props.fontIcon,
      nombre: this.props.nombre,
      placeholder: this.props.placeholder,
      valor: this.props.valor,
      limite: this.props.limite,
      habilitado: this.props.habilitado,
      visible: this.props.visible,
      obligatorio: this.props.obligatorio,
      expresion: this.props.expresion,
      obtenerValor: this.props.obtenerValor,
      obtenerOnBlur: this.props.obtenerOnBlur,
      error: this.props.error,
      mensajeError: this.props.mensajeError,
      password: this.props.password,
      tipo: this.props.tipo,
      horizontal: this.props.horizontal,
      excepcionToUpperCase: this.props.excepcionToUpperCase
    }
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.validar = this.validar.bind(this)
  }

  static defaultProps = {
    etiqueta: '',
    estiloEtiqueta: {
      posicionEtiqueta: 'izquierda',
      color: '',
      cursiva: false,
      subRayado: false,
      negrilla: false,
      tamanio: 14,
      fondo: '',
      colorTexto: '',
      cursivaTexto: false,
      subRayadoTexto: false,
      negrillaTexto: false,
      fondoTexto: ''
    },
    estiloCampo: {},
    sinEtiqueta: false,
    fontIcon: '',
    nombre: '',
    placeholder: 'Ingrese Texto',
    valor: '',
    limite: 100,
    habilitado: true,
    visible: true,
    expresion: 'textoNumero',
    obligatorio: true,
    error: true,
    mensajeError: 'Campo Obligatorio',
    password: false,
    tipo: 'texto',
    MostrarTexto: false,
    horizontal: false,
    toUpperCase: false,
    excepcionToUpperCase: false
  }

  componentWillMount () {
    if (this.state.obligatorio !== null) {
      if (this.state.obligatorio) {
        if (this.state.valor !== null && this.state.valor !== '' && this.state.valor.length > 0) {
          this.setState({ error: false })
        } else {
          this.setState({ valor: '' })
        }
      } else {
        this.setState({ error: false })
      }
      if (!this.state.habilitado || !this.state.visible) {
        this.setState({ obligatorio: false, error: false })
      }
    }
    if (this.state.password) {
      this.setState({ tipo: 'password', obligatorio: false, error: false, password: true })
    }
  }
  componentWillReceiveProps (nextProps) {
    // fires when component is receiving new props
    if (nextProps.etiqueta !== null) {
      this.setState({ etiqueta: nextProps.etiqueta })
    }
    if (nextProps.estiloEtiqueta !== null) {
      this.setState({ estiloEtiqueta: nextProps.estiloEtiqueta })
    }
    if (nextProps.estiloCampo !== null) {
      this.setState({ estiloCampo: nextProps.estiloCampo })
    }
    if (nextProps.sinEtiqueta !== null) {
      this.setState({ sinEtiqueta: nextProps.sinEtiqueta })
    }
    if (nextProps.fontIcon !== null) {
      this.setState({ fontIcon: nextProps.fontIcon })
    }
    if (nextProps.nombre !== null) {
      this.setState({ nombre: nextProps.nombre })
    }
    if (nextProps.placeholder !== null) {
      this.setState({ placeholder: nextProps.placeholder })
    }
    if (nextProps.visible !== null) {
      if (nextProps.visible) {
        this.setState({ visible: true })
      } else {
        this.setState({ visible: false })
      }
    }
    if (nextProps.habilitado !== null) {
      if (nextProps.habilitado) {
        this.setState({ habilitado: true })
      } else {
        this.setState({ habilitado: false })
      }
    }
    if (nextProps.obligatorio !== null) {
      if (nextProps.obligatorio) {
        let mensaje = true
        if (!nextProps.habilitado) {
          mensaje = false
        }
        this.setState({
          obligatorio: true,
          error: mensaje
        })
      } else {
        this.setState({
          obligatorio: false,
          error: false
        })
      }
    }
    if (nextProps.limite !== null && nextProps.limite !== 0 && nextProps.limite !== null) {
      this.setState({ limite: nextProps.limite })
    }
    if (nextProps.expresion !== null) {
      this.setState({ expresion: nextProps.expresion })
    }
    if (nextProps.obtenerValor !== undefined && nextProps.obtenerValor !== null) {
      this.setState({ obtenerValor: nextProps.obtenerValor })
    }
    if (nextProps.password !== null) {
      if (nextProps.password) {
        this.setState({
          password: true,
          error: false,
          tipo: 'password'
        })
      } else {
        this.setState({
          password: false,
          tipo: 'texto'
        })
      }
    }
    if (nextProps.horizontal !== null) {
      if (nextProps.horizontal) {
        this.setState({ horizontal: true })
      } else {
        this.setState({ horizontal: false })
      }
    }
    if (nextProps.mensajeError !== null) {
      this.setState({ mensajeError: nextProps.mensajeError })
    }
  }
  handleOnBlur (event) {
    let valor = event.target.value
    valor = (this.state.toUpperCase && !this.state.password) ? valor.toUpperCase() : valor
    this.setState({ valor })
    if (this.state.obtenerOnBlur !== null && this.state.obtenerOnBlur !== undefined) {
      this.state.obtenerOnBlur()
    }
  }

  handleOnChange (event) {
    let valor = event.target.value
    this.validar(valor)
  }
  /**
   * validar el valor de entrada mediante onChage
   */
  validar (valor) {
    let controlarError = true
    let dato = ''
    if (this.validarExpresionRegular(valor)) {
      controlarError = false
      this.setState({
        error: controlarError,
        valor: valor
      })
      if (this.state.obtenerValor !== null && this.state.obtenerValor !== undefined) {
        this.state.obtenerValor(valor)
      }
    } else {
      controlarError = false
      if (!this.state.obligatorio) {
      } else {
        if (valor.length > 0) {
          if (this.state.password) {
            controlarError = false
          } else {
            controlarError = true
          }
        } else {
          if (valor > 0) {
            controlarError = true
          } else {
            controlarError = true
          }
        }
      }
      if (valor === '') {
        dato = ''
      } else {
        if (valor.length > 0) {
          controlarError = false
          dato = this.rearmarconExpresionRegular(valor)
        }
      }
      if (this.state.obtenerValor !== null && this.state.obtenerValor !== undefined) {
        this.state.obtenerValor(dato)
      }
      this.setState({
        valor: dato,
        error: controlarError
      })
    }
  }

  /**
   * valida la expresion regular
   */
  validarExpresionRegular (valor) {
    let estado = false
    if (this.state.expresion === 'textoNumero' || this.state.password) {
      let expRegular = /^[a-zA-Z0-9áéíóúÁÉÍÓÚäëïöüÄËÏÖÜñÑ´:_;/*@%()|[\]=?¿!$+#", \\r\s^<>ªº.-]+$/
      if (valor.match(expRegular)) {
        estado = true
      }
    } else if (this.state.expresion === 'Numero') {
      let expRegular = /^[0-9]$/
      if (valor.match(expRegular)) {
        estado = true
      }
    } else {
      let expRegular = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ:_;/*@%()=?¿!$+# ]+$/
      if (valor.match(expRegular)) {
        estado = true
      }
    }
    return estado
  }
  render () {
    let mensajeEstado = 'mensajeEstado ' + (this.state.error ? 'error' : 'success')
    let derecha = (this.state.horizontal) ? 'alineadoCampoTextoDerecha' : ''
    return (
      <div className='containerCampoTexto' hidden={!this.state.visible}>
        <label className='label-style' hidden={this.state.etiqueta === ''}>
          {this.state.etiqueta}
        </label>
          
        <div className={derecha}  >
          <input className={'input-style bbottom color-plomo-placeholder'}
            type={this.state.tipo}
            name={this.state.nombre}
            value={this.state.valor}
            maxLength={this.state.limite}
            placeholder={this.state.placeholder}
            disabled={!this.state.habilitado}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
          />
          {(this.state.fontIcon.trim().length > 0)
            ? '' : <div className={mensajeEstado} hidden={!this.state.error} >{this.state.mensajeError}</div>}
        </div>
       
      </div>
    )
  }
}
export default CampoTexto
