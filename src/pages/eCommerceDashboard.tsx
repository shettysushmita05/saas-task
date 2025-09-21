// // import React from 'react';
// // import { useAppSelector } from '../hooks';
// // import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
// // import BarChartExact from '../components/charts/BarChartExact';
// // import LineChartExact from '../components/charts/LineChartExact';
// // import MapChart from '../components/charts/MapChart';
// // import ProductsTable from '../components/charts/ProductsTable';
// // import SalesPieChart from '../components/charts/SalesPieChart';

// // const ECommerceDashboard: React.FC = () => {
// //   const { mode } = useAppSelector((state) => state.theme);

// //   // Mock data matching the design
// //   const projectionsData = [
// //     { name: 'Jan', actuals: 16, projections: 3 },
// //     { name: 'Feb', actuals: 19, projections: 2 },
// //     { name: 'Mar', actuals: 17, projections: 4 },
// //     { name: 'Apr', actuals: 20, projections: 6 },
// //     { name: 'May', actuals: 13, projections: 3 },
// //     { name: 'Jun', actuals: 17, projections: 4 },
// //   ];

// //   const revenueData = [
// //     { name: 'Jan', currentWeek: 22, previousWeek: 20 },
// //     { name: 'Feb', currentWeek: 18, previousWeek: 22 },
// //     { name: 'Mar', currentWeek: 29, previousWeek: 25 },
// //     { name: 'Apr', currentWeek: 24, previousWeek: 28 },
// //     { name: 'May', currentWeek: 20, previousWeek: 23 },
// //     { name: 'Jun', currentWeek: 27, previousWeek: 26 },
// //   ];

// //   const topProducts = [
// //     { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
// //     { name: 'Nike Air Max 270', price: '$120.00', quantity: 65, amount: '$7,800.00' },
// //     { name: 'Adidas Ultraboost 22', price: '$180.00', quantity: 45, amount: '$8,100.00' },
// //     { name: 'Puma RS-X', price: '$95.00', quantity: 78, amount: '$7,410.00' },
// //     { name: 'New Balance 990v5', price: '$150.00', quantity: 52, amount: '$7,800.00' },
// //   ];

// //   const salesData = [
// //     { name: 'Online', value: 38.6, color: '#3b82f6' },
// //     { name: 'Store', value: 25.4, color: '#10b981' },
// //     { name: 'Mobile', value: 18.0, color: '#f59e0b' },
// //     { name: 'Referral', value: 12.0, color: '#8b5cf6' },
// //     { name: 'E-mail', value: 6.0, color: '#ef4444' },
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       {/* Page Title */}
// //       <div>
// //         <h1 className={`text-2xl font-bold ${
// //           mode === 'dark' ? 'text-white' : 'text-gray-900'
// //         }`}>
// //           eCommerce
// //         </h1>
// //       </div>

// //       {/* First Row - 2 Metric Cards + Projections vs Actuals Chart */}
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //         {/* Left Side - 2 Metric Cards */}
// //         <div className="lg:col-span-1 space-y-6">
// //           {/* Customers Card */}
// //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
// //             <div className="flex items-center justify-between">
// //               <div className="flex-1">
// //                 <p className="text-sm font-medium text-blue-600">
// //                   Customers
// //                 </p>
// //                 <p className="text-2xl font-bold mt-1 text-gray-900">
// //                   3,781
// //                 </p>
// //                 <div className="flex items-center mt-2">
// //                   <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
// //                   <span className="text-sm font-medium text-green-500">
// //                     +11.01%
// //                   </span>
// //                 </div>
// //               </div>
// //               <div className="p-3 rounded-lg bg-blue-100">
// //                 <Users className="w-6 h-6 text-blue-600" />
// //               </div>
// //             </div>
// //           </div>

