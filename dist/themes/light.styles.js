import { css } from "lit";

export default css`
  :root,
  :host,
  .i2c-theme-light {
    color-scheme: light;

    --i2c-color-gray-50: hsl(0 0% 97.5%);
    --i2c-color-gray-100: hsl(240 4.8% 95.9%);
    --i2c-color-gray-200: hsl(240 5.9% 90%);
    --i2c-color-gray-300: hsl(240 4.9% 83.9%);
    --i2c-color-gray-400: hsl(240 5% 64.9%);
    --i2c-color-gray-500: hsl(240 3.8% 46.1%);
    --i2c-color-gray-600: hsl(240 5.2% 33.9%);
    --i2c-color-gray-700: hsl(240 5.3% 26.1%);
    --i2c-color-gray-800: hsl(240 3.7% 15.9%);
    --i2c-color-gray-900: hsl(240 5.9% 10%);
    --i2c-color-gray-950: hsl(240 7.3% 8%);

    --i2c-color-red-50: hsl(0 85.7% 97.3%);
    --i2c-color-red-100: hsl(0 93.3% 94.1%);
    --i2c-color-red-200: hsl(0 96.3% 89.4%);
    --i2c-color-red-300: hsl(0 93.5% 81.8%);
    --i2c-color-red-400: hsl(0 90.6% 70.8%);
    --i2c-color-red-500: hsl(0 84.2% 60.2%);
    --i2c-color-red-600: hsl(0 72.2% 50.6%);
    --i2c-color-red-700: hsl(0 73.7% 41.8%);
    --i2c-color-red-800: hsl(0 70% 35.3%);
    --i2c-color-red-900: hsl(0 62.8% 30.6%);
    --i2c-color-red-950: hsl(0 60% 19.6%);

    --i2c-color-orange-50: hsl(33.3 100% 96.5%);
    --i2c-color-orange-100: hsl(34.3 100% 91.8%);
    --i2c-color-orange-200: hsl(32.1 97.7% 83.1%);
    --i2c-color-orange-300: hsl(30.7 97.2% 72.4%);
    --i2c-color-orange-400: hsl(27 96% 61%);
    --i2c-color-orange-500: hsl(24.6 95% 53.1%);
    --i2c-color-orange-600: hsl(20.5 90.2% 48.2%);
    --i2c-color-orange-700: hsl(17.5 88.3% 40.4%);
    --i2c-color-orange-800: hsl(15 79.1% 33.7%);
    --i2c-color-orange-900: hsl(15.3 74.6% 27.8%);
    --i2c-color-orange-950: hsl(15.2 69.1% 19%);

    --i2c-color-amber-50: hsl(48 100% 96.1%);
    --i2c-color-amber-100: hsl(48 96.5% 88.8%);
    --i2c-color-amber-200: hsl(48 96.6% 76.7%);
    --i2c-color-amber-300: hsl(45.9 96.7% 64.5%);
    --i2c-color-amber-400: hsl(43.3 96.4% 56.3%);
    --i2c-color-amber-500: hsl(37.7 92.1% 50.2%);
    --i2c-color-amber-600: hsl(32.1 94.6% 43.7%);
    --i2c-color-amber-700: hsl(26 90.5% 37.1%);
    --i2c-color-amber-800: hsl(22.7 82.5% 31.4%);
    --i2c-color-amber-900: hsl(21.7 77.8% 26.5%);
    --i2c-color-amber-950: hsl(22.9 74.1% 16.7%);

    --i2c-color-yellow-50: hsl(54.5 91.7% 95.3%);
    --i2c-color-yellow-100: hsl(54.9 96.7% 88%);
    --i2c-color-yellow-200: hsl(52.8 98.3% 76.9%);
    --i2c-color-yellow-300: hsl(50.4 97.8% 63.5%);
    --i2c-color-yellow-400: hsl(47.9 95.8% 53.1%);
    --i2c-color-yellow-500: hsl(45.4 93.4% 47.5%);
    --i2c-color-yellow-600: hsl(40.6 96.1% 40.4%);
    --i2c-color-yellow-700: hsl(35.5 91.7% 32.9%);
    --i2c-color-yellow-800: hsl(31.8 81% 28.8%);
    --i2c-color-yellow-900: hsl(28.4 72.5% 25.7%);
    --i2c-color-yellow-950: hsl(33.1 69% 13.9%);

    --i2c-color-lime-50: hsl(78.3 92% 95.1%);
    --i2c-color-lime-100: hsl(79.6 89.1% 89.2%);
    --i2c-color-lime-200: hsl(80.9 88.5% 79.6%);
    --i2c-color-lime-300: hsl(82 84.5% 67.1%);
    --i2c-color-lime-400: hsl(82.7 78% 55.5%);
    --i2c-color-lime-500: hsl(83.7 80.5% 44.3%);
    --i2c-color-lime-600: hsl(84.8 85.2% 34.5%);
    --i2c-color-lime-700: hsl(85.9 78.4% 27.3%);
    --i2c-color-lime-800: hsl(86.3 69% 22.7%);
    --i2c-color-lime-900: hsl(87.6 61.2% 20.2%);
    --i2c-color-lime-950: hsl(86.5 60.6% 13.9%);

    --i2c-color-green-50: hsl(138.5 76.5% 96.7%);
    --i2c-color-green-100: hsl(140.6 84.2% 92.5%);
    --i2c-color-green-200: hsl(141 78.9% 85.1%);
    --i2c-color-green-300: hsl(141.7 76.6% 73.1%);
    --i2c-color-green-400: hsl(141.9 69.2% 58%);
    --i2c-color-green-500: hsl(142.1 70.6% 45.3%);
    --i2c-color-green-600: hsl(142.1 76.2% 36.3%);
    --i2c-color-green-700: hsl(142.4 71.8% 29.2%);
    --i2c-color-green-800: hsl(142.8 64.2% 24.1%);
    --i2c-color-green-900: hsl(143.8 61.2% 20.2%);
    --i2c-color-green-950: hsl(144.3 60.7% 12%);

    --i2c-color-emerald-50: hsl(151.8 81% 95.9%);
    --i2c-color-emerald-100: hsl(149.3 80.4% 90%);
    --i2c-color-emerald-200: hsl(152.4 76% 80.4%);
    --i2c-color-emerald-300: hsl(156.2 71.6% 66.9%);
    --i2c-color-emerald-400: hsl(158.1 64.4% 51.6%);
    --i2c-color-emerald-500: hsl(160.1 84.1% 39.4%);
    --i2c-color-emerald-600: hsl(161.4 93.5% 30.4%);
    --i2c-color-emerald-700: hsl(162.9 93.5% 24.3%);
    --i2c-color-emerald-800: hsl(163.1 88.1% 19.8%);
    --i2c-color-emerald-900: hsl(164.2 85.7% 16.5%);
    --i2c-color-emerald-950: hsl(164.3 87.5% 9.4%);

    --i2c-color-teal-50: hsl(166.2 76.5% 96.7%);
    --i2c-color-teal-100: hsl(167.2 85.5% 89.2%);
    --i2c-color-teal-200: hsl(168.4 83.8% 78.2%);
    --i2c-color-teal-300: hsl(170.6 76.9% 64.3%);
    --i2c-color-teal-400: hsl(172.5 66% 50.4%);
    --i2c-color-teal-500: hsl(173.4 80.4% 40%);
    --i2c-color-teal-600: hsl(174.7 83.9% 31.6%);
    --i2c-color-teal-700: hsl(175.3 77.4% 26.1%);
    --i2c-color-teal-800: hsl(176.1 69.4% 21.8%);
    --i2c-color-teal-900: hsl(175.9 60.8% 19%);
    --i2c-color-teal-950: hsl(176.5 58.6% 11.4%);

    --i2c-color-cyan-50: hsl(183.2 100% 96.3%);
    --i2c-color-cyan-100: hsl(185.1 95.9% 90.4%);
    --i2c-color-cyan-200: hsl(186.2 93.5% 81.8%);
    --i2c-color-cyan-300: hsl(187 92.4% 69%);
    --i2c-color-cyan-400: hsl(187.9 85.7% 53.3%);
    --i2c-color-cyan-500: hsl(188.7 94.5% 42.7%);
    --i2c-color-cyan-600: hsl(191.6 91.4% 36.5%);
    --i2c-color-cyan-700: hsl(192.9 82.3% 31%);
    --i2c-color-cyan-800: hsl(194.4 69.6% 27.1%);
    --i2c-color-cyan-900: hsl(196.4 63.6% 23.7%);
    --i2c-color-cyan-950: hsl(196.8 61% 16.1%);

    --i2c-color-sky-50: hsl(204 100% 97.1%);
    --i2c-color-sky-100: hsl(204 93.8% 93.7%);
    --i2c-color-sky-200: hsl(200.6 94.4% 86.1%);
    --i2c-color-sky-300: hsl(199.4 95.5% 73.9%);
    --i2c-color-sky-400: hsl(198.4 93.2% 59.6%);
    --i2c-color-sky-500: hsl(198.6 88.7% 48.4%);
    --i2c-color-sky-600: hsl(200.4 98% 39.4%);
    --i2c-color-sky-700: hsl(201.3 96.3% 32.2%);
    --i2c-color-sky-800: hsl(201 90% 27.5%);
    --i2c-color-sky-900: hsl(202 80.3% 23.9%);
    --i2c-color-sky-950: hsl(202.3 73.8% 16.5%);

    --i2c-color-blue-50: hsl(213.8 100% 96.9%);
    --i2c-color-blue-100: hsl(214.3 94.6% 92.7%);
    --i2c-color-blue-200: hsl(213.3 96.9% 87.3%);
    --i2c-color-blue-300: hsl(211.7 96.4% 78.4%);
    --i2c-color-blue-400: hsl(213.1 93.9% 67.8%);
    --i2c-color-blue-500: hsl(217.2 91.2% 59.8%);
    --i2c-color-blue-600: hsl(221.2 83.2% 53.3%);
    --i2c-color-blue-700: hsl(224.3 76.3% 48%);
    --i2c-color-blue-800: hsl(225.9 70.7% 40.2%);
    --i2c-color-blue-900: hsl(224.4 64.3% 32.9%);
    --i2c-color-blue-950: hsl(226.2 55.3% 18.4%);

    --i2c-color-indigo-50: hsl(225.9 100% 96.7%);
    --i2c-color-indigo-100: hsl(226.5 100% 93.9%);
    --i2c-color-indigo-200: hsl(228 96.5% 88.8%);
    --i2c-color-indigo-300: hsl(229.7 93.5% 81.8%);
    --i2c-color-indigo-400: hsl(234.5 89.5% 73.9%);
    --i2c-color-indigo-500: hsl(238.7 83.5% 66.7%);
    --i2c-color-indigo-600: hsl(243.4 75.4% 58.6%);
    --i2c-color-indigo-700: hsl(244.5 57.9% 50.6%);
    --i2c-color-indigo-800: hsl(243.7 54.5% 41.4%);
    --i2c-color-indigo-900: hsl(242.2 47.4% 34.3%);
    --i2c-color-indigo-950: hsl(243.5 43.6% 22.9%);

    --i2c-color-violet-50: hsl(250 100% 97.6%);
    --i2c-color-violet-100: hsl(251.4 91.3% 95.5%);
    --i2c-color-violet-200: hsl(250.5 95.2% 91.8%);
    --i2c-color-violet-300: hsl(252.5 94.7% 85.1%);
    --i2c-color-violet-400: hsl(255.1 91.7% 76.3%);
    --i2c-color-violet-500: hsl(258.3 89.5% 66.3%);
    --i2c-color-violet-600: hsl(262.1 83.3% 57.8%);
    --i2c-color-violet-700: hsl(263.4 70% 50.4%);
    --i2c-color-violet-800: hsl(263.4 69.3% 42.2%);
    --i2c-color-violet-900: hsl(263.5 67.4% 34.9%);
    --i2c-color-violet-950: hsl(265.1 61.5% 21.4%);

    --i2c-color-purple-50: hsl(270 100% 98%);
    --i2c-color-purple-100: hsl(268.7 100% 95.5%);
    --i2c-color-purple-200: hsl(268.6 100% 91.8%);
    --i2c-color-purple-300: hsl(269.2 97.4% 85.1%);
    --i2c-color-purple-400: hsl(270 95.2% 75.3%);
    --i2c-color-purple-500: hsl(270.7 91% 65.1%);
    --i2c-color-purple-600: hsl(271.5 81.3% 55.9%);
    --i2c-color-purple-700: hsl(272.1 71.7% 47.1%);
    --i2c-color-purple-800: hsl(272.9 67.2% 39.4%);
    --i2c-color-purple-900: hsl(273.6 65.6% 32%);
    --i2c-color-purple-950: hsl(276 59.5% 16.5%);

    --i2c-color-fuchsia-50: hsl(289.1 100% 97.8%);
    --i2c-color-fuchsia-100: hsl(287 100% 95.5%);
    --i2c-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
    --i2c-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
    --i2c-color-fuchsia-400: hsl(292 91.4% 72.5%);
    --i2c-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
    --i2c-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
    --i2c-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
    --i2c-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
    --i2c-color-fuchsia-900: hsl(296.7 63.6% 28%);
    --i2c-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

    --i2c-color-pink-50: hsl(327.3 73.3% 97.1%);
    --i2c-color-pink-100: hsl(325.7 77.8% 94.7%);
    --i2c-color-pink-200: hsl(325.9 84.6% 89.8%);
    --i2c-color-pink-300: hsl(327.4 87.1% 81.8%);
    --i2c-color-pink-400: hsl(328.6 85.5% 70.2%);
    --i2c-color-pink-500: hsl(330.4 81.2% 60.4%);
    --i2c-color-pink-600: hsl(333.3 71.4% 50.6%);
    --i2c-color-pink-700: hsl(335.1 77.6% 42%);
    --i2c-color-pink-800: hsl(335.8 74.4% 35.3%);
    --i2c-color-pink-900: hsl(335.9 69% 30.4%);
    --i2c-color-pink-950: hsl(336.2 65.4% 15.9%);

    --i2c-color-rose-50: hsl(355.7 100% 97.3%);
    --i2c-color-rose-100: hsl(355.6 100% 94.7%);
    --i2c-color-rose-200: hsl(352.7 96.1% 90%);
    --i2c-color-rose-300: hsl(352.6 95.7% 81.8%);
    --i2c-color-rose-400: hsl(351.3 94.5% 71.4%);
    --i2c-color-rose-500: hsl(349.7 89.2% 60.2%);
    --i2c-color-rose-600: hsl(346.8 77.2% 49.8%);
    --i2c-color-rose-700: hsl(345.3 82.7% 40.8%);
    --i2c-color-rose-800: hsl(343.4 79.7% 34.7%);
    --i2c-color-rose-900: hsl(341.5 75.5% 30.4%);
    --i2c-color-rose-950: hsl(341.3 70.1% 17.1%);

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

    --i2c-color-neutral-0: hsl(0, 0%, 100%);
    --i2c-color-neutral-1000: hsl(0, 0%, 0%);

    --i2c-border-radius-small: 0.1875rem;
    --i2c-border-radius-medium: 0.25rem;
    --i2c-border-radius-large: 0.5rem;
    --i2c-border-radius-x-large: 1rem;

    --i2c-border-radius-circle: 50%;
    --i2c-border-radius-pill: 9999px;

    --i2c-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
    --i2c-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
    --i2c-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
    --i2c-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
    --i2c-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

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

    --i2c-focus-ring-color: var(--i2c-color-primary-600);
    --i2c-focus-ring-style: solid;
    --i2c-focus-ring-width: 3px;
    --i2c-focus-ring: var(--i2c-focus-ring-style) var(--i2c-focus-ring-width)
      var(--i2c-focus-ring-color);
    --i2c-focus-ring-offset: 1px;

    --i2c-button-font-size-small: var(--i2c-font-size-x-small);
    --i2c-button-font-size-medium: var(--i2c-font-size-small);
    --i2c-button-font-size-large: var(--i2c-font-size-medium);

    --i2c-input-height-small: 1.875rem;
    --i2c-input-height-medium: 2.5rem;
    --i2c-input-height-large: 3.125rem;

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

    --i2c-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

    --i2c-panel-background-color: var(--i2c-color-neutral-0);
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
