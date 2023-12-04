import Hero from './Hero';
import FeaturedMenu from './FeaturedMenu';
import Loader from './Loader';
import { useNavigation } from 'react-router-dom';

function Home() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div>
      {isLoading && <Loader />}
      <Hero />
      <FeaturedMenu />
    </div>
  );
}

export default Home;
