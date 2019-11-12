import React, { Component } from 'react'
import { stores } from './Store'

const ProductContext = React.createContext();


class ProductProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            details: [],
            cart: [],
            modalProduct: [],
            modalOpen: false,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0
        }
    }

    componentDidMount() {
        this.setProducts()
    }

    setProducts = () => {
        let tempProducts = []
        stores.forEach(item => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    getItem = (id => {
        const product = this.state.products.find(product => {
            return product.id === id
        })
        return product
    })

    handleOpenModal = (id) => {
        const product = this.getItem(id)
        this.setState({
            modalProduct: product,
            modalOpen: true
        })
    }

    handleCloseModal = _ => {
        this.setState({
            modalOpen: false
        })
    }

    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState({
            details: product
        })
    }

    increment = id => {
        let tempCart = [...this.state.cart]
        let selectedProduct = tempCart.find(item => {
            return item.id === id
        })
        selectedProduct.count++
        selectedProduct.total += selectedProduct.price
        this.setState({
            cart: tempCart
        }, () => {
            this.addTotal()
        })
    }

    decrement = id => {
        let tempCart = [...this.state.cart]
        let selectedProduct = tempCart.find(item => {
            return item.id === id
        })
        selectedProduct.count--
        if (selectedProduct.count > 0) {
            selectedProduct.total -= selectedProduct.price
            this.setState({
                cart: tempCart
            }, () => {
                this.addTotal()
            })
        } else {
            this.removeItem(id)
        }
    }

    removeItem = id => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => {
            return item.id !== id
        })

        const product = tempProducts.find(item => {
            return item.id === id
        })
        product.inCart = false
        product.count = 0
        product.total = 0
        this.setState({
            cart: [...tempCart],
            products: [...tempProducts]
        })
    }

    clearCart = _ => {
        this.setState({
            cart: []
        },
            () => {
                this.setProducts()
                this.addTotal()
            })
    }

    addTotal = () => {
        let subTotal = 0
        this.state.cart.map(item => {
            subTotal += item.total
        })
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        })
    }



    handleAddToCart = (id) => {
        let temProducts = [...this.state.products]
        const product = temProducts.find(product => {
            return product.id === id
        })
        if (product.inCart) {
            product.count = 1
            product.total = product.price
        } else {
            product.inCart = true
            product.count += 1
            product.total += product.price
        }
        this.setState({
            products: temProducts,
            cart: [...this.state.cart, product]
        }, () => {
            this.addTotal()
        })

    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    handleAddToCart: this.handleAddToCart,
                    handleOpenModal: this.handleOpenModal,
                    handleCloseModal: this.handleCloseModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }