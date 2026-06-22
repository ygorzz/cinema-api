import styled from "styled-components";
import CardModel from "../../CardModel/index.jsx";
import { Input, Form, Button } from "../../../Inputs/index.jsx";
import Subtitle from "../../CardSubtitle/index.jsx";
import {
  insertDiretor,
  updateDiretor,
} from "../../../../services/diretorService.js";
import { useEffect, useState } from "react";
import { mapInputs } from "../../../../helpers/mapInputs.js";
import { handleChange } from "../../../../helpers/handleChange.js";

const AddContainer = styled(CardModel)``;

const CAMPOS_INICIAIS = {
  nome: "",
  nacionalidade: "",
};

function AddCard({ diretorToUpdate, setDiretorToUpdate, setReloadDiretores }) {
  const [campos, setCampos] = useState(CAMPOS_INICIAIS);

  useEffect(() => {
    function buildFields() {
      if (diretorToUpdate) {
        setCampos({
          nome: diretorToUpdate.nome ?? "",
          nacionalidade: diretorToUpdate.nacionalidade ?? "",
        });
      } else {
        setCampos(CAMPOS_INICIAIS);
      }
    }
    buildFields();
  }, [diretorToUpdate]);

  async function handleInsertDiretor(e) {
    e.preventDefault();
    try {
      const diretor = mapInputs(e);
      const data = await insertDiretor(diretor);
      alert(data.message);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }

  async function handleUpdateDiretor(e) {
    e.preventDefault();
    try {
      const diretor = mapInputs(e);
      diretor._id = diretorToUpdate._id;
      const data = await updateDiretor(diretor);
      setReloadDiretores(true);
      setDiretorToUpdate(null);
      alert(data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <AddContainer
      titulo={diretorToUpdate ? "Atualizar Diretor" : "Adicionar Diretor"}
    >
      <Subtitle subtitle="Dados" />
      <Form
        onSubmit={diretorToUpdate ? handleUpdateDiretor : handleInsertDiretor}
      >
        <Input
          placeholder="Nome"
          name="nome"
          required
          value={campos.nome}
          onChange={(e) => handleChange(e, setCampos)}
        />
        <Input
          placeholder="Nacionalidade"
          name="nacionalidade"
          value={campos.nacionalidade}
          onChange={(e) => handleChange(e, setCampos)}
        />

        {diretorToUpdate && (
          <Button
            onClick={() => setDiretorToUpdate(null)}
            type="button"
            textColor="#000"
          >
            Cancelar
          </Button>
        )}
        <Button type="submit" color="#c41a1a">
          {diretorToUpdate ? "Salvar Alterações" : "Adicionar"}
        </Button>
      </Form>
    </AddContainer>
  );
}

export default AddCard;
