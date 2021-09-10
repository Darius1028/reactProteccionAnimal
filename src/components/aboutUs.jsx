import logo from '../logo.svg'

const AboutUs = () => {

  const errorLoadImg = (e) => {
    e.target.src = logo
 } 
  return (
    <div className="about" >


<section class="py-5 text-center container">
    <div class="row py-lg-8">
      <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="blog-post-title">Best Friend</h1>
        <p class="lead text-muted" >Es una asociación sin fines de lucro, de ámbito nacional, independiente y apolítica. </p>
        <p class="lead text-muted" > Nuestra sede social está radicada en Quito y llevamos a cabo nuestra labor en toda Ecuador</p>
      </div>
    </div>

    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Nuestros fines</h1>
        <p class="lead text-muted">Los fines recogidos son:</p>

        <p>
          <ul class="lead text-muted">

            <li>La protección de los derechos de los animales y del medio ambiente en general.</li>
            <li>Promover la concienciación, educación y formación ciudadana sobre la protección de los animales y del medio ambiente en general.</li>
            <li>Fomentar la tenencia responsable y el cuidado de los animales, haciendo especial hincapié en la concienciación contra el maltrato y el abandono de animales.</li>
            
          </ul>
        </p>
      </div>
    </div>

    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Recursos</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
        <ul class="lead text-muted">

        <li>Los donativos o subvenciones que pudieran ser concedidas por personas físicas o jurídicas, públicas o privadas.</li>
        <li>Las cuotas de los socios, ordinarias o extraordinarias.</li>
        <li>Los recursos que provengan del rendimiento de su patrimonio, en su caso.</li>

        </ul>
        </p>
      </div>
    </div>
  </section>
      <article class="blog-post">
        <h2 class="blog-post-title">Best Friend</h2>
        <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/images/sarah.jpg`}
          classNameName='w-100 shadow-1-strong rounded mb-4'
          alt='sarah'
          onError={ (e) => {errorLoadImg(e)} }
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      </article>
    </div>

  );
};

export default AboutUs;
