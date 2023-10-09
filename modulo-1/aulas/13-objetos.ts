{
  type Pessoa = {
    nome: string
    idade: number
    corFavorita: string
  }

  const pessoa: Pessoa = {
    nome: 'Guilherme',
    corFavorita: 'Vermelho',
    idade: 25
  }

  type Pessoa2 = {
    nome: string
    idade: number
    corFavorita: string
  }

  const Ana: Pessoa2 = {
    corFavorita: 'Preto',
    idade: 20,
    nome: 'ana'
  }

  function foo(pessoa: Pessoa) {}

  function bar(pessoa: Pessoa2) {}

  type Carro = {
    marca: string
    ano: number
    dono: Pessoa
  }

  type CarroLiteral = {
    marca: string
    ano: number
    dono: {
      nome: string
      idade: number
      corFavorita: string
    }
  }

  const carro: CarroLiteral = {
    ano: 2022,
    dono: {
      nome: 'Gui',
      idade: 25,
      corFavorita: 'Preto'
    },
    marca: 'Honda'
  }
}

{
  type obj = {
    a: string
    b: number
  }

  const foo: obj = {
    a: 'a',
    b: 1
  }

  // const bar: obj = {
  //   a: 'a',
  // }

  // const baz: obj = {
  //   a: 'a',
  //   c: true
  // }

  type obj2 = {
    a: string
    b?: number
  }

  const foo2: obj2 = {
    a: 'a',
    //c: true
  }
}