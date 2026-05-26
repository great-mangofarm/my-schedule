import type { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

export default function Charts2() {
  const getThemeColor = (variable: string, fallback: string) => {
    if (typeof window === 'undefined') return fallback;
    const value = getComputedStyle(document.documentElement).getPropertyValue(
      variable,
    );
    return value ? value.trim() : fallback;
  };

  const primary500 = getThemeColor('--color-primary-500', '#3758f9');
  const primary300 = getThemeColor('--color-primary-300', '#91aeff');
  const text100 = getThemeColor('--color-text-100', '#6b7280');
  const base100 = getThemeColor('--color-chart-line', '#E5E7EB');

  const options: ApexOptions = {
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: [primary500, primary300],
    chart: {
      fontFamily: 'DM Sans, sans-serif',
      height: 310,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'gradient', // Explicitly specify gradient type
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    stroke: {
      curve: 'smooth',
      width: [2, 2], // Correct width as an array of numbers
    },
    markers: {
      size: 0,
    },
    grid: {
      borderColor: base100,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    xaxis: {
      type: 'category', // Ensure proper type for categories
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false, // Correct usage for disabling tooltips
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
        text: '', // Ensure no text is displayed
        style: {
          fontSize: '0px',
        },
      },
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
    },
    {
      name: 'Revenue',
      data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
    },
  ];
  return (
    <div className="bg-background-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="border-base-200 mx-auto w-full max-w-[1000px] rounded-lg border">
        <h3 className="border-base-200 text-title-50 border-b px-6 py-4 font-medium">
          Line Chart 2
        </h3>
        <div className="px-3">
          <Chart options={options} series={series} type="area" height={310} />
        </div>
      </div>
    </div>
  );
}
