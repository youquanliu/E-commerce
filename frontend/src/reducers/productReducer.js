export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return { loding: true, products: [] }
        case 'PRODUCT_LIST_SUCCESS':
            return
    }
}