// //           {/* Orders Card */}
// //           <div className={`border rounded-lg p-6 ${
// //             mode === 'dark' 
// //               ? 'bg-gray-800 border-gray-700' 
// //               : 'bg-white border-gray-200'
// //           }`}>
// //             <div className="flex items-center justify-between">
// //               <div className="flex-1">
// //                 <p className={`text-sm font-medium ${
// //                   mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
// //                 }`}>
// //                   Orders
// //                 </p>
// //                 <p className={`text-2xl font-bold mt-1 ${
// //                   mode === 'dark' ? 'text-white' : 'text-gray-900'
// //                 }`}>
// //                   1,219
// //                 </p>
// //                 <div className="flex items-center mt-2">
// //                   <TrendingUp className="w-4 h-4 text-red-500 mr-1 rotate-180" />
// //                   <span className="text-sm font-medium text-red-500">
// //                     -0.03%
// //                   </span>
// //                 </div>
// //               </div>
// //               <div className={`p-3 rounded-lg ${
// //                 mode === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
// //               }`}>
// //                 <ShoppingCart className={`w-6 h-6 ${
// //                   mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
// //                 }`} />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side - Projections vs Actuals Chart */}
// //         <div className="lg:col-span-2">
// //           <BarChartExact data={projectionsData} />
// //         </div>
// //       </div>

// //       {/* Second Row - Revenue and Growth Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {/* Revenue Card */}
// //         <div className={`border rounded-lg p-6 ${
// //           mode === 'dark' 
// //             ? 'bg-gray-800 border-gray-700' 
// //             : 'bg-white border-gray-200'
// //         }`}>
// //           <div className="flex items-center justify-between">
// //             <div className="flex-1">
// //               <p className={`text-sm font-medium ${
// //                 mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
// //               }`}>
// //                 Revenue
// //               </p>
// //               <p className={`text-2xl font-bold mt-1 ${
// //                 mode === 'dark' ? 'text-white' : 'text-gray-900'
// //               }`}>
// //                 $695
// //               </p>
// //               <div className="flex items-center mt-2">
// //                 <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
// //                 <span className="text-sm font-medium text-green-500">
// //                   +15.03%
// //                 </span>
// //               </div>
// //             </div>
// //             <div className={`p-3 rounded-lg ${
// //               mode === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
// //             }`}>
// //               <DollarSign className={`w-6 h-6 ${
// //                 mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
// //               }`} />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Growth Card */}
// //         <div className={`border rounded-lg p-6 ${
// //           mode === 'dark' 
// //             ? 'bg-gray-800 border-gray-700' 
// //             : 'bg-white border-gray-200'
// //         }`}>
// //           <div className="flex items-center justify-between">
// //             <div className="flex-1">
// //               <p className={`text-sm font-medium ${
// //                 mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
// //               }`}>
// //                 Growth
// //               </p>
// //               <p className={`text-2xl font-bold mt-1 ${
// //                 mode === 'dark' ? 'text-white' : 'text-gray-900'
// //               }`}>
// //                 30.1%
// //               </p>
// //               <div className="flex items-center mt-2">
// //                 <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
// //                 <span className="text-sm font-medium text-green-500">
// //                   +6.08%
// //                 </span>
// //               </div>
// //             </div>
// //             <div className={`p-3 rounded-lg ${
// //               mode === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
// //             }`}>
// //               <TrendingUp className={`w-6 h-6 ${
// //                 mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
// //               }`} />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Third Row - Revenue Chart and Map */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         {/* Revenue Line Chart */}
// //         <div>
// //           <LineChartExact data={revenueData} />
// //         </div>

// //         {/* Revenue by Location Map */}
// //         <div>
// //           <MapChart />
// //         </div>
// //       </div>

// //       {/* Fourth Row - Table and Pie Chart */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         {/* Top Selling Products Table */}
// //         <div>
// //           <ProductsTable data={topProducts} />
// //         </div>

// //         {/* Total Sales Pie Chart */}
// //         <div>
// //           <SalesPieChart data={salesData} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ECommerceDashboard;










// import React from 'react';
// import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
// import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// const ECommerceDashboard = () => {
//   // Mock data matching the design
//   const projectionsData = [
//     { name: 'Jan', actuals: 16, projections: 3 },
//     { name: 'Feb', actuals: 19, projections: 2 },
//     { name: 'Mar', actuals: 17, projections: 4 },
//     { name: 'Apr', actuals: 20, projections: 6 },
//     { name: 'May', actuals: 13, projections: 3 },
//     { name: 'Jun', actuals: 17, projections: 4 },
//   ];

//   const revenueData = [
//     { name: 'Jan', currentWeek: 22, previousWeek: 20 },
//     { name: 'Feb', currentWeek: 18, previousWeek: 22 },
//     { name: 'Mar', currentWeek: 29, previousWeek: 25 },
//     { name: 'Apr', currentWeek: 24, previousWeek: 28 },
//     { name: 'May', currentWeek: 20, previousWeek: 23 },
//     { name: 'Jun', currentWeek: 27, previousWeek: 26 },
//   ];

