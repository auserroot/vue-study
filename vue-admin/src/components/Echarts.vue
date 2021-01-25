<!-- echarts -->
<template>
  <div id="main"></div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "Echarts",
  components: {},
  // props: ["date", "customer", "order", "admin"],
  data() {
    //这里存放数据
    return {
      date: [
        "2021-01-19",
        "2021-01-20",
        "2021-01-21",
        "2021-01-22",
        "2021-01-23",
        "2021-01-24",
        "2021-01-25",
      ],
      customer: [0, 7, 20, 38, 25, 4, 1],
      order: [10, 7, 30, 32, 25, 4, 1],
      admin: [12, 16, 20, 30, 10, 2, 0],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    echarts() {
      var chartDom = document.getElementById("main");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "趋势图",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["新增注册用户", "新增订单", "新增管理员"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.date,
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 70,
          axisLine: {
            show: true,
          },
        },
        series: [
          {
            name: "新增注册用户",
            type: "line",
            stack: "总量",
            data: this.customer,
          },
          {
            name: "新增订单",
            type: "line",
            stack: "总量",
            data: this.order,
          },
          {
            name: "新增管理员",
            type: "line",
            stack: "总量",
            data: this.admin,
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.echarts();
  },
};
</script>
<style lang='less' scoped>
#main {
  width: 100%;
  height: 100%;
}
</style>