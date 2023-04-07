/**
 * 파일 역할: (차트 기간 별) startDate 계산을 위한 변수 설정
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

export const chartConfig = {
  "1D": { days: 1, weeks: 0, months: 0, years: 0, resolution: "1" },
  "1W": { days: 0, weeks: 1, months: 0, years: 0, resolution: "15" },
  "1M": { days: 0, weeks: 0, months: 1, years: 0, resolution: "60" },
  "1Y": { days: 0, weeks: 0, months: 0, years: 1, resolution: "D" },
};
