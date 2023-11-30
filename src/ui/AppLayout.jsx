import Header from './Header';
import Loader from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="h-screen bg-stone-50">
      {isLoading && <Loader />}

      <Header />

      <div>
        <main className="bg-stone-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
