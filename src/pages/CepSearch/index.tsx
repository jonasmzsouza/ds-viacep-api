import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';

type FormData = {
  cep: string;
};

const CepSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    cep: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="cep"
              value={formData.cep}
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

        <ResultCard title="Logradouro" description="Rua X" />
        <ResultCard title="Bairro" description="Bairro X" />
        <ResultCard title="Localidade" description="Localidade x" />
        <ResultCard title="UF" description="UF x" />
      </div>
    </div>
  );
};

export default CepSearch;