//   const topProducts = [
//     { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
//     { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
//     { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
//     { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
//   ];

//   const salesData = [
//     { name: 'Direct', value: 300.56, percentage: 38.6, color: '#1f2937' },
//     { name: 'Affiliate', value: 135.18, percentage: 23.0, color: '#06b6d4' },
//     { name: 'Sponsored', value: 154.02, percentage: 15.0, color: '#10b981' },
//     { name: 'E-mail', value: 48.96, percentage: 23.4, color: '#a855f7' },
//   ];

//   const locationData = [
//     { city: 'New York', value: '72K' },
//     { city: 'San Francisco', value: '39K' },
//     { city: 'Sydney', value: '25K' },
//     { city: 'Singapore', value: '61K' },
//   ];

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Page Title */}
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900">eCommerce</h1>
//       </div>

//       {/* First Row - 4 Metric Cards Container + Projections vs Actuals Chart */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//         {/* Left Side - 4 Metric Cards in One Container */}
//         <div className="bg-white border border-gray-200 rounded-lg p-6">
//           <div className="grid grid-cols-2 gap-6">
//             {/* Customers Card */}
//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer group">
//               <p className="text-sm font-medium text-blue-600 mb-2">
//                 Customers
//               </p>
//               <div className="flex items-center justify-between">
//                 <div className="group-hover:order-2 transition-all duration-200">
//                   <span className="text-2xl font-bold text-gray-900">3,781</span>
//                 </div>
//                 <div className="flex items-center group-hover:order-1 transition-all duration-200">
//                   <span className="text-sm font-medium text-green-500 mr-1">+11.01%</span>
//                   <TrendingUp className="w-4 h-4 text-green-500" />
//                 </div>
//               </div>
//             </div>

//             {/* Orders Card */}
//             <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer group">
//               <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600 mb-2">
//                 Orders
//               </p>
//               <div className="flex items-center justify-between">
//                 <div className="group-hover:order-2 transition-all duration-200">
//                   <span className="text-2xl font-bold text-gray-900">1,219</span>
//                 </div>
//                 <div className="flex items-center group-hover:order-1 transition-all duration-200">
//                   <span className="text-sm font-medium text-red-500 mr-1">-0.03%</span>
//                   <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
//                 </div>
//               </div>
//             </div>

//             {/* Revenue Card */}
//             <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer group">
//               <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600 mb-2">
//                 Revenue
//               </p>
//               <div className="flex items-center justify-between">
//                 <div className="group-hover:order-2 transition-all duration-200">
//                   <span className="text-2xl font-bold text-gray-900">$695</span>
//                 </div>
//                 <div className="flex items-center group-hover:order-1 transition-all duration-200">
//                   <span className="text-sm font-medium text-green-500 mr-1">+15.03%</span>
//                   <TrendingUp className="w-4 h-4 text-green-500" />
//                 </div>
//               </div>
//             </div>

//             {/* Growth Card */}
//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer group">
//               <p className="text-sm font-medium text-blue-600 mb-2">
//                 Growth
//               </p>
//               <div className="flex items-center justify-between">
//                 <div className="group-hover:order-2 transition-all duration-200">
//                   <span className="text-2xl font-bold text-gray-900">30.1%</span>
//                 </div>
//                 <div className="flex items-center group-hover:order-1 transition-all duration-200">
//                   <span className="text-sm font-medium text-green-500 mr-1">+6.08%</span>
//                   <TrendingUp className="w-4 h-4 text-green-500" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Projections vs Actuals Chart */}
//         {/* <div className="bg-white border border-gray-200 rounded-lg p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-lg font-semibold text-gray-900">Projections vs Actuals</h3>
//             <div className="text-sm text-gray-500">30M</div>
//           </div>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={projectionsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                 <XAxis 
//                   dataKey="name" 
//                   axisLine={false} 
//                   tickLine={false}
//                   tick={{ fontSize: 12, fill: '#6b7280' }}
//                 />
//                 <YAxis 
//                   axisLine={false} 
//                   tickLine={false}
//                   tick={{ fontSize: 12, fill: '#6b7280' }}
//                   domain={[0, 30]}
//                   ticks={[0, 10, 20, 30]}
//                   tickFormatter={(value) => `${value}M`}
//                 />
//                 <Bar dataKey="actuals" fill="#93c5fd" radius={[2, 2, 0, 0]} />
//                 <Bar dataKey="projections" fill="#1e40af" radius={[2, 2, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div> */}


