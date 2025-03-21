// import { EllipsisOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
// import { Col, Dropdown, Row } from 'antd';
// import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
// import type { RangePickerProps } from 'antd/es/date-picker/generatePicker/interface';
// import type { RadioChangeEvent } from 'antd/es/radio';
// import type dayjs from 'dayjs';
import type { FC } from 'react';
import { Suspense } from 'react';
import IntroduceRow from './components/IntroduceRow';
// import OfflineData from './components/OfflineData';
import PageLoading from './components/PageLoading';
// import ProportionSales from './components/ProportionSales';
// import type { TimeType } from './components/SalesCard';
// import SalesCard from './components/SalesCard';
// import TopSearch from './components/TopSearch';
// import useStyles from './style.style';
// import { getTimeDistance } from './utils/utils';
import { statManagerControllerIntroduceData } from '@/services/swagger/manageStat';
// type RangePickerValue = RangePickerProps<dayjs.Dayjs>['value'];
const Analysis: FC<API.IntroduceResponse> = () => {
  // const { styles } = useStyles();
  // const [currentTabKey, setCurrentTabKey] = useState<string>('');
  // const [rangePickerValue, setRangePickerValue] = useState<RangePickerValue>(
  //   getTimeDistance('year'),
  // );
  const { loading, data } = useRequest(statManagerControllerIntroduceData);
  // const selectDate = (type: TimeType) => {
  //   setRangePickerValue(getTimeDistance(type));
  // };
  // const handleRangePickerChange = (value: RangePickerValue) => {
  //   setRangePickerValue(value);
  // };
  // const isActive = (type: TimeType) => {
  //   if (!rangePickerValue) {
  //     return '';
  //   }
  //   const value = getTimeDistance(type);
  //   if (!value) {
  //     return '';
  //   }
  //   if (!rangePickerValue[0] || !rangePickerValue[1]) {
  //     return '';
  //   }
  //   if (
  //     rangePickerValue[0].isSame(value[0] as dayjs.Dayjs, 'day') &&
  //     rangePickerValue[1].isSame(value[1] as dayjs.Dayjs, 'day')
  //   ) {
  //     return styles.currentDate;
  //   }
  //   return '';
  // };
  // const handleTabChange = (key: string) => {
  //   setCurrentTabKey(key);
  // };
  // const activeKey = currentTabKey || (data?.offlineData[0] && data?.offlineData[0].name) || '';
  return (
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} introduceData={data as API.IntroduceResponse} />
        </Suspense>

        {/* <Suspense fallback={null}>
          <SalesCard
            rangePickerValue={rangePickerValue}
            salesData={data?.salesData || []}
            isActive={isActive}
            handleRangePickerChange={handleRangePickerChange}
            loading={loading}
            selectDate={selectDate}
          />
        </Suspense>

        <Suspense fallback={null}>
          <OfflineData
            activeKey={activeKey}
            loading={loading}
            offlineData={data?.offlineData || []}
            offlineChartData={data?.offlineChartData || []}
            handleTabChange={handleTabChange}
          />
        </Suspense> */}
      </>
    </GridContent>
  );
};
export default Analysis;
