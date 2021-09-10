import logo from '../logo.svg';

const Gallery = () => {
  const errorLoadImg = (e) => {
    e.target.src = logo;
  };

  return (
    <div className='row'>
      <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
        <div className='card'>
          <img
            src={`${process.env.PUBLIC_URL}/images/sarah.jpg`}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='sarah'
            onError={(e) => {
              errorLoadImg(e);
            }}
          />
          <div className='card-body'>
            <h5 className='card-title'>Sara</h5>
            <p className='card-text'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an
            </p>
            <p className='card-text'>
              <small className='text-muted'>Lorem Ipsum.</small>
            </p>
          </div>
        </div>

        <div className='card'>
          <img
            src={`${process.env.PUBLIC_URL}/images/joe.jpg`}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='joe'
            onError={(e) => {
              errorLoadImg(e);
            }}
          />
          <div className='card-body'>
            <h5 className='card-title'>Jose</h5>
            <p className='card-text'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an
            </p>
            <p className='card-text'>
              <small className='text-muted'>Lorem Ipsum.</small>
            </p>
          </div>
        </div>
      </div>

      <div className='col-lg-4 mb-4 mb-lg-0'>
        <div className='card'>
          <img
            src={`${process.env.PUBLIC_URL}/images/rafael.jpg`}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='rafael'
            onError={(e) => {
              errorLoadImg(e);
            }}
          />
          <div className='card-body'>
            <h5 className='card-title'>Rafael</h5>
            <p className='card-text'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an
            </p>
            <p className='card-text'>
              <small className='text-muted'>Lorem Ipsum.</small>
            </p>
          </div>
        </div>

        <div className='card'>
          <img
            src={`${process.env.PUBLIC_URL}/images/markus.jpg`}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='markus'
            onError={(e) => {
              errorLoadImg(e);
            }}
          />
          <div className='card-body'>
            <h5 className='card-title'>Estrellita</h5>
            <p className='card-text'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an
            </p>
            <p className='card-text'>
              <small className='text-muted'>Lorem Ipsum.</small>
            </p>
          </div>
        </div>
      </div>

      <div className='col-lg-4 mb-4 mb-lg-0'>
      <div className='card'>
          <img
            src={`${process.env.PUBLIC_URL}/images/margarita.jpg`}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='margarita'
            onError={(e) => {
              errorLoadImg(e);
            }}
          />
          <div className='card-body'>
            <h5 className='card-title'>Campeon</h5>
            <p className='card-text'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an
            </p>
            <p className='card-text'>
              <small className='text-muted'>Lorem Ipsum.</small>
            </p>
          </div>
        </div>
        <div className='card'>
          <img
            src={`${process.env.PUBLIC_URL}/images/sharon.jpg`}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='sharon'
            onError={(e) => {
              errorLoadImg(e);
            }}
          />
          <div className='card-body'>
            <h5 className='card-title'>Max</h5>
            <p className='card-text'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an
            </p>
            <p className='card-text'>
              <small className='text-muted'>Lorem Ipsum.</small>
            </p>
          </div>
        </div>
        <div className='card'>
          <img
            src={`${process.env.PUBLIC_URL}/images/greg.jpg`}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='greg'
            onError={(e) => {
              errorLoadImg(e);
            }}
          />
          <div className='card-body'>
            <h5 className='card-title'>Lulu</h5>
            <p className='card-text'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an
            </p>
            <p className='card-text'>
              <small className='text-muted'>Lorem Ipsum.</small>
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};
export default Gallery;