//       {/* Right Side - Projections vs Actuals Chart */}
//         <div className="bg-white border border-gray-200 rounded-lg p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-lg font-semibold text-gray-900">Projections vs Actuals</h3>
//             <div className="text-sm text-gray-500">30M</div>
//           </div>
//           <div className="h-64 flex items-center justify-center">
//             <img src="graph.svg" alt="Projections vs Actuals Chart" className="w-full h-full object-contain" />
//           </div>
//         </div>
//       </div>

//       {/* Second Row - Revenue Chart and Revenue by Location */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//         {/* Revenue Line Chart */}
//         <div className="bg-white border border-gray-200 rounded-lg p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
//             <div className="flex items-center space-x-4 text-sm">
//               <div className="flex items-center">
//                 <div className="w-3 h-3 rounded-full bg-gray-800 mr-2"></div>
//                 <span className="text-gray-600">Current Week</span>
//                 <span className="font-semibold text-gray-900 ml-1">$58,211</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
//                 <span className="text-gray-600">Previous Week</span>
//                 <span className="font-semibold text-gray-900 ml-1">$68,768</span>
//               </div>
//             </div>
//           </div>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                 <XAxis 
//                   dataKey="name" 
//                   axisLine={false} 
//                   tickLine={false}
//                   tick={{ fontSize: 12, fill: '#6b7280' }}
//                 />
//                 <YAxis 
//                   axisLine={false} 
//                   tickLine={false}
//                   tick={{ fontSize: 12, fill: '#6b7280' }}
//                   domain={[0, 30]}
//                   tickFormatter={(value) => `${value}M`}
//                 />
//                 <Line 
//                   type="monotone" 
//                   dataKey="currentWeek" 
//                   stroke="#1f2937" 
//                   strokeWidth={2}
//                   strokeDasharray="5 5"
//                   dot={false}
//                 />
//                 <Line 
//                   type="monotone" 
//                   dataKey="previousWeek" 
//                   stroke="#93c5fd" 
//                   strokeWidth={2}
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Revenue by Location Map */}
//         <div className="bg-white border border-gray-200 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue by Location</h3>
//           <div className="relative">
//             <div className="w-full h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
//               {/* World Map SVG Background */}
//               {/* <svg viewBox="0 0 400 200" className="w-full h-full opacity-20">
//                 <path d="M50,50 Q100,30 150,50 T250,50 Q300,70 350,50 L350,150 Q300,130 250,150 T150,150 Q100,170 50,150 Z" fill="#cbd5e1" />
//                 <circle cx="80" cy="70" r="3" fill="#1f2937" />
//                 <circle cx="120" cy="90" r="3" fill="#1f2937" />
//                 <circle cx="280" cy="80" r="3" fill="#1f2937" />
//                 <circle cx="320" cy="100" r="3" fill="#1f2937" />
//               </svg> */}
//               <img 
//                  src="Worldmap.svg"
//                   className="w-full h-full"
//                 />
//             </div>
//             <div className="space-y-3">
//               {locationData.map((location, index) => (
//                 <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
//                   <span className="text-sm font-medium text-gray-900">{location.city}</span>
//                   <span className="text-sm font-semibold text-gray-900">{location.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Third Row - Top Selling Products Table and Total Sales Pie Chart */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Top Selling Products Table */}
//         <div className="bg-white border border-gray-200 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Selling Products</h3>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200">
//                   <th className="text-left text-sm font-medium text-gray-500 pb-3">Name</th>
//                   <th className="text-left text-sm font-medium text-gray-500 pb-3">Price</th>
//                   <th className="text-left text-sm font-medium text-gray-500 pb-3">Quantity</th>
//                   <th className="text-left text-sm font-medium text-gray-500 pb-3">Amount</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {topProducts.map((product, index) => (
//                   <tr key={index} className="py-3">
//                     <td className="text-sm font-medium text-gray-900 py-3">{product.name}</td>
//                     <td className="text-sm text-gray-600 py-3">{product.price}</td>
//                     <td className="text-sm text-gray-600 py-3">{product.quantity}</td>
//                     <td className="text-sm font-medium text-gray-900 py-3">{product.amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Total Sales Pie Chart */}
//         {/* <div className="bg-white border border-gray-200 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-6">Total Sales</h3>
//           <div className="flex items-center justify-center mb-6">
//             <div className="relative">
//               <PieChart width={200} height={200}>
//                 <Pie
//                   data={salesData}
//                   cx={100}
//                   cy={100}
//                   innerRadius={60}
//                   outerRadius={80}
//                   paddingAngle={2}
//                   dataKey="percentage"
//                 >
//                   {salesData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//               </PieChart>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-gray-900">38.6%</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="space-y-3">
//             {salesData.map((item, index) => (
//               <div key={index} className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div 
//                     className="w-3 h-3 rounded-full mr-3" 
//                     style={{ backgroundColor: item.color }}
//                   ></div>
//                   <span className="text-sm font-medium text-gray-900">{item.name}</span>
//                 </div>
//                 <span className="text-sm font-semibold text-gray-900">${item.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ECommerceDashboard; */}


