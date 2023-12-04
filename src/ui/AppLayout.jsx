import Header from './Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="h-screen bg-stone-50">
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
