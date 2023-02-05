import { Article } from "utils/types";
import ArticleCard from "./ArticleCard";

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <div className="grid gap-10 lg:gap-12 sm:grid-cols-2">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
      \
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Өмнөх
      </a>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Дараах
      </a>
    </div>
  );
}
