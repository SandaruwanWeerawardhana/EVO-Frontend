# EVO-Frontend - Event Planning Platform

## 🎉 Project Overview

EVO-Frontend is a comprehensive event planning web application built with Angular 19. The platform connects customers who want to plan events with suppliers who provide event-related services, creating a seamless ecosystem for event management.

## 🌟 Key Features

### For Customers
- **Event Planning**: Plan various types of events including weddings, birthdays, anniversaries, and get-togethers
- **Supplier Discovery**: Browse and connect with various service providers
- **Service Selection**: Choose from multiple categories like venues, catering, photography, beauty services, and entertainment
- **Budget Management**: Track and manage event budgets
- **Event Timeline**: Create and manage event agendas with timeline visualization
- **Real-time Communication**: Messaging system for customer-supplier interaction
- **Reviews & Ratings**: Rate and review suppliers based on services
- **Payment Integration**: Secure payment processing for services

### For Suppliers
- **Business Dashboard**: Comprehensive dashboard for managing business operations
- **Service Management**: Add and manage services, packages, and inventory
- **Booking Management**: Handle customer bookings and requests
- **Profile Management**: Maintain business profiles with portfolios
- **Analytics & Reports**: Track business performance and generate reports
- **Blog System**: Share content and engage with customers
- **Payment Tracking**: Monitor payments and transaction history

### For Administrators
- **User Management**: Manage customers and suppliers
- **Platform Analytics**: Monitor platform usage and performance
- **Content Moderation**: Review and moderate user-generated content
- **Transaction Monitoring**: Oversee all platform transactions

## 🛠️ Technology Stack

### Frontend Framework
- **Angular 19.2.0** - Latest Angular framework with standalone components
- **TypeScript 5.7.2** - Type-safe JavaScript superset
- **RxJS 7.8.0** - Reactive programming with observables

### UI/UX Libraries
- **Bootstrap 5.3.3** - Responsive CSS framework
- **Bootstrap Icons 1.11.3** - Icon library
- **FontAwesome 6.7.2** - Additional icons and styling
- **AOS 2.3.4** - Animate On Scroll library
- **SweetAlert2 11.17.2** - Beautiful alert dialogs

### Data Visualization
- **Chart.js 4.4.8** - Interactive charts and graphs
- **NGX Timeline 19.0.2** - Timeline components for event planning

### Backend Integration
- **Supabase 2.49.1** - Backend-as-a-Service for authentication and database
- **STOMP.js 2.3.3** - WebSocket communication for real-time features

### Additional Libraries
- **jQuery 3.7.1** - DOM manipulation and utilities
- **UUID 11.1.0** - Unique identifier generation
- **Popper.js** - Tooltip and popover positioning

## 📁 Project Structure

```
src/
├── app/
│   ├── common/          # Shared components (blog, footer, navbar)
│   ├── model/           # Data models and interfaces
│   ├── page/            # Application pages
│   │   ├── customer/    # Customer-specific pages
│   │   ├── supplier/    # Supplier-specific pages
│   │   ├── event/       # Event management pages
│   │   └── user/        # Authentication pages
│   └── environment/     # Environment configurations
├── service/             # API services
│   ├── event-services/  # Event-related services
│   ├── supplier-services/ # Supplier management services
│   └── user-services/   # User authentication and management
└── utils/               # Utility enums and types
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Angular CLI** (v19.2.0)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SandaruwanWeerawardhana/EVO-Frontend.git
cd EVO-Frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
   - Configure environment variables in `src/environment/environment.ts`
   - Set up Supabase connection parameters
   - Configure API endpoints

4. **Start the development server**
```bash
npm start
# or
ng serve
```

5. **Open your browser**
   Navigate to `http://localhost:4200`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run watch` | Build in watch mode for development |
| `npm test` | Run unit tests |
| `ng serve` | Serve the application locally |

## 🏗️ Key Components

### Authentication System
- **Login/Signup**: Secure user authentication with role-based access
- **User Roles**: Customer, Supplier, and Admin roles with different permissions
- **Password Management**: Secure password handling and reset functionality

### Event Management
- **Event Types**: Support for weddings, birthdays, anniversaries, and get-togethers
- **Service Categories**: Venue, catering, photography, beauty, entertainment
- **Budget Tracking**: Comprehensive budget management tools
- **Timeline Management**: Visual timeline for event planning