// <div className="bg-white border border-gray-200 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-6">Total Sales</h3>
//           <div className="flex items-center justify-center mb-6">
//             <div className="w-full h-48 flex items-center justify-center">
//               <img src="pie.svg" alt="Total Sales Pie Chart" className="w-full h-full object-contain" />
//             </div>
//           </div>
//           <div className="space-y-3">
//             {salesData.map((item, index) => (
//               <div key={index} className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div 
//                     className="w-3 h-3 rounded-full mr-3" 
//                     style={{ backgroundColor: item.color }}
//                   ></div>
//                   <span className="text-sm font-medium text-gray-900">{item.name}</span>
//                 </div>
//                 <span className="text-sm font-semibold text-gray-900">${item.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ECommerceDashboard;



import { TrendingUp } from 'lucide-react';
import { XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useAppSelector } from '../hooks';

const ECommerceDashboard = () => {
  const { mode } = useAppSelector((state) => state.theme);

  const revenueData = [
    { name: 'Jan', currentWeek: 22, previousWeek: 20 },
    { name: 'Feb', currentWeek: 18, previousWeek: 22 },
    { name: 'Mar', currentWeek: 29, previousWeek: 25 },
    { name: 'Apr', currentWeek: 24, previousWeek: 28 },
    { name: 'May', currentWeek: 20, previousWeek: 23 },
    { name: 'Jun', currentWeek: 27, previousWeek: 26 },
  ];

  const topProducts = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  ];

  const salesData = [
    { name: 'Direct', value: 300.56, percentage: 38.6, color: '#1f2937' },
    { name: 'Affiliate', value: 135.18, percentage: 23.0, color: '#06b6d4' },
    { name: 'Sponsored', value: 154.02, percentage: 15.0, color: '#10b981' },
    { name: 'E-mail', value: 48.96, percentage: 23.4, color: '#a855f7' },
  ];

  const locationData = [
    { city: 'New York', value: '72K' },
    { city: 'San Francisco', value: '39K' },
    { city: 'Sydney', value: '25K' },
    { city: 'Singapore', value: '61K' },
  ];

  return (
    <div className={`p-6 min-h-screen ${
      mode === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Page Title */}
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${
          mode === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          eCommerce
        </h1>
      </div>

      {/* First Row - 4 Metric Cards Container + Projections vs Actuals Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Left Side - 4 Metric Cards in One Container */}
        <div className={`border rounded-lg p-6  ${
          mode === 'dark' 
            ? 'bg-gray-900  border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="grid grid-cols-2 gap-6">
            {/* Customers Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer group">
              <p className="text-sm font-medium text-black mb-2">
                Customers
              </p>
              <div className="flex items-center justify-between">
                <div className="group-hover:order-2 transition-all duration-200">
                  <span className="text-2xl font-bold text-gray-900">3,781</span>
                </div>
                <div className="flex items-center group-hover:order-1 transition-all duration-200">
                  <span className="text-sm font-medium text-green-500 mr-1">+11.01%</span>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>

            {/* Orders Card */}
            <div className={`border rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer group ${
              mode === 'dark' 
                ? 'bg-gray-700 border-gray-600' 
                : 'bg-gray-100 border-gray-200'
            }`}>
              <p className={`text-sm font-medium group-hover:text-blue-600 mb-2 ${
                mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Orders
              </p>
              <div className="flex items-center justify-between">
                <div className="group-hover:order-2 transition-all duration-200">
                  <span className={`text-2xl font-bold ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    1,219
                  </span>
                </div>
                <div className="flex items-center group-hover:order-1 transition-all duration-200">
                  <span className="text-sm font-medium text-red-500 mr-1">-0.03%</span>
                  <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
                </div>
              </div>
            </div>

            {/* Revenue Card */}
            <div className={`border rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer group ${
              mode === 'dark' 
                ? 'bg-gray-700 border-gray-600' 
                : 'bg-gray-100 border-gray-200'
            }`}>
              <p className={`text-sm font-medium group-hover:text-blue-600 mb-2 ${
                mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Revenue
              </p>
              <div className="flex items-center justify-between">
                <div className="group-hover:order-2 transition-all duration-200">
                  <span className={`text-2xl font-bold ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    $695
                  </span>
                </div>
                <div className="flex items-center group-hover:order-1 transition-all duration-200">
                  <span className="text-sm font-medium text-green-500 mr-1">+15.03%</span>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>

            {/* Growth Card */}
            <div className={`border rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer group ${
              mode === 'dark' 
                ? 'bg-blue-50 border-blue-200' 
                
                :'bg-blue-900/20 border-gray-700'
            }`}>
              <p className={`text-sm font-medium mb-2 ${
                mode === 'dark' ? 'text-black' : 'text-white'
              }`}>
                Growth
              </p>
              <div className="flex items-center justify-between">
                <div className="group-hover:order-2 transition-all duration-200">
                  <span className={`text-2xl font-bold ${
                    mode === 'dark' ? 'text-black' : 'text-white'
                  }`}>
                    30.1%
                  </span>
                </div>
                <div className="flex items-center group-hover:order-1 transition-all duration-200">
                  <span className="text-sm font-medium text-green-500 mr-1">+6.08%</span>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Projections vs Actuals Chart */}
        <div className={`border rounded-lg p-6 ${
          mode === 'dark' 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-semibold ${
              mode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Projections vs Actuals
            </h3>
            <div className={`text-sm ${
              mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              30M
            </div>
          </div>
          <div className="h-64 relative">
            {/* Y-axis labels */}
            <div className={`absolute left-0 top-0 h-full flex flex-col justify-between text-xs py-2 ${
              mode === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              <span>30M</span>
              <span>20M</span>
              <span>10M</span>
              <span>0</span>
            </div>
            
            {/* Chart container */}
            <div className="ml-8 h-full flex items-end justify-between px-4">
              {/* Jan */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-20 bg-blue-300 rounded-sm flex flex-col justify-end mb-2">
                  <div className="w-full h-6 bg-blue-600 rounded-b-sm"></div>
                </div>
                <span className={`text-xs ${
                  mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Jan
                </span>
              </div>
              
              {/* Feb */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-24 bg-blue-300 rounded-sm flex flex-col justify-end mb-2">
                  <div className="w-full h-4 bg-blue-600 rounded-b-sm"></div>
                </div>
                <span className={`text-xs ${
                  mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Feb
                </span>
              </div>
              
              {/* Mar */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-20 bg-blue-300 rounded-sm flex flex-col justify-end mb-2">
                  <div className="w-full h-8 bg-blue-600 rounded-b-sm"></div>
                </div>
                <span className={`text-xs ${
                  mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Mar
                </span>
              </div>
              
              {/* Apr */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-28 bg-blue-300 rounded-sm flex flex-col justify-end mb-2">
                  <div className="w-full h-12 bg-blue-600 rounded-b-sm"></div>
                </div>
                <span className={`text-xs ${
                  mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Apr
                </span>
              </div>
              
              {/* May */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-16 bg-blue-300 rounded-sm flex flex-col justify-end mb-2">
                  <div className="w-full h-6 bg-blue-600 rounded-b-sm"></div>
                </div>
                <span className={`text-xs ${
                  mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  May
                </span>
              </div>
              
              {/* Jun */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-22 bg-blue-300 rounded-sm flex flex-col justify-end mb-2">
                  <div className="w-full h-8 bg-blue-600 rounded-b-sm"></div>
                </div>
                <span className={`text-xs ${
                  mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Jun
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Revenue Chart and Revenue by Location */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Line Chart */}
        <div className={`border rounded-lg p-6 ${
          mode === 'dark' 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-semibold ${
              mode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Revenue
            </h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${
                  mode === 'dark' ? 'bg-gray-200' : 'bg-gray-800'
                }`}></div>
                <span className={`${
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Current Week
                </span>
                <span className={`font-semibold ml-1 ${
                  mode === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  $58,211
                </span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${
                  mode === 'dark' ? 'bg-gray-500' : 'bg-gray-400'
                }`}></div>
                <span className={`${
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Previous Week
                </span>
                <span className={`font-semibold ml-1 ${
                  mode === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  $68,768
                </span>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  domain={[0, 30]}
                  tickFormatter={(value) => `${value}M`}
                />
                <Line 
                  type="monotone" 
                  dataKey="currentWeek" 
                  stroke="#1f2937" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="previousWeek" 
                  stroke="#93c5fd" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue by Location Map */}
        <div className={`border rounded-lg p-6 ${
          mode === 'dark' 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <h3 className={`text-lg font-semibold mb-6 ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Revenue by Location
          </h3>
          <div className="relative">
            <div className={`w-full h-48 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden ${
              mode === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              {/* World Map SVG Background */}
              {/* <svg viewBox="0 0 400 200" className="w-full h-full opacity-20">
                <path d="M50,50 Q100,30 150,50 T250,50 Q300,70 350,50 L350,150 Q300,130 250,150 T150,150 Q100,170 50,150 Z" fill="#cbd5e1" />
                <circle cx="80" cy="70" r="3" fill="#1f2937" />
                <circle cx="120" cy="90" r="3" fill="#1f2937" />
                <circle cx="280" cy="80" r="3" fill="#1f2937" />
                <circle cx="320" cy="100" r="3" fill="#1f2937" />
              </svg> */}

              <img 
                 src="Worldmap.svg"
                   className="w-full h-full"
                 />
            </div>
            <div className="space-y-3">
              {locationData.map((location, index) => (
                <div key={index} className={`flex items-center justify-between py-2 border-b last:border-b-0 ${
                  mode === 'dark' ? 'border-gray-600' : 'border-gray-100'
                }`}>
                  <span className={`text-sm font-medium ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {location.city}
                  </span>
                  <span className={`text-sm font-semibold ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {location.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Third Row - Top Selling Products Table and Total Sales Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Selling Products Table */}
        <div className={`border rounded-lg p-6 ${
          mode === 'dark' 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <h3 className={`text-lg font-semibold mb-6 ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Top Selling Products
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${
                  mode === 'dark' ? 'border-gray-600' : 'border-gray-200'
                }`}>
                  <th className={`text-left text-sm font-medium pb-3 ${
                    mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Name
                  </th>
                  <th className={`text-left text-sm font-medium pb-3 ${
                    mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Price
                  </th>
                  <th className={`text-left text-sm font-medium pb-3 ${
                    mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Quantity
                  </th>
                  <th className={`text-left text-sm font-medium pb-3 ${
                    mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y ${
                mode === 'dark' ? 'divide-gray-600' : 'divide-gray-100'
              }`}>
                {topProducts.map((product, index) => (
                  <tr key={index} className="py-3">
                    <td className={`text-sm font-medium py-3 ${
                      mode === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {product.name}
                    </td>
                    <td className={`text-sm py-3 ${
                      mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {product.price}
                    </td>
                    <td className={`text-sm py-3 ${
                      mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {product.quantity}
                    </td>
                    <td className={`text-sm font-medium py-3 ${
                      mode === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {product.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total Sales Pie Chart */}
        <div className={`border rounded-lg p-6 ${
          mode === 'dark' 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <h3 className={`text-lg font-semibold mb-6 ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Total Sales
          </h3>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <PieChart width={200} height={200}>
                <Pie
                  data={salesData}
                  cx={100}
                  cy={100}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="percentage"
                >
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    38.6%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {salesData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className={`text-sm font-medium ${
                    mode === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.name}
                  </span>
                </div>
                <span className={`text-sm font-semibold ${
                  mode === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  ${item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceDashboard;
