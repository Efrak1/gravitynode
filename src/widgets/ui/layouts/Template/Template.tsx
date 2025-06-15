'use client';

import { AnimatePresence, motion } from 'framer-motion';

export default function Template({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <AnimatePresence mode="wait">
            <motion.main
                className={className}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                {children}
            </motion.main>
        </AnimatePresence>
    );
}