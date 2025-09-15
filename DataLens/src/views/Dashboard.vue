<template>
  <section class="dashboard">
    <h1>Dashboard</h1>
    <div class="kpi-row">
      <div class="kpi-card">
        <h2>Umsatz</h2>
        <p>€ 12.340</p>
      </div>
      <div class="kpi-card">
        <h2>Besucher</h2>
        <p>1.234</p>
      </div>
      <div class="kpi-card">
        <h2>Conversion Rate</h2>
        <p>4,5%</p>
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
</template>

<script setup lang="ts">
// Hier kannst du später Props, State oder API-Calls ergänzen
</script>

<style scoped>
.dashboard {
  padding: 0;
  margin: 0;
  width: 100vw;
  box-sizing: border-box;
}
.kpi-row {
  display: flex;
  gap: 0;
  margin: 0;
  flex-wrap: wrap;
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
}
.chart-card {
  background: #fff;
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  flex: 1 1 300px;
  min-width: 200px;
  margin: 0;
}
.chart-placeholder {
  height: 200px;
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
    width: 100vw;
    padding: 0;
  }
  .kpi-row, .chart-row {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
}
</style>
