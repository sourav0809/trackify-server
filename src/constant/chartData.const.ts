import {
  ConversionHistoryData,
  MetricData,
  OrderDistributionData,
  OrderFulfillmentData,
  ProductPerFormanceData,
  ProductPerformanceStatics,
  ProductSalesCategoryData,
  RevenueChartData,
  SalesData,
  UserRegionChartData,
  InventoryLevelData,
  VisitorInsightData,
} from "../types/charts.types";

export const revenueChartData: RevenueChartData[] = [
  {
    day: "Monday",
    onlineSales: 14000,
    offlineSales: 12000,
  },
  {
    day: "Tuesday",
    onlineSales: 16000,
    offlineSales: 11000,
  },
  {
    day: "Wednesday",
    onlineSales: 6000,
    offlineSales: 22000,
  },
  {
    day: "Thursday",
    onlineSales: 15000,
    offlineSales: 6000,
  },
  {
    day: "Friday",
    onlineSales: 11000,
    offlineSales: 10000,
  },
  {
    day: "Saturday",
    onlineSales: 16000,
    offlineSales: 12000,
  },
  {
    day: "Sunday",
    onlineSales: 20000,
    offlineSales: 10000,
  },
];

export const metricsData: MetricData[] = [
  {
    id: 1,
    title: "Total Sales",
    value: "$1k",
    subtitle: "+8.7% from yesterday",
  },
  {
    id: 2,
    title: "Total Order",
    value: "300",
    subtitle: "+5.9% from yesterday",
  },
  {
    id: 3,
    title: "Product Sold",
    value: "5",
    subtitle: "+1.2% from yesterday",
  },
  {
    id: 4,
    title: "New User",
    value: "8",
    subtitle: "+0.5% from yesterday",
  },
];

export const userRegionChartData: UserRegionChartData[] = [
  {
    name: "India",
    value: 30146,
    percentage: 30.5,
  },
  {
    name: "United States",
    value: 24900,
    percentage: 52.4,
  },
  {
    name: "Canada",
    value: 12146,
    percentage: 25.5,
  },
];

export const productSalesCategoryData: ProductSalesCategoryData[] = [
  {
    category: "T-Shirts",
    currentMonth: 60,
    previousMonth: 70,
    target: 90,
  },
  {
    category: "Jeans",
    currentMonth: 55,
    previousMonth: 48,
    target: 86,
  },
  {
    category: "Jackets",
    currentMonth: 45,
    previousMonth: 20,
    target: 75,
  },
  {
    category: "Shoes",
    currentMonth: 48,
    previousMonth: 60,
    target: 72,
  },
  {
    category: "Accessories",
    currentMonth: 29,
    previousMonth: 39,
    target: 40,
  },
  {
    category: "Dresses",
    currentMonth: 48,
    previousMonth: 23,
    target: 69,
  },
];

export const productPerformanceData: ProductPerFormanceData[] = [
  {
    name: "Premium Denim Jeans",
    unitsSold: 1200,
    revenue: 89000,
    popularity: 85,
    category: "Bottoms",
  },
  {
    name: "Summer Dresses",
    unitsSold: 800,
    revenue: 64000,
    popularity: 75,
    category: "Dresses",
  },
  {
    name: "Designer Handbags",
    unitsSold: 400,
    revenue: 120000,
    popularity: 90,
    category: "Accessories",
  },
  {
    name: "Graphic T-Shirts",
    unitsSold: 2000,
    revenue: 40000,
    popularity: 65,
    category: "Tops",
  },
  {
    name: "Athletic Wear",
    unitsSold: 1500,
    revenue: 75000,
    popularity: 80,
    category: "Activewear",
  },
  {
    name: "Luxury Watches",
    unitsSold: 300,
    revenue: 150000,
    popularity: 95,
    category: "Jewelry",
  },
];

export const orderFulfillmentData: OrderFulfillmentData[] = [
  {
    month: "Jan",
    processingTime: 2.5,
    deliveryTime: 3.8,
    returnRate: 1.2,
  },
  {
    month: "Feb",
    processingTime: 2.2,
    deliveryTime: 3.5,
    returnRate: 1.4,
  },
  {
    month: "Mar",
    processingTime: 2.8,
    deliveryTime: 4.0,
    returnRate: 1.1,
  },
  {
    month: "Apr",
    processingTime: 2.3,
    deliveryTime: 3.6,
    returnRate: 1.3,
  },
  {
    month: "May",
    processingTime: 2.1,
    deliveryTime: 3.4,
    returnRate: 1.0,
  },
  {
    month: "Jun",
    processingTime: 2.4,
    deliveryTime: 3.7,
    returnRate: 1.2,
  },
];

export const conversionHistoryData: ConversionHistoryData[] = [
  {
    value: 12000,
    name: "Visitors",
  },
  {
    value: 8500,
    name: "Add to Cart",
  },
  {
    value: 5200,
    name: "Checkout",
  },
  {
    value: 4000,
    name: "Payment",
  },
  {
    value: 3200,
    name: "Purchase",
  },
];

