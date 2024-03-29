import React, {useState} from 'react';
import api from '../../services/api'

export default function Login({history}){

    const [email, setEmail] = useState('');
    
    async function handleSubmit(event){
      event.preventDefault();
      const response = await api.post('/sessions', {email})  
      const {_id} = response.data;  
      localStorage.setItem('user', _id);  
      history.push('/dashboard')
    }

    return (
        <>
        <p>Ofereça <strong>SPOTS</strong> para programadores e encontre <strong>TALENTOS</strong> para sua empresa  </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>E-mail *</label>
          <input type='email' value={email} onChange={event => setEmail(event.target.value)} id='email' placeholder='Seu melhor email'></input>
          <button type='submit' className='btn'>Entrar</button>
        </form>
        </>
    )
}
