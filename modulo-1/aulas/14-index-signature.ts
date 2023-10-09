{
  type ToDo = {
    titulo: string
    descricao: string
  }

  const todo: ToDo = {
    titulo: 'Assistir séries',
    descricao: 'Tomar notas'
  }
}

{
  type ToDo = {
    titulo: string
    descricao: string
  }

  const todo: ToDo = {
    titulo: 'Assistir séries',
    descricao: 'Tomar notas',
    //labels: {
      //importante: true
    //}
  }

  type TodoDict = {
    titulo: string
    descricao: string
    labels: {
      [nome: string]: boolean
    }
  }

  const todo2: TodoDict = {
    titulo: 'Assistir séries',
    descricao: 'Tomar notas',
    labels: {
      importante: true,
      pessoal: true,
      atrasado: true
    }
  }
}