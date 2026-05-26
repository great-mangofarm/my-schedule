import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

export default function Charts5() {
  const getThemeColor = (variable: string, fallback: string) => {
    if (typeof window === 'undefined') return fallback;
    const value = getComputedStyle(document.documentElement).getPropertyValue(
      variable,
    );
    return value ? value.trim() : fallback;
  };

  const primary600 = getThemeColor('--color-primary-600', '#2237ee');
  const primary500 = getThemeColor('--color-primary-500', '#3758f9');
  const primary300 = getThemeColor('--color-primary-300', '#91aeff');
  const primary200 = getThemeColor('--color-primary-200', '#becdff');
  const text100 = getThemeColor('--color-text-100', '#6b7280');
  const base100 = getThemeColor('--color-chart-line', '#E5E7EB');

  const series = [
    {
      name: 'Ad Impressions',
      data: [44, 55, 41, 67, 22, 43, 55, 41],
    },
    {
      name: 'Website Session',
      data: [13, 23, 20, 8, 13, 27, 13, 23],
    },
    {
      name: 'App Download',
      data: [11, 17, 15, 15, 21, 14, 18, 20],
    },
    {
      name: 'New Users',
      data: [21, 7, 25, 13, 22, 8, 18, 20],
    },
  ];
  const options: ApexOptions = {
    colors: [primary600, primary500, primary300, primary200],
    chart: {
      fontFamily: 'DM Sans, sans-serif',
      type: 'bar',
      stacked: true,
      height: 315,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '39%',
        borderRadius: 10,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: '12px',
          colors: text100,
        },
      },
    },

    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          colors: text100,
        },
      },
      title: {
        text: undefined, // Hide the title by setting text to undefined
      },
    },
    grid: {
      borderColor: base100,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (val: number) => val.toString(), // Simplified formatter
      },
    },
  };
  return (
    <div className="bg-background-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="border-base-200 mx-auto w-full max-w-[1000px] rounded-lg border">
        <h3 className="border-base-200 text-title-50 border-b px-6 py-4 font-medium">
          Bar Chart 2
        </h3>
        <div className="px-3">
          <Chart options={options} series={series} type="bar" height={315} />
        </div>
      </div>
    </div>
  );
}
