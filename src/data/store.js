import {createStore,combineReducers} from 'redux';

const self=this;
//reducer
const allPost=(state=[{
    title:"TÍTULO",
    body:"Contenido del post"
}],action)=>{
    var nuevoEstado=Object.assign({},state);
    switch (action.type) {
        case 'DATA_LOADED':
            //nuevoEstado modificación
            return nuevoEstado;
        default:
            break;
    }   
};

//combina los reducer y lo mete en un gran objeto
const reducer=combineReducers({
    allPost: self.allPost
});

const store=createStore(reducer);

export default store;