let clientes = [
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

let produtos = [
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

let pedidos = [
    {
        produto: null,
        cliente: null,
    }
];
export default {
    getClientes: async () => {
        return this.clientes;
    },

    getProdutos: async () => {
        return this.produtos;
    },

    getPedidos: async () => {
        return this.pedidos;
    }
}
