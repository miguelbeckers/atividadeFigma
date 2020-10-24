
export default {
    getClientes: async () => {
        return[
            {
                nome: "Silvio Santos",
                idade: 82,
                produtos: []
            },
            {
                nome: "Augusto Liberato",
                idade: 58,
                produtos: []
            },
            {
                nome: "Xuxa Menegel",
                idade: 55,
                produtos: []
            }
        ]
    },

    getProdutos: async () => {
        return[
            {
                descricao: "tenis adidas",
                preco: 1234,
            },
            {
                descricao: "calça herig",
                preco: 238,
            },
            {
                descricao: "camisa polo",
                preco: 556,
            }
        ]
    },

    getPedidos: async () => {
        return[
            {
                produto: null,
                cliente: null,
            }
        ]
    }
}
