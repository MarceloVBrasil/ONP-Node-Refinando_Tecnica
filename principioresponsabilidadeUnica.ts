// Uma classe ou um método deve ter apenas uma razão para ser alterado.

class Cliente {
    private id: number
    private nome: string
    private email: string
    private telefone: string

    constructor(id: number, nome: string, email: string, telefone: string) {
        this.id = id
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }

    adicionar() {

    }

    enviarEmail() {

    } // ruim
}

class EmailService {
    private email: string

    constructor(email: string) {
        this.email = email
    }

    enviar() {

    } // ruim - muito generico

    enviarBoasVindasCliente() {

    } //bom

    enviarRelatorioGerente() {

    } // bom
}

const cliente = new Cliente(1, "Marcelo Brasil", "marcelo@gmail.com", "(00) 0000-0000")
cliente.adicionar()

const emailService = new EmailService("marcelo@gmail.com")
emailService.enviar()


class ProcessadorPagamento {
    processar(informacaoPagamento: any) {

    }

    gerarNotaFiscal(infoCompra: any) {

    } // ruim
}

const processadorpagamento = new ProcessadorPagamento()
processadorpagamento.processar({})


class ProcessaadorFiscal {
    gerarNotaFiscal() {

    }

    gerarCupomFiscal() {

    }
}

class AtendenteResort {

    aceitarCliente() {

    }
}

class GerenteResort {
    aceitarCliente() {

    }

    banirCliente() {

    }

    analisarCliente() {

    }
}