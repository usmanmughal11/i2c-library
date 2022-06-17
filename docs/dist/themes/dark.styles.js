import { css } from "lit";

export default css`
  :host,
  .i2c-theme-dark {
    color-scheme: dark;

    --i2c-color-gray-50: hsl(240 5.1% 15%);
    --i2c-color-gray-100: hsl(240 5.7% 18.2%);
    --i2c-color-gray-200: hsl(240 4.6% 22%);
    --i2c-color-gray-300: hsl(240 5% 27.6%);
    --i2c-color-gray-400: hsl(240 5% 35.5%);
    --i2c-color-gray-500: hsl(240 3.7% 44%);
    --i2c-color-gray-600: hsl(240 5.3% 58%);
    --i2c-color-gray-700: hsl(240 5.6% 73%);
    --i2c-color-gray-800: hsl(240 7.3% 84%);
    --i2c-color-gray-900: hsl(240 9.1% 91.8%);
    --i2c-color-gray-950: hsl(0 0% 95%);

    --i2c-color-red-50: hsl(0 56% 23.9%);
    --i2c-color-red-100: hsl(0.6 60% 33.9%);
    --i2c-color-red-200: hsl(0.9 67.2% 37.1%);
    --i2c-color-red-300: hsl(1.1 71.3% 43.7%);
    --i2c-color-red-400: hsl(1 76% 52.5%);
    --i2c-color-red-500: hsl(0.7 89.6% 57.2%);
    --i2c-color-red-600: hsl(0 98.6% 67.9%);
    --i2c-color-red-700: hsl(0 100% 72.3%);
    --i2c-color-red-800: hsl(0 100% 85.6%);
    --i2c-color-red-900: hsl(0 100% 90.3%);
    --i2c-color-red-950: hsl(0 100% 95.9%);

    --i2c-color-orange-50: hsl(15 64.2% 23.3%);
    --i2c-color-orange-100: hsl(15.1 70.9% 31.1%);
    --i2c-color-orange-200: hsl(15.3 75.7% 35.5%);
    --i2c-color-orange-300: hsl(17.1 83.5% 42.7%);
    --i2c-color-orange-400: hsl(20.1 88% 50.8%);
    --i2c-color-orange-500: hsl(24.3 100% 50.5%);
    --i2c-color-orange-600: hsl(27.2 100% 57.7%);
    --i2c-color-orange-700: hsl(31.3 100% 68.7%);
    --i2c-color-orange-800: hsl(33.8 100% 79.3%);
    --i2c-color-orange-900: hsl(38.9 100% 87.7%);
    --i2c-color-orange-950: hsl(46.2 100% 95%);

    --i2c-color-amber-50: hsl(21.9 66.3% 21.1%);
    --i2c-color-amber-100: hsl(21.5 73.6% 29.7%);
    --i2c-color-amber-200: hsl(22.3 77.6% 33.3%);
    --i2c-color-amber-300: hsl(25.4 84.2% 39.6%);
    --i2c-color-amber-400: hsl(31.4 87.4% 46.7%);
    --i2c-color-amber-500: hsl(37 96.6% 48.3%);
    --i2c-color-amber-600: hsl(43.3 100% 53.4%);
    --i2c-color-amber-700: hsl(46.5 100% 61.1%);
    --i2c-color-amber-800: hsl(49.3 100% 73%);
    --i2c-color-amber-900: hsl(51.8 100% 85%);
    --i2c-color-amber-950: hsl(60 100% 94.6%);

    --i2c-color-yellow-50: hsl(32.5 60% 18.2%);
    --i2c-color-yellow-100: hsl(28.1 68.6% 29%);
    --i2c-color-yellow-200: hsl(31.3 75.8% 30.8%);
    --i2c-color-yellow-300: hsl(34.7 84.4% 35.3%);
    --i2c-color-yellow-400: hsl(40.1 87.3% 43.3%);
    --i2c-color-yellow-500: hsl(44.7 88% 46%);
    --i2c-color-yellow-600: hsl(47.7 100% 50.9%);
    --i2c-color-yellow-700: hsl(51.3 100% 59.9%);
    --i2c-color-yellow-800: hsl(54.6 100% 73%);
    --i2c-color-yellow-900: hsl(58.9 100% 84.2%);
    --i2c-color-yellow-950: hsl(60 100% 94%);

    --i2c-color-lime-50: hsl(86.5 54.4% 18%);
    --i2c-color-lime-100: hsl(87.6 56.8% 23.3%);
    --i2c-color-lime-200: hsl(85.8 63.2% 24.5%);
    --i2c-color-lime-300: hsl(86.1 72% 29.4%);
    --i2c-color-lime-400: hsl(85.5 76.8% 37.3%);
    --i2c-color-lime-500: hsl(84.3 74.2% 42.1%);
    --i2c-color-lime-600: hsl(82.8 81.5% 52.6%);
    --i2c-color-lime-700: hsl(82 89.9% 64%);
    --i2c-color-lime-800: hsl(80.9 97.9% 76.6%);
    --i2c-color-lime-900: hsl(77.9 100% 85.8%);
    --i2c-color-lime-950: hsl(69.5 100% 93.8%);

    --i2c-color-green-50: hsl(144.3 53.6% 16%);
    --i2c-color-green-100: hsl(143.2 55.4% 23.5%);
    --i2c-color-green-200: hsl(141.5 58.2% 26.3%);
    --i2c-color-green-300: hsl(140.8 64.2% 31.8%);
    --i2c-color-green-400: hsl(140.3 68% 39.2%);
    --i2c-color-green-500: hsl(141.1 64.9% 43%);
    --i2c-color-green-600: hsl(141.6 72.4% 55.2%);
    --i2c-color-green-700: hsl(141.7 82.7% 70.1%);
    --i2c-color-green-800: hsl(141 90.9% 82.1%);
    --i2c-color-green-900: hsl(142 100% 89.1%);
    --i2c-color-green-950: hsl(144 100% 95.5%);

    --i2c-color-emerald-50: hsl(164.3 75% 13.5%);
    --i2c-color-emerald-100: hsl(163.5 72.6% 20.1%);
    --i2c-color-emerald-200: hsl(162.1 73.7% 22.4%);
    --i2c-color-emerald-300: hsl(161.3 77.3% 27.6%);
    --i2c-color-emerald-400: hsl(159.6 77.1% 34.3%);
    --i2c-color-emerald-500: hsl(159.1 73.5% 37.9%);
    --i2c-color-emerald-600: hsl(157.8 66.8% 48.9%);
    --i2c-color-emerald-700: hsl(156.2 76.1% 63.8%);
    --i2c-color-emerald-800: hsl(152.4 84.4% 77.4%);
    --i2c-color-emerald-900: hsl(149.3 100% 87%);
    --i2c-color-emerald-950: hsl(158.6 100% 94.8%);

    --i2c-color-teal-50: hsl(176.5 51.5% 15.4%);
    --i2c-color-teal-100: hsl(175.9 54.7% 22.3%);
    --i2c-color-teal-200: hsl(175.9 60.7% 23.9%);
    --i2c-color-teal-300: hsl(174.5 67.3% 28.8%);
    --i2c-color-teal-400: hsl(174.4 71.9% 34.9%);
    --i2c-color-teal-500: hsl(173.1 71% 38.3%);
    --i2c-color-teal-600: hsl(172.3 68.2% 48.1%);
    --i2c-color-teal-700: hsl(170.5 81.3% 61.5%);
    --i2c-color-teal-800: hsl(168.4 92.1% 75.2%);
    --i2c-color-teal-900: hsl(168.3 100% 86%);
    --i2c-color-teal-950: hsl(180 100% 95.5%);

    --i2c-color-cyan-50: hsl(197.1 53.8% 20.3%);
    --i2c-color-cyan-100: hsl(196.8 57.3% 27.2%);
    --i2c-color-cyan-200: hsl(195.3 62.7% 29.4%);
    --i2c-color-cyan-300: hsl(193.5 71.3% 34.1%);
    --i2c-color-cyan-400: hsl(192.5 76.8% 40.6%);
    --i2c-color-cyan-500: hsl(189.4 78.6% 42.6%);
    --i2c-color-cyan-600: hsl(188.2 89.1% 51.7%);
    --i2c-color-cyan-700: hsl(187 98.6% 66.2%);
    --i2c-color-cyan-800: hsl(184.9 100% 78.3%);
    --i2c-color-cyan-900: hsl(180 100% 86.6%);
    --i2c-color-cyan-950: hsl(180 100% 94.8%);

    --i2c-color-sky-50: hsl(203 63.8% 20.9%);
    --i2c-color-sky-100: hsl(203.4 70.4% 28%);
    --i2c-color-sky-200: hsl(202.7 75.8% 30.8%);
    --i2c-color-sky-300: hsl(203.1 80.4% 36.1%);
    --i2c-color-sky-400: hsl(202.1 80.5% 44.3%);
    --i2c-color-sky-500: hsl(199.7 85.9% 47.7%);
    --i2c-color-sky-600: hsl(198.7 97.9% 57.2%);
    --i2c-color-sky-700: hsl(198.7 100% 70.5%);
    --i2c-color-sky-800: hsl(198.8 100% 82.5%);
    --i2c-color-sky-900: hsl(198.5 100% 89.9%);
    --i2c-color-sky-950: hsl(186 100% 95.5%);

    --i2c-color-blue-50: hsl(227.1 49.5% 22.7%);
    --i2c-color-blue-100: hsl(225.8 58.9% 36.8%);
    --i2c-color-blue-200: hsl(227.7 64.4% 42.9%);
    --i2c-color-blue-300: hsl(226.1 72.7% 51.2%);
    --i2c-color-blue-400: hsl(222.6 86.5% 56.3%);
    --i2c-color-blue-500: hsl(217.8 95.8% 57.4%);
    --i2c-color-blue-600: hsl(213.3 100% 65%);
    --i2c-color-blue-700: hsl(210.9 100% 74.8%);
    --i2c-color-blue-800: hsl(211.5 100% 83.4%);
    --i2c-color-blue-900: hsl(211 100% 88.9%);
    --i2c-color-blue-950: hsl(201.8 100% 95.3%);

    --i2c-color-indigo-50: hsl(243.5 40.8% 27%);
    --i2c-color-indigo-100: hsl(242.9 45.7% 37.6%);
    --i2c-color-indigo-200: hsl(244.7 52.7% 43.1%);
    --i2c-color-indigo-300: hsl(245.3 60.5% 52.4%);
    --i2c-color-indigo-400: hsl(244.1 79.2% 60.4%);
    --i2c-color-indigo-500: hsl(239.6 88.7% 63.8%);
    --i2c-color-indigo-600: hsl(234.5 96.7% 70.9%);
    --i2c-color-indigo-700: hsl(229.4 100% 78.3%);
    --i2c-color-indigo-800: hsl(227.1 100% 85%);
    --i2c-color-indigo-900: hsl(223.8 100% 89.9%);
    --i2c-color-indigo-950: hsl(220 100% 95.1%);

    --i2c-color-violet-50: hsl(265.1 57.3% 25.4%);
    --i2c-color-violet-100: hsl(263.5 63.8% 39.4%);
    --i2c-color-violet-200: hsl(263.4 66.2% 44.1%);
    --i2c-color-violet-300: hsl(263.7 72.8% 52.4%);
    --i2c-color-violet-400: hsl(262.5 87.3% 59.8%);
    --i2c-color-violet-500: hsl(258.3 95.1% 63.2%);
    --i2c-color-violet-600: hsl(255.1 100% 67.2%);
    --i2c-color-violet-700: hsl(253 100% 81.5%);
    --i2c-color-violet-800: hsl(251.7 100% 87.9%);
    --i2c-color-violet-900: hsl(254.1 100% 91.7%);
    --i2c-color-violet-950: hsl(257.1 100% 96.1%);

    --i2c-color-purple-50: hsl(276 54.3% 20.5%);
    --i2c-color-purple-100: hsl(273.6 61.8% 35.4%);
    --i2c-color-purple-200: hsl(272.9 64% 41.4%);
    --i2c-color-purple-300: hsl(271.9 68.1% 49.2%);
    --i2c-color-purple-400: hsl(271.5 85.1% 57.8%);
    --i2c-color-purple-500: hsl(270.7 96.4% 62.1%);
    --i2c-color-purple-600: hsl(270.5 100% 71.9%);
    --i2c-color-purple-700: hsl(270.9 100% 81.3%);
    --i2c-color-purple-800: hsl(272.4 100% 87.7%);
    --i2c-color-purple-900: hsl(276.7 100% 91.5%);
    --i2c-color-purple-950: hsl(300 100% 96.5%);

    --i2c-color-fuchsia-50: hsl(297.1 51.2% 18.6%);
    --i2c-color-fuchsia-100: hsl(296.7 59.5% 31.5%);
    --i2c-color-fuchsia-200: hsl(295.4 65.4% 35.1%);
    --i2c-color-fuchsia-300: hsl(294.6 67.4% 42.2%);
    --i2c-color-fuchsia-400: hsl(293.3 68.7% 51.2%);
    --i2c-color-fuchsia-500: hsl(292.1 88.4% 57.7%);
    --i2c-color-fuchsia-600: hsl(292 98.5% 59.5%);
    --i2c-color-fuchsia-700: hsl(292.4 100% 79.5%);
    --i2c-color-fuchsia-800: hsl(292.9 100% 86.8%);
    --i2c-color-fuchsia-900: hsl(300 100% 91.5%);
    --i2c-color-fuchsia-950: hsl(300 100% 96.3%);

    --i2c-color-pink-50: hsl(336.2 59.6% 20%);
    --i2c-color-pink-100: hsl(336.8 63.9% 34%);
    --i2c-color-pink-200: hsl(336.8 68.7% 37.6%);
    --i2c-color-pink-300: hsl(336.1 71.8% 44.5%);
    --i2c-color-pink-400: hsl(333.9 74.9% 53.1%);
    --i2c-color-pink-500: hsl(330.7 86.3% 57.7%);
    --i2c-color-pink-600: hsl(328.6 91.5% 67.2%);
    --i2c-color-pink-700: hsl(327.4 97.6% 78.7%);
    --i2c-color-pink-800: hsl(325.1 100% 86.6%);
    --i2c-color-pink-900: hsl(322.1 100% 91.3%);
    --i2c-color-pink-950: hsl(315 100% 95.9%);

    --i2c-color-rose-50: hsl(342.3 62.9% 21.5%);
    --i2c-color-rose-100: hsl(342.8 68.9% 34.2%);
    --i2c-color-rose-200: hsl(344.8 72.6% 37.3%);
    --i2c-color-rose-300: hsl(346.9 75.8% 43.7%);
    --i2c-color-rose-400: hsl(348.2 80.1% 52.7%);
    --i2c-color-rose-500: hsl(350.4 94.8% 57.5%);
    --i2c-color-rose-600: hsl(351.2 100% 58.1%);
    --i2c-color-rose-700: hsl(352.3 100% 78.1%);
    --i2c-color-rose-800: hsl(352 100% 86.2%);
    --i2c-color-rose-900: hsl(354.5 100% 90.7%);
    --i2c-color-rose-950: hsl(353.3 100% 95.7%);

    --i2c-color-primary-50: var(--i2c-color-sky-50);
    --i2c-color-primary-100: var(--i2c-color-sky-100);
    --i2c-color-primary-200: var(--i2c-color-sky-200);
    --i2c-color-primary-300: var(--i2c-color-sky-300);
    --i2c-color-primary-400: var(--i2c-color-sky-400);
    --i2c-color-primary-500: var(--i2c-color-sky-500);
    --i2c-color-primary-600: var(--i2c-color-sky-600);
    --i2c-color-primary-700: var(--i2c-color-sky-700);
    --i2c-color-primary-800: var(--i2c-color-sky-800);
    --i2c-color-primary-900: var(--i2c-color-sky-900);
    --i2c-color-primary-950: var(--i2c-color-sky-950);

    --i2c-color-success-50: var(--i2c-color-green-50);
    --i2c-color-success-100: var(--i2c-color-green-100);
    --i2c-color-success-200: var(--i2c-color-green-200);
    --i2c-color-success-300: var(--i2c-color-green-300);
    --i2c-color-success-400: var(--i2c-color-green-400);
    --i2c-color-success-500: var(--i2c-color-green-500);
    --i2c-color-success-600: var(--i2c-color-green-600);
    --i2c-color-success-700: var(--i2c-color-green-700);
    --i2c-color-success-800: var(--i2c-color-green-800);
    --i2c-color-success-900: var(--i2c-color-green-900);
    --i2c-color-success-950: var(--i2c-color-green-950);

    --i2c-color-warning-50: var(--i2c-color-amber-50);
    --i2c-color-warning-100: var(--i2c-color-amber-100);
    --i2c-color-warning-200: var(--i2c-color-amber-200);
    --i2c-color-warning-300: var(--i2c-color-amber-300);
    --i2c-color-warning-400: var(--i2c-color-amber-400);
    --i2c-color-warning-500: var(--i2c-color-amber-500);
    --i2c-color-warning-600: var(--i2c-color-amber-600);
    --i2c-color-warning-700: var(--i2c-color-amber-700);
    --i2c-color-warning-800: var(--i2c-color-amber-800);
    --i2c-color-warning-900: var(--i2c-color-amber-900);
    --i2c-color-warning-950: var(--i2c-color-amber-950);

    --i2c-color-danger-50: var(--i2c-color-red-50);
    --i2c-color-danger-100: var(--i2c-color-red-100);
    --i2c-color-danger-200: var(--i2c-color-red-200);
    --i2c-color-danger-300: var(--i2c-color-red-300);
    --i2c-color-danger-400: var(--i2c-color-red-400);
    --i2c-color-danger-500: var(--i2c-color-red-500);
    --i2c-color-danger-600: var(--i2c-color-red-600);
    --i2c-color-danger-700: var(--i2c-color-red-700);
    --i2c-color-danger-800: var(--i2c-color-red-800);
    --i2c-color-danger-900: var(--i2c-color-red-900);
    --i2c-color-danger-950: var(--i2c-color-red-950);

    --i2c-color-neutral-50: var(--i2c-color-gray-50);
    --i2c-color-neutral-100: var(--i2c-color-gray-100);
    --i2c-color-neutral-200: var(--i2c-color-gray-200);
    --i2c-color-neutral-300: var(--i2c-color-gray-300);
    --i2c-color-neutral-400: var(--i2c-color-gray-400);
    --i2c-color-neutral-500: var(--i2c-color-gray-500);
    --i2c-color-neutral-600: var(--i2c-color-gray-600);
    --i2c-color-neutral-700: var(--i2c-color-gray-700);
    --i2c-color-neutral-800: var(--i2c-color-gray-800);
    --i2c-color-neutral-900: var(--i2c-color-gray-900);
    --i2c-color-neutral-950: var(--i2c-color-gray-950);

    --i2c-color-neutral-0: hsl(240, 5.9%, 11%);
    --i2c-color-neutral-1000: hsl(0, 0%, 100%);

    --i2c-border-radius-small: 0.125rem;
    --i2c-border-radius-medium: 0.25rem;
    --i2c-border-radius-large: 0.5rem;
    --i2c-border-radius-x-large: 1rem;

    --i2c-border-radius-circle: 50%;
    --i2c-border-radius-pill: 9999px;

    --i2c-shadow-x-small: 0 1px 2px rgb(0 0 0 / 18%);
    --i2c-shadow-small: 0 1px 2px rgb(0 0 0 / 24%);
    --i2c-shadow-medium: 0 2px 4px rgb(0 0 0 / 24%);
    --i2c-shadow-large: 0 2px 8px rgb(0 0 0 / 24%);
    --i2c-shadow-x-large: 0 4px 16px rgb(0 0 0 / 24%);

    --i2c-spacing-0-5: 0.125rem;
    --i2c-spacing-1: 0.25rem;
    --i2c-spacing-1-5: 0.35rem;
    --i2c-spacing-2: 0.5rem;
    --i2c-spacing-2-5: 0.625rem;
    --i2c-spacing-3: 0.75rem;
    --i2c-spacing-3-5: 0.875rem;
    --i2c-spacing-4: 1rem;
    --i2c-spacing-4-5: 1.125rem;
    --i2c-spacing-5: 1.25rem;
    --i2c-spacing-5-5: 1.375rem;
    --i2c-spacing-6: 1.5;
    --i2c-spacing-7: 1.75rem;
    --i2c-spacing-8: 2rem;
    --i2c-spacing-9: 2.25rem;
    --i2c-spacing-10: 2.5rem;
    --i2c-spacing-11: 2.75rem;
    --i2c-spacing-12: 3rem;
    --i2c-spacing-13: 3.25rem;
    --i2c-spacing-14: 3.5rem;
    --i2c-spacing-15: 3.75rem;
    --i2c-spacing-16: 4rem;
    --i2c-spacing-17: 4.25rem;
    --i2c-spacing-18: 4.5rem;
    --i2c-spacing-19: 4.75rem;
    --i2c-spacing-20: 5rem;

    --i2c-spacing-3x-small: 0.125rem;
    --i2c-spacing-2x-small: 0.25rem;
    --i2c-spacing-x-small: 0.5rem;
    --i2c-spacing-small: 0.75rem;
    --i2c-spacing-medium: 1rem;
    --i2c-spacing-large: 1.25rem;
    --i2c-spacing-x-large: 1.75rem;
    --i2c-spacing-2x-large: 2.25rem;
    --i2c-spacing-3x-large: 3rem;
    --i2c-spacing-4x-large: 4.5rem;

    --i2c-transition-x-slow: 1000ms;
    --i2c-transition-slow: 500ms;
    --i2c-transition-medium: 250ms;
    --i2c-transition-fast: 150ms;
    --i2c-transition-x-fast: 50ms;

    --i2c-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo,
      monospace;
    --i2c-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --i2c-font-serif: Georgia, "Times New Roman", serif;

    --i2c-font-size-2x-small: 0.625rem;
    --i2c-font-size-x-small: 0.75rem;
    --i2c-font-size-small: 0.875rem;
    --i2c-font-size-medium: 1rem;
    --i2c-font-size-large: 1.25rem;
    --i2c-font-size-x-large: 1.5rem;
    --i2c-font-size-2x-large: 2.25rem;
    --i2c-font-size-3x-large: 3rem;
    --i2c-font-size-4x-large: 4.5rem;

    --i2c-font-weight-light: 300;
    --i2c-font-weight-normal: 400;
    --i2c-font-weight-semibold: 500;
    --i2c-font-weight-bold: 700;

    --i2c-letter-spacing-denser: -0.03em;
    --i2c-letter-spacing-dense: -0.015em;
    --i2c-letter-spacing-normal: normal;
    --i2c-letter-spacing-loose: 0.075em;
    --i2c-letter-spacing-looser: 0.15em;

    --i2c-line-height-denser: 1;
    --i2c-line-height-dense: 1.4;
    --i2c-line-height-normal: 1.8;
    --i2c-line-height-loose: 2.2;
    --i2c-line-height-looser: 2.6;

    --i2c-focus-ring-color: var(--i2c-color-primary-700);
    --i2c-focus-ring-style: solid;
    --i2c-focus-ring-width: 3px;
    --i2c-focus-ring: var(--i2c-focus-ring-style) var(--i2c-focus-ring-width)
      var(--i2c-focus-ring-color);
    --i2c-focus-ring-offset: 1px;

    --i2c-button-font-size-small: var(--i2c-font-size-small);
    --i2c-button-font-size-medium: var(--i2c-font-size-small);
    --i2c-button-font-size-large: var(--i2c-font-size-medium);
    --i2c-button-font-size-x-large: var(--i2c-font-size-large);

    --i2c-input-height-small: 2rem;
    --i2c-input-height-medium: 2.75rem;
    --i2c-input-height-large: 3.125rem;
    --i2c-input-height-x-large: 3.5rem;

    --i2c-input-background-color: var(--i2c-color-neutral-0);
    --i2c-input-background-color-hover: var(--i2c-input-background-color);
    --i2c-input-background-color-focus: var(--i2c-input-background-color);
    --i2c-input-background-color-disabled: var(--i2c-color-neutral-100);
    --i2c-input-border-color: var(--i2c-color-neutral-300);
    --i2c-input-border-color-hover: var(--i2c-color-neutral-400);
    --i2c-input-border-color-focus: var(--i2c-color-primary-500);
    --i2c-input-border-color-disabled: var(--i2c-color-neutral-300);
    --i2c-input-border-width: 1px;

    --i2c-input-border-radius-small: var(--i2c-border-radius-medium);
    --i2c-input-border-radius-medium: var(--i2c-border-radius-medium);
    --i2c-input-border-radius-large: var(--i2c-border-radius-medium);

    --i2c-input-font-family: var(--i2c-font-sans);
    --i2c-input-font-weight: var(--i2c-font-weight-normal);
    --i2c-input-font-size-small: var(--i2c-font-size-small);
    --i2c-input-font-size-medium: var(--i2c-font-size-medium);
    --i2c-input-font-size-large: var(--i2c-font-size-large);
    --i2c-input-letter-spacing: var(--i2c-letter-spacing-normal);

    --i2c-input-color: var(--i2c-color-neutral-700);
    --i2c-input-color-hover: var(--i2c-color-neutral-700);
    --i2c-input-color-focus: var(--i2c-color-neutral-700);
    --i2c-input-color-disabled: var(--i2c-color-neutral-900);
    --i2c-input-icon-color: var(--i2c-color-neutral-500);
    --i2c-input-icon-color-hover: var(--i2c-color-neutral-600);
    --i2c-input-icon-color-focus: var(--i2c-color-neutral-600);
    --i2c-input-placeholder-color: var(--i2c-color-neutral-500);
    --i2c-input-placeholder-color-disabled: var(--i2c-color-neutral-600);
    --i2c-input-spacing-small: var(--i2c-spacing-small);
    --i2c-input-spacing-medium: var(--i2c-spacing-medium);
    --i2c-input-spacing-large: var(--i2c-spacing-large);

    --i2c-input-filled-background-color: var(--i2c-color-neutral-100);
    --i2c-input-filled-background-color-hover: var(--i2c-color-neutral-100);
    --i2c-input-filled-background-color-focus: var(--i2c-color-neutral-100);
    --i2c-input-filled-background-color-disabled: var(--i2c-color-neutral-100);
    --i2c-input-filled-color: var(--i2c-color-neutral-800);
    --i2c-input-filled-color-hover: var(--i2c-color-neutral-800);
    --i2c-input-filled-color-focus: var(--i2c-color-neutral-700);
    --i2c-input-filled-color-disabled: var(--i2c-color-neutral-800);

    --i2c-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
    --i2c-input-focus-ring-offset: 0;

    --i2c-input-label-font-size-small: var(--i2c-font-size-small);
    --i2c-input-label-font-size-medium: var(--i2c-font-size-medium);
    --i2c-input-label-font-size-large: var(--i2c-font-size-large);

    --i2c-input-label-color: inherit;

    --i2c-input-help-text-font-size-small: var(--i2c-font-size-x-small);
    --i2c-input-help-text-font-size-medium: var(--i2c-font-size-small);
    --i2c-input-help-text-font-size-large: var(--i2c-font-size-medium);

    --i2c-input-help-text-color: var(--i2c-color-neutral-500);

    --i2c-toggle-size: 1rem;

    --i2c-overlay-background-color: hsl(0 0% 0% / 43%);

    --i2c-panel-background-color: var(--i2c-color-neutral-50);
    --i2c-panel-border-color: var(--i2c-color-neutral-200);
    --i2c-panel-border-width: 1px;

    --i2c-tooltip-border-radius: var(--i2c-border-radius-medium);
    --i2c-tooltip-background-color: var(--i2c-color-neutral-800);
    --i2c-tooltip-color: var(--i2c-color-neutral-0);
    --i2c-tooltip-font-family: var(--i2c-font-sans);
    --i2c-tooltip-font-weight: var(--i2c-font-weight-normal);
    --i2c-tooltip-font-size: var(--i2c-font-size-small);
    --i2c-tooltip-line-height: var(--i2c-line-height-dense);
    --i2c-tooltip-padding: var(--i2c-spacing-2x-small)
      var(--i2c-spacing-x-small);
    --i2c-tooltip-arrow-size: 4px;

    --i2c-z-index-drawer: 700;
    --i2c-z-index-dialog: 800;
    --i2c-z-index-dropdown: 900;
    --i2c-z-index-toast: 950;
    --i2c-z-index-tooltip: 1000;
  }

  .i2c-scroll-lock {
    overflow: hidden !important;
  }

  .i2c-toast-stack {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    z-index: var(--i2c-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .i2c-toast-stack i2c-alert {
    --box-shadow: var(--i2c-shadow-large);
    margin: var(--i2c-spacing-medium);
  }
`;