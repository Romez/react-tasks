import {GET_RUBRIC, GET_RUBRICS_LIST, GET_RUBRIC_ARTICLES} from './actions';


const initialState = {
    rubrics: [],
    rubric: {},
    rubricArticles: [],
    error: ''
};

function rubricReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RUBRIC:
            return Object.assign({}, state, {
                rubric: action.rubric
            });

        case GET_RUBRICS_LIST:
            return Object.assign({}, state, {
                rubrics: action.rubrics
            });
        case GET_RUBRIC_ARTICLES:
            return Object.assign({}, state, {
                rubricArticles: action.rubricArticles
            });

        default:
            return state;
    }
}

const RubricReducer = {
    rubrics: rubricReducer
};

export default RubricReducer;