import { PagamentosService } from "../PagamentosService";

import { EmailService } from "../EmailService";
import { UsuarioService } from "../UsuarioService";

export function PagamentosFactory() {
    const emailService = new EmailService()
    const usuarioService = new UsuarioService(emailService)

    const pagamentoService = new PagamentosService(usuarioService, emailService)
    return pagamentoService
}