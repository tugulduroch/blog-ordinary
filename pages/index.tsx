import { convertToArticleList, getAllArticles } from 'utils/notion';
import { Layout } from 'layouts/Layout';
import HeroHeader from 'components/HeroHeader';
import Container from 'components/Container';
import { useState } from 'react';
import ArticleList from 'components/ArticleList';
import { filterArticles } from 'utils/filterArticles';
import Category from 'components/Category';

export default function Index({ articles, categories }) {
  const [selectedTag, setSelectedTag] = useState<string>(null);
  const filteredArticles = filterArticles(articles, selectedTag);

  return (
    <Layout>
      <HeroHeader />
      <div className="flex flex-wrap justify-center gap-4 pt-8  dark:bg-slate-900 ">
        {categories.map(tag => (
          <Category
            tag={tag}
            key={tag}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        ))}
      </div>
      <Container>
        <div>
          <div className="my-8 text-3xl font-bold text-gray-900 dark:text-gray-100 ">
            {!selectedTag ? 'Сүүлд нийтэлсэн' : `${selectedTag} articles`}
          </div>
          <ArticleList articles={filteredArticles} />
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await getAllArticles(process.env.BLOG_DATABASE_ID);

  const { articles, categories } = convertToArticleList(data);

  return {
    props: {
      articles : JSON.parse(JSON.stringify(articles)),
      categories : JSON.parse(JSON.stringify(categories))
    },
    revalidate: 30
  };
};


