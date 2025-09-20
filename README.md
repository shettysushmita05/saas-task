# SaaS Dashboard

A modern, responsive React dashboard built with TypeScript, Material-UI, and Framer Motion. This project implements a pixel-perfect SaaS dashboard with advanced features including filtering, searching, sorting, pagination, and theme switching.

## 🚀 Features

- **Modern UI/UX**: Built with Material-UI components and custom styling
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between light and dark themes with smooth transitions
- **Advanced Animations**: Smooth micro-interactions powered by Framer Motion
- **Data Management**: Complete CRUD operations with filtering, searching, and sorting
- **Charts & Analytics**: Interactive charts using Recharts library
- **State Management**: Redux Toolkit for efficient state management
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: ARIA roles, keyboard navigation, and focus states

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Material-UI (MUI)** for UI components
- **Framer Motion** for animations
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Recharts** for data visualization
- **Lucide React** for icons
- **Vite** for build tooling

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saas-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Sidebar, Layout)
│   ├── dashboard/      # Dashboard-specific components
│   ├── charts/         # Chart components
│   └── ui/            # Generic UI components
├── pages/              # Page components
├── store/              # Redux store configuration
│   └── slices/        # Redux slices
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── styles/             # Theme and styling
└── utils/              # Utility functions
```

## 🎨 Design Features

### Theme System
- Light and dark theme support
- Custom color palette
- Consistent typography using Inter font
- Smooth theme transitions

### Animations
- Page transitions with Framer Motion
- Hover effects on cards and buttons
- Loading animations
- Micro-interactions for better UX

### Responsive Design
- Mobile-first approach
- Breakpoints: xs (0px), sm (600px), md (900px), lg (1200px), xl (1536px)
- Collapsible sidebar on mobile
- Optimized layouts for all screen sizes

## 📊 Dashboard Features

### Metrics Cards
- Real-time data display
- Trend indicators with percentage changes
- Interactive hover effects
- Color-coded status indicators

### Data Tables
- Sortable columns
- Search functionality
- Status filtering
- Pagination
- Row actions (view, edit, delete)

### Charts
- Line charts for trends
- Pie charts for distributions
- Responsive chart containers
- Custom tooltips
- Interactive legends

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🎯 Key Features Implementation

### State Management
- Redux Toolkit for global state
- Separate slices for theme and dashboard data
- Type-safe selectors and actions

### Performance Optimizations
- Lazy loading of components
- Memoized selectors
- Efficient re-rendering
- Optimized bundle size

### Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Real-time data updates
- [ ] Advanced filtering options
- [ ] Export functionality
- [ ] Custom dashboard widgets
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] API integration

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support, email support@example.com or create an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Material-UI