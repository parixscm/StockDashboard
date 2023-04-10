# **Jason's 미국 주식 대시보드 📈💰**

👉🏻 https://jason-stock.vercel.app/

<br/>

## **🎯 개발 목표**

- 시계열 자료를 시각적으로 표현하고자 했습니다.
  - 차트 구현을 위한 **Rechart** 라이브러리를 사용했습니다.
- Search Logic에 대해 고민하고 이를 구현하고자 했습니다.
  - Finnhub.io API를 이용했습니다.

<br/>

## **🕹 사용한 기술**

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

<br />

## **👨🏻‍🏫 Advanced Feature**

- Search Logic
  - 첫 번째 구현) 검색어를 입력한 뒤 버튼을 클릭하는 이벤트 혹은 엔터키를 누르는 이벤트가 발생했을 때만 검색을 하는 식으로 구현했습니다. 하지만 이 구현 방식에는 검색 과정 중 **대시보드와 유저 사이에 상호작용이 활발하게 이뤄지지 않는다는 문제점**이 보였습니다.
  - 두 번째 구현) 문제를 해결하기 위해 검색어를 입력할 때마다 검색이 발생하는 식으로 코드를 수정했습니다. 하지만 이 구현 방식에도 **서버로 요청을 자주 보내는 문제점**이 보였습니다. 이를 해결하기 위해 **검색어가 특정 길이 이상인 경우에만 검색이 발생하는 방식**으로 코드를 재수정했습니다.

<br />

## **💻 코드**

### **두 번째 방식으로 구현한 Search Logic 코드**

> searchSymbol(): input 값을 포함하는 결과 데이터를 fetch하는 유틸리티 함수

```
const [isLoading, setIsLoading] = useState(false);
const [input, setInput] = useState("");
const [bestMatches, setBestMatches] = useState([]);

useEffect(() => {
  const updateBestMatches = async () => {
    try {
      if (input) {
        setIsLoading(true);
        const searchResults = await searchSymbols(input);
        const results = searchResults.result.filter(
          item => !item.displaySymbol.includes(".")
        );
        setBestMatches(results);
        setIsLoading(false);
      }
    } catch (error) {
      setBestMatches([]);
      console.error(error);
    }
  };
  if (input.length <= 1) setBestMatches([]);
  else updateBestMatches();
}, [input]);
```

<br />

## **🍀 개선사항**

1. 현재는 입력한 stock ticker로만 검색이 발생합니다. 회사명을 입력해도 차트와 종목 정보를 보여주는 식으로 코드를 수정할 계획입니다.
2. axios 라이브러리를 설치하고 request cancellation 기능을 사용해 볼 계획입니다. 검색 결과를 불러오는 도중에 새로운 검색어를 입력하게 되면 기존에 불러오는 검색 결과는 필요 없어지기 때문입니다.
3. 검색어를 입력하고 0.3~0.4초 뒤에 검색이 발생하는 방식도 고려해볼 예정입니다.
