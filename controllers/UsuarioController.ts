import { EmailService } from "../services/EmailService"
import { UsuarioService } from "../services/UsuarioService"

export type Usuario = {
    id: string
    nome: string
    email: string
}

interface IUsuarioController {
    create(dadosUsuario: Usuario): Promise<Usuario>
}

class UsuarioController implements IUsuarioController {
    constructor(private usuarioService: UsuarioService) {
        this.usuarioService = usuarioService
    }

    create(dadosUsuario: Usuario): Promise<Usuario> {
        return this.usuarioService.create(dadosUsuario)
    }
}

const usuarioController = new UsuarioController(new UsuarioService(new EmailService()))