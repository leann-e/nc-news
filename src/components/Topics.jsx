import { useEffect, useState } from "react";
import { fetchAllTopics } from "../api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchAllTopics().then((topics) => {
      setTopics(topics.topics);
    });
  }, []);

  return (
    <>
      <section>
        <h2 className="topic_title">Topics</h2>
        <nav className="topic_name--list">
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`} key={topic.slug}>
                  {topic.slug}
                </Link>
              </li>
            );
          })}
        </nav>
      </section>
    </>
  );
};
export default Topics;
