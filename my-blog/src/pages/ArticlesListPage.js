import { Link } from 'react-router-dom';
import articles from './article-content.js';

const ArticlesListPage = () => {
    return (
        <>
        <h1>Articles List Page</h1>
        {articles.map(article => (
            <>
            <Link key={article.name} to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
            </Link>
            <p>{article.content[0].substring(0, 150)}...</p>
            </>
        ))}
        </>
    )
}

export default ArticlesListPage;