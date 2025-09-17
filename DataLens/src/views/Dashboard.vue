<template>
  <section v-if="kpiData" class="dashboard">
    <h1>Dashboard</h1>
    <div class="kpi-row">
      <div  class="kpi-card">
        <h2>Umsatz</h2>
        <p>{{ kpiData.revenue }}</p>
      </div>
      <div class="kpi-card">
        <h2>Besucher</h2>
        <p>{{ kpiData.visitors }}</p>
      </div>
      <div class="kpi-card">
        <h2>Conversion Rate</h2>
        <p>{{ kpiData.conversion }}</p>
      </div>
    </div>
    <div class="chart-row">
      <div class="chart-card">
        <h2>Umsatzverlauf</h2>
        <!-- Hier kann später ein Chart eingebunden werden -->
        <div class="chart-placeholder">[Chart]</div>
      </div>
      <div class="chart-card">
        <h2>Besuchertrend</h2>
        <div class="chart-placeholder">[Chart]</div>
      </div>
    </div>
  </section>

  <section v-else class="dashboard">
    <h1>Lade KPIs ...</h1>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const kpiData = ref<{ revenue: number; visitors:number; conversion: number } | null >(null)

onMounted(async () => {
  try {
    const response = await fetch('/mock-kpi.json');
    kpiData.value = await response.json();
  } catch (error) {
    console.error('Fehler beim Laden der KPIs:', error);
  }
});

</script>

<style scoped>
.dashboard {
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 56px); /* Höhe des Headers abziehen */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.kpi-row {
  display: flex;
  gap: 0;
  margin: 0;
  flex-wrap: wrap;
  width: 100%;
}
.kpi-card {
  background: #f8f8f8;
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  flex: 1 1 200px;
  text-align: center;
  min-width: 150px;
  margin: 0;
}
.chart-row {
  display: flex;
  gap: 0;
  flex-wrap: wrap;
  margin: 0;
  width: 100%;
  flex: 1;
}
.chart-card {
  background: #fff;
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  flex: 1 1 0;
  min-width: 200px;
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
