import { Article } from 'utils/types';
import slugify from 'slugify';
import getLocalizedDate from 'utils/getLocalizedDate';
type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();

  const formattedTime = getLocalizedDate(article.publishedDate);

  return (
    <a href={`/blog/${slug}`}>
      <div className="flex flex-col overflow-hidden cursor-pointer group ">
        <div className="relative">
          <div className="absolute">
            {article?.categories?.map(category => (
              <div
                key={category}
                className="relative shadow z-[2] inline-flex items-center px-6 py-1.5 text-xs font-medium mb-2 mr-2 text-gray-600 bg-gray-100 rounded left-3 top-3 dark:bg-gray-800 dark:text-gray-100"
              >
                {category}
              </div>
            ))}
          </div>
          <div className=" filter contrast-[0.9]">
            <img
              className="object-cover w-full transition rounded-lg aspect-video group-hover:opacity-90 bg-gray-50 "
              src={article.coverImage}
              alt={'article cover'}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1 py-4 rounded-b-lg bg-white dark:bg-slate-900">
          <div className="flex-1">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{article.title}</p>
            <p className="mt-3 text-base font-normal  text-gray-500 line-clamp-2 dark:text-gray-300">{article.summary}</p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex mb-2 space-x-1 text-sm text-gray-400 dark:text-gray-400">
              {article.categories.map(category => (
                <div key={category}>
                  <span className="font-semibold text-gray-600 dark:text-gray-300">{category} </span>
                  <span aria-hidden="true">&middot;</span>
                </div>
              ))}
              <time dateTime={formattedTime}>{formattedTime}</time>
            </div>
            {/* <p className="text-sm font-medium text-gray-900">{article?.author?.name}</p> */}
          </div>
        </div>
      </div>
    </a>
  );
}
