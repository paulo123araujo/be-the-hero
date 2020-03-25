import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg'; 
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [city, setCity] = useState('');
	const [uf, setUf] = useState('');

	const history = useHistory();

	async function handleSubmit(event) {
		event.preventDefault();

		const data = { name, email, whatsapp, city, uf };
		try {
			const response = await api.post('/ongs', data);

			alert(`Seu ID de acesso: ${response.data.id}`);
			history.push('/')
		} catch(e) {
			alert("Erro ao cadastrar");
		}
	}

	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero" />
					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

					<Link to="/" className="back-link"><FiArrowLeft size={16} color="#E02041" />Voltar para a home</Link>
				</section>

				<form onSubmit={handleSubmit}>
					<input placeholder="Nome da ONG" onChange={e => setName(e.target.value)} value={name} />
					<input placeholder="E-mail" type="email" onChange={e => setEmail(e.target.value)} value={email} />
					<input placeholder="Whatssapp" onChange={e => setWhatsapp(e.target.value)} value={whatsapp} />

					<div className="input-group">
						<input placeholder="Cidade" onChange={e => setCity(e.target.value)} value={city} />
						<input placeholder="UF" style={{ width: 80 }} onChange={e => setUf(e.target.value)} value={uf} />
					</div>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	);
}

