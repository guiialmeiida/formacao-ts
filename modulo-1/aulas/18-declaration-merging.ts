{
  interface Pessoa {
    nome: string
  }

  interface Pessoa {
    idade: number
  }

  const pessoa: Pessoa = {
    nome: 'Gui',
    idade: 25
  }

  type Carro = {
    ano: number
  }

  //type Carro = {
  //  marca: string
  //}
}