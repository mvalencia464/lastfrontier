import { useState } from 'react';
import Image from 'next/image';
import {
  Home as HomeIcon, // Renamed Home to HomeIcon to avoid conflict
  Wrench,
  Droplet,
  Zap,
  MapPin,
  ChevronLeft,
  Leaf,
  Trees,
  Snowflake
} from 'lucide-react';

const genericInfo = {
  companyName: "Last Frontier Lawns",
  phone: "907-440-7160",
  cityRegion: "Anchorage & Palmer",
  establishedYear: "2015",
};

// Define a type for the page names
type PageName = 'services' | 'serviceDetail' | 'locations' | 'locationDetail';

// --- HEADER COMPONENT ---
function Header({ onNav }: { onNav: (page: PageName) => void }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative w-40 h-14 flex items-center justify-center">
            <Image src="/christmas-logo.webp" alt="Christmas Lights Logo" fill className="object-contain" priority />
          </div>
        </div>
        <nav className="hidden md:flex space-x-6 font-semibold text-gray-700">
          <button onClick={() => onNav('services')} className="hover:text-blue-700">Services</button>
          <button onClick={() => onNav('locations')} className="hover:text-blue-700">Locations</button>
          <a href="#" className="hover:text-blue-700">Contact</a>
        </nav>
      </div>
    </header>
  );
}

// --- FOOTER COMPONENT ---
function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} {genericInfo.companyName}. All rights reserved.
      </div>
    </footer>
  );
}

// --- SERVICES PAGE ---
function ServicesPage({ onSelectService }: { onSelectService: (id: string) => void }) {
  const services = [
    { id: 'lawn', name: 'Lawn Care', icon: Leaf, description: 'Mowing, fertilization, and weed control.' },
    { id: 'snow', name: 'Snow Removal', icon: Snowflake, description: 'Residential and commercial snow plowing.' },
    { id: 'landscaping', name: 'Landscaping', icon: Trees, description: 'Spring cleanup, installation, and maintenance.' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition" onClick={() => onSelectService(service.id)}>
            <service.icon className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

// --- SERVICE DETAIL PAGE ---
function ServiceDetail({ serviceId, onBack }: { serviceId: string; onBack: () => void }) {
  const serviceDetails: Record<string, {
    name: string;
    description: string;
    features: string[];
  }> = {
    lawn: {
      name: 'Lawn Care',
      description: 'We provide expert lawn mowing, fertilization, and weed control to keep your yard looking its best.',
      features: ['Weekly Mowing', 'Fertilization Programs', 'Weed Control'],
    },
    snow: {
      name: 'Snow Removal',
      description: 'Our team ensures your driveway and walkways are clear of snow and ice during the winter months.',
      features: ['Snow Plowing', 'Sidewalk Clearing', 'Ice Management'],
    },
    landscaping: {
      name: 'Landscaping',
      description: 'From spring cleanups to new installations, we enhance your outdoor living space.',
      features: ['Spring/Fall Cleanup', 'Mulch Installation', 'Planting Services'],
    },
  };

  const service = serviceDetails[serviceId];

  if (!service) return <p className="p-4">Service not found.</p>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={onBack} className="mb-6 flex items-center text-blue-700 hover:underline">
        <ChevronLeft className="w-5 h-5 mr-1" /> Back to Services
      </button>
      <h2 className="text-4xl font-bold mb-4 text-blue-900">{service.name}</h2>
      <p className="mb-6 text-gray-700">{service.description}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        {service.features.map((feat, i) => <li key={i}>{feat}</li>)}
      </ul>
    </main>
  );
}

// --- LOCATIONS PAGE ---
function LocationsPage({ onSelectLocation }: { onSelectLocation: (id: string) => void }) {
  const locations = [
    { id: 'anchorage', name: 'Anchorage', phone: genericInfo.phone, address: 'Anchorage, AK' },
    { id: 'palmer', name: 'Palmer', phone: genericInfo.phone, address: 'Palmer, AK' },
    { id: 'wasilla', name: 'Wasilla', phone: genericInfo.phone, address: 'Wasilla, AK' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Service Areas</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {locations.map(loc => (
          <div key={loc.id} className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition" onClick={() => onSelectLocation(loc.id)}>
            <MapPin className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{loc.name}</h3>
            <p className="text-gray-600">{loc.address}</p>
            <p className="text-gray-600 font-semibold mt-2">Phone: {loc.phone}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

// --- LOCATION DETAIL PAGE ---
function LocationDetail({ locationId, onBack }: { locationId: string; onBack: () => void }) {
  const locationDetails: Record<string, {
    name: string;
    phone: string;
    address: string;
    description: string;
    hours: string;
  }> = {
    anchorage: {
      name: 'Anchorage',
      phone: genericInfo.phone,
      address: 'Anchorage, AK',
      description: 'Serving the Anchorage area with professional lawn and snow services.',
      hours: 'Mon-Fri: 8am-6pm',
    },
    palmer: {
      name: 'Palmer',
      phone: genericInfo.phone,
      address: 'Palmer, AK',
      description: 'Providing top-notch lawn care to Palmer residents.',
      hours: 'Mon-Fri: 8am-6pm',
    },
    wasilla: {
      name: 'Wasilla',
      phone: genericInfo.phone,
      address: 'Wasilla, AK',
      description: 'Your trusted partner for lawn maintenance in Wasilla.',
      hours: 'Mon-Fri: 8am-6pm',
    },
  };

  const location = locationDetails[locationId];

  if (!location) return <p className="p-4">Location not found.</p>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={onBack} className="mb-6 flex items-center text-blue-700 hover:underline">
        <ChevronLeft className="w-5 h-5 mr-1" /> Back to Locations
      </button>
      <h2 className="text-4xl font-bold mb-4 text-blue-900">{location.name}</h2>
      <p className="mb-2 text-gray-700 font-semibold">Address:</p>
      <p className="mb-6 text-gray-600">{location.address}</p>
      <p className="mb-2 text-gray-700 font-semibold">Phone:</p>
      <a href={`tel:${location.phone}`} className="text-blue-700 hover:underline mb-6 block"> {location.phone} </a>
      <p className="mb-6 text-gray-700">{location.description}</p>
      <p className="text-gray-700 font-semibold">Hours:</p>
      <p className="text-gray-600">{location.hours}</p>
    </main>
  );
}

// --- MAIN APP COMPONENT ---
export default function Home() {
  const [page, setPage] = useState<PageName>('services'); // 'services' | 'serviceDetail' | 'locations' | 'locationDetail'
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelectService = (id: string) => {
    setSelectedId(id);
    setPage('serviceDetail');
  };

  const handleSelectLocation = (id: string) => {
    setSelectedId(id);
    setPage('locationDetail');
  };

  const handleBack = () => {
    if (page === 'serviceDetail') setPage('services');
    else if (page === 'locationDetail') setPage('locations');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onNav={setPage} />

      {page === 'services' && <ServicesPage onSelectService={handleSelectService} />}
      {page === 'serviceDetail' && selectedId && <ServiceDetail serviceId={selectedId} onBack={handleBack} />}
      {page === 'locations' && <LocationsPage onSelectLocation={handleSelectLocation} />}
      {page === 'locationDetail' && selectedId && <LocationDetail locationId={selectedId} onBack={handleBack} />}

      <Footer />
    </div>
  );
}