import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

export default function DataStats2() {
  const data = [10, 15, 8, 20, 16, 25, 18];

  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      padding: {
        top: 0,
        right: 20,
        bottom: 0,
        left: 0,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 1.5,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.6,
        opacityTo: 0,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ['#7b4cf8'],
  };

  const series = [
    {
      name: 'Fund',
      data,
    },
  ];

  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 max-w-[346px] rounded-2xl p-5">
        <div className="mb-7 flex items-center">
          <img
            src="https://cdn-tailgrids.b-cdn.net/3.0/dashboard/data-stats/data-stat-02/paypal.svg"
            className="h-11 w-11 shrink-0 rounded-full"
            alt="paypal"
          />
          <div className="ml-3">
            <h3 className="text-title-50 text-base leading-6 font-semibold">
              Paypal
            </h3>
            <p className="text-text-100 text-xs leading-4">
              Fast, Secure Payments
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="w-1/2">
            <h4 className="text-title-50 text-2xl font-semibold">$1,232.00</h4>
            <div className="inline-flex items-center gap-1.5">
              <p className="text-text-100 text-xs">Fund rised</p>
              <span className="text-text-success-50 text-xs">+20%</span>
            </div>
          </div>

          <div className="w-1/2">
            <Chart options={options} series={series} type="area" height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
