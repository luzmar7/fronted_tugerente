/**
 * Created by Mariluz Vargas Hilari 29/03/2022
 */
 import React, { Component } from 'react'
 import PropTypes from 'prop-types'
 import './Button.scss'
 class Button extends Component {
   /**
    * visible: (Maneja la vista del boton(para poderlo ver en pantalla).)
    * habilitado: (habilita el Boton(para poder hacer la funcion onclick).)
    * texto: (muestra el nombre del Boton.)
    * onclick: (esta funcion recibe un evento del padre.)
    */
   static propTypes = {
     visible: PropTypes.bool,
     habilitado: PropTypes.bool,
     texto: PropTypes.string,
     onclick: PropTypes.func,
     tipo: PropTypes.string,
     rutaIcono: PropTypes.string,
     forma: PropTypes.string,
     className: PropTypes.string,
     posicionEtiqueta: PropTypes.string,
     estiloEtiqueta: PropTypes.string,
     posicionBoton: PropTypes.string,
     tamaniofafa: PropTypes.string 
   }
   constructor (props) {
     super(props)
     this.state = {
       visible: this.props.visible,
       habilitado: this.props.habilitado,
       texto: this.props.texto,
       onclick: this.props.onclick,
       tipo: this.props.tipo,
       forma: this.props.forma,
       rutaIcono: this.props.rutaIcono,
       className: this.props.className,
       posicionEtiqueta: this.props.posicionEtiqueta,
       estiloEtiqueta: this.props.estiloEtiqueta,
       posicionBoton: this.props.posicionBoton,
       tamaniofafa: this.props.tamaniofafa
     }
     this.control = this.control.bind(this)
   }
 
   static defaultProps = {
     visible: true,
     habilitado: true,
     texto: 'Boton',
     tipo: 'defecto',
     forma: 'normal',
     rutaIcono: '',
     className: '',
     posicionEtiqueta: 'centro',
     estiloEtiqueta: '',
     posicionBoton: 'texto-centro',
     tamaniofafa: '40px'
   }
 
   componentWillReceiveProps (nextProps) {
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
     if (nextProps.texto !== null) {
       this.setState({ texto: nextProps.texto })
     }
     if (nextProps.tipo !== null) {
       this.setState({ tipo: nextProps.tipo })
     }
     if (nextProps.rutaIcono !== null) {
       this.setState({ rutaIcono: nextProps.rutaIcono })
     }
     if (nextProps.forma !== null) {
       this.setState({ forma: nextProps.forma })
     }
     if (nextProps.className !== undefined && nextProps.className !== null) {
       this.setState({ className: nextProps.className })
     }
     if (nextProps.onclick !== undefined && nextProps.onclick !== null) {
       this.setState({ onclick: nextProps.onclick })
     }
     if (nextProps.posicionEtiqueta !== null) {
       this.setState({ posicionEtiqueta: nextProps.posicionEtiqueta })
     }
     if (nextProps.estiloEtiqueta !== null) {
       this.setState({ estiloEtiqueta: nextProps.estiloEtiqueta })
     }
     if (nextProps.posicionBoton !== null) {
       this.setState({ posicionBoton: nextProps.posicionBoton })
     }
     if (nextProps.tamaniofafa !== null) {
       this.setState({ tamaniofafa: nextProps.tamaniofafa })
     }
   }
 
   /**
    * Confirma que este recibiendo un evento del padre
    */
  control () {
    if (this.state.onclick !== undefined && this.state.onclick !== null) {
      this.state.onclick()
    }
  }
   /**
    * Retorna la clase de acuerdo al tipo y la forma del boton
    */
   getClassIcono () {
     let { tipo } = this.state
     let { forma } = this.state
     switch (tipo) {
       case 'success':
         return 'btn-color-success'
       case 'info':
         return 'btn-color-info-icono'
       case 'warning':
         return 'btn-color-warning-icono'
       case 'danger':
         return 'btn-color-danger-icono'
       case 'principal':
         return 'btn-color-principal-icono'
       case 'letter':
         return 'btn-color-principal-icono'
       default:
         return 'btn-color-defecto-icono'
     }
   }
   /**
    * la clase que sera para el lock del boton ya sea para el icono o normal
    */
   getClassButtonLock () {
     let { forma } = this.state
     return (forma === 'icono') ? 'boton-icono btn-general-icono btn-bloqueado-icono'
       : 'boton-icono btn-general btn-bloqueado'
     //  : 'boton btn-general btn-bloqueado'
   }
 
   /**
    * Se encarga de renderizar el boton
    */
   renderBotonNormal () {
     let { habilitado, visible, texto } = this.state
     let _tipoClassButton = this.getClassIcono()
     return <button className={_tipoClassButton} onClick={this.control}
       disabled={!habilitado} hidden={!visible}>{texto}</button>
   } 
   /**
    * Método para obtener la posicion y estilos si tuviera para la etiqueta.
    */
   obtenerEtiqueta () {
     let { posicionEtiqueta, estiloEtiqueta } = this.state
     let estilo = estiloEtiqueta
     switch (posicionEtiqueta) {
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
     return estilo
   }
  render () {
    let { posicionBoton} = this.state
    return (
      <div className={posicionBoton}>
        {this.renderBotonNormal()}
      </div>
    )
   }
 }
 export default Button
 