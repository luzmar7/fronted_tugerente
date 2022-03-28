/**
 * Created by Mariluz Vargas on 25/03/2022.
 * Sub Componente que se encarga de manejar los Inputs.
 */
 import React, { Component } from 'react'
 import PropTypes from 'prop-types'
 class Search extends Component {
 
   /**
    * valorCategoria: Variable que almacena el valor entrante, para la categoria.
    * valorItem: Variable que almacena el valor entrante, para el item.
    * obtenerValorCategoria: Función que se encarga de enviar el valorCategoria
    * obtenerValorItem: Función que se encarga de enviar el valorItem
    * onChangeCategoria: Función que se envia al momento de hacer el OnChange, para la categoria.
    * onChangeItem: Función que se envia al momento de hacer el OnChange, para el item..
    */
   static propTypes = {
     placeholderCategoria: PropTypes.string,
     placeholderItems: PropTypes.string,
     valorCategoria : PropTypes.string,
     valorItem : PropTypes.string,
     obtenerValorCategoria : PropTypes.func,
     obtenerValorItem : PropTypes.func,
     onChangeCategoria : PropTypes.func,
     onChangeItem : PropTypes.func,
     visibleCategoria: PropTypes.bool,
     visibleItem: PropTypes.bool
   }
 
   constructor (props) {
     super(props)
     this.state = {
       placeholderCategoria : this.props.placeholderCategoria,
       placeholderItems : this.props.placeholderItems,
       valorCategoria : this.props.valorCategoria,
       valorItem : this.props.valorItem,
       obtenerValorCategoria: this.props.obtenerValorCategoria,
       obtenerValorItem: this.props.obtenerValorItem,
       onChangeCategoria: this.props.onChangeCategoria,
       onChangeItem: this.props.onChangeItem,
       visibleCategoria: this.props.visibleCategoria,
       visibleItem: this.props.visibleItem
     }
     this.handleOnChangeCategoria = this.handleOnChangeCategoria.bind(this)
     this.handleOnChangeItem = this.handleOnChangeItem.bind(this)
     this.presionoEnter = this.presionoEnter.bind(this)
   }
 
   static defaultProps = {
     placeholderCategoria : 'Categoria',
     placeholderItems : 'Items',
     valorCategoria : '',
     valorItem : '',
     visibleCategoria: true,
     visibleItem: true
   } 
   componentWillReceiveProps (nextProps) {
     if (nextProps.valorCategoria !== null) {
       this.setState({ valorCategoria: nextProps.valorCategoria })
     }
     if (nextProps.valorItem !== null) {
       this.setState({ valorItem: nextProps.valorItem })
     }
     if (nextProps.visibleCategoria !== null) {
       if (nextProps.visibleCategoria) {
         this.setState({ visibleCategoria: true })
       } else {
         this.setState({ visibleCategoria: false })
       }
     }
     if (nextProps.visibleItem !== null) {
       if (nextProps.visibleItem) {
         this.setState({ visibleItem: true })
       } else {
         this.setState({ visibleItem: false })
       }
     }
     if (nextProps.obtenerValorCategoria !== undefined && nextProps.obtenerValorCategoria !== null) {
       this.setState({ obtenerValorCategoria: nextProps.obtenerValorCategoria })
     }
     if (nextProps.obtenerValorItem !== undefined && nextProps.obtenerValorItem !== null) {
       this.setState({ obtenerValorItem: nextProps.obtenerValorItem })
     }
     if (nextProps.onChangeCategoria !== undefined && nextProps.onChangeCategoria !== null) {
       this.setState({ onChangeCategoria: nextProps.onChangeCategoria })
     }
     if (nextProps.onChangeItem !== undefined && nextProps.onChangeItem !== null) {
       this.setState({ onChangeItem: nextProps.onChangeItem })
     }
   }
 
   shouldComponentUpdate () {
     return true
   }
   /**
    * Función que se activa al momento de hacer cambios en el input de Categoria.
    */
   handleOnChangeCategoria (valor) {
     this.setState({
       valorCategoria:valor.target.value
     })
     if (this.state.obtenerValorCategoria != null) {
       this.state.obtenerValorCategoria(valor.target.value)
     }
   }
 
   /**
    * Función que se activa al momento de hacer cambios en el input de Items.
    */
   handleOnChangeItem (valor) {
     this.setState({
       valorItem:valor.target.value
     })
     if (this.state.obtenerValorItem != null) {
       this.state.obtenerValorItem(valor.target.value)
     }
   }
 
   /**
    * Esta función no se la utiliza dentro de este subComponente.
    */
   clear () {
     this.inputCategoria.value = ''
     this.inputIem.value = ''
   }


  presionoEnter (valor) {
    console.log('preciono enter', valor)
  }
 
   render () {
     return (
       <div className='SearchBar'>
         <div hidden={!this.state.visibleCategoria}>
           <input className='input-style'
             ref={input => (this.inputCategoria = input)}
             type='text'
             placeholder={this.state.placeholderCategoria}
             onChange={this.state.onChangeCategoria}
           />
         </div>
         <div hidden={!this.state.visibleItem}>
           <input className='input-style'
             ref={input => (this.inputIem = input)}
             type='text'
             placeholder={this.state.placeholderItems}
             onChange={this.state.onChangeItem}
             onKeyPress={(e) => {
              if (e.key === "Enter") {
                  this.setState({ message: e.target.value },
                  () => {
                      alert(this.state.message);
                  });
              }
          }}
           />

           
         </div>
       </div>
     )
   }
 }
 export default Search