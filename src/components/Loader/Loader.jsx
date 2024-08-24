import { PacmanLoader } from 'react-spinners';

const Loader = () => {
  return (
    <PacmanLoader
      size={50}
      color="#ff4500"
      cssOverride={{ position: 'absolute', top: '50%', left: '50%' }}
    />
  );
};

export default Loader;
