import Toolbar from '../components/toolbar'
import Login from '../components/login'
import axios from 'axios'
import Link from 'next/link'


function Home(props) {
  return (
    <div>
      <Toolbar title="Homepage" />
      <h1>TTTTT</h1>
      <p>kjojoijoijooijo</p>
      {
        props.articles.map(article => {
          return (
            <div>
              <Link href={`/article/${article._id}`}>{ article.title }</Link>
            </div>
          )
        })
      }
    </div>    
  )
}

Home.getInitialProps = ({ req }) => {
  return axios.get('http://localhost:3000/api/article').then(res => {
    return {
      articles: res.data.data
    }
  })
}

export default Home