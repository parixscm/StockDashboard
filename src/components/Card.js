/**
 * 파일 역할: 카드 컴포넌트 (in 대시보드 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

function Card({ children }) {
  return (
    <div className="w-full h-full p-8 relative rounded-md bg-white border-2 border-neutral-200">
      {children}
    </div>
  );
}

export default Card;
