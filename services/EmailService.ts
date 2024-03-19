interface IEmailService {
    enviar(email: string, mensagem: string): Promise<boolean>
}

export class EmailService implements IEmailService {
    async enviar(email: string, mensagem: string): Promise<boolean> {
        return true
    }
}