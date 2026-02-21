import { Header } from '@/components/Header';
import { HeroSection } from '@/sections/HeroSection';
import { KPISection } from '@/sections/KPISection';
import { ChartsSection } from '@/sections/ChartsSection';
import { StatusSection } from '@/sections/StatusSection';
import { TableSection } from '@/sections/TableSection';
import { InventorySection } from '@/sections/InventorySection';
import { ReactorSection } from '@/sections/ReactorSection';
import { productionData } from '@/data/production-data';
import { processProductionData } from '@/lib/dataProcessor';
import './App.css';

function App() {
  const { summary, company, lastUpdated } = productionData;
  const {
    kpiData,
    chartData,
    inventoryData,
    reactorData,
    recentProduction,
  } = processProductionData(productionData);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header companyName={company} />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Hero Section */}
          <HeroSection lastUpdated={lastUpdated} />

          {/* KPI Cards */}
          <KPISection data={kpiData} />

          {/* Charts */}
          <ChartsSection data={chartData} />

          {/* Production Status */}
          <StatusSection summary={summary} />

          {/* Production Table */}
          <TableSection data={recentProduction} />

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Inventory */}
            <InventorySection data={inventoryData} />

            {/* Reactor Status */}
            <ReactorSection data={reactorData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2026 {company}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
                Support
              </a>
            </div>
            <p className="text-sm text-slate-400">v1.0.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
