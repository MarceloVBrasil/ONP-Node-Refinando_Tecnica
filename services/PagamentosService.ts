import { EmailService } from "./EmailService"
import {
    verificarNomeSerasas,
    verificarCartaoCredito,
    verificarLimiteCartaoCredito
} from "./Helpers/PagamentosHelper"
import { UsuarioService } from "./UsuarioService"
import { PagamentosFactory } from "./factories/PagamentosFactory"

interface IPagamentosService {
    processarPagamentoCartaoCredito(dadosCartao: any): Promise<any>
}


export class PagamentosService implements IPagamentosService {
    constructor(usuarioService: UsuarioService, emailService: EmailService) {

    }
    async processarPagamentoCartaoCredito(dadosCartao: any): Promise<any> {

        const verificarExistenciaCartao = verificarCartaoCredito(dadosCartao)

        if (!verificarExistenciaCartao) {
            throw new Error("Cartão inválido")
        }

        const verificarLimiteCartao = verificarLimiteCartaoCredito(dadosCartao)

        const verificarNomeSerasa = verificarNomeSerasas(dadosCartao)
    }
}

const pagamentoService = PagamentosFactory()