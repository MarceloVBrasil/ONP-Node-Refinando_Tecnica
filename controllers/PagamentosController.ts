import { PagamentosFactory } from "../services/factories/PagamentosFactory";

class PagamentosController {

    pagar() {
        const pagamentosService = PagamentosFactory()

        pagamentosService.processarPagamentoCartaoCredito({})
    }
}