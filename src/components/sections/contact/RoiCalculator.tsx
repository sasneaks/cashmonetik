'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, AlertCircle } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

const inputClasses =
  'w-full bg-bg-elevated border border-border rounded-sm px-4 py-3 text-text text-sm placeholder:text-text-tertiary focus:border-primary focus:outline-none transition-colors duration-200';

const labelClasses =
  'block text-xs font-display font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-2';

interface InputConfig {
  id: string;
  label: string;
  defaultValue: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
}

const inputs: InputConfig[] = [
  {
    id: 'transactions',
    label: 'Transactions / jour',
    defaultValue: 150,
    min: 10,
    max: 1000,
    step: 10,
    suffix: 'transactions',
  },
  {
    id: 'basket',
    label: 'Panier moyen',
    defaultValue: 12,
    min: 1,
    max: 200,
    step: 1,
    suffix: '\u20AC',
  },
  {
    id: 'errors',
    label: 'Erreurs caisse / semaine',
    defaultValue: 5,
    min: 0,
    max: 50,
    step: 1,
    suffix: 'erreurs',
  },
  {
    id: 'time',
    label: 'Temps comptage (min/jour)',
    defaultValue: 45,
    min: 5,
    max: 120,
    step: 5,
    suffix: 'min',
  },
  {
    id: 'cost',
    label: "Co\u00FBt horaire employ\u00E9",
    defaultValue: 14,
    min: 8,
    max: 50,
    step: 1,
    suffix: '\u20AC/h',
  },
];

export function RoiCalculator() {
  const [values, setValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    inputs.forEach((input) => {
      initial[input.id] = input.defaultValue;
    });
    return initial;
  });

  const [results, setResults] = useState({
    errorSave: 0,
    timeSave: 0,
    basketInc: 0,
    total: 0,
    payback: 0,
  });

  useEffect(() => {
    const { transactions, basket, errors, time, cost } = values;

    const errorSave = errors * 5 * 4.3;
    const timeSave = (time / 60) * cost * 30;
    const basketInc = transactions * basket * 0.15 * 30 * 0.02;
    const total = errorSave + timeSave + basketInc;
    const payback = total > 0 ? Math.ceil(3500 / total) : 0;

    setResults({ errorSave, timeSave, basketInc, total, payback });
  }, [values]);

  const handleChange = (id: string, value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setValues((prev) => ({ ...prev, [id]: num }));
    }
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="py-16 max-md:py-10 bg-gradient-to-b from-transparent via-[rgba(59,130,246,0.03)] to-transparent">
      <Container>
        <SectionHeader
          tag="Calculateur ROI"
          title={
            <>
              Calculez vos{' '}
              <span className="text-gradient">\u00E9conomies</span>
            </>
          }
          subtitle="Estimez les \u00E9conomies mensuelles que vous r\u00E9aliserez avec nos solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Inputs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {inputs.map((input, i) => (
              <motion.div key={input.id} variants={fadeUp} custom={i * 0.08}>
                <label htmlFor={input.id} className={labelClasses}>
                  {input.label}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id={input.id}
                    value={values[input.id]}
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    onChange={(e) => handleChange(input.id, e.target.value)}
                    className={inputClasses}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-text-tertiary pointer-events-none">
                    {input.suffix}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Results */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            custom={0.3}
          >
            <div className="bg-bg-card backdrop-blur-xl border border-border rounded-lg p-8 max-md:p-6 sticky top-32">
              {/* Main result */}
              <div className="text-center mb-8 pb-8 border-b border-border">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Calculator className="w-5 h-5 text-primary" />
                  <span className="text-xs font-display font-semibold uppercase tracking-[0.1em] text-text-tertiary">
                    \u00C9conomies mensuelles estim\u00E9es
                  </span>
                </div>
                <div className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] text-primary leading-none">
                  {formatCurrency(results.total)}
                </div>
                <span className="text-sm text-text-secondary mt-2 block">
                  par mois
                </span>
              </div>

              {/* Breakdown */}
              <div className="space-y-4 mb-8">
                <ResultRow
                  icon={AlertCircle}
                  label="Erreurs \u00E9limin\u00E9es"
                  value={formatCurrency(results.errorSave)}
                />
                <ResultRow
                  icon={Clock}
                  label="Temps gagn\u00E9"
                  value={formatCurrency(results.timeSave)}
                />
                <ResultRow
                  icon={TrendingUp}
                  label="Panier moyen augment\u00E9"
                  value={formatCurrency(results.basketInc)}
                />
              </div>

              {/* Total + payback */}
              <div className="bg-bg-elevated rounded-sm p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-display font-semibold text-text">
                    \u00C9conomies annuelles
                  </span>
                  <span className="text-sm font-display font-bold text-primary">
                    {formatCurrency(results.total * 12)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-display font-semibold text-text">
                    Retour sur investissement
                  </span>
                  <span className="text-sm font-display font-bold text-primary">
                    {results.payback} mois
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                fullWidth
                arrow
              >
                Demander un devis
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ResultRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-sm bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.15)] flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm text-text-secondary">{label}</span>
      </div>
      <span className="text-sm font-display font-semibold text-text">
        {value}
      </span>
    </div>
  );
}
