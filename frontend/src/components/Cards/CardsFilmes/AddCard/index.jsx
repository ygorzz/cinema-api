import styled from "styled-components";
import CardModel from "../../CardModel/index.jsx";
import { Input, Form, Button } from "../../../Inputs/index.jsx";
import Subtitle from "../../CardSubtitle/index.jsx";
import { insertFilme, updateFilme } from "../../../../services/filmeService.js";
import { useEffect, useState } from "react";
import { getDiretores } from "../../../../services/diretorService.js";
import { mapInputs } from "../../../../helpers/mapInputs.js";
import { Resultado, ResultadoContainer } from "../../../Resultado/index.jsx";
import { handleChange } from "../../../../helpers/handleChange.js";

const AddContainer = styled(CardModel)`

`;

const CAMPOS_INICIAIS = {
  titulo: "",
  genero: "",
  anoLancamento: "",
  duracaoMinutos: "",
  diretor: "",
};

function AddCard({ filmeToUpdate, setFilmeToUpdate, setReloadFilmes }) {
  const [diretores, setDiretores] = useState([]);
  const [nomeDiretor, setNomeDiretor] = useState("");
  const [diretorSelecionado, setDiretorSelecionado] = useState(false);
  const [campos, setCampos] = useState(CAMPOS_INICIAIS);

  // Quando filmeToUpdate mudar, preenche os campos
  useEffect(() => {
    function buildFields(){
      setDiretorSelecionado(true)
      if (filmeToUpdate) {
        setCampos({
          titulo: filmeToUpdate.titulo ?? "",
          genero: filmeToUpdate.genero ?? "",
          anoLancamento: filmeToUpdate.anoLancamento ?? "",
          duracaoMinutos: filmeToUpdate.duracaoMinutos ?? "",
          diretor: filmeToUpdate.diretor?._id ?? "",
        });
  
        setNomeDiretor(filmeToUpdate.diretor?.nome ?? "");
      } else {
        setCampos(CAMPOS_INICIAIS);
  
        setNomeDiretor("");
      }
    }

    buildFields();
  }, [filmeToUpdate]);

  useEffect(() => {
    async function fetchDiretores() {
      if (!nomeDiretor || diretorSelecionado) {
        setDiretores([]);
        return;
      }
      const filtro = {
        nome: nomeDiretor,
      };
      try {
        const data = await getDiretores(filtro);
        setDiretores(data.result || []);
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar diretores. Tente novamente");
      }
    }
    // Debounce -> espera o usuário parar de executar uma ação por X tempo antes de fazer alguma coisa
    // setTimeout -> retorna um id
    const timeout = setTimeout(fetchDiretores, 300);

    // O useEffect executa o return antes da função chamada dentro dele.
    return () => clearTimeout(timeout);
  }, [nomeDiretor]);

  async function handleInsertFilme(e) {
    e.preventDefault();
    setNomeDiretor("");
    try {
      const filme = mapInputs(e);
      const data = await insertFilme(filme);
      setCampos(CAMPOS_INICIAIS);
      alert(data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  async function handleUpdateFilme(e) {
    e.preventDefault();
    try {
      const filme = mapInputs(e);
      filme._id = filmeToUpdate._id;
      const data = await updateFilme(filme);
      setReloadFilmes(true);
      setFilmeToUpdate(null);
      alert(data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <AddContainer
      titulo={filmeToUpdate ? "Atualizar Filme" : "Adicionar Filme"}
    >
      <Subtitle subtitle="Dados" />
      <Form onSubmit={filmeToUpdate ? handleUpdateFilme : handleInsertFilme}>
        <Input
          placeholder="Titulo"
          name="titulo"
          required
          value={campos.titulo}
          onChange={(e) => handleChange(e, setCampos)}
        />
        <Input
          placeholder="Gênero"
          name="genero"
          value={campos.genero}
          onChange={(e) => handleChange(e, setCampos)}
        />
        <Input
          placeholder="Ano de Lançamento"
          name="anoLancamento"
          value={campos.anoLancamento}
          onChange={(e) =>
            setCampos({ ...campos, anoLancamento: e.target.value })
          }
        />
        <Input
          placeholder="Duração em Minutos"
          name="duracaoMinutos"
          value={campos.duracaoMinutos}
          onChange={(e) =>
            setCampos({ ...campos, duracaoMinutos: e.target.value })
          }
        />
        <Input type="hidden" name="diretor" value={campos.diretor} />
        <Input
          placeholder="Digite o nome do diretor"
          value={nomeDiretor}
          onChange={(e) => {
            setNomeDiretor(e.target.value);
            handleChange(e, setCampos);
            setDiretorSelecionado(false);
          }}
        />

        {diretores.length > 0 && (
          <ResultadoContainer>
            {diretores.map((diretor) => {
              return (
                <Resultado
                  onClick={() => {
                    setCampos(prev => ({
                       ...prev,
                      diretor: diretor._id 
                    }));
                    setNomeDiretor(diretor.nome);
                    setDiretorSelecionado(true);
                  }}
                  key={diretor._id}
                >
                  <p>{diretor.nome}</p>
                </Resultado>
              );
            })}
          </ResultadoContainer>
        )}

        {filmeToUpdate && (
          <Button onClick={() => setFilmeToUpdate(null)} type="button" textColor="#000">
            Cancelar
          </Button>
        )}
        <Button type="submit" color="#c41a1a">
          {filmeToUpdate ? "Salvar Alterações" : "Adicionar"}
        </Button>
      </Form>
    </AddContainer>
  );
}

export default AddCard;
