/* eslint-disable @typescript-eslint/no-explicit-any */
export interface updatesModels{
    updateFilmeWithSessao(filmeId: string, sessaoId: string): Promise<any>
    updateSalaWithSessao(salaId: string, sessaoId: string): Promise<any>
    updateSessaoWithIngresso(sessaoId: string, ingressoId: string): Promise<any>
}