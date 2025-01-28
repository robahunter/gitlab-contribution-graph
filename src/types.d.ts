declare module 'react-calendar-heatmap' {
    import { ComponentType } from 'react';
    interface HeatmapProps {
      startDate: Date;
      endDate: Date;
      values: Array<{ date: string; count: number }>;
      classForValue: (value: { date: string; count: number }) => string;
      showWeekdayLabels?: boolean;
      tooltipDataAttrs?: (value: { date: string; count: number }) => object;
    }
    const CalendarHeatmap: ComponentType<HeatmapProps>;
    export default CalendarHeatmap;
  }
  
  declare module 'global' {
    interface Global {
      window: Window;
    }
  }