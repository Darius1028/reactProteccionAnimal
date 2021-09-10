import { useState, useEffect } from 'react';
import countries from './countries';
import { postAction, resetAction } from '../redux/adoptionDucks';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [fullName, setfullName] = useState('');
  const [age, setage] = useState('');
  const [state, setstate] = useState('');
  const [email, setemail] = useState('');
  const [occupation, setoccupation] = useState('');
  const [address, setaddress] = useState('');
  const [pet, setpet] = useState('');
  const [why, setWhy] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const dispatch = useDispatch();
  const infoAdop = useSelector((store) => store.adoption);
  const history = useHistory();

  useEffect(() => {
   if(infoAdop.data.success === true){
    history.push('/');
    dispatch(resetAction());
   }
  }, [infoAdop,history,dispatch]);


  const handleSubmit = (e) => {

    let arrayData =[fullName,age,state,email,address,pet,why,occupation,acceptedTerms];

    dispatch(postAction(arrayData));
    e.preventDefault();
  };

  return (
    <div className='col-lg-6 col-md-5 mx-auto'>

      <form  onSubmit={handleSubmit}>
       
      <h2 className="text-center " >FORMULARIO DE ADOPCION</h2>
              <p className="text-muted" >Adoptar una mascota es una decisión seria, implica alegrías, innumerables recompensas y
        responsabilidades, como velar por la alimentación, salud y seguridad del animalito durante
        toda su vida (que oscila entre 10 hasta 18 años), brindarle amor, compañía y no
        abandonarlo si nos vamos de viaje o nos mudamos de casa. NOS RESERVAMOS el
        derecho de dar en adopción luego de evaluar este formulario.</p><br />
        <div className='form-group mb-3'>
          <label className='form-label' >
            NOMBRES Y APELLIDOS:
          </label>
          <input
            className='form-control'
            name='fullName'
            type='text'
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
            maxlength={40}
            required
          />
        </div>

        <div className='form-group mb-3'>
          <label className='form-label'>
          E-MAIL:
          </label>
          <input
            className='form-control'
            name='fullName'
            type='email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            maxlength={40}
            required
          />
        </div>

        <div className='form-group mb-3'>
          <label className='form-label'>EDAD: </label>
          <input
          className='form-control'
            name='age'
            type='number'
            value={age}
            onChange={(e) => setage(e.target.value)}
            maxlength={2}
            required
          />
        </div>
        <div className='form-group mb-3'>
          <label className='form-label'>OCUPACIÓN: </label>
          <input
          className='form-control'
            name='occupation'
            type='text'
            value={occupation}
            onChange={(e) => setoccupation(e.target.value)}
            maxlength={40}
            required
          />
        </div>
        <div className='form-group mb-3'>
          <label className='form-label'>DIRECCIÓN: </label>
          <input
          className='form-control'
            name='occupation'
            type='text'
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            maxlength={60}
            required
          />
        </div>

        <div className='form-group mb-3'>
          <label className='form-label'>PROVINCIA:</label>
          <select
          className='form-select'
            name='state'
            value={state}
            onChange={(e) => setstate(e.target.value)}
            required
          >
            <option key=''></option>
            {countries.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className='form-group mb-3'>
          <label className='form-label'>¿QUÉ MASCOTA DESEAS ADOPTAR? </label>
          <input
          className='form-control'
            name='occupation'
            type='text'
            value={pet}
            onChange={(e) => setpet(e.target.value)}
            maxlength={40}
            required
          />
        </div>


        <div className='form-group mb-3'>
          <label className='form-label'>¿POR QUÉ DESEAS ADOPTARLA? </label>
          <textarea
          row={5}
          className='form-control'
            name='occupation'
            type='text'
            value={why}
            onChange={(e) => setWhy(e.target.value)}
            required
          />
        </div>


        

        <div className=' form-group form-check'>
        <input
        className="form-check-input"
            name='acceptedTerms'
            type='checkbox'
            onChange={(e) => setAcceptedTerms(e.target.value)}
            required
          />
          <label className="form-check-label"></label>
          aceptar terminos y condiciones
        </div>

        <div className='form-group mt-3 mb-3 text-center'>
          <button className="btn btn-primary">comfirmar</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
