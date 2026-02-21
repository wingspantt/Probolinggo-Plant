import { motion } from 'framer-motion';
import { Calendar, Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  lastUpdated: string;
}

export function HeroSection({ lastUpdated }: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E3A5F] via-[#254670] to-[#2A4A73] text-white p-6 sm:p-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold mb-2"
            >
              Production Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-100 text-sm sm:text-base max-w-xl"
            >
              Real-time monitoring of briquette, biochar, and sawdust production. 
              Track efficiency, inventory, and reactor status.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 text-sm text-blue-100 bg-white/10 px-3 py-2 rounded-lg">
              <Calendar className="w-4 h-4" />
              <span>Updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 mt-6"
        >
          <Button
            variant="secondary"
            size="sm"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
