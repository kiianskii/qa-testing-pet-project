import React from "react";
import { useSelector } from "react-redux";
import { selectResults } from "../../redux/quiz/selectors";

const ResultsPage = () => {
  const results = useSelector(selectResults);

  return (
    <div>
      <ul>
        <li>{results?.result}</li>
        <li>{results?.mainMessage}</li>
        <li>{results?.secondaryMessage}</li>
      </ul>
    </div>
  );
};

export default ResultsPage;
