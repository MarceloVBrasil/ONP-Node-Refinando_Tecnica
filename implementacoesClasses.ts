type User = {
    id: string
    nome: string
    email: string
    telefone: string
}

interface IUsuarioRepository {
    getUsuario(id: string): Promise<User>
    criar(id: string, nome: string, email: string, telefone: string): Promise<User>
}

class UsuarioRepository implements IUsuarioRepository {
    async getUsuario(id: string): Promise<User> {
        throw new Error("Method not implemented.")
    }
    async criar(id: string, nome: string, email: string, telefone: string): Promise<User> {
        throw new Error("Method not implemented.")
    }

}