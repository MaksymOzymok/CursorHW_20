import React from 'react';
import ReactDOM from 'react-dom';
import Post from "./post/post";
import {createStore} from "redux"
import {connect,Provider} from "react-redux"
import AddForm from "./add-form/add-form";


const initialState = {
    data: [
        {
            userData: {
                name: "Anakin skywalker",
                photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
                nickname: "@dart_vader",
                verified: true
            },
            contentData: {
                text: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
                image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
                date: 'Apr  ' + new Date().getDate()
            },
            postData: {
                id : 1,
                comments: 482,
                sharing: 146,
                likes: 887,
                liked : false,
                commented:false,
                shared : false
            }
        }
    ]

};

const Action_Change_First_Name = 'Action_Change_First_Name';
const Action_Change_Last_Name = 'Action_Change_Last_Name';
const Action_Add_Person = 'Action_Add_Person';
const Action_Set_Like = 'Action_Set_Like';
const Action_Set_Comment = 'Action_Set_Comment';
const Action_Set_Share = 'Action_Set_Share';

const actionSetLike = {
  type : Action_Set_Like,
  payload: null
};
const actionSetComment = {
    type : Action_Set_Comment,
    payload: null
};
const actionSetShare = {
    type : Action_Set_Share,
    payload: null
};
const actionAddPerson = {
  type : Action_Add_Person,
  payload: null
};
const setLike = (id)=>{
  return{
      type : Action_Set_Like,
      payload : id
  }
};
const setShare = (id)=>{
    return{
        type : Action_Set_Share,
        payload : id
    }
};
const setComment = (id)=>{
    return{
        type : Action_Set_Comment,
        payload : id
    }
};
const addPerson = (obj)=>{
    console.log(obj);
    return{
        type : Action_Add_Person,
        payload: obj
    }
};

const rootReducer = (state=initialState,action)=>{
  let user = state.data[action.payload-1];
   switch (action.type) {
       case Action_Add_Person:
           //console.log(state);
           state.data.push(action.payload);
           return {...state};
       case Action_Set_Like:
           if(user.postData.liked)
           {
               user.postData.likes -=1;
               user.postData.liked = !user.postData.liked;
           } else {
               user.postData.likes += 1;
               user.postData.liked = !user.postData.liked;
           }
           return {...state};

       case Action_Set_Comment:
           if(user.postData.commented)
           {
               user.postData.comments -=1;
               user.postData.commented = !user.postData.commented;
           } else {
               user.postData.comments +=1;
               user.postData.commented = !user.postData.commented;
           }
           return {...state};

       case Action_Set_Share:
           if(user.postData.shared)
           {
               user.postData.sharing -=1;
               user.postData.shared = !user.postData.shared;
           } else {
               user.postData.sharing +=1;
               user.postData.shared = !user.postData.shared;
           }
           return {...state};

   }
    return {...state};

};
const Store = createStore(rootReducer);
class MainComponent extends React.Component{
    getData = (obj)=>{
        this.props.dispatch(addPerson(obj));
    };
    like = (id)=> {
        this.props.dispatch(setLike(id));
    };
    comment = (id)=>{
        this.props.dispatch(setComment(id));
    };
    share = (id)=>{
        this.props.dispatch(setShare(id));
    };
    render() {
        let id = 0;
        console.log(this.props);
        //const dispatch = this.props.dispatch;
       const elements = this.props.data.map(value=>{
           id ++;
           return (<Post key = {id}
                         id = {id}
                         data={value}
                         likeFunc = {this.like}
                         commentFunc = {this.comment}
                         shareFunc = {this.share}
           />)
       });
        //console.log(elements);
        return(
            <div>
                <AddForm getData = {this.getData}/>
                {elements}
            </div>
        )
    }
}

const mapStateProps = (state)=>{
    let res = [];
    state.data.forEach(value=>{
       return res.push(value);
    });
    return {data:res};
};

const WrappedMainComponent = connect(mapStateProps)(MainComponent);

ReactDOM.render(<Provider store={Store}>
    <WrappedMainComponent/>
</Provider>,document.getElementById('root'));

