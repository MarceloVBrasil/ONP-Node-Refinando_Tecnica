export async function verificarCartaoCredito(dadosCartao: any): Promise<any> {
    const verificarExistenciaCartao = await stripe.verifyCreditCard(dadosCartao)
    return verificarExistenciaCartao
}

export async function verificarLimiteCartaoCredito(dadosCartao: any): Promise<any> {
    const verificarExistenciaCartao = await stripe.verifyLimitCreditCard(dadosCartao)
    return verificarExistenciaCartao
}

export async function verificarNomeSerasas(dadosCartao: any): Promise<any> {
    const verificarExistenciaCartao = await serasa.verifyCPF(dadosCartao.cpf)
    return verificarExistenciaCartao
}