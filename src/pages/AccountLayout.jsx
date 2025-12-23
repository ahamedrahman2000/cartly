import { NavLink, Outlet } from "react-router-dom";
const linkClass = ({ isActive }) =>
  `block px-4 py-2 rounded-lg font-medium transition ${
    isActive
      ? "bg-gray-900 text-white"
      : "text-gray-700 hover:bg-gray-100"
  }`;
const AccountLayout = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1">
 
      <div className="flex justify-around shadow-md sticky top-16 mb-5 bg-white border rounded-xl p-6 space-x-4 z-50">
        <NavLink to="/account/profile"   className={linkClass}>
          Profile
        </NavLink>
        <NavLink to="/account/orders" className={linkClass}>
          Orders
        </NavLink>
        <NavLink to="/account/addresses" className={linkClass}>
          Addresses
        </NavLink>
        <NavLink to="/account/payments" className={linkClass}>
          Payments
        </NavLink>
        <NavLink to="/account/settings" className={linkClass}>
          Settings
        </NavLink>
      </div>
 
      <div className="md:col-span-3">
        <Outlet />
      </div>

    </section>
  );
};

export default AccountLayout;
