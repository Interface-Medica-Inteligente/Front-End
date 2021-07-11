export const transformRecord = (data: any) => {
  return {
    name: data.nomePaciente,
    momName: data.nomeMae,
    dadName: data.nomePai,
    birthDate: data.dataNascimento,
    height: data.altura,
    weight: data.peso,
    cpf: data.cpf,
    genre: data.sexo
  }
}

export const transformRecipes = (data: any[]) => {
  return data.map(recipe => ({
    id: recipe.id,
    revenueDate: recipe.dataEmissao,
    medicines: recipe.prescricao[0].nome
  }))
}
