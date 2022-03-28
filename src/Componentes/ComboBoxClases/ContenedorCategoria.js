/**
 * Created by Mariluz Vargas 25/03/2022
 * Sub Componente encargado de comunicar a los otros subcomponentes.
 */
 import React, { Component } from 'react'
 import PropTypes from 'prop-types'
 import Categoria from './Categoria'
 const uuid = require('uuid')
 class ContendorCategoria extends Component {
   /**
    * categoria: Array que recibe del Padre.
    * filtroCategoria: Variable que maneja el input de las categorias.
    * filtroItem: Variable que maneja el input de los Item.
    * onClickItem: Función que valida la entrada de un evento.
    * estiloCampo: Propiedad que acepta estilos
    * ej: {
       cursiva: false,
       subRayado: false,
       negrilla: false,
       tamanio: 20
      }
    */
   static propTypes = {
     categoria : PropTypes.array,
     filtroCategoria : PropTypes.string,
     filtroItem : PropTypes.string,
     onClickItem : PropTypes.func,
     estiloCampo: PropTypes.object
   }
 
   constructor (props) {
     super(props)
     this.state = {
       categoria : this.props.categoria,
       filtroCategoria : this.props.filtroCategoria,
       filtroItem : this.props.filtroItem,
       onClickItem : this.props.onClickItem,
       estiloCampo: this.props.estiloCampo
     }
   }
 
   static defaultProps = {
     categoria : null,
     filtroCategoria : '',
     filtroItem : '',
     estiloCampo: {}
   }
 
   componentWillReceiveProps (nextProps) {
     if (nextProps.filtroCategoria !== null) {
       this.setState({ filtroCategoria: nextProps.filtroCategoria })
     }
     if (nextProps.filtroItem !== null) {
       this.setState({ filtroItem: nextProps.filtroItem })
     }
     if (nextProps.categoria !== null) {
       this.setState({ categoria:nextProps.categoria })
     }
     if (nextProps.onClickItem !== undefined && nextProps.onClickItem !== null) {
       this.setState({ onClickItem: nextProps.onClickItem })
     }
     if (nextProps.estiloCampo !== null) {
       this.setState({ estiloCampo: nextProps.estiloCampo })
     }
   }
 
   shouldComponentUpdate () {
     return true
   }
 
   /** Metodo para validar los estilos*/
   validarEstilosCampos () {
     let { estiloCampo } = this.state
     let estilo = {}
     if (estiloCampo !== undefined && estiloCampo !== null) {
       if (estiloCampo.cursiva !== undefined) {
         if (estiloCampo.cursiva) {
           estilo.fontStyle = 'italic'
         } else {
           estilo.fontStyle = 'none'
         }
       }
       if (estiloCampo.subRayado !== undefined) {
         if (estiloCampo.subRayado) {
           estilo.textDecoration = 'underline'
         } else {
           estilo.textDecoration = 'none'
         }
       }
       if (estiloCampo.negrilla !== undefined) {
         if (estiloCampo.negrilla) {
           estilo.fontWeight = 'bold'
         }
       }
       if (estiloCampo.tamanio !== undefined) {
         estilo.fontSize = estiloCampo.tamanio + 'px'
       }
     }
     return estilo
   }
 
   render () {
     let categoria = []
     let categoriaFiltrada = []
     if (this.state.categoria !== null) {
       if (this.state.filtroCategoria !== '') {
         this.state.categoria.filter((item) => {
           if (item.categoria.toLowerCase().indexOf(this.state.filtroCategoria.toLowerCase()) > -1) {
             categoriaFiltrada.push(item)
           }
         })
         categoria.push(<Categoria key={uuid.v4()} items={categoriaFiltrada} filtroItem={this.state.filtroItem}
           onClickItem={this.state.onClickItem} />)
       } else {
         if (this.state.filtroItem !== '') {
           this.state.categoria.filter((item) => {
             if (item.desc.toLowerCase().indexOf(this.state.filtroItem.toLowerCase()) > -1) {
               categoriaFiltrada.push(item)
             }
           })
           categoria.push(<Categoria key={uuid.v4()} items={categoriaFiltrada} filtroItem={this.state.filtroItem}
             onClickItem={this.state.onClickItem} />)
         } else {
           categoria.push(<Categoria key={uuid.v4()} items={this.state.categoria} filtroItem={this.state.filtroItem}
             onClickItem={this.state.onClickItem} />)
         }
       }
     } else {
       categoria.push(<h4>Cargando .... </h4>)
     }
     let estiloCampo = this.validarEstilosCampos()
     return (
       <div className='ContainerCategoria' style={estiloCampo}>
         {categoria} 
       </div>
     )
   }
 }
 export default ContendorCategoria