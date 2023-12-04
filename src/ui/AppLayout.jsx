import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="h-screen bg-stone-50">
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
