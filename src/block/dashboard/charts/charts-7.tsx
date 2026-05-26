import type { ApexOptions } from 'apexcharts';
import { useMemo } from 'react';
import Chart from 'react-apexcharts';

export default function Charts7() {
  const getThemeColor = (variable: string, fallback: string) => {
    if (typeof window === 'undefined') return fallback;
    const value = getComputedStyle(document.documentElement).getPropertyValue(
      variable,
    );
    return value ? value.trim() : fallback;
  };

  const violetIcon = getThemeColor(
    '--color-badge-violet-icon-color',
    '#8b5cf6',
  );
  const orangeIcon = getThemeColor(
    '--color-badge-orange-icon-color',
    '#f97316',
  );
  const warningIcon = getThemeColor(
    '--color-badge-warning-icon-color',
    '#f59e0b',
  );
  const successIcon = getThemeColor(
    '--color-badge-success-icon-color',
    '#22c55e',
  );
  const text100 = getThemeColor('--color-text-100', '#6b7280');
  const title50 = getThemeColor('--color-title-50', '#1d2939');

  const options: ApexOptions = useMemo(
    () => ({
      colors: [violetIcon, orangeIcon, warningIcon, successIcon],
      labels: ['Downloads', 'Apps', 'Documents', 'Media'],
      chart: {
        fontFamily: 'DM Sans, sans-serif',
        type: 'donut',
      },
      stroke: {
        show: false,
        width: 4,
        colors: ['transparent'], // Corrected to be an array
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            background: 'transparent',
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: -10,
                color: text100,
                fontSize: '14px',
                fontWeight: '500',
              },
              value: {
                show: true,
                offsetY: 0,
                color: text100,
                fontSize: '16px',
                fontWeight: '400',
                formatter: () => 'Used of 135 GB',
              },
              total: {
                show: true,
                label: 'Total 160 GB',
                color: title50,
                fontSize: '16px',
                fontWeight: 'bold',
              },
            },
          },
          expandOnClick: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: {
              width: 320,
            },
            legend: {
              itemMargin: {
                horizontal: 7,
                vertical: 5,
              },
              fontSize: '12px',
            },
          },
        },
      ],
    }),
    [violetIcon, orangeIcon, warningIcon, successIcon, text100, title50],
  );

  // Chart data series
  const series = [45, 65, 25, 25];

  return (
    <div className="bg-background-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="border-base-200 mx-auto w-full max-w-[540px] rounded-lg border">
        <h3 className="border-base-200 text-title-50 border-b px-6 py-4 font-medium">
          Pie Chart 2
        </h3>
        <div className="p-5 sm:p-9">
          <div className="mx-auto max-w-xs">
            <Chart
              options={options}
              series={series}
              type="donut"
              height={280}
            />
          </div>
          <ul className="space-y-3 pt-5">
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="bg-badge-success-icon-color inline-block size-2.5 rounded-full"></span>
                <span className="text-text-50 text-sm">Media</span>
              </span>
              <span className="text-text-100 text-sm">35GB</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="bg-badge-violet-icon-color inline-block size-2.5 rounded-full"></span>
                <span className="text-text-50 text-sm">Downloads</span>
              </span>
              <span className="text-text-100 text-sm">59GB</span>
            </li>{' '}
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="bg-badge-orange-icon-color inline-block size-2.5 rounded-full"></span>
                <span className="text-text-50 text-sm">Apps</span>
              </span>
              <span className="text-text-100 text-sm">37GB</span>
            </li>{' '}
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="bg-badge-warning-icon-color inline-block size-2.5 rounded-full"></span>
                <span className="text-text-50 text-sm">Documents</span>
              </span>
              <span className="text-text-100 text-sm">19GB</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
