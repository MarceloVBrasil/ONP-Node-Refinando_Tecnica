const animal = "cachorro"
const raca = "husky"
const alimentacao = "racao pedigree"


class AnimaisService {
    verificarSeAnimalGato(animal: string, raca: string, alimentacao: string): string | void {
        if (animal !== "gato") throw new Error("Só aceitamos gato")
        return animal
    }
}