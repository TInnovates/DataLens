<template>
  <section v-if="kpiData" class="dashboard">
    <div class="kpi-row">
      <div class="kpi-card kpi-card--teal">
        <h2>Avg. Contract Value</h2>
        <ApexChart type="line" height="60" :options="miniLineOptions" :series="miniLineSeries" />
        <div class="kpi-value">1890</div>
      </div>
      <div class="kpi-card kpi-card--teal">
        <h2>Lead Response Time</h2>
        <ApexChart type="line" height="60" :options="miniLineOptions" :series="miniLineSeries" />
        <div class="kpi-value">1090</div>
      </div>
      <div class="kpi-card kpi-card--orange">
        <h2>Sales Cycle Length</h2>
        <ApexChart type="line" height="60" :options="miniLineOptions" :series="miniLineSeries" />
        <div class="kpi-value">11.46k</div>
      </div>
      <div class="kpi-card kpi-card--orange">
        <h2>Sales KPI</h2>
        <ApexChart type="radialBar" height="100" :options="gaugeOptions" :series="gaugeSeries" />
        <div class="kpi-value">263</div>
      </div>
    </div>
    <div class="chart-row">
      <div class="chart-card chart-card--wide">
        <h2>Avg. Contract Value</h2>
        <ApexChart type="bar" height="220" :options="barOptions" :series="barSeries" />
      </div>
      <div class="chart-card chart-card--table">
        <h2>Top 5 Channels</h2>
        <table class="data-table">
          <thead>
            <tr><th>Order Date</th><th>Country</th><th>Units Sold</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in topChannels" :key="row.date">
              <td>{{ row.date }}</td>
              <td>{{ row.country }}</td>
              <td>{{ row.units }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="chart-row">
      <div class="chart-card chart-card--pie">
        <h2>Item Type</h2>
        <ApexChart type="pie" height="320" :options="pieOptions" :series="pieSeries" />
      </div>
      <div class="chart-card">
        <h2>Sales Activity</h2>
        <ApexChart type="scatter" height="180" :options="scatterOptions" :series="scatterSeries" />
      </div>
      <div class="chart-card">
        <h2>Top Deals</h2>
        <ApexChart type="bar" height="180" :options="dealBarOptions" :series="dealBarSeries" />
      </div>
    </div>
  </section>

  <section v-else class="dashboard">
    <h1>Lade KPIs ...</h1>
  </section>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ApexChart from 'vue3-apexcharts';
// Register ApexChart as a local component
defineExpose({ components: { ApexChart } });

const kpiData = ref<{ revenue: number; visitors:number; conversion: number } | null >(null)



// Chart-Daten (werden nach API-Call gesetzt)
// Mini-Line für KPI-Karten
const miniLineOptions = {
  chart: { sparkline: { enabled: true } },
  stroke: { curve: 'smooth' },
  tooltip: { enabled: false },
};
const miniLineSeries = ref([{ data: [] }]);

// Gauge für Sales KPI
const gaugeOptions = {
  chart: { type: 'radialBar' },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: { size: '70%' },
      dataLabels: { value: { fontSize: '22px' } }
    }
  },
  labels: ['Sales KPI']
};
const gaugeSeries = [263];

// Bar für Contract Value
const barOptions = {
  chart: { type: 'bar' },
  xaxis: { categories: ['Middle East', 'North America', 'Asia', 'Africa', 'Europe', 'Australia'] },
  title: { text: 'Avg. Contract Value' }
};
const barSeries = ref([{ name: 'Contract Value', data: [] }]);

// Pie für Item Type
const pieOptions = {
  labels: ['Type A', 'Type B', 'Type C', 'Type D'],
  title: {
    text: 'Item Type',
    style: {
      fontSize: '22px',
      fontWeight: 700,
      color: '#222',
    }
  },
  legend: {
    show: true,
    position: 'bottom',
    fontSize: '20px',
    fontWeight: 600,
    markers: {
      width: 20,
      height: 20,
      radius: 10
    },
    itemMargin: {
      horizontal: 16,
      vertical: 12
    }
  },
  colors: ['#00bfae', '#ff9800', '#ff5c8d', '#7c4dff'],
  dataLabels: {
    style: {
      fontSize: '20px',
      fontWeight: 700,
      colors: ['#222']
    }
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['#fff']
  },
  plotOptions: {
    pie: {
      expandOnClick: true
    }
  }
};
const pieSeries = ref([]);

