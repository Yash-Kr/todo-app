
import { CATEGORY } from "../config/constants"
import _ from "lodash"

export const createTodoItem = ({title='', description='', category=CATEGORY.TODO}) => {
    return {
        id : _.uniqueId(title+'#'),
        title,
        description,
        category
    }
}