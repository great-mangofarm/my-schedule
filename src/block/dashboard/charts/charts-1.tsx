import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

export default function Charts1() {
  const getThemeColor = (variable: string, fallback: string) => {
    if (typeof window === 'undefined') return fallback;
    const value = getComputedStyle(document.documentElement).getPropertyValue(
      variable,
    );
    return value ? value.trim() : fallback;
  };

  const primary500 = getThemeColor('--color-primary-500', '#3758f9');
  const primary300 = getThemeColor('--color-primary-300', '#91aeff');
  const white100 = getThemeColor('--color-white-100', '#ffffff');
  const text100 = getThemeColor('--color-text-100', '#6b7280');
  const base100 = getThemeColor('--color-chart-line', '#E5E7EB');

  const options: ApexOptions = {
    legend: {
      show: false, // Hide legend
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: [primary500, primary300], // Define line colors
    chart: {
      fontFamily: 'DM Sans, sans-serif',
      height: 310,
      type: 'line', // Set the chart type to 'line'
      toolbar: {
        show: false, // Hide chart toolbar
      },
    },
    stroke: {
      curve: 'straight', // Define the line style (straight, smooth, or step)
      width: [2, 2], // Line width for each dataset
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0, // Size of the marker points
      strokeColors: white100, // Marker border color
      strokeWidth: 2,
      hover: {
        size: 6, // Marker size on hover
      },
    },
    grid: {
      borderColor: base100,
      xaxis: {
        lines: {
          show: false, // Hide grid lines on x-axis
        },
      },
      yaxis: {
        lines: {
          show: true, // Show grid lines on y-axis
        },
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    tooltip: {
      enabled: true, // Enable tooltip
      x: {
        format: 'dd MMM yyyy', // Format for x-axis tooltip
      },
    },
    xaxis: {
      type: 'category', // Category-based x-axis
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
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      tooltip: {
        enabled: false, // Disable tooltip for x-axis points
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
        text: '', // Remove y-axis title
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
          Line Chart 1
        </h3>
        <div className="p-4 sm:p-6">
          <Chart options={options} series={series} type="area" height={310} />
        </div>
      </div>
    </div>
  );
}
