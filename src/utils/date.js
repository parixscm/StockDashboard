/**
 * 파일 역할: date 관련 유틸리티 함수 모음
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.04.07.
 */

// Convert milliseconds to seconds (API가 unix timestamp 사용하기 때문)
export const convertDateToUnixTimestamp = date => {
  return ~~(date.getTime() / 1000);
};

export const convertUnixTimestampToDate = unixTimestamp => {
  const milliseconds = unixTimestamp * 1000;
  return new Date(milliseconds).toLocaleDateString();
};

// Get start date or end date
export const createDate = (date, days, weeks, months, years) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * weeks);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);

  return newDate;
};
