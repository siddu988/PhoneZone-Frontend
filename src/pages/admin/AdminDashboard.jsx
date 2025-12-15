// src/pages/admin/AdminDashboard.jsx

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <p className="text-slate-300">
        Welcome Admin! This panel will allow you to manage products, orders, and users.
      </p>

      <div className="mt-6 space-y-4">

        <a
          href="/admin/add-product"
          className="block bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-lg w-60"
        >
          ➕ Add New Product
        </a>

        <a
          href="/admin/orders"
          className="block bg-green-600 hover:bg-green-500 px-4 py-3 rounded-lg w-60"
        >
          📦 Manage Orders
        </a>

        <a
          href="/admin/products"
          className="block bg-purple-600 hover:bg-purple-500 px-4 py-3 rounded-lg w-60"
        >
          📱 Manage Products
        </a>

      </div>
    </div>
  );
}