// Scatter für Sales Activity
const scatterOptions = {
  chart: { type: 'scatter' },
  xaxis: { tickAmount: 10 },
  yaxis: { tickAmount: 7 },
  title: { text: 'Sales Activity' }
};
const scatterSeries = ref([{ name: 'Activity', data: [] }]);

// Bar für Top Deals
const dealBarOptions = {
  chart: { type: 'bar' },
  xaxis: { categories: ['Deal 1', 'Deal 2', 'Deal 3'] },
  title: { text: 'Top Deals' }
};
const dealBarSeries = ref([{ name: 'Deals', data: [] }]);

// Tabelle für Top Channels
interface TopChannel {
  date: string;
  country: string;
  units: number;
}
const topChannels = ref<TopChannel[]>([]);

// Beispiel: Backend-API kann hier weiterhin genutzt werden, um die Daten dynamisch zu laden
onMounted(async () => {
  try {
    // KORREKTUR: Basis-URL verwenden, nicht mit /api/kpi in der Umgebungsvariable!
    const apiUrl = import.meta.env.VITE_API_URL || 'http://datalens-backend-service:5000';
    const response = await fetch(`${apiUrl}/api/kpi`);
    const data = await response.json();
    if (data && data.kpis) {
      // KPI-Karten
      miniLineSeries.value = [{ data: data.kpis.contractValue }];
      // Bar Chart
      barSeries.value = [{ name: 'Contract Value', data: data.bar.data }];
      // Pie Chart
      pieSeries.value = data.pie;
      // Scatter Chart
      scatterSeries.value = data.scatter;
      // Deals Chart
      dealBarSeries.value = [{ name: 'Deals', data: data.deals }];
      // Tabelle
      topChannels.value = data.topChannels;
      // KPI-Objekt für v-if
      kpiData.value = { revenue: data.kpis.contractValue[0], visitors: data.kpis.leadResponse[0], conversion: 9.9 };
    } else {
      kpiData.value = null;
    }
  } catch (error) {
    console.error('Fehler beim Laden der KPIs:', error);
    kpiData.value = null;
  }
});
</script>

<style scoped>
.chart-card--pie {
  min-width: unset;
  max-width: unset;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.chart-card .apexcharts-canvas {
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s;
}
.chart-card .apexcharts-canvas:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
}
.dashboard {
  margin: 0 auto;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
  padding-bottom: 2rem;
  padding-top: 1rem;
}
.kpi-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin: 2rem 0 2rem 0;
  width: 100%;
}
.kpi-card {
  background: #f8f8f8;
  border-radius: 12px;
  padding: 1.5rem 1rem 1rem 1rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  min-height: 160px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;
}
.kpi-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.13);
}
.kpi-card--teal {
  background: #009999;
  color: #fff;
}
.kpi-card--orange {
  background: #ff9900;
  color: #fff;
}
.kpi-value {
  font-size: 2.6rem;
  font-weight: bold;
  margin-top: 0.5rem;
  letter-spacing: 1px;
}
.chart-card--wide {
  flex: 2 1 400px;
}
.chart-card--table {
  flex: 1 1 300px;
  overflow-x: auto;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}
.data-table th, .data-table td {
  border: 1px solid #eee;
  padding: 0.4rem 0.6rem;
  text-align: left;
}
.chart-row {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 0 0 2rem 0;
  width: 100%;
  flex: 1;
}
.chart-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.2rem 1rem 1rem 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  flex: 1 1 0;
  min-width: 220px;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.chart-placeholder {
  flex: 1;
  background: #f2f2f2;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 1.2rem;
  margin: 0;
}
@media (max-width: 900px) {
  .dashboard {
    width: 100%;
    min-height: calc(100vh - 56px);
    padding: 1rem;
  }
  .kpi-row, .chart-row {
    flex-direction: column;
    gap: 0;
    margin: 0;
    width: 100%;
  }
  .chart-card {
    min-width: unset;
    height: 200px;
  }
}
</style>