export const productPerformanceStatistics: ProductPerformanceStatics[] = [
  {
    metric: "Sales Volume",
    currentMonth: 85,
    previousMonth: 78,
    target: 90,
  },
  {
    metric: "Customer Rating",
    currentMonth: 92,
    previousMonth: 88,
    target: 95,
  },
  {
    metric: "Return Rate",
    currentMonth: 15,
    previousMonth: 22,
    target: 10,
  },
  {
    metric: "Profit Margin",
    currentMonth: 68,
    previousMonth: 65,
    target: 75,
  },
  {
    metric: "Market Share",
    currentMonth: 45,
    previousMonth: 42,
    target: 50,
  },
  {
    metric: "Brand Awareness",
    currentMonth: 72,
    previousMonth: 69,
    target: 80,
  },
];

export const orderDistributionData: OrderDistributionData[] = [
  {
    category: "Dresses",
    delivered: 500,
    returned: 300,
    cancelled: 200,
    pending: 150,
  },
  {
    category: "T-Shirts",
    delivered: 450,
    returned: 250,
    cancelled: 180,
    pending: 100,
  },
  {
    category: "Jeans",
    delivered: 400,
    returned: 230,
    cancelled: 160,
    pending: 90,
  },
  {
    category: "Accessories",
    delivered: 350,
    returned: 200,
    cancelled: 130,
    pending: 80,
  },
  {
    category: "Shoes",
    delivered: 300,
    returned: 180,
    cancelled: 120,
    pending: 70,
  },
];

export const salesTrendsData: SalesData[] = [
  {
    month: "Jan",
    revenue: 85000,
    orders: 340,
    averageOrderValue: 250,
    conversionRate: 3.2,
    target: 80000,
  },
  {
    month: "Feb",
    revenue: 92000,
    orders: 368,
    averageOrderValue: 250,
    conversionRate: 3.5,
    target: 85000,
  },
  {
    month: "Mar",
    revenue: 78000,
    orders: 312,
    averageOrderValue: 250,
    conversionRate: 2.9,
    target: 90000,
  },
  {
    month: "Apr",
    revenue: 105000,
    orders: 420,
    averageOrderValue: 250,
    conversionRate: 4.1,
    target: 95000,
  },
  {
    month: "May",
    revenue: 118000,
    orders: 472,
    averageOrderValue: 250,
    conversionRate: 4.5,
    target: 100000,
  },
  {
    month: "Jun",
    revenue: 125000,
    orders: 500,
    averageOrderValue: 250,
    conversionRate: 4.8,
    target: 105000,
  },
  {
    month: "Jul",
    revenue: 132000,
    orders: 528,
    averageOrderValue: 250,
    conversionRate: 5.1,
    target: 110000,
  },
  {
    month: "Aug",
    revenue: 145000,
    orders: 580,
    averageOrderValue: 250,
    conversionRate: 5.4,
    target: 115000,
  },
];

export const inventoryLevelsData: InventoryLevelData[] = [
  {
    month: "Jan",
    currentStock: 850,
    reorderPoint: 500,
    safetyStock: 300,
  },
  {
    month: "Feb",
    currentStock: 720,
    reorderPoint: 500,
    safetyStock: 300,
  },
  {
    month: "Mar",
    currentStock: 620,
    reorderPoint: 500,
    safetyStock: 300,
  },
  {
    month: "Apr",
    currentStock: 580,
    reorderPoint: 500,
    safetyStock: 300,
  },
  {
    month: "May",
    currentStock: 780,
    reorderPoint: 500,
    safetyStock: 300,
  },
  {
    month: "Jun",
    currentStock: 920,
    reorderPoint: 500,
    safetyStock: 300,
  },
];

export const visitorInsightsData: VisitorInsightData[] = [
  {
    date: "Mon",
    totalVisitors: 2400,
    newVisitors: 1200,
    returningVisitors: 1200,
  },
  {
    date: "Tue",
    totalVisitors: 1398,
    newVisitors: 800,
    returningVisitors: 598,
  },
  {
    date: "Wed",
    totalVisitors: 3800,
    newVisitors: 2200,
    returningVisitors: 1600,
  },
  {
    date: "Thu",
    totalVisitors: 3908,
    newVisitors: 2000,
    returningVisitors: 1908,
  },
  {
    date: "Fri",
    totalVisitors: 4800,
    newVisitors: 2800,
    returningVisitors: 2000,
  },
  {
    date: "Sat",
    totalVisitors: 3800,
    newVisitors: 2400,
    returningVisitors: 1400,
  },
  {
    date: "Sun",
    totalVisitors: 4300,
    newVisitors: 2400,
    returningVisitors: 1900,
  },
];
