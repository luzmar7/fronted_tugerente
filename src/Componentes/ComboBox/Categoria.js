/**
 * Created by Mariluz Vargas Hilari 25/03/2022.
 * Sub Componente encargado de armar las categorias que se mostraran en pantalla.
 */
 import React, { Component } from 'react'
 import PropTypes from 'prop-types'
 import Item from './item'
 
 const uuid = require('uuid')
 class Categoria extends Component {
 
   /**
    * nombreCategoria: Variable que maneja el nombre de la categoria.
    * items: Array que le llega desde el componente principal.
    * filtroCategoria: Variable para realizar la busqueda de Categoria.
    * filtroItem: Variable para realizar la busqueda de Item.
    * onClickItem: Evento que se activa desde la pantalla principal.
    */
   static propTypes = {
     nombreCategoria : PropTypes.string,
     items : PropTypes.array,
     filtroCategoria : PropTypes.string,
     filtroItem : PropTypes.string,
     onClickItem : PropTypes.func
   }
 
   constructor (props) {
     super(props)
     this.state = {
       nombreCategoria : this.props.nombreCategoria,
       items : this.props.items,
       filtroCategoria : this.props.filtroCategoria,
       filtroItem : this.props.filtroItem,
       onClickItem : this.props.onClickItem
     }
   }
 
   static defaultProps = {
     nombreCategoria : 'Categoria',
     items : [],
     filtroCategoria : '',
     filtroItem : ''
   }
 
   componentWillReceiveProps (nextProps) {
     if (nextProps.nombreCategoria !== null) {
       this.setState({ nombreCategoria: nextProps.nombreCategoria })
     }
     if (nextProps.filtroCategoria !== null) {
       this.setState({ filtroCategoria: nextProps.filtroCategoria })
     }
     if (nextProps.filtroItem !== null) {
       this.setState({ filtroItem: nextProps.filtroItem })
     }
     if (nextProps.items !== null) {
       this.setState({ items: nextProps.items })
     }
     if (nextProps.onClickItem !== undefined && nextProps.onClickItem !== null) {
 
     }
   }
 
   render () {
     let categoriaAnterior = null
     let categoriaArray = []
     if (this.state.items != null) {
       if (this.state.filtroItem !== '') {
         this.state.items.filter((item) => {
           if (item.categoria !== categoriaAnterior) {
             categoriaArray.push(
               <div key={uuid.v4()} className='categoria'>
                 {item.categoria}
               </div>
             )
           }
           if (item.desc.toLowerCase().indexOf(this.state.filtroItem.toLowerCase()) > -1) {
             categoriaArray.push(
               <Item key={uuid.v4()} valorPadre={item.id} valor={item.idItem} valorMostrar={item.valor}
                 desc={item.desc} tipoIteraccion={item.tipoIteraccion} idClasificadorCliente={item.idClasificadorCliente}
                 onClickItem={this.state.onClickItem} />
             )
           }
           categoriaAnterior = item.categoria
         })
       } else {
         this.state.items.forEach((item, i) => {
           if (item.categoria !== categoriaAnterior) {
             categoriaArray.push(
               <div key={uuid.v4()} className='categoria'>
                 {item.categoria}
               </div>
             )
           }
           categoriaArray.push(
             <Item key={uuid.v4()} valorPadre={item.id} valor={item.idItem} valorMostrar={item.valor}
               desc={item.desc} tipoIteraccion={item.tipoIteraccion}
               idClasificadorCliente={item.idClasificadorCliente} onClickItem={this.state.onClickItem} />
           )
           categoriaAnterior = item.categoria
         })
       }
     } else {
       categoriaArray.push(<h1>Loading....</h1>)
     }
     return (
       <div>
         {categoriaArray}
       </div>
     )
   }
 }
 export default Categoria