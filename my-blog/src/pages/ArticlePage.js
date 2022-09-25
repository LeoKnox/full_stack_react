// localhost:3000/articles/one
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
    const { articleId }= useParams();

    return (
        <h1>Article Page for id: {articleId}</h1>
    )
}

export default ArticlePage;