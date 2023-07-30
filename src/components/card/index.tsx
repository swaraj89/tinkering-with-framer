import { Action } from '../../types/Action'
import { Category } from '../../types/Category'

interface Props {
  title: string
  image: string
  categories: Array<Category>
  description: string
  actions: Array<Action>
}

const Card = ({ actions, categories, description, image, title }: Props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tags">
          {categories.map((category) => category.title)}
        </div>
      </div>
    </div>
  )
}

export default Card
