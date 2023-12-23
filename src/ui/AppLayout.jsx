import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Loader from './Loader';
import { useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="h-screen bg-stone-50">
      {isLoading && <Loader />}
      <Header />
      <div>
        <main className="bg-stone-50 pt-[5rem]">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
