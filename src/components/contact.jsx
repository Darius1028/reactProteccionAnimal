import logo from '../logo.svg'

const Contact = () => {

  const errorLoadImg = (e) => {
    e.target.src = logo
 } 
  return (
    <div className="contact py-lg-5" >

    <div class="row featurette">
      <div class="col-md-7 text-center">
      <p className="text-center m-4" >Tu interés y apoyo es muy importante para nosotros. Únete a nuestra lista de correo y mantente al tanto de las noticias.</p>
      <div className='btn-group ' role='group'>
        <div  className='btn'>
          <div>
          <i class="fab fa-youtube"></i>
          </div>
        </div>
        <div className='btn'>
          <div>
          <i class="fab fa-twitter"></i>
          </div>
        </div>
        <div className='btn'>
          <div>
          <i class="fab fa-facebook-f"></i>
          </div>
        </div>
        <div className='btn'>
          <div>
          <i class="fab fa-twitch"></i>
          </div>
        </div>
      </div>
   
      </div>
      <div class="col-md-5">
      <img
            src={`${process.env.PUBLIC_URL}/images/greg.jpg`}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='greg'
            onError={(e) => {
              errorLoadImg(e);
            }}
          />
      </div>
    </div>

    </div>

  );
};

export default Contact;