### Supplier Platform
- **Profile Management**: Detailed supplier profiles with portfolios
- **Service Listings**: Add and manage services and packages
- **Booking System**: Handle customer requests and bookings
- **Analytics Dashboard**: Business performance insights

### Communication Features
- **Real-time Messaging**: Customer-supplier communication
- **Notifications**: System notifications for important updates
- **Review System**: Customer feedback and rating system

## 🔧 Configuration

### Environment Configuration
```typescript
export const environment = {
  production: false,
  baseUrl: 'your-api-base-url',
  supabaseUrl: 'your-supabase-url',
  supabaseKey: 'your-supabase-key'
};
```

### Angular Configuration
- **Routing**: Comprehensive routing with lazy loading
- **Guards**: Route protection for authenticated areas
- **Interceptors**: HTTP interceptors for API communication

## 🧪 Testing

The project uses Jasmine and Karma for unit testing:

```bash
# Run tests
npm test

# Run tests in watch mode
ng test --watch

# Generate code coverage
ng test --coverage
```

## 🏆 Features in Detail

### Customer Features
- **Event Dashboard**: Overview of planned and ongoing events
- **Supplier Search**: Advanced search and filtering for suppliers
- **Service Comparison**: Compare services and packages
- **Budget Calculator**: Estimate and track event costs
- **Payment Gateway**: Secure online payments
- **Event Timeline**: Visual event planning with drag-and-drop

### Supplier Features
- **Business Dashboard**: Comprehensive business management
- **Inventory Management**: Track services and availability
- **Customer Requests**: Manage incoming booking requests
- **Portfolio Management**: Showcase previous work
- **Financial Reports**: Track earnings and expenses
- **Blog Platform**: Content marketing capabilities

### Admin Features
- **User Management**: Monitor and manage all users
- **Content Moderation**: Review user-generated content
- **Platform Analytics**: Comprehensive platform insights
- **Transaction Monitoring**: Oversee all financial transactions
- **Support System**: Customer and supplier support tools

## 🔐 Security Features

- **Authentication**: Secure login with JWT tokens
- **Authorization**: Role-based access control
- **Data Validation**: Client and server-side validation
- **Secure Communication**: HTTPS for all API calls
- **Payment Security**: PCI-compliant payment processing

## 🌐 API Integration

The application integrates with various services:
- **Supabase**: Database and authentication
- **Payment Gateways**: Secure payment processing
- **Cloud Storage**: Image and document storage
- **Email Services**: Notification and communication
- **SMS Services**: Mobile notifications

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Bootstrap Grid**: Responsive layout system
- **Touch-Friendly**: Optimized for touch interactions
- **Progressive Web App**: PWA capabilities for enhanced mobile experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Development Team

- **Frontend Development**: Angular specialists
- **UI/UX Design**: User experience designers
- **Backend Integration**: API and database experts
- **Quality Assurance**: Testing and validation team

## 📞 Support

For support and inquiries:
- **Email**: support@evoplan.com
- **Documentation**: [Project Wiki](https://github.com/SandaruwanWeerawardhana/EVO-Frontend/wiki)
- **Issues**: [GitHub Issues](https://github.com/SandaruwanWeerawardhana/EVO-Frontend/issues)

## 🚧 Roadmap

### Upcoming Features
- **Mobile Application**: Native mobile app development
- **AI Recommendations**: Smart supplier suggestions
- **Advanced Analytics**: Enhanced reporting features
- **Multi-language Support**: Internationalization
- **Video Conferencing**: Built-in video calls for consultations
- **Social Integration**: Social media sharing and login

### Current Development Status
- ✅ Core platform functionality
- ✅ User authentication and authorization
- ✅ Event planning features
- ✅ Supplier management system
- 🚧 Payment integration
- 🚧 Advanced analytics
- 📋 Mobile optimization

---

## 🙏 Acknowledgments

- **Angular Team** for the amazing framework
- **Bootstrap Team** for the responsive CSS framework
- **Supabase** for backend-as-a-service platform
- **Open Source Community** for various libraries and tools

---

**Built with ❤️ by the EVO-Frontend Development Team**
