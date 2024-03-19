import { Usuario } from "../controllers/UsuarioController"
import { EmailService } from "./EmailService"

interface IUsuarioService {
    create(dadosUsuario: Usuario): Promise<Usuario>
}

export class UsuarioService implements IUsuarioService {
    constructor(private emailService: EmailService) {

    }

    async create(dadosUsuario: Usuario): Promise<Usuario> {
        return dadosUsuario
    }

    async buscarUsuario(id: string): Promise<any> {
        return { id: '', nome: '' }
    }
}