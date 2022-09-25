// localhost:3000/articles/one
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
    const params = useParams();
    const { articleId } = params;

    return (
        <h1>Article Page</h1>
    )
}

export default ArticlePage;