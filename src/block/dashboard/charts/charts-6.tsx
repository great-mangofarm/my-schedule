import type { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

export default function Charts6() {
  const getThemeColor = (variable: string, fallback: string) => {
    if (typeof window === 'undefined') return fallback;
    const value = getComputedStyle(document.documentElement).getPropertyValue(
      variable,
    );
    return value ? value.trim() : fallback;
  };

  const primary500 = getThemeColor('--color-primary-500', '#3758f9');
  const primary300 = getThemeColor('--color-primary-300', '#91aeff');
  const primary100 = getThemeColor('--color-primary-100', '#dae2ff');

  // ApexCharts configuration
  const options: ApexOptions = {
    colors: [primary500, primary300, primary100],
    labels: ['Affiliate', 'Direct', 'Adsense'],
    chart: {
      fontFamily: 'DM Sans, sans-serif',
      type: 'donut',
      width: 280,
      height: 280,
    },
    stroke: {
      show: false,
      width: 4, // Creates a gap between the series
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
              offsetY: 0,
              color: 'var(--color-text-50)',
              fontSize: '12px',
              fontWeight: 'normal',
              formatter: () => 'Total 3.5K',
            },
            value: {
              show: true,
              offsetY: 10,
              color: 'var(--color-text-100)',
              fontSize: '14px',
              formatter: () => 'Used of 1.1K',
            },
            total: {
              show: true,
              label: 'Total',
              color: 'var(--color-title-50)',
              fontSize: '20px',
              fontWeight: 'bold',
            },
          },
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'darken',
        },
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
            width: 280,
            height: 280,
          },
        },
      },
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 240,
            height: 240,
          },
        },
      },
    ],
  };

  const series = [900, 700, 850];

  return (
    <div className="bg-background-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="border-base-200 mx-auto w-full max-w-[540px] rounded-lg border">
        <h3 className="border-base-200 text-title-50 border-b px-6 py-4 font-medium">
          Pie Chart 1
        </h3>
        <div className="mx-auto max-w-xs p-9">
          <Chart options={options} series={series} type="donut" height={280} />
          <ul className="flex justify-center gap-5 pt-6">
            <li>
              <span className="flex items-center gap-1.5">
                <span className="bg-primary-600 inline-block size-2.5 rounded-full"></span>
                <span className="text-text-50 text-sm">Desktop</span>
              </span>
            </li>
            <li>
              <span className="flex items-center gap-1.5">
                <span className="bg-primary-500 inline-block size-2.5 rounded-full"></span>
                <span className="text-text-50 text-sm">Mobile</span>
              </span>
            </li>
            <li>
              <span className="flex items-center gap-1.5">
                <span className="bg-primary-400 inline-block size-2.5 rounded-full"></span>
                <span className="text-text-50 text-sm">Tablet</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
