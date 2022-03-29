/**
 * Created by Mariluz Vargas Hilari 29/03/2022
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import jQuery from 'jquery'
import './PopUp.scss'
/**
 * mostrarModal: Propiedad booleana que abre o cierra el modal
 * mostrarBoton: Boton mostrado al pie del modal, cuya funcion es cerrar el mismo
 * mostrarCerrar: Ícono de cerrado mostrado en la parte superior derecha del modal
 * funcionRetorno: Funcion que devuelve un valor al momento de cerrar el modal
 * contenido: Objeto del DOM, que se renderiza dentro del modal
 * estadoInicial: estado inicial del componente para validar las animaciones del mismo
 * pantallaCompleta: Tipo de modal en pantalla completa, usado actualmente en la Agenda
 * imagenCabecera: Imagen mostrada en la cabecera del modal. Recibe un dato de tipo cadena (Una ruta física)
 * -> Altura recomendada 75px aprox (puede ser mas grande). Ancho recomendado 400px min
 * tituloCabecera: Titulo que puede o no mostrarse en la cabecera del modal
 * */
class PopUp extends Component {
  static propTypes = {
    mostrarModal: PropTypes.bool,
    mostrarBoton: PropTypes.bool,
    mostrarCerrar: PropTypes.bool,
    funcionRetorno: PropTypes.func,
    contenido: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ]),
    // estadoInicial: PropTypes.bool,
    pantallaCompleta: PropTypes.bool,
    imagenCabecera: PropTypes.string,
    tituloCabecera: PropTypes.string,
    comunicaCerradoModal: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      mostrarModal: this.props.mostrarModal,
      mostrarBoton: this.props.mostrarBoton,
      mostrarCerrar: this.props.mostrarCerrar,
      contenido: this.props.contenido,
      // estadoInicial: this.props.estadoInicial,
      estadoInicial: true,
      pantallaCompleta: this.props.pantallaCompleta,
      imagenCabecera: this.props.imagenCabecera,
      tituloCabecera: this.props.tituloCabecera,
      funcionRetorno: this.props.funcionRetorno,
      comunicaCerradoModal: this.props.comunicaCerradoModal
    }
    // this.contenidoPadre = this.contenidoPadre.bind(this)
    this.cerrarModal = this.cerrarModal.bind(this)
  }
  static defaultProps = {
    mostrarModal: false,
    mostrarBoton: false,
    mostrarCerrar: true,
    contenido: <div />,
    // estadoInicial: true,
    imagenCabecera: './images/tuGerente.jpg',
    tituloCabecera: ''
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.mostrarBoton != null) {
      this.setState({ mostrarBoton: nextProps.mostrarBoton })
    }
    if (nextProps.mostrarCerrar != null) {
      this.setState({ mostrarCerrar: nextProps.mostrarCerrar })
    }
    if (nextProps.contenido != null) {
      this.setState({ contenido: nextProps.contenido })
    }
    if (nextProps.imagenCabecera != null) {
      this.setState({ imagenCabecera: nextProps.imagenCabecera })
    }
    if (nextProps.tituloCabecera != null) {
      this.setState({ tituloCabecera: nextProps.tituloCabecera })
    }
    if (nextProps.mostrarModal != null) {
      this.setState({ mostrarModal: nextProps.mostrarModal })
    }
    // if (nextProps.estadoInicial != null) {
    //  this.setState({ estadoInicial: nextProps.estadoInicial })
    // }
  }

  componentDidMount () {
    let isIE = /* @cc_on!@ */false || !!document.documentMode // Validación para Internet Explorer 11+
    if (isIE) {
      let estadoGenericoMOSTRAR = document.getElementsByClassName('contenedorFlexDiv')[0]
      if (!this.state.pantallaCompleta) {
        console.log('estadoGenericoMOSTRAR__IE', estadoGenericoMOSTRAR)
        estadoGenericoMOSTRAR.style.height = 'auto'
        estadoGenericoMOSTRAR.style.marginTop = '10px'
      }
    }
  }

  componentDidUpdate (prevProps, prevState) {
    let self = this
    let DatosGlobales = {}
    if (prevState.mostrarModal !== this.state.mostrarModal) {
      self.setState({ estadoInicial: false })
      if (DatosGlobales.SideBar !== undefined && DatosGlobales.SideBar !== null) {
        if (this.state.mostrarModal === true) {
          DatosGlobales.SideBar.setState({ visible: false })
        } else {
          DatosGlobales.SideBar.setState({ visible: true })
        }
      }
    }
  }

  cerrarModal () {
    this.setState({ mostrarModal: false })
    if (this.state.funcionRetorno !== undefined && this.state.funcionRetorno !== null) {
      this.state.funcionRetorno()
    }
  }

  componentWillUnmount () {
    try {
      jQuery('.core-layout__viewport').css({ zIndex: 2 })
    } catch (pError) {
    }
  }

  render () {
    let contenidoPadre = React.cloneElement(this.state.contenido, {
      ref: 'componentModalContent'
    })
    return (
      <div>
        <div className='contenedorFlexDiv' id={this.state.mostrarModal
          ? 'estadoGenericoInicialMOSTRAR' : 'estadoGenericoInicialOCULTAR'}>
          <div className={'ContenidoModalGenerico'} >
            <div className={'CabeceraModal'}>
              <div className={'mascaraColor'} />
              <div className='tituloCabecera'><h1>{this.state.tituloCabecera}</h1></div>
            </div>
            <div className='ContenidoPadre'>
              {contenidoPadre}
            </div>
            
            {this.state.mostrarCerrar &&
              <div className='cerrarModalAgenda' onClick={this.cerrarModal}>
                <div><i className="fa fa-times"></i></div>
              </div>
            }
          </div>
        </div>
        <div className='backgroundModalGenerico' id={this.state.mostrarModal
          ? 'backgroundModalGenericoInicialMOSTRAR' : 'backgroundModalGenericoInicialOCULTAR'} />
      </div>
    )
  }
}
export default PopUp

